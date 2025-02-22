import Drawer, { Properties } from "devextreme/ui/drawer";
import { defineComponent } from "vue";
import { prepareComponentConfig } from "./core/index";

type AccessibleOptions = Pick<Properties,
  "activeStateEnabled" |
  "animationDuration" |
  "animationEnabled" |
  "closeOnOutsideClick" |
  "disabled" |
  "elementAttr" |
  "height" |
  "hint" |
  "hoverStateEnabled" |
  "maxSize" |
  "minSize" |
  "onDisposing" |
  "onInitialized" |
  "onOptionChanged" |
  "opened" |
  "openedStateMode" |
  "position" |
  "revealMode" |
  "rtlEnabled" |
  "shading" |
  "template" |
  "visible" |
  "width"
>;

interface DxDrawer extends AccessibleOptions {
  readonly instance?: Drawer;
}

const componentConfig = {
  props: {
    activeStateEnabled: Boolean,
    animationDuration: Number,
    animationEnabled: Boolean,
    closeOnOutsideClick: [Boolean, Function],
    disabled: Boolean,
    elementAttr: Object,
    height: {},
    hint: {},
    hoverStateEnabled: Boolean,
    maxSize: Number,
    minSize: Number,
    onDisposing: Function,
    onInitialized: Function,
    onOptionChanged: Function,
    opened: Boolean,
    openedStateMode: {},
    position: {},
    revealMode: {},
    rtlEnabled: Boolean,
    shading: Boolean,
    template: {},
    visible: Boolean,
    width: {}
  },
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:activeStateEnabled": null,
    "update:animationDuration": null,
    "update:animationEnabled": null,
    "update:closeOnOutsideClick": null,
    "update:disabled": null,
    "update:elementAttr": null,
    "update:height": null,
    "update:hint": null,
    "update:hoverStateEnabled": null,
    "update:maxSize": null,
    "update:minSize": null,
    "update:onDisposing": null,
    "update:onInitialized": null,
    "update:onOptionChanged": null,
    "update:opened": null,
    "update:openedStateMode": null,
    "update:position": null,
    "update:revealMode": null,
    "update:rtlEnabled": null,
    "update:shading": null,
    "update:template": null,
    "update:visible": null,
    "update:width": null,
  },
  computed: {
    instance(): Drawer {
      return (this as any).$_instance;
    }
  },
  beforeCreate() {
    (this as any).$_WidgetClass = Drawer;
    (this as any).$_hasAsyncTemplate = true;
  }
};

prepareComponentConfig(componentConfig);

const DxDrawer = defineComponent(componentConfig);

export default DxDrawer;
export {
  DxDrawer
};
import type * as DxDrawerTypes from "devextreme/ui/drawer_types";
export { DxDrawerTypes };
