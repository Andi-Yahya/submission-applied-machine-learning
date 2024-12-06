import { loadModel, predict } from "./utils/inference.js";
import { getAllDatas } from "./utils/db-function.js";

import condition from "./utils/condition.js";

const predictImage = async (image) => {
    const model = await loadModel();
    if (!model) {
        throw new Error("Model is undefined after loading");
    }

    const prediction = await predict(model, image.buffer, image.size);
    const score = prediction;
    const result = score[0] <= 0.5 ? "Non-cancer" : "Cancer";
    const data = await condition(result);
    console.log("condition:" + data);
    return data;
};

const getHistories = async () => {
    const result = await getAllDatas();
    const datas = result.docs.map((doc) => doc.data());
    datas.map((item) => (item.createdAt = new Date(item.createdAt._seconds * 1000).toISOString()));
    const formattedData = {
        status: "success",
        data: datas.map((item) => ({
            result: item.result,
            createdAt: item.createdAt,
            suggestion: item.suggestion === "Penyakit kanker tidak terdeteksi." ? "Anda sehat!" : item.suggestion,
            id: item.id,
        })),
    };

    return formattedData;
};

export default { predictImage, getHistories };
