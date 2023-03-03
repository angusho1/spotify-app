import { Container } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Ref, useContext, useEffect, useRef } from "react";
import { SectionContext } from "../../App";
import { PageSection } from "../../types/PageSection.enum";
import { getCutoff } from "../../utils/scroll.utils";

interface SectionProps {
    section: PageSection;
    scrollPosition: number;
    scrollToPosition: (position: number) => void;
    children: React.ReactNode;
}

const FOOTER_CUTOFF = 0.6;

export const Section = ({ section, scrollPosition, scrollToPosition, children }: SectionProps) => {
    const ref = useRef() as Ref<HTMLDivElement>;
    const { height } = useViewportSize();
    const { pageSection: currentPageSection, clicked, updateSection } = useContext(SectionContext);

    const getDomRect = (): DOMRect => {
        return (ref as any)?.current?.getBoundingClientRect();
    };

    const scrollToSection = () => {
        const rect = getDomRect();
        const position = rect.top;
        scrollToPosition(position);
    };

    const getCutoffs = () => {
        const regularCutoff = getCutoff(height);
        const footerCutoff = height * FOOTER_CUTOFF
        return {
            topCutoff: section === PageSection.FOOTER ? footerCutoff : regularCutoff,
            bottomCutoff: section === PageSection.WHY ? footerCutoff : regularCutoff,
        };
    };

    const checkSection = () => {
        if (currentPageSection === section && !clicked) return;
        if (currentPageSection === section && clicked) {
            scrollToSection();
            updateSection({ pageSection: currentPageSection, clicked: false });
        } else {
            const rect = getDomRect();
            const { topCutoff, bottomCutoff } = getCutoffs();
            if (rect.top <= topCutoff && rect.bottom >= bottomCutoff) {
                updateSection({ pageSection: section, clicked: false });
            }
        }
    };

    useEffect(() => {
        checkSection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollPosition, currentPageSection]);

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
