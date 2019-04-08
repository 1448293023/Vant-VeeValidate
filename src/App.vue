<template>
  <div id="app">
    <input v-validate="'required|between:1,999'" name="email">
    <span>{{errors.first('email')}}</span>
    <input v-validate="'customReg|between:1,999'" name="numberBest">
    <span>{{errors.first('numberBest')}}</span>

    <van-field
      v-model="password"
      name="numberBest"
      type="password"
      label="密码"
      placeholder="请输入密码"
      v-validate="'customReg|between:1,999'"
      :error-message="errors.first('numberBest')"
    />
    <van-field
      v-model="email"
      name="email"
      type="text"
      label="邮箱"
      placeholder="请输入邮箱"
      v-validate="'required|email'"
      :error-message="errors.first('email')"
    />
  </div>
</template>

<script>
// import zh from 'vee-validate/dist/locale/zh_CN'

export default {
  name: 'app',
  data: ()=> ({
    password: '',
    email: ''
  }),
  mounted() {
    //this.$validator为Validator的实例方法
    this.$validator.localize("zh")
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
