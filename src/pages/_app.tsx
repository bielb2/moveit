import '../styles/global.css';

import  ChallengesContext  from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }: any) {
  return (
  <ChallengesContext>
    <Component {...pageProps} />
  </ChallengesContext>
  )
}

export default MyApp
