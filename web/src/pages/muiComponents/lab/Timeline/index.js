import React from 'react';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppGridContainer from '@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/core/AppComponentCard';

import BasicTimeline from './BasicTimeline';
import BasicTimelineSource from '!raw-loader!./BasicTimeline';

import LeftPositionedTimeline from './LeftPositionedTimeline';
import LeftPositionedTimelineSource from '!raw-loader!./LeftPositionedTimeline';

import ColorsTimeline from './ColorsTimeline';
import ColorsTimelineSource from '!raw-loader!./ColorsTimeline';

import OutlinedTimeline from './OutlinedTimeline';
import OutlinedTimelineSource from '!raw-loader!./OutlinedTimeline';

import OppositeContentTimeline from './OppositeContentTimeline';
import OppositeContentTimelineSource from '!raw-loader!./OppositeContentTimeline';

import CustomizedTimeline from './CustomizedTimeline';
import CustomizedTimelineSource from '!raw-loader!./CustomizedTimeline';

const Timeline = () => {
  return (
    <>
      <AppComponentHeader
        title='Timeline'
        description='The timeline displays a list of events in chronological order.'
        refUrl='https://mui.com/components/timeline/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='BasicTimeline'
            component={BasicTimeline}
            source={BasicTimelineSource}
            noScrollbar
            description='A basic timeline showing list of events'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ColorsTimeline'
            component={ColorsTimeline}
            source={ColorsTimelineSource}
            noScrollbar
            description='The TimelineDot can appear in different colors from theme palette.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='LeftPositionedTimeline'
            component={LeftPositionedTimeline}
            source={LeftPositionedTimelineSource}
            noScrollbar
            description='The main content of the timeline can be positioned on the left side relative to the time axis.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='OutlinedTimeline'
            component={OutlinedTimeline}
            source={OutlinedTimelineSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='OppositeContentTimeline'
            component={OppositeContentTimeline}
            source={OppositeContentTimelineSource}
            noScrollbar
            description='The timeline can display content on opposite sides.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='CustomizedTimeline'
            component={CustomizedTimeline}
            source={CustomizedTimelineSource}
            noScrollbar
            description='Here is an example of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Timeline;
