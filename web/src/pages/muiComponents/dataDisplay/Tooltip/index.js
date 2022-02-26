import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import BasicTooltip from './BasicTooltip';
import BasicTooltipSource from '!raw-loader!./BasicTooltip';

import PositionedTooltips from './PositionedTooltips';
import PositionedTooltipsSource from '!raw-loader!./PositionedTooltips';

import CustomizedTooltips from './CustomizedTooltips';
import CustomizedTooltipsSource from '!raw-loader!./CustomizedTooltips';

import ArrowTooltips from './Arrowtooltips';
import ArrowTooltipsSource from '!raw-loader!./Arrowtooltips';

import TriggersTooltips from './TriggersTooltips';
import TriggersTooltipsSource from '!raw-loader!./TriggersTooltips';

import ControlledTooltips from './ControlledTooltips';
import ControlledTooltipsSource from '!raw-loader!./ControlledTooltips';

import VariableWidth from './VariableWidth';
import VariableWidthSource from '!raw-loader!./VariableWidth';

import NotInteractiveTooltips from './NotInteractiveTooltips';
import NotInteractiveTooltipsSource from '!raw-loader!./NotInteractiveTooltips';

import DisabledTooltips from './DisabledTooltips';
import DisabledTooltipsSource from '!raw-loader!./DisabledTooltips';

import TransitionsTooltips from './TransitionsTooltips';
import TransitionsTooltipsSource from '!raw-loader!./TransitionsTooltips';

import FollowCursorTooltips from './FollowCursorTooltips';
import FollowCursorTooltipsSource from '!raw-loader!./FollowCursorTooltips';

import AnchorElTooltips from './Virtualelement';
import AnchorElTooltipsSource from '!raw-loader!./AnchorElTooltips';

import DelayTooltips from './DelayTooltips';
import DelayTooltipsSource from '!raw-loader!./DelayTooltips';

import AccessibilityTooltips from './AccessibilityTooltips';
import AccessibilityTooltipsSource from '!raw-loader!./AccessibilityTooltips';

const Tooltip = () => {
  return (
    <>
      <AppComponentHeader
        title='Tooltip'
        description='Tooltips display informative text when users hover over, focus on, or tap an element.'
        refUrl='https://mui.com/components/tooltips/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic Tooltip'
            component={BasicTooltip}
            source={BasicTooltipSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized Tooltips'
            component={CustomizedTooltips}
            source={CustomizedTooltipsSource}
            noScrollbar
            description='Here are some examples of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Arrow Tooltips'
            component={ArrowTooltips}
            source={ArrowTooltipsSource}
            noScrollbar
            description='You can use the arrow prop to give your tooltip an arrow indicating which element it refers to.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Triggers Tooltips'
            component={TriggersTooltips}
            source={TriggersTooltipsSource}
            noScrollbar
            description='You can define the types of events that cause a tooltip to show.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Controlled Tooltips'
            component={ControlledTooltips}
            source={ControlledTooltipsSource}
            noScrollbar
            description='You can use the open, onOpen and onClose props to control the behavior of the tooltip.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Variable Width'
            component={VariableWidth}
            source={VariableWidthSource}
            noScrollbar
            description='The Tooltip wraps long text by default to make it readable.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Not Interactive Tooltips'
            component={NotInteractiveTooltips}
            source={NotInteractiveTooltipsSource}
            noScrollbar
            description='Tooltips are interactive by default (to pass WCAG 2.1 success criterion 1.4.13). It wo not close when the user hovers over the tooltip before the leaveDelay is expired. You can disable this behavior (thus failing the success criterion which is required to reach level AA) by passing disableInteractive. '
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Disabled Tooltips'
            component={DisabledTooltips}
            source={DisabledTooltipsSource}
            noScrollbar
            description='By default disabled elements like <button> do not trigger user interactions so a Tooltip will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element, such as a span.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Transitions Tooltips'
            component={TransitionsTooltips}
            source={TransitionsTooltipsSource}
            noScrollbar
            description='Use a different transition.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FollowCursor Tooltips'
            component={FollowCursorTooltips}
            source={FollowCursorTooltipsSource}
            noScrollbar
            description='You can enable the tooltip to follow the cursor by setting followCursor={true}.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='AnchorEl Tooltips'
            component={AnchorElTooltips}
            source={AnchorElTooltipsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Delay Tool tips'
            component={DelayTooltips}
            source={DelayTooltipsSource}
            noScrollbar
            description='The tooltip is normally shown immediately when the users mouse hovers over the element, and hides immediately when the users mouse leaves. A delay in showing or hiding the tooltip can be added through the enterDelay and leaveDelay props, as shown in the Controlled Tooltips demo above. '
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Accessibility Tooltips'
            component={AccessibilityTooltips}
            source={AccessibilityTooltipsSource}
            noScrollbar
            description='By default, the tooltip only labels its child element. This is notably different from title which can either label or describe its child depending on whether the child already has a label. For example, in:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Positioned Tooltips'
            component={PositionedTooltips}
            source={PositionedTooltipsSource}
            noScrollbar
            description='The Tooltip has 12 placements choice. They do not have directional arrows; instead, they rely on motion emanating from the source to convey direction. '
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Tooltip;
