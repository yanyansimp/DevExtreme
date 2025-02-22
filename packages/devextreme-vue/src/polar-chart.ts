import PolarChart, { Properties } from "devextreme/viz/polar_chart";
import { defineComponent } from "vue";
import { prepareComponentConfig } from "./core/index";
import { prepareConfigurationComponentConfig } from "./core/index";

type AccessibleOptions = Pick<Properties,
  "adaptiveLayout" |
  "animation" |
  "annotations" |
  "argumentAxis" |
  "barGroupPadding" |
  "barGroupWidth" |
  "commonAnnotationSettings" |
  "commonAxisSettings" |
  "commonSeriesSettings" |
  "containerBackgroundColor" |
  "customizeAnnotation" |
  "customizeLabel" |
  "customizePoint" |
  "dataPrepareSettings" |
  "dataSource" |
  "disabled" |
  "elementAttr" |
  "export" |
  "legend" |
  "loadingIndicator" |
  "margin" |
  "negativesAsZeroes" |
  "onArgumentAxisClick" |
  "onDisposing" |
  "onDone" |
  "onDrawn" |
  "onExported" |
  "onExporting" |
  "onFileSaving" |
  "onIncidentOccurred" |
  "onInitialized" |
  "onLegendClick" |
  "onOptionChanged" |
  "onPointClick" |
  "onPointHoverChanged" |
  "onPointSelectionChanged" |
  "onSeriesClick" |
  "onSeriesHoverChanged" |
  "onSeriesSelectionChanged" |
  "onTooltipHidden" |
  "onTooltipShown" |
  "onZoomEnd" |
  "onZoomStart" |
  "palette" |
  "paletteExtensionMode" |
  "pathModified" |
  "pointSelectionMode" |
  "redrawOnResize" |
  "resolveLabelOverlapping" |
  "rtlEnabled" |
  "series" |
  "seriesSelectionMode" |
  "seriesTemplate" |
  "size" |
  "theme" |
  "title" |
  "tooltip" |
  "useSpiderWeb" |
  "valueAxis"
>;

interface DxPolarChart extends AccessibleOptions {
  readonly instance?: PolarChart;
}

const componentConfig = {
  props: {
    adaptiveLayout: Object,
    animation: [Boolean, Object],
    annotations: Array,
    argumentAxis: Object,
    barGroupPadding: Number,
    barGroupWidth: {},
    commonAnnotationSettings: Object,
    commonAxisSettings: Object,
    commonSeriesSettings: Object,
    containerBackgroundColor: String,
    customizeAnnotation: {},
    customizeLabel: Function,
    customizePoint: Function,
    dataPrepareSettings: Object,
    dataSource: {},
    disabled: Boolean,
    elementAttr: Object,
    export: Object,
    legend: Object,
    loadingIndicator: Object,
    margin: Object,
    negativesAsZeroes: Boolean,
    onArgumentAxisClick: Function,
    onDisposing: Function,
    onDone: Function,
    onDrawn: Function,
    onExported: Function,
    onExporting: Function,
    onFileSaving: Function,
    onIncidentOccurred: Function,
    onInitialized: Function,
    onLegendClick: Function,
    onOptionChanged: Function,
    onPointClick: Function,
    onPointHoverChanged: Function,
    onPointSelectionChanged: Function,
    onSeriesClick: Function,
    onSeriesHoverChanged: Function,
    onSeriesSelectionChanged: Function,
    onTooltipHidden: Function,
    onTooltipShown: Function,
    onZoomEnd: Function,
    onZoomStart: Function,
    palette: {},
    paletteExtensionMode: {},
    pathModified: Boolean,
    pointSelectionMode: {},
    redrawOnResize: Boolean,
    resolveLabelOverlapping: {},
    rtlEnabled: Boolean,
    series: {},
    seriesSelectionMode: {},
    seriesTemplate: Object,
    size: Object,
    theme: {},
    title: [Object, String],
    tooltip: Object,
    useSpiderWeb: Boolean,
    valueAxis: Object
  },
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:adaptiveLayout": null,
    "update:animation": null,
    "update:annotations": null,
    "update:argumentAxis": null,
    "update:barGroupPadding": null,
    "update:barGroupWidth": null,
    "update:commonAnnotationSettings": null,
    "update:commonAxisSettings": null,
    "update:commonSeriesSettings": null,
    "update:containerBackgroundColor": null,
    "update:customizeAnnotation": null,
    "update:customizeLabel": null,
    "update:customizePoint": null,
    "update:dataPrepareSettings": null,
    "update:dataSource": null,
    "update:disabled": null,
    "update:elementAttr": null,
    "update:export": null,
    "update:legend": null,
    "update:loadingIndicator": null,
    "update:margin": null,
    "update:negativesAsZeroes": null,
    "update:onArgumentAxisClick": null,
    "update:onDisposing": null,
    "update:onDone": null,
    "update:onDrawn": null,
    "update:onExported": null,
    "update:onExporting": null,
    "update:onFileSaving": null,
    "update:onIncidentOccurred": null,
    "update:onInitialized": null,
    "update:onLegendClick": null,
    "update:onOptionChanged": null,
    "update:onPointClick": null,
    "update:onPointHoverChanged": null,
    "update:onPointSelectionChanged": null,
    "update:onSeriesClick": null,
    "update:onSeriesHoverChanged": null,
    "update:onSeriesSelectionChanged": null,
    "update:onTooltipHidden": null,
    "update:onTooltipShown": null,
    "update:onZoomEnd": null,
    "update:onZoomStart": null,
    "update:palette": null,
    "update:paletteExtensionMode": null,
    "update:pathModified": null,
    "update:pointSelectionMode": null,
    "update:redrawOnResize": null,
    "update:resolveLabelOverlapping": null,
    "update:rtlEnabled": null,
    "update:series": null,
    "update:seriesSelectionMode": null,
    "update:seriesTemplate": null,
    "update:size": null,
    "update:theme": null,
    "update:title": null,
    "update:tooltip": null,
    "update:useSpiderWeb": null,
    "update:valueAxis": null,
  },
  computed: {
    instance(): PolarChart {
      return (this as any).$_instance;
    }
  },
  beforeCreate() {
    (this as any).$_WidgetClass = PolarChart;
    (this as any).$_hasAsyncTemplate = true;
    (this as any).$_expectedChildren = {
      adaptiveLayout: { isCollectionItem: false, optionName: "adaptiveLayout" },
      animation: { isCollectionItem: false, optionName: "animation" },
      annotation: { isCollectionItem: true, optionName: "annotations" },
      argumentAxis: { isCollectionItem: false, optionName: "argumentAxis" },
      commonAnnotationSettings: { isCollectionItem: false, optionName: "commonAnnotationSettings" },
      commonAxisSettings: { isCollectionItem: false, optionName: "commonAxisSettings" },
      commonSeriesSettings: { isCollectionItem: false, optionName: "commonSeriesSettings" },
      dataPrepareSettings: { isCollectionItem: false, optionName: "dataPrepareSettings" },
      export: { isCollectionItem: false, optionName: "export" },
      legend: { isCollectionItem: false, optionName: "legend" },
      loadingIndicator: { isCollectionItem: false, optionName: "loadingIndicator" },
      margin: { isCollectionItem: false, optionName: "margin" },
      polarChartTitle: { isCollectionItem: false, optionName: "title" },
      series: { isCollectionItem: true, optionName: "series" },
      seriesTemplate: { isCollectionItem: false, optionName: "seriesTemplate" },
      size: { isCollectionItem: false, optionName: "size" },
      title: { isCollectionItem: false, optionName: "title" },
      tooltip: { isCollectionItem: false, optionName: "tooltip" },
      valueAxis: { isCollectionItem: false, optionName: "valueAxis" }
    };
  }
};

