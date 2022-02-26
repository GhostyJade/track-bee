import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import TemporaryDrawer from './TemporaryDrawer';
import TemporaryDrawerSource from '!raw-loader!./TemporaryDrawer';

import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import SwipeableTemporaryDrawerSource from '!raw-loader!./SwipeableTemporaryDrawer';

import SwipeableEdgeDrawer from './SwipeableEdgeDrawer';
import SwipeableEdgeDrawerSource from '!raw-loader!./SwipeableEdgeDrawer';

import ResponsiveDrawer from './ResponsiveDrawer';
import ResponsiveDrawerSource from '!raw-loader!./ResponsiveDrawer';

import PersistentDrawerLeft from './PersistentDrawerLeft';
import PersistentDrawerLeftSource from '!raw-loader!./PersistentDrawerLeft';

import PersistentDrawerRight from './PersistentDrawerRight';
import PersistentDrawerRightSource from '!raw-loader!./PersistentDrawerRight';

import MiniDrawer from './MiniDrawer';
import MiniDrawerSource from '!raw-loader!./MiniDrawer';

import PermanentDrawerLeft from './PermanentDrawerLeft';
import PermanentDrawerLeftSource from '!raw-loader!./PermanentDrawerLeft';

import PermanentDrawerRight from './PermanentDrawerRight';
import PermanentDrawerRightSource from '!raw-loader!./PermanentDrawerRight';

import ClippedDrawer from './ClippedDrawer';
import ClippedDrawerSource from '!raw-loader!./ClippedDrawer';

const BottomNavigation = () => {
  return (
    <>
      <AppComponentHeader
        title='Drawer'
        description='Navigation drawers provide access to destinations in your app. Side sheets are surfaces containing supplementary content that are anchored to the left or right edge of the screen.'
        refUrl='https://mui.com/components/drawers/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Temporary drawer'
            component={TemporaryDrawer}
            source={TemporaryDrawerSource}
            noScrollbar
            description='Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Swipeable Temporary Drawer'
            component={SwipeableTemporaryDrawer}
            source={SwipeableTemporaryDrawerSource}
            noScrollbar
            description='This component comes with a 2 kB gzipped payload overhead. Some low-end mobile devices wo not be able to follow the fingers at 60 FPS. You can use the disableBackdropTransition prop to help. '
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Swipeable Edge Drawer'
            component={SwipeableEdgeDrawer}
            source={SwipeableEdgeDrawerSource}
            noScrollbar
            description='You can configure the SwipeableDrawer to have a visible edge when closed.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Responsive Drawer'
            component={ResponsiveDrawer}
            source={ResponsiveDrawerSource}
            description='You can use the temporary variant to display a drawer for small screens and permanent for a drawer for wider screens.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Persistent Drawer Left'
            component={PersistentDrawerLeft}
            source={PersistentDrawerLeftSource}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Persistent Drawer Right'
            component={PersistentDrawerRight}
            source={PersistentDrawerRightSource}
            description='Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Mini Drawer'
            component={MiniDrawer}
            source={MiniDrawerSource}
            description='The mini variant is recommended for apps sections that need quick selection access alongside content.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Permanent Drawer Left'
            component={PermanentDrawerLeft}
            source={PermanentDrawerLeftSource}
            description='Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Permanent Drawer Right'
            component={PermanentDrawerRight}
            source={PermanentDrawerRightSource}
            description='Apps focused on information consumption that use a left-to-right hierarchy.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Clipped Drawer'
            component={ClippedDrawer}
            source={ClippedDrawerSource}
            description='Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens temporarily above all other content until a section is selected.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default BottomNavigation;
