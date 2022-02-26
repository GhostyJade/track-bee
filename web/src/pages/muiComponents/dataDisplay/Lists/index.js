import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import BasicList from './BasicList';
import BasicListSource from '!raw-loader!./BasicList';

import NestedList from './NestedList';
import NestedListSource from '!raw-loader!./NestedList';

import FolderList from './FolderList';
import FolderListSource from '!raw-loader!./FolderList';

import InteractiveList from './InteractiveList';
import InteractiveListSource from '!raw-loader!./InteractiveList';

import SelectedListItem from './SelectedListItem';
import SelectedListItemSource from '!raw-loader!./SelectedListItem';

import AlignItemsList from './AlignItemsList';
import AlignItemsListSource from '!raw-loader!./AlignItemsList';

import CheckboxList from './CheckboxList';
import CheckboxListSource from '!raw-loader!./CheckboxList';

import CheckboxListSecondary from './CheckboxListSecondary';
import CheckboxListSecondarySource from '!raw-loader!./CheckboxListSecondary';

import SwitchListSecondary from './SwitchListSecondary';
import SwitchListSecondarySource from '!raw-loader!./SwitchListSecondary';

import PinnedSubheaderList from './PinnedSubheaderList';
import PinnedSubheaderListSource from '!raw-loader!./PinnedSubheaderList';

import InsetList from './InsetList';
import InsetListSource from '!raw-loader!./InsetList';

import GutterlessList from './Gutterlesslist';
import GutterlessListSource from '!raw-loader!./Gutterlesslist';

import VirtualizedList from './VirtualizedList';
import VirtualizedListSource from '!raw-loader!./VirtualizedList';

import CustomizedList from './CustomizedList';
import CustomizedListSource from '!raw-loader!./CustomizedList';

const Lists = () => {
  return (
    <>
      <AppComponentHeader
        title='Lists'
        description='Lists are continuous, vertical indexes of text or images.'
        refUrl='https://mui.com/components/lists/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic Lists'
            component={BasicList}
            source={BasicListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Nested List'
            component={NestedList}
            source={NestedListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Folder List'
            component={FolderList}
            source={FolderListSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Selected ListItem'
            component={SelectedListItem}
            source={SelectedListItemSource}
            noScrollbar
            description=''
          />
        </Grid>
        <Grid item xs={12}>
          <AppComponentCard
            title='Interactive List'
            component={InteractiveList}
            source={InteractiveListSource}
            noScrollbar
            description='Below is an interactive demo that lets you explore the visual results of the different settings:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='AlignItems List'
            component={AlignItemsList}
            source={AlignItemsListSource}
            noScrollbar
            description='When displaying three lines or more, the avatar is not aligned at the top. You should set the alignItems="flex-start" prop to align the avatar at the top, following the Material Design guidelines:'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Checkbox List'
            component={CheckboxList}
            source={CheckboxListSource}
            noScrollbar
            description='A checkbox can either be a primary action or a secondary action.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Checkbox ListSecondary'
            component={CheckboxListSecondary}
            source={CheckboxListSecondarySource}
            noScrollbar
            description='The checkbox is the secondary action for the list item and a separate target.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Switch ListSecondary'
            component={SwitchListSecondary}
            source={SwitchListSecondarySource}
            noScrollbar
            description='The switch is the secondary action and a separate target.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Pinned Subheader List'
            component={PinnedSubheaderList}
            source={PinnedSubheaderListSource}
            noScrollbar
            description='Upon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by the next subheader. This feature relies on CSS sticky positioning.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized List'
            component={CustomizedList}
            source={CustomizedListSource}
            noScrollbar
            description='Here are some examples of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Inset List'
            component={InsetList}
            source={InsetListSource}
            noScrollbar
            description='The inset prop enables a list item that does not have a leading icon or avatar to align correctly with items that do.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Gutter less List'
            component={GutterlessList}
            source={GutterlessListSource}
            noScrollbar
            description='When rendering a list within a component that defines its own gutters, ListItem gutters can be disabled with disableGutters.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Virtualized List'
            component={VirtualizedList}
            source={VirtualizedListSource}
            noScrollbar
            description='In the following example, we demonstrate how to use react-window with the List component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Lists;
