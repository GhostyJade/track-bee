import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppGridContainer from '@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/core/AppComponentCard';

import BasicTrapFocus from './BasicTrapFocus';
import BasicTrapFocusSource from '!raw-loader!./BasicTrapFocus';

import DisableEnforceFocus from './DisableEnforceFocus';
import DisableEnforceFocusSource from '!raw-loader!./DisableEnforceFocus';

import LazyTrapFocus from './LazyTrapFocus';
import LazyTrapFocusSource from '!raw-loader!./LazyTrapFocus';

import PortalTrapFocus from './PortalTrapFocus';
import PortalTrapFocusSource from '!raw-loader!./PortalTrapFocus';

const TrapFocus = () => {
  return (
    <>
      <AppComponentHeader
        title='TrapFocus'
        description='The timeline displays a list of events in chronological order.'
        refUrl='https://mui.com/components/timeline/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='BasicTrapFocus'
            component={BasicTrapFocus}
            source={BasicTrapFocusSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='DisableEnforceFocus'
            component={DisableEnforceFocus}
            source={DisableEnforceFocusSource}
            noScrollbar
            description='You can disable this behavior with the disableEnforceFocus prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='LazyTrapFocus'
            component={LazyTrapFocus}
            source={LazyTrapFocusSource}
            noScrollbar
            description='You can disable this behavior and make it lazy with the disableAutoFocus prop. When auto focus is disabled, as in the demo below, the component only traps the focus once it gets focused.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='PortalTrapFocus'
            component={PortalTrapFocus}
            source={PortalTrapFocusSource}
            noScrollbar
            description='The following demo uses the Portal component to render a subset of the trap focus children into a new "subtree" outside of the current DOM hierarchy; so that they no longer form part of the focus loop.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default TrapFocus;
