<template>
    <div
        class="form-box flex backdrop-blur justify-center items-center relative w-400 h-450 bg-transparent border-2 border-neutral-300 rounded-2xl">
        <div class="form-value p-10 text-white">
            <form action="">
                <h2 class="text-center text-4xl">Log in</h2>
                <div class="inputbox relative mx-30 w-310 py-3">
                    <ion-icon class="absolute right-0 " name="mail-outline"></ion-icon>
                    <input class="w-full h-50 bg-transparent" type="email" placeholder="Email" v-model='get_in.email'
                        required>
                </div>
                <div class="inputbox relative mx-30 w-310 py-3">
                    <ion-icon class="absolute right-0" name="lock-closed-outline"></ion-icon>
                    <input class="w-full h-50 bg-transparent" type="password" placeholder="Password" v-model='get_in.pass'
                        required>
                </div>
                <button type="button" class="mt-5 mb-2 rounded-2xl w-full h-8 text-black bg-white" @click="Login()">Log
                    in</button>
                <div class="register">
                    <p>Don't have an account? <a href="SignUp.html">Register</a></p>
                </div>
            </form>

        </div>

    </div>
</template>

<script>
export default {
    name: 'Signin',
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
}
</script>