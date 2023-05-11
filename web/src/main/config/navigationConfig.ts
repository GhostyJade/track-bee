export interface NavigationItem {
    title: string;
    url: string;
    children?: NavigationItem[];
}

const navigation: NavigationItem[] = [
    {
        title: 'Dashboard',
        url: '/home',
    },
    {
        title: 'Issues',
        url: '/issues/browse',
    },
];

export default navigation;
