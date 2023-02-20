import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainPageProps {}
function MainPage(props: MainPageProps) {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default MainPage;
