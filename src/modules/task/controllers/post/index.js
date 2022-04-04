const StatusCodes = require("../../../../constants/statusCodes");
const Task = require("../../model");

module.exports =
    async (req, res) => {
        try {
            const task = await Task.create({...req.body, user: req.userId});
            return res.status(StatusCodes.SUCCESS).json({ task });
        }
        catch (err) {
            console.log(err)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ notification: "Error while trying to create a new task", error: err })
        }
    }