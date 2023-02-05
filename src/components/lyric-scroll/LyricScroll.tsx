import { ScrollArea, Text, Title } from "@mantine/core";



export const LyricScroll = () => {
    const lines = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel faucibus tellus. Donec tempus viverra lorem, in lacinia dui. Mauris nec diam eget tellus sagittis lacinia.',
        'Morbi varius neque eu porta semper. Maecenas euismod et metus ac pellentesque. Suspendisse lobortis faucibus mauris, et tempus enim.',
        'Praesent eleifend risus at malesuada faucibus. Vestibulum aliquet lorem leo, in suscipit nibh tempor eu. Quisque vitae mauris quis nisi ornare mollis id eu enim.',
        'Vivamus imperdiet arcu id urna rhoncus, vel luctus mauris hendrerit. Sed neque orci, mollis quis velit in, rhoncus lobortis orci.',
    ];

    return (
        <ScrollArea style={{ height: 400 }}>
            { lines.map(line => (
                <Title order={1}>{ line }</Title>
            )) }
        </ScrollArea>
    );
};