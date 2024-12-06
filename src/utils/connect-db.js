import admin from "firebase-admin";

import serviceAccount from "../../submissionmlgc-andiyahya-firebase-adminsdk-o44ac-4cc88102c4.json" assert { type: "json" }; //generate service account di DB firestore lalu simpan di root dir (dibawah folder dermascan-cloud-computing), simpan dengan nama firebase-service-account-key.json

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export default db;
