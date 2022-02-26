import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  onAddNewBoard,
  onEditBoardDetail,
  onGetBoardList,
} from '../../../../redux/actions';
import { useHistory } from 'react-router-dom';
import AddNewBoard from './AddNewBoard';
import IntlMessages from '@crema/utility/IntlMessages';
import Box from '@mui/material/Box';
import AppGridContainer from '@crema/core/AppGridContainer';
import BoardItem from './BoardItem';
import AddBoardButton from './AddBoardButton';
import { Fonts } from '../../../../shared/constants/AppEnums';
import AppInfoView from '@crema/core/AppInfoView';
import { Zoom } from '@mui/material';

const BoardList = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const boardList = useSelector(({ scrumboardApp }) => scrumboardApp.boardList);

  const [isAddBoardOpen, setAddBoardOpen] = useState(false);

  const [selectedBoard, setSelectedBoard] = useState(null);

  useEffect(() => {
    dispatch(onGetBoardList());
  }, [dispatch]);

  const onCloseAddBoardModal = () => {
    setAddBoardOpen(false);
  };

  const onAddButtonClick = () => {
    setSelectedBoard(null);
    setAddBoardOpen(true);
  };

  const onEditButtonClick = (board) => {
    setSelectedBoard(board);
    setAddBoardOpen(true);
  };

  const onAddBoard = (name) => {
    if (selectedBoard) {
      const board = { ...selectedBoard, name };
      dispatch(onEditBoardDetail(board));
    } else {
      dispatch(onAddNewBoard({ name }));
    }
  };

  const onViewBoardDetail = (board) => {
    history.push(`/apps/scrum-board/${board.id}`);
  };

  return (
    <>
      <Zoom direction='up' in mountOnEnter unmountOnExit>
        <Box
          sx={{
            pt: 4,
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
          }}
        >
          <Box
            component='h2'
            sx={{
              my: { xs: 5, sm: 5, xl: 8 },
              color: 'text.primary',
              fontWeight: Fonts.BOLD,
              textAlign: 'center',
              fontSize: 16,
            }}
          >
            <IntlMessages id='scrumboard.scrumboardApp' />
          </Box>
          <AppGridContainer
            sx={{
              justifyContent: 'center',
            }}
          >
            {boardList && boardList.length > 0
              ? boardList.map((board) => {
                  return (
                    <BoardItem
                      key={board.id}
                      board={board}
                      onEditButtonClick={onEditButtonClick}
                      onViewBoardDetail={onViewBoardDetail}
                    />
                  );
                })
              : null}
            <AddBoardButton onAddButtonClick={onAddButtonClick} />
          </AppGridContainer>
        </Box>
      </Zoom>

      {isAddBoardOpen ? (
        <AddNewBoard
          isAddBoardOpen={isAddBoardOpen}
          onCloseAddBoardModal={onCloseAddBoardModal}
          onAddBoard={onAddBoard}
          selectedBoard={selectedBoard}
        />
      ) : null}
      <AppInfoView />
    </>
  );
};

export default BoardList;
