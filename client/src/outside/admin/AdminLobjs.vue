<template lang="pug">
  div(class="outside-admin-page")
    admin-links(:consumerId="consumerId")
    h2 Learning Objects in {{ consumerId }}
    ui-button(v-on:buttonClicked="showUploadDialog")
      fas-icon(class="fa", :icon="appIcons.upload")
      span &nbsp; Upload LObj

    div(v-for='(lobj, index) in lobjList')
      div(class='row', :id="`S-${lobj._id}`")
        div(class='kvpair')
          div(class='key')  Name
          div(class='value')
            strong {{ lobj.name }} ({{ lobj.lastUpdateDate }})
        div(class='kvpair')
          div(class='key') Id
          div(class='value') {{ lobj._id }} ({{lobj.toolConsumer}})
        div(class='kvpair')
          div(class='key') Created
          div(class='value') {{ lobj.createDate }}
        div(class='kvpair')
          div(class='key') Description
          div(class='description value') {{ truncate(lobj.description,50) }}
    learning-object-import-dialog(ref='theLObjImportDialog', :toolConsumer='consumerId', @update='refreshList')

</template>
<script>

import AdminLinks from '@/outside/admin/components/AdminLinks.vue'
import AdminCommon from '@/outside/admin/AdminCommon.vue'
import LearningObjectImportDialog from '@/outside/components/learning-object/LearningObjectImportDialog.vue'
import UiButton from '@/app/ui/UiButton.vue'

export default {
  extends: AdminCommon,
  components: { UiButton, AdminLinks, LearningObjectImportDialog },
  computed: {
    lobjList () {
      let list = this.$store.getters['assignmentListStore/justLobjList']
      list = JSON.parse(JSON.stringify(list))
      list.sort((a,b) => a.name.localeCompare(b.name))
      return list
    }
  },
  methods: {
    truncate (input, lim) {
      return input && input.length > lim ? `${input.substring(0, lim)}...` : input
    },
    refreshList: async function () {
      await this.$store.dispatch('assignmentListStore/loadJustLobjList', this.consumerId)
    },
    loadComponent: async function () {
      if (this.isAdmin) {
        await this.refreshList()
      }  // else page controller has already redirected to login
    },
    showUploadDialog: function () {
      this.$refs.theLObjImportDialog.showLObjImportDialog()
    },

  },

}
</script>
