<template>
  <div class="login-box">
    <form class="login-box-form login-box-form-ts" @submit.prevent="handleLogin">
      <label for="username">Username</label>
      <input required type="text" name="username">

      <label for="password">Password</label>
      <input required type="password" name="password">

      <button type="submit">Login</button>
    </form>
    <p>
      If you are not registered, do it now!
      <span>
        <router-link to="/create-user">Create user</router-link>
      </span>
    </p>
  </div>
</template>

<script>
import login from '@/modules/login/services/login.ts'

export default {
  name: 'LoginPage',
  methods: {
    handleLogin() {
      login()
    }
  }
}
</script>

<style></style>