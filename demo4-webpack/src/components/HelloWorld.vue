<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
   <Counter v-bind:num="num" v-on:increase="increase"  v-on:decrease="decrease"></Counter>
    <span style="color: red">parent:{{num}}</span>
  </div>
</template>

<script>
import Counter from './Conunter';

export default {
  name: 'HelloWorld',
  data () {
    return {
      num:20,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Counter
  },
  methods:{
    increase(){
      this.num++;
    },
    decrease(){
      this.num--;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