prepareComponentConfig(componentConfig);

const DxPolarChart = defineComponent(componentConfig);


const DxAdaptiveLayoutConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:height": null,
    "update:keepLabels": null,
    "update:width": null,
  },
  props: {
    height: Number,
    keepLabels: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxAdaptiveLayoutConfig);

const DxAdaptiveLayout = defineComponent(DxAdaptiveLayoutConfig);

(DxAdaptiveLayout as any).$_optionName = "adaptiveLayout";

const DxAnimationConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:duration": null,
    "update:easing": null,
    "update:enabled": null,
    "update:maxPointCountSupported": null,
  },
  props: {
    duration: Number,
    easing: {},
    enabled: Boolean,
    maxPointCountSupported: Number
  }
};

prepareConfigurationComponentConfig(DxAnimationConfig);

const DxAnimation = defineComponent(DxAnimationConfig);

(DxAnimation as any).$_optionName = "animation";

const DxAnnotationConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowDragging": null,
    "update:angle": null,
    "update:argument": null,
    "update:arrowLength": null,
    "update:arrowWidth": null,
    "update:border": null,
    "update:color": null,
    "update:customizeTooltip": null,
    "update:data": null,
    "update:description": null,
    "update:font": null,
    "update:height": null,
    "update:image": null,
    "update:name": null,
    "update:offsetX": null,
    "update:offsetY": null,
    "update:opacity": null,
    "update:paddingLeftRight": null,
    "update:paddingTopBottom": null,
    "update:radius": null,
    "update:series": null,
    "update:shadow": null,
    "update:template": null,
    "update:text": null,
    "update:textOverflow": null,
    "update:tooltipEnabled": null,
    "update:tooltipTemplate": null,
    "update:type": null,
    "update:value": null,
    "update:width": null,
    "update:wordWrap": null,
    "update:x": null,
    "update:y": null,
  },
  props: {
    allowDragging: Boolean,
    angle: {},
    argument: {},
    arrowLength: Number,
    arrowWidth: Number,
    border: Object,
    color: String,
    customizeTooltip: {},
    data: {},
    description: {},
    font: Object,
    height: {},
    image: [Object, String],
    name: {},
    offsetX: {},
    offsetY: {},
    opacity: Number,
    paddingLeftRight: Number,
    paddingTopBottom: Number,
    radius: {},
    series: {},
    shadow: Object,
    template: {},
    text: {},
    textOverflow: {},
    tooltipEnabled: Boolean,
    tooltipTemplate: {},
    type: {},
    value: {},
    width: {},
    wordWrap: {},
    x: {},
    y: {}
  }
};

prepareConfigurationComponentConfig(DxAnnotationConfig);

const DxAnnotation = defineComponent(DxAnnotationConfig);

(DxAnnotation as any).$_optionName = "annotations";
(DxAnnotation as any).$_isCollectionItem = true;
(DxAnnotation as any).$_expectedChildren = {
  annotationBorder: { isCollectionItem: false, optionName: "border" },
  border: { isCollectionItem: false, optionName: "border" },
  font: { isCollectionItem: false, optionName: "font" },
  image: { isCollectionItem: false, optionName: "image" },
  shadow: { isCollectionItem: false, optionName: "shadow" }
};

const DxAnnotationBorderConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:cornerRadius": null,
    "update:dashStyle": null,
    "update:opacity": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    color: String,
    cornerRadius: Number,
    dashStyle: {},
    opacity: {},
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxAnnotationBorderConfig);

const DxAnnotationBorder = defineComponent(DxAnnotationBorderConfig);

(DxAnnotationBorder as any).$_optionName = "border";

const DxArgumentAxisConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowDecimals": null,
    "update:argumentType": null,
    "update:axisDivisionFactor": null,
    "update:categories": null,
    "update:color": null,
    "update:constantLines": null,
    "update:constantLineStyle": null,
    "update:discreteAxisDivisionMode": null,
    "update:endOnTick": null,
    "update:firstPointOnStartAngle": null,
    "update:grid": null,
    "update:hoverMode": null,
    "update:inverted": null,
    "update:label": null,
    "update:linearThreshold": null,
    "update:logarithmBase": null,
    "update:minorGrid": null,
    "update:minorTick": null,
    "update:minorTickCount": null,
    "update:minorTickInterval": null,
    "update:opacity": null,
    "update:originValue": null,
    "update:period": null,
    "update:startAngle": null,
    "update:strips": null,
    "update:stripStyle": null,
    "update:tick": null,
    "update:tickInterval": null,
    "update:type": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    allowDecimals: {},
    argumentType: {},
    axisDivisionFactor: Number,
    categories: Array,
    color: String,
    constantLines: Array,
    constantLineStyle: Object,
    discreteAxisDivisionMode: {},
    endOnTick: {},
    firstPointOnStartAngle: Boolean,
    grid: Object,
    hoverMode: {},
    inverted: Boolean,
    label: Object,
    linearThreshold: {},
    logarithmBase: Number,
    minorGrid: Object,
    minorTick: Object,
    minorTickCount: {},
    minorTickInterval: {},
    opacity: {},
    originValue: {},
    period: {},
    startAngle: Number,
    strips: Array,
    stripStyle: Object,
    tick: Object,
    tickInterval: {},
    type: {},
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxArgumentAxisConfig);

const DxArgumentAxis = defineComponent(DxArgumentAxisConfig);

(DxArgumentAxis as any).$_optionName = "argumentAxis";
(DxArgumentAxis as any).$_expectedChildren = {
  argumentAxisMinorTick: { isCollectionItem: false, optionName: "minorTick" },
  argumentAxisTick: { isCollectionItem: false, optionName: "tick" },
  axisLabel: { isCollectionItem: false, optionName: "label" },
  constantLine: { isCollectionItem: true, optionName: "constantLines" },
  constantLineStyle: { isCollectionItem: false, optionName: "constantLineStyle" },
  grid: { isCollectionItem: false, optionName: "grid" },
  label: { isCollectionItem: false, optionName: "label" },
  minorGrid: { isCollectionItem: false, optionName: "minorGrid" },
  minorTick: { isCollectionItem: false, optionName: "minorTick" },
  minorTickInterval: { isCollectionItem: false, optionName: "minorTickInterval" },
  strip: { isCollectionItem: true, optionName: "strips" },
  stripStyle: { isCollectionItem: false, optionName: "stripStyle" },
  tick: { isCollectionItem: false, optionName: "tick" },
  tickInterval: { isCollectionItem: false, optionName: "tickInterval" }
};

const DxArgumentAxisMinorTickConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:length": null,
    "update:opacity": null,
    "update:shift": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    color: String,
    length: Number,
    opacity: Number,
    shift: Number,
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxArgumentAxisMinorTickConfig);

const DxArgumentAxisMinorTick = defineComponent(DxArgumentAxisMinorTickConfig);

(DxArgumentAxisMinorTick as any).$_optionName = "minorTick";

const DxArgumentAxisTickConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:length": null,
    "update:opacity": null,
    "update:shift": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    color: String,
    length: Number,
    opacity: {},
    shift: Number,
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxArgumentAxisTickConfig);

const DxArgumentAxisTick = defineComponent(DxArgumentAxisTickConfig);

(DxArgumentAxisTick as any).$_optionName = "tick";

const DxArgumentFormatConfig = {
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

prepareConfigurationComponentConfig(DxArgumentFormatConfig);

const DxArgumentFormat = defineComponent(DxArgumentFormatConfig);

(DxArgumentFormat as any).$_optionName = "argumentFormat";

const DxAxisLabelConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:customizeHint": null,
    "update:customizeText": null,
    "update:font": null,
    "update:format": null,
    "update:indentFromAxis": null,
    "update:overlappingBehavior": null,
    "update:visible": null,
  },
  props: {
    customizeHint: Function,
    customizeText: Function,
    font: Object,
    format: {},
    indentFromAxis: Number,
    overlappingBehavior: {},
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxAxisLabelConfig);

const DxAxisLabel = defineComponent(DxAxisLabelConfig);

(DxAxisLabel as any).$_optionName = "label";

const DxBorderConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:cornerRadius": null,
    "update:dashStyle": null,
    "update:opacity": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    color: {},
    cornerRadius: Number,
    dashStyle: {},
    opacity: {},
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxBorderConfig);

const DxBorder = defineComponent(DxBorderConfig);

(DxBorder as any).$_optionName = "border";

const DxColorConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:base": null,
    "update:fillId": null,
  },
  props: {
    base: {},
    fillId: {}
  }
};

prepareConfigurationComponentConfig(DxColorConfig);

const DxColor = defineComponent(DxColorConfig);

(DxColor as any).$_optionName = "color";

const DxCommonAnnotationSettingsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowDragging": null,
    "update:angle": null,
    "update:argument": null,
    "update:arrowLength": null,
    "update:arrowWidth": null,
    "update:border": null,
    "update:color": null,
    "update:customizeTooltip": null,
    "update:data": null,
    "update:description": null,
    "update:font": null,
    "update:height": null,
    "update:image": null,
    "update:offsetX": null,
    "update:offsetY": null,
    "update:opacity": null,
    "update:paddingLeftRight": null,
    "update:paddingTopBottom": null,
    "update:radius": null,
    "update:series": null,
    "update:shadow": null,
    "update:template": null,
    "update:text": null,
    "update:textOverflow": null,
    "update:tooltipEnabled": null,
    "update:tooltipTemplate": null,
    "update:type": null,
    "update:value": null,
    "update:width": null,
    "update:wordWrap": null,
    "update:x": null,
    "update:y": null,
  },
  props: {
    allowDragging: Boolean,
    angle: {},
    argument: {},
    arrowLength: Number,
    arrowWidth: Number,
    border: Object,
    color: String,
    customizeTooltip: {},
    data: {},
    description: {},
    font: Object,
    height: {},
    image: [Object, String],
    offsetX: {},
    offsetY: {},
    opacity: Number,
    paddingLeftRight: Number,
    paddingTopBottom: Number,
    radius: {},
    series: {},
    shadow: Object,
    template: {},
    text: {},
    textOverflow: {},
    tooltipEnabled: Boolean,
    tooltipTemplate: {},
    type: {},
    value: {},
    width: {},
    wordWrap: {},
    x: {},
    y: {}
  }
};

prepareConfigurationComponentConfig(DxCommonAnnotationSettingsConfig);

const DxCommonAnnotationSettings = defineComponent(DxCommonAnnotationSettingsConfig);

(DxCommonAnnotationSettings as any).$_optionName = "commonAnnotationSettings";

const DxCommonAxisSettingsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowDecimals": null,
    "update:color": null,
    "update:constantLineStyle": null,
    "update:discreteAxisDivisionMode": null,
    "update:endOnTick": null,
    "update:grid": null,
    "update:inverted": null,
    "update:label": null,
    "update:minorGrid": null,
    "update:minorTick": null,
    "update:opacity": null,
    "update:stripStyle": null,
    "update:tick": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    allowDecimals: {},
    color: String,
    constantLineStyle: Object,
    discreteAxisDivisionMode: {},
    endOnTick: {},
    grid: Object,
    inverted: Boolean,
    label: Object,
    minorGrid: Object,
    minorTick: Object,
    opacity: {},
    stripStyle: Object,
    tick: Object,
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxCommonAxisSettingsConfig);

const DxCommonAxisSettings = defineComponent(DxCommonAxisSettingsConfig);

(DxCommonAxisSettings as any).$_optionName = "commonAxisSettings";
(DxCommonAxisSettings as any).$_expectedChildren = {
  commonAxisSettingsLabel: { isCollectionItem: false, optionName: "label" },
  commonAxisSettingsMinorTick: { isCollectionItem: false, optionName: "minorTick" },
  commonAxisSettingsTick: { isCollectionItem: false, optionName: "tick" },
  label: { isCollectionItem: false, optionName: "label" },
  minorTick: { isCollectionItem: false, optionName: "minorTick" },
  tick: { isCollectionItem: false, optionName: "tick" }
};

const DxCommonAxisSettingsLabelConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:font": null,
    "update:indentFromAxis": null,
    "update:overlappingBehavior": null,
    "update:visible": null,
  },
  props: {
    font: Object,
    indentFromAxis: Number,
    overlappingBehavior: {},
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxCommonAxisSettingsLabelConfig);

const DxCommonAxisSettingsLabel = defineComponent(DxCommonAxisSettingsLabelConfig);

(DxCommonAxisSettingsLabel as any).$_optionName = "label";

const DxCommonAxisSettingsMinorTickConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:length": null,
    "update:opacity": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    color: String,
    length: Number,
    opacity: Number,
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxCommonAxisSettingsMinorTickConfig);

