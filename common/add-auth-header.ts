import { TBeforeRequest } from '@automatisch/types';

const addAuthHeader: TBeforeRequest = ($, requestConfig) => {
  if (
    requestConfig.headers &&
    $.auth.data?.apiKey
  ) {
    requestConfig.headers.Accept = 'application/json';
    requestConfig.headers['Content-Type'] = 'application/json';
    requestConfig.headers.SentWith = 'automatisch';
    requestConfig.headers['X-Api-Key'] = $.auth.data.apiKey as string;
  }

  return requestConfig;
};

export default addAuthHeader;
