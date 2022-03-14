export const http = (url) => {
  // FETCH

  return fetch(url)
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject({
            error: true,
            status: res.status || "00",
            statusText: res.statusText || "Oops something went wrong =(",
          })
    )
    .catch((error) => error);
};