const DxCommonAxisSettingsMinorTick = defineComponent(DxCommonAxisSettingsMinorTickConfig);

(DxCommonAxisSettingsMinorTick as any).$_optionName = "minorTick";

const DxCommonAxisSettingsTickConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:length": null,
    "update:opacity": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    color: String,
    length: Number,
    opacity: {},
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxCommonAxisSettingsTickConfig);

const DxCommonAxisSettingsTick = defineComponent(DxCommonAxisSettingsTickConfig);

(DxCommonAxisSettingsTick as any).$_optionName = "tick";

const DxCommonSeriesSettingsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:area": null,
    "update:argumentField": null,
    "update:bar": null,
    "update:barPadding": null,
    "update:barWidth": null,
    "update:border": null,
    "update:closed": null,
    "update:color": null,
    "update:dashStyle": null,
    "update:hoverMode": null,
    "update:hoverStyle": null,
    "update:ignoreEmptyPoints": null,
    "update:label": null,
    "update:line": null,
    "update:maxLabelCount": null,
    "update:minBarSize": null,
    "update:opacity": null,
    "update:point": null,
    "update:scatter": null,
    "update:selectionMode": null,
    "update:selectionStyle": null,
    "update:showInLegend": null,
    "update:stack": null,
    "update:stackedbar": null,
    "update:tagField": null,
    "update:type": null,
    "update:valueErrorBar": null,
    "update:valueField": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    area: {},
    argumentField: String,
    bar: {},
    barPadding: {},
    barWidth: {},
    border: Object,
    closed: Boolean,
    color: {},
    dashStyle: {},
    hoverMode: {},
    hoverStyle: Object,
    ignoreEmptyPoints: Boolean,
    label: Object,
    line: {},
    maxLabelCount: {},
    minBarSize: {},
    opacity: Number,
    point: Object,
    scatter: {},
    selectionMode: {},
    selectionStyle: Object,
    showInLegend: Boolean,
    stack: String,
    stackedbar: {},
    tagField: String,
    type: {},
    valueErrorBar: Object,
    valueField: String,
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxCommonSeriesSettingsConfig);

const DxCommonSeriesSettings = defineComponent(DxCommonSeriesSettingsConfig);

(DxCommonSeriesSettings as any).$_optionName = "commonSeriesSettings";
(DxCommonSeriesSettings as any).$_expectedChildren = {
  border: { isCollectionItem: false, optionName: "border" },
  color: { isCollectionItem: false, optionName: "color" },
  commonSeriesSettingsHoverStyle: { isCollectionItem: false, optionName: "hoverStyle" },
  commonSeriesSettingsLabel: { isCollectionItem: false, optionName: "label" },
  commonSeriesSettingsSelectionStyle: { isCollectionItem: false, optionName: "selectionStyle" },
  hoverStyle: { isCollectionItem: false, optionName: "hoverStyle" },
  label: { isCollectionItem: false, optionName: "label" },
  point: { isCollectionItem: false, optionName: "point" },
  selectionStyle: { isCollectionItem: false, optionName: "selectionStyle" },
  seriesBorder: { isCollectionItem: false, optionName: "border" },
  valueErrorBar: { isCollectionItem: false, optionName: "valueErrorBar" }
};

const DxCommonSeriesSettingsHoverStyleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:border": null,
    "update:color": null,
    "update:dashStyle": null,
    "update:hatching": null,
    "update:highlight": null,
    "update:width": null,
  },
  props: {
    border: Object,
    color: {},
    dashStyle: {},
    hatching: Object,
    highlight: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxCommonSeriesSettingsHoverStyleConfig);

const DxCommonSeriesSettingsHoverStyle = defineComponent(DxCommonSeriesSettingsHoverStyleConfig);

(DxCommonSeriesSettingsHoverStyle as any).$_optionName = "hoverStyle";
(DxCommonSeriesSettingsHoverStyle as any).$_expectedChildren = {
  border: { isCollectionItem: false, optionName: "border" },
  color: { isCollectionItem: false, optionName: "color" },
  hatching: { isCollectionItem: false, optionName: "hatching" },
  seriesBorder: { isCollectionItem: false, optionName: "border" }
};

const DxCommonSeriesSettingsLabelConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:argumentFormat": null,
    "update:backgroundColor": null,
    "update:border": null,
    "update:connector": null,
    "update:customizeText": null,
    "update:displayFormat": null,
    "update:font": null,
    "update:format": null,
    "update:position": null,
    "update:rotationAngle": null,
    "update:showForZeroValues": null,
    "update:visible": null,
  },
  props: {
    argumentFormat: {},
    backgroundColor: {},
    border: Object,
    connector: Object,
    customizeText: Function,
    displayFormat: {},
    font: Object,
    format: {},
    position: {},
    rotationAngle: Number,
    showForZeroValues: Boolean,
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxCommonSeriesSettingsLabelConfig);

const DxCommonSeriesSettingsLabel = defineComponent(DxCommonSeriesSettingsLabelConfig);

(DxCommonSeriesSettingsLabel as any).$_optionName = "label";
(DxCommonSeriesSettingsLabel as any).$_expectedChildren = {
  argumentFormat: { isCollectionItem: false, optionName: "argumentFormat" },
  border: { isCollectionItem: false, optionName: "border" },
  connector: { isCollectionItem: false, optionName: "connector" },
  font: { isCollectionItem: false, optionName: "font" },
  format: { isCollectionItem: false, optionName: "format" },
  seriesBorder: { isCollectionItem: false, optionName: "border" }
};

const DxCommonSeriesSettingsSelectionStyleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:border": null,
    "update:color": null,
    "update:dashStyle": null,
    "update:hatching": null,
    "update:highlight": null,
    "update:width": null,
  },
  props: {
    border: Object,
    color: {},
    dashStyle: {},
    hatching: Object,
    highlight: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxCommonSeriesSettingsSelectionStyleConfig);

const DxCommonSeriesSettingsSelectionStyle = defineComponent(DxCommonSeriesSettingsSelectionStyleConfig);

(DxCommonSeriesSettingsSelectionStyle as any).$_optionName = "selectionStyle";
(DxCommonSeriesSettingsSelectionStyle as any).$_expectedChildren = {
  border: { isCollectionItem: false, optionName: "border" },
  color: { isCollectionItem: false, optionName: "color" },
  hatching: { isCollectionItem: false, optionName: "hatching" },
  seriesBorder: { isCollectionItem: false, optionName: "border" }
};

const DxConnectorConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    color: {},
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxConnectorConfig);

const DxConnector = defineComponent(DxConnectorConfig);

(DxConnector as any).$_optionName = "connector";

const DxConstantLineConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:dashStyle": null,
    "update:displayBehindSeries": null,
    "update:extendAxis": null,
    "update:label": null,
    "update:value": null,
    "update:width": null,
  },
  props: {
    color: String,
    dashStyle: {},
    displayBehindSeries: Boolean,
    extendAxis: Boolean,
    label: Object,
    value: {},
    width: Number
  }
};

