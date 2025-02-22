import ButtonGroup, { Properties } from "devextreme/ui/button_group";
import { defineComponent } from "vue";
import { prepareComponentConfig } from "./core/index";
import { prepareConfigurationComponentConfig } from "./core/index";

type AccessibleOptions = Pick<Properties,
  "accessKey" |
  "activeStateEnabled" |
  "buttonTemplate" |
  "disabled" |
  "elementAttr" |
  "focusStateEnabled" |
  "height" |
  "hint" |
  "hoverStateEnabled" |
  "items" |
  "keyExpr" |
  "onContentReady" |
  "onDisposing" |
  "onInitialized" |
  "onItemClick" |
  "onOptionChanged" |
  "onSelectionChanged" |
  "rtlEnabled" |
  "selectedItemKeys" |
  "selectedItems" |
  "selectionMode" |
  "stylingMode" |
  "tabIndex" |
  "visible" |
  "width"
>;

interface DxButtonGroup extends AccessibleOptions {
  readonly instance?: ButtonGroup;
}

const componentConfig = {
  props: {
    accessKey: {},
    activeStateEnabled: Boolean,
    buttonTemplate: {},
    disabled: Boolean,
    elementAttr: Object,
    focusStateEnabled: Boolean,
    height: {},
    hint: {},
    hoverStateEnabled: Boolean,
    items: Array,
    keyExpr: [Function, String],
    onContentReady: Function,
    onDisposing: Function,
    onInitialized: Function,
    onItemClick: Function,
    onOptionChanged: Function,
    onSelectionChanged: Function,
    rtlEnabled: Boolean,
    selectedItemKeys: Array,
    selectedItems: Array,
    selectionMode: {},
    stylingMode: {},
    tabIndex: Number,
    visible: Boolean,
    width: {}
  },
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:accessKey": null,
    "update:activeStateEnabled": null,
    "update:buttonTemplate": null,
    "update:disabled": null,
    "update:elementAttr": null,
    "update:focusStateEnabled": null,
    "update:height": null,
    "update:hint": null,
    "update:hoverStateEnabled": null,
    "update:items": null,
    "update:keyExpr": null,
    "update:onContentReady": null,
    "update:onDisposing": null,
    "update:onInitialized": null,
    "update:onItemClick": null,
    "update:onOptionChanged": null,
    "update:onSelectionChanged": null,
    "update:rtlEnabled": null,
    "update:selectedItemKeys": null,
    "update:selectedItems": null,
    "update:selectionMode": null,
    "update:stylingMode": null,
    "update:tabIndex": null,
    "update:visible": null,
    "update:width": null,
  },
  computed: {
    instance(): ButtonGroup {
      return (this as any).$_instance;
    }
  },
  beforeCreate() {
    (this as any).$_WidgetClass = ButtonGroup;
    (this as any).$_hasAsyncTemplate = true;
    (this as any).$_expectedChildren = {
      item: { isCollectionItem: true, optionName: "items" }
    };
  }
};

prepareComponentConfig(componentConfig);

const DxButtonGroup = defineComponent(componentConfig);


const DxItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:disabled": null,
    "update:elementAttr": null,
    "update:hint": null,
    "update:icon": null,
    "update:template": null,
    "update:text": null,
    "update:type": null,
    "update:visible": null,
  },
  props: {
    disabled: Boolean,
    elementAttr: Object,
    hint: String,
    icon: String,
    template: {},
    text: String,
    type: {},
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxItemConfig);

const DxItem = defineComponent(DxItemConfig);

(DxItem as any).$_optionName = "items";
(DxItem as any).$_isCollectionItem = true;

export default DxButtonGroup;
export {
  DxButtonGroup,
  DxItem
};
import type * as DxButtonGroupTypes from "devextreme/ui/button_group_types";
export { DxButtonGroupTypes };
