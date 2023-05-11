import { Link } from 'react-router-dom';

import { Button, Typography } from '@mui/material';
import TextField from '@track-bee/components/fields/TextField';

export default function ForgotPasswordPage(): JSX.Element {
    const onHandleSubmit = () => {};

    return (
        <div className='mx-96 my-16 flex w-full items-center rounded-xl bg-gray-100 shadow-xl'>
            <div className='flex w-full justify-center'>
                <div className='flex h-full w-full flex-col flex-wrap gap-4 p-8'>
                    <Typography>Forgot Password</Typography>
                    <Typography variant='subtitle2'>
                        Don't worry, sometimes happens! <br />
                        Please enter your username or email associated with your account in the field below
                    </Typography>
                    <form className='flex flex-col gap-4' onSubmit={onHandleSubmit}>
                        <TextField name='username' label='Email / Username' sendValueChange={() => {}} />

                        <Button type='submit' variant='contained'>
                            Confirm
                        </Button>
                    </form>

                    <div className='flex justify-between'>
                        <Typography textAlign='right' className='inline underline'>
                            <Link to='/login'>Back to login</Link>
                        </Typography>
                    </div>
                </div>
                <div className='hidden h-1/4 lg:block' />
            </div>
        </div>
    );
}
