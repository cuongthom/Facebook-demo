import "firebase/firestore";
import "firebase/storage";
import firebase from "firebase/compat";


class Fire {
  constructor() {
    this.init();
    //binding appent to this
  }

  init() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        //config firebae api
        apiKey: "AIzaSyCUgzMVN5N-G3I6a45Es4JDX6hzI-f1WOU",
        authDomain: "cuongcuong2205-d9051.firebaseapp.com",
        projectId: "cuongcuong2205-d9051",
        storageBucket: "cuongcuong2205-d9051.appspot.com",
        messagingSenderId: "488049251266",
        appId: "1:488049251266:web:1744d0882b17c113ce7c5b",
        measurementId: "G-39XFKN9F9Q",
      });
    }
  }

  get storage() {
    return firebase.storage();
  }

  get fireStore() {
    return firebase.firestore();
  }

  uploadImage = (file) => {
    return new Promise((resolve, reject) => {
      const uploadTask = this.storage.ref(`/images/${file.name}`).put(file);

      //initiates the firebase side uploading
      uploadTask.on(
        "state_changed",
        (snapShot) => {
          //takes a snap shot of the process as it is happening
        },
        (err) => {
          console.log(err);
          reject(err);
        },
        () => {
          // gets the functions from storage refences the image storage in firebase by the children
          // gets the download url then sets the image from firebase as the value for the imgUrl key:
          this.storage
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              resolve(fireBaseUrl);
            });
        }
      );
    });
  };
}

Fire.create = new Fire();
export default Fire;
