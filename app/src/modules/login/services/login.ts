const login = () => {
    const form = document.querySelector('.login-box-form-ts') as HTMLFormElement;
    const username = form.elements['username'] as HTMLInputElement;
    const password = form.elements['password'] as HTMLInputElement;
    console.log(username);
    console.log(password);
}

export default login;