const url = 'https://www.staging19.prynce.it/wp-json/wp/v2/prynce-map-entry';

export const getPosts = async ({
  onError,
}: {
  onError: (err: Error) => void;
}) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
    return data;
  } catch (err) {
    if (err instanceof Error) {
      onError(err);
      console.error(err);
    }
  }
};
