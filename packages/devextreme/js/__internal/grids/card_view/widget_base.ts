import registerComponent from '@js/core/component_registrator';
import $ from '@js/core/renderer';
import browser from '@js/core/utils/browser';
import { logger } from '@js/core/utils/console';
import { extend } from '@js/core/utils/extend';
import { isString } from '@js/core/utils/type';
import type { Properties } from '@js/ui/card_view';
import { isMaterialBased } from '@js/ui/themes';
import gridCoreUtils from '@ts/grids/grid_core/m_utils';
import GridCoreWidget from '@ts/grids/grid_core/m_widget_base';

import gridCore from './core_helper';
import { callModuleItemsMethod } from '../grid_core/m_modules';

gridCore.registerModulesOrder([
]);

class CardView extends GridCoreWidget<Properties> {
  private _defaultOptionsRules() {
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return super._defaultOptionsRules().concat([
      {
        device() {
          // @ts-expect-error
          return isMaterialBased();
        },
        options: {
          headerFilter: {
            height: 315,
          },
          editing: {
            useIcons: true,
          },
          selection: {
            showCheckBoxesMode: 'always',
          },
        },
      },
      {
        device() {
          return browser.webkit;
        },
        options: {
          loadingTimeout: 30, // T344031
          loadPanel: {
            animation: {
              show: {
                easing: 'cubic-bezier(1, 0, 1, 0)',
                duration: 500,
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            },
          },
        },
      },
    ]);
  }

  private _init() {
    const that = this;

    // @ts-expect-error
    super._init();

    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    gridCore.processModules(that, gridCore as any);

    callModuleItemsMethod(that, 'init');
  }

  private _initMarkup() {
    // @ts-expect-error
    super._initMarkup.apply(this, arguments);
    this.getView('gridView').render(this.$element());
  }

  protected _setDeprecatedOptions() {
    super._setDeprecatedOptions();

    // @ts-expect-error
    extend(this._deprecatedOptions, {
      useKeyboard: { since: '19.2', alias: 'keyboardNavigation.enabled' },
      rowTemplate: { since: '21.2', message: 'Use the "dataRowTemplate" option instead' },
    });
  }

  protected getGridCoreHelper() {
    return gridCore;
  }
  public focus(element?) {
    this.getController('keyboardNavigation').focus(element);
  }
}

// @ts-expect-error
registerComponent('dxCardView', CardView);

export default CardView;
