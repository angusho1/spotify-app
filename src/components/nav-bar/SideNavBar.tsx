import { useContext } from 'react';
import { createStyles, Navbar, Title } from '@mantine/core';
import { NavButton } from './NavButton';
import { SectionContext } from '../../App';
import { PageSection } from '../../types/PageSection.enum';

export const SideNavBar = () => {
    const { classes } = useStyles();
    const { pageSection, updateSection } = useContext(SectionContext);

    const navButtons = Object.values(PageSection).map((section) => (
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