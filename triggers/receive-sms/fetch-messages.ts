import { IGlobalVariable, IJSONObject } from '@automatisch/types';
import {URLSearchParams} from 'node:url'

const fetchMessages = async ($: IGlobalVariable) => {
  const urlSearchParams = new URLSearchParams({type: 'outbound'})
  const toNumber = $.step.parameters.toNumber as string;
  if (toNumber?.length) urlSearchParams.set('to', toNumber)
  const qs = urlSearchParams.toString()
  const requestPath = `/journal?${qs}`;
  const response = await $.http.get(requestPath);

  response.data.forEach((message: IJSONObject) => {
    $.pushTriggerItem({
      meta: {
        internalId: message.timestamp as string,
      },
      raw: message,
    });
  });
};

export default fetchMessages;
