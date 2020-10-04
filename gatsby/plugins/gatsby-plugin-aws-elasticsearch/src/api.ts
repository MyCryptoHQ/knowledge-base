import { AWSCredentials, sign, SignRequest } from 'aws4';
import fetch from 'node-fetch';
import { Options } from './types';

/**
 * Sign a request with the AWS credentials.
 *
 * @param {SignRequest} options
 * @param {AWSCredentials} credentials
 */
export const signRequest = (options: SignRequest, credentials: AWSCredentials): Record<string, string> => {
  // aws4 modifies the original object so we create a copy here
  const { headers } = sign({ ...options, headers: { ...options.headers } }, credentials);
  return headers as Record<string, string>;
};

type ResponseOrError<Response> = [true, undefined] | [false, Response];

/**
 * Sign and send a request to the endpoint.
 *
 * @template Method
 * @template Document
 * @param {Method} method
 * @param {string} path
 * @param {RequestMethod<Document>[Method]} document
 * @param {Options} options
 */
export const sendRequest = async <Request, Response>(
  method: 'GET' | 'PUT' | 'POST' | 'DELETE',
  path: string,
  document: Request,
  options: Options
): Promise<ResponseOrError<Response>> => {
  const url = new URL(`${options.endpoint}/${options.index}/${path}`);
  const body = JSON.stringify(document);

  const headers = signRequest(
    {
      method,
      path: url.pathname,
      body,
      service: 'es',
      headers: {
        'Content-Type': 'application/json',
        Host: url.hostname
      }
    },
    {
      accessKeyId: options.accessKeyId,
      secretAccessKey: options.secretAccessKey
    }
  );

  const response = await fetch(url.href, {
    method: method,
    body: body,
    headers
  });

  if (!response.ok) {
    // TODO: Provide more information about error
    return [true, undefined];
  }

  return [false, await response.json()];
};
