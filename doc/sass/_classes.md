# SLabelMaterialComponent

This file provide the mixins and functions to create material label elements


## Mixins


### s-label-material-classes

Print out the bare and style component css
Generated classes:
- ```[is="s-label-material"]```
- ```[is="s-label-material"] > input```
- ```[is="s-label-material"] > textarea```
- ```[is="s-label-material"] > span```
- ```[is="s-label-material"][color="{color}"] > input```
- ```[is="s-label-material"][color="{color}"] > textarea```
- ```[is="s-label-material"][color="{color}"] > span```


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary


### s-label-material-classes-bare

Print out the bare component css
Generated classes:
- ```[is="s-label-material"]```
- ```[is="s-label-material"] > input```
- ```[is="s-label-material"] > textarea```
- ```[is="s-label-material"] > span```


### s-label-material-classes-style

Print out the style component css
Generated classes:
- ```[is="s-label-material"]```
- ```[is="s-label-material"] > input```
- ```[is="s-label-material"] > textarea```
- ```[is="s-label-material"][color="{color}"] > input```
- ```[is="s-label-material"][color="{color}"] > textarea```
- ```[is="s-label-material"][color="{color}"] > span```


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$color  |  **{ List<Color> }**  |  The colors to generate  |  optional  |  default primary secondary