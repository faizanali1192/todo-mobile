export const RouteName = {
  BOTTOM_TAB_HOME: 'BOTTOM_TAB_HOME',
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
  DASHBOARD: 'DASHBOARD',
  MORE: 'MORE',
} as const;

export type RouteNameType = keyof typeof RouteName;

export const NavConst = {
  DASHBOARD: 'Dashboard',
  MORE: 'More',
};

export const API_ENDPOINTS = {
  SIGNUP: 'users/register',
  LOGIN: 'users/login',
  ADD_TODO: 'todos',
  TODOS_LISTING: 'todos',
  DELETE_TODO: 'todos',
  LOGOUT: 'users/logout',
};
