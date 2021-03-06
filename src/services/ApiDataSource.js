import { BASE_URLS } from "./CONSTANTS";
import firebase from "firebase/app";

export const UID_LOCALSTORAGE_KEY = "uid";
export const REFRESH_TOKEN_LOCALSTORAGE_KEY = "refresh_token";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

class ApiDataSource {
  constructor(apiEnviroment) {
    this.USER_ID = localStorage.getItem(UID_LOCALSTORAGE_KEY);
    this.API_ENVIROMENT = apiEnviroment;

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  getBaseUrl() {
    const action = {
      LOCAL: () => BASE_URLS.LOCAL,
      STAGE: () => BASE_URLS.STAGE,
      PROD: () => BASE_URLS.PROD
    };

    return action[this.API_ENVIROMENT]();
  }
}

export default ApiDataSource;
