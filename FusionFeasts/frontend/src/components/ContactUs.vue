<template>
<div class="contact-us">
  <h2>Contact Us</h2>
  <form @submit.prevent="submitForm">
    <div>
      <label>Name</label>
      <input v-model="form.name" type="text" required>
    </div>
    <div>
      <label>Email</label>
      <input v-model="form.email" type="email" required>
    </div>
    <div>
      <label>Message</label>
      <textarea v-model="form.message" required></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</div>
</template>

<script>
export default {
data() {
  return {
    form: {
      name: '',
      email: '',
      message: ''
    }
  };
},
methods: {
  submitForm() {
    console.log('Form submitted:', this.form);
  }
}
};
</script>

<style scoped>
.contact-us {
padding: 20px;
}
</style>
