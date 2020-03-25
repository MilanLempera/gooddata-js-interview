import { CatalogHelper, Model } from '@gooddata/react-components';
import { VisualizationObject } from '@gooddata/typings/dist/src/VisualizationObject';
import { DateRange } from '../components/MonthFilter';
import catalogJson from './generated/project1.json';

type MeasureName = keyof Project1Catalog.IMeasures;
type MeasureOptions = Omit<VisualizationObject.IMeasure['measure'], 'localIdentifier' | 'definition'>;

type DataSetName = keyof Project1Catalog.IDateDataSets;
type DataSetAttributeNames<T extends DataSetName> = keyof Project1Catalog.IDateDataSets[T]['attributes'];

export const projectId = catalogJson.projectId;
export const catalogHelper = new CatalogHelper(catalogJson);

export function createMeasure(
  localIdentifier: VisualizationObject.Identifier,
  name: MeasureName,
  measureOptions: MeasureOptions = {}
): VisualizationObject.IMeasure {
  const alias = measureOptions.alias || catalogJson.measures[name].title;

  return {
    measure: {
      localIdentifier,
      definition: {
        measureDefinition: {
          item: {
            identifier: catalogHelper.measure(name),
          },
        },
      },
      ...measureOptions,
      alias,
    },
  };
}

export function createVisualizationAttribute<T extends DataSetName>(
  localIdentifier: string,
  dataSetName: T,
  attributeName?: DataSetAttributeNames<T>
): VisualizationObject.IVisualizationAttribute {
  return {
    visualizationAttribute: {
      displayForm: {
        identifier: catalogHelper.dateDataSetDisplayForm(dataSetName, attributeName as string),
      },
      localIdentifier: localIdentifier,
    },
  };
}

export function createDateFilter(
  dataSetName: DataSetName,
  dateRange: DateRange
): VisualizationObject.IVisualizationObjectAbsoluteDateFilter {
  return Model.absoluteDateFilter(catalogHelper.dateDataSet(dataSetName), dateRange.from, dateRange.to);
}
