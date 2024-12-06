import tfjs from "@tensorflow/tfjs-node";
import dotenv from "dotenv";
dotenv.config();

const loadModel = async () => {
    try {
        // const modelUrl = "file://models/model.json";
        // const modelUrl = process.env.MODEL_PATH;
        return tfjs.loadGraphModel("https://storage.googleapis.com/models-storage1/model.json");
    } catch (error) {
        console.error("Error loading model:", error);
    }
};

const predict = async (model, imageBuffer) => {
    const tensor = tfjs.node.decodeJpeg(imageBuffer).resizeNearestNeighbor([224, 224]).expandDims().toFloat();
    return model.predict(tensor).data();
};

export { loadModel, predict };
