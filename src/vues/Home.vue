<template>
    <div class="search_container">
      <SearchForm v-on:onSearch="SearchText($event)"/>
      <div class="cart_info_block">
      <div v-for="cartInfo in allCartInfo" >
<!--        <h1>{{cartInfo}}</h1>-->
        <Card :id="cartInfo.id" :title="cartInfo.name" :money="cartInfo.price" :quantity="cartInfo.quantity" :image="cartInfo.image" v-on:onCardClick="addToCart($event)"/>
      </div>
      </div>
    </div>
</template>
<script>
import SearchForm from "@/components/Forms/SearchForm";
import Card from "@/components/Card";

export default {
  components: {
    Card,
    SearchForm
  },
  data() {
    return {
      allInfo: this.$store.getters.get_cart_info,
      allCartInfo: this.$store.getters.get_cart_info,
    }
  },

  computed: {
   /* allCartInfo()
    {
      return this.$store.getters.get_cart_info
    }*/
  },


  mounted() {

  },

  methods: {
    SearchText(text){
        this.allCartInfo = this.allInfo;
        this.allCartInfo = this.allCartInfo.filter(word => word.name.includes(text));
    },

    addToCart(info)
    {
      this.$store.commit('infoAddedToCart', info)
    }
  }
}
</script>
<style>
  .search_container
  {
    margin: 0 30px;
  }

  .cart_info_block
  {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>