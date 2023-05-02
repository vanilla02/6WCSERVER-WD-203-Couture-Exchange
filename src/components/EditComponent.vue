<template>
  <div class="edit">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">Edit Information</h3>
        <form @submit.prevent="handleSubmitForm">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="customer.name" required>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="customer.email" required>
          </div>
          <div class="form-group">
            <label>Phone Number</label>
            <input type="text" class="form-control" v-model="customer.phone" required>
          </div>
          <div class="form-group">
            <label>Type of Clothing</label>
            <input type="text" class="form-control" v-model="customer.toc" required>
          </div>
          <div class="form-group">
            <label>Size</label>
            <input type="text" class="form-control" v-model="customer.size" required>
          </div>
          <div class="form-group">
            <label>Pickup or Delivery</label>
            <input type="text" class="form-control" v-model="customer.pod" required>
          </div>
          <div class="form-group">
            <button class="btn btn-danger btn-block">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      customer: {
        name: '',
        email: '',
        phone: '',
        toc: '',
        size: '',
        pod: '',
      },
    };
  },
  created() {
    this.loadCustomer();
  },
  methods: {
    loadCustomer() {
      let apiURL = `http://localhost:4000/api/get-customer/${this.$route.params.id}`;

      axios
        .get(apiURL)
        .then((res) => {
          this.customer = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleSubmitForm() {
      let apiURL = `http://localhost:4000/api/update-customer/${this.$route.params.id}`;

      axios
        .put(apiURL, this.customer)
        .then(() => {
          this.$router.push({ name: "list" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
