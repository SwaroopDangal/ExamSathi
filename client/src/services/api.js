import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice";

export const getCurrentUser = async (dispatch) => {
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
        dispatch(setUserData(userData?.user))

    } catch (error) {
        console.log(error)
    }
}