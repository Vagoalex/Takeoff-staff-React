import { useCallback, useState } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [process, setProcess] = useState<string>('waiting'); // default state

  const request = useCallback(
    async (
      url: string,
      method = 'GET',
      body = null,
      headers = { 'Content-Type': 'application/json' }
    ) => {
      // loading in fetching
      setLoading(true);
      setProcess('loading');

      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok)
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);

        const data = await response.json();

        setLoading(false);
        // setProcess('confirmed') in .then with promise in any file
        return data;
      } catch (error) {
        let message = 'Unknown Error';
        if (error instanceof Error) {
          message = error.message;
        } else {
          message = String(error);
        }

        setLoading(false);
        setError(message);
        setProcess('error'); // error fetching
        throw error;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setError(null);

    setProcess('loading'); // again loading state
  }, []);

  return { request, clearError, loading, error, process, setProcess };
};
