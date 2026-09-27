# Sun-Panel fnOS 应用设计

## 运行结构

应用包包含 `app/www` 的 Web 资源、`app/server` 的双架构服务端，以及 fnOS 生命周期脚本。`cmd/main` 以 `${TRIM_PKGHOME}` 为工作目录，确保 Sun-Panel 的相对路径可用：`conf` 指向 `${TRIM_PKGETC}`，`runtime` 指向 `${TRIM_PKGVAR}`；数据库、上传文件和可写 Web 目录留在持久目录。

## 向导与生命周期

- `wizard/install` 收集 `wizard_port`，默认 13002；`install_init` 校验输入，`install_callback` 初始化配置。
- `wizard/config` 复用 `wizard_port`。`config_callback` 备份旧配置、修改 `[base].http_port`，只在服务原先运行时重启。
- `app/ui/config` 的端口引用 `${wizard_port}`，使桌面入口与向导端口一致。
- `wizard/uninstall` 默认保留数据。只有显式选择 `delete`，`uninstall_callback` 才会在校验路径属于本应用后删除配置、用户及运行数据。

服务端配置由当前二进制在缺失时通过 `-config-reset` 生成，而不将可能过期的 v1 配置模板放入包内。已有配置不会被重置；从默认 3002 迁移时保留备份。向导值在 Shell 中再次校验，不依赖前端表单作为唯一约束。

## 已知限制

本应用使用独立 HTTP 端口，未接入 fnOS 统一网关。端口占用或服务端自身错误可导致配置回调重启失败，此时保留 `conf.ini.before-config.bak` 供恢复。macOS 上的模拟测试与 `fnpack` 检查不等于 fnOS 真机验证；发布前需在 x86_64、aarch64 设备分别测试安装、配置变更和两种卸载选项。
