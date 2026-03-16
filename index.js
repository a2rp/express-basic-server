const express = require("express");

const app = express();

const PORT = process.env.PORT || 1198;

// root route
app.get("/", (req, res) => {
    res.json({
        message: "Express Basic Server Running",
        status: "success",
    });
});

// health check route
app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date(),
    });
});

// start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
