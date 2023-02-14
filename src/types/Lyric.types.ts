export interface RenderLyricOptions {
    key?: number;
    heading?: boolean;
}

export type RenderLyricFunction = (text: string, options?: RenderLyricOptions) => JSX.Element;