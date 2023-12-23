---
layout: section
---

<i class="icon fas fa-hdd fa-7x"></i>

<br/>
<br/>
<br/>

# NodeShell

<br/>

## <img src="/assets/sections/overview.png" width="auto" height="32"/> Overview

By enabling the nodeShell feature gate for a given context, K9s allows you to shell into your cluster nodes.
Once enabled, you will have a new `s` for `shell` menu option while in node view.
K9s will launch a pod on the selected node using a special k9s_shell pod.
Furthermore, you can refine your shell pod by using a custom docker image preloaded with the shell tools you love.
By default k9s uses a BusyBox image, but you can configure it as follows:

<br/>
<div class="note">
  <i class="fas fa-skull"></i> Work in progress... Options and layout may change in future K9s releases as this feature solidifies.
</div>

<br/>

## <img src="/assets/sections/examples.png" width="auto" height="32"/> Example

```yaml
# $XDG_CONFIG_HOME/k9s/config.yaml
k9s:
  ...
  # Customize your shell pod configuration here. This will be used by all your clusters.
  shellPod:
    image: cool_kid_admin:42
    namespace: default
    limits:
      cpu: 100m
      memory: 100Mi
  ...
```

Then unable to feature gate in your `blee` context configuration.

```yaml
# $XDG_DATA_HOME/k9s/clusters/clusterX/blee/config.yaml
k9s:
  cluster: clusterX
  readOnly: false
  namespace:
    active: kube-system
    lockFavorites: false
    favorites:
    - all
    - kube-system
    - default
  view:
    active: pod
  featureGates:
    nodeShell: true # => enable nodeShell for this context. Defaults to false
  portForwardAddress: localhost
```
