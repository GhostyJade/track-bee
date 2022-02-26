import React, { createRef, useEffect } from 'react';
import MailDetailHeader from './MailDetailHeader';
import MailDetailBody from './MailDetailBody';
import { useDispatch, useSelector } from 'react-redux';
import {
  onGetSelectedMail,
  onNullifyMail,
  onUpdateMailReadStatus,
} from '../../../../redux/actions';
import { useHistory, useParams } from 'react-router-dom';
import AppsContent from '@crema/core/AppsContainer/AppsContent';
import AppsHeader from '@crema/core/AppsContainer/AppsHeader';
import AppAnimate from '@crema/core/AppAnimate';
import { MailDetailSkeleton } from '@crema/core/AppSkeleton/MailDetailSkeleton';
import Box from '@mui/material/Box';

const MailDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const contentRef = createRef();

  const { id } = useParams();
  const selectedMail = useSelector(({ mailApp }) => mailApp.selectedMail);

  useEffect(() => {
    dispatch(onGetSelectedMail(id));
    return () => {
      onNullifyMail();
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedMail && !selectedMail.isRead) {
      dispatch(onUpdateMailReadStatus([selectedMail.id], true));
    }
  }, [dispatch, selectedMail]);

  if (!selectedMail) {
    return <MailDetailSkeleton />;
  }

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      ref={contentRef}
    >
      <AppsHeader>
        <MailDetailHeader history={history} selectedMail={selectedMail} />
      </AppsHeader>
      <AppsContent isDetailView>
        <AppAnimate animatoin='transition.slideUpIn'>
          <MailDetailBody selectedMail={selectedMail} history={history} />
        </AppAnimate>
      </AppsContent>
    </Box>
  );
};

export default MailDetail;
