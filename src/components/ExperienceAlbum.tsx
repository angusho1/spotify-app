import { Container, createStyles, Group, Image, Stack, Text, Title } from "@mantine/core";
import { WorkExperience } from "../types/Experience.types";

type ExperienceAlbumProps = WorkExperience & {
    
}

export const ExperienceAlbum = ({ company, position, date, companyDescription, text, imgUrl, companyUrl }: ExperienceAlbumProps) => {
    const { classes } = useStyles();

    return (
        <Container className={classes.container}>
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
                    <Text className={classes.companyDescription}>{ companyDescription }</Text>
                    <Text className={classes.date}>{ date }</Text>
                </Stack>
            </Group>
            <Text className={classes.descriptionText}>{ text }</Text>
        </Container>
    );
};

const useStyles = createStyles((theme) => ({
    container: {
        color: theme.white,
        margin: '50px auto',
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
        color: 'hsla(0,0%,100%,.7)'
    },
    date: {
        fontWeight: 400,
    },
    descriptionText: {
        marginTop: '30px',
    },
}));