import User from "../models/user.model.js"


export const authGoogle = async (req, res) => {
    try {
        const { name, email } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ name, email })
        }

        const token = await getToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });
        return res.status(200).json({ message: "Authentication successful", user })


    } catch (error) {
        console.error("Google authentication failed:", error);
        return res.status(500).json({ message: "Internal server error" })

    }
}