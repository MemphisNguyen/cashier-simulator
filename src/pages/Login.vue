<template>
  <div class="login">
    <v-card width="500">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <form class="login-form" @submit="login">
          <v-text-field label="Username" type="text" v-model="input.username" autocomplete="off" />
          <v-text-field label="Password" type="password" v-model="input.password" autocomplete="off" />
          <div class="text-error" v-if="message">{{ message }}</div>
          <v-btn type="submit" color="primary" variant="elevated" @click="login">Login</v-btn>
        </form>
      </v-card-text>
    </v-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

const LoginScreen = defineComponent({
  name: 'LoginScreen',
  emits: ['login'],
  data() {
    return {
      input: {
        username: '',
        password: '',
      },
      message: '',
    }
  },
  methods: {
    login(event: Event) {
      this.message = ''
      event.preventDefault()
      if (this.input.username == 'Jack' && this.input.password == '66449933') {
        this.$emit('login', {
          ...this.input
        })
      } else {
        this.message = 'Invalid username or password'
      }
    },
  },
})

export default LoginScreen
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>