<template>
  <DxDataGrid
    :data-source="employees"
    :show-borders="true"
    :focused-row-enabled="true"
    key-expr="ID"
  >
    <DxEditing
      :allow-updating="true"
      :allow-deleting="true"
      :select-text-on-edit-start="true"
      :use-icons="true"
    />
    <DxHeaderFilter :visible="true"/>
    <DxFilterRow :visible="true"/>
    <DxFilterPanel :visible="true"/>
    <DxPager
      :visible="true"
      :allowed-page-sizes="[5, 10]"
      :show-page-size-selector="true"
      :show-navigation-buttons="true"
    />
    <DxPaging :page-size="10"/>
    <DxColumn data-field="FirstName"/>
    <DxColumn data-field="LastName"/>
    <DxColumn data-field="Position"/>
    <DxColumn
      data-field="StateID"
      caption="State"
      data-type="number"
    >
      <DxLookup
        :data-source="states"
        value-expr="ID"
        display-expr="Name"
      />
    </DxColumn>
  </DxDataGrid>
</template>
<script setup lang="ts">
import {
  DxDataGrid,
  DxEditing,
  DxHeaderFilter,
  DxFilterRow,
  DxFilterPanel,
  DxPager,
  DxPaging,
  DxColumn,
  DxLookup,
} from 'devextreme-vue/data-grid';
import { employees, states } from './data.ts';

</script>
