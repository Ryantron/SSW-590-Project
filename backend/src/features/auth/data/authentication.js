import { adminConfig } from '@/shared/configs/settings';

export async function login(username, password) {
  if (username === adminConfig.username && password === adminConfig.password)
    return true;
  else return false;
}
