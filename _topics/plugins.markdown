---
layout: section
---

<i class="icon fas fa-plug fa-7x"></i>

<br/>
<br/>
<br/>

# Plugins

<br/>

## <img src="/assets/sections/overview.png" width="auto" height="32"/> Overview

K9s allows you to extend your command line and tooling by defining your very own cluster commands via plugins.
K9s looks at `$XDG_CONFIG_HOME/k9s/plugins.yaml` to locate all available plugins.

Additionally, K9s scans the following directories for additional plugins:

* `$XDG_CONFIG_HOME/k9s/plugins`
* `$XDG_DATA_HOME/k9s/plugins`
* `$XDG_DATA_DIRS/k9s/plugins`

You can further extend plugins behavior in a context specific configuration using `$XDG_DATA_HOME/k9s/clusters/clusterX/contextY/plugins.yaml`.

The plugin file content can be either a single plugin snippet, a collections of snippets or a complete plugins definition (see examples below...).

A plugin is defined as follows:

* Shortcut option represents the key combination a user would type to activate the plugin
* Description will be printed next to the shortcut in the k9s menu
* Scopes defines a collection of resources name/short-name for the views associated with the plugin. You can specify `all` to provide this shortcut for all views.
* Command represents ad-hoc commands the plugin runs upon activation
* Background specifies whether or not the command runs in the background
* Args specifies the various arguments that should apply to the command above

K9s does provide additional environment variables for you to customize your plugins arguments. Currently, the available environment variables are as follows:

* `$NAMESPACE` -- the selected resource namespace
* `$NAME` -- the selected resource name
* `$CONTAINER` -- the current container if applicable
* `$FILTER` -- the current filter if any
* `$KUBECONFIG` -- the KubeConfig location.
* `$CLUSTER` the active cluster name
* `$CONTEXT` the active context name
* `$USER` the active user
* `$GROUPS` the active groups
* `$POD` while in a container view
* `$COL-<RESOURCE_COLUMN_NAME>` use a given column name for a viewed resource. Must be prefixed by `COL-`!

NOTE: Take a look at some of the [Community Custom Plugins](https://github.com/derailed/k9s/tree/master/plugins) contributed by your K9sers friends.

<br/>
<div class="note">
  <i class="fas fa-skull"></i> Work in progress... Options and layout may change in future K9s releases as this feature solidifies.
</div>

<br/>

## <img src="/assets/sections/examples.png" width="auto" height="32"/> Examples

This defines a plugin for viewing logs on a selected pod using `ctrl-l` mnemonic.

```yaml
# Define several plugins in a single file in the K9s root configuration
# $XDG_CONFIG_HOME/k9s/plugins.yaml
plugins:

  # Defines a plugin to provide a `ctrl-l` shortcut to tail the logs while in pod view.
  fred:
    # Define a mnemonic to invoke the plugin
    shortCut: Ctrl-L
    # What will be shown on the K9s menu
    description: Pod logs
    # Collections of views that support this shortcut. (You can use `all`)
    scopes:
    - po
    # The command to run upon invocation. Can use Krew plugins here too!
    command: kubectl
    # Whether or not to run the command in background mode
    background: false
    # Defines the command arguments
    args:
    - logs
    - -f
    - $NAME
    - -n
    - $NAMESPACE
    - --context
    - $CONTEXT
```

Similarly you can define the plugin above in a directory using either a file per plugin or several plugins per files as follow...

The following defines two plugins namely fred and zorg.

```yaml
# Multiple plugins in a single file...
# Note: as of v0.40.9 you can have ad-hoc plugin dirs
# Loads plugins fred and zorg
# $XDG_DATA_HOME/k9s/plugins/misc-plugins/blee.yaml
fred:
  shortCut: Shift-B
  description: Bozo
  scopes:
  - deploy
  command: bozo

zorg:
  shortCut: Shift-Z
  description: Pod logs
  scopes:
  - svc
  command: zorg
```

Lastly you can define plugin snippets in their own file. The snippet will be named from the file name. In this case, we define a `bozo` plugin using a plugin snippet.

```yaml
# $XDG_DATA_HOME/k9s/plugins/schtuff/bozo.yaml
shortCut: Shift-B
description: Bozo
scopes:
- deploy
command: bozo
```
