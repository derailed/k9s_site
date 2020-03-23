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

| Key                 | Description                              |
| ------------------- | ---------------------------------------- |
| ⬆️ ⬇️               | Navigate up or down thru the suggestions |
| `Ctrl-w`, `Ctrl-u`  | Clear out the command                    |
| `Tab`, `Ctrl-f`, ➡️ | Accept the suggestion                    |

<br/>

## <img src="/assets/sections/overview.png" width="auto" height="32"/> Aliases

In K9s, you can define your very own command aliases (shortnames) to access your resources. In your `$HOME/.k9s` define a file called `alias.yml`. A K9s alias defines pairs of alias:gvr. A gvr (Group/Version/Resource) represents a fully qualified Kubernetes resource identifier. Here is an example of an alias file:


<br/>

## <img src="/assets/sections/examples.png" width="auto" height="32"/> Example

Using this alias file, you can now type pp/crb to list pods or clusterrolebindings respectively.

```yaml
# $HOME/.k9s/alias.yml
alias:
  pp: v1/pods
  crb: rbac.authorization.k8s.io/v1/clusterrolebindings
```