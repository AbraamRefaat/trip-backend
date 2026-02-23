module.exports = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "NileQuest Trip Backend is running!",
        endpoints: {
            trips: "/api/trips"
        }
    });
};
