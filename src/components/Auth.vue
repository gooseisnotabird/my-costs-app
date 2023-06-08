<template>
  <div>
    <input :class="$style.authInputs" type="text">
    <input :class="$style.authInputs" type="text">
  </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style module>
.authInputs{
border: 1px solid #A4A4A4;
border-radius: 4px;
margin: 4px;
padding: 8px;
background-color: rgb(236, 236, 236);
}
</style>
