import validator from 'validator';
import { isNil } from 'lodash';

import knex from '../config/database';

const { isURL } = validator;

export interface ShortLink {
  url: string;
  label: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewShortLink {
  url: string;
  label?: string;
}

/**
 * Check if the input is valid NewShortLink
 */
export function isNewShortLink(input: any): input is NewShortLink {
  try {
    const url = input?.url;
    const label = input?.label;

    if (typeof url !== 'string' || !isURL(url)) {
      return false;
    }
    if (!isNil(label) && typeof label !== 'string') {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

export const ShortLinkModel = () => knex<ShortLink, ShortLink[]>('shortlink');
