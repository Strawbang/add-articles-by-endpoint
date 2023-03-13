export const getArticles = (
  endpointApi: RequestInfo | URL,
  setArticles: (arg0: Response) => any
) => {
  fetch(endpointApi)
    .then((res) => res.json())
    .then((res) => setArticles(res));
};
