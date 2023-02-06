import { createStyles, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Ref, useRef } from "react";

interface LyricProps {
    text: string;
    scrollToPosition: (position: number) => void;
}

export const Lyric = ({ text, scrollToPosition }: LyricProps) => {
    const { classes } = useStyles();
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
        let classNames = classes.lyricText;
        const rect = getDomRect();
        if (!rect) return classNames;
        const midpoint = height/2;
        if (rect.bottom < midpoint) classNames += ` ${classes.pastText}`;
        else if (rect.top <= midpoint && rect.bottom >= midpoint) classNames += ` ${classes.currentText}`;
        return classNames;
    };

    return (
        <Title
            ref={ref}
            className={getTextClasses()}
            order={1}
            onClick={scrollToLyric}
        >
            { text }
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