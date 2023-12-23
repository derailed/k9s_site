---
layout: section
---

[<img src="/assets/sections/cow.png" align="right" width="150" height="auto"/>](/topics)

<br/>
<br/>
<br/>

# Skins

## <img src="/assets/sections/overview.png" width="auto" height="32"/> Overview

You can style K9s based on your own sense of look and style. Skins are YAML files, that enable a user to change the K9s presentation layer.
Skin files live in `$XDG_CONFIG_HOME/k9s/skins` folder. You can specify a general skin using `skin: skin_file_name_no_extension` attribute that applies to all your clusters.
Additionally, you can also skin individual contexts by defining the same `skin` attribute in your context specific configuration block.

If a skin file exists for your cluster then the skin will be loaded if not the stock skin remains in effect.
So if your want different K9s look and feel on a per context basis and say your cluster is `clusterX` and your context is `contextY` then you skin attribute would read `skin: blee`.
Where `blee` refers to a skin file in `$XDG_CONFIG_HOME/k9s/skins/blee.yaml`.
Below is a sample skin file, more skins are available in the [skins](https://github.com/derailed/k9s/tree/master/skins) directory in the K9s repo.

Colors can be defined as named colors (see table below) or using an hex representation.
To preserve your terminal session background color, we've added a color named `default` to indicate a transparent background color if so desired.

<div class="center">
  <img src="/assets/skins/dracula.png" align="center" width="600" height="auto">
  <br/>
  K9s Dracula skin
</div>

<br/>
<div class="note">
  <i class="fas fa-skull"></i> Changes to the skin file layout will occur as more features are added, so thread accordingly!
</div>

<br/>

## <img src="/assets/sections/examples.png" class="section"/> Skin Configuration

```yaml
# $XDG_CONFIG_HOME/k9s/config.yaml
# Global skin is specified
k9s:
  liveViewAutoRefresh: false
  refreshRate: 2
  maxConnRetry: 5
  readOnly: false
  ui:
    enableMouse: false
    headless: false
    logoless: false
    crumbsless: false
    noIcons: false
    # Uses in_the_navy skin located in your $XDG_CONFIG_HOME/skins/in_the_navy.yaml
    skin: in_the_navy # => All clusters will use this skin unless otherwise specified in the context configuration file
  ...
```

<br/>

## <img src="/assets/sections/examples.png" class="section"/> Skin Example

```yaml
# $XDG_CONFIG_HOME/k9s/in_the_navy_skin.yaml
k9s:
  # General K9s styles
  body:
    fgColor: dodgerblue
    bgColor: '#ffffff'
    logoColor: '#0000ff'

  # ClusterInfoView styles
  info:
    fgColor: lightskyblue
    sectionColor: steelblue

  # Frame styles
  frame:
    # Borders styles
    border:
      fgColor: dodgerblue
      focusColor: aliceblue

    # MenuView attributes and styles
    menu:
      fgColor: darkblue
      keyColor: cornflowerblue
      # Used for favorite namespaces
      numKeyColor: cadetblue

    # CrumbView attributes for history navigation.
    crumbs:
      fgColor: white
      bgColor: steelblue
      activeColor: skyblue

    # Resource status and update styles
    status:
      newColor: '#00ff00'
      modifyColor: powderblue
      addColor: lightskyblue
      errorColor: indianred
      highlightcolor: royalblue
      killColor: slategray
      completedColor: gray

    # Border title styles.
    title:
      fgColor: aqua
      bgColor: white
      highlightColor: skyblue
      counterColor: slateblue
      filterColor: slategray
  # Specific views styles
  views:
    # TableView attributes.
    table:
      fgColor: blue
      bgColor: darkblue
      cursorColor: aqua
      # Header row styles.
      header:
        fgColor: white
        bgColor: darkblue
        sorterColor: orange

    # YAML info styles.
    yaml:
      keyColor: steelblue
      colonColor: blue
      valueColor: royalblue

    # Logs styles.
    logs:
      fgColor: white
      bgColor: black
```

<br/>

---
## <img src="/assets/sections/references.png" class="section"/> Named Color Reference

|----------------------|----------------|------------------|-------------------|-----------------|
| black                | maroon         | green            | olive             | navy            |
| purple               | teal           | silver           | gray              | red             |
| lime                 | yellow         | blue             | fuchsia           | aqua            |
| white                | aliceblue      | antiquewhite     | aquamarine        | azure           |
| beige                | bisque         | blanchedalmond   | blueviolet        | brown           |
| burlywood            | cadetblue      | chartreuse       | chocolate         | coral           |
| cornflowerblue       | cornsilk       | crimson          | darkblue          | darkcyan        |
| darkgoldenrod        | darkgray       | darkgreen        | darkkhaki         | darkmagenta     |
| darkolivegreen       | darkorange     | darkorchid       | darkred           | darksalmon      |
| darkseagreen         | darkslateblue  | darkslategray    | darkturquoise     | darkviolet      |
| deeppink             | deepskyblue    | dimgray          | dodgerblue        | firebrick       |
| floralwhite          | forestgreen    | gainsboro        | ghostwhite        | gold            |
| goldenrod            | greenyellow    | honeydew         | hotpink           | indianred       |
| indigo               | ivory          | khaki            | lavender          | lavenderblush   |
| lawngreen            | lemonchiffon   | lightblue        | lightcoral        | lightcyan       |
| lightgoldenrodyellow | lightgray      | lightgreen       | lightpink         | lightsalmon     |
| lightseagreen        | lightskyblue   | lightslategray   | lightsteelblue    | lightyellow     |
| limegreen            | linen          | mediumaquamarine | mediumblue        | mediumorchid    |
| mediumpurple         | mediumseagreen | mediumslateblue  | mediumspringgreen | mediumturquoise |
| mediumvioletred      | midnightblue   | mintcream        | mistyrose         | moccasin        |
| navajowhite          | oldlace        | olivedrab        | orange            | orangered       |
| orchid               | palegoldenrod  | palegreen        | paleturquoise     | palevioletred   |
| papayawhip           | peachpuff      | peru             | pink              | plum            |
| powderblue           | rebeccapurple  | rosybrown        | royalblue         | saddlebrown     |
| salmon               | sandybrown     | seagreen         | seashell          | sienna          |
| skyblue              | slateblue      | slategray        | snow              | springgreen     |
| steelblue            | tan            | thistle          | tomato            | turquoise       |
| violet               | wheat          | whitesmoke       | yellowgreen       | grey            |
| dimgrey              | darkgrey       | darkslategrey    | lightgrey         | lightslategrey  |
| slategrey            |                |                  |                   |                 |