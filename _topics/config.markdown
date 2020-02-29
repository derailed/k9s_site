---
layout: section
---

[<img src="/assets/sections/dude.png" align="right" width="200" height="auto"/>](/)

<br/>
<br/>
<br/>

# Configuration

<br/>

## <img src="/assets/sections/overview.png" width="auto" height="32"/> Overview

K9s keeps its configurations in a .k9s directory in your home directory `$HOME/.k9s`. The main configuration file is named `config.yml` and stores various K9s specific bits. This file
will be updated by k9s to store current view and namespaces information.

<br/>
<div class="note">
  <i class="fas fa-skull"></i> This is still in flux and will change while in pre-release stage!
</div>


<br/>

## <img src="/assets/sections/examples.png" width="auto" height="32"/> K9s CLI Configuration

```yaml
# $HOME/.k9s/config.yml
  k9s:
    # Represents ui poll intervals.
    refreshRate: 2
    # Indicates whether modification commands like delete/kill/edit are disabled. Default is false
    readOnly: false
    # Indicates log view maximum buffer size. Default 1k lines.
    logBufferSize: 200
    # Indicates how many lines of logs to retrieve from the api-server. Default 200 lines.
    logRequestSize: 200
    # Indicates the current kube context. Defaults to current context
    currentContext: minikube
    # Indicates the current kube cluster. Defaults to current context cluster
    currentCluster: minikube
    # Persists per cluster preferences for favorite namespaces and view.
    clusters:
      cooln:
        namespace:
          active: coolio
          favorites:
          - cassandra
          - default
        view:
          active: po
      minikube:
        namespace:
          active: all
          favorites:
          - all
          - kube-system
          - default
        view:
          active: dp
```