import "dotenv/config"

export type IConfig = {
    port: number;
    localtunnleHost?: string;
    pasteScannedValue: boolean;
}

if (!process.env.PORT) {
    throw new Error("PORT is not defined")
}

export const config: IConfig = {
    port: parseInt(process.env.PORT),
    localtunnleHost: process.env.LOCALTUNNEL_HOST,
    pasteScannedValue: process.env.PASTE_SCANNED_VALUE === "true"
}