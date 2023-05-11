import PageLayout from '@track-bee/components/layout/page/PageLayout';
import IssuesExplorerPage from './IssuesExplorerPage';

export default {
    authLevel: null,
    routes: [
        {
            path: '/issues/browse',
            element: (
                <PageLayout>
                    <IssuesExplorerPage />
                </PageLayout>
            ),
        },
        // {
        //     path:'/issues/create',
        //     element: <IssuesEditPage create/>
        // }
    ],
};
