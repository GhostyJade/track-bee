import React from 'react';
import NavigationBar from '../navigation/NavigationBar';

interface PageLayoutProps {
    children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps): JSX.Element {
    return (
        <div className='flex h-full w-full'>
            <NavigationBar />
            <div className='relative h-full w-full flex-grow bg-gray-100'>{children}</div>
        </div>
    );
}
