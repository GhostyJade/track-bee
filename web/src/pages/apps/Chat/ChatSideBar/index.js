import React, {useState} from 'react';
import UserInfo from './UserInfo';
import ChatTabs from './ChatTabs';
import Box from '@mui/material/Box';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {Zoom} from '@mui/material';
import {useIntl} from 'react-intl';
import AppSearchBar from '@crema/core/AppSearchBar';
import {useAuthUser} from '@crema/utility/AuthHooks';

const ChatSideBar = () => {
  const [keywords, setKeywords] = useState('');
  const {user} = useAuthUser();

  const connectionList = useSelector(({chatApp}) => chatApp.connectionList);
  const loading = useSelector(({common}) => common.loading);

  const getConnectionList = () => {
    if (keywords !== '') {
      return connectionList.filter((item) =>
        item.name.toUpperCase().includes(keywords.toUpperCase()),
      );
    }
    return connectionList;
  };

  const getChatList = () => {
    let chatsList = connectionList.filter((item) => item.lastMessage);
    if (keywords !== '') {
      chatsList = chatsList.filter((item) =>
        item.name.toUpperCase().includes(keywords.toUpperCase()),
      );
    }
    chatsList.sort((a, b) => {
      let momentA = moment(a.lastMessage.time).format('X');
      let momentB = moment(b.lastMessage.time).format('X');
      return momentB - momentA;
    });
    return chatsList;
  };

  const connectionListData = getConnectionList();

  const chatListData = getChatList();

  const {messages} = useIntl();

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
      }}
    >
      <Zoom in style={{transitionDelay: '300ms'}}>
        <Box
          sx={{
            px: 5,
            pt: 4,
            pb: 2,
          }}
        >
          <UserInfo user={user} />
        </Box>
      </Zoom>
      <Box
        sx={{
          px: 5,
          pt: 2,
          width: 1,
        }}
      >
        <AppSearchBar
          sx={{
            marginRight: 0,
            width: '100%',
            '& .searchRoot': {
              width: '100%',
            },
            '& .MuiInputBase-input': {
              width: '100%',
              '&:focus': {
                width: '100%',
              },
            },
          }}
          iconPosition='right'
          overlap={false}
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder={messages['common.searchHere']}
        />
      </Box>

      <ChatTabs
        connectionListData={connectionListData}
        chatListData={chatListData}
        loading={loading}
      />
    </Box>
  );
};

export default ChatSideBar;
