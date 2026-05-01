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

export const generateNotes = async (payload) => {
    try {
        const result = await fetch(`${serverUrl}/api/notes/generate-notes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            withCredentials: true,
            credentials: "include",
        })
        const data = await result.json()
        return data


    } catch (err) {
        console.error("Generate Error:", err.response?.data || err.message);
        throw err; // 🔥 important
    }
}