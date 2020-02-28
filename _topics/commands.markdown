---
layout: section
---

[<img src="/assets/sections/cow.png" align="right" width="128" height="auto"/>](/lessons/agenda)

<br/>
<br/>
<br/>

# Commands

<br/>

---
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

---
## <img src="/assets/sections/examples.png" width="auto" height="32"/> Navigation

## Key Bindings

K9s uses aliases to navigate most K8s resources.

| Command                     | Result                                             | Example                    |
|-----------------------------|----------------------------------------------------|----------------------------|
| `:`alias`<ENTER>`           | View a Kubernetes resource aliases                 | `:po<ENTER>`               |
| `?`                         | Show keyboard shortcuts and help                   |                            |
| `Ctrl-a`                    | Show all available resource alias                  | select+`<ENTER>` to view   |
| `/`filter`ENTER`            | Filter out a resource view given a filter          | `/bumblebeetuna`           |
| `/`-l label-selector`ENTER` | Filter resource view by labels                     | `/-l app=fred`             |
| `<Esc>`                     | Bails out of view/command/filter mode              |                            |
| `d`,`v`, `e`, `l`,...       | Key mapping to describe, view, edit, view logs,... | `d` (describes a resource) |
| `:`ctx`<ENTER>`             | To view and switch to another Kubernetes context   | `:`+`ctx`+`<ENTER>`        |
| `:`ns`<ENTER>`              | To view and switch to another Kubernetes namespace | `:`+`ns`+`<ENTER>`         |
| `:screendump`, `:sd`        | To view all saved resources                        |                            |
| `Ctrl-d`                    | To delete a resource (TAB and ENTER to confirm)    |                            |
| `Ctrl-k`                    | To kill a resource (no confirmation dialog!)       |                            |
| `:q`, `Ctrl-c`              | To bail out of K9s                                 |                            |
