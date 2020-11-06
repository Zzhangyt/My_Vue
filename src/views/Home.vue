<template>
  <div class="home">
    <div class="box">
      <div v-for="(item,index) in data" :key="index">
        <span>{{ item.name }}</span>
        <div v-for="(child,index2) in item.list" :key="index2">
          <span :class=" (status[index] !== 'undefined' && status[index] === index2)  ? 'hot' : ''"
                @click="change(index, index2)"><i class="el-icon-delete"/>{{ child.age }}</span>
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
      <span>{{ vuexValue }}</span>
    </div>
    <div class="box">
      <div v-for="item in checkList" :key="item.tit">
        <span>{{ item.value }}</span>
        <input type="checkbox">
        <button @click="del">删除</button>
      </div>
      {{ num }}
    </div>
    <div class="box">
      <router-link tag="button" to="/about" class="to-about">to About</router-link>
    </div>
    <div style="color: #000">
      <button @click="getAddress">address</button>
      <div id='allmap' style="width: 200px;height: 200px"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Home',
  data() {
    return {
      status: [],
      vuexValue: 0,
      data: [
        {
          name: '一级-1',
          list: [
            {
              age: '1'
            },
            {
              age: '2'
            }
          ]
        },
        {
          name: '一级-2',
          list: [
            {
              age: '1'
            },
            {
              age: '2'
            }
          ]
        },
        {
          name: '一级-3',
          list: [
            {
              age: '1'
            },
            {
              age: '2'
            }
          ]
        }
      ],
      checkList: [
        {
          tit: '1',
          value: 100
        },
        {
          tit: '2',
          value: 200
        }
      ],
      type: false,
      treeHalfList: [
        {
          name: 'join',
          age: 12,
          code: '1',
          children: [
            {
              name: 'levi',
              age: 13,
              code: '2',
            },
            {
              name: 'Li',
              age: 14,
              code: '3',
            },
            {
              name: 'Zzhang',
              age: 15,
              code: '4',
            }
          ]
        }
      ],
      checkedData: [
        {
          name: 'Zzhang',
          age: 15,
          code: '4',
        }
      ],
      address:'',
      lngLat:''
    };
  },
  computed: {
    num() {
      let num = 0;
      this.checkList.forEach((item) => {
        num += item.value;
      });
      return num
    }
  },
  components: {},
  mounted() {
    this.data.forEach(() => {
      this.status.push(0)
    });
    this.getList()
    this.getLngLat()
    // this.animation();
  },
  methods: {
    getAddress(){
      console.log(his.address,this.lngLat.lng,this.lngLat.lat);
    },
    getLngLat() {
      let that = this,point = '',geoc = new BMap.Geocoder();
      function myFun(result){
        point = new BMap.Point(result.center.lng,result.center.lat);
        that.lngLat = point;
        geoc.getLocation(point, function(rs){
          let addComp = rs.addressComponents
          that.address = `${addComp.province}、${addComp.city}、 ${addComp.district}、 ${addComp.street}、 ${addComp.streetNumber}`;
          console.log(that.lngLat.lng,that.lngLat.lat,that.address);
        },0);
      }
      let myCity = new BMap.LocalCity();
      myCity.get(myFun);
    },
    del() {
      this.checkList = [100];
    },
    change(index, index2) {
      if (this.status.length < index) {
        this.status.length = index;
      }
      let copyArray = JSON.parse(JSON.stringify(this.status));
      copyArray[index] = index2;
      this.$set(this, 'status', copyArray);
    },
    /*加*/
    add() {
      this.$store.commit('add', 10)
    },
    /*减*/
    reduce() {
      this.$store.commit('reduce', 5)
    },
    /*存*/
    save() {
      this.$store.commit('save', this.$store.state.count)
    },
    /*取*/
    take() {
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
    },
    getList() {
      let ArrayList = JSON.parse(JSON.stringify(this.treeHalfList));
      let arr = [];
      ArrayList.forEach((child) => {
        if (child.children) {
          this.checkedData.forEach((item) => {
            let childList = JSON.parse(JSON.stringify(child.children))
            childList.forEach((e) => {
              if (JSON.stringify(e) !== JSON.stringify(item)) {
                // console.log(e, 'YYYYYYYYYYYYYYYYYYY')
                let index = childList.indexOf(e)
                if (index > -1) {
                  // console.log('splice111111', child.children)
                  // child.children.splice(index, 1);
                } else {
                  arr.push(e);
                  // console.log(arr);
                  child.children = arr;
                  // console.log('splice22222222', child.children)
                }
              } else {
                // console.log(e, 'NNNNNNNNNNNNNNNNN');
              }
            })
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/assets/styles/variable";

.home {
  display: flex;

  .box {
    color: #0D1F30;
    width: 300px;
    height: 300px;

    .hot {
      color: $theme-color;
    }

    .to-about {
      width: 100px;
      height: 36px;
      text-align: center;
      line-height: 36px;
      background-color: #42b983;
      color: #fff;
      cursor: pointer;
      border-radius: 2px;
      margin-top: 50px;
    }
  }
}
</style>
