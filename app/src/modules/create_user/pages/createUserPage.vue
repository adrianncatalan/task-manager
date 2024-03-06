<template>
    <div>
        <form @submit.prevent="handleCreateUser">
            <label for="username">Username</label>
            <input required type="text" name="username">

            <label for="email">Email</label>
            <input required type="email" name="email">

            <label required for="password">Password</label>
            <input required type="password" name="password">

            <button type="submit">Create user</button>
        </form>
        <p>
            If you are already registered, go to login!
            <span>
                <router-link to="/">Sign in</router-link>
            </span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'CreateUserPage',
    methods: {
        handleCreateUser() {
            console.log('Aquí ejecutamos una función')
        }
    },

}
</script>

<style></style>