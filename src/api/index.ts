import config from '../lib/config';

// when complexity scales, should be handled with axios
const url = `${config.sources.baseUrl}${config.sources.dataPath}?per_page=100`;

export const getPosts = async () => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
