import TreeMap, { Properties } from "devextreme/viz/tree_map";
import { defineComponent } from "vue";
import { prepareComponentConfig } from "./core/index";
import { prepareConfigurationComponentConfig } from "./core/index";

type AccessibleOptions = Pick<Properties,
  "childrenField" |
  "colorField" |
  "colorizer" |
  "dataSource" |
  "disabled" |
  "elementAttr" |
  "export" |
  "group" |
  "hoverEnabled" |
  "idField" |
  "interactWithGroup" |
  "labelField" |
  "layoutAlgorithm" |
  "layoutDirection" |
  "loadingIndicator" |
  "maxDepth" |
  "onClick" |
  "onDisposing" |
  "onDrawn" |
  "onDrill" |
  "onExported" |
  "onExporting" |
  "onFileSaving" |
  "onHoverChanged" |
  "onIncidentOccurred" |
  "onInitialized" |
  "onNodesInitialized" |
  "onNodesRendering" |
  "onOptionChanged" |
  "onSelectionChanged" |
  "parentField" |
  "pathModified" |
  "redrawOnResize" |
  "rtlEnabled" |
  "selectionMode" |
  "size" |
  "theme" |
  "tile" |
  "title" |
  "tooltip" |
  "valueField"
>;

interface DxTreeMap extends AccessibleOptions {
  readonly instance?: TreeMap;
}

const componentConfig = {
  props: {
    childrenField: String,
    colorField: String,
    colorizer: Object,
    dataSource: {},
    disabled: Boolean,
    elementAttr: Object,
    export: Object,
    group: Object,
    hoverEnabled: {},
    idField: {},
    interactWithGroup: Boolean,
    labelField: String,
    layoutAlgorithm: {},
    layoutDirection: {},
    loadingIndicator: Object,
    maxDepth: {},
    onClick: Function,
    onDisposing: Function,
    onDrawn: Function,
    onDrill: Function,
    onExported: Function,
    onExporting: Function,
    onFileSaving: Function,
    onHoverChanged: Function,
    onIncidentOccurred: Function,
    onInitialized: Function,
    onNodesInitialized: Function,
    onNodesRendering: Function,
    onOptionChanged: Function,
    onSelectionChanged: Function,
    parentField: {},
    pathModified: Boolean,
    redrawOnResize: Boolean,
    rtlEnabled: Boolean,
    selectionMode: {},
    size: Object,
    theme: {},
    tile: Object,
    title: [Object, String],
    tooltip: Object,
    valueField: String
  },
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:childrenField": null,
    "update:colorField": null,
    "update:colorizer": null,
    "update:dataSource": null,
    "update:disabled": null,
    "update:elementAttr": null,
    "update:export": null,
    "update:group": null,
    "update:hoverEnabled": null,
    "update:idField": null,
    "update:interactWithGroup": null,
    "update:labelField": null,
    "update:layoutAlgorithm": null,
    "update:layoutDirection": null,
    "update:loadingIndicator": null,
    "update:maxDepth": null,
    "update:onClick": null,
    "update:onDisposing": null,
    "update:onDrawn": null,
    "update:onDrill": null,
    "update:onExported": null,
    "update:onExporting": null,
    "update:onFileSaving": null,
    "update:onHoverChanged": null,
    "update:onIncidentOccurred": null,
    "update:onInitialized": null,
    "update:onNodesInitialized": null,
    "update:onNodesRendering": null,
    "update:onOptionChanged": null,
    "update:onSelectionChanged": null,
    "update:parentField": null,
    "update:pathModified": null,
    "update:redrawOnResize": null,
    "update:rtlEnabled": null,
    "update:selectionMode": null,
    "update:size": null,
    "update:theme": null,
    "update:tile": null,
    "update:title": null,
    "update:tooltip": null,
    "update:valueField": null,
  },
  computed: {
    instance(): TreeMap {
      return (this as any).$_instance;
    }
  },
  beforeCreate() {
    (this as any).$_WidgetClass = TreeMap;
    (this as any).$_hasAsyncTemplate = true;
    (this as any).$_expectedChildren = {
      colorizer: { isCollectionItem: false, optionName: "colorizer" },
      export: { isCollectionItem: false, optionName: "export" },
      group: { isCollectionItem: false, optionName: "group" },
      loadingIndicator: { isCollectionItem: false, optionName: "loadingIndicator" },
      size: { isCollectionItem: false, optionName: "size" },
      tile: { isCollectionItem: false, optionName: "tile" },
      title: { isCollectionItem: false, optionName: "title" },
      tooltip: { isCollectionItem: false, optionName: "tooltip" }
    };
  }
};

