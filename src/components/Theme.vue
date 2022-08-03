<template>

  <button @click="switchTheme">THEME</button>


</template>


<script>
export default {
  name: "Theme",

  inject: [],

  components: {},

  props: {},

  emits: [],

  data() {
    return {
      theme: "light",
    }
  },

  provide() {
    return {}
  },

  computed: {},

  methods: {

    setTheme() {
      const theme = localStorage.getItem('theme')
      if(theme.length) {
        if(theme === 'light'){
          const css = document.getElementById('css')
          css.setAttribute("href", "theme/light.css")
          this.theme = 'light'
        } else {
          const css = document.getElementById('css')
          css.setAttribute("href", "theme/dark.css")
          this.theme = 'dark'
        }
      }
    },

    switchTheme(){
      if(this.theme === 'dark'){
        const css = document.getElementById('css')
        css.setAttribute("href", "theme/light.css")
        this.theme = 'light'
        localStorage.setItem('theme', this.theme)
      } else {
        const css = document.getElementById('css')
        css.setAttribute("href", "theme/dark.css")
        this.theme = 'dark'
        localStorage.setItem('theme', this.theme)
      }
    },
  },

  unmounted() {
  },

  mounted() {
    this.setTheme()
  },

  created() {
  },

}
</script>


<style scoped>

</style>