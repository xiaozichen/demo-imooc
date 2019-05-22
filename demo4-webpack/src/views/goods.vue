<template>
    <div>
      <h1>这是goods页面</h1>
      <span>{{$route.params}}</span>

      <router-view name="myImage"></router-view>
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
