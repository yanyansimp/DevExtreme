import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import { Selector as $ } from 'testcafe';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';
import { testScreenshot } from '../../../utils/visual-tests/helpers/theme-utils';

fixture('DataGrid.OdataService')
  .page('http://localhost:8080/')
  .before(async (ctx) => {
    ctx.initialWindowSize = [900, 600];
  });

runManualTest('DataGrid', 'OdataService', ['jQuery'/* , 'React', 'Vue', 'Angular' */], (test) => {
  test('OdataService', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await t.rightClick($('.dx-datagrid-headers .dx-datagrid-action').nth(1));

    await testScreenshot(t, takeScreenshot, 'datagrid_odata_service_1_desktop.png');

    await t.click($('.dx-menu-item').nth(1));

    await testScreenshot(t, takeScreenshot, 'datagrid_odata_service_2_desktop.png');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
