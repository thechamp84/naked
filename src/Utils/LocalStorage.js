import CryptoJS from 'crypto-js';
import SecureStorage from 'secure-web-storage';

const SECRET_KEY = 'si-cx';
class LocalStorage {
  constructor() {
    this.options = {
      hash: function hash(key) {
        key = CryptoJS.SHA256(key, SECRET_KEY);
 
        return key.toString();
      },
      encrypt: function encrypt(data) {
          data = CryptoJS.AES.encrypt(data, SECRET_KEY);
  
          data = data.toString();
          return data;
      },
      decrypt: function decrypt(data) {
          data = CryptoJS.AES.decrypt(data, SECRET_KEY);
  
          data = data.toString(CryptoJS.enc.Utf8);
  
          return data;
      }
    };
    this.secureStorage = new SecureStorage(localStorage, this.options);
  }

  set = (key, value) => {
    if (key === 'user') {
      const storage = this.userStorageProvider();
      storage.setItem(key, value);
    } else  {
      this.secureStorage.setItem(key, value);
    }
  }

  get = (key) => {
    if(key === 'user') {
      const storage = this.userStorageProvider();
      return storage.getItem(key) || null;
    }
    return this.secureStorage.getItem(key) || null;
  }

  remove = (key) => {
    this.secureStorage.removeItem(key);
  }

  userStorageProvider() {
    const remember = localStorage.getItem('remember');
    if(remember && JSON.parse(remember) === false) {
      return new SecureStorage(sessionStorage, this.options);
    }
    return new SecureStorage(localStorage, this.options);
  }
}

export { LocalStorage };

/* OLD Code for reference should be removed after sign off */


// import SecureLS from 'secure-ls';
// const encodingType = (process.env.NODE_ENV==='development')? '' : 'des';
// let storage  = window.localStorage ? new SecureLS({ encodingType: encodingType, isCompression: false, encryptionSecret: 'piriai' }) : {
//   set: () => {},
//   get: () => {},
//   getAllKeys: () => {},
//   remove: () => {}
// };

// window.onbeforeunload = (event) => {
//   alert('closing window');
// }

// class LocalStorage {

//   set = function(key, value){
//     storage.set(key, value);
//   }

//   get = function(key){
//     return storage.get(key) || {};
//   }

//   getAllKeys = function(){
//     storage.getAllKeys();
//   }

//   removeAll = function(){
//     storage.removeAll();
//   }

//   remove = function(key){
//     storage.remove(key);
//   }

//   getOrSet = function(key, value){
//     let result = storage.get(key);
//     if(!result){
//       storage.set(key, value);
//       result = value;
//     }
//     return result;
//   }
// }

// export { LocalStorage };
