import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import CircularIndeterminate from './CircularIndeterminate';
import CircularIndeterminateSource from '!raw-loader!./CircularIndeterminate';

import CircularColor from './CircularColor';
import CircularColorSource from '!raw-loader!./CircularColor';

import CircularDeterminate from './CircularDeterminate';
import CircularDeterminateSource from '!raw-loader!./CircularDeterminate';

import CircularIntegration from './CircularIntegration';
import CircularIntegrationSource from '!raw-loader!./CircularIntegration';

import CircularStatic from './CircularStatic';
import CircularStaticSource from '!raw-loader!./CircularStatic';

import LinearIndeterminate from './LinearIndeterminate';
import LinearIndeterminateSource from '!raw-loader!./LinearIndeterminate';

import LinearColor from './LinearColor';
import LinearColorSource from '!raw-loader!./LinearColor';

import LinearDeterminate from './LinearDeterminate';
import LinearDeterminateSource from '!raw-loader!./LinearDeterminate';

import LinearBuffer from './LinearBuffer';
import LinearBufferSource from '!raw-loader!./LinearBuffer';

import LinearWithValueLabel from './LinearWithValueLabel';
import LinearWithValueLabelSource from '!raw-loader!./LinearWithValueLabel';

import CustomizedProgressBars from './CustomizedProgressBars';
import CustomizedProgressBarsSource from '!raw-loader!./CustomizedProgressBars';

import DelayingAppearance from './DelayingAppearance';
import DelayingAppearanceSource from '!raw-loader!./DelayingAppearance';

import CircularUnderLoad from './CircularUnderLoad';
import CircularUnderLoadSource from '!raw-loader!./CircularUnderLoad';

const Progress = () => {
  return (
    <>
      <AppComponentHeader
        title='Progress'
        description='Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process'
        refUrl='https://mui.com/components/progress/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Circular indeterminate'
            component={CircularIndeterminate}
            source={CircularIndeterminateSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Circular Color'
            component={CircularColor}
            source={CircularColorSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Circular Determinate'
            component={CircularDeterminate}
            source={CircularDeterminateSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Circular Static'
            component={CircularStatic}
            source={CircularStaticSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Linear Indeterminate'
            component={LinearIndeterminate}
            source={LinearIndeterminateSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Linear Determinate'
            component={LinearDeterminate}
            source={LinearDeterminateSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Linear Buffer'
            component={LinearBuffer}
            source={LinearBufferSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Linear With Value Label'
            component={LinearWithValueLabel}
            source={LinearWithValueLabelSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Linear Color'
            component={LinearColor}
            source={LinearColorSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Circular Under Load'
            component={CircularUnderLoad}
            source={CircularUnderLoadSource}
            noScrollbar
            description='When its not possible, you can leverage the disableShrink prop to mitigate the issue. See this issue. '
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='CustomizedProgressBars'
            component={CustomizedProgressBars}
            source={CustomizedProgressBarsSource}
            noScrollbar
            description='Here are some examples of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Circular Integration'
            component={CircularIntegration}
            source={CircularIntegrationSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='DelayingAppearance'
            component={DelayingAppearance}
            source={DelayingAppearanceSource}
            noScrollbar
            description='There are 3 important limits to know around response time. The ripple effect of the ButtonBase component ensures that the user feels that the system is reacting instantaneously. Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second. After 1.0 second, you can display a loader to keep users flow of thought uninterrupted.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Progress;
