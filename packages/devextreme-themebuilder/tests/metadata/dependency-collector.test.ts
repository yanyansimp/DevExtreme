import fs from 'fs';
import cabinet from 'filing-cabinet';
import path from 'path';
import { dependencies as idealDependencies } from '../data/dependencies';
import DependencyCollector, { filePathMap } from '../../src/metadata/dependency-collector';
import { dependencies as builtDependencies } from '../../src/data/metadata/dx-theme-builder-metadata';

const simpleDependencies: ScriptsDependencyTree = {
  dependencies: {
    'button.js': {
      dependencies: {
        'utils.js': {
          dependencies: {
            'fx.js': {
              dependencies: {},
              widget: '',
            },
            'icon.js': {
              dependencies: {},
              widget: 'icon',
            },
            'render.js': {
              dependencies: {},
              widget: '',
            },
          },
          widget: '',
        },
      },
      widget: 'button',
    },
    'toolbar.js': {
      dependencies: {
        'menu.js': {
          dependencies: {},
          widget: 'menu',
        },
        'utils.js': {
          dependencies: {
            'fx.js': {
              dependencies: {},
              widget: '',
            },
            'icon.js': {
              dependencies: {},
              widget: 'icon',
            },
            'render.js': {
              dependencies: {},
              widget: '',
            },
          },
          widget: '',
        },
      },
      widget: 'toolbar',
    },
    'data_grid.js': {
      dependencies: {
        'grid_core.ts': {
          dependencies: {
            'menu.js': {
              dependencies: {},
              widget: 'menu',
            },
            'render.js': {
              dependencies: {},
              widget: '',
            },
            'grid_column.ts': {
              dependencies : {},
              widget: 'column',
            },
          },
          widget: '',
        },
      },
      widget: 'datagrid',
    },
  },
  widget: '',
};

const tsFilesSet = new Set<string>([
  'grid_core',
  'grid_column',
]);

const filesContent: { [key: string]: string } = {
  'dx.all.js': 'import l from \'./list\';import t from \'./toolbar\';import b from \'./button\'; import grid from \'./data_grid\';',
  'toolbar.js': 'import m from \'./menu\';import u from \'./utils\';\n// STYLE toolbar',
  'menu.js': '// STYLE menu',
  'button.js': 'import u from \'./utils\';\n// STYLE button',
  'icon.js': '// STYLE icon',
  'utils.js': 'import f from \'./fx\';import i from \'./icon\';import t from \'./render\';',
  'render.js': 'import t from \'./utils\';',
  'fx.js': '',
  'data_grid.js': 'import core from \'./grid_core\'; // STYLE dataGrid',
  'grid_core.ts': 'import menu from \'./menu\'; import r from \'./render\';import col from \'./grid_column\';',
  'grid_column.ts': '// STYLE column',

  // validation tests
  [path.resolve(__dirname, '../../../devextreme-scss/scss/widgets/righttheme/_index.scss')]: '// public widgets\n@use "./toolbar";@use "./button";',
  [path.resolve(__dirname, '../../../devextreme-scss/scss/widgets/extratheme/_index.scss')]: '// public widgets\n@use "./toolbar";@use "./button";@use "./menu";',
  [path.resolve(__dirname, '../../../devextreme-scss/scss/widgets/lesstheme/_index.scss')]: '// public widgets\n@use "./toolbar";',

  // collect test
  [path.resolve(__dirname, '../../../devextreme/js/bundles/dx.all.js')]: 'import t from \'./toolbar\';import b from \'./button\';',
  [path.resolve(__dirname, '../../../devextreme-scss/scss/widgets/generic/_index.scss')]: '// public widgets\n@use "./toolbar";@use "./button";@use "./icon";@use "./menu";',
  [path.resolve(__dirname, '../../../devextreme-scss/scss/widgets/material/_index.scss')]: '// public widgets\n@use "./toolbar";@use "./button";@use "./icon";@use "./menu";',
};

const copyDependencies = (dependencies: Record<string, string[]>): Record<string, string[]> => {
  const result: Record<string, string[]> = {};
  Object.keys(dependencies).forEach((key) => { result[key] = [...dependencies[key]]; });
  return result;
};

const sortDependencies = (dependencies: Record<string, string[]>): void => {
  Object.keys(dependencies).forEach((key) => { dependencies[key].sort(); });
};

jest.mock('fs', () => ({
  readFileSync: jest.fn().mockImplementation((path: string): string => {
    return filesContent[path] || ''
  }),
  existsSync: (path: string): boolean => filesContent[path] !== undefined,
  // eslint-disable-next-line spellcheck/spell-checker
  realpathSync: (): void => { }, // https://github.com/facebook/jest/issues/10012
  readFile: (): void => { }, // The "original" argument must be of type function. Received undefined
}));

