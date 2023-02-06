import { createStyles, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Ref, useRef } from "react";

interface LyricProps {
    children: React.ReactNode;
    scrollToPosition: (position: number) => void;
}

export const Lyric = ({ children, scrollToPosition }: LyricProps) => {
    const { classes, cx } = useStyles();
    const ref = useRef() as Ref<HTMLHeadingElement>;
    const { height } = useViewportSize();

    const getDomRect = (): DOMRect => {
        return (ref as any)?.current?.getBoundingClientRect();
    };

    const scrollToLyric = () => {
        const rect = getDomRect();
        const position = rect.top - (height/2) + (rect.height/2);
        scrollToPosition(position);
    };

    const getTextClasses = () => {
        const rect = getDomRect();
        if (!rect) return classes.lyricText;
        const midpoint = height/2;
        return cx(
            classes.lyricText, {
                [classes.pastText]: rect.bottom < midpoint,
                [classes.currentText]: rect.top <= midpoint && rect.bottom >= midpoint,
            }
        );
    };

    return (
        <Title
            ref={ref}
            className={getTextClasses()}
            order={1}
            onClick={scrollToLyric}
        >
            { children }
        </Title>
    );
};

const useStyles = createStyles((theme) => ({
    lyricText: {
        lineHeight: 1.5,
        cursor: 'pointer',
        '&:hover': {
            color: 'white',
        },
        transition: 'all .1s ease-out'
    },
    pastText: {
        color: '#ffffffb3',
    },
    currentText: {
        color: 'white',
    },
}));