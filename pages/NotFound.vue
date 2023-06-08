<template>
  <div :class="$style.adviceBlock">Not Found</div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped module>
  .adviceBlock {
    font-family: sans-serif;
    letter-spacing: 0.05em;
    font-size: 20px;
    line-height: 28px;
    color: aliceblue;
    margin-top: 40px;
  }
</style>