prepareConfigurationComponentConfig(DxConstantLineConfig);

const DxConstantLine = defineComponent(DxConstantLineConfig);

(DxConstantLine as any).$_optionName = "constantLines";
(DxConstantLine as any).$_isCollectionItem = true;

const DxConstantLineLabelConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:font": null,
    "update:text": null,
    "update:visible": null,
  },
  props: {
    font: Object,
    text: {},
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxConstantLineLabelConfig);

const DxConstantLineLabel = defineComponent(DxConstantLineLabelConfig);

(DxConstantLineLabel as any).$_optionName = "label";

const DxConstantLineStyleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:dashStyle": null,
    "update:label": null,
    "update:width": null,
  },
  props: {
    color: String,
    dashStyle: {},
    label: Object,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxConstantLineStyleConfig);

const DxConstantLineStyle = defineComponent(DxConstantLineStyleConfig);

(DxConstantLineStyle as any).$_optionName = "constantLineStyle";
(DxConstantLineStyle as any).$_expectedChildren = {
  constantLineStyleLabel: { isCollectionItem: false, optionName: "label" },
  label: { isCollectionItem: false, optionName: "label" }
};

const DxConstantLineStyleLabelConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:font": null,
    "update:visible": null,
  },
  props: {
    font: Object,
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxConstantLineStyleLabelConfig);

const DxConstantLineStyleLabel = defineComponent(DxConstantLineStyleLabelConfig);

(DxConstantLineStyleLabel as any).$_optionName = "label";

const DxDataPrepareSettingsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:checkTypeForAllData": null,
    "update:convertToAxisDataType": null,
    "update:sortingMethod": null,
  },
  props: {
    checkTypeForAllData: Boolean,
    convertToAxisDataType: Boolean,
    sortingMethod: [Boolean, Function]
  }
};

prepareConfigurationComponentConfig(DxDataPrepareSettingsConfig);

const DxDataPrepareSettings = defineComponent(DxDataPrepareSettingsConfig);

(DxDataPrepareSettings as any).$_optionName = "dataPrepareSettings";

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

const DxGridConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:opacity": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    color: String,
    opacity: {},
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxGridConfig);

const DxGrid = defineComponent(DxGridConfig);

(DxGrid as any).$_optionName = "grid";

const DxHatchingConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:direction": null,
    "update:opacity": null,
    "update:step": null,
    "update:width": null,
  },
  props: {
    direction: {},
    opacity: Number,
    step: Number,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxHatchingConfig);

const DxHatching = defineComponent(DxHatchingConfig);

(DxHatching as any).$_optionName = "hatching";

const DxHoverStyleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:border": null,
    "update:color": null,
    "update:dashStyle": null,
    "update:hatching": null,
    "update:highlight": null,
    "update:size": null,
    "update:width": null,
  },
  props: {
    border: Object,
    color: {},
    dashStyle: {},
    hatching: Object,
    highlight: Boolean,
    size: Number,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxHoverStyleConfig);

const DxHoverStyle = defineComponent(DxHoverStyleConfig);

(DxHoverStyle as any).$_optionName = "hoverStyle";

const DxImageConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:height": null,
    "update:url": null,
    "update:width": null,
  },
  props: {
    height: Number,
    url: {},
    width: Number
  }
};

prepareConfigurationComponentConfig(DxImageConfig);

const DxImage = defineComponent(DxImageConfig);

(DxImage as any).$_optionName = "image";

const DxLabelConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:argumentFormat": null,
    "update:backgroundColor": null,
    "update:border": null,
    "update:connector": null,
    "update:customizeHint": null,
    "update:customizeText": null,
    "update:displayFormat": null,
    "update:font": null,
    "update:format": null,
    "update:indentFromAxis": null,
    "update:overlappingBehavior": null,
    "update:position": null,
    "update:rotationAngle": null,
    "update:showForZeroValues": null,
    "update:text": null,
    "update:visible": null,
  },
  props: {
    argumentFormat: {},
    backgroundColor: {},
    border: Object,
    connector: Object,
    customizeHint: Function,
    customizeText: Function,
    displayFormat: {},
    font: Object,
    format: {},
    indentFromAxis: Number,
    overlappingBehavior: {},
    position: {},
    rotationAngle: Number,
    showForZeroValues: Boolean,
    text: {},
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxLabelConfig);

const DxLabel = defineComponent(DxLabelConfig);

(DxLabel as any).$_optionName = "label";

const DxLegendConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:backgroundColor": null,
    "update:border": null,
    "update:columnCount": null,
    "update:columnItemSpacing": null,
    "update:customizeHint": null,
    "update:customizeItems": null,
    "update:customizeText": null,
    "update:font": null,
    "update:horizontalAlignment": null,
    "update:hoverMode": null,
    "update:itemsAlignment": null,
    "update:itemTextPosition": null,
    "update:margin": null,
    "update:markerSize": null,
    "update:markerTemplate": null,
    "update:orientation": null,
    "update:paddingLeftRight": null,
    "update:paddingTopBottom": null,
    "update:rowCount": null,
    "update:rowItemSpacing": null,
    "update:title": null,
    "update:verticalAlignment": null,
    "update:visible": null,
  },
  props: {
    backgroundColor: {},
    border: Object,
    columnCount: Number,
    columnItemSpacing: Number,
    customizeHint: Function,
    customizeItems: Function,
    customizeText: Function,
    font: Object,
    horizontalAlignment: {},
    hoverMode: {},
    itemsAlignment: {},
    itemTextPosition: {},
    margin: [Number, Object],
    markerSize: Number,
    markerTemplate: {},
    orientation: {},
    paddingLeftRight: Number,
    paddingTopBottom: Number,
    rowCount: Number,
    rowItemSpacing: Number,
    title: [Object, String],
    verticalAlignment: {},
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxLegendConfig);

const DxLegend = defineComponent(DxLegendConfig);

(DxLegend as any).$_optionName = "legend";
(DxLegend as any).$_expectedChildren = {
  annotationBorder: { isCollectionItem: false, optionName: "border" },
  border: { isCollectionItem: false, optionName: "border" },
  font: { isCollectionItem: false, optionName: "font" },
  legendTitle: { isCollectionItem: false, optionName: "title" },
  margin: { isCollectionItem: false, optionName: "margin" },
  title: { isCollectionItem: false, optionName: "title" }
};

const DxLegendTitleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:font": null,
    "update:horizontalAlignment": null,
    "update:margin": null,
    "update:placeholderSize": null,
    "update:subtitle": null,
    "update:text": null,
    "update:verticalAlignment": null,
  },
  props: {
    font: Object,
    horizontalAlignment: {},
    margin: Object,
    placeholderSize: {},
    subtitle: [Object, String],
    text: String,
    verticalAlignment: {}
  }
};

