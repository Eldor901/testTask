<template>
  <form v-on:submit.prevent="$emit('onSearch',inputText)" role="search">
    <input  v-model="inputText" id="search" type="search" placeholder="Search..." />
  </form>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      inputText: ''
    }
  },
}
</script>

<style scoped>


  input {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    padding-left: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background-color: transparent;
    border: 0px solid;
  }

  input:focus {
    outline: none;
  }



</style>