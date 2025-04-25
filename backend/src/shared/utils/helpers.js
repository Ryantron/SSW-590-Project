import path from 'path';

export function joinPath(...paths) {
  const pth = path.posix.join(...paths);
  return pth;
}
