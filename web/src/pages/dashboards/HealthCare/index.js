import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onGetHCData} from '../../../redux/actions';
import AppInfoView from '@crema/core/AppInfoView';
import {Grid} from '@mui/material';
import AppGridContainer from '@crema/core/AppGridContainer';
import DrCard from './DrCard';
import AppAnimate from '@crema/core/AppAnimate';
import HealthStatics from './HealthStatics';
import NewPatients from './NewPatients';
import CancelVisits from './CancelVisits';
import TopDoctors from './TopDoctors';
import UpcomingAppointments from './UpcomingAppointments';
import Notifications from './Notifications';
import HospitalStatics from './HospitalStatics';
import RecentPatients from './RecentPatients';
import InfoWidget from './InfoWidget';
import HospitalActivity from './HospitalActivity';
import ProfileCard from './ProfileCard';
import AppointmentCard from './AppointmentCard';
import HeartRate from './HeartRate';
import YourActivity from './YourActivity';

const HealthCare = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetHCData());
  }, [dispatch]);

  const {healthCare} = useSelector(({dashboard}) => dashboard);

  return (
    <>
      {healthCare ? (
        <AppAnimate animation='transition.slideUpIn' delay={200}>
          <AppGridContainer>
            {healthCare.salesState.map((data, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <DrCard data={data} />
              </Grid>
            ))}

            <Grid item xs={12} sm={12} md={6}>
              <HospitalActivity data={healthCare.hospitalActivity} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProfileCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppGridContainer>
                {healthCare.appointmentCards.map((data, index) => (
                  <Grid item xs={12} key={index}>
                    <AppointmentCard data={data} />
                  </Grid>
                ))}
              </AppGridContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <HeartRate data={healthCare.heartCard} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <YourActivity data={healthCare.yourActivity} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <HeartRate data={healthCare.temperatureCard} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppGridContainer>
                {healthCare.doses.map((data, index) => (
                  <Grid item xs={12} key={index}>
                    <HospitalStatics data={data} />
                  </Grid>
                ))}
              </AppGridContainer>
            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
              <TopDoctors data={healthCare.topDoctors} />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <UpcomingAppointments data={healthCare.upcomingAppointment} />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Notifications data={healthCare.notifications} />
            </Grid>
            <Grid item xs={12} md={6}>
              <HealthStatics data={healthCare.heathStatics} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <NewPatients data={healthCare.newPatients} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CancelVisits data={healthCare.cancelVisits} />
            </Grid>

            {healthCare.hospitalStatics.map((data, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <HospitalStatics data={data} />
              </Grid>
            ))}
            <Grid item xs={12} sm={12} md={8}>
              <RecentPatients recentPatients={healthCare.recentPatients} />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <AppGridContainer>
                {healthCare.bloodCard.map((data, index) => (
                  <Grid item xs={12} sm={6} key={'grid-' + index}>
                    <InfoWidget data={data} />
                  </Grid>
                ))}
              </AppGridContainer>
            </Grid>
          </AppGridContainer>
        </AppAnimate>
      ) : null}
      <AppInfoView />
    </>
  );
};

export default HealthCare;
