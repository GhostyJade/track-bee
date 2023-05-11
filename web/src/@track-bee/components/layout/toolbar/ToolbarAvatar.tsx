import React from 'react';
import { Avatar, Box, Button, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { useUserData } from '@track-bee';
import { useNavigate } from 'react-router-dom';

export default function ToolbarAvatar() {
    const { isLoggedIn } = useUserData();
    const navigate = useNavigate();

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLoginButton = () => {
        navigate('/login');
    };

    if (!isLoggedIn)
        return (
            <Box sx={{ flexGrow: 0 }}>
                <Button onClick={handleLoginButton} sx={{ my: 2, color: 'white', display: 'block' }}>
                    Login
                </Button>
            </Box>
        );
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>My Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>Logout</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
}
