import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import ButtonAppBar from './ButtonAppBar';
import ButtonAppBarSource from '!raw-loader!./ButtonAppBar';

import MenuAppBar from './MenuAppBar';
import MenuAppBarSource from '!raw-loader!./MenuAppBar';

import ResponsiveAppBar from './ResponsiveAppBar';
import ResponsiveAppBarSource from '!raw-loader!./ResponsiveAppBar';

import SearchAppBar from './SearchAppBar';
import SearchAppBarSource from '!raw-loader!./SearchAppBar';

import PrimarySearchAppBar from './PrimarySearchAppBar';
import PrimarySearchAppBarSource from '!raw-loader!./PrimarySearchAppBar';

import DenseAppBar from './DenseAppBar';
import DenseAppBarSource from '!raw-loader!./DenseAppBar';

import ProminentAppBar from './ProminentAppBar';
import ProminentAppBarSource from '!raw-loader!./ProminentAppBar';

import BottomAppBar from './BottomAppBar';
import BottomAppBarSource from '!raw-loader!./BottomAppBar';

import HideAppBar from './HideAppBar';
import HideAppBarSource from '!raw-loader!./HideAppBar';

import ElevateAppBar from './ElevateAppBar';
import ElevateAppBarSource from '!raw-loader!./ElevateAppBar';

import BackToTop from './BackToTop';
import BackToTopSource from '!raw-loader!./BackToTop';

import EnableColorOnDarkAppBar from './EnableColorOnDarkAppBar';
import EnableColorOnDarkAppBarSource from '!raw-loader!./EnableColorOnDarkAppBar';

const AppBar = () => {
  return (
    <>
      <AppComponentHeader
        title='AppBar'
        description='The App Bar displays information and actions relating to the current screen.'
        refUrl='https://mui.com/components/app-bar/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic App Bar'
            component={ButtonAppBar}
            source={ButtonAppBarSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ResponsiveAppBar'
            component={ResponsiveAppBar}
            source={ResponsiveAppBarSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Search App Bar'
            component={SearchAppBar}
            source={SearchAppBarSource}
            noScrollbar
            description='A side searchbar.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Primary Search App Bar'
            component={PrimarySearchAppBar}
            source={PrimarySearchAppBarSource}
            noScrollbar
            description='A primary searchbar.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Menu App Bar'
            component={MenuAppBar}
            source={MenuAppBarSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Dense App Bar'
            component={DenseAppBar}
            source={DenseAppBarSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Prominent App Bar'
            component={ProminentAppBar}
            source={ProminentAppBarSource}
            noScrollbar
            description='A prominent app bar.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Enable Color On Dark App Bar '
            component={EnableColorOnDarkAppBar}
            source={EnableColorOnDarkAppBarSource}
            noScrollbar
            description='Following the Material Design guidelines, the color prop has no effect on the appearance of the app bar in dark mode. You can override this behavior by setting the enableColorOnDark prop to true.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Bottom App Bar'
            component={BottomAppBar}
            source={BottomAppBarSource}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Hide App Bar '
            component={HideAppBar}
            source={HideAppBarSource}
            description='The app bar hides on scroll down to leave more space for reading.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Elevate App Bar '
            component={ElevateAppBar}
            source={ElevateAppBarSource}
            description='The app bar elevates on scroll to communicate that the user is not at the top of the page.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Back To Top '
            component={BackToTop}
            source={BackToTopSource}
            description='A floating action buttons appears on scroll to make it easy to get back to the top of the page.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default AppBar;
