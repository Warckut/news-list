/* eslint-disable unicorn/filename-case */
import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import Home from '~/pages/Home/Home';
import News from '~/pages/News/News';

export interface RouteType {
  path: string;
  getElement: () => ReactElement;
}

export const ROUTES: RouteType[] = [
  { path: '/', getElement: () => <Navigate to='news' /> },
  { path: '/news', getElement: () => <Home /> },
  { path: '/news/:id', getElement: () => <News /> },
];
