<template>
<!--  <Theme />-->

  <MainPage />
</template>

<script>
import Theme from "@/components/Theme";
import MainPage from "@/components/MainPage";

export default {
  name: 'App',
  components: {
    Theme,
    MainPage,
  },
}
</script>

<style>
@import './styles/normalize.css';
@import './styles/initial.css';

</style>
