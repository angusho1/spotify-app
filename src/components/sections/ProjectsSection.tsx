import { Container } from "@mantine/core";
import { PROJECTS } from "../../data/projects";
import { RenderLyricFunction } from "../../types/Lyric.types";
import { ProjectSection } from "../ProjectSection";

interface ProjectsSectionProps {
    renderLyric: RenderLyricFunction;
}

export const ProjectsSection = ({ renderLyric }: ProjectsSectionProps) => {

    return (
        <Container px={0} pt={100}>
            { renderLyric('Projects', { heading: true }) }
            { renderLyric(`Here are a few projects I’ve done or am currently working on:`) }
            { PROJECTS.map((project, index) => (
                <ProjectSection
                    key={index}
                    {...project}
                />   
            ))}
        </Container>
    );
};