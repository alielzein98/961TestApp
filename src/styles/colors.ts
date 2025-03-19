type Background =
    | "primary"


export const backgrounds: Record<Background, string> = {
    primary: '#FF0E00',
};

type Font =
    | "primary"
    | "lightGrey"


export const fonts: Record<Font, string> = {
    primary: "#FF0E00",
    lightGrey: "#646464"
};

type Border = "dark" | "light" | "white" | "gray";

export const borders: Record<Border, string> = {
    dark: "#000",
    light: "#6F7171",
    white: "#fff",
    gray: "#CCC",
};
