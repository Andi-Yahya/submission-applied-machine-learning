import db from "./connect-db.js";

const postUser = async (datas) => {
    if (!datas) {
        throw new Error("Data is undefined");
    }
    try {
        console.log("Data is being saved:", datas);
        const predictCollections = db.collection("predictions");
        const result = await predictCollections.doc(datas.id).set(datas);
        console.log("Data to be saved:", datas);

        return result;
    } catch (error) {
        throw error;
    }
};

const getAllDatas = async () => {
    try {
        const predictCollections = db.collection("predictions");
        const result = await predictCollections.get();
        return result;
    } catch (error) {
        throw error;
    }
};

export { postUser, getAllDatas };
