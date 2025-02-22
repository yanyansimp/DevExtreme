/* tslint:disable:max-line-length */


import {
    Component,
    OnInit,
    OnDestroy,
    NgModule,
    Host,
    SkipSelf,
    Input,
    Output,
    EventEmitter
} from '@angular/core';




import { Mode } from 'devextreme/common';

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxo-data-grid-group-panel',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoDataGridGroupPanelComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get allowColumnDragging(): boolean {
        return this._getOption('allowColumnDragging');
    }
    set allowColumnDragging(value: boolean) {
        this._setOption('allowColumnDragging', value);
    }

    @Input()
    get emptyPanelText(): string {
        return this._getOption('emptyPanelText');
    }
    set emptyPanelText(value: string) {
        this._setOption('emptyPanelText', value);
    }

    @Input()
    get visible(): boolean | Mode {
        return this._getOption('visible');
    }
    set visible(value: boolean | Mode) {
        this._setOption('visible', value);
    }


    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() visibleChange: EventEmitter<boolean | Mode>;
    protected get _optionPath() {
        return 'groupPanel';
    }


    constructor(@SkipSelf() @Host() parentOptionHost: NestedOptionHost,
            @Host() optionHost: NestedOptionHost) {
        super();

        this._createEventEmitters([
            { emit: 'visibleChange' }
        ]);

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
    DxoDataGridGroupPanelComponent
  ],
  exports: [
    DxoDataGridGroupPanelComponent
  ],
})
export class DxoDataGridGroupPanelModule { }
