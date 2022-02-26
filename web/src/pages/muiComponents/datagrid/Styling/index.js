import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import StylingHeaderGrid from './StylingHeaderGrid';
import StylingHeaderGridSource from '!raw-loader!./StylingHeaderGrid';

import StylingRowsGrid from './StylingRowsGrid';
import StylingRowsGridSource from '!raw-loader!./StylingRowsGrid';

import StylingCellsGrid from './StylingCellsGrid';
import StylingCellsGridSource from '!raw-loader!./StylingCellsGrid';

import StylingAllCells from './StylingAllCells';
import StylingAllCellsSource from '!raw-loader!./StylingAllCells';

import AntDesignGrid from './AntDesignGrid';
import AntDesignGridSource from '!raw-loader!./AntDesignGrid';

const Styling = () => {
  return (
    <>
      <AppComponentHeader
        title='Styling'
        description='The grid CSS can be easily overwritten.'
        refUrl='https://mui.com/components/data-grid/style/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='StylingHeaderGrid'
            component={StylingHeaderGrid}
            source={StylingHeaderGridSource}
            noScrollbar
            description='The GridColDef type has properties to apply class names and custom CSS on the header.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='StylingRowsGrid'
            component={StylingRowsGrid}
            source={StylingRowsGridSource}
            noScrollbar
            description='The getRowClassName prop can be used to apply a custom CSS class on each row. Its called with a GridRowParams object and must return a string.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='StylingCellsGrid'
            component={StylingCellsGrid}
            source={StylingCellsGridSource}
            noScrollbar
            description='There are multiple ways to apply a custom CSS class on a cell.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='StylingAllCells'
            component={StylingAllCells}
            source={StylingAllCellsSource}
            noScrollbar
            description='This prop is called for every cell in every column. Different from the first option, this prop is defined at the grid level, not column level. It is also called with a GridCellParams object.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='AntDesignGrid'
            component={AntDesignGrid}
            source={AntDesignGridSource}
            noScrollbar
            description='The following demo leverages the CSS customization API to match the Ant Design specification.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Styling;
