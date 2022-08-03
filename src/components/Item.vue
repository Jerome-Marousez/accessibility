<template>

  <button class="item">
    <slot name="icon"></slot>
    <slot name="label" class="label"></slot>
  </button>


</template>


<script>
export default {
  name: "Item",

  inject: [],

  components: {},

  props: {},

  emits: [],

  data() {
    return {}
  },

  provide() {
    return {}
  },

  computed: {},

  methods: {},

  unmounted() {
  },

  mounted() {
  },

  created() {
  },

}
</script>


<style scoped>
.item {
  width: 50vw;
  min-height: calc((100vh - 8rem) / 3);
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