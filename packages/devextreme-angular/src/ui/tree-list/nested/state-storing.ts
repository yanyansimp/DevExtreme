/* tslint:disable:max-line-length */


import {
    Component,
    OnInit,
    OnDestroy,
    NgModule,
    Host,
    SkipSelf,
    Input
} from '@angular/core';




import { StateStoreType } from 'devextreme/common/grids';

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxo-tree-list-state-storing',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoTreeListStateStoringComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get customLoad(): (() => any) {
        return this._getOption('customLoad');
    }
    set customLoad(value: (() => any)) {
        this._setOption('customLoad', value);
    }

    @Input()
    get customSave(): ((gridState: any) => void) {
        return this._getOption('customSave');
    }
    set customSave(value: ((gridState: any) => void)) {
        this._setOption('customSave', value);
    }

    @Input()
    get enabled(): boolean {
        return this._getOption('enabled');
    }
    set enabled(value: boolean) {
        this._setOption('enabled', value);
    }

    @Input()
    get savingTimeout(): number {
        return this._getOption('savingTimeout');
    }
    set savingTimeout(value: number) {
        this._setOption('savingTimeout', value);
    }

    @Input()
    get storageKey(): string {
        return this._getOption('storageKey');
    }
    set storageKey(value: string) {
        this._setOption('storageKey', value);
    }

    @Input()
    get type(): StateStoreType {
        return this._getOption('type');
    }
    set type(value: StateStoreType) {
        this._setOption('type', value);
    }


    protected get _optionPath() {
        return 'stateStoring';
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
    DxoTreeListStateStoringComponent
  ],
  exports: [
    DxoTreeListStateStoringComponent
  ],
})
export class DxoTreeListStateStoringModule { }
