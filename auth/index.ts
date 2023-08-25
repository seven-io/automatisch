import verifyCredentials from './verify-credentials';
import isStillVerified from './is-still-verified';

export default {
  fields: [
    {
      clickToCopy: false,
      description: 'Found in your developer dashboard.',
      key: 'apiKey',
      label: 'API Key',
      placeholder: null,
      readOnly: false,
      required: true,
      type: 'string' as const,
      value: null,
    },
  ],

  verifyCredentials,
  isStillVerified,
};
