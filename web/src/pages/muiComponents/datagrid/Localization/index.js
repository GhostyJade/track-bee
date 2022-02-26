import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import CustomLocaleTextGrid from './CustomLocaleTextGrid';
import CustomLocaleTextGridSource from '!raw-loader!./CustomLocaleTextGrid';

const Localization = () => {
  return (
    <>
      <AppComponentHeader
        title='Localization'
        description='The Data Grid allows to support users from different locales, with formatting, RTL, and localized strings.'
        refUrl='https://mui.com/components/data-grid/localization/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Locale Text Grid'
            component={CustomLocaleTextGrid}
            source={CustomLocaleTextGridSource}
            noScrollbar
            description='You can use the localeText prop to pass in your own text and translations. You can find all the translation keys supported in the source in the GitHub repository. In the following example, the labels of the density selector are customized.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Localization;
