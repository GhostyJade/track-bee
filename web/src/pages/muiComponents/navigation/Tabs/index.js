import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import BasicTabs from './BasicTabs';
import BasicTabsSource from '!raw-loader!./BasicTabs';

import LabTabs from './LabTabs';
import LabTabsSource from '!raw-loader!./LabTabs';

import TabsWrappedLabel from './TabsWrappedLabel';
import TabsWrappedLabelSource from '!raw-loader!./TabsWrappedLabel';

import ColorTabs from './ColorTabs';
import ColorTabsSource from '!raw-loader!./ColorTabs';

import DisabledTabs from './DisabledTabs';
import DisabledTabsSource from '!raw-loader!./DisabledTabs';

import FullWidthTabs from './FullWidthTabs';
import FullWidthTabsSource from '!raw-loader!./FullWidthTabs';

import CenteredTabs from './CenteredTabs';
import CenteredTabsSource from '!raw-loader!./CenteredTabs';

import ScrollableTabsButtonAuto from './ScrollableTabsButtonAuto';
import ScrollableTabsButtonAutoSource from '!raw-loader!./ScrollableTabsButtonAuto';

import ScrollableTabsButtonForce from './ScrollableTabsButtonForce';
import ScrollableTabsButtonForceSource from '!raw-loader!./ScrollableTabsButtonForce';

import ScrollableTabsButtonVisible from './ScrollableTabsButtonVisible';
import ScrollableTabsButtonVisibleSource from '!raw-loader!./ScrollableTabsButtonVisible';

import CustomizedTabs from './CustomizedTabs';
import CustomizedTabsSource from '!raw-loader!./CustomizedTabs';

import VerticalTabs from './VerticalTabs';
import VerticalTabsSource from '!raw-loader!./VerticalTabs';

import NavTabs from './NavTabs';
import NavTabsSource from '!raw-loader!./NavTabs';

import IconTabs from './IconTabs';
import IconTabsSource from '!raw-loader!./IconTabs';

import IconLabelTabs from './IconLabelTabs';
import IconLabelTabsSource from '!raw-loader!./IconLabelTabs';

import IconPosition from './IconPosition';
import IconPositionSource from '!raw-loader!./IconPosition';

import AccessibleTabs1 from './AccessibleTabs1';
import AccessibleTabs1Source from '!raw-loader!./AccessibleTabs1';

import AccessibleTabs2 from './AccessibleTabs2';
import AccessibleTabs2Source from '!raw-loader!./AccessibleTabs2';

import UnstyledTabsBasic from './UnstyledTabsBasic';
import UnstyledTabsBasicSource from '!raw-loader!./UnstyledTabsBasic';

import UnstyledTabsCustomized from './UnstyledTabsCustomized';
import UnstyledTabsCustomizedSource from '!raw-loader!./UnstyledTabsCustomized';

import ScrollableTabsButtonPrevent from './ScrollableTabsButtonPrevent';
import ScrollableTabsButtonPreventSource from '!raw-loader!./ScrollableTabsButtonPrevent';

const Tabs = () => {
  return (
    <>
      <AppComponentHeader
        title='Tabs'
        description='Tabs make it easy to explore and switch between different views.'
        refUrl='https://mui.com/components/tabs/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic tabs'
            component={BasicTabs}
            source={BasicTabsSource}
            noScrollbar
            description='A basic example with tab panels.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Lab Tabs'
            component={LabTabs}
            source={LabTabsSource}
            noScrollbar
            description='@mui/lab offers utility components that inject props to implement accessible tabs following WAI-ARIA authoring practices.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Tabs Wrapped Label'
            component={TabsWrappedLabel}
            source={TabsWrappedLabelSource}
            noScrollbar
            description='Long labels will automatically wrap on tabs. If the label is too long for the tab, it will overflow, and the text will not be visible.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Color Tabs'
            component={ColorTabs}
            source={ColorTabsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Unstyled Tabs Customized'
            component={UnstyledTabsCustomized}
            source={UnstyledTabsCustomizedSource}
            noScrollbar
            description='The TabPanelUnstyled on the other hand renders a native div element by default. You are free to override this as well by setting the component or components.Root prop on the TabPanelUnstyled.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Full Width Tabs'
            component={FullWidthTabs}
            source={FullWidthTabsSource}
            noScrollbar
            description='The variant="fullWidth" prop should be used for smaller views. This demo also uses react-swipeable-views to animate the Tab transition, and allowing tabs to be swiped on touch devices.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Disabled Tabs'
            component={DisabledTabs}
            source={DisabledTabsSource}
            noScrollbar
            description='A tab can be disabled by setting the disabled prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Centered Tabs'
            component={CenteredTabs}
            source={CenteredTabsSource}
            noScrollbar
            description='The centered prop should be used for larger views.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Scrollable Tabs Button Auto'
            component={ScrollableTabsButtonAuto}
            source={ScrollableTabsButtonAutoSource}
            noScrollbar
            description='By default, left and right scroll buttons are automatically presented on desktop and hidden on mobile. (based on viewport width)'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Scrollable Tabs Button Force'
            component={ScrollableTabsButtonForce}
            source={ScrollableTabsButtonForceSource}
            noScrollbar
            description='Left and right scroll buttons be presented (reserve space) regardless of the viewport width with scrollButtons={true} allowScrollButtonsMobile:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Scrollable Tabs Button Visible'
            component={ScrollableTabsButtonVisible}
            source={ScrollableTabsButtonVisibleSource}
            noScrollbar
            description='If you want to make sure the buttons are always visible, you should customize the opacity.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Scrollable Tabs Button Prevent'
            component={ScrollableTabsButtonPrevent}
            source={ScrollableTabsButtonPreventSource}
            noScrollbar
            description='Left and right scroll buttons are never be presented with scrollButtons={false}. All scrolling must be initiated through user agent scrolling mechanisms (e.g. left/right swipe, shift mouse wheel, etc.)'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Nav Tabs'
            component={NavTabs}
            source={NavTabsSource}
            noScrollbar
            description='By default, tabs use a button element, but you can provide your custom tag or component. Heres an example of implementing tabbed navigation:'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Icon Position'
            component={IconPosition}
            source={IconPositionSource}
            noScrollbar
            description='By default, the icon is positioned at the top of a tab. Other supported positions are start, end, bottom.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Icon Label Tabs'
            component={IconLabelTabs}
            source={IconLabelTabsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Icon Tabs'
            component={IconTabs}
            source={IconTabsSource}
            noScrollbar
            description='Tab labels may be either all icons or all text.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Accessible Tabs1'
            component={AccessibleTabs1}
            source={AccessibleTabs1Source}
            noScrollbar
            description='The following two demos only differ in their keyboard navigation behavior. Focus a tab and navigate with arrow keys to notice the difference, e.g. Arrow Left.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Accessible Tabs2'
            component={AccessibleTabs2}
            source={AccessibleTabs2Source}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Unstyled Tabs Basic'
            component={UnstyledTabsBasic}
            source={UnstyledTabsBasicSource}
            noScrollbar
            description='The Tabs also come with an unstyled version. Its ideal for doing heavy customizations and minimizing bundle size.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized Tabs'
            component={CustomizedTabs}
            source={CustomizedTabsSource}
            noScrollbar
            description='Here is an example of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Vertical Tabs'
            component={VerticalTabs}
            source={VerticalTabsSource}
            noScrollbar
            description='To make vertical tabs instead of default horizontal ones, there is orientation="vertical":'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Tabs;
