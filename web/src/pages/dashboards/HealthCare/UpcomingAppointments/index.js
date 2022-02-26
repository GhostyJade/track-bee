import React from 'react';
import {useIntl} from 'react-intl';
import AppCard from '@crema/core/AppCard';
import AppMenu from '@crema/core/AppMenu';
import AppList from '@crema/core/AppList';
import AppointmentCell from './AppointmentCell';
import AppScrollbar from '@crema/core/AppScrollbar';
import PropTypes from 'prop-types';

const UpcomingAppointments = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      contentStyle={{px: 0}}
      title={messages['healthCare.upcomingAppointments']}
      action={<AppMenu />}
    >
      <AppScrollbar sx={{maxHeight: 280}}>
        <AppList
          data={data}
          renderRow={(appointment) => (
            <AppointmentCell key={appointment.id} appointment={appointment} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default UpcomingAppointments;

UpcomingAppointments.propTypes = {
  data: PropTypes.array,
};
