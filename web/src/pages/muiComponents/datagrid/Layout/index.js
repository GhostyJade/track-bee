import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import FlexLayoutGrid from './FlexLayoutGrid';
import FlexLayoutGridSource from '!raw-loader!./FlexLayoutGrid';

import FixedSizeGrid from './FixedSizeGrid';
import FixedSizeGridSource from '!raw-loader!./FixedSizeGrid';

import AutoHeightGrid from './AutoHeightGrid';
import AutoHeightGridSource from '!raw-loader!./AutoHeightGrid';

const Layout = () => {
  return (
    <>
      <AppComponentHeader
        title='Layout'
        description='The data grid offers multiple layout mode.'
        refUrl='https://mui.com/components/data-grid/layout/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='FlexLayoutGrid'
            component={FlexLayoutGrid}
            source={FlexLayoutGridSource}
            noScrollbar
            description='Its recommended to use a flex container to render the grid. This allows a flexible layout, resizes well, and works on all devices.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='FixedSizeGrid'
            component={FixedSizeGrid}
            source={FixedSizeGridSource}
            noScrollbar
            description='You can predefine dimensions for the parent of the grid.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='AutoHeightGrid'
            component={AutoHeightGrid}
            source={AutoHeightGridSource}
            noScrollbar
            description='The autoHeight prop allows the grid to size according to its content. This means that the number of rows will drive the height of the grid and consequently, they will all be rendered and visible to the user at the same time.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Layout;
