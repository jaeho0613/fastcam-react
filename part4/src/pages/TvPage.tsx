import { useEffect } from 'react';

interface TvPageProps {}
function TvPage(props: TvPageProps) {
  useEffect(() => {
    console.log('TvPage Effect');
    return () => {
      console.log('Close Work');
    };
  }, []);

  return <>TvPage Page</>;
}

export default TvPage;
