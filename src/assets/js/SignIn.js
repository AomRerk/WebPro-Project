var app = new Vue({
    el: '#app',
    data: {
        get_user: [],
        get_in: {
            email: '',
            pass: ''
        }

    },
    methods: {
        GoSignup() {
            window.location.href = "SignUp.html";
        },
        Login() {
            this.get_user = JSON.parse(localStorage.getItem('User'))
            // let get_user = localStorage.getItem('User')
            // console.log(this.get_user)
            for (let index = 0; index < this.get_user.length; index++) {
                const element = this.get_user[index];
                // console.log(element)
                if ((element.email == this.get_in.email) && (element.password == this.get_in.pass)) {
                    console.log('yes')
                    localStorage.setItem('User_in', JSON.stringify(element))
                    
                }
            }
        }
    }
})