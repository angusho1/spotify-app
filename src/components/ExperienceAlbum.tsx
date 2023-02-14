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
            <Group noWrap spacing="lg" className={classes.group}>
                <a
                    href={companyUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        radius={0}
                        src={imgUrl}
                        alt="Random unsplash image"
                        width={192}
                        height={192}
                        classNames={{ image: classes.image }}
                    />
                </a>
                <Stack
                    align="flex-start"
                    justify="flex-end"
                    spacing={5}
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
    },
    title: {
        letterSpacing: '-1px',
        fontWeight: 900,
        fontSize: '3rem',
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