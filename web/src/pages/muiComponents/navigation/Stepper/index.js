import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import HorizontalLinearStepper from './HorizontalLinearStepper';
import HorizontalLinearStepperSource from '!raw-loader!./HorizontalLinearStepper';

import HorizontalNonLinearStepper from './HorizontalNonLinearStepper';
import HorizontalNonLinearStepperSource from '!raw-loader!./HorizontalNonLinearStepper';

import HorizontalLabelPositionBelowStepper from './HorizontalLabelPositionBelowStepper';
import HorizontalLabelPositionBelowStepperSource from '!raw-loader!./HorizontalLabelPositionBelowStepper';

import HorizontalStepperWithError from './HorizontalStepperWithError';
import HorizontalStepperWithErrorSource from '!raw-loader!./HorizontalStepperWithError';

import CustomizedSteppers from './CustomizedSteppers';
import CustomizedSteppersSource from '!raw-loader!./CustomizedSteppers';

import VerticalLinearStepper from './VerticalLinearStepper';
import VerticalLinearStepperSource from '!raw-loader!./VerticalLinearStepper';

import TextMobileStepper from './TextMobileStepper';
import TextMobileStepperSource from '!raw-loader!./TextMobileStepper';

import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';
import SwipeableTextMobileStepperSource from '!raw-loader!./SwipeableTextMobileStepper';

import DotsMobileStepper from './DotsMobileStepper';
import DotsMobileStepperSource from '!raw-loader!./DotsMobileStepper';

import ProgressMobileStepper from './ProgressMobileStepper';
import ProgressMobileStepperSource from '!raw-loader!./ProgressMobileStepper';

const Stepper = () => {
  return (
    <>
      <AppComponentHeader
        title='Stepper'
        description='Steppers convey progress through numbered steps. It provides a wizard-like workflow.'
        refUrl='https://mui.com/components/steppers/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Horizontal stepper'
            component={HorizontalLinearStepper}
            source={HorizontalLinearStepperSource}
            noScrollbar
            description='Horizontal steppers are ideal when the contents of one step depend on an earlier step.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='HorizontalNonLinearStepper'
            component={HorizontalNonLinearStepper}
            source={HorizontalNonLinearStepperSource}
            noScrollbar
            description='Non-linear steppers allow the user to enter a multi-step flow at any point.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='HorizontalLabelPositionBelowStepper'
            component={HorizontalLabelPositionBelowStepper}
            source={HorizontalLabelPositionBelowStepperSource}
            noScrollbar
            description='Labels can be placed below the step icon by setting the alternativeLabel prop on the Stepper component.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='HorizontalStepperWithError'
            component={HorizontalStepperWithError}
            source={HorizontalStepperWithErrorSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='CustomizedSteppers'
            component={CustomizedSteppers}
            source={CustomizedSteppersSource}
            noScrollbar
            description='Here is an example of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='VerticalLinearStepper'
            component={VerticalLinearStepper}
            source={VerticalLinearStepperSource}
            noScrollbar
            description='Vertical steppers are designed for narrow screen sizes. They are ideal for mobile. All the features of the horizontal stepper can be implemented.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='TextMobileStepper'
            component={TextMobileStepper}
            source={TextMobileStepperSource}
            noScrollbar
            description='The current step and total number of steps are displayed as text.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='SwipeableTextMobileStepper'
            component={SwipeableTextMobileStepper}
            source={SwipeableTextMobileStepperSource}
            noScrollbar
            description='This demo uses react-swipeable-views to create a carousel.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='DotsMobileStepper'
            component={DotsMobileStepper}
            source={DotsMobileStepperSource}
            noScrollbar
            description='Use dots when the number of steps is small.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ProgressMobileStepper'
            component={ProgressMobileStepper}
            source={ProgressMobileStepperSource}
            noScrollbar
            description='Use a progress bar when there are many steps, or if there are steps that need to be inserted during the process (based on responses to earlier steps).'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Stepper;
