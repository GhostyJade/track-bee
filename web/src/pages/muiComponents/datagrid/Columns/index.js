import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import BasicColumnsGrid from './BasicColumnsGrid';
import BasicColumnsGridSource from '!raw-loader!./BasicColumnsGrid';

import HeaderColumnsGrid from './HeaderColumnsGrid';
import HeaderColumnsGridSource from '!raw-loader!./HeaderColumnsGrid';

import ColumnWidthGrid from './ColumnWidthGrid';
import ColumnWidthGridSource from '!raw-loader!./ColumnWidthGrid';

import ColumnMinWidthGrid from './ColumnMinWidthGrid';
import ColumnMinWidthGridSource from '!raw-loader!./ColumnMinWidthGrid';

import ColumnFluidWidthGrid from './ColumnFluidWidthGrid';
import ColumnFluidWidthGridSource from '!raw-loader!./ColumnFluidWidthGrid';

import ColumnSizingGrid from './ColumnSizingGrid';
import ColumnSizingGridSource from '!raw-loader!./ColumnSizingGrid';

import ValueGetterGrid from './ValueGetterGrid';
import ValueGetterGridSource from '!raw-loader!./ValueGetterGrid';

import ValueFormatterGrid from './ValueFormatterGrid';
import ValueFormatterGridSource from '!raw-loader!./ValueFormatterGrid';

import ValueParserGrid from './ValueParserGrid';
import ValueParserGridSource from '!raw-loader!./ValueParserGrid';

import RenderCellGrid from './RenderCellGrid';
import RenderCellGridSource from '!raw-loader!./RenderCellGrid';

import RenderExpandCellGrid from './RenderExpandCellGrid';
import RenderExpandCellGridSource from '!raw-loader!./RenderExpandCellGrid';

import RenderHeaderGrid from './RenderHeaderGrid';
import RenderHeaderGridSource from '!raw-loader!./RenderHeaderGrid';

import ColumnTypesGrid from './ColumnTypesGrid';
import ColumnTypesGridSource from '!raw-loader!./ColumnTypesGrid';

import CustomColumnTypesGrid from './CustomColumnTypesGrid';
import CustomColumnTypesGridSource from '!raw-loader!./CustomColumnTypesGrid';

import ColumnMenuGrid from './ColumnMenuGrid';
import ColumnMenuGridSource from '!raw-loader!./ColumnMenuGrid';

import ColumnSelectorGrid from './ColumnSelectorGrid';
import ColumnSelectorGridSource from '!raw-loader!./ColumnSelectorGrid';

import ColumnOrderingGrid from './ColumnOrderingGrid';
import ColumnOrderingGridSource from '!raw-loader!./ColumnOrderingGrid';

import ColumnOrderingDisabledGrid from './ColumnOrderingDisabledGrid';
import ColumnOrderingDisabledGridSource from '!raw-loader!./ColumnOrderingDisabledGrid';

const Columns = () => {
  return (
    <>
      <AppComponentHeader
        title='Columns'
        description='This section goes in details on the aspects of the columns you need to know.'
        refUrl='https://mui.com/components/data-grid/columns/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Basic Columns Grid'
            component={BasicColumnsGrid}
            source={BasicColumnsGridSource}
            noScrollbar
            description='Grid columns are defined with the columns prop. columns expects an array of objects. The columns should have this type: GridColDef[].'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Header Columns Grid'
            component={HeaderColumnsGrid}
            source={HeaderColumnsGridSource}
            noScrollbar
            description='You can configure the headers with:'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Column Width Grid'
            component={ColumnWidthGrid}
            source={ColumnWidthGridSource}
            noScrollbar
            description='By default, the columns have a width of 100px. This is an arbitrary, easy-to-remember value. To change the width of a column, use the width property available in GridColDef.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnMinWidthGrid'
            component={ColumnMinWidthGrid}
            source={ColumnMinWidthGridSource}
            noScrollbar
            description='By default, the columns have a minimum width of 50px. This is an arbitrary, easy-to-remember value. To change the minimum width of a column, use the minWidth property available in GridColDef.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnFluidWidthGrid'
            component={ColumnFluidWidthGrid}
            source={ColumnFluidWidthGridSource}
            noScrollbar
            description='flex does not work together with width. If you set both flex and width in GridColDef, flex will override width. '
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnSizingGrid'
            component={ColumnSizingGrid}
            source={ColumnSizingGridSource}
            noScrollbar
            description='By default, DataGridPro allows all columns to be resized by dragging the right portion of the column separator.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ValueGetterGrid'
            component={ValueGetterGrid}
            source={ValueGetterGridSource}
            noScrollbar
            description='Sometimes a column might not have a corresponding value, or you might want to render a combination of different fields.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ValueFormatterGrid'
            component={ValueFormatterGrid}
            source={ValueFormatterGridSource}
            noScrollbar
            description='The value formatter allows you to convert the value before displaying it. Common use cases include converting a JavaScript Date object to a date string or a Number into a formatted number (e.g. "1,000.50").'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ValueParserGrid'
            component={ValueParserGrid}
            source={ValueParserGridSource}
            noScrollbar
            description='In the following demo, the tax rate is displayed as a percentage (e.g. 20%) but a decimal number is used as value (e.g. 0.2).'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='RenderCellGrid'
            component={RenderCellGrid}
            source={RenderCellGridSource}
            noScrollbar
            description='The renderCell method of the column definitions is similar to valueFormatter. However, it trades to be able to only render in a cell in exchange for allowing to return a React node (instead of a string).'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='RenderExpandCellGrid'
            component={RenderExpandCellGrid}
            source={RenderExpandCellGridSource}
            noScrollbar
            description='By default, the grid cuts the content of a cell and renders an ellipsis if the content of the cell does not fit in the cell. As a workaround, you can create a cell renderer that will allow seeing the full content of the cell in the grid.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='RenderHeaderGrid'
            component={RenderHeaderGrid}
            source={RenderHeaderGridSource}
            noScrollbar
            description='You can customize the look of each header with the renderHeader method. It takes precedence over the headerName property.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnTypesGrid'
            component={ColumnTypesGrid}
            source={ColumnTypesGridSource}
            noScrollbar
            description='To use most of the column types, you only need to define the type property in your column definition. However, some types require additional properties to be set to make them work correctly:'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='CustomColumnTypesGrid'
            component={CustomColumnTypesGrid}
            source={CustomColumnTypesGridSource}
            noScrollbar
            description='You can extend the native column types with your own by simply spreading the necessary properties.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnMenuGrid'
            component={ColumnMenuGrid}
            source={ColumnMenuGridSource}
            noScrollbar
            description='By default, each column header displays a column menu. The column menu allows actions to be performed in the context of the target column, e.g. filtering. To disable the column menu, set the prop disableColumnMenu={true}.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnSelectorGrid'
            component={ColumnSelectorGrid}
            source={ColumnSelectorGridSource}
            noScrollbar
            description='To enable the the toolbar you need to add Toolbar: GridToolbar to the grid components prop.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnOrderingGrid'
            component={ColumnOrderingGrid}
            source={ColumnOrderingGridSource}
            noScrollbar
            description='By default, DataGridPro allows all column reordering by dragging the header cells and moving them left or right.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnOrderingDisabledGrid'
            component={ColumnOrderingDisabledGrid}
            source={ColumnOrderingDisabledGridSource}
            noScrollbar
            description='To disable reordering in a specific column, set the disableReorder property to true in the GridColDef of the respective column.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Columns;
