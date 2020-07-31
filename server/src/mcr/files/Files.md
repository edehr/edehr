# Files 

> Some notes about setting up EdEHR to store files

## File services

The server will allow EdEHR client's to upload files. Use will need to be auth'd.  See https://github.com/BCcampus/edehr/issues/770 for the requirements etc.

### Server side 

```bash
npm install multer --save
```
See https://www.npmjs.com/package/multer.

### File information

Each file contains the following information:

Key | Description | Note
--- | --- | ---
`fieldname` | Field name specified in the form |
`originalname` | Name of the file on the user's computer |
`encoding` | Encoding type of the file |
`mimetype` | Mime type of the file |
`size` | Size of the file in bytes |
`destination` | The folder to which the file has been saved | `DiskStorage`
`filename` | The name of the file within the `destination` | `DiskStorage`
`path` | The full path to the uploaded file | `DiskStorage`
`buffer` | A `Buffer` of the entire file | `MemoryStorage`

### Some sample code from the internet
```ecmascript 6

var upload = multer({ dest: 'uploads/' })

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

var upload = multer({ storage: storage })
```

Sample code from an online resource.
```ecmascript 6
import multer from 'multer'
const uploader = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // keep images size < 5 MB
    },
})

app.post('/api/upload', uploader.single('image'), async (req, res, next) => {
    try {
        if (!req.file) {
            res.status(400).send('No file uploaded.');
            return
        }
        console.log('This is where we\'ll upload our file to Cloud Storage')
    } catch (error) {
        res.status(400).send(
            `Error, could not upload file: ${error}`
        );
    }
})
```


## Firebase setup

Some preliminary notes composed while considering using Firebase for the file store. Decided, for the short term, to store on the server and save this important work for later.

The problem with local storage is that it lacks backup.  EdEHR could use Firebase storage (https://firebase.google.com/docs/storage) to store backups.  The following are some incomplete notes collected during early evaluation.  

The upside to storing directly to firebase is the ease of storing large numbers of files and the fact these files are stored safely.  The downside of local storage is the files could be lost if the server needs to be rebuilt.

The downside of using firebase directly is the need to set up separate storage accounts for developers, test env and prod. This complexity is welcome once EdEHR has a support team. 

```bash
npm install firebase-admin --save
```

DATABASE_URL = "https://edehr-8e514.firebaseio.com"

```ecmascript 6
import * as admin from 'firebase-admin';
import { DATABASE_URL } from 'someConfig'

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: DATABASE_URL
});
```

Can generate a few private keys, and then control them via the service account permissions page.

### Upload file to firebase

An example from the documentation
https://firebase.google.com/docs/storage/web/upload-files?authuser=0

```ecmascript 6
// File or Blob named mountains.jpg
var file = ...

// Create the file metadata
var metadata = {
  contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'
var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

    ...

    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      break;
  }
}, function() {
  // Upload completed successfully, now we can get the download URL
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
  });
});
```

```ecmascript 6
// Create a root reference
var storageRef = firebase.storage().ref();

// Create a reference to 'mountains.jpg'
var mountainsRef = storageRef.child('mountains.jpg');

// Create a reference to 'images/mountains.jpg'
var mountainImagesRef = storageRef.child('images/mountains.jpg');

// While the file names are the same, the references point to different files
mountainsRef.name === mountainImagesRef.name            // true
mountainsRef.fullPath === mountainImagesRef.fullPath    // false

// Create file metadata including the content type
var metadata = {
  contentType: 'image/jpeg',
};

// Upload the file and metadata
var uploadTask = storageRef.child('images/mountains.jpg').put(file, metadata);

```
