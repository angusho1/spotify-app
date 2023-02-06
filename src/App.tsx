import React, { useState } from 'react';
import './App.css';
import { Container, createStyles, useMantineTheme } from '@mantine/core';
import { LyricScroll } from './components/lyric-scroll/LyricScroll';

function App() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [backgroundColor, setBackgroundColor] = useState<string>(theme.colors.grape[6]);

  return (
    <Container
      sx={{
        backgroundColor
      }}
      className={classes.container}
    >
      <LyricScroll
        currentBackgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
      />
    </Container>
  );
}

const useStyles = createStyles((theme) => ({
  container: {
    height: '100vh',
    maxWidth: '100vw',
    transition: 'background-color 500ms linear'
  },
}));

export default App;
