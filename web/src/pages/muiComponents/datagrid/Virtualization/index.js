import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import ColumnVirtualizationGrid from './ColumnVirtualizationGrid';
import ColumnVirtualizationGridSource from '!raw-loader!./ColumnVirtualizationGrid';

const Virtualization = () => {
  return (
    <>
      <AppComponentHeader
        title='Virtualization'
        description='The grid is high performing thanks to its rows and columns virtualization engine.'
        refUrl='https://mui.com/components/data-grid/virtualization/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnVirtualizationGrid'
            component={ColumnVirtualizationGrid}
            source={ColumnVirtualizationGridSource}
            noScrollbar
            description='Column virtualization is the insertion and removal of columns as the grid scrolls horizontally.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Virtualization;
