import { useRouter } from "next/router"

const LiveChatRoom = () => {
    const router = useRouter()
    return (
        <div>
            {
                router.query.roomId
            }
        </div>
    )
}

export default LiveChatRoom