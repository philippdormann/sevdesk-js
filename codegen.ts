import { createClient } from '@hey-api/openapi-ts';

createClient({
  input: 'https://api.sevdesk.de/openapi.yaml',
  output: 'src',
});