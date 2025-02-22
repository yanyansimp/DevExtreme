export { ExplicitTypes } from "devextreme/ui/tree_view";
import TreeView, { Properties } from "devextreme/ui/tree_view";
import { defineComponent } from "vue";
import { prepareComponentConfig } from "./core/index";
import { prepareConfigurationComponentConfig } from "./core/index";

type AccessibleOptions = Pick<Properties,
  "accessKey" |
  "activeStateEnabled" |
  "animationEnabled" |
  "collapseIcon" |
  "createChildren" |
  "dataSource" |
  "dataStructure" |
  "disabled" |
  "disabledExpr" |
  "displayExpr" |
  "elementAttr" |
  "expandAllEnabled" |
  "expandedExpr" |
  "expandEvent" |
  "expandIcon" |
  "expandNodesRecursive" |
  "focusStateEnabled" |
  "hasItemsExpr" |
  "height" |
  "hint" |
  "hoverStateEnabled" |
  "itemHoldTimeout" |
  "items" |
  "itemsExpr" |
  "itemTemplate" |
  "keyExpr" |
  "noDataText" |
  "onContentReady" |
  "onDisposing" |
  "onInitialized" |
  "onItemClick" |
  "onItemCollapsed" |
  "onItemContextMenu" |
  "onItemExpanded" |
  "onItemHold" |
  "onItemRendered" |
  "onItemSelectionChanged" |
  "onOptionChanged" |
  "onSelectAllValueChanged" |
  "onSelectionChanged" |
  "parentIdExpr" |
  "rootValue" |
  "rtlEnabled" |
  "scrollDirection" |
  "searchEditorOptions" |
  "searchEnabled" |
  "searchExpr" |
  "searchMode" |
  "searchTimeout" |
  "searchValue" |
  "selectAllText" |
  "selectByClick" |
  "selectedExpr" |
  "selectionMode" |
  "selectNodesRecursive" |
  "showCheckBoxesMode" |
  "tabIndex" |
  "useNativeScrolling" |
  "virtualModeEnabled" |
  "visible" |
  "width"
>;

interface DxTreeView extends AccessibleOptions {
  readonly instance?: TreeView;
}

const componentConfig = {
  props: {
    accessKey: {},
    activeStateEnabled: Boolean,
    animationEnabled: Boolean,
    collapseIcon: {},
    createChildren: Function,
    dataSource: {},
    dataStructure: {},
    disabled: Boolean,
    disabledExpr: [Function, String],
    displayExpr: [Function, String],
    elementAttr: Object,
    expandAllEnabled: Boolean,
    expandedExpr: [Function, String],
    expandEvent: {},
    expandIcon: {},
    expandNodesRecursive: Boolean,
    focusStateEnabled: Boolean,
    hasItemsExpr: [Function, String],
    height: {},
    hint: {},
    hoverStateEnabled: Boolean,
    itemHoldTimeout: Number,
    items: Array,
    itemsExpr: [Function, String],
    itemTemplate: {},
    keyExpr: [Function, String],
    noDataText: String,
    onContentReady: Function,
    onDisposing: Function,
    onInitialized: Function,
    onItemClick: Function,
    onItemCollapsed: Function,
    onItemContextMenu: Function,
    onItemExpanded: Function,
    onItemHold: Function,
    onItemRendered: Function,
    onItemSelectionChanged: Function,
    onOptionChanged: Function,
    onSelectAllValueChanged: Function,
    onSelectionChanged: Function,
    parentIdExpr: [Function, String],
    rootValue: {},
    rtlEnabled: Boolean,
    scrollDirection: {},
    searchEditorOptions: Object,
    searchEnabled: Boolean,
    searchExpr: [Array, Function, String],
    searchMode: {},
    searchTimeout: {},
    searchValue: String,
    selectAllText: String,
    selectByClick: Boolean,
    selectedExpr: [Function, String],
    selectionMode: {},
    selectNodesRecursive: Boolean,
    showCheckBoxesMode: {},
    tabIndex: Number,
    useNativeScrolling: Boolean,
    virtualModeEnabled: Boolean,
    visible: Boolean,
    width: {}
  },
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:accessKey": null,
    "update:activeStateEnabled": null,
    "update:animationEnabled": null,
    "update:collapseIcon": null,
    "update:createChildren": null,
    "update:dataSource": null,
    "update:dataStructure": null,
    "update:disabled": null,
    "update:disabledExpr": null,
    "update:displayExpr": null,
    "update:elementAttr": null,
    "update:expandAllEnabled": null,
    "update:expandedExpr": null,
    "update:expandEvent": null,
    "update:expandIcon": null,
    "update:expandNodesRecursive": null,
    "update:focusStateEnabled": null,
    "update:hasItemsExpr": null,
    "update:height": null,
    "update:hint": null,
    "update:hoverStateEnabled": null,
    "update:itemHoldTimeout": null,
    "update:items": null,
    "update:itemsExpr": null,
    "update:itemTemplate": null,
    "update:keyExpr": null,
    "update:noDataText": null,
    "update:onContentReady": null,
    "update:onDisposing": null,
    "update:onInitialized": null,
    "update:onItemClick": null,
    "update:onItemCollapsed": null,
    "update:onItemContextMenu": null,
    "update:onItemExpanded": null,
    "update:onItemHold": null,
    "update:onItemRendered": null,
    "update:onItemSelectionChanged": null,
    "update:onOptionChanged": null,
    "update:onSelectAllValueChanged": null,
    "update:onSelectionChanged": null,
    "update:parentIdExpr": null,
    "update:rootValue": null,
    "update:rtlEnabled": null,
    "update:scrollDirection": null,
    "update:searchEditorOptions": null,
    "update:searchEnabled": null,
    "update:searchExpr": null,
    "update:searchMode": null,
    "update:searchTimeout": null,
    "update:searchValue": null,
    "update:selectAllText": null,
    "update:selectByClick": null,
    "update:selectedExpr": null,
    "update:selectionMode": null,
    "update:selectNodesRecursive": null,
    "update:showCheckBoxesMode": null,
    "update:tabIndex": null,
    "update:useNativeScrolling": null,
    "update:virtualModeEnabled": null,
    "update:visible": null,
    "update:width": null,
  },
  computed: {
    instance(): TreeView {
      return (this as any).$_instance;
    }
  },
  beforeCreate() {
    (this as any).$_WidgetClass = TreeView;
    (this as any).$_hasAsyncTemplate = true;
    (this as any).$_expectedChildren = {
      item: { isCollectionItem: true, optionName: "items" },
      searchEditorOptions: { isCollectionItem: false, optionName: "searchEditorOptions" }
    };
  }
};

