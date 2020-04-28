import React from 'react';
import styles from './App.module.css';
import List from './Components/List';

function App() {
  return (
    <div className={styles.app_style}>
      <header className={styles.app_header}>Hello! This is your TODO-list:</header>
      <div className={styles.content}>
        <List className={styles.content}/>
      </div> 
      <footer className={styles.app_footer}/>
    </div>
  );
}

export default App;
