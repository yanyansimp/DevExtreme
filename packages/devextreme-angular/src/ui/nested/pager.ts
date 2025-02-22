/* tslint:disable:max-line-length */

/* tslint:disable:use-input-property-decorator */

import {
    Component,
    OnInit,
    OnDestroy,
    NgModule,
    Host,
    SkipSelf
} from '@angular/core';





import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { DxoPager } from './base/pager';


@Component({
    selector: 'dxo-pager',
    template: '',
    styles: [''],
    providers: [NestedOptionHost],
    inputs: [
        'allowedPageSizes',
        'displayMode',
        'infoText',
        'label',
        'showInfo',
        'showNavigationButtons',
        'showPageSizeSelector',
        'visible'
    ]
})
export class DxoPagerComponent extends DxoPager implements OnDestroy, OnInit  {

    protected get _optionPath() {
        return 'pager';
    }


    constructor(@SkipSelf() @Host() parentOptionHost: NestedOptionHost,
            @Host() optionHost: NestedOptionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }


    ngOnInit() {
        this._addRecreatedComponent();
    }

    ngOnDestroy() {
        this._addRemovedOption(this._getOptionPath());
    }


}

@NgModule({
  declarations: [
    DxoPagerComponent
  ],
  exports: [
    DxoPagerComponent
  ],
})
export class DxoPagerModule { }
