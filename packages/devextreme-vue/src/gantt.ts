import Gantt, { Properties } from "devextreme/ui/gantt";
import { defineComponent } from "vue";
import { prepareComponentConfig } from "./core/index";
import { prepareConfigurationComponentConfig } from "./core/index";

type AccessibleOptions = Pick<Properties,
  "accessKey" |
  "activeStateEnabled" |
  "allowSelection" |
  "columns" |
  "contextMenu" |
  "dependencies" |
  "disabled" |
  "editing" |
  "elementAttr" |
  "endDateRange" |
  "filterRow" |
  "firstDayOfWeek" |
  "focusStateEnabled" |
  "headerFilter" |
  "height" |
  "hint" |
  "hoverStateEnabled" |
  "onContentReady" |
  "onContextMenuPreparing" |
  "onCustomCommand" |
  "onDependencyDeleted" |
  "onDependencyDeleting" |
  "onDependencyInserted" |
  "onDependencyInserting" |
  "onDisposing" |
  "onInitialized" |
  "onOptionChanged" |
  "onResourceAssigned" |
  "onResourceAssigning" |
  "onResourceDeleted" |
  "onResourceDeleting" |
  "onResourceInserted" |
  "onResourceInserting" |
  "onResourceManagerDialogShowing" |
  "onResourceUnassigned" |
  "onResourceUnassigning" |
  "onScaleCellPrepared" |
  "onSelectionChanged" |
  "onTaskClick" |
  "onTaskDblClick" |
  "onTaskDeleted" |
  "onTaskDeleting" |
  "onTaskEditDialogShowing" |
  "onTaskInserted" |
  "onTaskInserting" |
  "onTaskMoving" |
  "onTaskUpdated" |
  "onTaskUpdating" |
  "resourceAssignments" |
  "resources" |
  "rootValue" |
  "scaleType" |
  "scaleTypeRange" |
  "selectedRowKey" |
  "showDependencies" |
  "showResources" |
  "showRowLines" |
  "sorting" |
  "startDateRange" |
  "stripLines" |
  "tabIndex" |
  "taskContentTemplate" |
  "taskListWidth" |
  "taskProgressTooltipContentTemplate" |
  "tasks" |
  "taskTimeTooltipContentTemplate" |
  "taskTitlePosition" |
  "taskTooltipContentTemplate" |
  "toolbar" |
  "validation" |
  "visible" |
  "width"
>;

interface DxGantt extends AccessibleOptions {
  readonly instance?: Gantt;
}

