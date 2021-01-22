<template>
  <header>
    <router-link to="/"> <img src="../assets/eldor.png" class="logo" alt="logo"></router-link>
    <nav>
    </nav>

    <router-link to="/cart">
      <div v-if="$store.getters.get_info_in_cart_length > 0" class="card_add_num">+ {{$store.getters.get_info_in_cart_length}}</div>
      <img src="../assets/cart.png" class="cart_icon" > </router-link>
  </header>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
  }

  .logo{
    width: 100px;
  }

  .cart_icon
  {
    width: 50px;
  }

  .card_add_num
  {
    color: green;
    margin-top: -5px;
    position: absolute;
    font-size: 20px;
  }
</style>