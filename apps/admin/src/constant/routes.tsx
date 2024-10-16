import { RouteObject } from 'react-router-dom';

import ContentsPage from 'page/contents/ContentsPage';
import DailyRankingGenreListPage from 'page/contents/DailyRankingGenreListPage';
import MovieTopBannerListPage from 'page/contents/MovieTopBannerListPage';
import MovieOperatePage from 'page/operate/MovieOperatePage';
import MovieReportDetailPage from 'page/operate/MovieReportDetailPage';
import MovieReportListPage from 'page/operate/MovieReportListPage';
import UserDetailPage from 'page/user/UserDetailPage';

import DashboardLayout from '../components/DashboardLayout';
import { AuthGuard, GuestGuard } from '../components/Guard';
import Login from '../page/Login';
import UserListPage from '../page/user/UserListPage';

// 라우터 설정
const routes: RouteObject[] = [
  {
    path: '/login',
    element: (
      <GuestGuard>
        <Login />
      </GuestGuard>
    ),
  },
  {
    path: '/',
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: '/management',
        children: [
          {
            path: 'users',
            children: [
              { index: true, element: <UserListPage /> },
              { path: ':id', element: <UserDetailPage /> },
            ],
          },
          {
            path: 'contents',
            children: [
              { index: true, element: <ContentsPage /> },
              { path: 'movie', element: <MovieTopBannerListPage /> },
              { path: 'daily-ranking-genre', element: <DailyRankingGenreListPage /> },
            ],
          },
          {
            path: 'operate',
            children: [
              {
                path: 'movie',
                children: [
                  { index: true, element: <MovieOperatePage /> },
                  {
                    path: 'reports',
                    children: [
                      { index: true, element: <MovieReportListPage /> },
                      { path: ':id', element: <MovieReportDetailPage /> },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;
