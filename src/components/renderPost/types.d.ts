import { StyleProp, ViewStyle } from "react-native";
import { PostProps } from "../../screens/home/types";

interface RenderPostProps extends PostProps {
    style?: StyleProp<ViewStyle>
}