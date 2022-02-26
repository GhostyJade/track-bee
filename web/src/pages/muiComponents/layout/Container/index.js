import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';

import SimpleContainer from './SimpleContainer';
import SimpleContainerSource from '!raw-loader!./SimpleContainer';

import FixedContainer from './FixedContainer';
import FixedContainerSource from '!raw-loader!./FixedContainer';

const Container = () => {
  return (
    <>
      <AppComponentHeader
        title='Container'
        description='The container centers your content horizontally. Its the most basic layout element.'
        refUrl='https://mui.com/components/container/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='SimpleContainer'
            component={SimpleContainer}
            source={SimpleContainerSource}
            description='A fluid container width is bounded by the maxWidth prop value.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FixedContainer'
            component={FixedContainer}
            source={FixedContainerSource}
            description='If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the fixed prop. The max-width matches the min-width of the current breakpoint.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Container;
