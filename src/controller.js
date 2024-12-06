import service from "./service.js";

const predictImage = async (req, res) => {
    try {
        const image = req.file;
        if (image.size > 1000000) {
            res.status(413).send({
                status: "fail",
                message: "Payload content length greater than maximum allowed: 1000000",
            });
            return;
        }
        const results = await service.predictImage(image);
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({
            status: "fails",
            // message: error.message,
            message: "Terjadi kesalahan dalam melakukan prediksi",
        });
    }
};

const getHistories = async (req, res) => {
    try {
        const result = await service.getHistories(req);
        res.status(200).json({
            status: result.status,
            data: result.data.map((item) => ({
                id: item.id,
                history: {
                    result: item.result,
                    createdAt: item.createdAt,
                    suggestion: item.suggestion,
                    id: item.id,
                },
            })),
        });
    } catch (error) {
        res.status(400).json({
            status: "fails",
            message: error.message,
            // message: "Terjadi kesalahan dalam melakukan prediksi",
        });
    }
};
export default { predictImage, getHistories };
