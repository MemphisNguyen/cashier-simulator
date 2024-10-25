<template>
  <div class="login">
    <v-card width="500">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <form class="login-form" @submit="login">
          <v-text-field label="Username" type="text" v-model="input.username" autocomplete="off" />
          <v-text-field label="Password" type="password" autocomplete="off" />
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
    }
  },
  methods: {
    login(event: Event) {
      event.preventDefault()
      this.$emit('login', {
        ...this.input
      })
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