prepareComponentConfig(componentConfig);

const DxTreeMap = defineComponent(componentConfig);


const DxBorderConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:dashStyle": null,
    "update:opacity": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    color: {},
    dashStyle: {},
    opacity: {},
    visible: Boolean,
    width: {}
  }
};

prepareConfigurationComponentConfig(DxBorderConfig);

const DxBorder = defineComponent(DxBorderConfig);

(DxBorder as any).$_optionName = "border";

const DxColorizerConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:colorCodeField": null,
    "update:colorizeGroups": null,
    "update:palette": null,
    "update:paletteExtensionMode": null,
    "update:range": null,
    "update:type": null,
  },
  props: {
    colorCodeField: {},
    colorizeGroups: Boolean,
    palette: {},
    paletteExtensionMode: {},
    range: Array,
    type: {}
  }
};

prepareConfigurationComponentConfig(DxColorizerConfig);

const DxColorizer = defineComponent(DxColorizerConfig);

(DxColorizer as any).$_optionName = "colorizer";

const DxExportConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:backgroundColor": null,
    "update:enabled": null,
    "update:fileName": null,
    "update:formats": null,
    "update:margin": null,
    "update:printingEnabled": null,
    "update:svgToCanvas": null,
  },
  props: {
    backgroundColor: String,
    enabled: Boolean,
    fileName: String,
    formats: Array,
    margin: Number,
    printingEnabled: Boolean,
    svgToCanvas: {}
  }
};

prepareConfigurationComponentConfig(DxExportConfig);

const DxExport = defineComponent(DxExportConfig);

(DxExport as any).$_optionName = "export";

const DxFontConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:family": null,
    "update:opacity": null,
    "update:size": null,
    "update:weight": null,
  },
  props: {
    color: String,
    family: String,
    opacity: Number,
    size: [Number, String],
    weight: Number
  }
};

prepareConfigurationComponentConfig(DxFontConfig);

const DxFont = defineComponent(DxFontConfig);

(DxFont as any).$_optionName = "font";

const DxFormatConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:currency": null,
    "update:formatter": null,
    "update:parser": null,
    "update:precision": null,
    "update:type": null,
    "update:useCurrencyAccountingStyle": null,
  },
  props: {
    currency: String,
    formatter: Function,
    parser: Function,
    precision: Number,
    type: {},
    useCurrencyAccountingStyle: Boolean
  }
};

prepareConfigurationComponentConfig(DxFormatConfig);

const DxFormat = defineComponent(DxFormatConfig);

(DxFormat as any).$_optionName = "format";

const DxGroupConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:border": null,
    "update:color": null,
    "update:headerHeight": null,
    "update:hoverEnabled": null,
    "update:hoverStyle": null,
    "update:label": null,
    "update:padding": null,
    "update:selectionStyle": null,
  },
  props: {
    border: Object,
    color: String,
    headerHeight: {},
    hoverEnabled: {},
    hoverStyle: Object,
    label: Object,
    padding: Number,
    selectionStyle: Object
  }
};

prepareConfigurationComponentConfig(DxGroupConfig);

const DxGroup = defineComponent(DxGroupConfig);

(DxGroup as any).$_optionName = "group";
(DxGroup as any).$_expectedChildren = {
  border: { isCollectionItem: false, optionName: "border" },
  groupLabel: { isCollectionItem: false, optionName: "label" },
  hoverStyle: { isCollectionItem: false, optionName: "hoverStyle" },
  label: { isCollectionItem: false, optionName: "label" },
  selectionStyle: { isCollectionItem: false, optionName: "selectionStyle" },
  treeMapborder: { isCollectionItem: false, optionName: "border" }
};

const DxGroupLabelConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:font": null,
    "update:textOverflow": null,
    "update:visible": null,
  },
  props: {
    font: Object,
    textOverflow: {},
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxGroupLabelConfig);

const DxGroupLabel = defineComponent(DxGroupLabelConfig);

(DxGroupLabel as any).$_optionName = "label";
(DxGroupLabel as any).$_expectedChildren = {
  font: { isCollectionItem: false, optionName: "font" }
};

const DxHoverStyleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:border": null,
    "update:color": null,
  },
  props: {
    border: Object,
    color: {}
  }
};

prepareConfigurationComponentConfig(DxHoverStyleConfig);

const DxHoverStyle = defineComponent(DxHoverStyleConfig);

(DxHoverStyle as any).$_optionName = "hoverStyle";

const DxLabelConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:font": null,
    "update:textOverflow": null,
    "update:visible": null,
    "update:wordWrap": null,
  },
  props: {
    font: Object,
    textOverflow: {},
    visible: Boolean,
    wordWrap: {}
  }
};

prepareConfigurationComponentConfig(DxLabelConfig);

const DxLabel = defineComponent(DxLabelConfig);

(DxLabel as any).$_optionName = "label";

const DxLoadingIndicatorConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:backgroundColor": null,
    "update:enabled": null,
    "update:font": null,
    "update:show": null,
    "update:text": null,
  },
  props: {
    backgroundColor: String,
    enabled: Boolean,
    font: Object,
    show: Boolean,
    text: String
  }
};

prepareConfigurationComponentConfig(DxLoadingIndicatorConfig);

const DxLoadingIndicator = defineComponent(DxLoadingIndicatorConfig);

(DxLoadingIndicator as any).$_optionName = "loadingIndicator";
(DxLoadingIndicator as any).$_expectedChildren = {
  font: { isCollectionItem: false, optionName: "font" }
};

const DxMarginConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:bottom": null,
    "update:left": null,
    "update:right": null,
    "update:top": null,
  },
  props: {
    bottom: Number,
    left: Number,
    right: Number,
    top: Number
  }
};

prepareConfigurationComponentConfig(DxMarginConfig);

const DxMargin = defineComponent(DxMarginConfig);

(DxMargin as any).$_optionName = "margin";

const DxSelectionStyleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:border": null,
    "update:color": null,
  },
  props: {
    border: Object,
    color: {}
  }
};

prepareConfigurationComponentConfig(DxSelectionStyleConfig);

const DxSelectionStyle = defineComponent(DxSelectionStyleConfig);

(DxSelectionStyle as any).$_optionName = "selectionStyle";

const DxShadowConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:blur": null,
    "update:color": null,
    "update:offsetX": null,
    "update:offsetY": null,
    "update:opacity": null,
  },
  props: {
    blur: Number,
    color: String,
    offsetX: Number,
    offsetY: Number,
    opacity: Number
  }
};

prepareConfigurationComponentConfig(DxShadowConfig);

const DxShadow = defineComponent(DxShadowConfig);

(DxShadow as any).$_optionName = "shadow";

const DxSizeConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:height": null,
    "update:width": null,
  },
  props: {
    height: {},
    width: {}
  }
};

prepareConfigurationComponentConfig(DxSizeConfig);

const DxSize = defineComponent(DxSizeConfig);

(DxSize as any).$_optionName = "size";

const DxSubtitleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:font": null,
    "update:offset": null,
    "update:text": null,
    "update:textOverflow": null,
    "update:wordWrap": null,
  },
  props: {
    font: Object,
    offset: Number,
    text: String,
    textOverflow: {},
    wordWrap: {}
  }
};

prepareConfigurationComponentConfig(DxSubtitleConfig);

const DxSubtitle = defineComponent(DxSubtitleConfig);

(DxSubtitle as any).$_optionName = "subtitle";
(DxSubtitle as any).$_expectedChildren = {
  font: { isCollectionItem: false, optionName: "font" }
};

const DxTileConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:border": null,
    "update:color": null,
    "update:hoverStyle": null,
    "update:label": null,
    "update:selectionStyle": null,
  },
  props: {
    border: Object,
    color: String,
    hoverStyle: Object,
    label: Object,
    selectionStyle: Object
  }
};

prepareConfigurationComponentConfig(DxTileConfig);

const DxTile = defineComponent(DxTileConfig);

(DxTile as any).$_optionName = "tile";
(DxTile as any).$_expectedChildren = {
  border: { isCollectionItem: false, optionName: "border" },
  hoverStyle: { isCollectionItem: false, optionName: "hoverStyle" },
  label: { isCollectionItem: false, optionName: "label" },
  selectionStyle: { isCollectionItem: false, optionName: "selectionStyle" },
  tileLabel: { isCollectionItem: false, optionName: "label" },
  treeMapborder: { isCollectionItem: false, optionName: "border" }
};

const DxTileLabelConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:font": null,
    "update:textOverflow": null,
    "update:visible": null,
    "update:wordWrap": null,
  },
  props: {
    font: Object,
    textOverflow: {},
    visible: Boolean,
    wordWrap: {}
  }
};

prepareConfigurationComponentConfig(DxTileLabelConfig);

const DxTileLabel = defineComponent(DxTileLabelConfig);

(DxTileLabel as any).$_optionName = "label";
(DxTileLabel as any).$_expectedChildren = {
  font: { isCollectionItem: false, optionName: "font" }
};

const DxTitleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:font": null,
    "update:horizontalAlignment": null,
    "update:margin": null,
    "update:placeholderSize": null,
    "update:subtitle": null,
    "update:text": null,
    "update:textOverflow": null,
    "update:verticalAlignment": null,
    "update:wordWrap": null,
  },
  props: {
    font: Object,
    horizontalAlignment: {},
    margin: [Number, Object],
    placeholderSize: {},
    subtitle: [Object, String],
    text: String,
    textOverflow: {},
    verticalAlignment: {},
    wordWrap: {}
  }
};

prepareConfigurationComponentConfig(DxTitleConfig);

const DxTitle = defineComponent(DxTitleConfig);

(DxTitle as any).$_optionName = "title";
(DxTitle as any).$_expectedChildren = {
  font: { isCollectionItem: false, optionName: "font" },
  margin: { isCollectionItem: false, optionName: "margin" },
  subtitle: { isCollectionItem: false, optionName: "subtitle" }
};

const DxTooltipConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:arrowLength": null,
    "update:border": null,
    "update:color": null,
    "update:container": null,
    "update:contentTemplate": null,
    "update:cornerRadius": null,
    "update:customizeTooltip": null,
    "update:enabled": null,
    "update:font": null,
    "update:format": null,
    "update:opacity": null,
    "update:paddingLeftRight": null,
    "update:paddingTopBottom": null,
    "update:shadow": null,
    "update:zIndex": null,
  },
  props: {
    arrowLength: Number,
    border: Object,
    color: String,
    container: {},
    contentTemplate: {},
    cornerRadius: Number,
    customizeTooltip: {},
    enabled: Boolean,
    font: Object,
    format: {},
    opacity: {},
    paddingLeftRight: Number,
    paddingTopBottom: Number,
    shadow: Object,
    zIndex: {}
  }
};

prepareConfigurationComponentConfig(DxTooltipConfig);

const DxTooltip = defineComponent(DxTooltipConfig);

(DxTooltip as any).$_optionName = "tooltip";
(DxTooltip as any).$_expectedChildren = {
  border: { isCollectionItem: false, optionName: "border" },
  font: { isCollectionItem: false, optionName: "font" },
  format: { isCollectionItem: false, optionName: "format" },
  shadow: { isCollectionItem: false, optionName: "shadow" },
  tooltipBorder: { isCollectionItem: false, optionName: "border" }
};

const DxTooltipBorderConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:dashStyle": null,
    "update:opacity": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    color: String,
    dashStyle: {},
    opacity: {},
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxTooltipBorderConfig);

const DxTooltipBorder = defineComponent(DxTooltipBorderConfig);

(DxTooltipBorder as any).$_optionName = "border";

const DxTreeMapborderConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:width": null,
  },
  props: {
    color: {},
    width: {}
  }
};

prepareConfigurationComponentConfig(DxTreeMapborderConfig);

const DxTreeMapborder = defineComponent(DxTreeMapborderConfig);

(DxTreeMapborder as any).$_optionName = "border";

export default DxTreeMap;
export {
  DxTreeMap,
  DxBorder,
  DxColorizer,
  DxExport,
  DxFont,
  DxFormat,
  DxGroup,
  DxGroupLabel,
  DxHoverStyle,
  DxLabel,
  DxLoadingIndicator,
  DxMargin,
  DxSelectionStyle,
  DxShadow,
  DxSize,
  DxSubtitle,
  DxTile,
  DxTileLabel,
  DxTitle,
  DxTooltip,
  DxTooltipBorder,
  DxTreeMapborder
};
import type * as DxTreeMapTypes from "devextreme/viz/tree_map_types";
export { DxTreeMapTypes };
