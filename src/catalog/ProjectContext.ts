import React from 'react';
import { createMeasure, createVisualizationAttribute, projectId } from './catalogFunctions';

export const projectContext = {
  projectId,
  createMeasure,
  createVisualizationAttribute,
};

export const ProjectContext = React.createContext(projectContext);

export const ProjectDataProvider = ProjectContext.Provider;
