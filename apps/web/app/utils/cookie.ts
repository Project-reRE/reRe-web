'use server';

import { cookies } from 'next/headers';

export async function setCookie(key: string, value: string) {
  cookies().set(key, value);
}

export async function getCookie(key: string) {
  const cookieData = cookies().get(key)?.value;
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData);
    }, 1000)
  );
}

export async function deleteCookie(key: string) {
  return cookies().delete(key);
}
