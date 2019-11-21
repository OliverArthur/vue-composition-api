<template>
  <section class="app">
    <app-header label="PUNK API" />
    <app-body api="punkapi" version="v2" fragment="beers" />
  </section>
</template>

<script>
import AppHeader from "@/components/Header";
import AppBody from "@/components/Body";

export default {
  name: "App",
  components: {
    AppHeader,
    AppBody
  }
};
</script>
