import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { MainStackParamList } from "../../routes/types";

type CreatePostProps = CompositeScreenProps<NativeStackScreenProps<MainStackParamList, "CreatePost">, NativeStackScreenProps<RootStackParams>>

type Form = {
    post: {isValid: boolean, value: string},
    tags: {isValid: boolean, value: Array<string>},
}