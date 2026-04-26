import { serverUrl } from "../App";

export const getCurrentUser = async () => {
    try {
        const result = await fetch(`${serverUrl}/api/user/currentuser`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
            credentials: "include",
        })
        const userData = await result.json()
        console.log(userData)
        return userData;

    } catch (error) {
        console.log(error)
    }
}