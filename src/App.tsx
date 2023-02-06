import React, { useState } from 'react';
import './App.css';
import { Container, createStyles, Group, useMantineTheme } from '@mantine/core';
import { LyricScroll } from './components/lyric-scroll/LyricScroll';
import { SideNavBar } from './components/nav-bar/SideNavBar';

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
      <Group className={classes.group} align="flex-start" noWrap>
        <SideNavBar />
        <LyricScroll
          currentBackgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />
      </Group>
    </Container>
  );
}

const useStyles = createStyles((theme) => ({
  container: {
    height: '100vh',
    maxWidth: '100vw',
    transition: 'background-color 500ms linear',
    padding: 0,
  },
  group: {
    justifyContent: 'space-between',
    width: '100%',
  }
}));

export default App;
