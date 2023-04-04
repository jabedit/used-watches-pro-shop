import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
}
// const firebaseConfig = {
//   apiKey: 'AIzaSyBL01R5zF0UNqOw-wfsPiamQYuI1QGlhsc',
//   authDomain: 'laptop-hunter-90265.firebaseapp.com',
//   projectId: 'laptop-hunter-90265',
//   storageBucket: 'laptop-hunter-90265.appspot.com',
//   messagingSenderId: '829652011897',
//   appId: '1:829652011897:web:2ef2c3c2d0f90ccfab7da8',
// }

const app = initializeApp(firebaseConfig)
export default app
