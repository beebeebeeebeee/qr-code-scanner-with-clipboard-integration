import {networkInterfaces} from "os";

export function getServiceIp(): string | undefined {
    const ip = networkInterfaces();
    return Object.values(ip).flat().find(details => details?.family === 'IPv4' && !details?.internal)?.address;
}