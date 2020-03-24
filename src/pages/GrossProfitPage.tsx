import { ColumnChart } from '@gooddata/react-components';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
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
      <Paper className={classes.paper}>
        <Typography variant={'h5'} className={classes.title}>
          $ Gross Profit in <MonthFilterInline value={monthFilterValue} onChange={setMonthFilter} /> 2016
        </Typography>
        <div className={classes.chart}>
          <ColumnChart measures={measures} filters={filters} projectId={projectId} />
        </div>
      </Paper>

      <Paper className={classes.paper}>
        <Typography variant={'h5'}>$ Gross Profit - All months</Typography>
        <div className={classes.chart}>
          <ColumnChart measures={measures} viewBy={viewBy} projectId={projectId} />
        </div>
      </Paper>
    </div>
  );
};

export default GrossProfitPage;
