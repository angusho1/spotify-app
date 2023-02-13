import { Anchor, Center, Container, createStyles, Image, Space, Stack, Text, Title } from "@mantine/core";
import SpotifyLogo from '../../assets/logos/Spotify_Logo_RGB_Black.png';

interface FooterSectionProps {
    renderLyric: (text: string, key?: any) => JSX.Element;
}

export const FooterSection = ({ renderLyric }: FooterSectionProps) => {
    const { classes } = useStyles();

    return (
        <Container px={0} pt={100} pb={150}>
            <Stack align="center" justify="center">
                <Title order={3} className={classes.logoText}>My Application to</Title>
                <Container className={classes.logo}>
                    <Image src={SpotifyLogo} />
                </Container>
                <Space h="xl" />
                <Text className={classes.text}>View this project on <Anchor fw={700} color="dark" href="https://github.com/angusho1/spotify-app" target="_blank">Github</Anchor></Text>
                <Text className={classes.text}>By Angus Ho</Text>
            </Stack>
        </Container>
    );
};

const useStyles = createStyles((theme) => ({
    logoText: {
        fontWeight: 700,
        // fontSize: theme.fontSizes.xl,
    },
    logo: {
        width: '400px',
    },
    text: {
        fontSize: theme.fontSizes.lg,
    },
}));