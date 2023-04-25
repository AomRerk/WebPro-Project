var app = new Vue({
    el: '#app',
    data: {
        new_user: {
            username: '',
            email: '',
            password: '',
        }


    },
    methods: {
        GoSignin() {
            window.location.href = "SignIn.html";
        },
        Login() {
            let arr_user = JSON.parse(localStorage.getItem('User'))
            arr_user.push(this.new_user)
            localStorage.setItem('User', JSON.stringify(arr_user))
        }
    }
})