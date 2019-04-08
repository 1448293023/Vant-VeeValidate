import Vue from 'vue'
import App from './App.vue'
import zh from 'vee-validate/dist/locale/zh_CN'
import VeeValidate, {Validator} from 'vee-validate'
Validator.extend('customReg', {
  validate: value => {
    return /[1-9]\d*/.test(value)
  },
})
// Validator.localize("zh", {
//   custom: {
//     //numberBest需与组件的name属性值保持一致
//     numberBest: {
//       customReg: "输入错误",
//       between: "error between"
//     },
//   }
// })
// Validator.localize('zh', zh)
// const dictionary = {
//   zh: {
//     attributes: {
//       email: 'Email Address'
//     }
//   }
// };
// Validator.localize(dictionary)

// -------------------------------------------

Validator.localize('zh', zh)
Validator.localize('zh', {
  attributes: {
    email: '邮箱'
  },
  messages: {
    email: () => '请输入正确的邮箱',
    required: (fieldName) => `${fieldName}不能为空`
  }
})
Vue.use(VeeValidate);
Vue.config.productionTip = false

import { Field } from 'vant'
Vue.use(Field);

new Vue({
  render: h => h(App),
}).$mount('#app')
