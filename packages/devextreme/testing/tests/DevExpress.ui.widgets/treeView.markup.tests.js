import $ from 'jquery';

QUnit.testStart(function() {
    const markup =
        '<div id="treeView"></div>';

    $('#qunit-fixture').html(markup);
});

import 'ui/tree_view';

const WIDGET_CLASS = 'dx-treeview';
const NODE_CONTAINER_CLASS = 'dx-treeview-node-container';
const OPENED_NODE_CONTAINER_CLASS = 'dx-treeview-node-container-opened';
const NODE_CLASS = 'dx-treeview-node';
const ITEM_CLASS = 'dx-treeview-item';
const ICON_CLASS = 'dx-icon';
const SELECTED_STATE_CLASS = 'dx-state-selected';
const ITEM_WITH_CHECKBOX_CLASS = 'dx-treeview-item-with-checkbox';
const ITEM_WITHOUT_CHECKBOX_CLASS = 'dx-treeview-item-without-checkbox';
const IS_LEAF = 'dx-treeview-node-is-leaf';
const TOGGLE_ITEM_VISIBILITY_CLASS = 'dx-treeview-toggle-item-visibility';

const CUSTOM_COLLAPSE_ICON_CLASS = 'dx-treeview-custom-collapse-icon';
const CUSTOM_EXPAND_ICON_CLASS = 'dx-treeview-custom-expand-icon';
const CUSTOM_EXPAND_ICON_CLASS_SELECTOR = `.${CUSTOM_EXPAND_ICON_CLASS}`;
const CUSTOM_COLLAPSE_ICON_CLASS_SELECTOR = `.${CUSTOM_COLLAPSE_ICON_CLASS}`;

const SELECT_ALL_ITEM_CLASS = 'dx-treeview-select-all-item';

const initTree = (options) => $('#treeView').dxTreeView(options);

QUnit.module('aria accessibility', {
    beforeEach: function() {
        this.$element = initTree({
            animationEnabled: false,
            items: [{
                id: 1,
                text: 'Item 1',
                selected: true,
                expanded: true,
                items: [{ id: 3, text: 'Item 11' }, { id: 4, text: 'Item 12' }]
            }, { id: 2, text: 'Item 2', expanded: false }],
            selectNodesRecursive: true,
            showCheckBoxesMode: 'normal'
        });

        this.instance = this.$element.dxTreeView('instance');
    },

    afterEach: function() {
        this.$treeView = undefined;
        this.instance = undefined;
    }
}, () => {
    QUnit.test('aria role', function(assert) {
        assert.strictEqual(this.$element.attr('role'), 'tree', 'role is correct');

        this.instance.option({ items: [] });

        assert.strictEqual(this.$element.attr('role'), undefined, 'role is not set');
    });

    QUnit.test('aria role for items', function(assert) {
        const $node = this.$element.find('.' + NODE_CLASS);
        assert.equal($node.attr('role'), 'treeitem', 'role is correct');
    });

    QUnit.test('aria label for items', function(assert) {
        const $node1 = this.$element.find('.' + NODE_CLASS).eq(0);
        const $node2 = this.$element.find('.' + NODE_CLASS).eq(1);

        assert.equal($node1.attr('aria-label'), 'Item 1', 'label for 1st item is correct');
        assert.equal($node2.attr('aria-label'), 'Item 11', 'label for 2nd ite is correct');
    });

    QUnit.test('aria role for item levels', function(assert) {
        const $node = this.$element.find('.' + NODE_CONTAINER_CLASS);
        assert.equal($node.attr('role'), 'group', 'role is correct');
    });

    QUnit.test('aria expanded for items', function(assert) {
        const $node = this.$element.find('.' + NODE_CLASS).eq(0);

        assert.equal($node.attr('aria-expanded'), 'true', 'expanded item has aria-expanded as true');
    });

    QUnit.test('aria level for items', function(assert) {
        const $node1 = this.$element.find('.' + NODE_CLASS).eq(0);
        const $node2 = this.$element.find('.' + NODE_CLASS).eq(1);

        assert.equal($node1.attr('aria-level'), '1', 'level set correct');
        assert.equal($node2.attr('aria-level'), '2', 'level set correct');
    });

    QUnit.test('aria selected for items', function(assert) {
        const $node = this.$element.find('.' + NODE_CLASS).eq(0);

        assert.equal($node.attr('aria-selected'), 'true', 'item is selected');
    });
});

