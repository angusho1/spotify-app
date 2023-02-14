import { Container, createStyles, Group, Image, Stack, Text, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Ref, useRef } from "react";
import { WorkExperience } from "../types/Experience.types";

type ExperienceAlbumProps = WorkExperience & {
    
}

export const ExperienceAlbum = ({ company, position, date, companyDescription, text, imgUrl, companyUrl }: ExperienceAlbumProps) => {
    const { classes, cx } = useStyles();
    const ref = useRef() as Ref<HTMLDivElement>;
    const { height } = useViewportSize();

    const getDomRect = (): DOMRect => {
        return (ref as any)?.current?.getBoundingClientRect();
    };

    const rect = getDomRect();
    const cutoff = height / 2;
    const passed = rect?.bottom < cutoff;
    const current = rect?.top <= cutoff && rect.bottom >= cutoff;

    return (
        <Container ref={ref} px={0} className={cx(
            classes.container, {
                [classes.pastText]: passed,
                [classes.currentText]: current,
            }
        )}>
            <Group spacing="lg" className={classes.group}>
                <Container px={0} className={classes.imgContainer}>
                    <a
                        href={companyUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            radius={0}
                            src={imgUrl}
                            alt="Random unsplash image"
                            width="100%"
                            height="100%"
                            classNames={{
                                image: cx(classes.image, {
                                    [classes.fadedImage]: !current,
                                })
                            }}
                        />
                    </a>
                </Container>
                <Stack
                    align="flex-start"
                    justify="flex-end"
                    spacing={5}
                    className={classes.stack}
                >
                    <Text className={classes.position}>{ position }</Text>
                    <Title className={classes.title}>{ company }</Title>
                    <Text className={cx(
                        classes.companyDescription, {
                            [classes.pastText]: passed,
                            [classes.currentCompanyDescription]: current,
                        }
                    )}>
                        { companyDescription }
                    </Text>
                    <Text className={classes.date}>{ date }</Text>
                </Stack>
            </Group>
            <Text className={classes.descriptionText}>{ text }</Text>
        </Container>
    );
};

const useStyles = createStyles((theme) => ({
    container: {
        // color: theme.black,
        margin: '50px auto',
    },
    pastText: {
        color: '#ffffffb3',
    },
    currentText: {
        color: theme.white,
    },
    group: {
        alignItems: 'flex-end',
    },
    image: {
        WebkitBoxShadow: '0 4px 40px rgba(0,0,0,.5)',
        boxShadow: '0 4px 40px rgba(0,0,0,.5)',
        transition: 'opacity .1s ease-out',
    },
    imgContainer: {
        width: '192px',
        height: '192px',

        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            width: '125px',
            height: '125px',
        },

        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            width: '150px',
            height: '150px',
        },

        [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
            width: '192px',
            height: '192px',
        },
    },
    stack: {
        flex: 1,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flex: '100%',
        },
    },
    fadedImage: {
        opacity: 0.2,
    },
    title: {
        letterSpacing: '-1px',
        fontWeight: 900,
        fontSize: '3rem',

        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            fontSize: '2.5rem',
        },

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            fontSize: '2rem',
        },
    },
    position: {
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,
        textTransform: 'uppercase',
    },
    companyDescription: {
        fontSize: theme.fontSizes.sm,
    },
    currentCompanyDescription: {
        color: 'hsla(0,0%,100%,.7)',
    },
    date: {
        fontWeight: 400,
    },
    descriptionText: {
        marginTop: '30px',
    },
}));