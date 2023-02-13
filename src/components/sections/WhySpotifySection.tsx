import { Container, Space } from "@mantine/core";

interface WhySpotifySectionProps {
    renderLyric: (text: string, key?: any) => JSX.Element;
}

export const WhySpotifySection = ({ renderLyric }: WhySpotifySectionProps) => {
    const learningGoals = [
        `Gain (a lot of) experience working with Java in a professional setting`,
        `Get better at writing scalable CSS and React`,
        `Learn to be more efficient with data (querying, sending, storage)`,
        `Solve complex technical problems involving distributed applications`,
        `Understand the processes involved with building features for people around the world`,
    ];

    const toAchieve = [
        `Develop software that simplifies daily needs and makes people more productive`,
        `Take initiative with designing my project`,
        `Take initiative with getting feedback from colleagues and mentors`,
        `Contribute to making Spotify a welcoming, inclusive workplace that values diverse perspectives`,
        `Build meaningful and lasting connections with fellow Spotify employees`,
    ];

    return (
        <Container px={0} pb={50}>
            { renderLyric('Why an internship at Spotify?') }
            <Space h="xl" />
            { renderLyric('Spotify has given a lot to me over the years, so I feel inspired to give back and make the greatest impact I can.') }
            { renderLyric('Since this will most likely be my final internship before I graduate next year, I want to get the most I can out of it.') }
            <Space h="xl" />
            { renderLyric(`Here are some learning goals I’d like to fulfill with a Spotify internship:`) }
            { learningGoals.map((goal, index) => renderLyric(goal, index)) }
            <Space h="xl" />
            { renderLyric(`These are some things I’d like to achieve during my time at Spotify:`) }
            { toAchieve.map((goal, index) => renderLyric(goal, index)) }
        </Container>
    );
};