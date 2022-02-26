import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import BasicEditingGrid from './BasicEditingGrid';
import BasicEditingGridSource from '!raw-loader!./BasicEditingGrid';

import IsCellEditableGrid from './IsCellEditableGrid';
import IsCellEditableGridSource from '!raw-loader!./IsCellEditableGrid';

import CellEditControlGrid from './CellEditControlGrid';
import CellEditControlGridSource from '!raw-loader!./CellEditControlGrid';

import ValueGetterSetterGrid from './ValueGetterSetterGrid';
import ValueGetterSetterGridSource from './ValueGetterSetterGrid';

import ValidateRowModelControlGrid from './ValidateRowModelControlGrid';
import ValidateRowModelControlGridSource from './ValidateRowModelControlGrid';

import ValidateServerNameGrid from './ValidateServerNameGrid';
import ValidateServerNameGridSource from './ValidateServerNameGrid';

import RenderRatingEditCellGrid from './RenderRatingEditCellGrid';
import RenderRatingEditCellGridSource from './RenderRatingEditCellGrid';

import StartEditButtonGrid from './StartEditButtonGrid';
import StartEditButtonGridSource from './StartEditButtonGrid';

import CatchEditingEventsGrid from './CatchEditingEventsGrid';
import CatchEditingEventsGridSource from './CatchEditingEventsGrid';

import BasicRowEditingGrid from './BasicRowEditingGrid';
import BasicRowEditingGridSource from './BasicRowEditingGrid';

import RowEditControlGrid from './RowEditControlGrid';
import RowEditControlGridSource from './RowEditControlGrid';

import ConditionalValidationGrid from './ConditionalValidationGrid';
import ConditionalValidationGridSource from './ConditionalValidationGrid';

const Editing = () => {
  return (
    <>
      <AppComponentHeader
        title='Editing'
        description='The data grid has built-in edit capabilities that you can customize to your needs.'
        refUrl='https://mui.com/components/data-grid/editing/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='BasicEditingGrid'
            component={BasicEditingGrid}
            source={BasicEditingGridSource}
            noScrollbar
            description='Cell editing allows editing the value of one cell at a time. Set the editable property in the GridColDef object to true to allow editing cells of this column.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='IsCellEditableGrid'
            component={IsCellEditableGrid}
            source={IsCellEditableGridSource}
            noScrollbar
            description='In this demo, only the rows with an even Age value are editable. The editable cells have a green background for better visibility.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='CellEditControlGrid'
            component={CellEditControlGrid}
            source={CellEditControlGridSource}
            noScrollbar
            description='The editRowsModel prop lets you control the editing state. You can handle the onEditRowsModelChange callback to control the GridEditRowsModel state.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ValueGetterSetterGrid'
            component={ValueGetterSetterGrid}
            source={ValueGetterSetterGridSource}
            noScrollbar
            description='If you are using a valueGetter to extract the value from a nested object, then a valueSetter also needs to be provided. The first one receives the row object and must return the value to be displayed in the cell. In the other side, the second one does the inverse, receiving the new value entered and returning the updated row.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ValidateRowModelControlGrid'
            component={ValidateRowModelControlGrid}
            source={ValidateRowModelControlGridSource}
            noScrollbar
            description='To validate the value in the cells, first add a preProcessEditCellProps callback to the column definition of the field to validate. Once it is called, validate the value provided in params.props.value. Then, return a new object contaning params.props and also the error attribute set to true or false. If the error attribute is true, the value will never be committed.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ValidateServerNameGrid'
            component={ValidateServerNameGrid}
            source={ValidateServerNameGridSource}
            noScrollbar
            description='Server-side validation works like client-side validation. The only difference is that when preProcessEditCellProps is called, a promise must be returned. Once the value is validated in the server, that promise should be resolved with a new object containing the error attribute set to true or false. The grid will wait for the promise to be resolved before exiting the edit mode.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='RenderRatingEditCellGrid'
            component={RenderRatingEditCellGrid}
            source={RenderRatingEditCellGridSource}
            noScrollbar
            description='To customize the edit component of a column, use the renderEditCell attribute available in the GridColDef.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='StartEditButtonGrid'
            component={StartEditButtonGrid}
            source={StartEditButtonGridSource}
            noScrollbar
            description='You can override the default start editing triggers using the event.defaultMuiPrevented on the synthetic React events.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='CatchEditingEventsGrid'
            component={CatchEditingEventsGrid}
            source={CatchEditingEventsGridSource}
            noScrollbar
            description='Catching events can be used to add a callback after an event while ignoring its triggers.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='BasicRowEditingGrid'
            component={BasicRowEditingGrid}
            source={BasicRowEditingGridSource}
            noScrollbar
            description='Row editing allows to edit all the cells of a row at once. It is based on the cell editing, thus most of the features are also supported. To enable it, change the edit mode to "row" using the editMode prop, then set to true the editable property in the GridColDef object of those columns that should be editable.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='RowEditControlGrid'
            component={RowEditControlGrid}
            source={RowEditControlGridSource}
            noScrollbar
            description='The editRowsModel prop lets you control the editing state. You can handle the onEditRowsModelChange callback to control the GridEditRowsModel state.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ConditionalValidationGrid'
            component={ConditionalValidationGrid}
            source={ConditionalValidationGridSource}
            noScrollbar
            description='Having all cells of a row in edit mode allows validating a field based on the value of another one. To accomplish that, start by adding the preProcessEditCellProps as explained in the cell editing. When the callback is called, use the API to check the value of the other field and decide if the current value is valid or not. Return a new object contaning params.props and the error attribute with the validation status. Once at the least one field has the error attribute equals to true no new value will be committed.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Editing;
