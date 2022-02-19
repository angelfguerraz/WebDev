<template>
  <section id="bootsmodels" class="main-plans__container">
    <div class="main-plans__title">
      <h2>Choose the boots that suits you the best</h2>
      <p>All of them offer you access to our platform</p>
    </div>
    <section class="plans-container__slider">
      <!--Cards-->
      <px-mini-card></px-mini-card>
      <px-mini-card></px-mini-card>
      <px-mini-card></px-mini-card>
      <px-mini-card></px-mini-card>
      <px-mini-card></px-mini-card>
    </section>
  </section>
</template>

<script>
import PxMiniCard from "@/components/PxMiniCard";

export default {
  name: "PxCardSlider",
  components: {
    PxMiniCard,
  },
};
</script>
