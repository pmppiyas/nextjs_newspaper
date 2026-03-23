export type NavItem = {
  title: string;
  href: string;
  iconName?: string;
};

export type RouteSection = {
  title: string;
  nav: NavItem[];
};

export const adminRoutes: RouteSection[] = [
  {
    title: 'Content Management',
    nav: [
      {
        title: 'Dashboard',
        href: '/admin/dashboard',
        iconName: 'LayoutDashboard',
      },
      {
        title: 'All Articles',
        href: '/admin/dashboard/articles',
        iconName: 'FileText',
      },
      {
        title: 'Drafts',
        href: '/admin/dashboard/drafts',
        iconName: 'FileEdit',
      },
      {
        title: 'Categories',
        href: '/admin/dashboard/categories',
        iconName: 'Tags',
      },
    ],
  },
  {
    title: 'User Management',
    nav: [
      {
        title: 'Journalists',
        href: '/admin/dashboard/journalists',
        iconName: 'Users',
      },
      {
        title: 'Verification',
        href: '/admin/dashboard/journalists/requests',
        iconName: 'UserCheck',
      },
      {
        title: 'Subscribers',
        href: '/admin/dashboard/subscribers',
        iconName: 'Mail',
      },
    ],
  },
  {
    title: 'Analytics & Settings',
    nav: [
      {
        title: 'Statistics',
        href: '/admin/dashboard/stats',
        iconName: 'BarChart3',
      },
      {
        title: 'Site Settings',
        href: '/admin/dashboard/settings',
        iconName: 'Settings',
      },
      {
        title: 'Ad Manager',
        href: '/admin/dashboard/ads',
        iconName: 'Megaphone',
      },
    ],
  },
];

export const journalistRoutes: RouteSection[] = [
  {
    title: 'Editorial Works',
    nav: [
      {
        title: 'Overview',
        href: '/journalist/dashboard',
        iconName: 'LayoutDashboard',
      },
      {
        title: 'Write News',
        href: '/journalist/dashboard/create',
        iconName: 'PenTool',
      },
      {
        title: 'My News',
        href: '/journalist/dashboard/my-articles',
        iconName: 'BookOpen',
      },
      {
        title: 'Pending Approval',
        href: '/journalist/dashboard/pending',
        iconName: 'Clock',
      },
    ],
  },
  {
    title: 'Account',
    nav: [
      {
        title: 'Profile',
        href: '/journalist/dashboard/profile',
        iconName: 'User',
      },
      {
        title: 'Performance',
        href: '/journalist/dashboard/performance',
        iconName: 'TrendingUp',
      },
      {
        title: 'Helpline',
        href: '/journalist/dashboard/helpline',
        iconName: 'PhoneCall',
      },
    ],
  },
];

export const readerRoutes: RouteSection[] = [
  {
    title: 'Reader Portal',
    nav: [
      {
        title: 'Overview',
        href: '/dashboard',
        iconName: 'LayoutDashboard',
      },
      {
        title: 'Bookmarks',
        href: '/dashboard/bookmarks',
        iconName: 'Bookmark',
      },
      {
        title: 'Reading History',
        href: '/dashboard/history',
        iconName: 'History',
      },
      {
        title: 'My Comments',
        href: '/dashboard/comments',
        iconName: 'MessageSquare',
      },
    ],
  },
  {
    title: 'Invitation',
    nav: [
      {
        title: 'Be A Journalist',
        href: '/dashboard/be_a_journalist',
      },
    ],
  },
  {
    title: 'Preference',
    nav: [
      {
        title: 'Subscribed Tags',
        href: '/reader/dashboard/tags',
        iconName: 'Hash',
      },
      {
        title: 'Profile Settings',
        href: '/reader/dashboard/setting',
        iconName: 'UserSettings',
      },
    ],
  },
];

export const getRoutesByRole = (role: string): RouteSection[] => {
  switch (role) {
    case 'ADMIN':
      return adminRoutes;
    case 'JOURNALIST':
      return journalistRoutes;
    case 'READER':
      return readerRoutes;
    default:
      return [];
  }
};
