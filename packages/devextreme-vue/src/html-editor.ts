import HtmlEditor, { Properties } from "devextreme/ui/html_editor";
import { defineComponent } from "vue";
import { prepareComponentConfig } from "./core/index";
import { prepareConfigurationComponentConfig } from "./core/index";

type AccessibleOptions = Pick<Properties,
  "accessKey" |
  "activeStateEnabled" |
  "allowSoftLineBreak" |
  "converter" |
  "customizeModules" |
  "disabled" |
  "elementAttr" |
  "focusStateEnabled" |
  "height" |
  "hint" |
  "hoverStateEnabled" |
  "imageUpload" |
  "isDirty" |
  "isValid" |
  "mediaResizing" |
  "mentions" |
  "name" |
  "onContentReady" |
  "onDisposing" |
  "onFocusIn" |
  "onFocusOut" |
  "onInitialized" |
  "onOptionChanged" |
  "onValueChanged" |
  "placeholder" |
  "readOnly" |
  "rtlEnabled" |
  "stylingMode" |
  "tabIndex" |
  "tableContextMenu" |
  "tableResizing" |
  "toolbar" |
  "validationError" |
  "validationErrors" |
  "validationMessageMode" |
  "validationMessagePosition" |
  "validationStatus" |
  "value" |
  "variables" |
  "visible" |
  "width"
>;

interface DxHtmlEditor extends AccessibleOptions {
  readonly instance?: HtmlEditor;
}

const componentConfig = {
  props: {
    accessKey: {},
    activeStateEnabled: Boolean,
    allowSoftLineBreak: Boolean,
    converter: {},
    customizeModules: Function,
    disabled: Boolean,
    elementAttr: Object,
    focusStateEnabled: Boolean,
    height: {},
    hint: {},
    hoverStateEnabled: Boolean,
    imageUpload: Object,
    isDirty: Boolean,
    isValid: Boolean,
    mediaResizing: Object,
    mentions: Array,
    name: String,
    onContentReady: Function,
    onDisposing: Function,
    onFocusIn: Function,
    onFocusOut: Function,
    onInitialized: Function,
    onOptionChanged: Function,
    onValueChanged: Function,
    placeholder: String,
    readOnly: Boolean,
    rtlEnabled: Boolean,
    stylingMode: {},
    tabIndex: Number,
    tableContextMenu: Object,
    tableResizing: Object,
    toolbar: Object,
    validationError: {},
    validationErrors: Array,
    validationMessageMode: {},
    validationMessagePosition: {},
    validationStatus: {},
    value: {},
    variables: Object,
    visible: Boolean,
    width: {}
  },
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:accessKey": null,
    "update:activeStateEnabled": null,
    "update:allowSoftLineBreak": null,
    "update:converter": null,
    "update:customizeModules": null,
    "update:disabled": null,
    "update:elementAttr": null,
    "update:focusStateEnabled": null,
    "update:height": null,
    "update:hint": null,
    "update:hoverStateEnabled": null,
    "update:imageUpload": null,
    "update:isDirty": null,
    "update:isValid": null,
    "update:mediaResizing": null,
    "update:mentions": null,
    "update:name": null,
    "update:onContentReady": null,
    "update:onDisposing": null,
    "update:onFocusIn": null,
    "update:onFocusOut": null,
    "update:onInitialized": null,
    "update:onOptionChanged": null,
    "update:onValueChanged": null,
    "update:placeholder": null,
    "update:readOnly": null,
    "update:rtlEnabled": null,
    "update:stylingMode": null,
    "update:tabIndex": null,
    "update:tableContextMenu": null,
    "update:tableResizing": null,
    "update:toolbar": null,
    "update:validationError": null,
    "update:validationErrors": null,
    "update:validationMessageMode": null,
    "update:validationMessagePosition": null,
    "update:validationStatus": null,
    "update:value": null,
    "update:variables": null,
    "update:visible": null,
    "update:width": null,
  },
  model: { prop: "value", event: "update:value" },
  computed: {
    instance(): HtmlEditor {
      return (this as any).$_instance;
    }
  },
  beforeCreate() {
    (this as any).$_WidgetClass = HtmlEditor;
    (this as any).$_hasAsyncTemplate = true;
    (this as any).$_expectedChildren = {
      converter: { isCollectionItem: false, optionName: "converter" },
      imageUpload: { isCollectionItem: false, optionName: "imageUpload" },
      mediaResizing: { isCollectionItem: false, optionName: "mediaResizing" },
      mention: { isCollectionItem: true, optionName: "mentions" },
      tableContextMenu: { isCollectionItem: false, optionName: "tableContextMenu" },
      tableResizing: { isCollectionItem: false, optionName: "tableResizing" },
      toolbar: { isCollectionItem: false, optionName: "toolbar" },
      variables: { isCollectionItem: false, optionName: "variables" }
    };
  }
};

