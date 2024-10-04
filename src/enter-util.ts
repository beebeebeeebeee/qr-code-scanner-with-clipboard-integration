import {exec} from "child_process";

export function pressEnter(): Promise<void> {
    return new Promise((resolve, reject) => {
        exec(`osascript -e 'tell application "System Events" to keystroke "v" using command down'`, (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    })
}