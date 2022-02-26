import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import ScrollPlayground from './ScrollPlayground';
import ScrollPlaygroundSource from '!raw-loader!./ScrollPlayground';

const Scrolling = () => {
  return (
    <>
      <AppComponentHeader
        title='Scrolling'
        description=' This section presents how to programmatically control the scroll.'
        refUrl='https://mui.com/components/data-grid/scrolling/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Scroll Play ground'
            component={ScrollPlayground}
            source={ScrollPlaygroundSource}
            noScrollbar
            description='You can scroll to a specific cell by calling apiRef.current.scrollToIndexes(). The only argument that must be passed is an object containing the row index and the column index of the cell to scroll. If the row or column index is not present, the grid will not do any movement in the missing axis.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Scrolling;
