<template>
  <div class="home">
    <div v-for="(item,index) in data" :key="index">
      <span>{{item.name}}</span>
      <div v-for="(child,index2) in item.list" :key="index2">
        <span :class=" (status[index] !== 'undefined' && status[index] === index2)  ? 'hot' : ''" @click="change(index, index2)">{{child.age}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Api from "../api/Api";

export default {
  name: 'Home',
  data(){
    return{
      status: [],
      data:[
        {
          name:'一级-1',
          list:[
            {
              age:'1'
            },
            {
              age:'2'
            }
          ]
        },
        {
          name:'一级-2',
          list:[
            {
              age:'1'
            },
            {
              age:'2'
            }
          ]
        },
        {
          name:'一级-3',
          list:[
            {
              age:'1'
            },
            {
              age:'2'
            }
          ]
        }
      ],
      type:false
    }
  },
  computed:{},
  components: {},
  mounted() {
    this.data.forEach(()=>{
      this.status.push(0)
    });
    Api.getList({
      method: 'post',
      data: {
        companyId: "comp_00000001",
        token: "582d1c0d8a7d4d1784bcfa36448f2756",
        userId: "user_00001498",
        accountId: "",
        timestamp: 1585292249993,
        lang: "zh-CN"
      }
    }).then(rep=>{
      console.log(rep);
    })
  },
  methods:{
    change(index, index2) {
      if(this.status.length < index){
        this.status.length = index;
      }
      let copyArray = JSON.parse(JSON.stringify(this.status));
      copyArray[index] = index2;
      this.$set(this, 'status', copyArray);
    }
  }
}
</script>
<style>
  .hot{
    color: red;
  }
</style>
