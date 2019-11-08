<template>
  <div id="main-footer">
    <span>Written By {{this.author}}</span>
  </div>
</template>

<script scoped>
import '../assets/stylus/footer.styl'
export default {
  data () {
    return {
      author: '@AlphaBelt'
    }
  }

}
</script>
