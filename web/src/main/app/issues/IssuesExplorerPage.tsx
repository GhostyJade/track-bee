import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { useDispatch, useSelector } from 'react-redux';

import PageToolbar from '@track-bee/components/layout/toolbar/PageToolbar';
import { AppDispatch } from 'main/store';
import { getIssues, selectIssues } from './store/issuesSlice';
import { Typography } from '@mui/material';
import PageLayout from '@track-bee/components/layout/page/PageLayout';

export default function IssuesExplorerPage() {
    const dispatch = useDispatch<AppDispatch>();
    const issues = useSelector(selectIssues);
    console.log(issues);

    React.useEffect(() => {
        dispatch(getIssues());
    }, [dispatch]);

    return (
        <></>
        // <PageLayout />
        // <div className='flex h-full w-full flex-col'>
        //     <div className='w-full'>
        //         <PageToolbar />
        //     </div>
        //     <div>
        //         {!isEmpty(issues) &&
        //             issues.map((item: any, key: string) => <Typography key={key}>{item.issue_title}</Typography>)}
        //     </div>
        // </div>
    );
}
