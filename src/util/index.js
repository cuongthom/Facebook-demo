import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../components/setupUpfile/firebaseConfig";


export const getLocalStorageObject = (key) => {
  const objString = window.localStorage.getItem(key);
  if (!objString) {
    return null;
  }
  return JSON.parse(objString);
};

export const addItemToLocalStorage = (key, item) => {
  //Stringify items object then add to localStorage
  const existItem = localStorage.getItem(key);
  if (existItem) {
    removeItemFromLocalStorage(key);
  }
  if (typeof item !== "object") {
    localStorage.setItem(key, item);
    return;
  }
  localStorage.setItem(key, JSON.stringify(item));
};
export const getBase64 = (file, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(file);
};

export const removeItemFromLocalStorage = (key) => {
  const inLocalStorage = localStorage.getItem(key);
  if (!inLocalStorage) {
    return;
  }
  localStorage.removeItem(key);
};

export const uploadImage = async (file) => {
  const uploadPromise = new Promise((resolve, reject) => {
    const storageRef = ref(storage, `/files/${file.name}`);
    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => reject(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          resolve(url);
          
        });
      }
    );
  });
  return uploadPromise
};
