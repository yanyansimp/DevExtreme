export { ExplicitTypes } from "devextreme/ui/splitter";
import Splitter, { Properties } from "devextreme/ui/splitter";
import { defineComponent } from "vue";
import { prepareComponentConfig } from "./core/index";
import { prepareConfigurationComponentConfig } from "./core/index";

type AccessibleOptions = Pick<Properties,
  "allowKeyboardNavigation" |
  "dataSource" |
  "disabled" |
  "elementAttr" |
  "height" |
  "hoverStateEnabled" |
  "items" |
  "itemTemplate" |
  "onContentReady" |
  "onDisposing" |
  "onInitialized" |
  "onItemClick" |
  "onItemCollapsed" |
  "onItemContextMenu" |
  "onItemExpanded" |
  "onItemRendered" |
  "onOptionChanged" |
  "onResize" |
  "onResizeEnd" |
  "onResizeStart" |
  "orientation" |
  "rtlEnabled" |
  "separatorSize" |
  "visible" |
  "width"
>;

interface DxSplitter extends AccessibleOptions {
  readonly instance?: Splitter;
}

const componentConfig = {
  props: {
    allowKeyboardNavigation: Boolean,
    dataSource: {},
    disabled: Boolean,
    elementAttr: Object,
    height: {},
    hoverStateEnabled: Boolean,
    items: Array,
    itemTemplate: {},
    onContentReady: Function,
    onDisposing: Function,
    onInitialized: Function,
    onItemClick: Function,
    onItemCollapsed: Function,
    onItemContextMenu: Function,
    onItemExpanded: Function,
    onItemRendered: Function,
    onOptionChanged: Function,
    onResize: Function,
    onResizeEnd: Function,
    onResizeStart: Function,
    orientation: {},
    rtlEnabled: Boolean,
    separatorSize: Number,
    visible: Boolean,
    width: {}
  },
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowKeyboardNavigation": null,
    "update:dataSource": null,
    "update:disabled": null,
    "update:elementAttr": null,
    "update:height": null,
    "update:hoverStateEnabled": null,
    "update:items": null,
    "update:itemTemplate": null,
    "update:onContentReady": null,
    "update:onDisposing": null,
    "update:onInitialized": null,
    "update:onItemClick": null,
    "update:onItemCollapsed": null,
    "update:onItemContextMenu": null,
    "update:onItemExpanded": null,
    "update:onItemRendered": null,
    "update:onOptionChanged": null,
    "update:onResize": null,
    "update:onResizeEnd": null,
    "update:onResizeStart": null,
    "update:orientation": null,
    "update:rtlEnabled": null,
    "update:separatorSize": null,
    "update:visible": null,
    "update:width": null,
  },
  computed: {
    instance(): Splitter {
      return (this as any).$_instance;
    }
  },
  beforeCreate() {
    (this as any).$_WidgetClass = Splitter;
    (this as any).$_hasAsyncTemplate = true;
    (this as any).$_expectedChildren = {
      item: { isCollectionItem: true, optionName: "items" }
    };
  }
};

prepareComponentConfig(componentConfig);

const DxSplitter = defineComponent(componentConfig);


const DxItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:collapsed": null,
    "update:collapsedSize": null,
    "update:collapsible": null,
    "update:maxSize": null,
    "update:minSize": null,
    "update:resizable": null,
    "update:size": null,
    "update:splitter": null,
    "update:template": null,
    "update:text": null,
    "update:visible": null,
  },
  props: {
    collapsed: Boolean,
    collapsedSize: {},
    collapsible: Boolean,
    maxSize: {},
    minSize: {},
    resizable: Boolean,
    size: {},
    splitter: {},
    template: {},
    text: String,
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxItemConfig);

const DxItem = defineComponent(DxItemConfig);

(DxItem as any).$_optionName = "items";
(DxItem as any).$_isCollectionItem = true;

export default DxSplitter;
export {
  DxSplitter,
  DxItem
};
import type * as DxSplitterTypes from "devextreme/ui/splitter_types";
export { DxSplitterTypes };