const componentConfig = {
  props: {
    accessKey: {},
    activeStateEnabled: Boolean,
    allowSelection: Boolean,
    columns: Array,
    contextMenu: Object,
    dependencies: Object,
    disabled: Boolean,
    editing: Object,
    elementAttr: Object,
    endDateRange: Date,
    filterRow: Object,
    firstDayOfWeek: {},
    focusStateEnabled: Boolean,
    headerFilter: Object,
    height: {},
    hint: {},
    hoverStateEnabled: Boolean,
    onContentReady: Function,
    onContextMenuPreparing: Function,
    onCustomCommand: Function,
    onDependencyDeleted: Function,
    onDependencyDeleting: Function,
    onDependencyInserted: Function,
    onDependencyInserting: Function,
    onDisposing: Function,
    onInitialized: Function,
    onOptionChanged: Function,
    onResourceAssigned: Function,
    onResourceAssigning: Function,
    onResourceDeleted: Function,
    onResourceDeleting: Function,
    onResourceInserted: Function,
    onResourceInserting: Function,
    onResourceManagerDialogShowing: Function,
    onResourceUnassigned: Function,
    onResourceUnassigning: Function,
    onScaleCellPrepared: Function,
    onSelectionChanged: Function,
    onTaskClick: Function,
    onTaskDblClick: Function,
    onTaskDeleted: Function,
    onTaskDeleting: Function,
    onTaskEditDialogShowing: Function,
    onTaskInserted: Function,
    onTaskInserting: Function,
    onTaskMoving: Function,
    onTaskUpdated: Function,
    onTaskUpdating: Function,
    resourceAssignments: Object,
    resources: Object,
    rootValue: {},
    scaleType: {},
    scaleTypeRange: Object,
    selectedRowKey: {},
    showDependencies: Boolean,
    showResources: Boolean,
    showRowLines: Boolean,
    sorting: Object,
    startDateRange: Date,
    stripLines: Array,
    tabIndex: Number,
    taskContentTemplate: {},
    taskListWidth: Number,
    taskProgressTooltipContentTemplate: {},
    tasks: Object,
    taskTimeTooltipContentTemplate: {},
    taskTitlePosition: {},
    taskTooltipContentTemplate: {},
    toolbar: Object,
    validation: Object,
    visible: Boolean,
    width: {}
  },
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:accessKey": null,
    "update:activeStateEnabled": null,
    "update:allowSelection": null,
    "update:columns": null,
    "update:contextMenu": null,
    "update:dependencies": null,
    "update:disabled": null,
    "update:editing": null,
    "update:elementAttr": null,
    "update:endDateRange": null,
    "update:filterRow": null,
    "update:firstDayOfWeek": null,
    "update:focusStateEnabled": null,
    "update:headerFilter": null,
    "update:height": null,
    "update:hint": null,
    "update:hoverStateEnabled": null,
    "update:onContentReady": null,
    "update:onContextMenuPreparing": null,
    "update:onCustomCommand": null,
    "update:onDependencyDeleted": null,
    "update:onDependencyDeleting": null,
    "update:onDependencyInserted": null,
    "update:onDependencyInserting": null,
    "update:onDisposing": null,
    "update:onInitialized": null,
    "update:onOptionChanged": null,
    "update:onResourceAssigned": null,
    "update:onResourceAssigning": null,
    "update:onResourceDeleted": null,
    "update:onResourceDeleting": null,
    "update:onResourceInserted": null,
    "update:onResourceInserting": null,
    "update:onResourceManagerDialogShowing": null,
    "update:onResourceUnassigned": null,
    "update:onResourceUnassigning": null,
    "update:onScaleCellPrepared": null,
    "update:onSelectionChanged": null,
    "update:onTaskClick": null,
    "update:onTaskDblClick": null,
    "update:onTaskDeleted": null,
    "update:onTaskDeleting": null,
    "update:onTaskEditDialogShowing": null,
    "update:onTaskInserted": null,
    "update:onTaskInserting": null,
    "update:onTaskMoving": null,
    "update:onTaskUpdated": null,
    "update:onTaskUpdating": null,
    "update:resourceAssignments": null,
    "update:resources": null,
    "update:rootValue": null,
    "update:scaleType": null,
    "update:scaleTypeRange": null,
    "update:selectedRowKey": null,
    "update:showDependencies": null,
    "update:showResources": null,
    "update:showRowLines": null,
    "update:sorting": null,
    "update:startDateRange": null,
    "update:stripLines": null,
    "update:tabIndex": null,
    "update:taskContentTemplate": null,
    "update:taskListWidth": null,
    "update:taskProgressTooltipContentTemplate": null,
    "update:tasks": null,
    "update:taskTimeTooltipContentTemplate": null,
    "update:taskTitlePosition": null,
    "update:taskTooltipContentTemplate": null,
    "update:toolbar": null,
    "update:validation": null,
    "update:visible": null,
    "update:width": null,
  },
  computed: {
    instance(): Gantt {
      return (this as any).$_instance;
    }
  },
  beforeCreate() {
    (this as any).$_WidgetClass = Gantt;
    (this as any).$_hasAsyncTemplate = true;
    (this as any).$_expectedChildren = {
      column: { isCollectionItem: true, optionName: "columns" },
      contextMenu: { isCollectionItem: false, optionName: "contextMenu" },
      dependencies: { isCollectionItem: false, optionName: "dependencies" },
      editing: { isCollectionItem: false, optionName: "editing" },
      filterRow: { isCollectionItem: false, optionName: "filterRow" },
      ganttHeaderFilter: { isCollectionItem: false, optionName: "headerFilter" },
      headerFilter: { isCollectionItem: false, optionName: "headerFilter" },
      resourceAssignments: { isCollectionItem: false, optionName: "resourceAssignments" },
      resources: { isCollectionItem: false, optionName: "resources" },
      scaleTypeRange: { isCollectionItem: false, optionName: "scaleTypeRange" },
      sorting: { isCollectionItem: false, optionName: "sorting" },
      stripLine: { isCollectionItem: true, optionName: "stripLines" },
      tasks: { isCollectionItem: false, optionName: "tasks" },
      toolbar: { isCollectionItem: false, optionName: "toolbar" },
      validation: { isCollectionItem: false, optionName: "validation" }
    };
  }
};

