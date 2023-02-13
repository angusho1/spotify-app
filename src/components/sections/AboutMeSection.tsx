import { Container, Title } from "@mantine/core";

interface AboutMeSectionProps {
    renderLyric: (text: string, key?: any) => JSX.Element;
}

export const AboutMeSection = ({ renderLyric }: AboutMeSectionProps) => {
    const lines = [
        'he/him',
        'Second generation Chinese-Canadian from Vancouver, Canada',
        'UBC Computer Science Student in Bachelor of Arts',
        'Embarking on a career as a software engineer / full stack developer',
        'Interned at several tech startups with an independent, highly-driven attitude',
        'Passionate about exploring untold and hidden stories, and making life easier for people through software',
        'Creative, detail-oriented, diligent, and easy going',
        'Continuously finding new ways to learn and grow',
        'Loves watching films, listening to music, and being a part of the natural environment'
    ];

    return (
        <Container px={0}>
            <Container mih="50vh" pt={100} px={0}>
                <Title fz={60}>Hi, I'm Angus:</Title>
                { lines.map((line, index) => renderLyric(line, index)) }
            </Container>
            { renderLyric('♪') }
            { renderLyric('♪') }
            { renderLyric('♪') }
        </Container>
    );
};
