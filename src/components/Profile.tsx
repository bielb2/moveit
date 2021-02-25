import styles from '../styles/components/Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/bielb2.png" alt="Gabriel B."/>
      <div>
        <strong>Gabriel B.</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 2
        </p>
      </div>
    </div>
  );
}
