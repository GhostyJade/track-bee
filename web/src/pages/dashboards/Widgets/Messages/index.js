import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import AppList from '@crema/core/AppList';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import AppScrollbar from '@crema/core/AppScrollbar';
import MessageItem from '../../../../@crema/core/AppMessages/MessageItem';

const getData = (data) => {
  return data;
};

const Messages = (props) => {
  const data = getData(props.data);

  const {messages} = useIntl();
  return (
    <AppCard
      sxStyle={{height: 1}}
      title={messages['dashboard.messages']}
      contentStyle={{px: 0}}
      action={
        <CloseIcon
          sx={{
            cursor: 'pointer',
          }}
        />
      }
    >
      <AppScrollbar
        sx={{
          height: 263,
        }}
      >
        <AppList
          data={data}
          renderRow={(item) => {
            return <MessageItem key={item.id} item={item} />;
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Messages;

Messages.defaultProps = {
  data: [],
};

Messages.propTypes = {
  data: PropTypes.array,
};
