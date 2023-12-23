---
layout: section
---

[<img src="/assets/sections/dragon_1.png" align="right" width="200" height="auto"/>](/)

<br/>
<br/>
<br/>

# Aliases

<br/>

## <img src="/assets/sections/overview.png" width="auto" height="32"/> AutoSuggestions

K9s command mode supports autosuggestions. Suggestions are based on supported Kubernetes resource in singular/plural as well as short names and command aliases as describe below. The command mode supports the following keys:

| Key                | Description                              |
| ------------------ | ---------------------------------------- |
| ⬆️ ⬇️                | Navigate up or down thru the suggestions |
| `Ctrl-w`, `Ctrl-u` | Clear out the command                    |
| `Tab`, `Ctrl-f`, ➡️ | Accept the suggestion                    |

<br/>

## <img src="/assets/sections/overview.png" width="auto" height="32"/> Aliases

In K9s, you can define your very own command aliases (short-names) to access your resources. In your `$XDG_CONFIG_HOME/k9s` define a file called `aliases.yaml`.
A K9s alias defines pairs of alias:gvr or alias:command. A gvr (Group/Version/Resource) represents a fully qualified Kubernetes resource identifier.
The command can be any commands that you would normally use while in command prompt mode.

Aliases can be defined a two levels: global and context specific. At the global level you would create a file in `$XDG_CONFIG_HOME/k9s/aliases.yaml`.
For context specific aliases, you can define `$XDG_DATA_HOME/k9s/clusters/clusterX/contextY/aliases.yaml`

<br/>
<div class="note">
  <i class="fas fa-skull"></i> As of v0.30.0 this file must have a `.yaml" extension. Also note the file name is pluralize as well as the top section of the section aka `aliases`
</div>

Here is an example of an alias file:

<br/>

## <img src="/assets/sections/examples.png" width="auto" height="32"/> Example

Using this alias file, you can now type pp/crb to list pods or ClusterRoleBindings respectively.

```yaml
# $XDG_CONFIG_HOME/k9s/aliases.yaml
aliases:
  # Use pp as an alias for Pod
  pp: v1/pods

  # Use dep as an alias for Deployments
  dep: apps/v1/deployments

  # Use fred as an alias for CRD Frederick
  fred: acme.io/v1alpha1/fredericks

  # Defines a pos alias for a command listing all pod in kube-system matching labels app=fred and blee=duh
  pos: pod kube-system app=fred,blee=duh
```
