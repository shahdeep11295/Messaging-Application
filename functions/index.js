// const functions = require("firebase-functions");
// const admin = require("firebase-admin");



// const serviceAccount = {
//     "type": "service_account",
//     "project_id": "chat-22607",
//     "private_key_id": "f6b3d9de0d46e86c20df0a42ac94f58dfac31ed6",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDCYWA6ucV+fHYs\nxsyPlUmqL7zE4ahyL+MwwonrnoJ+uyAhQ7qCI6Lwxw3kcY4H7+9FsUfhwFVp2FDk\nze35iW4xKOwqmTL5jVW4Rc38YaUwvQ+oeJphjttey3k9bFxfN5By6h0cnsGuoZgp\nVqzQqBnxBiF3I9TLbezoyWXv6NFE6Ot1dalBGn95E3pVJ3iRica5uFr0WjDnylJx\niyoo05NjHCbzugInPvm6/FeP+R+v6tddmLVUCUzqVPEH/IcC+cJETFUjuA8BwdkX\nppvqWp7tPfiY1Q3MxSivJr0LizJhXWoAgxpknZjSU10NVgk1GQfQzLJNqJHLCQS7\nxVynmgJxAgMBAAECggEAFaKeAdtUipgS1TgJY7/jk6A9nBJb293NpUs567JYZv+v\n+1PdCggqZi9ZsgAbpXGEydaKICv2tdHAaz8qijhMPgeGhdVIcbNUA68tVraNmueo\nOwG1eT9b1mjCZV5Ox8BZARlixSE8gJH27D77/DuBq6yZg/fGgyAImv5zrKjWxhsO\n2VvePcbKNiIv3jabDm4VzHnzrV79c57bBrZ8Vzc6/O22c/XVBguhh7s2bCbzcmBh\n1kFOAi1mAdTjL2EO/PyclYN5tI4peZRZRy9wVZ1oceYwfO3gBmV3KprzkR4x8rc9\nofQ85+uenz+C/7M3P5ZoEHf8ThS6hNqWB84tH3212QKBgQD14AmzOlsmI8bXuvEU\nbl6wzceH44ybxXxC8kbR7Il0SE/ILV6Q6N5nPnZMPd6YFfvGtkQc7fQHttgPsXbi\ndT3U3N7Y2cFWb+/TpLFPEbC9yBd0bk17Kguhg8ijhzGS43iXendARMtkY4fpJmcG\nUI8CtGVNbkQ7al3QRalRvPQpNQKBgQDKYn3JJwQirO9aT3GRvfMVaR2VKhVFKpOY\nk1dCS0pFtBp+5e7BAE5xag4ekzWMoD1Iv4GB8EpK02bOD76bRPqRv8ttTWPh+SDm\n80ry3G2Dmzj/alZEGehOrn7jzUAoyUnmrcc/Eb9FBREJjpeXdNyTUewCGHkBPAIo\nHJw2PERXzQKBgBEnHAYg4BL9E/Yg2IiwWnLDKFRWj4yebljNRhuHAN/X25j/cUVy\nuXFCbkZLWqgJgJMQTBgokYmoO9J8curBexrKfdFq/43kKTr+llAJz+atetVojIc3\nG7Cc3PZrjA3PSK5ooMEfC4FpYCXnw/Aw1ok9xINuWdw7Q2gwM+u73tyxAoGAfUpU\nDL92s/DTjNk5ubwaTNryUXHoERW2ofI1RvlNVbGV5ZF7KUiDR3scmpkPwatBxVOp\nXUPg+km9jzv4CC+/35MY4OXUPAT69X8QmyETOzJRKu4t0aMoSe2E6IoceiOC+KgE\nfWsDOjtUvNHlzwGtvBYvQWzdHIKF40cy/fB5btECgYBTC6QFfP2DuEDMilXHX3yY\nmSFqVvfgoaapM1qh1R2k5ALljzEFkEMqfWqEhKrGPmS2LszDkdX8YJBdj1pmQWEP\nyKkaKE7WUC5JCFakPI57EJNlgwT+JyWBE2g+nJ24QeRSqGjUxfUOjit5Zd3uNkuJ\nxE3Tcga0MfTFDW4sVERHhw==\n-----END PRIVATE KEY-----\n",
//     "client_email": "firebase-adminsdk-q9rqp@chat-22607.iam.gserviceaccount.com",
//     "client_id": "103105741386584888709",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-q9rqp%40chat-22607.iam.gserviceaccount.com"
//   }

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://chat-22607.firebaseio.com"
// });



// exports.sendNotification = functions.database
//   .ref('chat/{chatId}/{pushId}').onWrite( (change,context)=>
//      {
//     const message = change.after.val()
//     const senderUid = message.uid;
//     const receiverUid = message.fuid;
// console.log(message.text)
// console.log(senderUid)
//     const payload = {
//       notification: {
//         title: senderUid,
//         body: message.text,
//         sound: "default"
//       }
//     };

//     const options = {
//       collapseKey: "demo",
//       contentAvailable: true,
//       priority: "high",
//       timeToLive: 60 * 60 * 24
//     };

//     return admin.database().ref('friends/{Id}').orderByChild('uid').once("value", function(snapshot) {
//       console.log(snapshot.val());
//       if (snapshot.val() === receiverUid){
//         return admin.messaging().sendToDevice(data.val().expoToken, payload)
//       }


//     })
      
      
        
       
       
//           .then(function(response) {
//             console.log("Successfully sent message:", response);
//           })
//           .catch(function(error) {
//             console.log("Error sending message:", error);
//           });
        
      
//   });

const functions = require('firebase-functions');
var fetch = require('node-fetch')

const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase);

exports.sendPushNotification = functions.database.ref('chat/{id}/{cid}').onCreate(change => {

    const root = change.after.val().root
    console.log(root)
    const messages = []

    //return the main promise
    return root.child('/friends').once('value').then(function (snapshot) {

        snapshot.forEach(function (childSnapshot) {

            var expoToken = childSnapshot.val().expoToken

            if (expoToken) {

                messages.push({
                    "to": expoToken,
                    "body": root.text
                })
            }
        })

        return Promise.all(messages)

    }).then(messages => {

        fetch('https://exp.host/--/api/v2/push/send', {

            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messages)
        })
    })

})


