import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import ExportSelectorGrid from './ExportSelectorGrid';
import ExportSelectorGridSource from '!raw-loader!./ExportSelectorGrid';

import ExportSelectorGridPrint from './ExportSelectorGridPrint';
import ExportSelectorGridPrintSource from '!raw-loader!./ExportSelectorGridPrint';

const Export = () => {
  return (
    <>
      <AppComponentHeader
        title='Export'
        description='Easily export the rows in various file formats such as CSV, Excel, or PDF.'
        refUrl='https://mui.com/components/data-grid/export/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='ExportSelectorGrid'
            component={ExportSelectorGrid}
            source={ExportSelectorGridSource}
            noScrollbar
            description='The DataGrid allows the data to be exported to CSV by composing a toolbar with the GridToolbarExport component. Use the components prop to assign the custom toolbar.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='ExportSelectorGridPrint'
            component={ExportSelectorGridPrint}
            source={ExportSelectorGridPrintSource}
            noScrollbar
            description='The DataGrid provides the ability to optimize the layout of the grid for print mode. It can also be used to export to PDF. You can print the grid by composing a toolbar with the GridToolbarExport component. Use the components prop to assign the custom toolbar.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Export;
