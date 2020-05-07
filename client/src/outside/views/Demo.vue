<template lang="pug">
    div(v-if="isValid")
        h2(style="text-align: center") Demo Access Form
        br
        div(class="ehr-group-wrapper  grid-to-1")
            div(class="form-element form-container")
                div(class="text_input_wrapper form-container-item")
                    label Username
                    input(class="input text-input", v-model="name", type="text")
                    div(style="margin-top: 1em")
                        label Role
                        select(name="role", v-model="selectedRole")
                            //- option(value="")
                            option(
                                v-for="role in roles", 
                                :key="role.key", 
                                v-bind:value="role.key"
                            ) {{ role.value }}
                ui-button(style="margin-top: 2vh", :disabled="!isNameUnique") Submit
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import UiButton from '../../app/ui/UiButton'
export default {
  components: {
    UiButton
  },
  data () {
    return {
      name: '',
      roles: [
        { key: 'student', value: 'Student' }, 
        // { key: 'instructor', value: 'Instructor' }, 
      ],
      selectedRole: 'student',
      isNameUnique: false
    }
  },
  computed: {
    isValid () {
      const token = StoreHelper.getAuthToken()
      if (token) this.redirect()
      return !token
    }
  },
  methods: {
    redirect (path = '/ehr/'){
      this.$router.push(path)
    },
  }
}
</script>

<style scoped>
    .form-container {
        margin-left: 30vw;
        margin-right: 30vw;
    }
</style>