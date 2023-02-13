import { Container } from "@mantine/core";
import { WORK_EXPERIENCES } from "../../data/work-experience";
import { ExperienceAlbum } from "../ExperienceAlbum";

interface ExperiencesSectionProps {
    renderLyric: (text: string) => JSX.Element;
}

export const ExperiencesSection = ({ renderLyric }: ExperiencesSectionProps) => {

    return (
        <Container px={0}>
            { renderLyric('Work Experience') }
            { WORK_EXPERIENCES.map((experience, index) => (
                <ExperienceAlbum
                    key={index}
                    {...experience}
                />   
            ))}
        </Container>
    );
};