<template>
  <div class="card" @click="$emit('onCardClick', InCart)">
    <img :src="image" class="card_image"/>
    <div class="card_content">
      <h3>{{title}}</h3>
      <p>{{money}}$</p>
    </div>
    <div class="quantity">{{quantity}}</div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    image: String,
    money: Number,
    quantity: Number,
  },
  name: "Card",
  data() {
    return {
      InCart: {
        id: this.id,
        title: this.title,
        money: this.money,
        quantity: 1,
      }
    }
  },
}
</script>

<style scoped>
  .card{
    text-align: left;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 20px;
    background: #F9FBFD;
    width: 350px;
    height: 100px;
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
  }

  .card_content
  {
    padding-left: 20px;
  }


  .card_image
  {
    width: 70px;
    height: 70px;
    padding: 10px;
    border-radius: 20px;
  }

  .quantity
  {
    margin-top: 60px;
    margin-left: 100px;
  }

</style>