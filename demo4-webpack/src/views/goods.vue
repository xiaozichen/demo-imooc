<template>
    <div>
      <h1>这是goods页面</h1>
      <span>{{$route.params}}</span>
      <router-view class="view one"></router-view>
      <router-view class="view two" name="a"></router-view>
      <router-view class="view three" name="b"></router-view>
      <router-view/>
    </div>

</template>

<script>
    export default {
      data(){
        return {
          msg:"HEllo world"
        }
      }
    }
</script>

<style>

</style>
