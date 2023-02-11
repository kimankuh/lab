<template>
  <ul class="menu">
    <li v-for="a in menu" :key="a"><a href="#none">{{ a }}</a></li> <!-- v-for="(a, i) in menu"와 같이 v-for문에서 두번째 매개변수는 index값 -->
  </ul>
  <!-- <div v-for="(a, i) in products" :key="a">
    <h4>{{ a }} 원룸</h4>
    <div >{{ price[i] }} 만원</div>
  </div> -->

  <div>
    <h4>역삼동 원룸</h4>
    <div>60 만원</div>
    <button @click="alert(1)">허위매물신고</button>
    <span>신고수: 0</span>
  </div>
  <div>
    <h4>운양동 원룸</h4>
    <div>70 만원</div>
    <button>허위매물신고</button>
    <span>신고수: 0</span>
  </div>
  <div>
    <h4>여의도 원룸</h4>
    <div>80 만원</div>
    <button>허위매물신고</button>
    <span>신고수: 0</span>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {
      menu : ['Home', 'Products', 'Contact'],
      price : [70, 80, 90],
      products : ['역삼동', '운양동', '여의도'],
    }
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
