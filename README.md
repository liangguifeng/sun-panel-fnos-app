# sun-panel-fnos-app

Sun-Panel 是一个面向 NAS 和服务器的导航面板。本项目将其 Web 前端与 Linux 服务端封装为飞牛 fnOS 应用，安装后可通过飞牛桌面入口或独立 HTTP 端口访问。

## 🚀 功能特性

完整功能说明见 [Sun-Panel 项目](https://github.com/hslr-s/sun-panel)。本应用提供 fnOS 安装、启停、端口配置与卸载向导，并随包提供 x86_64 和 aarch64 服务端。

## 📋 系统要求

- 飞牛 fnOS，设备架构为 x86_64 或 aarch64
- 一个未被其他服务占用的 HTTP 端口（默认：13002）

## 📦 安装与部署

1. 从本项目的 [Releases](https://github.com/liangguifeng/sun-panel-fnos-app/releases) 下载 `.fpk` 文件，在 fnOS 应用中心手动安装。
2. 在安装向导中填写 HTTP 监听端口，默认值为 `13002`。
3. 安装完成后，从飞牛桌面打开 Sun-Panel，或访问 `http://<NAS 地址>:13002/`；如果安装时修改了端口，请使用实际填写的端口。

也可在 macOS 或 Linux 上执行 `./build.sh` 自行构建 `.fpk`。构建脚本会下载所需的 `fnpack 1.2.3` 到 `.fnpack/`。

## ⚙️ 配置说明

安装后，可在【应用中心】→【已安装】→【Sun-Panel】→【应用设置】修改 HTTP 端口。应用会同步更新配置文件与桌面入口；若服务原本正在运行，还会重新启动服务，使新端口生效。

其他参数可在 fnOS 应用配置目录 `@appconf/sun-panel-fnos-app/conf.ini` 中修改。配置文件由当前版本的 Sun-Panel 服务端在首次启动时生成，仅在文件不存在时创建；更新应用不会重置已有配置。手动修改后，请在应用中心停止并重新启动 Sun-Panel。不要仅手动修改 `http_port`，否则桌面入口可能仍指向旧端口。

配置变更前，应用会将原文件备份为 `conf.ini.before-config.bak`；从旧默认端口 `3002` 迁移时，还会保留 `conf.ini.port-3002.bak`。具体配置项以当前版本生成的配置文件和 [Sun-Panel 官方文档](https://doc.sun-panel.top/) 为准。

## 🔧 使用方法

1. 点击飞牛桌面上的 Sun-Panel 图标，或在浏览器访问 `http://<NAS 地址>:<监听端口>/`。
2. 在 Sun-Panel 页面完成首次使用设置，并按需管理导航内容。
3. 通过 fnOS 应用中心管理服务的启动、停止与配置。

## 🛠️ 维护与故障排除

- 服务日志：`${TRIM_PKGVAR}/info.log`
- 进程 ID 文件：`${TRIM_PKGVAR}/app.pid`
- 配置文件：`${TRIM_PKGETC}/conf.ini`，对应 fnOS 的 `@appconf/sun-panel-fnos-app/conf.ini`
- 用户数据：`${TRIM_PKGHOME}/database`、`${TRIM_PKGHOME}/uploads`，以及 `${TRIM_PKGHOME}/web/custom`、`${TRIM_PKGHOME}/web/micro-apps`
- 服务无法启动时，先检查监听端口是否被占用，再查看服务日志。
- 卸载向导默认保留配置和用户数据；只有选择“删除配置与用户数据”才会清理应用私有数据，请提前备份。

每次向 `master` 提交代码，[GitHub Actions](.github/workflows/release.yml) 都会重新构建并发布 `.fpk`。Release 的 tag 和名称取自 `manifest` 的 `version`：版本不变时替换同名安装包，版本变化时创建新 Release。由于同版本更新不会移动既有 tag，若需让源码归档与安装包严格对应，请递增版本号。启用了不可变 Release 时，同版本覆盖会失败。

## 🤝 贡献

非常感谢 JetBrains 向我提供了执照，可以从事该项目和其他开源项目。

[![](https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg)](https://www.jetbrains.com/?from=https://github.com/liangguifeng)

## 📚 相关资源

- [Sun-Panel 官方文档](https://doc.sun-panel.top/) - 功能与配置说明
- [Sun-Panel 源码](https://github.com/hslr-s/sun-panel) - 上游项目
- [飞牛应用开发文档](https://developer.fnnas.com/docs/guide/) - fnOS 应用开发规范

## ©️ 版权信息

- 维护者：红烧猎人
- 分发者：liangguifeng
