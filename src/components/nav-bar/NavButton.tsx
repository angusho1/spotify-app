import { createStyles, UnstyledButton } from "@mantine/core";

interface NavButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

export const NavButton = ({ label, isActive, onClick }: NavButtonProps) => {
    const { classes, cx } = useStyles();

    return (
        <UnstyledButton
            className={cx(classes.link, { [classes.linkActive]: isActive })}
            key={label}
            onClick={onClick}
        >
            <span>{label}</span>
        </UnstyledButton>
    );
};

const useStyles = createStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: '0.875rem',
        color: '#b3b3b3',
        borderRadius: theme.radius.sm,
        fontWeight: 700,
        height: '40px',

        '&:hover': {
            color: theme.white,
            transition: 'color .2s linear',
        },

        '&:active': {
            transform: 'scale(.98)',
        }
    },
    linkActive: {
        '&, &:hover': {
            color: theme.white,
        },
    },
}));