jest.mock('filing-cabinet', () => ({
  __esModule: true,
  default: (options: cabinet.Options): string => {
    const normalizedPartial = options.partial.replace('./', '');
    return `${normalizedPartial}.${tsFilesSet.has(normalizedPartial) ? 'ts' : 'js'}`;
  },
}));

describe('DependencyCollector', () => {
  beforeEach(() => {
    (fs.readFileSync as jest.Mock).mockClear();
    filePathMap.clear();
  });

  test('getWidgetFromAst - no comments in ast', () => {
    const ast: SyntaxTree = {};
    expect(DependencyCollector.getWidgetFromAst(ast)).toEqual('');
  });

  test('getWidgetFromAst - no style comments in ast', () => {
    const ast: SyntaxTree = {
      comments: [
        { value: 'just comment' },
        { value: 'another comment' },
      ],
    };
    expect(DependencyCollector.getWidgetFromAst(ast)).toEqual('');
  });

  test('getWidgetFromAst - ast has style comment', () => {
    const ast: SyntaxTree = {
      comments: [
        { value: 'just comment' },
        { value: ' STYLE widget' },
      ],
    };
    expect(DependencyCollector.getWidgetFromAst(ast)).toEqual('widget');
  });

  test('getWidgetFromAst - get the first style comment only', () => {
    const ast: SyntaxTree = {
      comments: [
        { value: ' STYLE widget1' },
        { value: ' STYLE widget2' },
      ],
    };
    expect(DependencyCollector.getWidgetFromAst(ast)).toEqual('widget1');
  });

  test('treeProcessor', () => {
    const dependencyCollector = new DependencyCollector();

    const testDependencyTree: ScriptsDependencyTree = {
      widget: 'k',
      dependencies: {
        file1: {
          widget: 'l',
          dependencies: {},
        },
        file2: {
          widget: 'm',
          dependencies: {
            file4: {
              widget: null,
              dependencies: {
                file5: {
                  widget: 'n',
                  dependencies: {
                    file6: {
                      widget: 'o',
                      dependencies: {
                        file8: {
                          widget: 'm',
                          dependencies: {},
                        },
                      },
                    },
                  },
                },
              },
            },
            file6: {
              widget: 'o',
              dependencies: {},
            },
          },
        },
        file3: {
          widget: null,
          dependencies: {},
        },
      },
    };

    const expectedStylesDependencyTree: FlatStylesDependencies = {
      k: ['l', 'm', 'o', 'n'],
      l: [],
      m: ['m', 'o', 'n'],
      n: ['m', 'o'],
      o: ['m'],
    };

    const result = dependencyCollector.treeProcessor(testDependencyTree);

    expect(result).toEqual(['l', 'm', 'o', 'n', 'k']);
    expect(dependencyCollector.flatStylesDependencyTree).toEqual(expectedStylesDependencyTree);
  });

  test('fillFullDependencyTree', () => {
    const dependencyCollector = new DependencyCollector();
    const fullDependencyTree = dependencyCollector.getFullDependencyTree('dx.all.js');

    expect(fullDependencyTree).toEqual(simpleDependencies);
  });

  test('collect - right result and cache worked', () => {
    const dependencyCollector = new DependencyCollector();
    dependencyCollector.collect();

    expect(fs.readFileSync).toHaveBeenCalledTimes(10);
    expect(dependencyCollector.flatStylesDependencyTree).toEqual({
      toolbar: ['menu', 'icon'],
      button: ['icon'],
      menu: [],
      icon: [],
    });
  });
});

describe('validation', () => {
  const dependencyCollector = new DependencyCollector();

  dependencyCollector.flatStylesDependencyTree = {
    button: [],
    toolbar: [],
  };

  test('validate - all widgets present in index file', () => {
    dependencyCollector.themes = ['righttheme'];
    expect(() => dependencyCollector.validate()).not.toThrow();
  });

  test('validate - index file has more widgets than in dependencies', () => {
    dependencyCollector.themes = ['extratheme'];
    expect(() => dependencyCollector.validate()).toThrow('Some public widgets (extratheme) has no // STYLE comment in source code or private widget has one');
  });

  test('validate - index file has less widgets than in dependencies', () => {
    dependencyCollector.themes = ['lesstheme'];
    expect(() => dependencyCollector.validate()).toThrow('Some public widgets (lesstheme) has no // STYLE comment in source code or private widget has one');
  });
});

describe('Integration test', () => {
  test('Check if dependensies is good', () => {
    const builtDependenciesCopy = copyDependencies(builtDependencies);
    const idealDependenciesCopy = copyDependencies(idealDependencies);
    sortDependencies(builtDependenciesCopy);
    sortDependencies(idealDependenciesCopy);

    expect(builtDependenciesCopy).toEqual(idealDependenciesCopy);
  });
});
