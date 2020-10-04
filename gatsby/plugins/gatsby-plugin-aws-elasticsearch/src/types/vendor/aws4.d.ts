declare module 'aws4' {
  interface SignRequest {
    host?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    path?: string;
    service?: string;
    region?: string;
    signQuery?: boolean;
    body?: string;
    headers?: {
      Host?: string;
      Date?: string;
      'Content-Type'?: string;
      [key: string]: string;
    };
  }

  export interface AWSCredentials {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken?: string;
  }

  export function sign(options: SignRequest, credentials?: AWSCredentials): SignRequest;
}
