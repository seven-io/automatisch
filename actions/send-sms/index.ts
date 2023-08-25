import defineAction from '../../../../helpers/define-action';

export default defineAction({
  arguments: [
    {
      description: 'The number to send the SMS from.',
      key: 'fromNumber',
      label: 'From Number',
      required: false,
      type: 'string' as const,
      variables: true,
    },
    {
      description: 'The number to send the SMS to.',
      key: 'toNumber',
      label: 'To Number',
      required: true,
      type: 'string' as const,
      variables: true,
    },
    {
      description: 'The message to send.',
      key: 'message',
      label: 'Message',
      required: true,
      type: 'string' as const,
      variables: true,
    },
  ],
  description: 'Sends an SMS',
  key: 'sendSms',
  name: 'Send an SMS',

  async run($) {
    console.log('sendSMS', $)
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

    const response = await $.http.post('/sms', params);

    $.setActionItem({ raw: response.data });
  },
});
