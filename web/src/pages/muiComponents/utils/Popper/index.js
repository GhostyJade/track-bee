import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import SimplePopper from './SimplePopper';
import SimplePopperSource from '!raw-loader!./SimplePopper';

import TransitionsPopper from './TransitionsPopper';
import TransitionsPopperSource from '!raw-loader!./TransitionsPopper';

import PositionedPopper from './PositionedPopper';
import PositionedPopperSource from '!raw-loader!./PositionedPopper';

import VirtualElementPopper from './VirtualElementPopper';
import VirtualElementPopperSource from '!raw-loader!./VirtualElementPopper';

const Popper = () => {
  return (
    <>
      <AppComponentHeader
        title='Popper'
        description='A Popper can be used to display some content on top of another. Its an alternative to react-popper.'
        refUrl='https://mui.com/components/popper/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Simple Popper'
            component={SimplePopper}
            source={SimplePopperSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Transitions Popper'
            component={TransitionsPopper}
            source={TransitionsPopperSource}
            noScrollbar
            description='Popper has built-in support for react-transition-group.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Positioned Popper'
            component={PositionedPopper}
            source={PositionedPopperSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Virtual Element Popper'
            component={VirtualElementPopper}
            source={VirtualElementPopperSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Popper;
