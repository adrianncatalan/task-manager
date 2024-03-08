const login = () => {
    const form = document.querySelector('.login-box-form-ts') as HTMLFormElement;
    const username = form.elements['username'] as HTMLInputElement;
    const password = form.elements['password'] as HTMLInputElement;
    console.log(username.value);
    console.log(password.value);
}

export default login;