prepareComponentConfig(componentConfig);

const DxGantt = defineComponent(componentConfig);


const DxColumnConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:alignment": null,
    "update:allowFiltering": null,
    "update:allowHeaderFiltering": null,
    "update:allowSorting": null,
    "update:calculateCellValue": null,
    "update:calculateDisplayValue": null,
    "update:calculateFilterExpression": null,
    "update:calculateSortValue": null,
    "update:caption": null,
    "update:cellTemplate": null,
    "update:cssClass": null,
    "update:customizeText": null,
    "update:dataField": null,
    "update:dataType": null,
    "update:encodeHtml": null,
    "update:falseText": null,
    "update:filterOperations": null,
    "update:filterType": null,
    "update:filterValue": null,
    "update:filterValues": null,
    "update:format": null,
    "update:headerCellTemplate": null,
    "update:headerFilter": null,
    "update:minWidth": null,
    "update:selectedFilterOperation": null,
    "update:sortIndex": null,
    "update:sortingMethod": null,
    "update:sortOrder": null,
    "update:trueText": null,
    "update:visible": null,
    "update:visibleIndex": null,
    "update:width": null,
  },
  props: {
    alignment: {},
    allowFiltering: Boolean,
    allowHeaderFiltering: Boolean,
    allowSorting: Boolean,
    calculateCellValue: Function,
    calculateDisplayValue: [Function, String],
    calculateFilterExpression: Function,
    calculateSortValue: [Function, String],
    caption: {},
    cellTemplate: {},
    cssClass: {},
    customizeText: Function,
    dataField: {},
    dataType: {},
    encodeHtml: Boolean,
    falseText: String,
    filterOperations: Array,
    filterType: {},
    filterValue: {},
    filterValues: Array,
    format: {},
    headerCellTemplate: {},
    headerFilter: Object,
    minWidth: {},
    selectedFilterOperation: {},
    sortIndex: {},
    sortingMethod: {},
    sortOrder: {},
    trueText: String,
    visible: Boolean,
    visibleIndex: {},
    width: {}
  }
};

prepareConfigurationComponentConfig(DxColumnConfig);

const DxColumn = defineComponent(DxColumnConfig);

(DxColumn as any).$_optionName = "columns";
(DxColumn as any).$_isCollectionItem = true;
(DxColumn as any).$_expectedChildren = {
  columnHeaderFilter: { isCollectionItem: false, optionName: "headerFilter" },
  format: { isCollectionItem: false, optionName: "format" },
  headerFilter: { isCollectionItem: false, optionName: "headerFilter" }
};

const DxColumnHeaderFilterConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowSearch": null,
    "update:allowSelectAll": null,
    "update:dataSource": null,
    "update:groupInterval": null,
    "update:height": null,
    "update:search": null,
    "update:searchMode": null,
    "update:width": null,
  },
  props: {
    allowSearch: Boolean,
    allowSelectAll: Boolean,
    dataSource: {},
    groupInterval: {},
    height: {},
    search: Object,
    searchMode: {},
    width: {}
  }
};

prepareConfigurationComponentConfig(DxColumnHeaderFilterConfig);

const DxColumnHeaderFilter = defineComponent(DxColumnHeaderFilterConfig);

(DxColumnHeaderFilter as any).$_optionName = "headerFilter";
(DxColumnHeaderFilter as any).$_expectedChildren = {
  columnHeaderFilterSearch: { isCollectionItem: false, optionName: "search" },
  search: { isCollectionItem: false, optionName: "search" }
};

const DxColumnHeaderFilterSearchConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:editorOptions": null,
    "update:enabled": null,
    "update:mode": null,
    "update:searchExpr": null,
    "update:timeout": null,
  },
  props: {
    editorOptions: {},
    enabled: Boolean,
    mode: {},
    searchExpr: {},
    timeout: Number
  }
};

