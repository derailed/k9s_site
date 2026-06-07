---
title: Installation
description: Install K9s on Linux, macOS, or Windows.
---

## Overview

K9s is available on Linux, macOS and Windows platforms.

- Binaries for Linux, Windows and Mac are available as tarballs in the [release](https://github.com/derailed/k9s/releases) page.

- MacOS

  ```shell
  # Via Homebrew
  brew install derailed/k9s/k9s
  # Via MacPort
  sudo port install k9s
  ```

- Linux

  ```shell
  # Via LinuxBrew
  brew install derailed/k9s/k9s
  # Via PacMan
  pacman -S k9s
  ```

- Windows

  ```shell
  # Via scoop
  scoop install k9s
  # Via chocolatey
  choco install k9s
  ```

## Building From Source

K9s requires a recent version of Go (see the `go` directive in the project's [`go.mod`](https://github.com/derailed/k9s/blob/master/go.mod) for the exact version). In order to build K9s from source you must:

1. Clone the repo
2. Build and run the executable

   ```shell
   make build && ./execs/k9s
   ```

## PreFlight Check

- K9s uses 256 colors terminal mode. On `Nix` systems make sure TERM is set accordingly.

  ```shell
  export TERM=xterm-256color
  ```

- In order to issue resource edit commands make sure your EDITOR and/or KUBE_EDITOR env vars are set.

  ```shell
  # Kubectl edit command will use this env var.
  export KUBE_EDITOR=my_fav_editor
  ```
