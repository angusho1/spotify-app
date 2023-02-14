import React, { createContext, useState } from 'react';
import './App.css';
import { Container, createStyles, Group } from '@mantine/core';
import { LyricScroll } from './components/lyric-scroll/LyricScroll';
import { SideNavBar } from './components/nav-bar/SideNavBar';
import { PageSection, PageSectionSettings } from './types/PageSection.enum';
import { PageSectionState } from './types/PageSectionState.types';

export const SectionContext = createContext({
  pageSection: PageSection.INTRO,
  clicked: false,
  updateSection: (state: PageSectionState) => {},
});

function App() {
  const { classes } = useStyles();
  const [pageSectionState, setPageSectionState] = useState<PageSectionState>({
    pageSection: PageSection.INTRO,
    clicked: false,
  });

  return (
    <Container
      sx={{
        backgroundColor: PageSectionSettings[pageSectionState.pageSection].color,
      }}
      className={classes.container}
    >
      <Group className={classes.group} align="flex-start" noWrap>
        <SectionContext.Provider value={{
          ...pageSectionState,
          updateSection: setPageSectionState,
        }}>
          <SideNavBar />
          <LyricScroll />
        </SectionContext.Provider>
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