prepareConfigurationComponentConfig(DxColumnHeaderFilterSearchConfig);

const DxColumnHeaderFilterSearch = defineComponent(DxColumnHeaderFilterSearchConfig);

(DxColumnHeaderFilterSearch as any).$_optionName = "search";

const DxContextMenuConfig = {
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

prepareConfigurationComponentConfig(DxContextMenuConfig);

const DxContextMenu = defineComponent(DxContextMenuConfig);

(DxContextMenu as any).$_optionName = "contextMenu";
(DxContextMenu as any).$_expectedChildren = {
  contextMenuItem: { isCollectionItem: true, optionName: "items" },
  item: { isCollectionItem: true, optionName: "items" }
};

const DxContextMenuItemConfig = {
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

prepareConfigurationComponentConfig(DxContextMenuItemConfig);

const DxContextMenuItem = defineComponent(DxContextMenuItemConfig);

(DxContextMenuItem as any).$_optionName = "items";
(DxContextMenuItem as any).$_isCollectionItem = true;

const DxDependenciesConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:dataSource": null,
    "update:keyExpr": null,
    "update:predecessorIdExpr": null,
    "update:successorIdExpr": null,
    "update:typeExpr": null,
  },
  props: {
    dataSource: {},
    keyExpr: [Function, String],
    predecessorIdExpr: [Function, String],
    successorIdExpr: [Function, String],
    typeExpr: [Function, String]
  }
};

prepareConfigurationComponentConfig(DxDependenciesConfig);

const DxDependencies = defineComponent(DxDependenciesConfig);

(DxDependencies as any).$_optionName = "dependencies";

const DxEditingConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowDependencyAdding": null,
    "update:allowDependencyDeleting": null,
    "update:allowResourceAdding": null,
    "update:allowResourceDeleting": null,
    "update:allowResourceUpdating": null,
    "update:allowTaskAdding": null,
    "update:allowTaskDeleting": null,
    "update:allowTaskResourceUpdating": null,
    "update:allowTaskUpdating": null,
    "update:enabled": null,
  },
  props: {
    allowDependencyAdding: Boolean,
    allowDependencyDeleting: Boolean,
    allowResourceAdding: Boolean,
    allowResourceDeleting: Boolean,
    allowResourceUpdating: Boolean,
    allowTaskAdding: Boolean,
    allowTaskDeleting: Boolean,
    allowTaskResourceUpdating: Boolean,
    allowTaskUpdating: Boolean,
    enabled: Boolean
  }
};

prepareConfigurationComponentConfig(DxEditingConfig);

const DxEditing = defineComponent(DxEditingConfig);

(DxEditing as any).$_optionName = "editing";

const DxFilterRowConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:betweenEndText": null,
    "update:betweenStartText": null,
    "update:operationDescriptions": null,
    "update:resetOperationText": null,
    "update:showAllText": null,
    "update:showOperationChooser": null,
    "update:visible": null,
  },
  props: {
    betweenEndText: String,
    betweenStartText: String,
    operationDescriptions: Object,
    resetOperationText: String,
    showAllText: String,
    showOperationChooser: Boolean,
    visible: Boolean
  }
};

prepareConfigurationComponentConfig(DxFilterRowConfig);

const DxFilterRow = defineComponent(DxFilterRowConfig);

(DxFilterRow as any).$_optionName = "filterRow";
(DxFilterRow as any).$_expectedChildren = {
  operationDescriptions: { isCollectionItem: false, optionName: "operationDescriptions" }
};

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

const DxGanttHeaderFilterConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowSearch": null,
    "update:allowSelectAll": null,
    "update:height": null,
    "update:search": null,
    "update:searchTimeout": null,
    "update:texts": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    allowSearch: Boolean,
    allowSelectAll: Boolean,
    height: Number,
    search: Object,
    searchTimeout: Number,
    texts: Object,
    visible: Boolean,
    width: Number
  }
};

prepareConfigurationComponentConfig(DxGanttHeaderFilterConfig);

const DxGanttHeaderFilter = defineComponent(DxGanttHeaderFilterConfig);

