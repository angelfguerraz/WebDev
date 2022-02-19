<template>
  <section class="main__product-detail">
    <!-- <span class="product-detail__batata-logo"></span> -->
    <div class="product-detail__title">
      <h2>We created an outrageous product</h2>
      <p>Reliable and design for daily use</p>
    </div>
    <section class="product-cards__container">
      <px-card-detail></px-card-detail>
      <px-card-detail></px-card-detail>
      <px-card-detail></px-card-detail>
    </section>
  </section>
</template>

<script>
import PxCardDetail from "@/components/PxCardDetail";

export default {
  name: "PxCard",
  components: {
    PxCardDetail,
  },
};
</script>
