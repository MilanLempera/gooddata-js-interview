import { createMeasure, createVisualizationAttribute } from './catalogFunctions';

describe('create measure', function () {
  test('with default alias', function () {
    const expected = {
      measure: {
        localIdentifier: 'm1',
        definition: {
          measureDefinition: {
            item: {
              identifier: 'aa5JBkFDa7sJ',
            },
          },
        },
        alias: '$ Gross Profit',
      },
    };

    expect(createMeasure('m1', '$ Gross Profit')).toEqual(expected);
  });

  test('with custom alias', function () {
    const expected = {
      measure: {
        localIdentifier: 'm2',
        definition: {
          measureDefinition: {
            item: {
              identifier: 'aa5JBkFDa7sJ',
            },
          },
        },
        alias: 'Test Alias',
      },
    };

    expect(createMeasure('m2', '$ Gross Profit', { alias: 'Test Alias' })).toEqual(expected);
  });

  test('with options', function () {
    const expected = {
      measure: {
        localIdentifier: 'm3',
        definition: {
          measureDefinition: {
            item: {
              identifier: 'aa5JBkFDa7sJ',
            },
          },
        },
        alias: '$ Gross Profit',
        format: 'test format',
        title: 'Test title',
      },
    };

    expect(createMeasure('m3', '$ Gross Profit', { format: 'test format', title: 'Test title' })).toEqual(expected);
  });
});

describe('create visualization attribute', function () {
  test('basic usage', function () {
    const expected = {
      visualizationAttribute: {
        displayForm: {
          identifier: 'date.act81lMifn6q',
        },
        localIdentifier: 'a1',
      },
    };

    expect(createVisualizationAttribute('a1', 'Date (Date)', 'Month/Year (Date)')).toEqual(expected);
  });
});
