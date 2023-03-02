var app = new Vue({
  el: "#app",
  data: {
    form1st: {
        country: [],
        title: "",
        address: {
            v_street: "",
            v_country: "",
            v_province: "",
            v_city: "",
        },
        time: {
            v_start: "",
            v_end: "",
        },
        co_traveller:'',
        price:'',
        descript: '',
        is_pic: false,
    },
    data_1st:[],
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
    showPic(bool){
        console.log(bool)
        if (bool === 'true')
            this.form1st.is_pic = true;
        else{
            this.form1st.is_pic = false;
        }
    },
    saveData(){
        console.log(1)
    }

  },
  computed: {
    listCountry() {
      const country = fetch("/src/assets/data/country.json").then((results) =>
        results.json()
      );

      country.then((value) => {
        this.form1st.country = value.countrys;
      });

      return this.form1st.country;
    },
  },
});
