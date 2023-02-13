import { Anchor, Button, Container, createStyles, Group, Image, Stack, Text, Title, UnstyledButton } from "@mantine/core";
import { Project } from "../types/Project.types";
import testVideo from '../assets/videos/test.mp4';

type ProjectSectionProps = Project & {
    
}

export const ProjectSection = ({ name, date, text, url }: ProjectSectionProps) => {
    const { classes } = useStyles();

    return (
        <Container className={classes.container}>
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
                <video width="400" height="200" autoPlay muted loop>
                    <source src={testVideo} type="video/mp4" />
                </video>
            </Group>
        </Container>
    );
};

const useStyles = createStyles((theme) => ({
    container: {
        color: theme.white,
        margin: '50px auto',
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