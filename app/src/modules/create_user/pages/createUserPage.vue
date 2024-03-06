<template>
    <div>
        <form @submit.prevent="handleCreateUser">
            <label for="username">Username</label>
            <input required type="text" name="username">

            <label for="email">Email</label>
            <input required type="email" name="email">

            <label required for="password">Password</label>
            <input required type="password" name="">

            <button type="submit">Create user</button>
        </form>
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