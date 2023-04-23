var app = new Vue({
  el: "#app",
  data: {
    changePage: {
      allUser: false,
      allLogs: false,
      allReports: false,
      allAdmin: false,
    },
    user_data: [],
    filter_name: [],
  },
  created() {
    const user = fetch("/src/assets/data/user.json").then((results) =>
      results.json()
    );
    user.then((value) => {
      this.user_data = value;
    });
    console.log(this.user_data)
    
    this.changePage.allUser = true;
  },
  methods: {
    GoSignup() {
      location.replace("./SignUp.html");
    },
  },
  computed: {},
  watch: {
    name(newVal) {
      let input = newVal.toLowerCase();
      let full_name = "";

      this.filter_name = this.dummyData.filter((value) => {
        full_name =
          value.first_name.toLowerCase() + " " + value.last_name.toLowerCase();
        return (
          value.first_name.toLowerCase().includes(input) ||
          value.last_name.toLowerCase().includes(input) ||
          full_name.includes(input)
        );
      });
    },
  },
});