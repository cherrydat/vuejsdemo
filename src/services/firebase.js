import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyC3F58ohqS7iWPB7SGqlMB0MiB0hIh8Dgs',
  authDomain: 'chatdemo-b8ef5.firebaseapp.com',
  databaseURL: 'https://chatdemo-b8ef5.firebaseio.com',
  projectId: 'chatdemo-b8ef5',
  storageBucket: 'chatdemo-b8ef5.appspot.com',
  messagingSenderId: '112641947388'

}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
