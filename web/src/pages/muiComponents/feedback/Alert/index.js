import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import BasicAlerts from './BasicAlerts';
import BasicAlertsSource from '!raw-loader!./BasicAlerts';

import DescriptionAlerts from './DescriptionAlerts';
import DescriptionAlertsSource from '!raw-loader!./DescriptionAlerts';

import ActionAlerts from './ActionAlerts';
import ActionAlertsSource from '!raw-loader!./ActionAlerts';

import TransitionAlerts from './TransitionAlerts';
import TransitionAlertsSource from '!raw-loader!./TransitionAlerts';

import IconAlerts from './IconAlerts';
import IconAlertsSource from '!raw-loader!./IconAlerts';

import Variants from './Variants';
import VariantsSource from '!raw-loader!./Variants';

import Filled from './Filled';
import FilledSource from '!raw-loader!./Filled';

import ColorAlerts from './ColorAlerts';
import ColorAlertsSource from '!raw-loader!./ColorAlerts';

const Alert = () => {
  return (
    <>
      <AppComponentHeader
        title='Alert'
        description='An alert displays a short, important message in a way that attracts the users attention without interrupting the users task.'
        refUrl='https://mui.com/components/alert/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic alerts'
            component={BasicAlerts}
            source={BasicAlertsSource}
            noScrollbar
            description='The alert offers four severity levels that set a distinctive icon and color.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Variants'
            component={Variants}
            source={VariantsSource}
            noScrollbar
            description='Two additional variants are available – outlined, and filled:'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ActionAlerts'
            component={ActionAlerts}
            source={ActionAlertsSource}
            noScrollbar
            description='An alert can have an action, such as a close or undo button. It is rendered after the message, at the end of the alert.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='TransitionAlerts'
            component={TransitionAlerts}
            source={TransitionAlertsSource}
            noScrollbar
            description='You can use a transition component such as Collapse to transition the appearance of the alert.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Icon Alerts'
            component={IconAlerts}
            source={IconAlertsSource}
            noScrollbar
            description='The icon prop allows you to add an icon to the beginning of the alert component. This will override the default icon for the specified severity.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Color Alerts'
            component={ColorAlerts}
            source={ColorAlertsSource}
            noScrollbar
            description='The color prop will override the default color for the specified severity.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Filled'
            component={Filled}
            source={FilledSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='DescriptionAlerts'
            component={DescriptionAlerts}
            source={DescriptionAlertsSource}
            noScrollbar
            description='You can use the AlertTitle component to display a formatted title above the content.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Alert;
