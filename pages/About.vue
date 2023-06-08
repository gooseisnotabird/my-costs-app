<template>
  <div :class="$style.aboutBlock">
    <div :class="$style.text">
      Если эту страницу обновить - все сломается. только " <- назад" 
      Это учебный проект 
      Lorem iзsum dolor sit amet consectetur adipisicing elit. Asperiores sed dicta iure vel quidem voluptates? Maxime nulla sapiente labore, omnis odio dolor praesentium mollitia temporibus doloremque, vel reprehenderit! Eligendi, tempora.
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style module>
.aboutBlock {
  display: flex;
  justify-content: space-around
}
.text{
  font-family: sans-serif;
  letter-spacing: 0.05em;
  font-size: 20px;
  line-height: 28px;
  color: aliceblue;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 15px;
  margin-right: 15px;
  width: 500px;
}
</style>
