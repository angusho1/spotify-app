import { Container } from "@mantine/core";
import { PROJECTS } from "../../data/projects";
import { ProjectSection } from "../ProjectSection";

interface ProjectsSectionProps {
    renderLyric: (text: string) => JSX.Element;
}

export const ProjectsSection = ({ renderLyric }: ProjectsSectionProps) => {

    return (
        <Container px={0}>
            { renderLyric('Projects') }
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