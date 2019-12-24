import { useRef, useEffect } from 'react';

export const usePolling = ({ url, callback }) => {
  const currentUrl = useRef(url);
  const timer = useRef();

  useEffect(() => {
    if (currentUrl.current !== url) {
      currentUrl.current = url;

      stopPolling(timer.current);
      startPolling();
    }
  }, [startPolling, url]);

  const pollItems = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        callback(data);
      })
      .catch((e) => console.log(e));
  };

  function startPolling() {
    pollItems();

    timer.current = setInterval(() => {
      pollItems();
    }, 3000);
  }

  function stopPolling() {
    clearInterval(timer.current);
  }

  return [startPolling, stopPolling];
};
