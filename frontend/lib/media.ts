import { getStrapiURL } from "./api";
import { StrapiMedia } from './types';

export function getStrapiMedia(media: StrapiMedia) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}