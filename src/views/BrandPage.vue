<template>
  <NavBar/>
<h1>{{ product.title }}</h1>
</template>

<script>
import NavBar from "@/components/NavBar";
import {products} from "@/data";
export default {
  name: "BrandPage",
  components: {NavBar},
  data(){
    return{
      product: products.find((p) => p.brand === this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>