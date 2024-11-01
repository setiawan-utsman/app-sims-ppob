// import { dataEncryption, dataDecryption } from './security.helper';
// import { isJson } from './data.helper';

export function getItem(key: string, defaultValue: any = null) {
  try {
    const LsData = localStorage.getItem(key);
    if (LsData === null) return defaultValue;
      return JSON.parse(LsData);
  } catch (error) {
    return defaultValue;
  }
}

export function setItem(key: string, value: any) {
  let data = JSON.stringify(value);

  return localStorage.setItem(key, data);
}

