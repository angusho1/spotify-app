import { Container } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Ref, useEffect, useRef } from "react";

interface SectionProps {
    backgroundColor: string;
    currentBackgroundColor: string;
    scrollPosition: number;
    children: React.ReactNode;
    setAsBackground: (color: string) => void;
}

export const Section = ({ backgroundColor, currentBackgroundColor, scrollPosition, children, setAsBackground }: SectionProps) => {
    const ref = useRef() as Ref<HTMLDivElement>;
    const { height } = useViewportSize();

    const getDomRect = (): DOMRect => {
        return (ref as any)?.current?.getBoundingClientRect();
    };

    const checkBackground = () => {
        if (currentBackgroundColor === backgroundColor) return;
        const rect = getDomRect();
        const midpoint = height/2;
        if (rect.top <= midpoint && rect.bottom >= midpoint) {
            setAsBackground(backgroundColor);
        }
    };

    useEffect(() => {
        checkBackground();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollPosition, currentBackgroundColor]);

    return (
        <Container
            m={0}
            p={0}
            fluid
            ref={ref}
        >
            { children }
        </Container>
    );
};
