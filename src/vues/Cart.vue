<template>
  <div>
    <h1>Cart</h1>
    <div v-if="allCartInfo.length === 0">You didnt added anthing to card</div>
    <div class="cart_info_container" v-for="(cartInfo, index)  in allCartInfo">
      <div >
        <h1><span>{{index + 1}}</span> {{cartInfo.title}}</h1>
        <div class="cart_row">
          <span><img src="../assets/delete.png" class="delete_icon" @click="deleteCardInfo(cartInfo.id)"/></span>
          <h3 class="cart_price">{{cartInfo.money + '$'}}</h3>
        </div>
      </div>
      <div class="cart_row">
        <h3 class="total_price">{{cartInfo.quantity * cartInfo.money + '$'}}</h3>
        <div class="operation" @click=" cartInfo.quantity >= 2 ? cartInfo.quantity  += -1 : 1">
          <p>-</p>
        </div>
        <div class="number_of_purcheses"><p>{{cartInfo.quantity}}</p></div>
        <div class="operation" @click="cartInfo.quantity  += 1">
          <p>+</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
          return {
        }
      },

      computed: {
        allCartInfo()
        {
          return this.$store.getters.get_info_in_cart
        }
      },

      methods: {
        deleteCardInfo(id) {

          this.$store.commit('deleteFromCart', id);
        },

        decreaseAmount(id)
        {

        },
        increaseAmount(id)
        {

        }
      }
    }
</script>
<style scoped>

    select {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .cart_row {
      display: flex;
      flex-direction: row;
      margin-left: 50px;
    }

    .cart_info_container {
      display: flex;
      justify-content: space-between;
      margin: 0 50px;
    }

    .delete_icon
    {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }

    .cart_price
    {
      margin-top: 30px;
      margin-left: 30px;
    }

    .number_of_purcheses
    {
      border: 1px solid darkgrey;
      height: 40px;
      width: 70px;
    }
    .operation
    {
      border: 1px solid darkgrey;
      height: 40px;
      width: 40px;
      cursor: pointer;
    }

    .total_price
    {
      margin-right: 10px;
      margin-top: 20px;
    }

</style>
