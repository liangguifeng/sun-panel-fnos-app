# Sun-Panel fnOS 应用

将 [Sun-Panel](https://github.com/hslr-s/sun-panel) 的 Web 前端与 Linux 服务端封装为飞牛 fnOS 应用。与旧项目 `rtp2httpd-fnos-app` 的网关接入不同，本应用使用独立 HTTP 端口；默认访问地址为 `http://<NAS 地址>:13002/`。

## 内容与运行方式

- `app/www/`：已构建的 Web 资源，由 Sun-Panel 服务端提供。
- `app/server/`：x86_64、aarch64 两种 Linux 服务端可执行文件。
- `cmd/main`：按 fnOS 架构选择服务端，实现 `start`、`stop`、`status` 与配置初始化。
- `wizard/install`、`wizard/config`、`wizard/uninstall`：收集端口和卸载数据处理方式。
- `app/ui/config`：桌面 URL 入口，端口引用向导中的 `wizard_port`。
- `config/privilege`：以应用专属账户运行。

运行工作目录为 fnOS 的 `${TRIM_PKGHOME}`。启动时将包内 Web 资源复制到持久的 `web` 目录，并保留 `web/custom`、`web/micro-apps`；`conf` 链接到 `${TRIM_PKGETC}`，`runtime` 链接到 `${TRIM_PKGVAR}`。Sun-Panel 因此在工作目录下看到 `./conf/conf.ini`，实际文件是 `${TRIM_PKGETC}/conf.ini`；同目录的 `conf.example.ini` 由当前版本程序生成和更新。`database` 和 `uploads` 位于 `${TRIM_PKGHOME}`，升级时不会被应用包资源覆盖。服务日志位于 `${TRIM_PKGVAR}/info.log`。

## 构建与安装

在 macOS 或 Linux 上执行：

```bash
./build.sh
```

脚本按系统架构下载官方 `fnpack 1.2.3` 到 `.fnpack/`，再构建 `.fpk`。通过 fnOS 应用中心手动安装生成的包。安装向导要求填写 HTTP 端口，默认 13002；首次启动后可从飞牛桌面或 `http://<NAS 地址>:<所填端口>/` 访问。

推送到 `master` 后，[GitHub Actions 发布流程](.github/workflows/release.yml)会重新打包。tag 与 Release 名称直接取 `manifest` 的 `version`：新版本创建新 Release；版本未变时，保留原 tag，仅替换同名 `.fpk` 资产。Release 资产因此可能比该 tag 指向的源码更新；需要让源码归档与二进制严格对应时，应递增 `manifest.version`。仓库若开启不可变 Release，已有版本的资产无法覆盖，工作流会报错。

首次安装时使用当前服务端的 `-config-reset` 生成配置（仅在 `conf.ini` 不存在时），再写入向导端口；若原配置端口为 3002，会先备份为 `conf.ini.port-3002.bak`。在应用设置中更改端口后，配置回调会更新 `conf.ini`，并在服务原先运行时重启服务；旧配置留在 `conf.ini.before-config.bak`。项目中不预置一份可能与 v2 二进制不匹配的 v1 `conf.ini`。此应用未接入 fnOS 统一网关，因此访问控制由 Sun-Panel 自身及 NAS 网络策略承担。发布前须在 x86_64 与 aarch64 真机上分别验证安装、登录、数据持久化、停止及升级。

## 维护

- 配置目录：fnOS 应用配置目录 `${TRIM_PKGETC}`，在工作目录中映射为 `conf`。
- 数据目录：`${TRIM_PKGHOME}/database`、`${TRIM_PKGHOME}/uploads`。
- 日志：`${TRIM_PKGVAR}/info.log`。
- 在应用设置中修改端口；勿仅手动修改 `conf.ini`，否则桌面入口可能与服务端端口不一致。
- 卸载向导默认保留数据；只有明确选择删除时，回调才清理应用私有配置、用户与运行数据。

开发规范参见 [飞牛应用开发文档](https://developer.fnnas.com/docs/guide/)；Sun-Panel 功能与版本信息以[上游项目](https://github.com/hslr-s/sun-panel)为准。
