import React from 'react';
import './App.css';
import { Container, createStyles } from '@mantine/core';
import { LyricScroll } from './components/lyric-scroll/LyricScroll';

function App() {
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      <LyricScroll />
    </Container>
  );
}

const useStyles = createStyles((theme) => ({
  container: {
    height: '100vh',
    maxWidth: '100vw',
    backgroundColor: theme.colors.blue[6],

    // TODO: Change background colours
    // Media query with value from theme
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      backgroundColor: theme.colors.pink[6],
    },

    // Static media query
    '@media (max-width: 800px)': {
      backgroundColor: theme.colors.orange[6],
    },
  },
}));

export default App;
