import { WORK_EXPERIENCES } from "../../data/work-experience";
import { ExperienceAlbum } from "../ExperienceAlbum";

interface ExperiencesSectionProps {
    renderLyric: (text: string) => JSX.Element;
}

export const ExperiencesSection = ({ renderLyric }: ExperiencesSectionProps) => {

    return (
        <>
            { renderLyric('Work Experience') }
            { WORK_EXPERIENCES.map((experience, index) => (
                <ExperienceAlbum
                    key={index}
                    {...experience}
                />   
            ))}
            { renderLyric('Projects') }
        </>
    );
};