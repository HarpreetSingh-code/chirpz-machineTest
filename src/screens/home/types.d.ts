import { CompositeScreenProps } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { MainStackParamList, RootStackParams } from "../../routes/types"

type HomeProps =  CompositeScreenProps<NativeStackScreenProps<MainStackParamList, "Home">, NativeStackScreenProps<RootStackParams>>
export interface PostProps {
    user: {
        name: string
        verified: boolean
    },
    post: {
        message: string
    },
    tags: Array<string>
}