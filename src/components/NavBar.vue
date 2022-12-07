<template>
  <nav>
    <router-link to="/">Home</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}


</style>