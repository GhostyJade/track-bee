import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import RowsGrid from './RowsGrid';
import RowsGridSource from '!raw-loader!./RowsGrid';

import InfiniteLoadingGrid from './InfiniteLoadingGrid';
import InfiniteLoadingGridSource from '!raw-loader!./InfiniteLoadingGrid';

import ApiRefRowsGrid from './ApiRefRowsGrid';
import ApiRefRowsGridSource from '!raw-loader!./ApiRefRowsGrid';

import ThrottledRowsGrid from './ThrottledRowsGrid';
import ThrottledRowsGridSource from '!raw-loader!./ThrottledRowsGrid';

import DenseHeightGrid from './DenseHeightGrid';
import DenseHeightGridSource from '!raw-loader!./DenseHeightGrid';

const Rows = () => {
  return (
    <>
      <AppComponentHeader
        title='Rows'
        description='This section goes in details on the aspects of the rows you need to know.'
        refUrl='https://mui.com/components/portal/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='InfiniteLoadingGrid'
            component={InfiniteLoadingGrid}
            source={InfiniteLoadingGridSource}
            noScrollbar
            description='The grid provides a onRowsScrollEnd prop that can be used to load additional rows when the scroll reaches the bottom of the viewport area.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ApiRefRowsGrid'
            component={ApiRefRowsGrid}
            source={ApiRefRowsGridSource}
            noScrollbar
            description='The second way to update rows is to use the apiRef. This is an imperative API that is designed to solve the previous two limitations of the declarative rows prop. apiRef.current.updateRows(), updates the rows to the grid. It merges the new rows with the previous ones.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ThrottledRowsGrid'
            component={ThrottledRowsGrid}
            source={ThrottledRowsGridSource}
            noScrollbar
            description='The following demo updates the rows every 10ms, but they are only applied every 2 seconds.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='DenseHeightGrid'
            component={DenseHeightGrid}
            source={DenseHeightGridSource}
            noScrollbar
            description='By default, the rows have a height of 52 pixels. This matches the normal height in the Material Design guidelines.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='RowsGrid'
            component={RowsGrid}
            source={RowsGridSource}
            noScrollbar
            description='Grid rows can be defined with the rows prop. rows expects an array of objects. Rows should have this type: GridRowModel[]. The columns "field" property should match a key of the row object (GridRowModel). '
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Rows;