(DxGanttHeaderFilter as any).$_optionName = "headerFilter";
(DxGanttHeaderFilter as any).$_expectedChildren = {
  ganttHeaderFilterSearch: { isCollectionItem: false, optionName: "search" },
  search: { isCollectionItem: false, optionName: "search" },
  texts: { isCollectionItem: false, optionName: "texts" }
};

const DxGanttHeaderFilterSearchConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:editorOptions": null,
    "update:enabled": null,
    "update:mode": null,
    "update:timeout": null,
  },
  props: {
    editorOptions: {},
    enabled: Boolean,
    mode: {},
    timeout: Number
  }
};

prepareConfigurationComponentConfig(DxGanttHeaderFilterSearchConfig);

const DxGanttHeaderFilterSearch = defineComponent(DxGanttHeaderFilterSearchConfig);

(DxGanttHeaderFilterSearch as any).$_optionName = "search";

const DxHeaderFilterConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:allowSearch": null,
    "update:allowSelectAll": null,
    "update:dataSource": null,
    "update:groupInterval": null,
    "update:height": null,
    "update:search": null,
    "update:searchMode": null,
    "update:searchTimeout": null,
    "update:texts": null,
    "update:visible": null,
    "update:width": null,
  },
  props: {
    allowSearch: Boolean,
    allowSelectAll: Boolean,
    dataSource: {},
    groupInterval: {},
    height: {},
    search: Object,
    searchMode: {},
    searchTimeout: Number,
    texts: Object,
    visible: Boolean,
    width: {}
  }
};

prepareConfigurationComponentConfig(DxHeaderFilterConfig);

const DxHeaderFilter = defineComponent(DxHeaderFilterConfig);

(DxHeaderFilter as any).$_optionName = "headerFilter";

const DxItemConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:beginGroup": null,
    "update:closeMenuOnClick": null,
    "update:cssClass": null,
    "update:disabled": null,
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
    beginGroup: Boolean,
    closeMenuOnClick: Boolean,
    cssClass: {},
    disabled: Boolean,
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

const DxOperationDescriptionsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:between": null,
    "update:contains": null,
    "update:endsWith": null,
    "update:equal": null,
    "update:greaterThan": null,
    "update:greaterThanOrEqual": null,
    "update:lessThan": null,
    "update:lessThanOrEqual": null,
    "update:notContains": null,
    "update:notEqual": null,
    "update:startsWith": null,
  },
  props: {
    between: String,
    contains: String,
    endsWith: String,
    equal: String,
    greaterThan: String,
    greaterThanOrEqual: String,
    lessThan: String,
    lessThanOrEqual: String,
    notContains: String,
    notEqual: String,
    startsWith: String
  }
};

prepareConfigurationComponentConfig(DxOperationDescriptionsConfig);

const DxOperationDescriptions = defineComponent(DxOperationDescriptionsConfig);

(DxOperationDescriptions as any).$_optionName = "operationDescriptions";

const DxResourceAssignmentsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:dataSource": null,
    "update:keyExpr": null,
    "update:resourceIdExpr": null,
    "update:taskIdExpr": null,
  },
  props: {
    dataSource: {},
    keyExpr: [Function, String],
    resourceIdExpr: [Function, String],
    taskIdExpr: [Function, String]
  }
};

prepareConfigurationComponentConfig(DxResourceAssignmentsConfig);

const DxResourceAssignments = defineComponent(DxResourceAssignmentsConfig);

(DxResourceAssignments as any).$_optionName = "resourceAssignments";

const DxResourcesConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:colorExpr": null,
    "update:dataSource": null,
    "update:keyExpr": null,
    "update:textExpr": null,
  },
  props: {
    colorExpr: [Function, String],
    dataSource: {},
    keyExpr: [Function, String],
    textExpr: [Function, String]
  }
};

prepareConfigurationComponentConfig(DxResourcesConfig);

const DxResources = defineComponent(DxResourcesConfig);

(DxResources as any).$_optionName = "resources";

const DxScaleTypeRangeConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:max": null,
    "update:min": null,
  },
  props: {
    max: {},
    min: {}
  }
};

prepareConfigurationComponentConfig(DxScaleTypeRangeConfig);

const DxScaleTypeRange = defineComponent(DxScaleTypeRangeConfig);

