import express from "express";
import bodyParser from "body-parser";
import routerPredict from "./route.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routerPredict);

// app.post("/predict", upload.single("image"), async (req, res) => {
//     try {
//         const image = req.file;
//         if (image.size > 1000000) {
//             res.status(413).send({
//                 status: "fail",
//                 message: "Payload content length greater than maximum allowed: 1000000",
//             });
//             return;
//         }
//         const model = await loadModel();
//         if (!model) {
//             throw new Error("Model is undefined after loading");
//         }

//         const id = crypto.randomBytes(10).toString("hex");
//         const prediction = await predict(model, image.buffer, image.size);
//         const score = prediction;
//         const result = score[0] <= 0.5 ? "Non-cancer" : "Cancer";
//         if (result === "Cancer") {
//             const resBody = {
//                 status: "success",
//                 message: "Model is predicted successfully",
//                 data: {
//                     id: id,
//                     result: "Cancer",
//                     suggestion: "Segera periksa ke dokter!",
//                     createdAt: admin.firestore.Timestamp.now(),
//                 },
//             };
//             // console.log(resBody);
//             const result = await postUser(resBody.data);
//             resBody.data.createdAt = new Date(resBody.data.createdAt._seconds * 1000).toLocaleString();
//             return res.status(200).send(resBody.data);
//         } else {
//             const resBody = {
//                 status: "success",
//                 message: "Model is predicted successfully",
//                 data: {
//                     id: id,
//                     result: "Non-cancer",
//                     suggestion: "Penyakit kanker tidak terdeteksi.",
//                     createdAt: admin.firestore.Timestamp.now(),
//                 },
//             };
//             const result = await postUser(resBody.data);
//             resBody.data.createdAt = new Date(resBody.data.createdAt._seconds * 1000).toLocaleString();
//             return res.status(200).send(resBody);
//         }
//     } catch (error) {
//         res.status(400).send({
//             status: "fail",
//             message: error,
//             // message: "Terjadi kesalahan dalam melakukan prediksi",
//         });
//     }
// });

// app.patch("/predict/histories", async (req, res) => {
//     try {
//         const result = await getAllDatas();
//         const formattedData = datas.map((item) => [
//             {
//                 id: item.id,
//                 history: {
//                     result: item.result,
//                     createdAt: item.createdAt,
//                     suggestion: item.suggestion,
//                     id: item.id,
//                 },
//             },
//         ]);
//         res.status(200).send({
//             status: "success",
//             data: formattedData,
//         });
//     } catch (error) {}
// });

const Port = 3000;

app.listen(Port, () => console.log(`listening on Port http://localhost:${Port}`));
