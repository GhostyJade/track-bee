import React from 'react';
import AppCard from '@crema/core/AppCard';
import {useIntl} from 'react-intl';
import AppMenu from '@crema/core/AppMenu';
import AppScrollbar from '@crema/core/AppScrollbar';
import AppList from '@crema/core/AppList';
import NotificationCell from './NotificationCell';
import PropTypes from 'prop-types';

const Notifications = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      contentStyle={{px: 0}}
      title={messages['healthCare.notification']}
      action={<AppMenu />}
    >
      <AppScrollbar sx={{maxHeight: 280}}>
        <AppList
          data={data}
          renderRow={(notification) => (
            <NotificationCell
              key={notification.id}
              notification={notification}
            />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Notifications;

Notifications.propTypes = {
  data: PropTypes.array,
};
