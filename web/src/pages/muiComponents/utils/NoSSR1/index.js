import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import SimpleNoSsr from './SimpleNoSsr';
import SimpleNoSsrSource from '!raw-loader!./SimpleNoSsr';

import FrameDeferring from './FrameDeferring';
import FrameDeferringSource from '!raw-loader!./FrameDeferring';

const NoSSR1 = () => {
  return (
    <>
      <AppComponentHeader
        title='NoSSR1'
        description='NoSsr purposely removes components from the subject of Server Side Rendering (SSR).'
        refUrl='https://mui.com/components/no-ssr/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Simple No Ssr'
            component={SimpleNoSsr}
            source={SimpleNoSsrSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FrameDeferring'
            component={FrameDeferring}
            source={FrameDeferringSource}
            noScrollbar
            description='At its core, the NoSsr components purpose is to defer rendering. As its illustrated in the previous demo, you can use it to defer the rendering from the server to the client.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default NoSSR1;
