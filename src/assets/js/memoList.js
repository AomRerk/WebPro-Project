var app = new Vue({
    el: '#app',
    data: {
        country_select: "",
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
        // ทำครั้งแรกที่appสร้าง
        fetch("/src/assets/data/memo.json").then((results) =>
            results.json()
        ).then((value) => {
            this.getData = value;
        })
        // fetchมาแล้วได้เป็นpromise เอาไปthenเพื่อให้เอาpromise resultมาแปลงเป็นjsonแล้วมันก็เอาที่returnจากอันก่อนหน้า มาthenต่อว่าให้getdata = valueที่ได้
    },
    computed: {
        countryFilter() {
            return this.getData.filter(f => f.country == this.country_select || this.country_select == '')
            // เอาข้อมูลในgetDataมาfilter ดูว่าตัวที่filมาทีละตัวมันตรงกับตัวที่เราselectไหม ถ้าตรงมันจะreturn arrayใหม่ออกไป หรือถ้าที่เลือกเป็นสตริงเปล่าก็จะreturn arrayทั้งหมด
        }
    }
});
