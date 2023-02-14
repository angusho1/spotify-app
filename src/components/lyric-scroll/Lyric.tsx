import { createStyles, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Ref, useRef } from "react";
import { getCutoff } from "../../utils/scroll.utils";

interface LyricProps {
    children: React.ReactNode;
    isHeading?: boolean;
    scrollToPosition: (position: number) => void;
}

export const Lyric = ({ children, isHeading, scrollToPosition }: LyricProps) => {
    const { classes, cx } = useStyles();
    const ref = useRef() as Ref<HTMLHeadingElement>;
    const { height } = useViewportSize();

    const getDomRect = (): DOMRect => {
        return (ref as any)?.current?.getBoundingClientRect();
    };

    const scrollToLyric = () => {
        const rect = getDomRect();
        const cutoff = getCutoff(height);
        const position = rect.top - cutoff + (rect.height/2);
        scrollToPosition(position);
    };

    const getTextClasses = () => {
        const rect = getDomRect();
        if (!rect) return classes.lyricText;
        const cutoff = getCutoff(height);
        return cx(
            classes.lyricText, {
                [classes.pastText]: rect.bottom < cutoff,
                [classes.currentText]: rect.top <= cutoff && rect.bottom >= cutoff,
                [classes.heading]: isHeading,
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
        transition: 'all .1s ease-out',

        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            fontSize: '1.5rem',
        },
    },
    heading: {
        fontSize: '4rem',

        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            fontSize: '2.5rem',
        },
    },
    pastText: {
        color: '#ffffffb3',
    },
    currentText: {
        color: 'white',
    },
}));