prepareComponentConfig(componentConfig);

const DxHtmlEditor = defineComponent(componentConfig);


const DxConverterConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:fromHtml": null,
    "update:toHtml": null,
  },
  props: {
    fromHtml: Function,
    toHtml: Function
  }
};

prepareConfigurationComponentConfig(DxConverterConfig);

const DxConverter = defineComponent(DxConverterConfig);

(DxConverter as any).$_optionName = "converter";

const DxFileUploaderOptionsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:abortUpload": null,
    "update:accept": null,
    "update:accessKey": null,
    "update:activeStateEnabled": null,
    "update:allowCanceling": null,
    "update:allowedFileExtensions": null,
    "update:bindingOptions": null,
    "update:chunkSize": null,
    "update:dialogTrigger": null,
    "update:disabled": null,
    "update:dropZone": null,
    "update:elementAttr": null,
    "update:focusStateEnabled": null,
    "update:height": null,
    "update:hint": null,
    "update:hoverStateEnabled": null,
    "update:inputAttr": null,
    "update:invalidFileExtensionMessage": null,
    "update:invalidMaxFileSizeMessage": null,
    "update:invalidMinFileSizeMessage": null,
    "update:isDirty": null,
    "update:isValid": null,
    "update:labelText": null,
    "update:maxFileSize": null,
    "update:minFileSize": null,
    "update:multiple": null,
    "update:name": null,
    "update:onBeforeSend": null,
    "update:onContentReady": null,
    "update:onDisposing": null,
    "update:onDropZoneEnter": null,
    "update:onDropZoneLeave": null,
    "update:onFilesUploaded": null,
    "update:onInitialized": null,
    "update:onOptionChanged": null,
    "update:onProgress": null,
    "update:onUploadAborted": null,
    "update:onUploaded": null,
    "update:onUploadError": null,
    "update:onUploadStarted": null,
    "update:onValueChanged": null,
    "update:progress": null,
    "update:readOnly": null,
    "update:readyToUploadMessage": null,
    "update:rtlEnabled": null,
    "update:selectButtonText": null,
    "update:showFileList": null,
    "update:tabIndex": null,
    "update:uploadAbortedMessage": null,
    "update:uploadButtonText": null,
    "update:uploadChunk": null,
    "update:uploadCustomData": null,
    "update:uploadedMessage": null,
    "update:uploadFailedMessage": null,
    "update:uploadFile": null,
    "update:uploadHeaders": null,
    "update:uploadMethod": null,
    "update:uploadMode": null,
    "update:uploadUrl": null,
    "update:validationError": null,
    "update:validationErrors": null,
    "update:validationStatus": null,
    "update:value": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    abortUpload: Function,
    accept: String,
    accessKey: {},
    activeStateEnabled: Boolean,
    allowCanceling: Boolean,
    allowedFileExtensions: Array,
    bindingOptions: Object,
    chunkSize: Number,
    dialogTrigger: {},
    disabled: Boolean,
    dropZone: {},
    elementAttr: Object,
    focusStateEnabled: Boolean,
    height: {},
    hint: {},
    hoverStateEnabled: Boolean,
    inputAttr: {},
    invalidFileExtensionMessage: String,
    invalidMaxFileSizeMessage: String,
    invalidMinFileSizeMessage: String,
    isDirty: Boolean,
    isValid: Boolean,
    labelText: String,
    maxFileSize: Number,
    minFileSize: Number,
    multiple: Boolean,
    name: String,
    onBeforeSend: Function,
    onContentReady: Function,
    onDisposing: Function,
    onDropZoneEnter: Function,
    onDropZoneLeave: Function,
    onFilesUploaded: Function,
    onInitialized: Function,
    onOptionChanged: Function,
    onProgress: Function,
    onUploadAborted: Function,
    onUploaded: Function,
    onUploadError: Function,
    onUploadStarted: Function,
    onValueChanged: Function,
    progress: Number,
    readOnly: Boolean,
    readyToUploadMessage: String,
    rtlEnabled: Boolean,
    selectButtonText: String,
    showFileList: Boolean,
    tabIndex: Number,
    uploadAbortedMessage: String,
    uploadButtonText: String,
    uploadChunk: Function,
    uploadCustomData: {},
    uploadedMessage: String,
    uploadFailedMessage: String,
    uploadFile: Function,
    uploadHeaders: {},
    uploadMethod: {},
    uploadMode: {},
    uploadUrl: String,
    validationError: {},
    validationErrors: Array,
    validationStatus: {},
    value: Array,
    visible: Boolean,
    width: {}
  }
};

