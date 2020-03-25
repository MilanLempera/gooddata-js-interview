declare namespace Project1Catalog {
  export interface IRootObject {
    projectId: string;
    measures: IMeasures;
    attributes: IAttributes;
    visualizations: IVisualizations;
    dateDataSets: IDateDataSets;
  }
  export interface IMeasures {
    '_Filter Last 4 Quarter': {
      identifier: string;
      tags: string;
      title: string;
    };
    '_Filter Quarter': {
      identifier: string;
      tags: string;
      title: string;
    };
    '_TIMELINE Q': {
      identifier: string;
      tags: string;
      title: string;
    };
    '[AVG] Same Store Sales Growth MoM': {
      identifier: string;
      tags: string;
      title: string;
    };
    '# Checks': {
      identifier: string;
      tags: string;
      title: string;
    };
    '# Employees': {
      identifier: string;
      tags: string;
      title: string;
    };
    '# Franchise Locations': {
      identifier: string;
      tags: string;
      title: string;
    };
    '# Items on Check': {
      identifier: string;
      tags: string;
      title: string;
    };
    '# Location City': {
      identifier: string;
      tags: string;
      title: string;
    };
    '# Owned Locations': {
      identifier: string;
      tags: string;
      title: string;
    };
    '# Restaurants': {
      identifier: string;
      tags: string;
      title: string;
    };
    '% Change $ Avg Total Sales': {
      identifier: string;
      tags: string;
      title: string;
    };
    '% Change $ Avg Total Sales by Server': {
      identifier: string;
      tags: string;
      title: string;
    };
    '% of Entree on Total Check Size': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Avg Check Size': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Avg Daily Total Sales': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Avg Daily Total Sales by Server': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Avg Daily Total Sales by Server - For Previous': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Avg Restaurant Daily Total Sales': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Avg Restaurant Daily Total Sales - For Previous': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Avg Total Sales by Restaurant': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Entree of Total Check Size': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Franchise Fees': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Franchise Fees (Ad Royalty)': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Franchise Fees (Initial Fee) Last Quarter Timeline': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Franchise Fees (Initial Franchise Fee)': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Franchise Fees (Ongoing Royalty)': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Franchise Fees (Ongoing Royalty) Last Quarter Timeline': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Franchised Sales': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Gross Profit': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Menu Item Sales': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Owned Sales': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Owned Sales Last Quarter Timeline': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Scheduled Costs': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Scheduled Labor Costs': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Total Check Value': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Total Costs': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Total Costs - COGs': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Total Costs - Labor': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Total Costs - Occupany': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Total Costs - Operating': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Total Sales': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Total Sales Last Quarter Timeline': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Avg # Checks': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Avg # Employees - Franchised': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Avg # Employees - Owned': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Avg # Items on Check': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Avg # Items on Check By Server': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Avg % of Entree on Total Check size': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Avg Check Size by Restaurant': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Avg Check Size by Server': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Avg Daily # Checks by Restaurant': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Avg Daily # of Check by Server': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Avg Entree % By Restaurant': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Avg Entree % By Server': {
      identifier: string;
      tags: string;
      title: string;
    };
    Cost: ICost;
    Density: IDensity;
    'Franchise Fee (Initial Fee) % Change': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Franchise Fee (Ongoing Royalty) % Change': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Gross Profit %': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Menu Item Quantity': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Owned Sales % Change': {
      identifier: string;
      tags: string;
      title: string;
    };
    Population: IPopulation;
    'Same Store Sales': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Same Store Sales MoM Growth': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Same Store Sales Previous Month': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Scheduled Cost': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Total # Franchised Employees': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Total # Owned Employees': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Total Sales % Change': {
      identifier: string;
      tags: string;
      title: string;
    };
  }
  export interface ICost {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IDensity {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IPopulation {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IAttributes {
    City?: ICity;
    'Cost Type'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Employee Id'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Employee Name'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Is Kids Item?'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Line Item Id'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Location City'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Location Country'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Location Id'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Location Name'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Location Ownership'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Location Resort'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Location State'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Menu Category'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Menu Item Id'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Menu Item Name'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Restaurant Category'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'State Name'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Time Zone'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Transaction Id'?: {
      identifier: string;
      tags: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
      title: string;
    };
    'Year (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Quarter (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Sun-Sat)/Year (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Sun-Sat) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Sun-Sat) of Qtr (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Mon-Sun)/Year (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Mon-Sun) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Mon-Sun) of Qtr (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Month (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Month of Quarter (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Day of Year (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Day of Week (Sun-Sat) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Day of Week (Mon-Sun) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Day of Quarter (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Day of Month (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Quarter/Year (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Month/Year (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Date (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Year (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Quarter (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Sun-Sat)/Year (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Sun-Sat) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Sun-Sat) of Qtr (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Mon-Sun)/Year (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Mon-Sun) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Mon-Sun) of Qtr (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Month (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Month of Quarter (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Day of Year (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Day of Week (Sun-Sat) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Day of Week (Mon-Sun) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Day of Quarter (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Day of Month (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Quarter/Year (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Month/Year (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Date (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Year (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Quarter (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Sun-Sat)/Year (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Sun-Sat) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Sun-Sat) of Qtr (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Mon-Sun)/Year (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Mon-Sun) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Week (Mon-Sun) of Qtr (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Month (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Month of Quarter (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Day of Year (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Day of Week (Sun-Sat) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Day of Week (Mon-Sun) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Day of Quarter (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Day of Month (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Quarter/Year (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Month/Year (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
    'Date (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
      defaultDisplayForm: IDefaultDisplayForm;
      displayForms: IDisplayForms;
    };
  }
  export interface ICity {
    identifier: string;
    tags: string;
    defaultDisplayForm?: IDefaultDisplayForm;
    displayForms?: IDisplayForms;
    title: string;
    dfIdentifier?: string;
    dfTags?: string;
  }
  export interface IDefaultDisplayForm {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IDisplayForms {
    city?: ICity;
    location?: ILocation;
    'Cost Type'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Employee Id'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Employee Name'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Employee URL'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Is Kids Item?'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Line Item Id'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Location City'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Location Country'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Location Id'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Location Name'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Location URL'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Location Ownership'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Location Resort'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Location State'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Menu Category'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Menu Item Id'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Menu Item Name'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Restaurant Category'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    state_name?: IState_name;
    timezone?: ITimezone;
    'Transaction Id'?: {
      dfIdentifier: string;
      identifier: string;
      tags: string;
      dfTags: string;
      title: string;
    };
    'Year (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'default (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Week #/Year (W1/2010) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Week Starting (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'From - To (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Week #/Year (Cont.) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Wk/Qtr/Year (Cont.) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Wk/Qtr/Year (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number US (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number EU (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Short (Jan) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Long (January) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number (M1) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'M/Q (M1/Q1) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Short (Sun) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Long (Sunday) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number (1=Sunday) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Short (Mon) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Long (Monday) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number (1=Monday) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'US Short (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Short (Jan 2010) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Long (January 2010) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number (1/2010) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'mm/dd/yyyy (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'yyyy-mm-dd (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'm/d/yy (no leading zeroes) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Long (Mon, Jan 1, 2010) (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'dd/mm/yyyy (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'dd-mm-yyyy (Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Year (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'default (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Week #/Year (W1/2010) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Week Starting (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'From - To (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Week #/Year (Cont.) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Wk/Qtr/Year (Cont.) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Wk/Qtr/Year (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number US (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number EU (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Short (Jan) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Long (January) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number (M1) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'M/Q (M1/Q1) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Short (Sun) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Long (Sunday) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number (1=Sunday) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Short (Mon) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Long (Monday) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number (1=Monday) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'US Short (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Short (Jan 2010) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Long (January 2010) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number (1/2010) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'mm/dd/yyyy (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'yyyy-mm-dd (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'm/d/yy (no leading zeroes) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Long (Mon, Jan 1, 2010) (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'dd/mm/yyyy (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'dd-mm-yyyy (Timeline)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Year (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'default (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Week #/Year (W1/2010) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Week Starting (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'From - To (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Week #/Year (Cont.) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Wk/Qtr/Year (Cont.) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Wk/Qtr/Year (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number US (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number EU (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Short (Jan) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Long (January) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number (M1) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'M/Q (M1/Q1) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Short (Sun) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Long (Sunday) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number (1=Sunday) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Short (Mon) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Long (Monday) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number (1=Monday) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'US Short (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Short (Jan 2010) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Long (January 2010) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Number (1/2010) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'mm/dd/yyyy (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'yyyy-mm-dd (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'm/d/yy (no leading zeroes) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'Long (Mon, Jan 1, 2010) (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'dd/mm/yyyy (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
    'dd-mm-yyyy (Fiscal Date)'?: {
      identifier: string;
      tags: string;
      title: string;
    };
  }
  export interface ILocation {
    dfIdentifier: string;
    identifier: string;
    tags: string;
    dfTags: string;
    title: string;
  }
  export interface IState_name {
    dfIdentifier: string;
    identifier: string;
    tags: string;
    dfTags: string;
    title: string;
  }
  export interface ITimezone {
    dfIdentifier: string;
    identifier: string;
    tags: string;
    dfTags: string;
    title: string;
  }
  export interface IVisualizations {
    123: I123;
    'Avg Entree %': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Total Sales by City': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Total Sales by Location Last Quarter': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Total Sales by Week': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Check Value by Trx': {
      identifier: string;
      tags: string;
      title: string;
    };
    '$ Total Sales by Location': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Sales over Time': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Costs over Time': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Labor Costs vs Scheduled Costs': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Gross profit % (date filters)': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Table report Labor Costs Vs Scheduled Costs': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Franchise Fees': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Franchise Fees 2017': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Too many datapoints': {
      identifier: string;
      tags: string;
      title: string;
    };
    Test: ITest;
    asdf: IAsdf;
    'too many data points': {
      identifier: string;
      tags: string;
      title: string;
    };
    'test-pzb': {
      identifier: string;
      tags: string;
      title: string;
    };
    '# Checks viewed by City stacked by Location': {
      identifier: string;
      tags: string;
      title: string;
    };
    "Kyle's Insight": {
      identifier: string;
      tags: string;
      title: string;
    };
    'Gross Profit by location': {
      identifier: string;
      tags: string;
      title: string;
    };
    'ui-example-1': {
      identifier: string;
      tags: string;
      title: string;
    };
    DanielsFirstKPI: IDanielsFirstKPI;
    states: IStates;
    "Jakub's visualisation": {
      identifier: string;
      tags: string;
      title: string;
    };
    sdf_restrant_per_city: ISdf_restrant_per_city;
    fargo: IFargo;
    new_test: INew_test;
    'Zajícův insight 2': {
      identifier: string;
      tags: string;
      title: string;
    };
    previousPeriod: IPreviousPeriod;
    'Table to Pivot': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Table to Pivot #2': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Table to Pivot #3': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Bubble Chart': {
      identifier: string;
      tags: string;
      title: string;
    };
    hackathon: IHackathon;
    pie2: IPie2;
    'Column Chart': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Dummy chart': {
      identifier: string;
      tags: string;
      title: string;
    };
    'test insight 1': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Pivot test': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Table Without Measure': {
      identifier: string;
      tags: string;
      title: string;
    };
    asdfasdf: IAsdfasdf;
    'PivotTable sort over column attribute TEST': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Table Totals test': {
      identifier: string;
      tags: string;
      title: string;
    };
    'scatter example x': {
      identifier: string;
      tags: string;
      title: string;
    };
    xxx: IXxx;
    'Line Chart': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Scatter Chart': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Area Chart': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Headline Chart': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Bubble Chart(1)': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Pie Chart': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Donut Chart': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Treemap Chart': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Heatmap Chart': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Bar Chart': {
      identifier: string;
      tags: string;
      title: string;
    };
    yxcv: IYxcv;
    ColumnsChart: IColumnsChart;
    '# Checks by Quarter, State': {
      identifier: string;
      tags: string;
      title: string;
    };
    e: IE;
    'TOTVS Table': {
      identifier: string;
      tags: string;
      title: string;
    };
    'tesst date year': {
      identifier: string;
      tags: string;
      title: string;
    };
    pivotka: IPivotka;
    'PivotTable with no filters': {
      identifier: string;
      tags: string;
      title: string;
    };
    'TOTVS Table #2': {
      identifier: string;
      tags: string;
      title: string;
    };
    tetsssss1: ITetsssss1;
    'coreui-react': {
      identifier: string;
      tags: string;
      title: string;
    };
    'JZA Treemap': {
      identifier: string;
      tags: string;
      title: string;
    };
    'JZA Combo': {
      identifier: string;
      tags: string;
      title: string;
    };
    'JZA Pivot Example': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Dual Axis Bar Chart': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Checks by year': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Checks by State': {
      identifier: string;
      tags: string;
      title: string;
    };
    DEL: IDEL;
    'DEL(1)': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Long Table': {
      identifier: string;
      tags: string;
      title: string;
    };
    test: ITest;
    'DHO-test': {
      identifier: string;
      tags: string;
      title: string;
    };
    KPI: IKPI;
    PVA: IPVA;
    'PVA 2': {
      identifier: string;
      tags: string;
      title: string;
    };
    Table: ITable;
    'Test Chart #1': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Table(1)': {
      identifier: string;
      tags: string;
      title: string;
    };
    'Chart #1': {
      identifier: string;
      tags: string;
      title: string;
    };
    geoPushpinChart: IGeoPushpinChart;
    'Bullet Chart': {
      identifier: string;
      tags: string;
      title: string;
    };
  }
  export interface I123 {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface ITest {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IAsdf {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IDanielsFirstKPI {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IStates {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface ISdf_restrant_per_city {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IFargo {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface INew_test {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IPreviousPeriod {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IHackathon {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IPie2 {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IAsdfasdf {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IXxx {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IYxcv {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IColumnsChart {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IE {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IPivotka {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface ITetsssss1 {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IDEL {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IKPI {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IPVA {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface ITable {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IGeoPushpinChart {
    identifier: string;
    tags: string;
    title: string;
  }
  export interface IDateDataSets {
    'Date (Date)': {
      identifier: string;
      tags: string;
      attributes: IAttributes;
      title: string;
    };
    'Date (Timeline)': {
      identifier: string;
      tags: string;
      attributes: IAttributes;
      title: string;
    };
    'Date (Fiscal Date)': {
      identifier: string;
      tags: string;
      attributes: IAttributes;
      title: string;
    };
  }
}
