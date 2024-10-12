/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable spellcheck/spell-checker */
// eslint-disable-next-line max-classes-per-file
import browser from '@js/core/utils/browser';
import { isMaterialBased } from '@js/ui/themes';
import Widget from '@js/ui/widget/ui.widget';
import { DIContext } from '@ts/core/di/index';
import type { Subscription } from '@ts/core/reactive/index';
import { ColumnsChooserView } from '@ts/grids/new/grid_core/columns_chooser/view';
import { ColumnsController } from '@ts/grids/new/grid_core/columns_controller/columns_controller';
import { DataController } from '@ts/grids/new/grid_core/data_controller/index';
import { EditingController } from '@ts/grids/new/grid_core/editing/controller';
import { HeaderPanelController } from '@ts/grids/new/grid_core/header_panel/controller';
import { HeaderPanelView } from '@ts/grids/new/grid_core/header_panel/view';
import { MainView } from '@ts/grids/new/grid_core/main_view';
import { PagerView } from '@ts/grids/new/grid_core/pager';
import { Search } from '@ts/grids/new/grid_core/search/controller';
import { render } from 'inferno';

import { StatusView } from './content_view/status_view/status_view';
import * as DataControllerModule from './data_controller/index';
import { ErrorController } from './error_controller/error_controller';
import { FilterPanelView } from './filtering/filter_panel/filter_panel';
import type { Properties } from './types';

export class GridCoreNewBase<
  TProperties extends Properties = Properties,
> extends Widget<TProperties> {
  protected renderSubscription?: Subscription;

  protected diContext!: DIContext;

  private dataController!: DataController;

  private columnsController!: ColumnsController;

  private editingController!: EditingController;

  private pagerView!: PagerView;

  private columnsChooser!: ColumnsChooserView;

  private headerPanelController!: HeaderPanelController;

  private headerPanelView!: HeaderPanelView;

  private errorController!: ErrorController;

  private search!: Search;

  protected _registerDIContext(): void {
    this.diContext = new DIContext();
    this.diContext.register(DataController);
    this.diContext.register(ColumnsController);
    this.diContext.register(HeaderPanelController);
    this.diContext.register(HeaderPanelView);
    this.diContext.register(EditingController);
    this.diContext.register(PagerView);
    this.diContext.register(ColumnsChooserView);
    this.diContext.register(Search);
    this.diContext.register(StatusView);
    this.diContext.register(FilterPanelView);
    this.diContext.register(ErrorController);
  }

  protected _initDIContext(): void {
    this.columnsChooser = this.diContext.get(ColumnsChooserView);
    this.dataController = this.diContext.get(DataController);
    this.columnsController = this.diContext.get(ColumnsController);
    this.headerPanelController = this.diContext.get(HeaderPanelController);
    this.headerPanelView = this.diContext.get(HeaderPanelView);
    this.editingController = this.diContext.get(EditingController);
    this.pagerView = this.diContext.get(PagerView);
    this.search = this.diContext.get(Search);
    this.errorController = this.diContext.get(ErrorController);
  }

  protected _init(): void {
    // @ts-expect-error
    super._init();
    this._registerDIContext();
    this._initDIContext();
  }

  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
  protected _getDefaultOptions() {
    return {
      // @ts-expect-error
      ...super._getDefaultOptions() as {},
      ...DataControllerModule.defaultOptions,
      searchText: '',
      editingChanges: [],
      toolbar: {
        visible: true,
      },
    };
  }

  protected _defaultOptionsRules() {
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

  protected _initMarkup(): void {
    // @ts-expect-error
    super._initMarkup();
    // @ts-expect-error
    this.renderSubscription = this.diContext.get(MainView).render(this.$element().get(0));
  }

  protected _clean(): void {
    this.renderSubscription?.unsubscribe();
    // @ts-expect-error
    render(null, this.$element().get(0));
    // @ts-expect-error
    super._clean();
  }
}

export class GridCoreNew extends DataControllerModule.PublicMethods(GridCoreNewBase) {}
