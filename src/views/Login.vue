<template>
  <div
      class="height-full">
    <div
        class="login">
      <div
          class="login_text">
        <p class="login_title"
           @click="login">
          11</p>
      </div>
    </div>
  </div>
</template>

<script>
import Storage
  from "../assets/js/Storage";

export default {
  name: "Login",
  methods: {
    login() {
      let params = {
        companyId: 'ID00001',
        token: 143484545116546511,
        userId: 'userId',
        accountId: 'account001'
      };
      Storage.set('user', params, true);
      this.$router.push('/home')
    }
  }
}
</script>

<style
    lang="scss"
    scoped>
.login {
  height: 100%;
  display: flex;
  align-items: center;

  .login_text {
    width: 100%;
    margin-bottom: 170px;

    .login_title {
      font-size: 60px;
      text-align: center;
      margin-bottom: 20px;
      cursor: pointer;

      &:hover {
        opacity: .8;
      }
    }
  }
}
</style>
