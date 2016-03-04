import ClusterPageContainer from './containers/ClusterPageContainer'
import PermissionsContainer from './containers/PermissionsContainer'

export const routes = {
  path: '/',
  indexRoute: {
    component: ClusterPageContainer
  },
  childRoutes: [
    {
      path: 'permissions',
      component: PermissionsContainer,
    },
  ]
};
