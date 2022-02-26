import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import SubscribeToEvents from './SubscribeToEvents';
import SubscribeToEventsSource from '!raw-loader!./SubscribeToEvents';

import DoubleClickWithCtrlToEdit from './DoubleClickWithCtrlToEdit';
import DoubleClickWithCtrlToEditSource from '!raw-loader!./DoubleClickWithCtrlToEdit';

const Events = () => {
  return (
    <>
      <AppComponentHeader
        title='Events'
        description='The data grid emits events that can be subscribed to attach custom behavior.'
        refUrl='https://mui.com/components/data-grid/events/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='SubscribeToEvents'
            component={SubscribeToEvents}
            source={SubscribeToEventsSource}
            noScrollbar
            description='The following demo shows how to subscribe to the columnResize event. Try it by resizing the columns.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='DoubleClickWithCtrlToEdit'
            component={DoubleClickWithCtrlToEdit}
            source={DoubleClickWithCtrlToEditSource}
            noScrollbar
            description='Usually, double clicking a cell will put it into edit mode. The following example changes this behavior by also requiring CTRL to be pressed.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Events;
