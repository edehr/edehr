<template lang='pug'>
  div(class="dropdownWindow")
    label(for="allToggle", class='allBox', tabindex=0)
      input(
        @input="toggleAll",
        type="checkbox",
        v-model="all",
        :indeterminate.prop="partial",
        id="allToggle")
      span &nbsp; Select all
    check-box(
      v-for="option in options",
      :checked="value.includes(option.id)",
      @update:checked="check(option.id, $event)",
      :fieldId="option.name",
      :label="option.name",
      :key="option.id")

</template>

<script>
import Checkbox from './Checkbox.vue'

export default {
  components: {
    'check-box': Checkbox,
  },
  data () {
    return {
      all: false,
    }
  },
  props: {
    value: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every((option) => {
          return typeof option === 'number' || option instanceof Number
        })
      },
    },
    options: {
      type: Array,
      required: true,
      validator: (value) => {
        const hasNameKey = value.every((option) =>
          Object.keys(option).includes('name')
        )
        const hasIdKey = value.every((option) =>
          Object.keys(option).includes('id')
        )
        return hasNameKey && hasIdKey
      },
    },
  },
  computed: {
    partial () {
      const sLen = this.value.length
      const oLen = this.options.length
      return sLen > 0 ? (sLen < oLen) : false
    },
  },
  methods: {
    toggleAll () {
      this.all = !this.all
      let updatedValue = this.all ? this.options.map( p => p.id) : []
      updatedValue.sort()
      this.$emit('update:value', updatedValue)
    },
    check (optionId, checked) {
      let updatedValue = [...this.value]
      if (checked) {
        updatedValue.push(optionId)
      } else {
        updatedValue.splice(updatedValue.indexOf(optionId), 1)
      }
      // sort the array if indices
      updatedValue.sort()
      this.$emit('update:value', updatedValue)
    }
  },
  watch: {
    value (val) {
      if (this.value.length === this.options.length) {
        this.all = true
      }
    },
    options (val) {
      if (this.value.length === this.options.length) {
        this.all = true
      }
    }
  },
}
</script>
