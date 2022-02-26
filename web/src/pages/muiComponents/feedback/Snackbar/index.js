import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import SimpleSnackbar from './SimpleSnackbar';
import SimpleSnackbarSource from '!raw-loader!./SimpleSnackbar';

import CustomizedSnackbars from './CustomizedSnackbars';
import CustomizedSnackbarsSource from '!raw-loader!./CustomizedSnackbars';

import PositionedSnackbar from './PositionedSnackbar';
import PositionedSnackbarSource from '!raw-loader!./PositionedSnackbar';

import LongTextSnackbar from './LongTextSnackbar';
import LongTextSnackbarSource from '!raw-loader!./LongTextSnackbar';

import ConsecutiveSnackbars from './ConsecutiveSnackbars';
import ConsecutiveSnackbarsSource from '!raw-loader!./ConsecutiveSnackbars';

import FabIntegrationSnackbar from './FabIntegrationSnackbar';
import FabIntegrationSnackbarSource from '!raw-loader!./FabIntegrationSnackbar';

import TransitionsSnackbar from './TransitionsSnackbar';
import TransitionsSnackbarSource from '!raw-loader!./TransitionsSnackbar';

import DirectionSnackbar from './DirectionSnackbar';
import DirectionSnackbarSource from '!raw-loader!./DirectionSnackbar';

const Snackbar = () => {
  return (
    <>
      <AppComponentHeader
        title='Snackbar'
        description='Snackbars provide brief notifications. The component is also known as a toast.'
        refUrl='https://mui.com/components/snackbars/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Simple Snackbar'
            component={SimpleSnackbar}
            source={SimpleSnackbarSource}
            noScrollbar
            description='A basic snackbar that aims to reproduce Google Keeps snackbar behavior.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Consecutive Snackbars'
            component={ConsecutiveSnackbars}
            source={ConsecutiveSnackbarsSource}
            noScrollbar
            description='When multiple snackbar updates are necessary, they should appear one at a time.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized Snackbars'
            component={CustomizedSnackbars}
            source={CustomizedSnackbarsSource}
            noScrollbar
            description='Here are some examples of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Long Text Snackbar'
            component={LongTextSnackbar}
            source={LongTextSnackbarSource}
            noScrollbar
            description='Some snackbars with varying message length.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Positioned Snackbar'
            component={PositionedSnackbar}
            source={PositionedSnackbarSource}
            noScrollbar
            description='In wide layouts, snackbars can be left-aligned or center-aligned if they are consistently placed on the same spot at the bottom of the screen, however there may be circumstances where the placement of the snackbar needs to be more flexible. You can control the position of the snackbar by specifying the anchorOrigin prop.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FabIntegration Snackbar'
            component={FabIntegrationSnackbar}
            source={FabIntegrationSnackbarSource}
            noScrollbar
            description='Snackbars should appear above FABs (on mobile).'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Transitions Snackbar'
            component={TransitionsSnackbar}
            source={TransitionsSnackbarSource}
            noScrollbar
            description='Grow is the default transition but you can use a different one.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Direction Snackbar'
            component={DirectionSnackbar}
            source={DirectionSnackbarSource}
            noScrollbar
            description='You can change the direction of the Slide transition.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Snackbar;
