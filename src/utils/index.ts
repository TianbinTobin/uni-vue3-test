import { DOMAIN } from './domain';

/**
 * @description 修复CDN图片路径
 */
export const fixAssetsUrl = (url: string) => {
  return url.startsWith('http') ? url : DOMAIN.RES_OSS + url;
};