prepareComponentConfig(componentConfig);

const DxTreeView = defineComponent(componentConfig);


const DxButtonConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:location": null,
    "update:name": null,
    "update:options": null,
  },
  props: {
    location: {},
    name: {},
    options: {}
  }
};

prepareConfigurationComponentConfig(DxButtonConfig);

const DxButton = defineComponent(DxButtonConfig);

(DxButton as any).$_optionName = "buttons";
(DxButton as any).$_isCollectionItem = true;
(DxButton as any).$_expectedChildren = {
  options: { isCollectionItem: false, optionName: "options" }
};

const DxItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:disabled": null,
    "update:expanded": null,
    "update:hasItems": null,
    "update:html": null,
    "update:icon": null,
    "update:id": null,
    "update:items": null,
    "update:parentId": null,
    "update:selected": null,
    "update:template": null,
    "update:text": null,
    "update:visible": null,
  },
  props: {
    disabled: Boolean,
    expanded: Boolean,
    hasItems: {},
    html: String,
    icon: String,
    id: {},
    items: Array,
    parentId: {},
    selected: Boolean,
    template: {},
    text: String,
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxItemConfig);

const DxItem = defineComponent(DxItemConfig);

(DxItem as any).$_optionName = "items";
(DxItem as any).$_isCollectionItem = true;

const DxOptionsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:accessKey": null,
    "update:activeStateEnabled": null,
    "update:bindingOptions": null,
    "update:disabled": null,
    "update:elementAttr": null,
    "update:focusStateEnabled": null,
    "update:height": null,
    "update:hint": null,
    "update:hoverStateEnabled": null,
    "update:icon": null,
    "update:onClick": null,
    "update:onContentReady": null,
    "update:onDisposing": null,
    "update:onInitialized": null,
    "update:onOptionChanged": null,
    "update:rtlEnabled": null,
    "update:stylingMode": null,
    "update:tabIndex": null,
    "update:template": null,
    "update:text": null,
    "update:type": null,
    "update:useSubmitBehavior": null,
    "update:validationGroup": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    accessKey: {},
    activeStateEnabled: Boolean,
    bindingOptions: Object,
    disabled: Boolean,
    elementAttr: Object,
    focusStateEnabled: Boolean,
    height: {},
    hint: {},
    hoverStateEnabled: Boolean,
    icon: String,
    onClick: Function,
    onContentReady: Function,
    onDisposing: Function,
    onInitialized: Function,
    onOptionChanged: Function,
    rtlEnabled: Boolean,
    stylingMode: {},
    tabIndex: Number,
    template: {},
    text: String,
    type: {},
    useSubmitBehavior: Boolean,
    validationGroup: {},
    visible: Boolean,
    width: {}
  }
};

