<template lang="pug">
  div
    h1 Files
    div
      p.
        This very crude page is just a hack for early server side development.  Max file size {{ ehrMaxFileSize }} 
      ul
        li(v-for="(file) in files", :key="file.id")
          p. 
            {{file.name}} - {{file.size}} -
          span(v-if="file.error") {{file.error}}
          span(v-else-if="file.success") success
          span(v-else-if="file.active") active
          span(v-else-if="file.active") active
          span(v-else)
        file-upload(
          class="btn btn-primary",
          accept="image/png,image/gif,image/jpeg,image/webp,application/pdf",
          extensions="gif,jpg,jpeg,png,webp,pdf",
          :headers="httpHeader",
          :multiple="true",
          name="ehrFile",
          :size="ehrMaxFileSize",
          :post-action="postUrl",
          v-model="files",
          @input-filter="inputFilter",
          @input-file="inputFile",
          ref="upload")
          i(class="fa fa-plus") +
          span Select files

        button(
          type="button",
          class="btn btn-success",
          v-if="!$refs.upload || !$refs.upload.active",
          @click.prevent="$refs.upload.active = true")
          i(class="fa fa-arrow-up",aria-hidden="true")
          span Start Upload

        button(
          type="button",
          class="btn btn-danger",
          v-else,
          @click.prevent="$refs.upload.active = false")
          i(class="fa fa-stop", aria-hidden="true")
          span Stop Upload
</template>
<script>
/*
      div(class="dropbox")
      input(
        type="file",
        :name="uploadFieldName",
        :disabled="isSaving",
        @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length",
        accept="image/*",
        class="input-file")

   */
import FileUpload from 'vue-upload-component'
import StoreHelper from '@/helpers/store-helper'

export default {
  components: {
    FileUpload,
  },

  data () {
    return {
      files: [],
      ehrMaxFileSize: 0
    }
  },
  computed: {
    httpHeader() {
      const token = StoreHelper.getAuthToken()
      const headers = { Authorization: token }
      console.log('headers', headers)
      return headers
    },
    postUrl () {
      const url =  StoreHelper.apiUrlGet()  + '/files/upload'
      console.log('file upload to ', url)
      return url
    }
  },
  methods: {
    inputFilter (newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Before adding a file
        // 添加文件前

        // Filter system files or hide files
        // 过滤系统文件 和隐藏文件
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent()
        }

        // Filter php html js file
        // 过滤 php html js 文件
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent()
        }
      }
    },

    inputFile (newFile, oldFile) {
      if (newFile && !oldFile) {
        // add
        console.log('add', newFile)
      }
      if (newFile && oldFile) {
        // update
        console.log('update', newFile)
      }

      if (!newFile && oldFile) {
        // remove
        console.log('remove', oldFile)
      }
    },

    async getMaxFileSize(){
      const url = StoreHelper.apiUrlGet() + '/files/public/maxFileSize'
      console.log('send request to', url)
      const res = await fetch(url)
      const data = await res.json();
      console.log('got max file size', data)
      this.ehrMaxFileSize = data.value
    }
  },
  created () {
    this.getMaxFileSize()
  }
}
</script>

<style scoped lang="scss">
  .example-simple label.btn {
    margin-bottom: 0;
    margin-right: 1rem;
  }

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
