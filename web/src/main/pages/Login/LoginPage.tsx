import { Button, IconButton, Typography } from '@mui/material';
import { Icon } from '@track-bee';

import TextField from '@track-bee/components/fields/TextField';
import { Link } from 'react-router-dom';

export default function LoginPage(): JSX.Element {
    return (
        <div className='my-16 mx-64 shadow-xl rounded-xl w-full bg-gray-100'>
            <div className='h-1/3' />
            <div className='flex flex-row'>
                <div className='hidden lg:block w-1/2 p-8 relative'>
                    <div className='absolute top-[50%] right-[50%]' style={{ transform: 'translate(50%, 50%)' }}>
                        Welcome back!
                    </div>
                </div>
                <div className='w-1/2 flex flex-col flex-wrap p-8 gap-4'>
                    <Typography>Sign In</Typography>
                    <TextField name='username' label='Username' />
                    <TextField name='password' label='Password' type='password' />

                    <Button type='submit' variant='contained'>
                        Login
                    </Button>

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
                <div className='h-1/3' />
            </div>
        </div>
    );
}