prepareConfigurationComponentConfig(DxOptionsConfig);

const DxOptions = defineComponent(DxOptionsConfig);

(DxOptions as any).$_optionName = "options";

const DxSearchEditorOptionsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:accessKey": null,
    "update:activeStateEnabled": null,
    "update:bindingOptions": null,
    "update:buttons": null,
    "update:disabled": null,
    "update:elementAttr": null,
    "update:focusStateEnabled": null,
    "update:height": null,
    "update:hint": null,
    "update:hoverStateEnabled": null,
    "update:inputAttr": null,
    "update:isDirty": null,
    "update:isValid": null,
    "update:label": null,
    "update:labelMode": null,
    "update:mask": null,
    "update:maskChar": null,
    "update:maskInvalidMessage": null,
    "update:maskRules": null,
    "update:maxLength": null,
    "update:mode": null,
    "update:name": null,
    "update:onChange": null,
    "update:onContentReady": null,
    "update:onCopy": null,
    "update:onCut": null,
    "update:onDisposing": null,
    "update:onEnterKey": null,
    "update:onFocusIn": null,
    "update:onFocusOut": null,
    "update:onInitialized": null,
    "update:onInput": null,
    "update:onKeyDown": null,
    "update:onKeyUp": null,
    "update:onOptionChanged": null,
    "update:onPaste": null,
    "update:onValueChanged": null,
    "update:placeholder": null,
    "update:readOnly": null,
    "update:rtlEnabled": null,
    "update:showClearButton": null,
    "update:showMaskMode": null,
    "update:spellcheck": null,
    "update:stylingMode": null,
    "update:tabIndex": null,
    "update:text": null,
    "update:useMaskedValue": null,
    "update:validationError": null,
    "update:validationErrors": null,
    "update:validationMessageMode": null,
    "update:validationMessagePosition": null,
    "update:validationStatus": null,
    "update:value": null,
    "update:valueChangeEvent": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    accessKey: {},
    activeStateEnabled: Boolean,
    bindingOptions: Object,
    buttons: Array,
    disabled: Boolean,
    elementAttr: Object,
    focusStateEnabled: Boolean,
    height: {},
    hint: {},
    hoverStateEnabled: Boolean,
    inputAttr: {},
    isDirty: Boolean,
    isValid: Boolean,
    label: String,
    labelMode: {},
    mask: String,
    maskChar: String,
    maskInvalidMessage: String,
    maskRules: {},
    maxLength: [Number, String],
    mode: {},
    name: String,
    onChange: Function,
    onContentReady: Function,
    onCopy: Function,
    onCut: Function,
    onDisposing: Function,
    onEnterKey: Function,
    onFocusIn: Function,
    onFocusOut: Function,
    onInitialized: Function,
    onInput: Function,
    onKeyDown: Function,
    onKeyUp: Function,
    onOptionChanged: Function,
    onPaste: Function,
    onValueChanged: Function,
    placeholder: String,
    readOnly: Boolean,
    rtlEnabled: Boolean,
    showClearButton: Boolean,
    showMaskMode: {},
    spellcheck: Boolean,
    stylingMode: {},
    tabIndex: Number,
    text: String,
    useMaskedValue: Boolean,
    validationError: {},
    validationErrors: Array,
    validationMessageMode: {},
    validationMessagePosition: {},
    validationStatus: {},
    value: String,
    valueChangeEvent: String,
    visible: Boolean,
    width: {}
  }
};

prepareConfigurationComponentConfig(DxSearchEditorOptionsConfig);

const DxSearchEditorOptions = defineComponent(DxSearchEditorOptionsConfig);

(DxSearchEditorOptions as any).$_optionName = "searchEditorOptions";
(DxSearchEditorOptions as any).$_expectedChildren = {
  button: { isCollectionItem: true, optionName: "buttons" }
};

export default DxTreeView;
export {
  DxTreeView,
  DxButton,
  DxItem,
  DxOptions,
  DxSearchEditorOptions
};
import type * as DxTreeViewTypes from "devextreme/ui/tree_view_types";
export { DxTreeViewTypes };
