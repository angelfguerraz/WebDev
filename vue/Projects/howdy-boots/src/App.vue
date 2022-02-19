<template>
  <main>
    <px-header></px-header>
    <px-tables></px-tables>
    <px-card></px-card>
    <px-card-slider></px-card-slider>
    <px-footer></px-footer>
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";
import PxCard from "@/components/PxCard";
import PxTables from "@/components/PxTables";
import PxCardSlider from "@/components/PxCardSlider";
import PxFooter from "@/components/PxFooter";

export default {
  name: "App",
  components: {
    PxHeader,
    PxCard,
    PxTables,
    PxCardSlider,
    PxFooter,
  },
};
</script>

<style>
@import "./assets/css/style.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
