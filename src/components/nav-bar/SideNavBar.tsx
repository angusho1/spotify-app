import { useState } from 'react';
import { createStyles, Navbar, Title } from '@mantine/core';
import { NavButton } from './NavButton';

const sections = [
    { label: 'Intro' },
    { label: 'Section 2' },
    { label: 'Section 3' },
];

export const SideNavBar = () => {
    const { classes } = useStyles();
    const [active, setActive] = useState('Intro');

    const navButtons = sections.map((item) => (
        <NavButton
            key={item.label}
            label={item.label}
            isActive={item.label === active}
            onClick={() => setActive(item.label)}
        />
    ));

    return (
        <Navbar
            width={{ sm: 250 }}
            p="md"
            classNames={{
                root: classes.root,
            }}
            className={classes.navbar}
        >
            <Navbar.Section grow>
                <Title
                    order={3}
                    color="white"
                    mb={20}
                >
                    My Spotify Application
                </Title>
                {navButtons}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>

            </Navbar.Section>
        </Navbar>
    );
};

const useStyles = createStyles((theme) => ({
    root: {
        border: 'none',
    },
    navbar: {
        height: '100vh',
        backgroundColor: theme.black,
    },
    footer: {
        borderTop: `1px solid #282828`,
    },
}));