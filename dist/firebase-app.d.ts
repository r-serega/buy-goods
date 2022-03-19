import * as firebase from "firebase-admin";
export declare class FirebaseApp {
    private firebaseApp;
    constructor();
    getAuth: () => firebase.auth.Auth;
    firestore: () => firebase.firestore.Firestore;
    realtime: () => firebase.database.Database;
    getUserByEmail(email: any, response: any): Promise<void>;
    getUserByUid(uid: any, response: any): Promise<void>;
    getUserByPhone(phoneNumber: any, response: any): Promise<void>;
    getUserByUidPhone(uid: any, response: any): Promise<void>;
    getCustomToken(uid: any, response: any): Promise<void>;
    verifyIdToken(idToken: any, response: any): Promise<void>;
}
export default FirebaseApp;
