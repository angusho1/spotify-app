import { Container, Title } from "@mantine/core";

interface AboutMeSectionProps {
    renderLyric: (text: string) => JSX.Element;
}

export const AboutMeSection = ({ renderLyric }: AboutMeSectionProps) => {
    return (
        <>
            <Container mih="50vh" pt={50} px={0}>
                <Title fz={60}>Hi, I'm Angus.</Title>
                { renderLyric('UBC Computer Science Student from Vancouver, Canada') }
            </Container>
            { renderLyric(`I'm excited to embark on a career in software engineering.`) }
            { renderLyric(`I'm passionate about exploring untold or hidden stories, and making life easier for people through software.`) }

            { renderLyric('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel faucibus tellus.') }
            { renderLyric('Morbi varius neque eu porta semper. Maecenas euismod et metus ac pellentesque.') }
            { renderLyric('Praesent eleifend risus at malesuada faucibus. Vestibulum aliquet lorem leo, in suscipit nibh tempor eu.') }
            { renderLyric('Vivamus imperdiet arcu id urna rhoncus, vel luctus mauris hendrerit. Sed neque orci, mollis quis velit in, rhoncus lobortis orci.') }
            { renderLyric('Praesent tincidunt tortor sem, ac dictum dui luctus vitae. Nunc feugiat cursus massa eu tincidunt.') }
            { renderLyric('Vivamus id ante vehicula, faucibus neque at, ornare tortor.') }
            { renderLyric('♪') }
            { renderLyric('♪') }
            { renderLyric('♪') }
            { renderLyric('Maecenas euismod ex condimentum, fringilla arcu vitae, aliquet orci.') }
            { renderLyric('Quisque vitae mauris quis nisi ornare mollis id eu enim.') }
            { renderLyric('Suspendisse lobortis faucibus mauris, et tempus enim.') }
            { renderLyric('Donec tempus viverra lorem, in lacinia dui. Mauris nec diam eget tellus sagittis lacinia.') }
        </>
    );
};
