---
layout: section
---

[<img src="/assets/sections/lizard.jpg" align="right" width="200" height="auto"/>](/)

<br/>
<br/>
<br/>

# Resource Columns Customization

<br/>

## <img src="/assets/sections/overview.png" width="auto" height="32"/> Overview

As of v0.17.0, K9s now allows for customizing resource columns while in table views. As such you can tell it which columns you would like to display but also which order they should be in.

To surface this feature, you will need to create a new configuration file, namely `$HOME/.k9s/views.yml`. This file leverages GVR (Group/Version/Resource) to configure the associated table view columns. If no GVR is found for a view the default rendering will take over (ie what we have now). Going wide will add all the remaining columns that are available on the given resource after your custom columns. To boot, you can edit your views config file and tune your resources views live!

<br/>

## <img src="/assets/sections/examples.png" width="auto" height="32"/> Example

Here is a sample views configuration that customize a pods and services views.


```yaml
# $HOME/.k9s/views.yml
k9s:
  views:
    v1/pods:
      columns:
        - AGE
        - NAMESPACE
        - NAME
        - IP
        - NODE
        - STATUS
        - READY
    v1/services:
      columns:
        - AGE
        - NAMESPACE
        - NAME
        - TYPE
        - CLUSTER-IP
```