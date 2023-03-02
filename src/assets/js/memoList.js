var app = new Vue({
    el: '#app',
    data: {
        //   city_select: "",
          country_select: "",
        //   date: "",
        //   isClick: false,
        //   isTimeClick: false,
        //   numofpeople: "",
        //   province_select: "",
        //   range: "",
        //   time: "",
        getData: [],

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
    created() {
        const memo = fetch("/src/assets/data/memo.json").then((results) =>
            results.json()
        );

        memo.then((value) => {
            this.getData = value;
        });
    },
    computed: {
        countryFilter() {
            return  this.getData.filter(f => f.country == this.country_select || this.country_select == '')
        }
    }
});
