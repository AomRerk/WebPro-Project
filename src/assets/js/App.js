var app = new Vue({
  el: "#app",
  data: {
  },

  methods: {
    GoSignup() {
      location.replace("./SignUp.html");
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
  },
});
