import { Container } from "@mantine/core";
import { WORK_EXPERIENCES } from "../../data/work-experience";
import { RenderLyricFunction } from "../../types/Lyric.types";
import { ExperienceAlbum } from "../ExperienceAlbum";

interface ExperiencesSectionProps {
    renderLyric: RenderLyricFunction;
}

export const ExperiencesSection = ({ renderLyric }: ExperiencesSectionProps) => {

    return (
        <Container px={0} pt={100}>
            { renderLyric('Work Experience', { heading: true }) }
            { renderLyric('Learn more about my previous internships:') }
            { WORK_EXPERIENCES.map((experience, index) => (
                <ExperienceAlbum
                    key={index}
                    {...experience}
                />   
            ))}
        </Container>
    );
};