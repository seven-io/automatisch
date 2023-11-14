import defineAction from '../../../../helpers/define-action';

export default defineAction({
  arguments: [
    {
      description: 'The number to initiate the call from. Must be verified.',
      key: 'fromNumber',
      label: 'From Number',
      required: false,
      type: 'string' as const,
      variables: true,
    },
    {
      description: 'The phone number for calling.',
      key: 'toNumber',
      label: 'To Number',
      required: true,
      type: 'string' as const,
      variables: true,
    },
    {
      description: 'The message to convert to speech.',
      key: 'message',
      label: 'Message',
      required: true,
      type: 'string' as const,
      variables: true,
    },
  ],
  description: 'Makes a text-to-speech call',
  key: 'sendVoice',
  name: 'Make a text-to-speech call',

  async run($) {
    const text = $.step.parameters.message as string;
    const from = $.step.parameters.fromNumber as string;
    const to = $.step.parameters.toNumber as string;

    const params: {
      from?: string
      text: string
      to: string
    } = {
      text,
      to,
    }
    if (from?.length) params.from = from

    const response = await $.http.post('/voice', params);

    $.setActionItem({ raw: response.data });
  },
});
