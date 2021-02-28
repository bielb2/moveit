import '../styles/global.css';

import  { ChallengesProvider }  from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }: any) {
  return (
  <ChallengesProvider>
      <Component {...pageProps} />
  </ChallengesProvider>
  )
}

export default MyApp
