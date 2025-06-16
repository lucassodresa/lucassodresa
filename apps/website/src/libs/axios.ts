import axios from 'axios';
import { DATASET, PROJECT_ID } from './sanity.ts';

export const sanityClient = axios.create({
  baseURL: `https://${PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${DATASET}`,
});
