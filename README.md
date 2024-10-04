# QR Code Scanner with Clipboard Integration

## Description

QR Code Scanner is a web-based application that allows users to scan QR codes using their device's camera. The application is built using HTML, JavaScript, and the `html5-qrcode` library. It features a simple interface with a button to toggle the camera on and off, and displays the scanned QR code. The scanned QR code is also sent to a server endpoint for further processing.

## Features
- Start and stop the camera with a single button.
- Display the last scanned QR code.
- Send the scanned QR code to a server endpoint.
- Built with TypeScript and JavaScript.
- Uses `html5-qrcode` for QR code scanning.

## Requirements
- Node.js
- Yarn or npm

## Setup
1. Clone the repository.
2. Install dependencies using `yarn install` or `npm install`.
3. Configure the environment variables in the `.env` file.
4. Start the application using `yarn start` or `npm start`.

## Usage
1. Open the application in a web browser.
2. Click the "Start Camera" button to begin scanning.
3. Point the camera at a QR code to scan it.
4. The scanned QR code will be displayed and sent to the server.