/* eslint-disable unicorn/filename-case */
import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import NewPage from '~/pages/new/New';

export interface RouteType {
  path: string;
  getElement: () => ReactElement;
}

export const ROUTES: RouteType[] = [
  { path: '/', getElement: () => <Navigate to="new" /> },
  { path: '/new', getElement: () => <NewPage /> },
];
