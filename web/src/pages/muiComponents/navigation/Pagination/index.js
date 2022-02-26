import React from 'react';
import AppComponentHeader from '../../../../@crema/core/AppComponentHeader';
import AppGridContainer from '../../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '../../../../@crema/core/AppComponentCard';

import BasicPagination from './BasicPagination';
import BasicPaginationSource from '!raw-loader!./BasicPagination';

import PaginationOutlined from './PaginationOutlined';
import PaginationOutlinedSource from '!raw-loader!./PaginationOutlined';

import PaginationRounded from './PaginationRounded';
import PaginationRoundedSource from '!raw-loader!./PaginationRounded';

import PaginationSize from './PaginationSize';
import PaginationSizeSource from '!raw-loader!./PaginationSize';

import PaginationButtons from './PaginationButtons';
import PaginationButtonsSource from '!raw-loader!./PaginationButtons';

import CustomIcons from './CustomIcons';
import CustomIconsSource from '!raw-loader!./CustomIcons';

import PaginationRanges from './PaginationRanges';
import PaginationRangesSource from '!raw-loader!./PaginationRanges';

import PaginationControlled from './PaginationControlled';
import PaginationControlledSource from '!raw-loader!./PaginationControlled';

import PaginationLink from './PaginationLink';
import PaginationLinkSource from '!raw-loader!./PaginationLink';

import UsePagination from './UsePagination';
import UsePaginationSource from '!raw-loader!./UsePagination';

import TablePaginationDemo from './TablePaginationDemo';
import TablePaginationDemoSource from '!raw-loader!./TablePaginationDemo';

const Pagination = () => {
  return (
    <>
      <AppComponentHeader
        title='Pagination'
        description='The Pagination component enables the user to select a specific page from a range of pages.'
        refUrl='https://mui.com/components/pagination/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Basic pagination'
            component={BasicPagination}
            source={BasicPaginationSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='PaginationOutlined'
            component={PaginationOutlined}
            source={PaginationOutlinedSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Pagination Rounded'
            component={PaginationRounded}
            source={PaginationRoundedSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Pagination Buttons'
            component={PaginationButtons}
            source={PaginationButtonsSource}
            noScrollbar
            description='You can optionally enable first-page and last-page buttons, or disable the previous-page and next-page buttons.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Custom Icons'
            component={CustomIcons}
            source={CustomIconsSource}
            noScrollbar
            description='Its possible to customize the control icons.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Pagination Link'
            component={PaginationLink}
            source={PaginationLinkSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Pagination Controlled'
            component={PaginationControlled}
            source={PaginationControlledSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='TablePaginationDemo'
            component={TablePaginationDemo}
            source={TablePaginationDemoSource}
            noScrollbar
            description='The Pagination component was designed to paginate a list of arbitrary items when infinite loading isnt used. Its preferred in contexts where SEO is important, for instance, a blog.'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Pagination Size'
            component={PaginationSize}
            source={PaginationSizeSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Pagination Ranges'
            component={PaginationRanges}
            source={PaginationRangesSource}
            noScrollbar
            description='You can specify how many digits to display either side of current page with the siblingRange prop, and adjacent to the start and end page number with the boundaryRange prop.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='UsePagination'
            component={UsePagination}
            source={UsePaginationSource}
            noScrollbar
            description='For advanced customization use cases, a headless usePagination() hook is exposed. It accepts almost the same options as the Pagination component minus all the props related to the rendering of JSX. The Pagination component is built on this hook.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Pagination;
