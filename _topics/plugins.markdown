---
layout: section
---

[<img src="/assets/sections/fox.png" align="right" width="256" height="auto"/>](/)

<br/>
<br/>
<br/>

# Plugins

<br/>

## <img src="/assets/sections/overview.png" width="auto" height="32"/> Overview

K9s allows you to extend your command line and tooling by defining your very own cluster commands via plugins. K9s will look at `$HOME/.k9s/plugin.yml` to locate all available plugins. A plugin is defined as follows:

This defines a plugin for viewing logs on a selected pod using `CtrlL` mnemonic.

The shortcut option represents the command a user would type to activate the plugin. The command represents adhoc commands the plugin runs upon activation. The scopes defines a collection of resources names/shortnames for which the plugin shortcut will be made available to the user. You can specify all to provide this shortcut for all views.

K9s does provide additional environment variables for you to customize your plugins. Currently, the available environment variables are as follows:

* `$NAMESPACE` -- the selected resource namespace
* `$NAME` -- the selected resource name
* `$CONTAINER` -- the current container if applicable
* `$FILTER` -- the current filter if any
* `$KUBECONFIG` -- the KubeConfig location.
* `$CLUSTER` the active cluster name
* `$CONTEXT` the active context name
* `$USER` the active user
* `$GROUPS` the active groups
* `$COLX` the column at index X for the viewed resource

<br/>
<div class="note">
  <i class="fas fa-skull"></i> Work in progress... Options and layout may change in future K9s releases as this feature solidifies.
</div>

<br/>

## <img src="/assets/sections/examples.png" width="auto" height="32"/> Example

```yaml
# $HOME/.k9s/plugin.yml
plugin:
  # Defines a plugin to provide a `Ctrl-L` shorcut to tail the logs while in pod view.
  fred:
    shortCut: Ctrl-L
    description: Pod logs
    scopes:
    - po
    command: kubectl
    background: false
    args:
    - logs
    - -f
    - $NAME
    - -n
    - $NAMESPACE
    - --context
    - $CONTEXT
```