import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';

import BasicGrid from './BasicGrid';
import BasicGridSource from '!raw-loader!./BasicGrid';

import FullWidthGrid from './FullWidthGrid';
import FullWidthGridSource from '!raw-loader!./FullWidthGrid';

import SpacingGrid from './SpacingGrid';
import SpacingGridSource from '!raw-loader!./SpacingGrid';

import RowAndColumnSpacing from './RowAndColumnSpacing';
import RowAndColumnSpacingSource from '!raw-loader!./RowAndColumnSpacing';

import ResponsiveGrid from './ResponsiveGrid';
import ResponsiveGridSource from '!raw-loader!./ResponsiveGrid';

import AutoGrid from './AutoGrid';
import AutoGridSource from '!raw-loader!./AutoGrid';

import VariableWidthGrid from './VariableWidthGrid';
import VariableWidthGridSource from '!raw-loader!./VariableWidthGrid';

import ComplexGrid from './ComplexGrid';
import ComplexGridSource from '!raw-loader!./ComplexGrid';

import FormRow from './FormRow';
import FormRowSource from '!raw-loader!./FormRow';

import ColumnsGrid from './ColumnsGrid';
import ColumnsGridSource from '!raw-loader!./ColumnsGrid';

import AutoGridNoWrap from './AutoGridNoWrap';
import AutoGridNoWrapSource from '!raw-loader!./AutoGridNoWrap';

import CSSGrid from './CSSGrid';
import CSSGridSource from '!raw-loader!./CSSGrid';

const GridLayout = () => {
  return (
    <>
      <AppComponentHeader
        title='Grid'
        description='The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.'
        refUrl='https://mui.com/components/grid/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='BasicGrid'
            component={BasicGrid}
            source={BasicGridSource}
            description='Column widths are integer values between 1 and 12; they apply at any breakpoint and indicate how many columns are occupied by the component.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FullWidthGrid'
            component={FullWidthGrid}
            source={FullWidthGridSource}
            description='Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Row And Column Spacing'
            component={RowAndColumnSpacing}
            source={RowAndColumnSpacingSource}
            description='The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. Its similar to the row-gap and column-gap properties of CSS Grid.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Responsive Grid'
            component={ResponsiveGrid}
            source={ResponsiveGridSource}
            description='You can switch the props value based on the active breakpoint. For instance, we can implement the "recommended" responsive layout grid of Material Design.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Auto Grid'
            component={AutoGrid}
            source={AutoGridSource}
            description='The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Variable Width Grid '
            component={VariableWidthGrid}
            source={VariableWidthGridSource}
            noScrollbar
            description='Set one of the size breakpoint props to "auto" instead of true / a number to size a column based on the natural width of its content.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Complex Grid '
            component={ComplexGrid}
            source={ComplexGridSource}
            noScrollbar
            description='The following demo doesnt follow the Material Design guidelines but illustrates how the grid can be used to build complex layouts. '
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FormRow '
            component={FormRow}
            source={FormRowSource}
            noScrollbar
            description='The following demo doesnt follow the Material Design guidelines, but illustrates how the grid can be used to build complex layouts. '
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ColumnsGrid '
            component={ColumnsGrid}
            source={ColumnsGridSource}
            noScrollbar
            description='You can change the default number of columns (12) with the columns prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='CSSGrid '
            component={CSSGrid}
            source={CSSGridSource}
            noScrollbar
            description='The Grid component is using CSS flexbox internally. But as seen below, you can easily use the system and CSS Grid to layout your pages.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Auto Grid No Wrap '
            component={AutoGridNoWrap}
            source={AutoGridNoWrapSource}
            noScrollbar
            description='In order for the item to stay within the container you need to set min-width: 0. In practice, you can set the zeroMinWidth prop:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Spacing Grid'
            component={SpacingGrid}
            source={SpacingGridSource}
            description='To control space between children, use the spacing prop. The spacing value can be any positive number, including decimals and any string. The prop is converted into a CSS property using the theme.spacing() helper.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default GridLayout;
