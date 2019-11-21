<template>
  <header>
    <h1>{{ label }}</h1>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    label: {
      type: String,
      default: null
    }
  }
};
</script>
