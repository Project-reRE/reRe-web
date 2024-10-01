import { RouteObject } from 'react-router-dom';
import Login from '../page/Login';
import UserListPage from '../page/user/UserListPage';
import DashboardLayout from '../components/DashboardLayout';
import { AuthGuard, GuestGuard } from '../components/Guard';
import MovieOperatePage from 'page/operate/MovieOperatePage';
import MovieReportListPage from 'page/operate/MovieReportListPage';
import MovieReportDetailPage from 'page/operate/MovieReportDetailPage';
import UserDetailPage from 'page/user/UserDetailPage';
import MovieTopBannerListPage from 'page/contents/MovieTopBannerListPage';
import DailyRankingGenreListPage from 'page/contents/DailyRankingGenreListPage';
import ContentsPage from 'page/contents/ContentsPage';

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
