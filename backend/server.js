// const express = require("express");
// const cors = require("cors");
import express from "express"
import cors from "cors"
import fetch from "node-fetch"

const app = express();
app.use(cors());

const apiKey = "0cc1088a-e497-4036-9631-47f238780a98";

app.get("/news", async (req, res) => {
    try {
        const response = await fetch("https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=bitcoin", {
            headers: { "X-CMC_PRO_API_KEY": apiKey }
        });

        if (!response.ok) {
            throw new Error(`CoinMarketCap API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Backend Error:", error);
        res.status(500).json({ error: "Error fetching news" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));