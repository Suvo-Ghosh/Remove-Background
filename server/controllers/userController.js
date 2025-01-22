//API controller function to manage clerk user with database
// http//localhost:4000/api/user/webhooks
import { json } from "express"
import { Webhook } from "svix"
import userModel from "../models/userModel.js"
console.log("userController page");
const clerkWebhooks = async (req, res) => {
    console.log(" inside clerkWebhooks function");
    try {
        console.log(" inside clerkWebhooks function try block");
        //create a svix instant with clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)
        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers['svix-id'],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        })
        const { data, type } = req.body
        switch (type) {
            case "user.created": {
                console.log(" inside clerkWebhooks function user.created");
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }

                await userModel.create(userData)
                res.json({})
                break;
            }
            case "user.updated": {
                console.log(" inside clerkWebhooks function user.updated");
                const userData = {
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url
                }
                await userModel.findOneAndUpdate({ clerkId: data.id }, userData)
                res.json({})
                break;
            }
            case "user.deleted": {
                console.log(" inside clerkWebhooks function user.deleted");
                await userModel.findOneAndDelete({ clerkId: data.id })
                res.json({})
                break;
            }
            default:
                break;
        }

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

export { clerkWebhooks }