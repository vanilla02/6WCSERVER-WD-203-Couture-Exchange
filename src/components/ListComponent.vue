<template>
    <body class="list">
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Type of Clothing</th>
                                <th>Size</th>
                                <th>Pickup or Delivery</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="customer in Customers" :key="customer._id">
                                <td>{{ customer.name }} </td>
                                <td>{{ customer.email }} </td>
                                <td>{{ customer.phone }} </td>
                                <td>{{ customer.toc || 'N/A' }} </td>
                                <td>{{ customer.size }} </td>
                                <td>{{ customer.pod }} </td>
                
                                <td>
                                    <router-link :to="{ name: 'edit', params: { id: customer._id } }" class="btn btn-success">Edit</router-link>
                                    <button @click.prevent="deleteCustomer(customer._id)" class="btn btn-danger">Delete</button>
                                </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </body>
</template>

<script>
    import axios from "axios";
    import EditComponent from "./EditComponent.vue";
    export default {
        data() {
            return {
                Customers: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Customers = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteCustomer(id){
                let apiURL = `http://localhost:4000/api/delete-customer/${id}`;
                let indexOfArrayItem = this.Customers.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Customers.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>

<style scoped>
.list {
    width: 100%;
    height: 100%;
    background-image: url(../assets/background2.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 10%;
    position: fixed;
    left: 0; right: 0; top: 55px;
    overflow-y: scroll;
}

.row {
    width: 100%;
    margin: 0 auto;
    padding-top: 2%;
    text-align: center;
}

thead {
    background-color: black;
    color: beige;
}

table {
    background-color: rgba(231, 227, 227, 0.5);
}
</style>