import React from 'react';
import ChatItem from './ChatItem';
import PropTypes from 'prop-types';
import AppList from '@crema/core/AppList';
import ListEmptyResult from '@crema/core/AppList/ListEmptyResult';
import {useIntl} from 'react-intl';
import ChatListSkeleton from '@crema/core/AppSkeleton/ChatListSkeleton';
import {useSelector} from 'react-redux';

const ChatList = ({chatListData, loading}) => {
  const {messages} = useIntl();
  const selectedUser = useSelector(({chatApp}) => chatApp.selectedUser);
  return (
    <AppList
      containerStyle={{
        display: 'flex',
        flexDirection: 'column',
      }}
      data={chatListData}
      ListEmptyComponent={
        <ListEmptyResult
          content={messages['chatApp.noUserFound']}
          loading={loading}
          placeholder={<ChatListSkeleton />}
        />
      }
      renderRow={(item) => (
        <ChatItem
          key={'chat-item-' + item.id}
          item={item}
          selectedUser={selectedUser}
        />
      )}
    />
  );
};

export default ChatList;

ChatList.propTypes = {
  chatListData: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};
