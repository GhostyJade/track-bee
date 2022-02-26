import React, { useState } from 'react';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import AddNewTask from '../../AddNewTask';
import { StyledCalendar } from './Calendar.style';
import { Box } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './calendar.css';
import AppTooltip from '../../../../../@crema/core/AppTooltip';
import CustomToolbar from './CustomToolbar';

const localizer = momentLocalizer(moment);
// import {useHistory, useParams} from 'react-router-dom';
// import {Box} from '@mui/material';

// const getListData = (value, data) => {
//   let listData = [];
//   data.map((task) => {
//     if (
//       value.format('MM-DD-YYYY') ===
//       moment(task.scheduleDate).format('MM-DD-YYYY')
//     ) {
//       listData = listData.concat({
//         color: task.priority ? task.priority.color : '#7c7c7c',
//         title: task.title,
//         id: task.id,
//       });
//     }
//   });
//
//   return listData || [];
// };

const TaskCalender = () => {
  const [isAddTaskOpen, setAddTaskOpen] = useState(false);
  const taskList = useSelector(({ todoApp }) => todoApp.taskList);
  const history = useHistory();
  const { folder, label } = useParams();
  console.log('taskList:', taskList);
  const [selectedDate, setSelectedDate] = useState(null);

  // const history = useHistory();
  // const {folder, label} = useParams();
  const onSelectDate = ({ start }) => {
    setSelectedDate(start);
    setAddTaskOpen(true);
  };
  //
  // const onPanelChange = () => {
  //   onCloseAddTask();
  // };
  const onOpenAddTask = () => {
    if (selectedDate) {
      setAddTaskOpen(true);
    } else {
      setAddTaskOpen(false);
    }
  };

  const onViewTaskDetail = (task) => {
    if (folder) history.push(`/apps/todo/${folder}/${task.id}`);
    if (label) history.push(`/apps/todo/label/${label}/${task.id}`);
  };

  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  };
  const getEvents = () => {
    if (taskList?.length > 0)
      return taskList.map((task) => {
        return {
          ...task,
          title: task.title,
          start: task.startDate,
          end: task.startDate,
          allDay: true,
        };
      });
    return [];
  };
  return (
    <>
      <StyledCalendar
        localizer={localizer}
        events={getEvents()}
        views={['month', 'agenda']}
        tooltipAccessor={null}
        showMultiDayTimes
        selectable
        onSelectEvent={onViewTaskDetail}
        components={{
          toolbar: CustomToolbar,
          event: (item) => (
            <AppTooltip title={item.title}>
              <Box
                sx={{
                  backgroundColor: item?.event?.priority?.color,
                  borderRadius: 10,
                  px: 2.5,
                  py: 1,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.title}
              </Box>
            </AppTooltip>
          ),
        }}
        popup
        onSelectSlot={onSelectDate}
        defaultView='month'
      />

      {isAddTaskOpen ? (
        <AddNewTask
          selectedDate={selectedDate}
          onOpenAddTask={onOpenAddTask}
          onCloseAddTask={onCloseAddTask}
          isAddTaskOpen={isAddTaskOpen}
        />
      ) : null}
    </>
  );
};
export default TaskCalender;
