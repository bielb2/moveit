import {createContext, ReactNode, useState} from 'react';

import challenges from '../../challenges.json';

interface Challenge {
  type: string;
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengesCompleted: number
  levelUp: () => void;
  startNewChallenge: () => void;
  activeChallenge: Challenge | null;
  resetChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export default function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(30);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  const challengeContextData = {
    level,
    currentExperience,
    challengesCompleted,
    experienceToNextLevel,
    levelUp,
    startNewChallenge,
    activeChallenge,
    resetChallenge,
  }

  return (
    <ChallengesContext.Provider value={challengeContextData}>
      {children}
    </ChallengesContext.Provider>
  )
}
