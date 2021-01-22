<template>
  <div class="footer">
    <div class="content">
    <div class="row">
      <h3>Всего</h3>
      <h3>{{getAmountOfMoney}} $</h3>
    </div>
    <div class="row">
      <h3>Скидка</h3>
      <h3>0$</h3>
    </div>
    <div class="row">
      <h3>Итого к оплате</h3>
      <h3 class="total_price_all_infos">{{getAmountOfMoney}} $</h3>
    </div>
    <div class="row">
      <div>
        ACTIONS
      </div>
      <div>
        <button class="button">Оплата</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    getAmountOfMoney()
    {
      let cart_info = this.$store.getters.get_info_in_cart;

      let result = cart_info.reduce((prev, item, index)=>{
        return prev + item.quantity * item.money;
      }, 0);

      return result
    }
  }
}
</script>

<style scoped>
   .footer {
     background: #12263F;
     color: #677B98;
     border-radius: 5px;
   }

   .row {
     display: flex;
     justify-content: space-between;

   }

   .content
   {
     margin: 10px 50px;
   }


   .total_price_all_infos
   {
     font-size: 32px;
   }

   .button {
     background-color: #4CAF50; /* Green */
     border: none;
     color: white;
     padding: 15px 32px;
     text-align: center;
     text-decoration: none;
     display: inline-block;
     font-size: 16px;
   }
</style>