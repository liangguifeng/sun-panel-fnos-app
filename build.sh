#!/usr/bin/env bash
# 构建飞牛 fnOS 安装包；fnpack 缺失时按当前系统下载官方版本。
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VERSION="${FNPACK_VERSION:-1.2.3}"

# fnpack 的文件名按构建机器的系统与架构区分。
case "$(uname -s)" in
    Darwin) OS=darwin ;;
    Linux)  OS=linux ;;
    *)
        echo 'Unsupported OS' >&2
        exit 1
        ;;
esac

case "$(uname -m)" in
    x86_64 | amd64)  ARCH=amd64 ;;
    arm64 | aarch64) ARCH=arm64 ;;
    *)
        echo 'Unsupported architecture' >&2
        exit 1
        ;;
esac

TOOL="${ROOT}/.fnpack/fnpack-${VERSION}-${OS}-${ARCH}"

if [ ! -x "${TOOL}" ]; then
    mkdir -p "${ROOT}/.fnpack"
    TMP="$(mktemp "${ROOT}/.fnpack/fnpack.XXXXXX")"
    trap 'rm -f "${TMP}"' EXIT

    curl -fL --retry 3 \
        "https://static2.fnnas.com/fnpack/fnpack-${VERSION}-${OS}-${ARCH}" \
        -o "${TMP}"
    chmod 755 "${TMP}"
    mv "${TMP}" "${TOOL}"

    trap - EXIT
fi

cd "${ROOT}"
"${TOOL}" build --directory "${ROOT}" "$@"