prepareConfigurationComponentConfig(DxFileUploaderOptionsConfig);

const DxFileUploaderOptions = defineComponent(DxFileUploaderOptionsConfig);

(DxFileUploaderOptions as any).$_optionName = "fileUploaderOptions";

const DxImageUploadConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:fileUploaderOptions": null,
    "update:fileUploadMode": null,
    "update:tabs": null,
    "update:uploadDirectory": null,
    "update:uploadUrl": null,
  },
  props: {
    fileUploaderOptions: Object,
    fileUploadMode: {},
    tabs: Array,
    uploadDirectory: {},
    uploadUrl: {}
  }
};

prepareConfigurationComponentConfig(DxImageUploadConfig);

const DxImageUpload = defineComponent(DxImageUploadConfig);

(DxImageUpload as any).$_optionName = "imageUpload";
(DxImageUpload as any).$_expectedChildren = {
  fileUploaderOptions: { isCollectionItem: false, optionName: "fileUploaderOptions" },
  tab: { isCollectionItem: true, optionName: "tabs" }
};

const DxItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:acceptedValues": null,
    "update:beginGroup": null,
    "update:closeMenuOnClick": null,
    "update:cssClass": null,
    "update:disabled": null,
    "update:formatName": null,
    "update:formatValues": null,
    "update:html": null,
    "update:icon": null,
    "update:items": null,
    "update:locateInMenu": null,
    "update:location": null,
    "update:menuItemTemplate": null,
    "update:name": null,
    "update:options": null,
    "update:selectable": null,
    "update:selected": null,
    "update:showText": null,
    "update:template": null,
    "update:text": null,
    "update:visible": null,
    "update:widget": null,
  },
  props: {
    acceptedValues: Array,
    beginGroup: Boolean,
    closeMenuOnClick: Boolean,
    cssClass: {},
    disabled: Boolean,
    formatName: {},
    formatValues: Array,
    html: String,
    icon: String,
    items: Array,
    locateInMenu: {},
    location: {},
    menuItemTemplate: {},
    name: {},
    options: {},
    selectable: Boolean,
    selected: Boolean,
    showText: {},
    template: {},
    text: String,
    visible: Boolean,
    widget: {}
  }
};

prepareConfigurationComponentConfig(DxItemConfig);

const DxItem = defineComponent(DxItemConfig);

(DxItem as any).$_optionName = "items";
(DxItem as any).$_isCollectionItem = true;

const DxMediaResizingConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowedTargets": null,
    "update:enabled": null,
  },
  props: {
    allowedTargets: Array,
    enabled: Boolean
  }
};

prepareConfigurationComponentConfig(DxMediaResizingConfig);

const DxMediaResizing = defineComponent(DxMediaResizingConfig);

(DxMediaResizing as any).$_optionName = "mediaResizing";

const DxMentionConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:dataSource": null,
    "update:displayExpr": null,
    "update:itemTemplate": null,
    "update:marker": null,
    "update:minSearchLength": null,
    "update:searchExpr": null,
    "update:searchTimeout": null,
    "update:template": null,
    "update:valueExpr": null,
  },
  props: {
    dataSource: {},
    displayExpr: [Function, String],
    itemTemplate: {},
    marker: String,
    minSearchLength: Number,
    searchExpr: [Array, Function, String],
    searchTimeout: Number,
    template: {},
    valueExpr: [Function, String]
  }
};

prepareConfigurationComponentConfig(DxMentionConfig);

const DxMention = defineComponent(DxMentionConfig);

(DxMention as any).$_optionName = "mentions";
(DxMention as any).$_isCollectionItem = true;

const DxTabConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:name": null,
  },
  props: {
    name: {}
  }
};

prepareConfigurationComponentConfig(DxTabConfig);

const DxTab = defineComponent(DxTabConfig);

