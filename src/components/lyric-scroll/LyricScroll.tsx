import { Container, createStyles, ScrollArea } from "@mantine/core";
import { useRef, useState } from "react";
import { PageSection } from "../../types/PageSection.enum";
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

    const createLyric = (text: string) => (
        <Lyric scrollToPosition={scrollToPosition}>
            { text }
        </Lyric>
    );

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
                    scrollPosition={scrollPosition.y}
                    scrollToPosition={scrollToPosition}
                >
                    { createLyric('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel faucibus tellus.') }
                    { createLyric('Morbi varius neque eu porta semper. Maecenas euismod et metus ac pellentesque.') }
                    { createLyric('Praesent eleifend risus at malesuada faucibus. Vestibulum aliquet lorem leo, in suscipit nibh tempor eu.') }
                    { createLyric('Vivamus imperdiet arcu id urna rhoncus, vel luctus mauris hendrerit. Sed neque orci, mollis quis velit in, rhoncus lobortis orci.') }
                    { createLyric('Praesent tincidunt tortor sem, ac dictum dui luctus vitae. Nunc feugiat cursus massa eu tincidunt.') }
                    { createLyric('Vivamus id ante vehicula, faucibus neque at, ornare tortor.') }
                    { createLyric('Maecenas euismod ex condimentum, fringilla arcu vitae, aliquet orci.') }
                    { createLyric('Quisque vitae mauris quis nisi ornare mollis id eu enim.') }
                    { createLyric('Suspendisse lobortis faucibus mauris, et tempus enim.') }
                    { createLyric('Donec tempus viverra lorem, in lacinia dui. Mauris nec diam eget tellus sagittis lacinia.') }
                </Section>
                <Section
                    section={PageSection.SECTION2}
                    scrollPosition={scrollPosition.y}
                    scrollToPosition={scrollToPosition}
                >
                    { createLyric('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel faucibus tellus.') }
                    { createLyric('Morbi varius neque eu porta semper. Maecenas euismod et metus ac pellentesque.') }
                    { createLyric('Praesent eleifend risus at malesuada faucibus. Vestibulum aliquet lorem leo, in suscipit nibh tempor eu.') }
                    { createLyric('Vivamus imperdiet arcu id urna rhoncus, vel luctus mauris hendrerit. Sed neque orci, mollis quis velit in, rhoncus lobortis orci.') }
                    { createLyric('Praesent tincidunt tortor sem, ac dictum dui luctus vitae. Nunc feugiat cursus massa eu tincidunt.') }
                    { createLyric('Vivamus id ante vehicula, faucibus neque at, ornare tortor.') }
                    { createLyric('Maecenas euismod ex condimentum, fringilla arcu vitae, aliquet orci.') }
                    { createLyric('Quisque vitae mauris quis nisi ornare mollis id eu enim.') }
                    { createLyric('Suspendisse lobortis faucibus mauris, et tempus enim.') }
                    { createLyric('Donec tempus viverra lorem, in lacinia dui. Mauris nec diam eget tellus sagittis lacinia.') }
                </Section>
                <Section
                    section={PageSection.SECTION3}
                    scrollPosition={scrollPosition.y}
                    scrollToPosition={scrollToPosition}
                >
                    { createLyric('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel faucibus tellus.') }
                    { createLyric('Morbi varius neque eu porta semper. Maecenas euismod et metus ac pellentesque.') }
                    { createLyric('Praesent eleifend risus at malesuada faucibus. Vestibulum aliquet lorem leo, in suscipit nibh tempor eu.') }
                    { createLyric('Vivamus imperdiet arcu id urna rhoncus, vel luctus mauris hendrerit. Sed neque orci, mollis quis velit in, rhoncus lobortis orci.') }
                    { createLyric('Praesent tincidunt tortor sem, ac dictum dui luctus vitae. Nunc feugiat cursus massa eu tincidunt.') }
                    { createLyric('Vivamus id ante vehicula, faucibus neque at, ornare tortor.') }
                    { createLyric('Maecenas euismod ex condimentum, fringilla arcu vitae, aliquet orci.') }
                    { createLyric('Quisque vitae mauris quis nisi ornare mollis id eu enim.') }
                    { createLyric('Suspendisse lobortis faucibus mauris, et tempus enim.') }
                    { createLyric('Donec tempus viverra lorem, in lacinia dui. Mauris nec diam eget tellus sagittis lacinia.') }
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