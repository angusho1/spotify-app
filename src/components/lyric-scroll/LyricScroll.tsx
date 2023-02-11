import { Container, createStyles, ScrollArea, Space } from "@mantine/core";
import { useRef, useState } from "react";
import { PageSection } from "../../types/PageSection.enum";
import { AboutMeSection } from "../sections/AboutMeSection";
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

    const renderLyric = (text: string) => (
        <Lyric scrollToPosition={scrollToPosition}>
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
        >
            <Container>
                <Section
                    section={PageSection.INTRO}
                    {...sectionProps}
                >
                    <AboutMeSection renderLyric={renderLyric} />
                </Section>
                <Section
                    section={PageSection.SECTION2}
                    {...sectionProps}
                >
                    { renderLyric('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel faucibus tellus.') }
                    { renderLyric('Morbi varius neque eu porta semper. Maecenas euismod et metus ac pellentesque.') }
                    { renderLyric('Praesent eleifend risus at malesuada faucibus. Vestibulum aliquet lorem leo, in suscipit nibh tempor eu.') }
                    { renderLyric('Vivamus imperdiet arcu id urna rhoncus, vel luctus mauris hendrerit. Sed neque orci, mollis quis velit in, rhoncus lobortis orci.') }
                    { renderLyric('Praesent tincidunt tortor sem, ac dictum dui luctus vitae. Nunc feugiat cursus massa eu tincidunt.') }
                    { renderLyric('Vivamus id ante vehicula, faucibus neque at, ornare tortor.') }
                    { renderLyric('Maecenas euismod ex condimentum, fringilla arcu vitae, aliquet orci.') }
                    { renderLyric('Quisque vitae mauris quis nisi ornare mollis id eu enim.') }
                    { renderLyric('Suspendisse lobortis faucibus mauris, et tempus enim.') }
                    { renderLyric('Donec tempus viverra lorem, in lacinia dui. Mauris nec diam eget tellus sagittis lacinia.') }
                </Section>
                <Section
                    section={PageSection.SECTION3}
                    {...sectionProps}
                >
                    { renderLyric('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel faucibus tellus.') }
                    { renderLyric('Morbi varius neque eu porta semper. Maecenas euismod et metus ac pellentesque.') }
                    { renderLyric('Praesent eleifend risus at malesuada faucibus. Vestibulum aliquet lorem leo, in suscipit nibh tempor eu.') }
                    { renderLyric('Vivamus imperdiet arcu id urna rhoncus, vel luctus mauris hendrerit. Sed neque orci, mollis quis velit in, rhoncus lobortis orci.') }
                    { renderLyric('Praesent tincidunt tortor sem, ac dictum dui luctus vitae. Nunc feugiat cursus massa eu tincidunt.') }
                    { renderLyric('Vivamus id ante vehicula, faucibus neque at, ornare tortor.') }
                    { renderLyric('Maecenas euismod ex condimentum, fringilla arcu vitae, aliquet orci.') }
                    { renderLyric('Quisque vitae mauris quis nisi ornare mollis id eu enim.') }
                    { renderLyric('Suspendisse lobortis faucibus mauris, et tempus enim.') }
                    { renderLyric('Donec tempus viverra lorem, in lacinia dui. Mauris nec diam eget tellus sagittis lacinia.') }
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
    }
}));