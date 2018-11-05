import firebase from 'firebase/app';
import config from 'src/firebase.config'
import 'firebase/firestore';

const app = firebase.initializeApp(config);

export default app
