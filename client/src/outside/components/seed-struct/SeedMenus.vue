<template lang='pug'>
  div
    div(v-for='menuGroup in menuList', class='ehrData-group-container')
      div(class='ehrData-group-label') {{menuGroup.label}}
      div(class='ehrData-page-container')
        div(v-for='ch1 in collectChildren(menuGroup)')
          div(v-show='pageHasData(ch1.pageDataKey)',
            class='ehrData-page-selector',
            :class="{active: activePageKey === ch1.pageDataKey}",
            v-on:click="selectPage(ch1.pageDataKey)") {{ch1.label}}
</template>

<script>
export default {
  props: {
    activePageKey: { type: String },
    ehrData: { type: Object }
  },
  computed: {
    seedEhrData () { return this.ehrData || {} },
    menuList () {  return require('@/menuList.json')  },
  },
  methods: {
    pageHasData ( pkey ) {
      return pkey &&  !!this.pageSeedData(pkey)
    },
    collectChildren ( top ) {
      let children = top.children
      // each child may be a menu sub-group
      for(let i = 0; i < children.length; i++) {
        let child = children[i]
        if(child.children.length > 0) {
          children = [...children, ...child.children]
        }
      }
      return children.sort( (a,b) => a.name.localeCompare(b.name))
    },
    pageSeedData ( pkey ) {
      return pkey ? this.seedEhrData[pkey] : {}
    },
    selectPage (pkey) {
      this.$emit('selectPage', pkey)
    }
  }
}
</script>

<style scoped lang='scss'>
@import "../../../scss/definitions";
.ehrData-group-container {
  background-color: $grey30;
}
.ehrData-group-label {
  padding: 1rem 0 0  10px;
  font-weight: bold;
}
.ehrData-page-container {
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.ehrData-page-selector {
  cursor: pointer;
  height: 2rem;
  margin: 0.5rem 0.5rem;
  padding: 5px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
$bg-clr: $brand-primary;
  //rgb(0, 99, 183);
$bx-clr: rgb(240, 240, 255, 0.7);
$active-clr: $brand-primary-dark;
  //rgb(34,34,56);
.ehrData-page-selector{
  background-color: $bg-clr;
  box-shadow: 1px 1px 2px $bx-clr;
  color: #eeeeee;
  transition: 0.25s;
}
.ehrData-page-selector:hover {
  background-color: $active-clr;
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 6px  $bx-clr;
}
.active {
  background-color: $active-clr;
  box-shadow: 1px 1px 2px white;
}
</style>
