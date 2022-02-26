import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import SimpleAccordion from './SimpleAccordion';
import SimpleAccordionSource from '!raw-loader!./SimpleAccordion';

import ControlledAccordions from './ControlledAccordions';
import ControlledAccordionsSource from '!raw-loader!./ControlledAccordions';

import CustomizedAccordions from './CustomizedAccordions';
import CustomizedAccordionsSource from '!raw-loader!./CustomizedAccordions';

const Accordion = () => {
  return (
    <>
      <AppComponentHeader
        title='Accordion'
        description='Accordions contain creation flows and allow lightweight editing of an element'
        refUrl='https://mui.com/components/accordion/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Controlled Accordions'
            component={ControlledAccordions}
            source={ControlledAccordionsSource}
            noScrollbar
            description='Extend the default behavior to create an accordion with the Accordion component.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Customized Accordions'
            component={CustomizedAccordions}
            source={CustomizedAccordionsSource}
            noScrollbar
            description='Here is an example of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Basic accordion'
            component={SimpleAccordion}
            source={SimpleAccordionSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Accordion;
