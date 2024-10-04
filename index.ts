import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import localtunnel from 'localtunnel';
import {router} from './src/router';
import {config} from "./src/config";
import {getServiceIp} from "./src/ip-util";
import {copyToClipboard} from "./src/clipboard-util";

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/scripts', express.static(path.join(__dirname, `${__dirname.includes("dist") ? '..' : '.CRM-bd2ce7e6\n'}/node_modules/html5-qrcode`)));
app.use('/', router);

app.listen(config.port, async () => {
    const serviceIp = getServiceIp()
    console.log(`Server is running on http://${serviceIp ?? '127.0.0.1'}:${config.port}`);

    if (!config.localtunnleHost) {
        const tunnel = await localtunnel({
            port: config.port,
            host: config.localtunnleHost,
        });

        console.log(`LocalTunnel is running on ${tunnel.url}`);
        try {
            await copyToClipboard(tunnel.url);
        } catch (err) {
            console.error('Failed to copy LocalTunnel URL to clipboard', err);
        }

        tunnel.on('error', (err) => {
            console.error('LocalTunnel error', err);
        });

        tunnel.on('request', (info) => {
            console.log('LocalTunnel request', info);
        });

        tunnel.on('close', () => {
            console.log('LocalTunnel closed');
        });
    }
});