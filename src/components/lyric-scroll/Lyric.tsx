import { createStyles, Title } from "@mantine/core";
import { Ref, useRef } from "react";

interface LyricProps {
    index: number;
    text: string;
    targetRef?: Ref<HTMLElement>;
    scrollToPosition: (position: number, elementHeight: number) => void;
}

export const Lyric = ({ text, index, targetRef, scrollToPosition }: LyricProps) => {
    const { classes } = useStyles();
    const ref = useRef() as Ref<HTMLHeadingElement>;

    const textClasses = index === 4 ? `${classes.lyricText} ${classes.currentText}` : (index < 4 ? `${classes.lyricText} ${classes.pastText}` : classes.lyricText);

    return (
        <Title
            ref={ref}
            className={textClasses}
            order={1}
            onClick={() => {
                const rect = (ref as any).current.getBoundingClientRect();
                scrollToPosition(rect.top, rect.height);
            }}
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