<template>
    <div
        class="form-box flex backdrop-blur justify-center items-center relative w-400 h-450 bg-transparent border-2 border-neutral-300 rounded-2xl">
        <div class="form-value p-10 text-white">
            <form action="">
                <h2 class="text-center text-4xl">Register</h2>
                <div class="inputbox relative mx-30 w-310 py-3">
                    <!-- <ion-icon class="absolute right-0" name="mail-outline"></ion-icon> -->
                    <input class="w-full h-50 bg-transparent " type="text" v-model="new_user.username"
                        placeholder="Username" required>
                </div>
                <div class="inputbox relative mx-30 w-310 py-3">
                    <ion-icon class="absolute right-0 " name="mail-outline"></ion-icon>
                    <input class="w-full h-50 bg-transparent" type="email" v-model="new_user.email" placeholder="Email"
                        required>
                </div>
                <div class="inputbox relative mx-30 w-310 py-3">
                    <ion-icon class="absolute right-0" name="lock-closed-outline"></ion-icon>
                    <input class="w-full h-50 bg-transparent" type="password" v-model="new_user.password"
                        placeholder="Password" required>
                </div>
                <!-- <div class="forget text-center">
                            <a href="#">Forget Password</a>
                        </div> -->
                <button type="submit" class="mt-5 mb-2 rounded-2xl w-full h-8 text-black bg-white" @click="Login()">Log
                    in</button>
                <div class="register">
                    <p>Already have an account? <a href="SignIn.html">Log in</a></p>
                </div>
            </form>

        </div>

    </div>
</template>

<script>
export default {
    name: 'Signup',
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
}
</script>