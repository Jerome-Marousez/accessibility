<template>

  <div class="options">
    <div v-for="(option, id) in data" :key="id">
      <button class="option" @click="flash(id)" :id="'btn' + id">
        <div :style="'transform: rotate(' + option.angle + ')'">
          <i :class="option.icon"/>
        </div>
        <div class="label">{{ option.label }}</div>
      </button>
    </div>
  </div>

</template>


<script>
export default {
  name: "Options",

  inject: [],

  components: {},

  props: {
    data: Object,
  },

  emits: [],

  data() {
    return {}
  },

  provide() {
    return {}
  },

  computed: {
    icons(){
      let amount = 0
      for(const item in this.data){
        amount++
      }
      return amount
    },
  },

  methods: {
    flash(id){
      const btn = document.querySelector('#btn' + id)
      btn.classList.add('selected')
      setTimeout(() => {
        btn.classList.remove('selected')
      }, 2000)
    }
  },

  unmounted() {
  },

  mounted() {
  },

  created() {
  },

}
</script>


<style scoped>
.options {
  position: absolute;
  inset: 0 0 0 0;
  z-index: 50;
  pointer-events: none;
}
.option {
  pointer-events: all;
  width: 100vw;
  min-height: calc((100vh - 8rem) / v-bind(icons));
  font-size: max(3rem, 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.label {
  font-size: max(2rem, 2vw);
}
</style>