import { Container, createStyles, ScrollArea, Space } from "@mantine/core";
import { useRef, useState } from "react";
import { PageSection } from "../../types/PageSection.enum";
import { AboutMeSection } from "../sections/AboutMeSection";
import { ExperiencesSection } from "../sections/ExperiencesSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { WhySpotifySection } from "../sections/WhySpotifySection";
import { Lyric } from "./Lyric";
import { Section } from "./Section";

export const LyricScroll = () => {
    const { classes } = useStyles();

    const viewport = useRef<HTMLDivElement>(null);
    const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

    const scrollToPosition = (position: number) => {
        viewport?.current?.scrollTo({
            top: scrollPosition.y + position,
            behavior: 'smooth',
        });
    };

    const renderLyric = (text: string, key?: any) => (
        <Lyric key={key} scrollToPosition={scrollToPosition}>
            { text }
        </Lyric>
    );

    const sectionProps = {
        scrollPosition: scrollPosition.y,
        scrollToPosition: scrollToPosition,
    };

    return (
        <ScrollArea
            className={classes.scrollArea}
            classNames={{ scrollbar: classes.scrollbar }}
            viewportRef={viewport}
            onScrollPositionChange={onScrollPositionChange}
            offsetScrollbars
        >
            <Container className={classes.sectionsContainer}>
                <Section
                    section={PageSection.INTRO}
                    {...sectionProps}
                >
                    <AboutMeSection renderLyric={renderLyric} />
                </Section>
                <Section
                    section={PageSection.EXPERIENCE}
                    {...sectionProps}
                >
                    <ExperiencesSection renderLyric={renderLyric} />
                </Section>
                <Section
                    section={PageSection.PROJECTS}
                    {...sectionProps}
                >
                    <ProjectsSection renderLyric={renderLyric} />
                </Section>
                <Section
                    section={PageSection.WHY}
                    {...sectionProps}
                >
                    <WhySpotifySection renderLyric={renderLyric} />
                    <Space h="xl" />
                    <Space h="xl" />
                    <Space h="xl" />
                    <Space h="xl" />
                    <Space h="xl" />
                    <Space h="xl" />
                    <Space h="xl" />
                    <Space h="xl" />
                    <Space h="xl" />
                    <Space h="xl" />
                    <Space h="xl" />
                    <Space h="xl" />
                    <Space h="xl" />
                    <Space h="xl" />
                </Section>
            </Container>
        </ScrollArea>
    );
};

const useStyles = createStyles((theme) => ({
    scrollArea: {
        height: '100vh',
        flex: 'auto',
    },
    scrollbar: {
        '&, &:hover': {
            backgroundColor: 'transparent',
        },
    },
    sectionsContainer: {
        
        maxWidth: '100vw',
    },
}));