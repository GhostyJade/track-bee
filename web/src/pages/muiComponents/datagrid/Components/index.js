import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import CustomColumnMenu from './CustomColumnMenu';
import CustomColumnMenuSource from '!raw-loader!./CustomColumnMenu';

import ToolbarGrid from './ToolbarGrid';
import ToolbarGridSource from '!raw-loader!./ToolbarGrid';

import CustomToolbarGrid from './CustomToolbarGrid';
import CustomToolbarGridSource from '!raw-loader!./CustomToolbarGrid';

import CustomFooter from './CustomFooter';
import CustomFooterSource from '!raw-loader!./CustomFooter';

import CustomPaginationGrid from './CustomPaginationGrid';
import CustomPaginationGridSource from '!raw-loader!./CustomPaginationGrid';

import CustomLoadingOverlayGrid from './CustomLoadingOverlayGrid';
import CustomLoadingOverlayGridSource from '!raw-loader!./CustomLoadingOverlayGrid';

import CustomEmptyOverlayGrid from './CustomEmptyOverlayGrid';
import CustomEmptyOverlayGridSource from '!raw-loader!./CustomEmptyOverlayGrid';

import RowContextMenu from './RowContextMenu';
import RowContextMenuSource from '!raw-loader!./RowContextMenu';

import CellWithPopover from './CellWithPopover';
import CellWithPopoverSource from '!raw-loader!./CellWithPopover';

import CustomSortIcons from './CustomSortIcons';
import CustomSortIconsSource from '!raw-loader!./CustomSortIcons';

const Components = () => {
  return (
    <>
      <AppComponentHeader
        title='Components'
        description='The grid is highly customizable. Override components using the components prop.'
        refUrl='https://mui.com/components/data-grid/components/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Column Menu'
            component={CustomColumnMenu}
            source={CustomColumnMenuSource}
            noScrollbar
            description='As mentioned above, the column menu is a component slot that can be recomposed easily and customized on each column as in the demo below.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Toolbar Grid'
            component={ToolbarGrid}
            source={ToolbarGridSource}
            noScrollbar
            description='To enable the toolbar you need to add the Toolbar: GridToolbar to the grid components prop. This demo showcases how this can be achieved.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Toolbar Grid'
            component={CustomToolbarGrid}
            source={CustomToolbarGridSource}
            noScrollbar
            description='Alternatively, you can compose your own toolbar.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Footer'
            component={CustomFooter}
            source={CustomFooterSource}
            noScrollbar
            description='The grid exposes props to hide specific elements of the UI:'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Pagination Grid'
            component={CustomPaginationGrid}
            source={CustomPaginationGridSource}
            noScrollbar
            description='By default, pagination uses the TablePagination component that is optimized for handling tabular data. This demo replaces it with the Pagination component.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Loading Over layGrid'
            component={CustomLoadingOverlayGrid}
            source={CustomLoadingOverlayGridSource}
            noScrollbar
            description='By default, the loading overlay displays a circular progress. This demo replaces it with a linear progress.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Empty Over layGrid'
            component={CustomEmptyOverlayGrid}
            source={CustomEmptyOverlayGridSource}
            noScrollbar
            description='In the following demo, an illustration is added on top of the default "No Rows" message.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Row Context Menu'
            component={RowContextMenu}
            source={RowContextMenuSource}
            noScrollbar
            description='The componentsProps.row prop can be used to pass additional props to the row component. One common use case might be to listen for events not exposed by default. The demo below shows a context menu when a row is right-clicked.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Cell With Popover'
            component={CellWithPopover}
            source={CellWithPopoverSource}
            noScrollbar
            description='The following demo uses the componentsProps.cell prop to listen for specific events emitted by the cells. Try it by hovering a cell with the mouse and it should display the number of characters each cell has.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Sort Icons'
            component={CustomSortIcons}
            source={CustomSortIconsSource}
            noScrollbar
            description='As any component slot, every icon can be customized. However, it is not yet possible to use the componentsProps with icons.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Components;
