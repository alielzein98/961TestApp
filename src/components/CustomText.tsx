import React from "react";
import {
    Text,
    TextProps,
    ViewStyle,
    TextStyle,
} from "react-native";

// Define a custom interface for props, extending TextProps from React Native
interface CustomTextProps extends TextProps {
    fontSize?: number; // Optional prop for custom font size
    fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"; // Optional font weight
    fontFamily?: string; // Optional custom font family
    fontColor?: string;
    style?: TextStyle | TextStyle[] | ViewStyle; // Custom style can override default styles
}

// CustomText component
const CustomText: React.FC<CustomTextProps> = ({
    children,
    style,
    fontSize = 14, // Default fontSize if not provided
    fontWeight = "normal", // Default fontWeight if not provided
    fontFamily = "Montserrat-Medium", // Default fontFamily if not provided
    fontColor,
    ...props // This allows the spread of any other props (e.g., onPress, numberOfLines)
}) => {
    const defaultStyles: TextStyle = {
        fontFamily,
        fontSize,
        fontWeight,
        color: fontColor,
    };

    return (
        <Text style={[defaultStyles, style]} {...props}>
            {children}
        </Text>
    );
};

export default CustomText;
