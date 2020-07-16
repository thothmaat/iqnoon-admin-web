import Loadable from 'react-loadable';
import Loading from '../components/Loading';
import { RouteConfig } from 'react-router-config';

interface IMallRouteConfig extends RouteConfig {
  menu?: string;
}

const routes: IMallRouteConfig[] = [
  // {
  //   path: '/with-framed',
  //   component: Loadable({
  //     loader: () => import('../layouts/FramedLayout'),
  //     loading: Loading,
  //   }),
  //   routes: [
  //     {
  //       path: '/with-framed/inquiry-detail/:inquiryId',
  //       component: Loadable({
  //         loader: () => import('../pages/inquiry-detail'),
  //         loading: Loading,
  //       }),
  //       menu: 'INQUIRY',
  //     },
  //     {
  //       path: '/with-framed/data-statistics',
  //       component: Loadable({
  //         loader: () => import('../pages/data-statistics'),
  //         loading: Loading,
  //       }),
  //     },
  //   ],
  // },
  // {
  //   path: '/',
  //   component: Loadable({
  //     loader: () => import('../layouts/DefaultLayout'),
  //     loading: Loading,
  //   }),
  //   routes: [
  //     {
  //       path: '/inquiry-detail/:inquiryId',
  //       component: Loadable({
  //         loader: () => import('../pages/inquiry-detail'),
  //         loading: Loading,
  //       }),
  //     },
  //     {
  //       path: '/expired-inquiry-detail/:inquiryId',
  //       component: Loadable({
  //         loader: () => import('../pages/expired-inquiry-detail'),
  //         loading: Loading,
  //       }),
  //     },
  //     {
  //       path: '/data-statistics',
  //       component: Loadable({
  //         loader: () => import('../pages/data-statistics'),
  //         loading: Loading,
  //       }),
  //     },
  //     {
  //       path: '/sidebar',
  //       component: Loadable({
  //         loader: () => import('../components/sidebar'),
  //         loading: Loading,
  //       }),
  //     },
  //   ],
  // },
];

export default routes;
