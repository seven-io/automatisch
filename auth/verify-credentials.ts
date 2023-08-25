import { IGlobalVariable } from '@automatisch/types';

const verifyCredentials = async ($: IGlobalVariable) => {
  await $.http.get('/balance');

  await $.auth.set({
    screenName: $.auth.data.apiKey,
  });
};

export default verifyCredentials;
