import React from 'react';
import {useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {onUpdateSelectedMail} from '../../../../../redux/actions';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import MessageItem from './MessageItem';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import AppTooltip from '../../../../../@crema/core/AppTooltip';

const MailDetailBody = (props) => {
  const {selectedMail} = props;
  const dispatch = useDispatch();

  const onSubmitMail = (message, index) => {
    let messages = selectedMail.messages;
    messages.splice(index + 1, 0, message);
    selectedMail.messages = messages;
    dispatch(onUpdateSelectedMail(selectedMail));
  };

  const onChangeStarred = (message, isStarred) => {
    message.isStarred = isStarred;
    selectedMail.messages = selectedMail.messages.map((data) =>
      data.messageId === message.messageId ? message : data,
    );
    dispatch(onUpdateSelectedMail(selectedMail));
  };
  return (
    <Box sx={{px: 5, py: 1}}>
      {selectedMail ? (
        <>
          <Box
            sx={{
              pt: 1,
              pb: 3,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component='span'
              sx={{
                fontSize: {xs: 16, sm: 18},
                marginRight: 3,
                paddingLeft: {xs: 0, sm: 12.5},
              }}
            >
              {selectedMail.subject}
            </Box>
            <AppTooltip title={selectedMail.label.name}>
              <span
                style={{
                  color: selectedMail.label.color,
                  height: 22,
                  cursor: 'pointer',
                }}
              >
                <LabelOutlinedIcon />
              </span>
            </AppTooltip>
          </Box>
          {selectedMail.messages.map((message, index) => (
            <MessageItem
              key={index}
              index={index}
              mailLength={selectedMail.messages.length}
              message={message}
              onSubmitMail={onSubmitMail}
              onChangeStarred={onChangeStarred}
            />
          ))}
        </>
      ) : null}
    </Box>
  );
};

export default withRouter(MailDetailBody);

MailDetailBody.propTypes = {
  selectedMail: PropTypes.object.isRequired,
};
