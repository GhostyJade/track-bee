import React from 'react';
import SimpleFunnel from './Components/SimpleFunnel';
import SimpleFunnelSource from '!raw-loader!./Components/SimpleFunnel';
import Grid from '@mui/material/Grid';

import AppComponentCard from '@crema/core/AppComponentCard';
import AppComponentHeader from '@crema/core/AppComponentHeader';
import AppGridContainer from '@crema/core/AppGridContainer';

const Treemap = () => {
  return (
    <>
      <AppComponentHeader
        title='Funnel Chart'
        refUrl='http://recharts.org/en-US/api/FunnelChart/'
      />

      <AppGridContainer>
        <Grid item xs={12} lg={12}>
          <AppComponentCard
            title='Simple FunnelChart'
            component={SimpleFunnel}
            source={SimpleFunnelSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Treemap;
