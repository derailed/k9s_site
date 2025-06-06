---
layout: site
---

<img class="pic" src="assets/k9s.png"/>

<br/>

# <i class="fas fa-paw"/> Who Let The Pods Out?

K9s is a terminal based UI to interact with your Kubernetes clusters. The aim of this project is to make it easier to navigate, observe and manage your deployed applications in the wild. K9s continually watches Kubernetes for changes and offers subsequent commands to interact with your observed resources.

<br/>

# <i class="fas fa-highlighter"/> Features

- Information At Your Finger Tips!
  - Tracks in real-time activities of resources running in your Kubernetes cluster.

- Standard or CRD?
  - Handles both Kubernetes standard resources as well as custom resource definitions.

- Cluster Metrics
  - Tracks real-time metrics associates with resources such as pods, containers and nodes.

- Power Users Welcome!
  - Provides standard cluster management commands such as logs, scaling, port-forwards, restarts...
  - Define your own command shortcuts for quick navigation via command aliases and hotkeys.
  - Plugin support to extend K9s to create your very own cluster commands.
  - Powerful filtering mode to allow user to drill down and view workload related resources.

- Error Zoom
  - Drill down directly to what's wrong with your cluster's resources.

- Skinnable and Customizable
  - Define your very own look and feel via K9s skins.
  - Customize/Arrange which columns to display on a per resource basis.

- Narrow or Wide?
  - Provides toggles to view minimal or full resource definitions

- MultiResources Views
  - Provides for an overview of your cluster resources via Pulses and XRay views.

- We've got your RBAC!
  - Supports for viewing RBAC rules such as cluster/roles and their associated bindings.
  - Reverse lookup to asserts what a user/group or ServiceAccount can do on your clusters.

- Built-in Benchmarking
  - You can benchmark your HTTP services/pods directly from K9s to see how your application fare and adjust your resources request/limit accordingly.

- Resource Graph Traversals
  - K9s provides for easy traversal of Kubernetes resources and their associated resources.

<br/>

# <i class="fas fa-bullhorn"></i> Sponsor Us!

If you dig this effort and feel K9s is improving your Kubernetes experience and productivity for you or your team, please join our sponsorship program! K9s is complex and demands a lot of work, by clicking the [Sponsor button](https://github.com/sponsors/derailed) you can show your support and appreciation. Alternatively, just simply give us a shoot-out on social as these go a long way in keeping our batteries charged up!

## 🥳 Our Rhodium Sponsors!

Below are organizations that have opted to show their support, pay it forward and sponsor K9s.

<br/>
<a href="https://panfactum.com"><img src="assets/sponsors/panfactum.png" alt="panfactum"></a>
<br/>
<br/>

<br/>

# <i class="fas fa-book"/> Documentation

- <i class="fas fa-tools"/> [Installation]({{ "/topics/install" }})
- <i class="fas fa-terminal"/> [Commands]({{ "/topics/commands" }})
- <i class="fas fa-car"/> Customizations
  - Feel
    - [K9s]({{ "/topics/config" }})
    - [Aliases]({{ "/topics/aliases" }})
    - [HotKeys]({{ "/topics/hotkeys" }})
    - [Plugins]({{ "/topics/plugins" }})
    - [Node Shell]({{ "/topics/shell" }})
  - Look
    - [Skins]({{ "/topics/skins" }})
    - [Custom Views]({{ "/topics/columns" }})
- <i class="fas fa-tachometer-alt"/> [Benchmarking]({{ "/topics/bench" }})
- <i class="fas fa-key"/> [RBAC]({{ "/topics/rbac" }})
- <i class="fas fa-video"/> [Tutorials]({{ "/topics/video" }})

<br/>

## <i class="fab fa-youtube"/> Previews

[![asciicast](https://asciinema.org/a/305944.svg)](https://asciinema.org/a/305944)

- Pulses - *A top level dashboard of the state of affairs of your cluster*
  <img src="assets/screens/pulses.png"/>
- XRay - *Dig in your cluster resources and view their dependencies*
  <img src="assets/screens/xray.png"/>
- Pods - *List out your pods status and resource consumption*
  <img src="assets/screens/pods.png"/>
- Logs - *View and interact with your container logs*
  <img src="assets/screens/logs.png"/>
- RBAC - *View the who/what/how of authorizations on your cluster*
  <img src="assets/screens/rbac.png"/>

<br/>

## <i class="fas fa-thumbs-up"></i> ATTA Girls/Boys!

K9s sits on top of many open source projects and libraries. Our *sincere* appreciations to all the OSS contributors that work nights and weekends to make this project a reality!

<br/>

## <i class="fas fa-phone-volume"></i> Get In Touch!

- <i class="fas fa-at fa-2x"/>  [Fernand Galiana](mailto://{{ site.email }})
- <i class="fab fa-twitter fa-2x"/> [@{{ site.twitter }}](https://twitter.com/{{ site.twitter }}?lang=en)
- <i class="fab fa-github fa-2x"/> [K9s Repo](https://github.com/{{ site.github }})
- <i class="fab fa-slack fa-2x"/>  [K9ers Slack](https://k9sers.slack.com/)
- <i class="fab fa-slack-hash fa-2x"/> [K9ers Slack Invite](https://join.slack.com/t/k9sers/shared_invite/zt-3360a389v-ElLHrb0Dp1kAXqYUItSAFA)

<br/>

---
<img class="mid-align" src="/assets/imhotep_logo.png" width="32" height="auto"/>
<span class="mid-align">
  © 2025 Imhotep Software LLC. All materials licensed under
</span>
<a class="mid-align" href="http://www.apache.org/licenses/LICENSE-2.0">Apache v2.0</a>
