import defineTrigger from '../../../../helpers/define-trigger';
import fetchMessages from './fetch-messages';

export default defineTrigger({
  arguments: [
    {
      description: 'The number to receive the SMS on. It should be a seven number.',
      key: 'toNumber',
      label: 'To Number',
      required: false,
      type: 'string',
    },
  ],
  description: 'Triggers when a new SMS is received.',
  key: 'receiveSms',
  name: 'Receive SMS',
  pollInterval: 15,

  async run($) {
    await fetchMessages($);
  },
});
