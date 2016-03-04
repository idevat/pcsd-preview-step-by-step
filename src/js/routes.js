import PcsdContainer from './containers/PcsdContainer'
import PermissionsContainer from './containers/PermissionsContainer'

export const routes = {
  path: '/',
  indexRoute: {
    component: PcsdContainer
  },
  childRoutes: [
    {
      path: 'permissions',
      component: PermissionsContainer,
    },
  ]
};
