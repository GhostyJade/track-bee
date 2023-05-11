import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import navigation, { NavigationItem } from 'main/config/navigationConfig';
import { useLocation } from 'react-router-dom';
import history from '@history';
import React from 'react';

const drawerWidth = 210;

const NavigationBarItem = ({
    title,
    selected,
    onClick,
}: {
    title: string;
    selected: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}): JSX.Element => {
    return (
        <ListItem>
            <ListItemButton
                sx={{ borderRadius: 2 }}
                className={selected ? 'bg-blue-400 text-white' : ''}
                onClick={onClick}
            >
                <ListItemText primary={title} />
            </ListItemButton>
        </ListItem>
    );
};

export default function NavigationBar(): JSX.Element {
    const location = useLocation();
    console.log(location);

    const onClick = (url: string) => () => {
        history.push(url);
    };

    return (
        <Drawer
            variant='permanent'
            anchor='left'
            sx={{ width: drawerWidth, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }}
        >
            {/* LOGO */}
            <div className='my-8 mx-16'>Track.BEE</div>
            {/* ITEMS */}
            <List>
                {navigation.map((value: NavigationItem, key: number) => (
                    <NavigationBarItem
                        key={key}
                        title={value.title}
                        selected={location.pathname === value.url}
                        onClick={onClick(value.url)}
                    />
                ))}
            </List>
        </Drawer>
    );
}
