import { StyleProp, ViewStyle } from "react-native";

interface InputTextProps {
    value: string;
    title: string
    placeholder?: string;
    isError?: boolean
    style?: StyleProp<ViewStyle>;
    errorLabel?: string;
    renderRightComponent?: () => ReactNode
    onChangeText?: (text: string) => void
}

interface InputTagsProps extends InputTextProps {
    value: Array<string>;
    onChange?: (tags: Array<string>) => void
}