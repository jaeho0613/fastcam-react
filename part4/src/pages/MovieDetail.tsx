import { useEffect } from 'react';

interface MovieDetailProps {}
function MovieDetail(props: MovieDetailProps) {
  useEffect(() => {
    console.log('MovieDetail Effect');
    return () => {
      console.log('Close Work');
    };
  }, []);

  return <>MovieDetail Page</>;
}

export default MovieDetail;
