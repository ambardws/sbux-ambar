const storagePrefix = 'nextjs-boilerplate';

const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) as string);
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
  getTheme: () => (typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null),
};

export default storage;
