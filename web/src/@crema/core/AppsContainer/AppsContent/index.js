import React from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/material/styles';
import SimpleBarReact from 'simplebar-react';

const AppsContentContainer = styled(SimpleBarReact)((props) => {
  return {
    width: '100%',
    paddingTop: 8,
    paddingBottom: 8,
    display: 'flex',
    flexDirection: 'column',
    height: `calc(100% - ${props.isDetailView ? 60 : 129}px)`,
    [props.theme.breakpoints.up('sm')]: {
      height: `calc(100% - ${props.fullView ? 0 : 60}px)`,
    },
    '& .simplebar-content': {
      height: '100%',
    },
  };
});

const AppsContent = (props) => {
  return (
    <AppsContentContainer {...props}>{props.children}</AppsContentContainer>
  );
};

export default AppsContent;

AppsContent.propTypes = {
  children: PropTypes.node,
  isDetailView: PropTypes.bool,
};

AppsContent.defaultProps = {isDetailView: false};
