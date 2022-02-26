import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import DensitySelectorGrid from './DensitySelectorGrid';
import DensitySelectorGridSource from '!raw-loader!./DensitySelectorGrid';

import DensitySelectorSmallGrid from './DensitySelectorGrid';
import DensitySelectorSmallGridSource from '!raw-loader!./DensitySelectorSmallGrid';

const Accessibility = () => {
  return (
    <>
      <AppComponentHeader
        title='Accessibility'
        description='The Data Grid has complete accessibility support. For instance, every cell is accessible using the keyboard.'
        refUrl='https://mui.com/components/data-grid/accessibility/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='DensitySelectorGrid'
            component={DensitySelectorGrid}
            source={DensitySelectorGridSource}
            noScrollbar
            description='To enable the density selector, you need to compose a toolbar containing the GridToolbarDensitySelector component and apply it using the Toolbar property in the grid components prop.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='DensitySelectorSmallGrid'
            component={DensitySelectorSmallGrid}
            source={DensitySelectorSmallGridSource}
            noScrollbar
            description='The vertical density of the data grid can be set using the density prop. The density prop applies the values determined by the rowHeight and headerHeight props if supplied. The user can override this setting with the toolbar density selector if provided.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Accessibility;
