---
layout: section
---

<i class="icon fas fa-terminal fa-7x"></i>

<br/>
<br/>
<br/>

# Commands

<br/>

## <img src="/assets/sections/overview.png" width="auto" height="32"/> CLI Arguments

K9s CLI comes with a view arguments that you can use to launch the tool with different configuration.

```shell
# List all available CLI options
k9s help
# Get info about K9s runtime (logs, configs, etc..)
k9s info
# Run K9s in a given namespace.
k9s -n mycoolns
# Run K9s and launch the pod view.
k9s -c pod
# Start K9s in an existing KubeConfig context
k9s --context coolCtx
# Start K9s in readonly mode - with all modification commands disabled
k9s --readonly
```

<br/>

## <img src="/assets/sections/examples.png" width="auto" height="32"/> Navigation

## Key Bindings

K9s uses aliases to navigate most K8s resources.

| Command                     | Result                                                      | Example                       |
| --------------------------- | ----------------------------------------------------------- | ----------------------------- |
| `Ctrl-a`                    | Show all available resource alias                           |                               |
| `?`                         | Show keyboard shortcuts and help                            |                               |
| `<Esc>`                     | Back out of view/command/filter mode                        |                               |
| `:alias_name`               | View a resource by name plural/singular/short_name or alias | `:po` + `<ENTER>`             |
| `:alias_name namespace`     | View a resource by name in a given namespace                | `:po fred_ns`+`<ENTER>`       |
| `/`filter`ENTER`            | Filter out a resource view given a filter                   | `/bumblebeetuna`              |
| `/`-l label-selector`ENTER` | Filter resource view by labels                              | `/-l app=fred`                |
| `d`,`y`, `e`, `l`,...       | Key mapping to describe, view YAML, edit, view logs,...     | `d` (describes a resource)    |
| `:ctx`                      | View and select another Kubernetes context                  | `:ctx`+`<ENTER>`              |
| `:ctx` + context_name       | Switch to given context by name                             | `:ctx fred_context`+`<ENTER>` |
| `:ns`                       | View and select another namespace                           | `:ns`+`<ENTER>`               |
| `:screendump`, `:sd`        | View all saved resources                                    |                               |
| `Ctrl-d`                    | Delete a resource (TAB and ENTER to confirm)                |                               |
| `Ctrl-k`                    | Kill a resource (no confirmation dialog!)                   |                               |
| `:q`, `Ctrl-c`              | Bail out of K9s                                             |                               |
