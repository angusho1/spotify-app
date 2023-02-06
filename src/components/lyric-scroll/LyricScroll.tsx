import { Container, ScrollArea } from "@mantine/core";
import { useRef, useState } from "react";
import { Lyric } from "./Lyric";

export const LyricScroll = () => {
    const viewport = useRef<HTMLDivElement>(null);
    const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

    const scrollToPosition = (position: number) => {
        viewport?.current?.scrollTo({
            top: scrollPosition.y + position,
            behavior: 'smooth',
        });
    };

    const lines = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel faucibus tellus.',
        'Morbi varius neque eu porta semper. Maecenas euismod et metus ac pellentesque.',
        'Praesent eleifend risus at malesuada faucibus. Vestibulum aliquet lorem leo, in suscipit nibh tempor eu.',
        'Vivamus imperdiet arcu id urna rhoncus, vel luctus mauris hendrerit. Sed neque orci, mollis quis velit in, rhoncus lobortis orci.',
        'Praesent tincidunt tortor sem, ac dictum dui luctus vitae. Nunc feugiat cursus massa eu tincidunt.',
        'Vivamus id ante vehicula, faucibus neque at, ornare tortor.',
        'Maecenas euismod ex condimentum, fringilla arcu vitae, aliquet orci.',
        'Quisque vitae mauris quis nisi ornare mollis id eu enim.',
        'Suspendisse lobortis faucibus mauris, et tempus enim.',
        'Donec tempus viverra lorem, in lacinia dui. Mauris nec diam eget tellus sagittis lacinia.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel faucibus tellus.',
        'Morbi varius neque eu porta semper. Maecenas euismod et metus ac pellentesque.',
        'Praesent eleifend risus at malesuada faucibus. Vestibulum aliquet lorem leo, in suscipit nibh tempor eu.',
        'Vivamus imperdiet arcu id urna rhoncus, vel luctus mauris hendrerit. Sed neque orci, mollis quis velit in, rhoncus lobortis orci.',
        'Praesent tincidunt tortor sem, ac dictum dui luctus vitae. Nunc feugiat cursus massa eu tincidunt.',
        'Vivamus id ante vehicula, faucibus neque at, ornare tortor.',
        'Maecenas euismod ex condimentum, fringilla arcu vitae, aliquet orci.',
        'Quisque vitae mauris quis nisi ornare mollis id eu enim.',
        'Suspendisse lobortis faucibus mauris, et tempus enim.',
        'Donec tempus viverra lorem, in lacinia dui. Mauris nec diam eget tellus sagittis lacinia.',
    ];

    return (
        <ScrollArea
            style={{ height: '100vh' }}
            viewportRef={viewport}
            onScrollPositionChange={onScrollPositionChange}
        >
            <Container>
                { lines.map((line, i) => (
                    <Lyric
                        text={line}
                        key={i}
                        scrollToPosition={scrollToPosition}
                    />
                )) }
            </Container>
        </ScrollArea>
    );
};

