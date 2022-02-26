import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import BasicTable from './BasicTable';
import BasicTableSource from '!raw-loader!./BasicTable';

import DataTable from './DataTable';
import DataTableSource from '!raw-loader!./DataTable';

import DenseTable from './DenseTable';
import DenseTableSource from '!raw-loader!./DenseTable';

import EnhancedTable from './EnhancedTable';
import EnhancedTableSource from '!raw-loader!./EnhancedTable';

import ColumnGrouping from './ColumnGrouping';
import ColumnGroupingSource from '!raw-loader!./ColumnGrouping';

import CustomPaginationActionsTable from './Custompaginationactions';
import CustomPaginationActionsTableSource from '!raw-loader!./Custompaginationactions';

import StickyHeadTable from './StickyHeadTable';
import StickyHeadTableSource from '!raw-loader!./StickyHeadTable';

import ColumnGroupingTable from './ColumnGroupingTable';
import ColumnGroupingTableSource from '!raw-loader!./ColumnGroupingTable';

import CollapsibleTable from './CollapsibleTable';
import CollapsibleTableSource from '!raw-loader!./CollapsibleTable';

import SpanningTable from './SpanningTable';
import SpanningTableSource from '!raw-loader!./SpanningTable';

import AcccessibleTable from './AcccessibleTable';
import AcccessibleTableSource from '!raw-loader!./AcccessibleTable';

const Table = () => {
  return (
    <>
      <AppComponentHeader
        title='Table'
        description='Tables display sets of data. They can be fully customized.'
        refUrl='https://mui.com/components/tables/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Basic table'
            component={BasicTable}
            source={BasicTableSource}
            noScrollbar
            description='A simple example with no frills.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Data Table'
            component={DataTable}
            source={DataTableSource}
            noScrollbar
            description='The Table component has a close mapping to the native <table> elements. This constraint makes building rich data tables challenging.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Dense Table'
            component={DenseTable}
            source={DenseTableSource}
            noScrollbar
            description='A simple example of a dense table with no frills.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Enhanced Table'
            component={EnhancedTable}
            source={EnhancedTableSource}
            noScrollbar
            description='This example demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar. It uses the TableSortLabel component to help style column headings.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ColumnGrouping'
            component={ColumnGrouping}
            source={ColumnGroupingSource}
            noScrollbar
            description='You can group column headers by rendering multiple table rows inside a table head:'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='CustomPaginationActionsTable'
            component={CustomPaginationActionsTable}
            source={CustomPaginationActionsTableSource}
            noScrollbar
            description='The ActionsComponent prop of the TablePagination component allows the implementation of custom actions.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Sticky Head Table'
            component={StickyHeadTable}
            source={StickyHeadTableSource}
            noScrollbar
            description='Here is an example of a table with scrollable rows and fixed column headers. It leverages the stickyHeader prop.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Column Grouping Table'
            component={ColumnGroupingTable}
            source={ColumnGroupingTableSource}
            noScrollbar
            description='You can group column headers by rendering multiple table rows inside a table head:'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='CollapsibleTable'
            component={CollapsibleTable}
            source={CollapsibleTableSource}
            noScrollbar
            description='An example of a table with expandable rows, revealing more information. It utilizes the Collapse component.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Spanning Table'
            component={SpanningTable}
            source={SpanningTableSource}
            noScrollbar
            description='A simple example with spanning rows & columns.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Acccessible Table'
            component={AcccessibleTable}
            source={AcccessibleTableSource}
            noScrollbar
            description='A caption functions like a heading for a table. Most screen readers announce the content of captions. Captions help users to find a table and understand what its about and decide if they want to read it.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Table;
