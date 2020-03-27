<template>
  <div class="home">
    <div class="box">
      <div v-for="(item,index) in data" :key="index">
        <span>{{item.name}}</span>
        <div v-for="(child,index2) in item.list" :key="index2">
          <span :class=" (status[index] !== 'undefined' && status[index] === index2)  ? 'hot' : ''" @click="change(index, index2)"><i class="el-icon-delete"/>{{child.age}}</span>
        </div>
      </div>
    </div>
    <div class="box">
      <button @click="add">vuex里count+10</button>
      <br>
      <button @click="reduce">vuex里count-5</button>
      <br>
      <button @click="save">把改变后的count存到vuex</button>
      <br>
      <button @click="take">读取vuex里的count</button>
      <br>
      <span>{{vuexValue}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      status: [],
      vuexValue:0,
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
    // this.animation();
  },
  methods:{
    change(index, index2) {
      if(this.status.length < index){
        this.status.length = index;
      }
      let copyArray = JSON.parse(JSON.stringify(this.status));
      copyArray[index] = index2;
      this.$set(this, 'status', copyArray);
    },
    /*加*/
    add(){
      this.$store.commit('add',10)
    },
    /*减*/
    reduce(){
      this.$store.commit('reduce',5)
    },
    /*存*/
    save(){
      this.$store.commit('save',this.$store.state.count)
    },
    /*取*/
    take(){
      this.vuexValue = this.$store.state.value;
    },
    animation() {
      !function () {
        function o(w, v, i) {
          return w.getAttribute(v) || i
        }

        function j(i) {
          return document.getElementsByTagName(i)
        }

        function l() {
          var i = j("script"),
            w = i.length,
            v = i[w - 1];
          return {
            l: w,
            z: o(v, "zIndex", -1),
            o: o(v, "opacity", 1),
            c: o(v, "color", "red"),
            n: o(v, "count", 99)
          }
        }

        function k() {
          r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }

        function b() {
          e.clearRect(0, 0, r, n);
          var w = [f].concat(t);
          var x, v, A, B, z, y;
          t.forEach(function (i) {
            i.x += i.xa, i.y += i.ya, i.xa *= i.x > r || i.x < 0 ? -1 : 1, i.ya *= i.y > n || i.y < 0 ? -1 : 1, e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1);
            for (v = 0; v < w.length; v++) {
              x = w[v];
              if (i !== x && null !== x.x && null !== x.y) {
                B = i.x - x.x, z = i.y - x.y, y = B * B + z * z;
                y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(), e.lineWidth = A / 2, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.moveTo(i.x, i.y), e.lineTo(x.x, x.y), e.stroke())
              }
            }
            w.splice(w.indexOf(i), 1)
          }), m(b)
        }

        var u = document.createElement("canvas"),
          s = l(),
          c = "c_n" + s.l,
          e = u.getContext("2d"),
          r, n,
          m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
            function (i) {
              window.setTimeout(i, 1000 / 45)
            }, a = Math.random, f = {
            x: null,
            y: null,
            max: 20000
          };
        u.id = c;
        u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o;
        j("body")[0].appendChild(u);
        k(), window.onresize = k;
        window.onmousemove = function (i) {
          i = i || window.event, f.x = i.clientX, f.y = i.clientY
        }, window.onmouseout = function () {
          f.x = null, f.y = null
        };
        for (var t = [], p = 0; s.n > p; p++) {
          var h = a() * r,
            g = a() * n,
            q = 2 * a() - 1,
            d = 2 * a() - 1;
          t.push({
            x: h,
            y: g,
            xa: q,
            ya: d,
            max: 6000
          })
        }
        setTimeout(function () {
          b()
        }, 100)
      }();
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "src/assets/styles/variable";
  .home{
    display: flex;
    .box{
      width: 300px;
      height: 300px;
      .hot{
        color: $theme-color;
      }
    }
  }
</style>
