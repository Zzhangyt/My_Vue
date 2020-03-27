<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" :value="value" @input="oninput">
    <h2>{{ value }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title:''
    }
  },
  props: {
    msg: String,
    value: String
  },
  methods:{
    oninput(event){
      this.$emit('input',event.target.value)
    }
  },
  watch:{
    value(value) {
      this.$emit('onChange',value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
