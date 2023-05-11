import PageLayout from '@track-bee/components/layout/page/PageLayout';
import HomeDashboard from './HomeDashboard';

export default {
    // authLevel: 'user',
    authLevel: null,
    routes: [
        {
            path: '/home',
            element: (
                <PageLayout>
                    <HomeDashboard />
                </PageLayout>
            ),
        },
    ],
};
