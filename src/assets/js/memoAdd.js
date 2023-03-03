var app = new Vue({
  el: "#app",
  data: {
    form1st: {
      country: [],
      title: '',
      address: {
        v_street: '',
        v_country: '',
        v_province: '',
        v_city: '',
      },
      time: {
        v_start: '',
        v_end: '',
      },
      co_traveller: '',
      price: '',
      descript: '',
      is_pic: false,
      error: {
        e_title: '',
        e_country: '',
        e_people: '',
        e_price: '',
        e_start: '',
        e_end:'',
      },
    },
    form2nd: {
        img:[],
    },
    data_length: 0,
    data_log: [],
  },

  created() {
    const country = fetch("/src/assets/data/country.json").then((results) =>
      results.json()
    );
    country.then((value) => {
      this.form1st.country = value.countrys;
    });

    const dataJson = fetch("/src/assets/data/memo.json").then((results) =>
        results.json()
    );
    dataJson.then((value) => {
        this.data_length = value.length;
    });

    console.log('Fetch Json File');
  },

  methods: {
    checkTitle() {
        if (this.form1st.title === '') {
            this.form1st.error.e_title = "กรุณากรอกชื่อหัวข้อ";
            return;
        }
        this.form1st.error.e_title = '';
    },
    checkCountry() {
        if (this.form1st.address.v_country === '') {
            this.form1st.error.e_country = "กรุณาเลือกประเทศ";
            return;
        }
        this.form1st.error.e_country = '';
    },
    checkPeople() {
        if (this.form1st.co_traveller == '') {
            this.form1st.error.e_people = "กรุณาระบุจำนวนคน'";
            return;
        }
        this.form1st.error.e_people = '';
    },
    checkPrice() {
        if (this.form1st.price == '') {
            this.form1st.error.e_price = "กรุณาระบุจำนวนค่าใช้จ่าย";
            return;
        }
        this.form1st.error.e_price = '';
    },
    checkTimeStart() {

        const today = new Date()
        const start = new Date(this.form1st.time.v_start);
        if (start > today) {
            // console.log(start, ">", today);
            this.form1st.error.e_start = "ห้ามเป็นวันในอนาคต";
            return;
        }
        this.form1st.error.e_start = "";

        if(this.form1st.time.v_start != '' && this.form1st.time.v_end == ''){
            this.form1st.error.e_end  = "กรุณากรอกวันสิ้นสุดการเดินทาง";
            return
        }

        if (this.form1st.time.v_start > this.form1st.time.v_end) {
            this.form1st.error.e_start = "ข้อมูลวันที่ไม่สอดคล้องกัน";
            this.form1st.error.e_end = "ข้อมูลวันที่ไม่สอดคล้องกัน";
            return;
        } else if (this.form1st.time.v_start <= this.form1st.time.v_end) {
            this.form1st.error.e_start = "";
            this.form1st.error.e_end = "";
        }
        
        this.form1st.error.e_start = '';
    },
    checkTimeEnd() {

        const today = new Date();
        const end = new Date(this.form1st.time.v_end);
        if (end > today) {
            // console.log(end, '>', today)
            this.form1st.error.e_end = "ห้ามเป็นวันในอนาคต";
            return;
        }
        this.form1st.error.e_end = "";

        if (this.form1st.time.v_start == '' && this.form1st.time.v_end != '') {
            this.form1st.error.e_start = "กรุณากรอกวันเริ่มต้นการเดินทาง";
            return;
        }
        
        if (this.form1st.time.v_start > this.form1st.time.v_end) {
            this.form1st.error.e_start = "ข้อมูลวันที่ไม่สอดคล้องกัน";
            this.form1st.error.e_end = "ข้อมูลวันที่ไม่สอดคล้องกัน";
            return;
        }else if (this.form1st.time.v_start <= this.form1st.time.v_end){
            this.form1st.error.e_start = "";
            this.form1st.error.e_end = "";
        }

        this.form1st.error.e_end = "";
    },
    submit() {
        this.checkTitle();
        this.checkCountry();
        this.checkPeople();
        this.checkPrice();
        this.checkTimeStart();
        this.checkTimeEnd();

        if (
            this.form1st.error.e_title != "" ||
            this.form1st.error.e_country != "" ||
            this.form1st.error.e_people != "" ||
            this.form1st.error.e_price != "" ||
            this.form1st.error.e_start != "" ||
            this.form1st.error.e_end != ""
        ){
          return;
        }

        this.data_log.push({
          id: this.data_length + 1,
          username: `Test${this.data_length + 1}`,
          title: this.form1st.title,
          st_address: this.form1st.address.v_street,
          country: this.form1st.address.v_country,
          province: this.form1st.address.v_province,
          city: this.form1st.address.v_city,
          start: this.form1st.time.v_start,
          end: this.form1st.time.v_end,
          co_traveller: this.form1st.co_traveller,
          price: this.form1st.price,
          descript: this.form1st.descript,
          image: '',
          favorite: 0,
        });

        localStorage.setItem("data", JSON.stringify(this.data_log));
        location.replace("./memoAdd-2nd.html");
    },
    submit2ND(){
        location.replace("./memoAdd-3rd.html");
    },
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
    showPic(bool) {
      console.log(bool);
      if (bool === "true") this.form1st.is_pic = true;
      else {
        this.form1st.is_pic = false;
      }
    },
  },
  computed: {
      showForm1st(){
          this.data_log.push(JSON.parse(localStorage.getItem("data")));
        //   console.log(this.data_log[0][0])
          return this.data_log;
      },
  },
});
