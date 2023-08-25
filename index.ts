import defineApp from '../../helpers/define-app';
import addAuthHeader from './common/add-auth-header';
import auth from './auth';
import triggers from './triggers';
import actions from './actions';

export default defineApp({
  actions,
  apiBaseUrl: 'https://gateway.seven.io/api',
  auth,
  authDocUrl: 'https://help.seven.io/en/api-key-access',
  baseUrl: 'https://www.seven.io',
  beforeRequest: [addAuthHeader],
  iconUrl: '{BASE_URL}/apps/seven/assets/favicon.svg',
  key: 'seven',
  name: 'seven',
  primaryColor: '00d488',
  supportsConnections: true,
  triggers,
});
