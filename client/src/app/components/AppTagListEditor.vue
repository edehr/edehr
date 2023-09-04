<template lang='pug'>
  div(class="tag-list-editor")
    div(v-for='(tag) in tagList',
      :key='tag',
      class="app-tag"
      )
      span {{tag}}
      button(v-on:click="removeTagAction(tag)", :title='removeTagText(tag)') x
    input(class="input", type="text", v-model="tagInput", @change="addTag", @keydown='noSpace', placeholder='Add tag')

</template>

<script>
import AppTagList from '@/app/components/AppTagList.vue'

export default {
  components: { AppTagList },
  data: function () {
    return {
      tagInput: '',
      liveList: []
    }
  },
  props: {
    tagList: {type: Array}
  },
  computed: {
  },
  methods: {
    // inform parent about update
    addTag (event) {
      const val = event.target.value
      if(val) {
        let newList = JSON.parse(JSON.stringify(this.liveList))
        newList.push(val)
        newList.sort()
        let unique = [...new Set(newList)]
        let newTagList = unique.join(',')
        this.tagInput = ''
        this.$emit('update', newTagList)
      }
    },
    noSpace (event) {
      // if the key is a space then prevent the default action to prevent spaces in the text
      if(event.which === 32) {
        event.preventDefault()
      }
    },
    removeTagAction (tag) {
      let oldList = this.tagList
      let newList = oldList.filter( t => t !== tag )
      this.$emit('update', newList.join(','))
    },
    removeTagText (tag) {
      return `Remove tag "${tag}"`
    }
  },
  mounted () {
    this.liveList = this.tagList || []
  },
  watch: {
    // parent changes property. copy to local
    tagList () {
      this.liveList = this.tagList || []
    },
  }
}
</script>

