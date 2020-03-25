import { ColumnChart } from '@gooddata/react-components';
import { makeStyles, Theme } from '@material-ui/core/styles';
import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import { createDateFilter, createMeasure, createVisualizationAttribute, projectId } from '../catalog/catalogFunctions';
import ChartTile from '../components/ChartTile';
import { DateRange, MonthFilterInline } from '../components/MonthFilter';

const measures = [createMeasure('m1', '$ Gross Profit')];

const viewBy = createVisualizationAttribute('a1', 'Date (Date)', 'Month/Year (Date)');

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
    return [createDateFilter('Date (Date)', monthFilterValue)];
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