(DxScaleTypeRange as any).$_optionName = "scaleTypeRange";

const DxSearchConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:editorOptions": null,
    "update:enabled": null,
    "update:mode": null,
    "update:searchExpr": null,
    "update:timeout": null,
  },
  props: {
    editorOptions: {},
    enabled: Boolean,
    mode: {},
    searchExpr: {},
    timeout: Number
  }
};

prepareConfigurationComponentConfig(DxSearchConfig);

const DxSearch = defineComponent(DxSearchConfig);

(DxSearch as any).$_optionName = "search";

const DxSortingConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:ascendingText": null,
    "update:clearText": null,
    "update:descendingText": null,
    "update:mode": null,
    "update:showSortIndexes": null,
  },
  props: {
    ascendingText: String,
    clearText: String,
    descendingText: String,
    mode: {},
    showSortIndexes: Boolean
  }
};

prepareConfigurationComponentConfig(DxSortingConfig);

const DxSorting = defineComponent(DxSortingConfig);

(DxSorting as any).$_optionName = "sorting";

const DxStripLineConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:cssClass": null,
    "update:end": null,
    "update:start": null,
    "update:title": null,
  },
  props: {
    cssClass: {},
    end: {},
    start: {},
    title: {}
  }
};

prepareConfigurationComponentConfig(DxStripLineConfig);

const DxStripLine = defineComponent(DxStripLineConfig);

(DxStripLine as any).$_optionName = "stripLines";
(DxStripLine as any).$_isCollectionItem = true;

const DxTasksConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:colorExpr": null,
    "update:dataSource": null,
    "update:endExpr": null,
    "update:keyExpr": null,
    "update:parentIdExpr": null,
    "update:progressExpr": null,
    "update:startExpr": null,
    "update:titleExpr": null,
  },
  props: {
    colorExpr: [Function, String],
    dataSource: {},
    endExpr: [Function, String],
    keyExpr: [Function, String],
    parentIdExpr: [Function, String],
    progressExpr: [Function, String],
    startExpr: [Function, String],
    titleExpr: [Function, String]
  }
};

prepareConfigurationComponentConfig(DxTasksConfig);

const DxTasks = defineComponent(DxTasksConfig);

(DxTasks as any).$_optionName = "tasks";

const DxTextsConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:cancel": null,
    "update:emptyValue": null,
    "update:ok": null,
  },
  props: {
    cancel: String,
    emptyValue: String,
    ok: String
  }
};

prepareConfigurationComponentConfig(DxTextsConfig);

const DxTexts = defineComponent(DxTextsConfig);

(DxTexts as any).$_optionName = "texts";

const DxToolbarConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:items": null,
  },
  props: {
    items: Array
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
    "update:cssClass": null,
    "update:disabled": null,
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
    cssClass: {},
    disabled: Boolean,
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

const DxValidationConfig = {
  emits: {
    "update:isActive": null,
    "update:hoveredElement": null,
    "update:autoUpdateParentTasks": null,
    "update:enablePredecessorGap": null,
    "update:validateDependencies": null,
  },
  props: {
    autoUpdateParentTasks: Boolean,
    enablePredecessorGap: Boolean,
    validateDependencies: Boolean
  }
};

prepareConfigurationComponentConfig(DxValidationConfig);

const DxValidation = defineComponent(DxValidationConfig);

(DxValidation as any).$_optionName = "validation";

export default DxGantt;
export {
  DxGantt,
  DxColumn,
  DxColumnHeaderFilter,
  DxColumnHeaderFilterSearch,
  DxContextMenu,
  DxContextMenuItem,
  DxDependencies,
  DxEditing,
  DxFilterRow,
  DxFormat,
  DxGanttHeaderFilter,
  DxGanttHeaderFilterSearch,
  DxHeaderFilter,
  DxItem,
  DxOperationDescriptions,
  DxResourceAssignments,
  DxResources,
  DxScaleTypeRange,
  DxSearch,
  DxSorting,
  DxStripLine,
  DxTasks,
  DxTexts,
  DxToolbar,
  DxToolbarItem,
  DxValidation
};
import type * as DxGanttTypes from "devextreme/ui/gantt_types";
export { DxGanttTypes };
