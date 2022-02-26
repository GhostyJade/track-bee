import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import { onUpdateSelectedMail } from '../../../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import IntlMessages from '@crema/utility/IntlMessages';
import { Box } from '@mui/material';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppTooltip from '@crema/core/AppTooltip';
import IconButton from '@mui/material/IconButton';

const MailDetailHeader = (props) => {
  const { selectedMail } = props;
  const dispatch = useDispatch();

  const history = useHistory();

  const labelList = useSelector(({ mailApp }) => mailApp.labelList);

  const [isLabelOpen, onOpenLabel] = React.useState(null);

  const [isMoreIcon, onOpenMoreIcon] = React.useState(null);

  const onClickBackButton = () => {
    history.goBack();
  };

  const onLabelOpen = (event) => {
    onOpenLabel(event.currentTarget);
  };

  const onLabelClose = () => {
    onOpenLabel(null);
  };

  const onViewMoreOpen = (event) => {
    onOpenMoreIcon(event.currentTarget);
  };

  const onViewMoreClose = () => {
    onOpenMoreIcon(null);
  };

  const onSelectLabel = (event) => {
    const mail = selectedMail;
    mail.label = event.target.value;
    dispatch(onUpdateSelectedMail(mail));
    onOpenLabel(null);
  };

  const onChangeMailFolder = (type) => {
    const mail = selectedMail;
    mail.folderValue = type;
    dispatch(onUpdateSelectedMail(mail, type));
    history.goBack();
  };

  const onChangeReadStatus = () => {
    const mail = selectedMail;
    mail.isRead = false;
    dispatch(onUpdateSelectedMail(mail));
    history.goBack();
  };

  const onChangeStarredStatus = () => {
    const mail = selectedMail;
    mail.isStarred = !mail.isStarred;
    dispatch(onUpdateSelectedMail(mail));
    onOpenMoreIcon(null);
  };

  if (!selectedMail) return null;
  return (
    <>
      <AppTooltip title={<IntlMessages id='common.back' />}>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
          }}
          onClick={onClickBackButton}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </AppTooltip>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <AppTooltip title={<IntlMessages id='common.archive' />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={() => onChangeMailFolder(127)}
          >
            <ArchiveOutlinedIcon />
          </IconButton>
        </AppTooltip>

        <AppTooltip title={<IntlMessages id='common.reportSpam' />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={() => onChangeMailFolder(125)}
          >
            <InfoOutlinedIcon />
          </IconButton>
        </AppTooltip>

        <AppTooltip title={<IntlMessages id='common.trash' />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={() => onChangeMailFolder(126)}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        </AppTooltip>

        <AppTooltip title={<IntlMessages id='mailApp.markAsUnread' />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={() => onChangeReadStatus()}
          >
            <MarkunreadOutlinedIcon />
          </IconButton>
        </AppTooltip>

        <AppTooltip title={<IntlMessages id='common.label' />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            value={1}
            onClick={onLabelOpen}
          >
            <LabelOutlinedIcon />
          </IconButton>
        </AppTooltip>

        <Menu
          anchorEl={isLabelOpen}
          open={Boolean(isLabelOpen)}
          onClose={onLabelClose}
        >
          {labelList.map((label) => {
            return (
              <MenuItem onClick={onSelectLabel} value={label.id} key={label.id}>
                {label.name}
              </MenuItem>
            );
          })}
        </Menu>
      </Box>

      <Box
        sx={{
          ml: 'auto',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <AppTooltip title={<IntlMessages id='common.more' />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            onClick={onViewMoreOpen}
          >
            <MoreVertIcon />
          </IconButton>
        </AppTooltip>

        <Menu
          anchorEl={isMoreIcon}
          open={Boolean(isMoreIcon)}
          onClose={onViewMoreClose}
        >
          <MenuItem onClick={onChangeReadStatus}>
            <IntlMessages id='mailApp.markAsUnread' />
          </MenuItem>
          <MenuItem onClick={onChangeStarredStatus}>
            {selectedMail.isStarred ? (
              <IntlMessages id='mailApp.markAsNotImportant' />
            ) : (
              <IntlMessages id='mailApp.markAsImportant' />
            )}
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default MailDetailHeader;

MailDetailHeader.propTypes = {
  selectedMail: PropTypes.object.isRequired,
};
