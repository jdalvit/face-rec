export const appRequest = <T>(
  url: string,
  config: RequestInit = {}
): Promise<T> => {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as T);
};
