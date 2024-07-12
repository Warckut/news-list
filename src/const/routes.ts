import { Navigate } from 'react-router-dom';
import NewPage from '~/pages/new/New';

export interface RouteType {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Element: any;
  props: Record<string, string>;
}

export const ROUTES: RouteType[] = [
  { path: '/', Element: Navigate, props: { to: 'new' } },
  { path: '/new', Element: NewPage, props: {} },
];
