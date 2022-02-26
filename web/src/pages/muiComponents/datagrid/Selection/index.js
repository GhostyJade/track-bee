import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import SingleRowSelectionGrid from './SingleRowSelectionGrid';
import SingleRowSelectionGridSource from '!raw-loader!./SingleRowSelectionGrid';

import MultipleRowSelectionGrid from './MultipleRowSelectionGrid';
import MultipleRowSelectionGridSource from '!raw-loader!./MultipleRowSelectionGrid';

import CheckboxSelectionGrid from './CheckboxSelectionGrid';
import CheckboxSelectionGridSource from '!raw-loader!./CheckboxSelectionGrid';

import DisableClickSelectionGrid from './DisableClickSelectionGrid';
import DisableClickSelectionGridSource from '!raw-loader!./DisableClickSelectionGrid';

import DisableRowSelection from './DisableRowSelection';
import DisableRowSelectionSource from '!raw-loader!./DisableRowSelection';

import ControlledSelectionGrid from './ControlledSelectionGrid';
import ControlledSelectionGridSource from '!raw-loader!./ControlledSelectionGrid';

import ControlledSelectionServerPaginationGrid from './ControlledSelectionServerPaginationGrid';
import ControlledSelectionServerPaginationGridSource from '!raw-loader!./ControlledSelectionServerPaginationGrid';

const Selection = () => {
  return (
    <>
      <AppComponentHeader
        title='Selection'
        description='Selection allows the user to select and highlight a number of rows that they can then take action on.'
        refUrl='https://mui.com/components/data-grid/selection/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='SingleRowSelectionGrid'
            component={SingleRowSelectionGrid}
            source={SingleRowSelectionGridSource}
            noScrollbar
            description='Single row selection is enable by default with the DataGrid component. To unselect a row, hold the CTRL key and click on it.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='MultipleRowSelectionGrid'
            component={MultipleRowSelectionGrid}
            source={MultipleRowSelectionGridSource}
            noScrollbar
            description='On the DataGridPro component, you can select multiple rows in two ways:'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='CheckboxSelectionGrid'
            component={CheckboxSelectionGrid}
            source={CheckboxSelectionGridSource}
            noScrollbar
            description='To activate checkbox selection set checkboxSelection={true}.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='DisableClickSelectionGrid'
            component={DisableClickSelectionGrid}
            source={DisableClickSelectionGridSource}
            noScrollbar
            description='You might have interactive content in the cells and need to disable the selection of the row on click. Use the disableSelectionOnClick prop in this case.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='DisableRowSelection'
            component={DisableRowSelection}
            source={DisableRowSelectionSource}
            noScrollbar
            description='Use the isRowSelectable prop to indicate if a row can be selected. Its called with a GridRowParams object and should return a boolean value. If not specified, all rows are selectable. '
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ControlledSelectionGrid'
            component={ControlledSelectionGrid}
            source={ControlledSelectionGridSource}
            noScrollbar
            description='Use the selectionModel prop to control the selection. Each time this prop changes, the onSelectionModelChange callback is called with the new selection value.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ControlledSelectionServerPaginationGrid'
            component={ControlledSelectionServerPaginationGrid}
            source={ControlledSelectionServerPaginationGridSource}
            noScrollbar
            description='Using the controlled selection with paginationMode="server" may result in selected rows being lost when the page is changed. This happens because the grid cross-checks with the rows prop and only calls onSelectionModelChange with existing row IDs. Depending on your server-side implementation, when the page changes and the new value for the rows prop does not include previously selected rows, the grid will call onSelectionModelChange with an empty value. To prevent this unwanted behavior, there are two ways:'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Selection;
