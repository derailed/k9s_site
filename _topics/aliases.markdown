---
layout: section
---

[<img src="/assets/sections/dragon_1.png" align="right" width="200" height="auto"/>](/)

<br/>
<br/>
<br/>

# Aliases

<br/>

## <img src="/assets/sections/overview.png" width="auto" height="32"/> Overview

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