(DxTab as any).$_optionName = "tabs";
(DxTab as any).$_isCollectionItem = true;

const DxTableContextMenuConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:enabled": null,
    "update:items": null,
  },
  props: {
    enabled: Boolean,
    items: Array
  }
};

prepareConfigurationComponentConfig(DxTableContextMenuConfig);

const DxTableContextMenu = defineComponent(DxTableContextMenuConfig);

(DxTableContextMenu as any).$_optionName = "tableContextMenu";
(DxTableContextMenu as any).$_expectedChildren = {
  item: { isCollectionItem: true, optionName: "items" },
  tableContextMenuItem: { isCollectionItem: true, optionName: "items" }
};

const DxTableContextMenuItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:beginGroup": null,
    "update:closeMenuOnClick": null,
    "update:disabled": null,
    "update:icon": null,
    "update:items": null,
    "update:name": null,
    "update:selectable": null,
    "update:selected": null,
    "update:template": null,
    "update:text": null,
    "update:visible": null,
  },
  props: {
    beginGroup: Boolean,
    closeMenuOnClick: Boolean,
    disabled: Boolean,
    icon: String,
    items: Array,
    name: {},
    selectable: Boolean,
    selected: Boolean,
    template: {},
    text: String,
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxTableContextMenuItemConfig);

const DxTableContextMenuItem = defineComponent(DxTableContextMenuItemConfig);

(DxTableContextMenuItem as any).$_optionName = "items";
(DxTableContextMenuItem as any).$_isCollectionItem = true;

const DxTableResizingConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:enabled": null,
    "update:minColumnWidth": null,
    "update:minRowHeight": null,
  },
  props: {
    enabled: Boolean,
    minColumnWidth: Number,
    minRowHeight: Number
  }
};

prepareConfigurationComponentConfig(DxTableResizingConfig);

const DxTableResizing = defineComponent(DxTableResizingConfig);

(DxTableResizing as any).$_optionName = "tableResizing";

const DxToolbarConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:container": null,
    "update:items": null,
    "update:multiline": null,
  },
  props: {
    container: {},
    items: Array,
    multiline: Boolean
  }
};

prepareConfigurationComponentConfig(DxToolbarConfig);

const DxToolbar = defineComponent(DxToolbarConfig);

(DxToolbar as any).$_optionName = "toolbar";
(DxToolbar as any).$_expectedChildren = {
  item: { isCollectionItem: true, optionName: "items" },
  toolbarItem: { isCollectionItem: true, optionName: "items" }
};

const DxToolbarItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:acceptedValues": null,
    "update:cssClass": null,
    "update:disabled": null,
    "update:formatName": null,
    "update:formatValues": null,
    "update:html": null,
    "update:locateInMenu": null,
    "update:location": null,
    "update:menuItemTemplate": null,
    "update:name": null,
    "update:options": null,
    "update:showText": null,
    "update:template": null,
    "update:text": null,
    "update:visible": null,
    "update:widget": null,
  },
  props: {
    acceptedValues: Array,
    cssClass: {},
    disabled: Boolean,
    formatName: {},
    formatValues: Array,
    html: String,
    locateInMenu: {},
    location: {},
    menuItemTemplate: {},
    name: {},
    options: {},
    showText: {},
    template: {},
    text: String,
    visible: Boolean,
    widget: {}
  }
};

prepareConfigurationComponentConfig(DxToolbarItemConfig);

const DxToolbarItem = defineComponent(DxToolbarItemConfig);

(DxToolbarItem as any).$_optionName = "items";
(DxToolbarItem as any).$_isCollectionItem = true;

const DxVariablesConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:dataSource": null,
    "update:escapeChar": null,
  },
  props: {
    dataSource: {},
    escapeChar: [Array, String]
  }
};

prepareConfigurationComponentConfig(DxVariablesConfig);

const DxVariables = defineComponent(DxVariablesConfig);

(DxVariables as any).$_optionName = "variables";

export default DxHtmlEditor;
export {
  DxHtmlEditor,
  DxConverter,
  DxFileUploaderOptions,
  DxImageUpload,
  DxItem,
  DxMediaResizing,
  DxMention,
  DxTab,
  DxTableContextMenu,
  DxTableContextMenuItem,
  DxTableResizing,
  DxToolbar,
  DxToolbarItem,
  DxVariables
};
import type * as DxHtmlEditorTypes from "devextreme/ui/html_editor_types";
export { DxHtmlEditorTypes };
