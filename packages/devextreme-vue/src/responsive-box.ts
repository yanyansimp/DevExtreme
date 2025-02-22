export { ExplicitTypes } from "devextreme/ui/responsive_box";
import ResponsiveBox, { Properties } from "devextreme/ui/responsive_box";
import { defineComponent } from "vue";
import { prepareComponentConfig } from "./core/index";
import { prepareConfigurationComponentConfig } from "./core/index";

type AccessibleOptions = Pick<Properties,
  "cols" |
  "dataSource" |
  "disabled" |
  "elementAttr" |
  "height" |
  "hoverStateEnabled" |
  "itemHoldTimeout" |
  "items" |
  "itemTemplate" |
  "onContentReady" |
  "onDisposing" |
  "onInitialized" |
  "onItemClick" |
  "onItemContextMenu" |
  "onItemHold" |
  "onItemRendered" |
  "onOptionChanged" |
  "rows" |
  "rtlEnabled" |
  "screenByWidth" |
  "singleColumnScreen" |
  "visible" |
  "width"
>;

interface DxResponsiveBox extends AccessibleOptions {
  readonly instance?: ResponsiveBox;
}

const componentConfig = {
  props: {
    cols: Array,
    dataSource: {},
    disabled: Boolean,
    elementAttr: Object,
    height: [Function, Number, String],
    hoverStateEnabled: Boolean,
    itemHoldTimeout: Number,
    items: Array,
    itemTemplate: {},
    onContentReady: Function,
    onDisposing: Function,
    onInitialized: Function,
    onItemClick: Function,
    onItemContextMenu: Function,
    onItemHold: Function,
    onItemRendered: Function,
    onOptionChanged: Function,
    rows: Array,
    rtlEnabled: Boolean,
    screenByWidth: Function,
    singleColumnScreen: String,
    visible: Boolean,
    width: [Function, Number, String]
  },
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:cols": null,
    "update:dataSource": null,
    "update:disabled": null,
    "update:elementAttr": null,
    "update:height": null,
    "update:hoverStateEnabled": null,
    "update:itemHoldTimeout": null,
    "update:items": null,
    "update:itemTemplate": null,
    "update:onContentReady": null,
    "update:onDisposing": null,
    "update:onInitialized": null,
    "update:onItemClick": null,
    "update:onItemContextMenu": null,
    "update:onItemHold": null,
    "update:onItemRendered": null,
    "update:onOptionChanged": null,
    "update:rows": null,
    "update:rtlEnabled": null,
    "update:screenByWidth": null,
    "update:singleColumnScreen": null,
    "update:visible": null,
    "update:width": null,
  },
  computed: {
    instance(): ResponsiveBox {
      return (this as any).$_instance;
    }
  },
  beforeCreate() {
    (this as any).$_WidgetClass = ResponsiveBox;
    (this as any).$_hasAsyncTemplate = true;
    (this as any).$_expectedChildren = {
      col: { isCollectionItem: true, optionName: "cols" },
      item: { isCollectionItem: true, optionName: "items" },
      row: { isCollectionItem: true, optionName: "rows" }
    };
  }
};

prepareComponentConfig(componentConfig);

const DxResponsiveBox = defineComponent(componentConfig);


const DxColConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:baseSize": null,
    "update:ratio": null,
    "update:screen": null,
    "update:shrink": null,
  },
  props: {
    baseSize: [Number, String],
    ratio: Number,
    screen: {},
    shrink: Number
  }
};

prepareConfigurationComponentConfig(DxColConfig);

const DxCol = defineComponent(DxColConfig);

(DxCol as any).$_optionName = "cols";
(DxCol as any).$_isCollectionItem = true;

const DxItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:disabled": null,
    "update:html": null,
    "update:location": null,
    "update:template": null,
    "update:text": null,
    "update:visible": null,
  },
  props: {
    disabled: Boolean,
    html: String,
    location: [Array, Object],
    template: {},
    text: String,
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxItemConfig);

const DxItem = defineComponent(DxItemConfig);

(DxItem as any).$_optionName = "items";
(DxItem as any).$_isCollectionItem = true;
(DxItem as any).$_expectedChildren = {
  location: { isCollectionItem: true, optionName: "location" }
};

const DxLocationConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:col": null,
    "update:colspan": null,
    "update:row": null,
    "update:rowspan": null,
    "update:screen": null,
  },
  props: {
    col: Number,
    colspan: {},
    row: Number,
    rowspan: {},
    screen: {}
  }
};

prepareConfigurationComponentConfig(DxLocationConfig);

const DxLocation = defineComponent(DxLocationConfig);

(DxLocation as any).$_optionName = "location";
(DxLocation as any).$_isCollectionItem = true;

const DxRowConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:baseSize": null,
    "update:ratio": null,
    "update:screen": null,
    "update:shrink": null,
  },
  props: {
    baseSize: [Number, String],
    ratio: Number,
    screen: {},
    shrink: Number
  }
};

prepareConfigurationComponentConfig(DxRowConfig);

const DxRow = defineComponent(DxRowConfig);

(DxRow as any).$_optionName = "rows";
(DxRow as any).$_isCollectionItem = true;

export default DxResponsiveBox;
export {
  DxResponsiveBox,
  DxCol,
  DxItem,
  DxLocation,
  DxRow
};
import type * as DxResponsiveBoxTypes from "devextreme/ui/responsive_box_types";
export { DxResponsiveBoxTypes };
