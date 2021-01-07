import { useState, useEffect } from 'react';

const useInitialState = (api) => {
  const [videos, setVideos] = useState({
    myList: [],
    trends: [],
    originals: [],
  });
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setVideos(data)); /** Se asigna nuevos valores a videos */
  }, []);

  return videos;
};

export default useInitialState;
