import { Container, Space } from "@mantine/core";
import { RenderLyricFunction } from "../../types/Lyric.types";

interface WhySpotifySectionProps {
    renderLyric: RenderLyricFunction;
}

export const WhySpotifySection = ({ renderLyric }: WhySpotifySectionProps) => {
    const learningGoals = [
        `Gain a ton of experience developing APIs and backend services in Java`,
        `Get better at writing highly scalable CSS and React`,
        `Work with a complex software architecture and learn how infrastructure is scaled`,
        `Understand the technical and human processes involved with building features for people around the world`,
    ];

    const toAchieve = [
        `Develop software that simplifies user workflows and makes them more productive`,
        `Take initiative with designing my project and getting feedback from colleagues`,
        `Contribute to making Spotify a welcoming, inclusive workplace that values diverse perspectives and experiences`,
        `Build meaningful and lasting connections with fellow Spotify employees`,
    ];

    return (
        <Container px={0} pt={100} pb={50}>
            { renderLyric('Why an internship at Spotify?', { heading: true }) }
            <Space h="xl" />
            { renderLyric(`Spotify has given a lot to me over the (y)ears 🎧, so I feel inspired to give back and make the greatest impact I can. I see Spotify as a space for creators - and I think that includes the employees who create the platform we use and enjoy. I'd like to join on the journey in creating the best possible software experience, and I want to make this my biggest learning experience yet.`) }
            <Space h="xl" />
            <Space h="xl" />
            { renderLyric(`Here are some learning goals I'd like to fulfill with a Spotify internship:`) }
            { learningGoals.map((goal, index) => renderLyric(goal, { key: index })) }
            <Space h="xl" />
            <Space h="xl" />
            { renderLyric(`These are some things I'd like do during my time at Spotify:`) }
            { toAchieve.map((goal, index) => renderLyric(goal, { key: index })) }
            <Space h="xl" />
            <Space h="xl" />
            { renderLyric(`And that's a Wrap! I hope to see you this summer :)`) }
            { renderLyric('♪') }
        </Container>
    );
};