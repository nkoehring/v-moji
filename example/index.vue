<template>
  <div>
    <header>
      <h1>VueEasyMoji</h1>
    </header>
    <div v-moji><b>Default:</b> Made with :heart: :wink: and Vuejs</div>
    <div v-moji.ascii><b>ASCII Emojis:</b> Made with :heart: ;D and Vuejs</div>
    <div v-moji:unicode.ascii><b>Unicode output:</b> Made with :heart: ;D and Vuejs</div>
    <div v-moji:ascii><b>ASCII output:</b> Made with :heart: :wink: and Vuejs</div>
  </div>
</template>

<script>
export default {
  name: 'VueEasyMoji-TEST-APP',
  data () {
    return {
    }
  }
}
</script>

<style>
b { display: inline-block; width: 10em; }
</style>
