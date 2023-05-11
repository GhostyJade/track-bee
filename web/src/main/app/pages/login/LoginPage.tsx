import React from 'react';
import { Button, IconButton, Skeleton, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { Icon } from '@track-bee';
import { login } from '@track-bee/auth/AuthManager';

import { defaultUserHome } from 'main/config/routesConfig';
import { useAuth } from '@track-bee/auth/AuthContext';

export default function LoginPage(): JSX.Element {
    const navigate = useNavigate();
    const auth = useAuth();

    const [loginData, setLoginData] = React.useState<{ username: string | null; password: string | null }>({
        username: null,
        password: null,
    });
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginData((data) => ({ ...data, [name]: value }));
    };

    const onLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        login(loginData.username, loginData.password)
            .then((userData) => {
                // Success
                console.log(userData.defaultUserHome);
                auth.setAuthenticated(true);
                navigate(userData.defaultUserHome || defaultUserHome);
            })
            .catch(() => {
                // Error
            });
    };

    return (
        <div className='my-16 mx-64 flex w-full items-center rounded-xl bg-gray-100 shadow-xl'>
            <div className='hidden h-1/3 lg:block' />
            <div className='flex w-full flex-row'>
                <div className='w-full p-8 lg:w-1/2 '>
                    <Typography>Track.BEE</Typography>
                    <div className='hidden w-full flex-col items-center justify-center lg:flex'>
                        <Skeleton width={300} height={300} />
                        <Typography>Welcome back!</Typography>
                    </div>
                </div>
                <div className='flex h-full w-full flex-col flex-wrap gap-4 p-8 lg:w-1/2'>
                    <Typography>Sign In</Typography>
                    <form className='flex flex-col gap-4' onSubmit={onLogin}>
                        <TextField name='username' label='Username' onChange={onChange} />
                        <TextField name='password' label='Password' type='password' onChange={onChange} />

                        <Button type='submit' variant='contained'>
                            Login
                        </Button>
                    </form>

                    <div className='flex justify-between'>
                        <Typography textAlign='left' className='inline underline'>
                            <Link to='/register'>Register</Link>
                        </Typography>
                        <Typography textAlign='right' className='inline underline'>
                            <Link to='/forgot-password'>Forgot password?</Link>
                        </Typography>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div>
                            <Typography>Or continue with social media</Typography>
                        </div>
                        <div>
                            <IconButton disabled>
                                <Icon icon='twitter' />
                            </IconButton>
                            <IconButton disabled>
                                <Icon icon='github' />
                            </IconButton>
                            <IconButton disabled>
                                <Icon icon='microsoft' />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div className='hidden h-1/3 lg:block' />
            </div>
        </div>
    );
}