prepareConfigurationComponentConfig(DxLegendTitleConfig);

const DxLegendTitle = defineComponent(DxLegendTitleConfig);

(DxLegendTitle as any).$_optionName = "title";
(DxLegendTitle as any).$_expectedChildren = {
  font: { isCollectionItem: false, optionName: "font" },
  legendTitleSubtitle: { isCollectionItem: false, optionName: "subtitle" },
  margin: { isCollectionItem: false, optionName: "margin" },
  subtitle: { isCollectionItem: false, optionName: "subtitle" }
};

const DxLegendTitleSubtitleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:font": null,
    "update:offset": null,
    "update:text": null,
  },
  props: {
    font: Object,
    offset: Number,
    text: String
  }
};

prepareConfigurationComponentConfig(DxLegendTitleSubtitleConfig);

const DxLegendTitleSubtitle = defineComponent(DxLegendTitleSubtitleConfig);

(DxLegendTitleSubtitle as any).$_optionName = "subtitle";
(DxLegendTitleSubtitle as any).$_expectedChildren = {
  font: { isCollectionItem: false, optionName: "font" }
};

const DxLengthConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:days": null,
    "update:hours": null,
    "update:milliseconds": null,
    "update:minutes": null,
    "update:months": null,
    "update:quarters": null,
    "update:seconds": null,
    "update:weeks": null,
    "update:years": null,
  },
  props: {
    days: Number,
    hours: Number,
    milliseconds: Number,
    minutes: Number,
    months: Number,
    quarters: Number,
    seconds: Number,
    weeks: Number,
    years: Number
  }
};

prepareConfigurationComponentConfig(DxLengthConfig);

const DxLength = defineComponent(DxLengthConfig);

(DxLength as any).$_optionName = "length";

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

const DxMinorGridConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:opacity": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    color: String,
    opacity: {},
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxMinorGridConfig);

const DxMinorGrid = defineComponent(DxMinorGridConfig);

(DxMinorGrid as any).$_optionName = "minorGrid";

const DxMinorTickConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:length": null,
    "update:opacity": null,
    "update:shift": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    color: String,
    length: Number,
    opacity: Number,
    shift: Number,
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxMinorTickConfig);

const DxMinorTick = defineComponent(DxMinorTickConfig);

(DxMinorTick as any).$_optionName = "minorTick";

const DxMinorTickIntervalConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:days": null,
    "update:hours": null,
    "update:milliseconds": null,
    "update:minutes": null,
    "update:months": null,
    "update:quarters": null,
    "update:seconds": null,
    "update:weeks": null,
    "update:years": null,
  },
  props: {
    days: Number,
    hours: Number,
    milliseconds: Number,
    minutes: Number,
    months: Number,
    quarters: Number,
    seconds: Number,
    weeks: Number,
    years: Number
  }
};

prepareConfigurationComponentConfig(DxMinorTickIntervalConfig);

const DxMinorTickInterval = defineComponent(DxMinorTickIntervalConfig);

(DxMinorTickInterval as any).$_optionName = "minorTickInterval";

const DxMinVisualRangeLengthConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:days": null,
    "update:hours": null,
    "update:milliseconds": null,
    "update:minutes": null,
    "update:months": null,
    "update:quarters": null,
    "update:seconds": null,
    "update:weeks": null,
    "update:years": null,
  },
  props: {
    days: Number,
    hours: Number,
    milliseconds: Number,
    minutes: Number,
    months: Number,
    quarters: Number,
    seconds: Number,
    weeks: Number,
    years: Number
  }
};

prepareConfigurationComponentConfig(DxMinVisualRangeLengthConfig);

const DxMinVisualRangeLength = defineComponent(DxMinVisualRangeLengthConfig);

(DxMinVisualRangeLength as any).$_optionName = "minVisualRangeLength";

const DxPointConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:border": null,
    "update:color": null,
    "update:hoverMode": null,
    "update:hoverStyle": null,
    "update:image": null,
    "update:selectionMode": null,
    "update:selectionStyle": null,
    "update:size": null,
    "update:symbol": null,
    "update:visible": null,
  },
  props: {
    border: Object,
    color: {},
    hoverMode: {},
    hoverStyle: Object,
    image: {},
    selectionMode: {},
    selectionStyle: Object,
    size: Number,
    symbol: {},
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxPointConfig);

const DxPoint = defineComponent(DxPointConfig);

(DxPoint as any).$_optionName = "point";
(DxPoint as any).$_expectedChildren = {
  border: { isCollectionItem: false, optionName: "border" },
  color: { isCollectionItem: false, optionName: "color" },
  hoverStyle: { isCollectionItem: false, optionName: "hoverStyle" },
  image: { isCollectionItem: false, optionName: "image" },
  pointBorder: { isCollectionItem: false, optionName: "border" },
  pointHoverStyle: { isCollectionItem: false, optionName: "hoverStyle" },
  pointSelectionStyle: { isCollectionItem: false, optionName: "selectionStyle" },
  selectionStyle: { isCollectionItem: false, optionName: "selectionStyle" }
};

const DxPointBorderConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    color: {},
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxPointBorderConfig);

const DxPointBorder = defineComponent(DxPointBorderConfig);

(DxPointBorder as any).$_optionName = "border";

const DxPointHoverStyleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:border": null,
    "update:color": null,
    "update:size": null,
  },
  props: {
    border: Object,
    color: {},
    size: Number
  }
};

prepareConfigurationComponentConfig(DxPointHoverStyleConfig);

const DxPointHoverStyle = defineComponent(DxPointHoverStyleConfig);

(DxPointHoverStyle as any).$_optionName = "hoverStyle";
(DxPointHoverStyle as any).$_expectedChildren = {
  border: { isCollectionItem: false, optionName: "border" },
  color: { isCollectionItem: false, optionName: "color" },
  pointBorder: { isCollectionItem: false, optionName: "border" }
};

const DxPointSelectionStyleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:border": null,
    "update:color": null,
    "update:size": null,
  },
  props: {
    border: Object,
    color: {},
    size: Number
  }
};

prepareConfigurationComponentConfig(DxPointSelectionStyleConfig);

const DxPointSelectionStyle = defineComponent(DxPointSelectionStyleConfig);

(DxPointSelectionStyle as any).$_optionName = "selectionStyle";
(DxPointSelectionStyle as any).$_expectedChildren = {
  border: { isCollectionItem: false, optionName: "border" },
  color: { isCollectionItem: false, optionName: "color" },
  pointBorder: { isCollectionItem: false, optionName: "border" }
};

