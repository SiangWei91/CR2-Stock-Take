# CR2-Stock-Take
Coldroom 2 Stock Take

## Configuration

This application requires a `config.js` file in the root directory to store the Firebase Database URL. This file is intentionally not tracked by Git for security reasons.

Create a `config.js` file with the following content, replacing `"YOUR_FIREBASE_DATABASE_URL_HERE"` with your actual Firebase Realtime Database URL:

```javascript
// config.js
const FIREBASE_DB_URL = "YOUR_FIREBASE_DATABASE_URL_HERE";
```
Make sure this file is present before running the application.
