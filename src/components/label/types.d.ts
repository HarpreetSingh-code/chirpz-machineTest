import { TextProps } from "react-native"

interface LabelProps extends TextProps {
    value: string;
    style?: ViewStyle;
    fontFamily?: "Regular" | "Black" | "BlackItalic" | "Bold" | "BoldItalic" | "Light" | "LightItalic" | "Medium" | "MediumItalic" | "Thin" | "ThinItalic"
}
