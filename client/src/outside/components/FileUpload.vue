<template lang="pug">
  div
    div(v-if="authorized")
      div(v-show="!hasFiles && !uploadedFile", class="intro-text") {{ text.DIALOG_TEXT(filesize(ehrMaxFileSize)) }}
      file-input(v-show="!hasFiles", ref="inputFile", @file="handleFileChange", :buttonLabel="addFileButtonText")
      div(v-show="hasFiles")
        div(v-for="(file) in files", :key="file.id", class="columns")
          div(class="column is-4")
            img(v-if="file.imageUrl", :src="file.imageUrl", class="preview-image")
            p(v-if="file.error", class="error-msg").
              Error: {{ file.error }}
          div(class="column columns")
            div(class="column")
              div.
                Name: {{file.name}}
              div.
                Size: {{filesize(file.size)}}
              div.
                Type: {{file.type}}
              div.
                Date: {{lastUpdate(file.lastModified)}}
            div(v-if="isImage", class="column") IPTC metadata:
              div.
                Byline: {{iptc.byline}}
              div.
                Caption: {{iptc.caption}}
              div.
                Copyright: {{iptc.copyright}}
            div(v-if="isImage", class="column") EXIF metadata:
              div.
                Artist: {{exif.Artist}}
              div.
                Description: {{exif.ImageDescription}}
              div.
                Copyright: {{exif.Copyright}}
        div(class="controls")
          ui-button(value="file-cancel", v-on:buttonClicked="cancelFile", :disabled="!hasFiles", v-bind:secondary="true") Cancel
          ui-button(value="file-upload", v-on:buttonClicked="uploadFile", :disabled="!hasValidFile")  Upload
          ui-button(value="file-replace", v-show="fileExists", v-on:buttonClicked="replaceFile")  Replace
      div(v-if="!!uploadedFile", class="successMessage") Your file
        span(class="fileName") {{uploadedFile.filename}}
        span &nbsp; ({{filesize(uploadedFile.size)}}) was uploaded.
        span(v-if="uploadedFile.originalname !== uploadedFile.filename", class="") &nbsp; The file was renamed from
          span(class="fileName") &nbsp; {{uploadedFile.originalname}}
          span &nbsp; to
          span(class="fileName") &nbsp; {{uploadedFile.filename}}.
      div(v-show="errorMessage", class="error-msg") {{ errorMessage }}
    div(v-else)  You are not authorized to upload files.
</template>
<script>
import { Text } from '@/helpers/ehr-text'
import moment from 'moment'
import filesize from 'filesize'
import FileInput from '@/outside/components/FileInput'
import StoreHelper from '@/helpers/store-helper'
import UiButton from '@/app/ui/UiButton'
import EXIF from 'exif-js'

// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
const imageTypes = [
  'image/apng',
  'image/bmp',
  'image/gif',
  'image/jpeg',
  'image/pjpeg',
  'image/png',
  'image/svg+xml',
  'image/tiff',
  'image/webp',
  'image/x-icon'
]
const pdfTypes = [ 'application/pdf']
function validImageFileType (file) {
  return imageTypes.includes(file.type)
}
function validPdfFileType (file) {
  return pdfTypes.includes(file.type)
}
function validFileType (file) {
  return validImageFileType(file) || validPdfFileType(file)
}
/*
TODO:hackathon  - add drag and drop zone or page. Be sure to prevent page change if drop is outside drop zone bounds.
 */
export default {
  components: {
    FileInput, UiButton
  },
  data () {
    return {
      files: [],
      ehrMaxFileSize: 0,
      isImage: false,
      iptc: {},
      exif: {},
      text: Text.FILES_PAGE,
    }
  },
  computed: {
    addFileButtonText () { return !!this.uploadedFile ? 'Add another' : 'Add a file' },
    errorMessage () { return StoreHelper.getFileListErrorMessage() },
    uploadedFile () { return StoreHelper.getUploadedFile() },
    hasFiles () { return this.files.length > 0 },
    hasExif () {
      return Object.keys(this.exif).length > 0
    },
    hasValidFile () {
      return this.hasFiles && !this.files[0].error
    },
    fileExists () {
      return this.hasFiles && this.files[0].error && this.files[0].error.includes('exists')
    },
    authorized () {
      // TODO add check for is instructor too
      const authData = StoreHelper.getAuthDataSync()
      return !!authData
    },
  },
  methods: {
    cancelFile () {
      this.files = []
      this.$refs.inputFile.clear()
    },
    async handleFileChange (newFileList) {
      const _thisComponent = this
      if (newFileList.length === 0) {
        console.log('FileUpload - Error? no files in filelist')
        return
      }
      const newFile = newFileList[0]
      _thisComponent.isImage = false
      if(validFileType(newFile)) {
        if (newFile.size > this.ehrMaxFileSize) {
          newFile.error = 'File is too large to send.'
        }
        if (validImageFileType(newFile)) {
          newFile.imageUrl = URL.createObjectURL(newFile)
          _thisComponent.isImage = true
        }
      } else {
        newFile.error = 'Not a valid file type'
      }
      const url = StoreHelper.apiUrlGet() + '/files/public/exists/' + newFile.name + '/consumer/' + StoreHelper.getAuthdConsumerId()
      const res = await fetch(url)
      const data = await res.json()
      if (data.exists) {
        newFile.error = 'File with this name already exists. Choose another file or replace.'
      }
      EXIF.getData(newFile, function () {
        // this refers to the results of getData
        // _thisComponent refers to the outer component
        _thisComponent.iptc = EXIF.getAllIptcTags(this)
        _thisComponent.exif = EXIF.getAllTags(this)
      })
      _thisComponent.files.push(newFile)
    },
    filesize (size) {
      return size ? filesize(size) : 0
    },
    lastUpdate (unixMS) {
      const unix = Math.floor(unixMS / 1000)
      return moment.unix(unix).format('YYYY-MM-DD h:mm a')
    },
    async getMaxFileSize (){
      this.ehrMaxFileSize = await StoreHelper.getFileListMaxFileSize()
    },
    replaceFile () {
      this.uploadFile(true)
    },
    uploadFile (usePut) {
      // const url = StoreHelper.apiUrlGet() + '/files/upload'
      const onUploadProgress = function (progressEvent) {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        console.log('percentCompleted', percentCompleted)
      }
      const file = this.files[0]
      const consumerId = StoreHelper.getAuthdConsumerId()
      StoreHelper.addFileToList({ file, onUploadProgress, consumerId, usePut})
        .finally( () => {
          this.cancelFile()
        })
    }
  },
  created () {
    this.getMaxFileSize()
  }
}
</script>

<style scoped lang="scss">
  @import '../../scss/definitions';
  .intro-text {
    max-width: 50rem;
  }
  .error-msg {
    color: $error;
  }
  .preview-image {
    min-width: 200px;
    width: 200px;
    max-width: 200px;
  }
  .successMessage {
    span {
      /*margin-left: 10px;*/
    }
    .fileName {
      margin-left: 5px;
      margin-right: 5px;
      font-style: italic;
    }
  }
 /* below is kept for dev */
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
  </style>
