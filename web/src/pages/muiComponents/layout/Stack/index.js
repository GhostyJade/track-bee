import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';

import BasicStack from './BasicStack';
import BasicStackSource from '!raw-loader!./BasicStack';

import DirectionStack from './DirectionStack';
import DirectionStackSource from '!raw-loader!./DirectionStack';

import DividerStack from './DividerStack';
import DividerStackSource from '!raw-loader!./DividerStack';

import ResponsiveStack from './ResponsiveStack';
import ResponsiveStackSource from '!raw-loader!./ResponsiveStack';

const Stack = () => {
  return (
    <>
      <AppComponentHeader
        title='Stack'
        description='The Stack component manages layout of immediate children along the vertical or horizontal axis with optional spacing and/or dividers between each child.'
        refUrl='https://mui.com/components/stack/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic Stack'
            component={BasicStack}
            source={BasicStackSource}
            description='Stack is concerned with one-dimensional layouts, while Grid that handles two-dimensional layouts. The default direction is column which stacks children vertically.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Direction Stack '
            component={DirectionStack}
            source={DirectionStackSource}
            noScrollbar
            description='By default, Stack arranges items vertically in a column. However, the direction prop can be used to position items horizontally in a row as well.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Divider Stack '
            component={DividerStack}
            source={DividerStackSource}
            noScrollbar
            description='Use the divider prop to insert an element between each child. This works particularly well with the Divider component.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Responsive Stack '
            component={ResponsiveStack}
            source={ResponsiveStackSource}
            noScrollbar
            description='You can switch the direction or spacing values based on the active breakpoint.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Stack;
