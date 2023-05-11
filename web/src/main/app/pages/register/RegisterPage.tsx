import React from 'react';
import Formsy from 'formsy-react';
import { Button, Checkbox, Divider, FormControlLabel, Grid, Typography } from '@mui/material';
import { FormsyTextField as TextField } from '@track-bee/components/fields/TextField';

export default function RegisterPage(): JSX.Element {
    const [registrationData, setRegistrationData] = React.useState({});

    const sendValueChange = (name: string, value: string) => {
        setRegistrationData((data) => ({ ...data, [name]: value }));
    };

    return (
        <Formsy className='my-16 mx-64 flex w-full items-center overflow-y-auto rounded-xl bg-gray-100 shadow-xl'>
            <div className='hidden w-1/2 lg:block' />
            <div className='w-1/2 px-2 py-8'>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography className='pl-2' fontWeight='bold' fontSize={24}>
                            Register
                        </Typography>
                        <Divider />
                        <Typography className='pl-2' variant='subtitle2'>
                            Create your account to start reporting bugs.
                        </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TextField
                            name='username'
                            label='Username'
                            sendValueChange={sendValueChange}
                            required
                            helperText='required'
                        />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TextField name='name' label='Name' sendValueChange={sendValueChange} />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TextField name='Surname' label='Surname' sendValueChange={sendValueChange} />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TextField name='mail' label='E-mail' sendValueChange={sendValueChange} />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TextField name='password' label='Password' type='password' sendValueChange={sendValueChange} />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TextField
                            name='password-check'
                            label='Confirm Password'
                            type='password'
                            sendValueChange={sendValueChange}
                        />
                    </Grid>
                </Grid>
                <div>
                    <FormControlLabel label='Accept Terms and Privacy Policy' control={<Checkbox />} />
                    <Button variant='contained' type='submit'>
                        Register
                    </Button>
                </div>
                <div className='h-1/4' />
            </div>
        </Formsy>
    );
}
