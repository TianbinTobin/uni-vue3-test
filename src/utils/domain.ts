type TypeEnv = 'test' | 'fat' | 'pre' | 'prod';

const { VITE_API_ENV } = import.meta.env;

export const ENV = (VITE_API_ENV || 'pre') as TypeEnv;

export const API_ENV = ENV === 'prod' ? '' : `-${ENV}`;

export const TOKEN_KEY = `mp-token`;

export function setStorage(key: string, value: string) {
  return new Promise<any>((resolve, reject) => {
    uni.setStorage({
      key,
      data: value,
      success: (result) => {
        resolve(result);
      },
      fail: (reason) => {
        reject(reason);
      },
    });
  });
}

export function getStorage(key: string) {
  return new Promise<any>((resolve, reject) => {
    uni.getStorage({
      key,
      success: (result) => {
        resolve(result.data);
      },
      fail: (reason) => {
        reject(reason);
      },
    });
  });
}

export function removeStorage(key: string) {
  return new Promise<any>((resolve, reject) => {
    uni.removeStorage({
      key,
      success: (result) => {
        resolve(result);
      },
      fail: (reason) => {
        reject(reason);
      },
    });
  });
}

export function setToken(token: string) {
  return setStorage(TOKEN_KEY, token);
}

export function getToken() {
  return getStorage(TOKEN_KEY);
}

export function removeToken() {
  return removeStorage(TOKEN_KEY);
}
