import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import BasicMenu from './BasicMenu';
import BasicMenuSource from '!raw-loader!./BasicMenu';

import IconMenu from './IconMenu';
import IconMenuSource from '!raw-loader!./IconMenu';

import DenseMenu from './DenseMenu';
import DenseMenuSource from '!raw-loader!./DenseMenu';

import SimpleListMenu from './SimpleListMenu';
import SimpleListMenuSource from '!raw-loader!./SimpleListMenu';

import PositionedMenu from './PositionedMenu';
import PositionedMenuSource from '!raw-loader!./PositionedMenu';

import MenuListComposition from './MenuListComposition';
import MenuListCompositionSource from '!raw-loader!./MenuListComposition';

import AccountMenu from './AccountMenu';
import AccountMenuSource from '!raw-loader!./AccountMenu';

import CustomizedMenus from './CustomizedMenus';
import CustomizedMenusSource from '!raw-loader!./CustomizedMenus';

import LongMenu from './LongMenu';
import LongMenuSource from '!raw-loader!./LongMenu';

import TypographyMenu from './TypographyMenu';
import TypographyMenuSource from '!raw-loader!./TypographyMenu';

import FadeMenu from './FadeMenu';
import FadeMenuSource from '!raw-loader!./FadeMenu';

import ContextMenu from './ContextMenu';
import ContextMenuSource from '!raw-loader!./ContextMenu';

const Menu = () => {
  return (
    <>
      <AppComponentHeader
        title='Menu'
        description='Menus display a list of choices on temporary surfaces.'
        refUrl='https://mui.com/components/menus/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic menu'
            component={BasicMenu}
            source={BasicMenuSource}
            noScrollbar
            description='A basic menu opens over the anchor element by default (this option can be changed via props).'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Positioned Menu'
            component={PositionedMenu}
            source={PositionedMenuSource}
            noScrollbar
            description='There is a 3rd party package material-ui-popup-state that takes care of menu state for you in most cases.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Context Menu'
            component={ContextMenu}
            source={ContextMenuSource}
            noScrollbar
            description='Here is an example of a context menu. (Right click to open.)'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Icon Menu'
            component={IconMenu}
            source={IconMenuSource}
            noScrollbar
            description='In desktop viewport, padding is increased to give more space to the menu.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Menu List Composition'
            component={MenuListComposition}
            source={MenuListCompositionSource}
            noScrollbar
            description='The primary responsibility of the MenuList component is to handle the focus.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='SimpleList Menu'
            component={SimpleListMenu}
            source={SimpleListMenuSource}
            noScrollbar
            description='A basic menu opens over the anchor element by default (this option can be changed via props).'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Account Menu'
            component={AccountMenu}
            source={AccountMenuSource}
            noScrollbar
            description='Menu content can be mixed with other components like Avatar.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Customized Menus'
            component={CustomizedMenus}
            source={CustomizedMenusSource}
            noScrollbar
            description='Here is an example of customizing the component. You can learn more about this in the overrides documentation page.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Long Menu'
            component={LongMenu}
            source={LongMenuSource}
            noScrollbar
            description='If the height of a menu prevents all menu items from being displayed, the menu can scroll internally.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Fade Menu'
            component={FadeMenu}
            source={FadeMenuSource}
            noScrollbar
            description='Use a different transition.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Dense Menu'
            component={DenseMenu}
            source={DenseMenuSource}
            noScrollbar
            description='For the menu that has long list and long text, you can use the dense prop to reduce the padding and text size.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Typography Menu'
            component={TypographyMenu}
            source={TypographyMenuSource}
            noScrollbar
            description='There is a flexbox bug that prevents text-overflow: ellipsis from working in a flexbox layout. You can use the Typography component with noWrap to workaround this issue:'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Menu;
