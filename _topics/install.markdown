---
layout: section
---

<i class="icon fas fa-tools fa-7x"></i>

<br/>
<br/>
<br/>

# Installation

<br/>

---
## <img src="/assets/sections/overview.png" width="auto" height="32"/> Overview

K9s is available on Linux, macOS and Windows platforms.

### PreFlight Check

* K9s uses 256 colors terminal mode. On `Nix system make sure TERM is set accordingly.

    ```shell
    export TERM=xterm-256color
    ```


### Installs

* Binaries for Linux, Windows and Mac are available as tarballs in the [release](https://github.com/derailed/k9s/releases) page.

* Via Homebrew or LinuxBrew for macOS and Linux

   ```shell
   brew install derailed/k9s/k9s
   ```

* Via [MacPorts](https://www.macports.org)

   ```shell
   sudo port install k9s
   ```

* On Arch Linux

  ```shell
  pacman -S k9s
  ```

* Via [Scoop](https://scoop.sh) for Windows

  ```shell
  scoop install k9s
  ```

* Building from source
   K9s was built using go 1.13 or above. In order to build K9 from source you must:
   1. Clone the repo
   2. Add the following command in your go.mod file

      ```text
      replace (
        github.com/derailed/k9s => MY_K9S_CLONED_GIT_REPO
      )
      ```

   3. Build and run the executable

        ```shell
        go run main.go
        ```