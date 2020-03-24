import { Paper, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import classNames from 'classnames';
import React from 'react';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
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

type Props = StandardProps & {
  title: React.ReactNode;
  children: React.ReactNode;
};

const ChartTile: React.FC<Props> = ({ title, children, ...others }) => {
  const classes = useStyles();

  return (
    <Paper {...others} className={classNames(classes.root, others.className)}>
      <Typography variant={'h5'} className={classes.title}>
        {title}
      </Typography>
      <div className={classes.chart}>{children}</div>
    </Paper>
  );
};

export default ChartTile;
