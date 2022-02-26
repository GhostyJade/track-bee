import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import BasicLinks from './BasicLinks';
import BasicLinksSource from '!raw-loader!./BasicLinks';

import UnderlineLink from './UnderlineLink';
import UnderlineLinkSource from '!raw-loader!./UnderlineLink';

import ButtonLink from './ButtonLink';
import ButtonLinkSource from '!raw-loader!./ButtonLink';

const Links = () => {
  return (
    <>
      <AppComponentHeader
        title='Links'
        description='The Link component allows you to easily customize anchor elements with your theme colors and typography styles.'
        refUrl='https://mui.com/components/links/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic links'
            component={BasicLinks}
            source={BasicLinksSource}
            noScrollbar
            description='The Link component is built on top of the Typography component, meaning that you can use its props.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Under line Link'
            component={UnderlineLink}
            source={UnderlineLinkSource}
            noScrollbar
            description='The underline prop can be used to set the underline behavior. The default is always.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ButtonLink'
            component={ButtonLink}
            source={ButtonLinkSource}
            noScrollbar
            description='If a link does not have a meaningful href, it should be rendered using a <button> element.
          '
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Links;
