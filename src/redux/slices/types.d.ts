import { PostProps } from "../../screens/home/types"

type AppState = {
    chirpzList: {
        data: Array<PostProps>,
        pagination: { current: number, total: number }
    }
}