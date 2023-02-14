import { Anchor, Button, Container, createStyles, Group, Image, Stack, Text, Title, UnstyledButton } from "@mantine/core";
import { Project } from "../types/Project.types";
import testVideo from '../assets/videos/test.mp4';
import { Ref, useEffect, useRef } from "react";
import { useViewportSize } from "@mantine/hooks";
import { getCutoff } from "../utils/scroll.utils";

type ProjectSectionProps = Project & {
    
}

export const ProjectSection = ({ name, date, text, url }: ProjectSectionProps) => {
    const { classes, cx } = useStyles();
    const ref = useRef() as Ref<HTMLDivElement>;
    const videoRef = useRef() as Ref<HTMLVideoElement>;
    const { height } = useViewportSize();

    const getDomRect = (): DOMRect => {
        return (ref as any)?.current?.getBoundingClientRect();
    };

    const checkIsActive = () => {
        const rect = getDomRect();
        if (!rect) return false;
        const cutoff = height/2;
        return rect.top <= cutoff && rect.bottom >= cutoff;
    };

    const isActive = checkIsActive();

    useEffect(() => {
        if (videoRef) {
            if (isActive) (videoRef as any).current.play();
            else (videoRef as any).current.pause();
        }
    }, [isActive, videoRef]);

    const getContainerClasses = () => {
        const rect = getDomRect();
        if (!rect) return classes.container;
        const cutoff = height/2;
        return cx(
            classes.container, {
                [classes.pastText]: rect.bottom < cutoff,
                [classes.currentText]: rect.top <= cutoff && rect.bottom >= cutoff,
            }
        );
    };

    return (
        <Container ref={ref} px={0} className={getContainerClasses()}>
            <Group className={classes.group}>
                <Stack spacing={5}>
                    <Title className={classes.title}>{ name }</Title>
                    <Text className={classes.date}>{ date }</Text>
                </Stack>
                <a href={url} target="_blank" rel="noreferrer">
                    <UnstyledButton className={classes.button}>View on Github</UnstyledButton>
                </a>
            </Group>
            <Group noWrap spacing="lg">
                <Text className={classes.descriptionText}>{ text }</Text>
                <video ref={videoRef} width="400" height="200" autoPlay muted loop>
                    <source src={testVideo} type="video/mp4" />
                </video>
            </Group>
        </Container>
    );
};

const useStyles = createStyles((theme) => ({
    container: {
        // color: theme.white,
        margin: '50px auto',
    },
    pastText: {
        color: '#ffffffb3',
    },
    currentText: {
        color: theme.white,
    },
    group: {
        justifyContent: 'space-between',
    },
    button: {
        color: 'black',
        backgroundColor: 'white',
        fontWeight: 700,
        padding: '1rem',
        borderRadius: '500px',

        '&:hover': {
            transform: 'scale(1.02)',
        }
    },
    title: {
        letterSpacing: '-1px',
        fontWeight: 900,
        fontSize: '3rem',
    },
    date: {
        fontWeight: 400,
    },
    descriptionText: {
        marginTop: '30px',
    },
}));