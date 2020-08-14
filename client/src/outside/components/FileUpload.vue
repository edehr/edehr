<template lang="pug">
  div
    div(v-if="authorized")
      div(v-show="!hasFiles", class="intro-text").
        Upload data files that you want to use in EHR cases (seeds). For example, upload x-rays, lab reports and other medical images or PDF files.
        Then when course content designers are working on a case study they can use these files in the EHR records.
        The maximum file size is {{ filesize(ehrMaxFileSize) }} and you can upload both images and PDF files.
      file-input(v-show="!hasFiles", ref="inputFile", @file="handleFileChange")
      div(v-show="hasFiles")
        div(v-for="(file) in files", :key="file.id", class="columns")
          div(class="column is-2")
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
          ui-button(v-on:buttonClicked="cancelFile", :disabled="!hasFiles", v-bind:secondary="true") Cancel
          ui-button(v-on:buttonClicked="uploadFile", :disabled="!hasValidFile")  Upload

      div(v-if="!!uploadedFile", class="successMessage") Successful upload of
        span &nbsp; {{filesize(uploadedFile.size)}} bytes
        span(class="fileName") &nbsp; {{uploadedFile.filename}}.
        span(v-if="uploadedFile.originalname !== uploadedFile.filename", class="") &nbsp; The file was renamed from
          span(class="fileName") &nbsp; {{uploadedFile.originalname}}
          span &nbsp; to
          span(class="fileName") &nbsp; {{uploadedFile.filename}}.
      div(v-show="errorMessage", class="error-msg") {{ errorMessage }}
    div(v-else)  You are not authorized to upload files.
</template>
<script>
import axios from 'axios'
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
      errorMessage: '',
      uploadedFile: undefined,
      isImage: false,
      iptc: {},
      exif: {}
    }
  },
  computed: {
    hasFiles () { return this.files.length > 0 },
    hasExif () {
      return Object.keys(this.exif).length > 0
    },
    hasValidFile () {
      return this.hasFiles && !this.files[0].error
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
    handleFileChange (newFileList) {
      const _thisComponent = this
      this.errorMessage = ''
      this.uploadedFile = undefined
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

      EXIF.getData(newFile, function () {
        // this refers to the results of getData
        // _thisComponent refers to the outer component
        _thisComponent.iptc = EXIF.getAllIptcTags(this)
        _thisComponent.exif = EXIF.getAllTags(this)
      })

      _thisComponent.files.push(newFile)
    },
    filesize (size) {
      return filesize(size)
    },
    lastUpdate (unixMS) {
      const unix = Math.floor(unixMS / 1000)
      return moment.unix(unix).format('YYYY-MM-DD h:mm a')
    },
    async getMaxFileSize (){
      const url = StoreHelper.apiUrlGet() + '/files/public/maxFileSize'
      const res = await fetch(url)
      const data = await res.json()
      console.log('got max file size', url, data)
      this.ehrMaxFileSize = data.value
    },
    uploadFile () {
      const url = StoreHelper.apiUrlGet() + '/files/upload'
      const config = {
        onUploadProgress: function (progressEvent) {
          let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          console.log('percentCompleted', percentCompleted)
        }
      }
      let data = new FormData()
      //todo get field name via api endpoint
      data.append('ehrFile', this.files[0])

      axios.post(url, data, config)
        .then(res => {
          this.uploadedFile = res.data
        })
        .catch(err => {
          this.errorMessage = JSON.stringify(err)
          if (err.response && err.response.data && err.response.data.message) {
            this.errorMessage = err.response.data.message
          }
        })
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
    height: 200px;
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
