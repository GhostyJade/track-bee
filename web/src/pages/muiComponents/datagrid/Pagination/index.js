import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import BasicPaginationGrid from './BasicPaginationGrid';
import BasicPaginationGridSource from '!raw-loader!./BasicPaginationGrid';

import SizePaginationGrid from './SizePaginationGrid';
import SizePaginationGridSource from '!raw-loader!./SizePaginationGrid';

import ControlledPaginationGrid from './ControlledPaginationGrid';
import ControlledPaginationGridSource from './ControlledPaginationGrid';

import AutoPaginationGrid from './AutoPaginationGrid';
import AutoPaginationGridSource from './AutoPaginationGrid';

import ServerPaginationGrid from './ServerPaginationGrid';
import ServerPaginationGridSource from './ServerPaginationGrid';

import CursorPaginationGrid from './CursorPaginationGrid';
import CursorPaginationGridSource from './CursorPaginationGrid';

import BasisPaginationGrid from './BasisPaginationGrid';
import BasisPaginationGridSource from './BasisPaginationGrid';

import ApiRefPaginationGrid from './ApiRefPaginationGrid';
import ApiRefPaginationGridSource from './ApiRefPaginationGrid';

const Pagination = () => {
  return (
    <>
      <AppComponentHeader
        title='Pagination'
        description='Through pagination, a segment of data can be viewed from the assigned data source.'
        refUrl='https://mui.com/components/data-grid/pagination/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='BasicPaginationGrid'
            component={BasicPaginationGrid}
            source={BasicPaginationGridSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='SizePaginationGrid'
            component={SizePaginationGrid}
            source={SizePaginationGridSource}
            noScrollbar
            description='The default page size is 100, you can change this value with the pageSize prop.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ControlledPaginationGrid'
            component={ControlledPaginationGrid}
            source={ControlledPaginationGridSource}
            noScrollbar
            description='While the previous demos show how the pagination can be uncontrolled, the active page can be controlled with the page/onPageChange props.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='AutoPaginationGrid'
            component={AutoPaginationGrid}
            source={AutoPaginationGridSource}
            noScrollbar
            description='The autoPageSize prop allows to auto-scale the pageSize to match the container height and the max number of rows that can be displayed without a vertical scroll bar. By default, this feature is off.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ServerPaginationGrid'
            component={ServerPaginationGrid}
            source={ServerPaginationGridSource}
            noScrollbar
            description='By default, pagination works on the client-side. To switch it to server-side, set paginationMode="server". You also need to set the rowCount prop so that the grid knows the total number of pages. Finally, you need to handle the onPageChange callback to load the rows for the corresponding page.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='CursorPaginationGrid'
            component={CursorPaginationGrid}
            source={CursorPaginationGridSource}
            noScrollbar
            description='You can adapt the pagination for your cursor-based pagination. To do so, you just have to keep track of the next cursor associated with each page you fetched.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='BasisPaginationGrid'
            component={BasisPaginationGrid}
            source={BasisPaginationGridSource}
            noScrollbar
            description='The DataGrid component can display up to 100 rows per page. The DataGridPro component removes this limitation. The following demo displays 200 rows per page:'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ApiRefPaginationGrid'
            component={ApiRefPaginationGrid}
            source={ApiRefPaginationGridSource}
            noScrollbar
            description='The grid exposes a set of methods that enables all of these features using the imperative apiRef.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Pagination;
