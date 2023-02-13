import { useContext } from 'react';
import { ActionIcon, Anchor, Container, createStyles, Group, Image, Navbar, Stack, Title } from '@mantine/core';
import { NavButton } from './NavButton';
import { SectionContext } from '../../App';
import { PageSection } from '../../types/PageSection.enum';
import SpotifyLogo from '../../assets/logos/Spotify_Logo_RGB_White.png';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons';

export const SideNavBar = () => {
    const { classes } = useStyles();
    const { pageSection, updateSection } = useContext(SectionContext);

    const pages = [
        PageSection.INTRO,
        PageSection.EXPERIENCE,
        PageSection.PROJECTS,
        PageSection.WHY,
    ];

    const navButtons = pages.map((section) => (
        <NavButton
            key={section}
            label={section}
            isActive={section === pageSection}
            onClick={() => updateSection({
                pageSection: section,
                clicked: true,
            })}
        />
    ));

    return (
        <Navbar
            width={{ sm: 250 }}
            classNames={{
                root: classes.root,
            }}
            className={classes.navbar}
        >
            <Navbar.Section grow>
                <Stack align="flex-start" mb={30} spacing={5}>
                    <Title
                        order={3}
                        color="white"
                        className={classes.logoText}
                    >
                        My Application to
                    </Title>
                    <Container px={0} className={classes.logo}>
                        <Image src={SpotifyLogo} />
                    </Container>
                </Stack>
                {navButtons}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <Group>
                    <ActionIcon variant="transparent" className={classes.icon} component="a" href="https://www.linkedin.com/in/angusho24/" target="_blank" aria-label="LinkedIn">
                        <IconBrandLinkedin />
                    </ActionIcon>
                    <ActionIcon variant="transparent" className={classes.icon} component="a" href="https://github.com/angusho1" target="_blank"  aria-label="Github">
                        <IconBrandGithub />
                    </ActionIcon>
                </Group>
            </Navbar.Section>
        </Navbar>
    );
};

const useStyles = createStyles((theme) => ({
    root: {
        border: 'none',
        padding: '25px',

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            display: 'none',
        },
    },
    logoText: {
        fontSize: theme.fontSizes.md,
    },
    logo: {
        marginLeft: 0,
        maxWidth: '130px',
    },
    navbar: {
        height: '100vh',
        backgroundColor: theme.black,
    },
    footer: {
        borderTop: `1px solid #282828`,
        paddingTop: '25px',
    },
    icon: {
        color: theme.white,

        '&:hover': {
            color: '#b3b3b3',
            transition: 'color .2s linear',
        },
    },
}));