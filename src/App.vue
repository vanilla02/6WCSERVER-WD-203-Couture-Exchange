<template>
  <div class="app">
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand float-left">Couture Exchange</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/customer">Submission of Information</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">Edit Information</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/aboutus">About</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>
<style scoped>
  .nav-item {
    padding-left: 1em;
  }
</style>