import express from "express";
import {copyToClipboard} from "./clipboard-util";
import {pressEnter} from "./enter-util";
import {config} from "./config";

export const router = express.Router();

router.post('/scan', async (req, res) => {
    const { qrCode } = req.body;
    console.log('Scanned QR Code:', qrCode);

    if (config.pasteScannedValue){
        try {
            await copyToClipboard(qrCode);
            await pressEnter();
        } catch (err){
            console.error('Failed to copy QR Code to clipboard', err);
            res.sendStatus(500);
            return
        }
    }

    res.sendStatus(200);
});

