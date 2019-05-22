<template>
    <div><h1>这是goods1页面</h1>
      <div>
        <router-link to="/goods1/title">这里显示title</router-link>
        <router-link to="/goods1/image">这里显示image</router-link>
      </div>
      <div>
        <router-view></router-view>
      </div>
      <div>
        <router-link to="/cart">到购物车里面</router-link><br/>
        <router-link v-bind:to="{name:'cart_parm',params:{'cartId':'111122'}}">命名路由到到购物车里面</router-link><br/>
        <span>
          <button v-on:click="jump">button-到购物车页面</button>
        </span>
      </div>
    </div>

</template>

<script>
    export default {
      data(){
        return {
          msg:"HEllo world"
        }
      },
      methods:{
        jump(){
         // this.$router.push('/cart');
          this.$router.push({path:'/cart?goodId=11111'});
        }
      }
    }
</script>

<style>

</style>
