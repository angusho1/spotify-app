import { Container, createStyles, Grid, Group, Stack, Text, Title, UnstyledButton } from "@mantine/core";
import { Project } from "../types/Project.types";
import { Ref, useEffect, useRef } from "react";
import { useViewportSize } from "@mantine/hooks";

type ProjectSectionProps = Project & {
    
}

export const ProjectSection = ({ name, date, text, url, videoUrl }: ProjectSectionProps) => {
    const { classes, cx } = useStyles();
    const ref = useRef() as Ref<HTMLDivElement>;
    const videoRef = useRef() as Ref<HTMLVideoElement>;
    const { height } = useViewportSize();

    const getDomRect = (): DOMRect => {
        return (ref as any)?.current?.getBoundingClientRect();
    };

    const rect = getDomRect();
    const cutoff = height / 2;
    const passed = rect?.bottom < cutoff;
    const current = rect?.top <= cutoff && rect.bottom >= cutoff;

    useEffect(() => {
        if (videoRef) {
            if (current) (videoRef as any).current.play();
            else (videoRef as any).current.pause();
        }
    }, [current, videoRef]);

    return (
        <Container ref={ref} px={0} className={cx(
            classes.container, {
                [classes.pastText]: passed,
                [classes.currentText]: current,
            }
        )}>
            <Group className={classes.group}>
                <Stack spacing={5}>
                    <Title className={classes.title}>{ name }</Title>
                    <Text className={classes.date}>{ date }</Text>
                </Stack>
                <a href={url} target="_blank" rel="noreferrer">
                    <UnstyledButton className={cx(
                        classes.button, {
                            [classes.buttonPassed]: passed,
                            [classes.buttonCurrent]: current,
                        }
                    )}>View on Github</UnstyledButton>
                </a>
            </Group>
            <Grid gutter="xl" align="center">
                <Grid.Col md={6}>
                    <Text className={classes.descriptionText}>{ text }</Text>
                </Grid.Col>
                <Grid.Col md={6}>
                    <video ref={videoRef} autoPlay muted loop
                        className={cx (classes.video, {
                            [classes.fadedVideo]: !current,
                        }
                    )}>
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

const useStyles = createStyles((theme) => ({
    container: {
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
        fontWeight: 700,
        padding: '1rem',
        borderRadius: '500px',
        transition: 'opacity .1s ease-out',

        '&:hover': {
            transform: 'scale(1.02)',
        }
    },
    buttonPassed: {
        color: 'black',
        backgroundColor: '#ffffffb3',
    },
    buttonCurrent: {
        color: 'black',
        backgroundColor: 'white',
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
    video: {
        transition: 'opacity .1s ease-out',
        width: '100%',
    },
    fadedVideo: {
        opacity: 0.4,
    },
}));