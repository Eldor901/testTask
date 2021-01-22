<template>
  <div id="app">
    <div class="container">
    <Header/>
    <router-view />
    <Footer/>
    </div>
  </div>
</template>


<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {Footer, Header},
  data() {
    return {
    }
  },
  mounted() {
    let generateFakeData = [];
    for (let i = 1; i <= 20; i++) {
      let data = {
        id :  i,
        image: 'https://picsum.photos/1200/1000',
        name :  `Some Title ${i}`,
        price : Math.floor(Math.random() * 6) + 10,
        quantity :  Math.floor(Math.random() * 6) + 1,
      }
      generateFakeData.push(data);
    }
    this.$store.commit('generateAllCartsInfo', generateFakeData);
  }
}
</script>

<style>
*{
  margin: 10px 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container
{
  max-width: 1280px;
  margin: 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 20px;
  background: #F9FBFD;
}
</style>