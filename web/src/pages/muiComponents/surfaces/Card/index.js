import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import BasicCard from './BasicCard';
import BasicCardSource from '!raw-loader!./BasicCard';

import OutlinedCard from './OutlinedCard';
import OutlinedCardSource from '!raw-loader!./OutlinedCard';

import RecipeReviewCard from './RecipeReviewCard';
import RecipeReviewCardSource from '!raw-loader!./RecipeReviewCard';

import MediaCard from './MediaCard';
import MediaCardSource from '!raw-loader!./MediaCard';

const Card = () => {
  return (
    <>
      <AppComponentHeader
        title='Card'
        description='Cards contain content and actions about a single subject.'
        refUrl='https://mui.com/components/cards/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic alerts'
            component={BasicCard}
            source={BasicCardSource}
            noScrollbar
            description='Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Outlined Card'
            component={OutlinedCard}
            source={OutlinedCardSource}
            noScrollbar
            description='Set variant="outlined" to render an outlined card.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Recipe Review Card'
            component={RecipeReviewCard}
            source={RecipeReviewCardSource}
            noScrollbar
            description='On desktop, card content can expand. (Click the downward chevron to view the recipe.)'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Media Card'
            component={MediaCard}
            source={MediaCardSource}
            noScrollbar
            description='Example of a card using an image to reinforce the content.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Card;
