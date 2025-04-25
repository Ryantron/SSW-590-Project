import path from 'path';

export function joinPath(...paths) {
  const pth = path.join(...paths);
  const posixpath = pth.replaceAll(path.sep, path.posix.sep);
  return posixpath;
}