const DxPolarChartTitleConfig = {
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

prepareConfigurationComponentConfig(DxPolarChartTitleConfig);

const DxPolarChartTitle = defineComponent(DxPolarChartTitleConfig);

(DxPolarChartTitle as any).$_optionName = "title";
(DxPolarChartTitle as any).$_expectedChildren = {
  font: { isCollectionItem: false, optionName: "font" },
  margin: { isCollectionItem: false, optionName: "margin" },
  polarChartTitleSubtitle: { isCollectionItem: false, optionName: "subtitle" },
  subtitle: { isCollectionItem: false, optionName: "subtitle" }
};

const DxPolarChartTitleSubtitleConfig = {
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

prepareConfigurationComponentConfig(DxPolarChartTitleSubtitleConfig);

const DxPolarChartTitleSubtitle = defineComponent(DxPolarChartTitleSubtitleConfig);

(DxPolarChartTitleSubtitle as any).$_optionName = "subtitle";
(DxPolarChartTitleSubtitle as any).$_expectedChildren = {
  font: { isCollectionItem: false, optionName: "font" }
};

const DxSelectionStyleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:border": null,
    "update:color": null,
    "update:dashStyle": null,
    "update:hatching": null,
    "update:highlight": null,
    "update:size": null,
    "update:width": null,
  },
  props: {
    border: Object,
    color: {},
    dashStyle: {},
    hatching: Object,
    highlight: Boolean,
    size: Number,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxSelectionStyleConfig);

const DxSelectionStyle = defineComponent(DxSelectionStyleConfig);

(DxSelectionStyle as any).$_optionName = "selectionStyle";

const DxSeriesConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:argumentField": null,
    "update:barPadding": null,
    "update:barWidth": null,
    "update:border": null,
    "update:closed": null,
    "update:color": null,
    "update:dashStyle": null,
    "update:hoverMode": null,
    "update:hoverStyle": null,
    "update:ignoreEmptyPoints": null,
    "update:label": null,
    "update:maxLabelCount": null,
    "update:minBarSize": null,
    "update:name": null,
    "update:opacity": null,
    "update:point": null,
    "update:selectionMode": null,
    "update:selectionStyle": null,
    "update:showInLegend": null,
    "update:stack": null,
    "update:tag": null,
    "update:tagField": null,
    "update:type": null,
    "update:valueErrorBar": null,
    "update:valueField": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    argumentField: String,
    barPadding: {},
    barWidth: {},
    border: Object,
    closed: Boolean,
    color: {},
    dashStyle: {},
    hoverMode: {},
    hoverStyle: Object,
    ignoreEmptyPoints: Boolean,
    label: Object,
    maxLabelCount: {},
    minBarSize: {},
    name: {},
    opacity: Number,
    point: Object,
    selectionMode: {},
    selectionStyle: Object,
    showInLegend: Boolean,
    stack: String,
    tag: {},
    tagField: String,
    type: {},
    valueErrorBar: Object,
    valueField: String,
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxSeriesConfig);

const DxSeries = defineComponent(DxSeriesConfig);

(DxSeries as any).$_optionName = "series";
(DxSeries as any).$_isCollectionItem = true;

const DxSeriesBorderConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:dashStyle": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    color: {},
    dashStyle: {},
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxSeriesBorderConfig);

const DxSeriesBorder = defineComponent(DxSeriesBorderConfig);

(DxSeriesBorder as any).$_optionName = "border";

const DxSeriesTemplateConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:customizeSeries": null,
    "update:nameField": null,
  },
  props: {
    customizeSeries: Function,
    nameField: String
  }
};

prepareConfigurationComponentConfig(DxSeriesTemplateConfig);

const DxSeriesTemplate = defineComponent(DxSeriesTemplateConfig);

(DxSeriesTemplate as any).$_optionName = "seriesTemplate";

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

const DxStripConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:endValue": null,
    "update:label": null,
    "update:startValue": null,
  },
  props: {
    color: {},
    endValue: {},
    label: Object,
    startValue: {}
  }
};

prepareConfigurationComponentConfig(DxStripConfig);

const DxStrip = defineComponent(DxStripConfig);

(DxStrip as any).$_optionName = "strips";
(DxStrip as any).$_isCollectionItem = true;

const DxStripLabelConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:font": null,
    "update:text": null,
  },
  props: {
    font: Object,
    text: {}
  }
};

prepareConfigurationComponentConfig(DxStripLabelConfig);

const DxStripLabel = defineComponent(DxStripLabelConfig);

(DxStripLabel as any).$_optionName = "label";

const DxStripStyleConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:label": null,
  },
  props: {
    label: Object
  }
};

prepareConfigurationComponentConfig(DxStripStyleConfig);

const DxStripStyle = defineComponent(DxStripStyleConfig);

(DxStripStyle as any).$_optionName = "stripStyle";
(DxStripStyle as any).$_expectedChildren = {
  label: { isCollectionItem: false, optionName: "label" },
  stripStyleLabel: { isCollectionItem: false, optionName: "label" }
};

const DxStripStyleLabelConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:font": null,
  },
  props: {
    font: Object
  }
};

prepareConfigurationComponentConfig(DxStripStyleLabelConfig);

const DxStripStyleLabel = defineComponent(DxStripStyleLabelConfig);

(DxStripStyleLabel as any).$_optionName = "label";

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

const DxTickConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:length": null,
    "update:opacity": null,
    "update:shift": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    color: String,
    length: Number,
    opacity: {},
    shift: Number,
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxTickConfig);

const DxTick = defineComponent(DxTickConfig);

(DxTick as any).$_optionName = "tick";

const DxTickIntervalConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:days": null,
    "update:hours": null,
    "update:milliseconds": null,
    "update:minutes": null,
    "update:months": null,
    "update:quarters": null,
    "update:seconds": null,
    "update:weeks": null,
    "update:years": null,
  },
  props: {
    days: Number,
    hours: Number,
    milliseconds: Number,
    minutes: Number,
    months: Number,
    quarters: Number,
    seconds: Number,
    weeks: Number,
    years: Number
  }
};

prepareConfigurationComponentConfig(DxTickIntervalConfig);

const DxTickInterval = defineComponent(DxTickIntervalConfig);

(DxTickInterval as any).$_optionName = "tickInterval";

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
    margin: [Object, Number],
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

const DxTooltipConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:argumentFormat": null,
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
    "update:interactive": null,
    "update:opacity": null,
    "update:paddingLeftRight": null,
    "update:paddingTopBottom": null,
    "update:shadow": null,
    "update:shared": null,
    "update:zIndex": null,
  },
  props: {
    argumentFormat: {},
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
    interactive: Boolean,
    opacity: {},
    paddingLeftRight: Number,
    paddingTopBottom: Number,
    shadow: Object,
    shared: Boolean,
    zIndex: {}
  }
};

prepareConfigurationComponentConfig(DxTooltipConfig);

const DxTooltip = defineComponent(DxTooltipConfig);

