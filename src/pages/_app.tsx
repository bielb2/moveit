import '../styles/global.css';

import  { ChallengesProvider }  from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }: any) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
