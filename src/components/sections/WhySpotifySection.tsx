import { Container, Space } from "@mantine/core";
import { RenderLyricFunction } from "../../types/Lyric.types";

interface WhySpotifySectionProps {
    renderLyric: RenderLyricFunction;
}

export const WhySpotifySection = ({ renderLyric }: WhySpotifySectionProps) => {
    const learningGoals = [
        `Gain (a lot of) experience working with Java in a professional setting`,
        `Get better at writing scalable CSS and React`,
        `Learn to be more efficient with data (querying, sending, storage)`,
        `Solve complex technical problems involving distributed applications`,
        `Understand the technical and human processes involved with building features for people around the world`,
    ];

    const toAchieve = [
        `Develop software that simplifies daily needs and makes people more productive`,
        `Take initiative with designing my project`,
        `Take initiative with getting feedback from colleagues and mentors`,
        `Contribute to making Spotify a welcoming, inclusive workplace that values diverse perspectives and experiences`,
        `Build meaningful and lasting connections with fellow Spotify employees`,
    ];

    return (
        <Container px={0} pt={100} pb={50}>
            { renderLyric('Why an internship at Spotify?', { heading: true }) }
            <Space h="xl" />
            { renderLyric('Spotify has given a lot to me over the years, so I feel inspired to give back and make the greatest impact I can. I hope to make this my biggest learning experience yet by facing my biggest challenges, while also being able to enjoy every moment of it.') }
            <Space h="xl" />
            <Space h="xl" />
            { renderLyric(`Here are some learning goals I'd like to fulfill with a Spotify internship:`) }
            { learningGoals.map((goal, index) => renderLyric(goal, { key: index })) }
            <Space h="xl" />
            <Space h="xl" />
            { renderLyric(`These are some things I'd like to achieve during my time at Spotify:`) }
            { toAchieve.map((goal, index) => renderLyric(goal, { key: index })) }
            <Space h="xl" />
            <Space h="xl" />
            { renderLyric(`And that's a Wrap! I hope to see you this summer :)`) }
            { renderLyric('♪') }
        </Container>
    );
};