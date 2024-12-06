import admin from "firebase-admin";
import crypto from "crypto";
import { postUser } from "./db-function.js";
const condition = async (result) => {
    const id = crypto.randomBytes(10).toString("hex");
    if (result === "Cancer") {
        const resBody = {
            status: "success",
            message: "Model is predicted successfully",
            data: {
                id: id,
                result: "Cancer",
                suggestion: "Segera periksa ke dokter!",
                createdAt: admin.firestore.Timestamp.now(),
            },
        };
        const result = await postUser(resBody.data);
        resBody.data.createdAt = new Date(resBody.data.createdAt._seconds * 1000).toLocaleString();
        return resBody.data;
    } else {
        const resBody = {
            status: "success",
            message: "Model is predicted successfully",
            data: {
                id: id,
                result: "Non-cancer",
                suggestion: "Penyakit kanker tidak terdeteksi.",
                createdAt: admin.firestore.Timestamp.now(),
            },
        };
        const result = await postUser(resBody.data);
        resBody.data.createdAt = new Date(resBody.data.createdAt._seconds * 1000).toLocaleString();
        return resBody.data;
    }
};

export default condition;
