<template>
    <div>
      <button @click="increase">+</button>
      <button @click="decrease">-</button>
      <span>{{num}}</span>
    </div>
</template>

<script>
    export default {
      props:["num"],
      data(){
        return{
          num:0
        }
      },
      methods:{
        increase(){
         // this.num++;
          this.$emit('increase')
        },
        decrease(){
          //this.num--;
          this.$emit('decrease')
        }
      }
    }

</script>

<style scoped>

</style>
