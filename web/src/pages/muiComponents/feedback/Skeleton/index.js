import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import Variants from './Variants';
import VariantsSource from '!raw-loader!./Variants';

import Animations from './Animations';
import AnimationsSource from '!raw-loader!./Animations';

import YouTube from './YouTube';
import YouTubeSource from '!raw-loader!./YouTube';

import Facebook from './Facebook';
import FacebookSource from '!raw-loader!./Facebook';

import SkeletonTypography from './SkeletonTypography';
import SkeletonTypographySource from '!raw-loader!./SkeletonTypography';

import SkeletonChildren from './SkeletonChildren';
import SkeletonChildrenSource from '!raw-loader!./SkeletonChildren';

import SkeletonColor from './SkeletonColor';
import SkeletonColorSource from '!raw-loader!./SkeletonColor';

const Skeleton = () => {
  return (
    <>
      <AppComponentHeader
        title='Skeleton'
        description='Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration'
        refUrl='https://mui.com/components/skeleton//'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Variants'
            component={Variants}
            source={VariantsSource}
            noScrollbar
            description='The component supports 3 shape variants.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Skeleton Color'
            component={SkeletonColor}
            source={SkeletonColorSource}
            noScrollbar
            description='The color of the component can be customized by changing its background-color CSS property. This is especially useful when on a black background (as the skeleton will otherwise be invisible).'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Animations'
            component={Animations}
            source={AnimationsSource}
            noScrollbar
            description='By default, the skeleton pulsates, but you can change the animation to a wave or disable it entirely.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Skeleton Typography'
            component={SkeletonTypography}
            source={SkeletonTypographySource}
            noScrollbar
            description='In addition to accepting width and height props, the component can also infer the dimensions.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='YouTube'
            component={YouTube}
            source={YouTubeSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Skeleton Children'
            component={SkeletonChildren}
            source={SkeletonChildrenSource}
            noScrollbar
            description='But when it comes to other components, you may not want to repeat the width and height. In these instances, you can pass children and it will infer its width and height from them.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Facebook'
            component={Facebook}
            source={FacebookSource}
            noScrollbar
            description='The component supports 3 shape variants.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Skeleton;
