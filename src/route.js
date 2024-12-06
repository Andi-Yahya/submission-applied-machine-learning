import express from "express";
import controller from "./controller.js";
import multer from "multer";
const routerPredict = express.Router();
const upload = multer({
    storage: multer.memoryStorage(),
    // limits: { fileSize: 1 * 1024 * 1024 },
});
routerPredict.use(upload.single("image"));
routerPredict.post("/predict", controller.predictImage);
routerPredict.get("/predict/histories", controller.getHistories);

export default routerPredict;
