import { ActionIcon, Anchor, Container, createStyles, Group, Image, MantineSize, Space, Stack, Text, Title } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons";
import SpotifyLogo from '../../assets/logos/Spotify_Logo_RGB_Black.png';
import { RenderLyricFunction } from "../../types/Lyric.types";

interface FooterSectionProps {
    renderLyric: RenderLyricFunction;
}

const socialIconProps = {
    size: 'xl' as MantineSize,
    variant: 'transparent' as 'transparent',
};

export const FooterSection = ({ renderLyric }: FooterSectionProps) => {
    const { classes } = useStyles();

    return (
        <Container px={0} pt={100} pb={100}>
            <Stack align="center" justify="center">
                <Title order={3} className={classes.logoText}>My Application to</Title>
                <Container className={classes.logo}>
                    <Image src={SpotifyLogo} />
                </Container>
                <Space h="xl" />
                <Text className={classes.text}>By Angus Ho</Text>
                <Text className={classes.text}>View this project on <Anchor fw={700} color="dark" href="https://github.com/angusho1/spotify-app" target="_blank">Github</Anchor></Text>
                <Group>
                    <ActionIcon className={classes.icon} component="a" href="https://www.linkedin.com/in/angusho24/" target="_blank" aria-label="LinkedIn" {...socialIconProps}>
                        <IconBrandLinkedin />
                    </ActionIcon>
                    <ActionIcon variant="transparent" className={classes.icon} component="a" href="https://github.com/angusho1" target="_blank"  aria-label="Github">
                        <IconBrandGithub />
                    </ActionIcon>
                </Group>
            </Stack>
        </Container>
    );
};

const useStyles = createStyles((theme) => ({
    logoText: {
        fontWeight: 700,
    },
    logo: {
        width: '400px',

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: '200px',
        },

        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            width: '300px',
        },

        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            width: '350px',
        },

        [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
            width: '400px',
        },
    },
    text: {
        fontSize: theme.fontSizes.lg,
    },
    icon: {
        color: theme.black,
    },
}));