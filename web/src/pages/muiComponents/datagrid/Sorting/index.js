import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import BasicSortingGrid from './BasicSortingGrid';
import BasicSortingGridSource from '!raw-loader!./BasicSortingGrid';

import ComparatorSortingGrid from './ComparatorSortingGrid';
import ComparatorSortingGridSource from '!raw-loader!./ComparatorSortingGrid';

import OrderSortingGrid from './OrderSortingGrid';
import OrderSortingGridSource from '!raw-loader!./OrderSortingGrid';

import DisableSortingGrid from './DisableSortingGrid';
import DisableSortingGridSource from '!raw-loader!./DisableSortingGrid';

import ServerSortingGrid from './ServerSortingGrid';
import ServerSortingGridSource from '!raw-loader!./ServerSortingGrid';

import MultiSortingGrid from './MultiSortingGrid';
import MultiSortingGridSource from '!raw-loader!./MultiSortingGrid';

const Sorting = () => {
  return (
    <>
      <AppComponentHeader
        title='Sorting'
        description='Sorting allows ordering records in the data grid.'
        refUrl='https://mui.com/components/data-grid/sorting/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='BasicSortingGrid'
            component={BasicSortingGrid}
            source={BasicSortingGridSource}
            noScrollbar
            description='A sorted column can be can pre-configured using the sortModel prop of the GridColDef interface:'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ComparatorSortingGrid'
            component={ComparatorSortingGrid}
            source={ComparatorSortingGridSource}
            noScrollbar
            description='In the example below, the username column combines name and age, but it is sorted by age using a custom comparator:'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='OrderSortingGrid'
            component={OrderSortingGrid}
            source={OrderSortingGridSource}
            noScrollbar
            description='In the example below columns are only sortable in descending or ascending order.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='DisableSortingGrid'
            component={DisableSortingGrid}
            source={DisableSortingGridSource}
            noScrollbar
            description='By default, all columns are sortable. This can be revoked using the sortable prop of the GridColDef interface:'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ServerSortingGrid'
            component={ServerSortingGrid}
            source={ServerSortingGridSource}
            noScrollbar
            description='By default, sorting works client-side. To switch it to server-side, set sortingMode="server". Then you need to handle the onSortModelChange callback, sort the rows on the server-side, and update the rows prop with the newly sorted rows.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='MultiSortingGrid'
            component={MultiSortingGrid}
            source={MultiSortingGridSource}
            noScrollbar
            description='You can sort by multiple columns at the same time using DataGridPro. Hold down the CTRL or Shift (use ⌘ Command on macOS) key while clicking the column header.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Sorting;
