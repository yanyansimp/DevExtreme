Users can group appointments by resources. This demo declares a single resource&mdash;Priority. Refer to the following demo for more information about resources and their configuration: [Resources](/Demos/WidgetsGallery/Demo/Scheduler/Resources/).

To group appointments by resources, specify the [groups[]](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#groups) array. Each element of this array is the [fieldExpr](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#fieldExpr) of a corresponding resource kind. The order of group headers in the UI is the same as items in the resource instances array. If the **groups[]** array contains more than one element, groups are nested. 
<!--split-->

The Scheduler can arrange group headers vertically (in a column) or horizontally (in a row). Use the **views**.[groupOrientation](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/#groupOrientation) property to set a custom orientation for specific views. This demo shows two Work Week views with different group orientations.
