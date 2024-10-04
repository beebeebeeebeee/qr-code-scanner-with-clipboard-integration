import {exec} from "child_process";

export function copyToClipboard(text: string): Promise<void> {
    return new Promise((resolve, reject) => {
        exec(`echo "${text}" | pbcopy`, (err) => {
            if (err) {
                return reject(err);
            }
            resolve()
        });
    });

}