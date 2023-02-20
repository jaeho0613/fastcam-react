import { useEffect } from 'react';

interface TvDetailProps {}
function TvDetail(props: TvDetailProps) {
  useEffect(() => {
    console.log('TvDetail Effect');
    return () => {
      console.log('Close Work');
    };
  }, []);

  return <>TvDetail Page</>;
}

export default TvDetail;
