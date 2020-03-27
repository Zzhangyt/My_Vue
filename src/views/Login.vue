<template>
  <div class="height-full">
    <div class="login">
      <el-button @click="login" type="primary">Login</el-button>
    </div>
  </div>
</template>

<script>
  import Storage from "../assets/js/Storage";
  export default {
    name: "Login",
    methods:{
      login() {
        let params = {
          companyId: 'ID00001',
          token: 143484545116546511,
          userId: 'userId',
          accountId: 'account001'
        };
        Storage.set('user',params,true);
        this.$router.push('/home')
      }
    }
  }
</script>

<style lang="scss" scoped>
.login{
  height: 100%;
  background: url("../assets/images/bg.png") center center no-repeat;
  background-size: cover;
}
</style>