QUnit.module('markup', {
    beforeEach: function() {
        this.plainItems = [
            { id: 1, parentId: 0, text: 'Animals' },
            { id: 2, parentId: 1, text: 'Cat' },
            { id: 3, parentId: 1, text: 'Dog' },
            { id: 4, parentId: 1, text: 'Cow' },
            { id: 5, parentId: 2, text: 'Abyssinian' },
            { id: 6, parentId: 2, text: 'Aegean cat' },
            { id: 7, parentId: 2, text: 'Australian Mist' },
            { id: 8, parentId: 3, text: 'Affenpinscher' },
            { id: 9, parentId: 3, text: 'Afghan Hound' },
            { id: 10, parentId: 3, text: 'Airedale Terrier' },
            { id: 11, parentId: 3, text: 'Akita Inu' },
            { id: 12, parentId: 0, text: 'Birds' },
            { id: 13, parentId: 12, text: 'Akekee' },
            { id: 14, parentId: 12, text: 'Arizona Woodpecker' },
            { id: 15, parentId: 12, text: 'Black-chinned Sparrow' },
            { id: 16, parentId: 0, text: 'Others' }
        ];
        this.treeItems = [
            {
                key: 1, text: 'Item 1', items: [
                    { key: 12, text: 'Nested item 1' },
                    {
                        key: 13, text: 'Nested item 2', items: [
                            { key: 131, text: 'Last item' }
                        ]
                    }
                ]
            },
            { key: 2, text: 'Item 2' }
        ];
    },
    isVisible($element) {
        return $element.length && !$element.hasClass('dx-state-invisible');
    }
}, () => {
    QUnit.test('shouldnt contain <a> node tag when url is passed as attribute (T1237378)', function(assert) {
        initTree({
            items: [
                {
                    id: 50,
                    text: 'Dashboard',
                    icon: null,
                    url: '/admin',
                    visible: true,
                }
            ],
        });
        const $treeViewItem = $(`.${ITEM_CLASS}`);

        assert.strictEqual($treeViewItem.find('a').length, 0, 'Doesnt contain an <a> tag when url is included in items.');
    });

    QUnit.test('expand icon should be able to change at runtime', function(assert) {
        const $treeView = initTree({
            items: this.treeItems,
            expandIcon: 'add',
            collapseIcon: 'add',
        });
        const treeView = $treeView.dxTreeView('instance');

        treeView.option('expandIcon', 'activefolder');

        assert.ok($(CUSTOM_EXPAND_ICON_CLASS_SELECTOR).hasClass('dx-icon-activefolder'));
    });

    QUnit.test('collapse icon should be able to change at runtime', function(assert) {
        const $treeView = initTree({
            items: this.treeItems,
            expandIcon: 'add',
            collapseIcon: 'add',
        });
        const treeView = $treeView.dxTreeView('instance');

        treeView.option('collapseIcon', 'minus');

        assert.ok($(CUSTOM_COLLAPSE_ICON_CLASS_SELECTOR).hasClass('dx-icon-minus'));
    });

    QUnit.test('default icons should be rendered if both custom expander icons are not specified', function(assert) {
        const data = this.treeItems;
        data[0].expanded = true;
        data[0].items[1].expanded = true;

        const $treeView = initTree({
            items: data,
            expandIcon: 'add',
            collapseIcon: 'add',
        });
        const treeView = $treeView.dxTreeView('instance');

        treeView.option('expandIcon', null);
        treeView.option('collapseIcon', null);

        assert.equal($(`.${TOGGLE_ITEM_VISIBILITY_CLASS}`).length, 2);
    });

    QUnit.test('icons should not be rendered if plain items are used', function(assert) {
        initTree({
            items: this.plainItems,
            expandIcon: 'add',
            collapseIcon: 'add',
        });

        assert.equal($(CUSTOM_EXPAND_ICON_CLASS_SELECTOR).length, 0);
        assert.equal($(CUSTOM_COLLAPSE_ICON_CLASS_SELECTOR).length, 0);
    });

    QUnit.test('expand icon should be shown if node is collapsed', function(assert) {
        initTree({
            items: this.treeItems,
            expandIcon: 'add',
            collapseIcon: 'add',
        });
        const $expandIcon = $(CUSTOM_EXPAND_ICON_CLASS_SELECTOR).eq(0);

        assert.ok(this.isVisible($expandIcon));
    });

    QUnit.test('collapse icon should be shown if node is expanded', function(assert) {
        const data = this.treeItems;
        data[0].expanded = true;
        initTree({
            items: data,
            expandIcon: 'add',
            collapseIcon: 'add',
        });
        const $collapseIcon = $(CUSTOM_COLLAPSE_ICON_CLASS_SELECTOR).eq(0);

        assert.ok(this.isVisible($collapseIcon));
    });

    QUnit.test('collapseIcon value should be used for an expand icon if an expandIcon is not specified', function(assert) {
        initTree({
            items: this.treeItems,
            collapseIcon: 'minus',
        });
        const $expandIcon = $(CUSTOM_EXPAND_ICON_CLASS_SELECTOR).eq(0);

        assert.ok($expandIcon.hasClass('dx-icon-minus'));
    });

    QUnit.test('expandIcon value should be used for a collapse icon if collapseIcon is not specified', function(assert) {
        initTree({
            items: this.treeItems,
            expandIcon: 'add',
        });
        const $collapseIcon = $(CUSTOM_COLLAPSE_ICON_CLASS_SELECTOR).eq(0);

        assert.ok($collapseIcon.hasClass('dx-icon-add'));
    });

    QUnit.test('TreeView should render correctly without items', function(assert) {
        const $treeView = initTree({
            items: undefined
        });
        const $scrollableContent = $treeView.find('.dx-scrollable-content');

        assert.equal($scrollableContent.find('.dx-empty-message').length, 1, 'empty message should be shown inside scrollable content');
    });

    QUnit.test('data expressions should work on render', function(assert) {
        const $treeView = $('#treeView').dxTreeView({
            items: [
                {
                    Id: 2,
                    Expanded: false,
                    Opened: true,
                    parent: 0,
                    Text: 'I1',
                    Selected: false,
                    Checked: true,
                    Caption: 'Item 1'
                },
                {
                    Id: 21,
                    Opened: false,
                    parent: 2,
                    Caption: 'Item 11'
                }
            ],
            dataStructure: 'plain',
            keyExpr: 'Id',
            selectedExpr: 'Checked',
            displayExpr: 'Caption',
            expandedExpr: 'Opened',
            parentIdExpr: 'parent'
        });

        const $node = $treeView.find('.' + NODE_CLASS).eq(0);
        const $nodeContainer = $node.children('.' + NODE_CONTAINER_CLASS).eq(0);
        const $item = $node.children('.' + ITEM_CLASS).eq(0);

        assert.equal($node.data('item-id'), '2', 'keyExpr works');
        assert.equal($item.text(), 'Item 1', 'displayExpr works');
        assert.ok($node.hasClass(SELECTED_STATE_CLASS), 'selectedExpr works');
        assert.ok($nodeContainer.hasClass(OPENED_NODE_CONTAINER_CLASS), 'expandedExpr works');
        assert.equal($node.find('.' + NODE_CLASS).length, 1, 'parentIdExpr works');
    });

    QUnit.test('TreeView should has a right class', function(assert) {
        const $treeView = initTree();
        assert.ok($treeView.hasClass(WIDGET_CLASS));
    });

    QUnit.test('Render scrollable container', function(assert) {
        const $treeView = initTree({
            items: this.treeItems,
            keyExpr: 'key'
        });
        const $rootNode = $treeView.find('.' + NODE_CONTAINER_CLASS + ':first');

        assert.ok($rootNode.parent().hasClass('dx-scrollable-content'));
        assert.ok($treeView.find('.dx-scrollable').length, 1);
    });

    QUnit.test('Render items container', function(assert) {
        const $treeView = initTree({
            items: [{ key: 1, text: 'Item' }]
        });
        assert.equal($treeView.find('.' + NODE_CONTAINER_CLASS).length, 1);
    });

    QUnit.test('Render html item', function(assert) {
        const $treeView = initTree({
            items: [{ id: 1, html: '<b>Hello</b>' }]
        });
        const $itemContainer = $treeView.find('.' + NODE_CONTAINER_CLASS);
        const $node = $itemContainer.find('.' + NODE_CLASS).eq(0);
        const $item = $node.find('.' + ITEM_CLASS);

        assert.equal($item.text(), 'Hello', 'created');
    });

    QUnit.test('Render first level items', function(assert) {
        const $treeView = initTree({
            items: this.plainItems,
            keyExpr: 'key'
        });
        const $itemContainer = $treeView.find('.' + NODE_CONTAINER_CLASS);
        const $nodes = $itemContainer.find('.' + NODE_CLASS);
        const $items = $nodes.find('.' + ITEM_CLASS);

        assert.equal($items.length, 16);
        assert.equal($($items[0]).find('span').text(), 'Animals');
        assert.equal($($items[1]).find('span').text(), 'Cat');
        assert.equal($($items[2]).find('span').text(), 'Dog');
    });

    QUnit.test('Render items with parentId set as tree', function(assert) {
        const $treeView = initTree({
            items: this.plainItems,
            dataStructure: 'tree'
        });
        const $items = $treeView.find('.' + ITEM_CLASS);

        assert.equal($items.length, 16);
    });

    QUnit.test('Render nested items', function(assert) {
        const data = this.treeItems;
        data[0].items[1].items[0].expanded = true;
        const $treeView = initTree({
            items: data,
            keyExpr: 'key'
        });

        const $rootNode = $treeView.find('.' + NODE_CONTAINER_CLASS + ':first-child');
        const $rootNodeFirstItem = $rootNode.find('.' + NODE_CLASS).eq(0);
        const $rootNodeSecondItem = $rootNode.find('.' + NODE_CLASS).eq(1);
        const $firstNestedNode = $rootNodeFirstItem.find('> .' + NODE_CONTAINER_CLASS);

        assert.ok(!$rootNodeFirstItem.hasClass(IS_LEAF));
        assert.ok($rootNodeSecondItem.hasClass(IS_LEAF));
        assert.ok($rootNodeFirstItem.hasClass(ITEM_WITHOUT_CHECKBOX_CLASS));
        assert.ok($firstNestedNode.length);
        assert.ok($firstNestedNode.find('.' + NODE_CLASS).eq(0).hasClass(IS_LEAF));
        assert.ok(!$firstNestedNode.find('.' + NODE_CLASS).eq(1).hasClass(IS_LEAF));
        assert.ok(!$firstNestedNode.find('.' + NODE_CLASS).eq(0).find('.' + NODE_CONTAINER_CLASS).length);
        assert.ok($firstNestedNode.find('.' + NODE_CLASS).eq(1).find('.' + NODE_CONTAINER_CLASS).length);
        assert.ok($firstNestedNode.find('.' + NODE_CLASS).eq(1).find('.' + NODE_CLASS).hasClass(ITEM_WITHOUT_CHECKBOX_CLASS));
    });

    QUnit.test('Render toggle icon', function(assert) {
        const $treeView = initTree({
            items: this.treeItems,
        });

        const $rootNode = $treeView.find('.' + NODE_CONTAINER_CLASS + ':first-child');
        const $rootNodeFirstItem = $rootNode.find('.' + NODE_CLASS).eq(0);
        const $rootNodeSecondItem = $rootNode.find('.' + NODE_CLASS).eq(1);

        assert.equal($rootNodeFirstItem.find('.' + TOGGLE_ITEM_VISIBILITY_CLASS).length, 1);
        assert.equal($rootNodeSecondItem.find('.' + TOGGLE_ITEM_VISIBILITY_CLASS).length, 0);
    });

    QUnit.test('Add disabled class for toggle icon if item is disabled', function(assert) {
        const $treeView = initTree({
            items: [{
                id: 1,
                text: 'one',
                disabled: true,
                items: [{ id: 11, text: 'Nested 1' }, { id: 12, text: 'Nested 2' }]
            }]
        });

        const $rootNode = $treeView.find(`.${NODE_CONTAINER_CLASS}:first-child`);
        const $icon = $rootNode.find(`.${ITEM_CLASS}`).eq(0).children(`.${TOGGLE_ITEM_VISIBILITY_CLASS}`).eq(0);

        assert.ok($icon.hasClass('dx-state-disabled'));
    });

    QUnit.test('Render checkboxes', function(assert) {
        const data = this.treeItems;
        data[0].items[0].expanded = true;
        const $treeView = initTree({
            items: data,
            showCheckBoxesMode: 'normal'
        });

        assert.equal($treeView.find('.' + NODE_CLASS).find('.dx-checkbox').length, 4);
        assert.equal($treeView.find('.' + NODE_CLASS + '.' + ITEM_WITH_CHECKBOX_CLASS).length, 4);
    });

    QUnit.test('Render tree by id/parentId fields', function(assert) {
        let data = this.plainItems;
        data = $.map(data, function(item) {
            item.expanded = true;
            return item;
        });

        const $treeView = initTree({
            items: data,
            dataStructure: 'plain',
            keyExpr: 'id',
            parentIdExpr: 'parentId'
        });

        const $rootNode = $treeView.find('.' + NODE_CONTAINER_CLASS + ':first');
        const $rootNodeItems = $rootNode.find(' > .' + NODE_CLASS);

        assert.equal($treeView.find('.' + NODE_CONTAINER_CLASS).length, 5);
        assert.equal($rootNodeItems.length, 3);
        assert.equal($rootNodeItems.eq(0).find('> .' + ITEM_CLASS + ' span').text(), 'Animals');
        assert.equal($rootNodeItems.eq(1).find('> .' + ITEM_CLASS + ' span').text(), 'Birds');
        assert.equal($rootNodeItems.eq(0).find('> .' + NODE_CONTAINER_CLASS).find('> .' + NODE_CLASS).length, 3);
        assert.equal($rootNodeItems.eq(1).find('> .' + NODE_CONTAINER_CLASS).find('> .' + NODE_CLASS).length, 3);
    });

    QUnit.test('Custom item template', function(assert) {
        const $treeView = initTree({
            items: this.treeItems,
            itemTemplate: function(item) {
                return $('<strong />').text(item.text);
            }
        });

        const $rootNodeContainer = $treeView.find('.' + NODE_CONTAINER_CLASS + ':first');
        const $firstRootNode = $rootNodeContainer.find('li').first();
        const $firstItem = $firstRootNode.find('> .' + ITEM_CLASS);

        assert.equal($firstItem.length, 1);
        assert.equal($firstItem.text(), 'Item 1');
    });

    QUnit.test('scroll direction by default is \'vertical\'', function(assert) {
        const treeView = initTree({
            items: this.treeItems,
        }).dxTreeView('instance');

        assert.equal(treeView.getScrollable().option('direction'), 'vertical');
    });

    QUnit.test('custom scroll direction', function(assert) {
        const treeView = initTree({
            items: this.treeItems,
            scrollDirection: 'both'
        }).dxTreeView('instance');

        assert.equal(treeView.getScrollable().option('direction'), 'both');
    });

    QUnit.test('Disabled class is added when disabledExpr is used', function(assert) {
        const $treeView = initTree({
            items: [{ id: 1, text: 'item 1', isDisabled: true }],
            disabledExpr: 'isDisabled'
        });
        const $item = $treeView.find('.' + ITEM_CLASS).eq(0);

        assert.ok($item.hasClass('dx-state-disabled'));
    });

    QUnit.test('Disabled class is added when disabledExpr is used with custom template', function(assert) {
        const $treeView = initTree({
            items: [{ id: 1, text: 'item 1', isDisabled: true }],
            disabledExpr: 'isDisabled',
            itemTemplate: function() {
                return '123';
            }
        });
        const $item = $treeView.find('.' + ITEM_CLASS).eq(0);

        assert.ok($item.hasClass('dx-state-disabled'));
    });

    QUnit.test('toggle visibility icon should not render for invisible item (T323491)', function(assert) {
        const $treeView = initTree({
            items: [
                { text: 'item 1', visible: false, items: [{ text: 'item 11' }] },
                { text: 'item 1', items: [{ text: 'item 21' }] }],
        });
        const $icons = $treeView.find('.' + TOGGLE_ITEM_VISIBILITY_CLASS);

        assert.equal($icons.length, 1, 'only one icon should be rendered');
    });

    QUnit.test('Render Search editor', function(assert) {
        const $treeView = initTree({
            items: this.treeItems,
            searchEnabled: true,
            searchValue: '2'
        });

        const $searchEditor = $treeView.children().first();
        assert.ok($searchEditor.hasClass('dx-treeview-search'), 'has search editor');
        assert.strictEqual($searchEditor.dxTextBox('instance').option('value'), '2', 'editor value');
    });

    QUnit.test('treeView consider store sorting', function(assert) {
        const data = [
            { id: 1, parentId: 0, text: 'Bikes', expanded: true },
            { id: 4, parentId: 3, text: 'BMW' },
            { id: 13, parentId: 3, text: 'Audi' },
            { id: 3, parentId: 0, text: 'Cars', expanded: true },
            { id: 11, parentId: 10, text: 'YX 1' },
            { id: 12, parentId: 10, text: 'YX 2' },
            { id: 14, parentId: 13, text: 'A1' },
            { id: 15, parentId: 13, text: 'A5' },
            { id: 2, parentId: 0, text: 'Motobikes', expanded: true },
            { id: 5, parentId: 4, text: 'X1' },
            { id: 6, parentId: 4, text: 'X5' },
            { id: 7, parentId: 4, text: 'X6' },
            { id: 10, parentId: 2, text: 'Yamaha' },
            { id: 8, parentId: 1, text: 'Stels' },
            { id: 9, parentId: 2, text: 'Honda' }
        ];
        const treeView = initTree({
            dataSource: { store: data, sort: 'text' },
            dataStructure: 'plain',
            parentIdExpr: 'parentId',
            keyExpr: 'id'
        }).dxTreeView('instance');
        const $items = $(treeView.$element()).find('.dx-treeview-item');
        const expectedValues = ['Bikes', 'Stels', 'Cars', 'Audi', 'BMW', 'Motobikes', 'Honda', 'Yamaha'];

        $.each($items, function(index, item) {
            assert.equal($(item).text(), expectedValues[index], 'Correct item');
        });
    });

    QUnit.test('Render \'selectAll\' item', function(assert) {
        const $treeView = initTree({
            showCheckBoxesMode: 'selectAll',
            dataSource: this.treeItems
        });
        const $selectAll = $treeView.find('.' + SELECT_ALL_ITEM_CLASS);

        assert.equal($selectAll.length, 1);
    });

    QUnit.test('On initialization \'selectAll\' item should be selected if all items are selected', function(assert) {
        const data = [{ id: 1, text: 'item 1', selected: true }, { id: 2, text: 'item 2', selected: true }];
        const $treeView = initTree({
            showCheckBoxesMode: 'selectAll',
            dataSource: data
        });
        const $selectAll = $treeView.find('.' + SELECT_ALL_ITEM_CLASS);

        assert.ok($selectAll.hasClass('dx-checkbox-checked'));
    });

    QUnit.test('On initialization \'selectAll\' item should be unselected if all items are unselected', function(assert) {
        const data = [{ id: 1, text: 'item 1' }, { id: 2, text: 'item 2' }];
        const $treeView = initTree({
            showCheckBoxesMode: 'selectAll',
            dataSource: data
        });
        const $selectAll = $treeView.find('.' + SELECT_ALL_ITEM_CLASS);

        assert.notOk($selectAll.hasClass('dx-checkbox-indeterminate'));
        assert.notOk($selectAll.hasClass('dx-checkbox-checked'));
    });

    QUnit.test('On initialization \'selectAll\' item should have intermediate state if at least one item is selected', function(assert) {
        const data = [{ id: 1, text: 'item 1', selected: true }, { id: 2, text: 'item 2' }];
        const $treeView = initTree({
            showCheckBoxesMode: 'selectAll',
            dataSource: data
        });
        const $selectAll = $treeView.find('.' + SELECT_ALL_ITEM_CLASS);

        assert.ok($selectAll.hasClass('dx-checkbox-indeterminate'));
    });

    QUnit.test('On initialization \'selectAll\' item should have intermediate state if at least one item is selected (ierarchical)', function(assert) {
        const data = [{
            id: '1',
            expanded: true,
            items: [{
                id: '1_1',
                selected: true
            }, {
                id: '1_2',
                selected: false
            }]
        }];
        const $treeView = initTree({
            showCheckBoxesMode: 'selectAll',
            dataSource: data
        });
        const $selectAll = $treeView.find('.' + SELECT_ALL_ITEM_CLASS);

        assert.ok($selectAll.hasClass('dx-checkbox-indeterminate'));
    });

    QUnit.test('TreeView icon image should have alt attribute with "dxTreeView item icon" text', function(assert) {
        const $treeView = initTree({
            items: [{ text: 'Item text', icon: 'some_icon.jpg' }]
        });
        const $icon = $treeView.find(`.${ITEM_CLASS} .${ICON_CLASS}`);

        assert.strictEqual($icon.attr('alt'), 'dxTreeView item icon');
    });
});

