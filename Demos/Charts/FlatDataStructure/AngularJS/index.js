const DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', ($scope) => {
  $scope.treeMapOptions = {
    dataSource: citiesPopulation,
    title: 'The Most Populated Cities by Continents',
    idField: 'id',
    parentField: 'parentId',
    tooltip: {
      enabled: true,
      format: 'thousands',
      customizeTooltip(arg) {
        const { data } = arg.node;
        let result = null;

        if (arg.node.isLeaf()) {
          result = `<span class='city'>${data.name}</span> (${
            data.country})<br/>Population: ${arg.valueText}`;
        }

        return {
          text: result,
        };
      },
    },
  };
});
