const admin = require('firebase-admin');

const serviceAccount = require('../../rr-course.json');

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = firebaseApp;