(DxTooltip as any).$_optionName = "tooltip";
(DxTooltip as any).$_expectedChildren = {
  argumentFormat: { isCollectionItem: false, optionName: "argumentFormat" },
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

const DxValueAxisConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowDecimals": null,
    "update:axisDivisionFactor": null,
    "update:categories": null,
    "update:color": null,
    "update:constantLines": null,
    "update:constantLineStyle": null,
    "update:discreteAxisDivisionMode": null,
    "update:endOnTick": null,
    "update:grid": null,
    "update:inverted": null,
    "update:label": null,
    "update:linearThreshold": null,
    "update:logarithmBase": null,
    "update:maxValueMargin": null,
    "update:minorGrid": null,
    "update:minorTick": null,
    "update:minorTickCount": null,
    "update:minorTickInterval": null,
    "update:minValueMargin": null,
    "update:minVisualRangeLength": null,
    "update:opacity": null,
    "update:showZero": null,
    "update:strips": null,
    "update:stripStyle": null,
    "update:tick": null,
    "update:tickInterval": null,
    "update:type": null,
    "update:valueMarginsEnabled": null,
    "update:valueType": null,
    "update:visible": null,
    "update:visualRange": null,
    "update:visualRangeUpdateMode": null,
    "update:wholeRange": null,
    "update:width": null,
  },
  props: {
    allowDecimals: {},
    axisDivisionFactor: Number,
    categories: Array,
    color: String,
    constantLines: Array,
    constantLineStyle: Object,
    discreteAxisDivisionMode: {},
    endOnTick: Boolean,
    grid: Object,
    inverted: Boolean,
    label: Object,
    linearThreshold: {},
    logarithmBase: Number,
    maxValueMargin: {},
    minorGrid: Object,
    minorTick: Object,
    minorTickCount: {},
    minorTickInterval: {},
    minValueMargin: {},
    minVisualRangeLength: {},
    opacity: {},
    showZero: {},
    strips: Array,
    stripStyle: Object,
    tick: Object,
    tickInterval: {},
    type: {},
    valueMarginsEnabled: Boolean,
    valueType: {},
    visible: Boolean,
    visualRange: [Array, Object],
    visualRangeUpdateMode: {},
    wholeRange: {},
    width: Number
  }
};

prepareConfigurationComponentConfig(DxValueAxisConfig);

const DxValueAxis = defineComponent(DxValueAxisConfig);

(DxValueAxis as any).$_optionName = "valueAxis";
(DxValueAxis as any).$_expectedChildren = {
  axisLabel: { isCollectionItem: false, optionName: "label" },
  commonAxisSettingsTick: { isCollectionItem: false, optionName: "tick" },
  constantLine: { isCollectionItem: true, optionName: "constantLines" },
  label: { isCollectionItem: false, optionName: "label" },
  minorTickInterval: { isCollectionItem: false, optionName: "minorTickInterval" },
  minVisualRangeLength: { isCollectionItem: false, optionName: "minVisualRangeLength" },
  strip: { isCollectionItem: true, optionName: "strips" },
  tick: { isCollectionItem: false, optionName: "tick" },
  tickInterval: { isCollectionItem: false, optionName: "tickInterval" },
  visualRange: { isCollectionItem: false, optionName: "visualRange" },
  wholeRange: { isCollectionItem: false, optionName: "wholeRange" }
};

const DxValueErrorBarConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:color": null,
    "update:displayMode": null,
    "update:edgeLength": null,
    "update:highValueField": null,
    "update:lineWidth": null,
    "update:lowValueField": null,
    "update:opacity": null,
    "update:type": null,
    "update:value": null,
  },
  props: {
    color: String,
    displayMode: {},
    edgeLength: Number,
    highValueField: {},
    lineWidth: Number,
    lowValueField: {},
    opacity: {},
    type: {},
    value: Number
  }
};

prepareConfigurationComponentConfig(DxValueErrorBarConfig);

const DxValueErrorBar = defineComponent(DxValueErrorBarConfig);

(DxValueErrorBar as any).$_optionName = "valueErrorBar";

const DxVisualRangeConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:endValue": null,
    "update:length": null,
    "update:startValue": null,
  },
  props: {
    endValue: {},
    length: {},
    startValue: {}
  }
};

prepareConfigurationComponentConfig(DxVisualRangeConfig);

const DxVisualRange = defineComponent(DxVisualRangeConfig);

(DxVisualRange as any).$_optionName = "visualRange";
(DxVisualRange as any).$_expectedChildren = {
  length: { isCollectionItem: false, optionName: "length" }
};

const DxWholeRangeConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:endValue": null,
    "update:length": null,
    "update:startValue": null,
  },
  props: {
    endValue: {},
    length: {},
    startValue: {}
  }
};

prepareConfigurationComponentConfig(DxWholeRangeConfig);

const DxWholeRange = defineComponent(DxWholeRangeConfig);

(DxWholeRange as any).$_optionName = "wholeRange";

export default DxPolarChart;
export {
  DxPolarChart,
  DxAdaptiveLayout,
  DxAnimation,
  DxAnnotation,
  DxAnnotationBorder,
  DxArgumentAxis,
  DxArgumentAxisMinorTick,
  DxArgumentAxisTick,
  DxArgumentFormat,
  DxAxisLabel,
  DxBorder,
  DxColor,
  DxCommonAnnotationSettings,
  DxCommonAxisSettings,
  DxCommonAxisSettingsLabel,
  DxCommonAxisSettingsMinorTick,
  DxCommonAxisSettingsTick,
  DxCommonSeriesSettings,
  DxCommonSeriesSettingsHoverStyle,
  DxCommonSeriesSettingsLabel,
  DxCommonSeriesSettingsSelectionStyle,
  DxConnector,
  DxConstantLine,
  DxConstantLineLabel,
  DxConstantLineStyle,
  DxConstantLineStyleLabel,
  DxDataPrepareSettings,
  DxExport,
  DxFont,
  DxFormat,
  DxGrid,
  DxHatching,
  DxHoverStyle,
  DxImage,
  DxLabel,
  DxLegend,
  DxLegendTitle,
  DxLegendTitleSubtitle,
  DxLength,
  DxLoadingIndicator,
  DxMargin,
  DxMinorGrid,
  DxMinorTick,
  DxMinorTickInterval,
  DxMinVisualRangeLength,
  DxPoint,
  DxPointBorder,
  DxPointHoverStyle,
  DxPointSelectionStyle,
  DxPolarChartTitle,
  DxPolarChartTitleSubtitle,
  DxSelectionStyle,
  DxSeries,
  DxSeriesBorder,
  DxSeriesTemplate,
  DxShadow,
  DxSize,
  DxStrip,
  DxStripLabel,
  DxStripStyle,
  DxStripStyleLabel,
  DxSubtitle,
  DxTick,
  DxTickInterval,
  DxTitle,
  DxTooltip,
  DxTooltipBorder,
  DxValueAxis,
  DxValueErrorBar,
  DxVisualRange,
  DxWholeRange
};
import type * as DxPolarChartTypes from "devextreme/viz/polar_chart_types";
export { DxPolarChartTypes };
