<template>
  <section
    class="bg-blue flex flex-col w-11/12 mt-10 mb-10 relative border-0 rounded-xl shadow-lg shadow-black-500/50 overflow-x-hidden overflow-y-auto">
    <nav class="sticky top-0 w-full px-4 py-4 flex items-center bg-green border-0 rounded-t-xl z-50">
      <div class="relative flex items-center w-full">
        <div class="flex w-1/2 justify-start">
          <a href="" class="w-52">
            <img src="./assets/image/logo-original.png" alt="JourniiLogo">
          </a>
        </div>
        <div class="shrink-0">
          <a class="px-2" href="index.html">Home</a>
          <a class="px-2" href="memoList.html">Memo</a>
          <a class="px-2" href="">About</a>
          <a class="px-2" href="">Contact</a>
        </div>
        <div class="flex w-1/2 justify-end">
          <button class="pr-3" @click="GoSignin()">Sign in</button>
          <button type="button" @click="GoSignup()" class="bg-slate-500">Sign up</button>
        </div>
      </div>
    </nav>

    <router-view/>
  </section>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    GoSignup() {
      location.replace("./SignUp.html");
    },
    GoSignin() {
      location.replace("./SignIp.html");
    },
    FirstPageForm() {
      location.replace("./memoAdd.html");
    },
    SecondPageForm() {
      location.replace("./memoAdd-2nd.html");
    },
    ThirdPageForm() {
      location.replace("./memoAdd-3rd.html");
    },
    FourthPageForm() {
      location.replace("./memoAdd-4th.html");
    },
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
