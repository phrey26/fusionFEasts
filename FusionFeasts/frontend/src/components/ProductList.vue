<template>
<div class="product-list">
  <h2>Products</h2>
  <div class="products">
    <div class="product" v-for="product in products" :key="product._id">
      <img :src="product.image" alt="Product Image">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>Price: {{ product.price }}</p>
      <button @click="addToCart(product)">Add to Cart</button>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
data() {
  return {
    products: [],
  };
},
mounted() {
  this.getProducts();
},
methods: {
  async getProducts() {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      this.products = response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
  addToCart(product) {
    console.log('Adding to cart:', product);
  },
},
};
</script>

<style scoped>
.product-list {
display: flex;
flex-wrap: wrap;
}
.product {
margin: 20px;
border: 1px solid #ccc;
padding: 10px;
}
</style>
