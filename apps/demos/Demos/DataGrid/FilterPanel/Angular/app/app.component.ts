import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PositionConfig } from 'devextreme/animation/position';
import { DxFilterBuilderTypes } from 'devextreme-angular/ui/filter-builder';
import { DxoHeaderFilterComponent } from 'devextreme-angular/ui/nested/header-filter';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { Order, Service } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

const getOrderDay = function ({ OrderDate }): number {
  return (new Date(OrderDate)).getDay();
};

let modulePrefix = '';
// @ts-ignore
if (window && window.config.packageConfigPaths) {
  modulePrefix = '/app';
}

@Component({
  selector: 'demo-app',
  providers: [Service],
  templateUrl: `.${modulePrefix}/app.component.html`,
  styleUrls: [`.${modulePrefix}/app.component.css`],
})

export class AppComponent {
  dataSource: Order[];

  popupPosition: PositionConfig = {
    of: window, at: 'top', my: 'top', offset: { y: 10 },
  };

  filterValue = [
    ['Employee', '=', 'Clark Morgan'],
    'and',
    ['OrderDate', 'weekends'],
  ];

  customOperations: DxFilterBuilderTypes.CustomOperation[] = [{
    name: 'weekends',
    caption: 'Weekends',
    dataTypes: ['date'],
    icon: 'check',
    hasValue: false,
    calculateFilterExpression() {
      return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
    },
  }];

  saleAmountHeaderFilter: DxoHeaderFilterComponent['dataSource'] = [{
    text: 'Less than $3000',
    value: ['SaleAmount', '<', 3000],
  }, {
    text: '$3000 - $5000',
    value: [
      ['SaleAmount', '>=', 3000],
      ['SaleAmount', '<', 5000],
    ],
  }, {
    text: '$5000 - $10000',
    value: [
      ['SaleAmount', '>=', 5000],
      ['SaleAmount', '<', 10000],
    ],
  }, {
    text: '$10000 - $20000',
    value: [
      ['SaleAmount', '>=', 10000],
      ['SaleAmount', '<', 20000],
    ],
  }, {
    text: 'Greater than $20000',
    value: ['SaleAmount', '>=', 20000],
  }];

  constructor(service: Service) {
    this.dataSource = service.getOrders();
  }
}

@NgModule({
  imports: [
    BrowserModule,
    DxDataGridModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
