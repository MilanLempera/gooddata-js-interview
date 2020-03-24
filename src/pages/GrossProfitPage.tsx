import { ColumnChart } from '@gooddata/react-components';
import { makeStyles, Theme } from '@material-ui/core/styles';
import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import ChartTile from '../components/ChartTile';
import { DateRange, MonthFilterInline } from '../components/MonthFilter';

const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';

const grossProfitMeasure = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877';
const dateAttributeInMonths = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142';
const dateAttribute = '/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180';

const measures = [
  {
    measure: {
      localIdentifier: 'm1',
      definition: {
        measureDefinition: {
          item: {
            uri: grossProfitMeasure,
          },
        },
      },
      alias: '$ Gross Profit',
    },
  },
];

const viewBy = {
  visualizationAttribute: {
    displayForm: {
      uri: dateAttributeInMonths,
    },
    localIdentifier: 'a1',
  },
};

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {},
  paper: {
    display: 'flex',
    flexDirection: 'column',
    margin: spacing(2),
    padding: spacing(1),
  },
  title: {
    paddingLeft: spacing(4),
  },
  chart: {
    minHeight: '400px',
  },
}));

type Props = StandardProps;

const GrossProfitPage: React.FC<Props> = ({ ...others }) => {
  const classes = useStyles();
  const [monthFilterValue, setMonthFilter] = useState({
    from: '2016-01-01',
    to: '2016-01-31',
  } as DateRange);

  const filters = useMemo(() => {
    return [
      {
        absoluteDateFilter: {
          dataSet: {
            uri: dateAttribute,
          },
          ...monthFilterValue,
        },
      },
    ];
  }, [monthFilterValue]);

  return (
    <div {...others} className={classNames(classes.root, others.className)}>
      <ChartTile
        title={
          <>
            $ Gross Profit in <MonthFilterInline value={monthFilterValue} onChange={setMonthFilter} /> 2016
          </>
        }>
        <ColumnChart measures={measures} filters={filters} projectId={projectId} />
      </ChartTile>

      <ChartTile title="$ Gross Profit - All months">
        <ColumnChart measures={measures} viewBy={viewBy} projectId={projectId} />
      </ChartTile>
    </div>
  );
};

export default GrossProfitPage;
