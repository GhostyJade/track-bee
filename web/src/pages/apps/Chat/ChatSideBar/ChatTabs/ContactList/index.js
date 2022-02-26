import React from 'react';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import AppList from '@crema/core/AppList';
import ListEmptyResult from '@crema/core/AppList/ListEmptyResult';
import ChatListSkeleton from '@crema/core/AppSkeleton/ChatListSkeleton';
import {useIntl} from 'react-intl';
import {useSelector} from 'react-redux';

const ContactList = ({connectionListData, loading}) => {
  const {messages} = useIntl();
  const selectedUser = useSelector(({chatApp}) => chatApp.selectedUser);
  return (
    <AppList
      containerStyle={{
        display: 'flex',
        flexDirection: 'column',
      }}
      data={connectionListData}
      ListEmptyComponent={
        <ListEmptyResult
          content={messages['chatApp.noUserFound']}
          loading={loading}
          placeholder={<ChatListSkeleton />}
        />
      }
      renderRow={(item) => (
        <ContactItem
          listStyle='px-0'
          key={'connection-item-' + item.id}
          item={item}
          selectedUser={selectedUser}
        />
      )}
    />
  );
};

export default ContactList;

ContactList.propTypes = {
  connectionListData: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};
