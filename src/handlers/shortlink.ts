import { Request, Response } from 'express';
import sid from 'shortid';

import { isNewShortLink, ShortLinkModel } from '../models/shortlink';

/**
 * Fetch shortlink based on id.
 */
export async function getViewSingleShortLink(req: Request, res: Response) {
  const { shortLinkID } = req.params;
  if (!(typeof shortLinkID !== 'number')) {
    return res.status(400).json({
      message: 'Request is not valid',
    });
  }
  const shortLink = await ShortLinkModel().where('id', shortLinkID).first();
  return res.json({
    ...shortLink,
  });
}

/**
 * Receive input from post request and create a new short link based on provided input.
 */
export async function postCreateShortLink(req: Request, res: Response) {
  const input = req.body;
  if (!isNewShortLink(input)) {
    return res.status(400).json({
      message: 'Request is not valid',
    });
  }
  const label = input?.label ?? sid.generate();
  const createdIDs = await ShortLinkModel().insert({
    label,
    url: input.url,
  });
  const id = createdIDs[0];
  const createdShortLink = await ShortLinkModel()
    .where('id', id)
    .select(['id', 'url', 'label', 'created_at', 'updated_at']);

  return res.json({
    ...createdShortLink[0],
  });
}
