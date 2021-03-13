import express from 'express';

import {
  getViewSingleShortLink,
  postCreateShortLink,
} from '../handlers/shortlink';

const r = express.Router();

// Shortlink
r.get('/shortlink/:shortLinkID', getViewSingleShortLink);
r.post('/shortlink', postCreateShortLink);

r.get('/', (_, res) => res.json({
  message: 'API V1 is running',
}));

export default r;
