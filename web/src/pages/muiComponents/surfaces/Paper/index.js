import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import SimplePaper from './SimplePaper';
import SimplePaperSource from '!raw-loader!./SimplePaper';

import Variants from './Variants';
import VariantsSource from '!raw-loader!./Variants';

import Elevation from './Elevation';
import ElevationSource from '!raw-loader!./Elevation';

const Paper = () => {
  return (
    <>
      <AppComponentHeader
        title='Paper'
        description='In Material Design, the physical properties of paper are translated to the screen.'
        refUrl='https://mui.com/components/paper/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic paper'
            component={SimplePaper}
            source={SimplePaperSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Variants'
            component={Variants}
            source={VariantsSource}
            noScrollbar
            description='If you need an outlined surface, use the variant prop.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Elevation'
            component={Elevation}
            source={ElevationSource}
            noScrollbar
            description='The elevation can be used to establish a hierachy between other content. In practical terms, the elevation controls the size of the shadow applied to the surface. In dark mode, raising the elevation also makes the surface lighter.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Paper;
