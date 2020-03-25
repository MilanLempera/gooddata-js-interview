// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import '@gooddata/react-components/styles/css/main.css';
import { makeStyles, Theme } from '@material-ui/core/styles';
import classNames from 'classnames';
import React from 'react';
import { projectContext, ProjectDataProvider } from './catalog/ProjectContext';
import GrossProfitPage from './pages/GrossProfitPage';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {},
}));

type Props = StandardProps;

const App: React.FC<Props> = ({ ...others }) => {
  const classes = useStyles();

  return (
    <div {...others} className={classNames(classes.root, others.className)}>
      <ProjectDataProvider value={projectContext}>
        <GrossProfitPage />
      </ProjectDataProvider>
    </div>
  );
};

export default App;
