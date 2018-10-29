<template lang="pug">
  front-layout
    div.hello
      h1.singlepost SinglePost
</template>

<script>
import FrontLayout from '@/layout/FrontLayout'
export default {
  name: 'SingleCard',
  data () {
    return {
      msg: 'SinglePost'
    }
  },
  components: {
    FrontLayout
  }
}
</script>

<style scoped lang="sass">
h1.singlepost
  background: red
</style>
