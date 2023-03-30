var app = new Vue({
  el: "#app",
  data: {
    form1st: {
      country_list: [],
      title: "",
      st_address: "",
      country: "",
      province: "",
      city: "",
      start: "",
      end: "",
      co_traveller: "",
      price: "",
      descript: "",
      error: {
        e_title: "",
        e_country: "",
        e_people: "",
        e_price: "",
        e_start: "",
        e_end: "",
      },
      isChange: false,
      isEdit: {
        title: false,
        st_address: false,
        province: false,
        city: false,
        co_traveller: false,
        price: false,
        start: false,
        end: false,
        descript: false,
      },
    },
    form2nd: {
      title: "",
      address: {
        v_street: "",
        v_country: "",
        v_province: "",
        v_city: "",
      },
      price: "",
      time: {
        v_start: "",
        v_end: "",
      },
      img: [],
      descript: "",
      isModalAdd: false,
      isModalDelete: false,
      indexDelete: [],
      error: {
        e_title: "",
      },
    },
    data_length: 0,
    data_length_more: 0,
    data_main: [],
    data_more: [],
  },

  created() {
    let actionWindow =
      window.performance.getEntriesByType("navigation")[0].type;
    let pathNameURL = window.location.pathname;
    const country = fetch("/src/assets/data/country.json").then((results) =>
      results.json()
    );
    country.then((value) => {
      this.form1st.country_list = value.countrys;
    });

    const dataJson = fetch("/src/assets/data/memo.json").then((results) =>
      results.json()
    );
    dataJson.then((value) => {
      this.data_length = value.length;
    });

    if (
      actionWindow == "reload" &&
      pathNameURL.includes("memoAdd.html") &&
      this.showForm1st.length != 0
    ) {
      Object.keys(this.form1st.isEdit).forEach((keys) => {
        this.form1st.isEdit[keys] = true;
      });
      localStorage.setItem("isEdit", JSON.stringify(this.form1st.isEdit));
    }
    console.log("Fetch Json File");
  },

  methods: {
    checkTitle() {
      if (this.form1st.title === "" && this.checkEditForm.title == false) {
        this.form1st.error.e_title = "กรุณากรอกชื่อหัวข้อ";
        return;
      }
      this.form1st.error.e_title = "";
    },
    checkTitle2ND() {
      if (this.form2nd.title === "") {
        this.form2nd.error.e_title = "กรุณากรอกชื่อหัวข้อ";
        return;
      }
      this.form2nd.error.e_title = "";
    },
    checkCountry() {
      if (this.form1st.country === "" && this.showForm1st.length == 0) {
        this.form1st.error.e_country = "กรุณาเลือกประเทศ";
        return;
      }
      this.form1st.error.e_country = "";
    },
    checkPeople() {
      if (
        this.form1st.co_traveller === "" &&
        this.checkEditForm.co_traveller == false
      ) {
        this.form1st.error.e_people = "กรุณาระบุจำนวนคน'";
        return;
      }
      this.form1st.error.e_people = "";
    },
    checkPrice() {
      if (this.form1st.price === "" && this.checkEditForm.price == false) {
        this.form1st.error.e_price = "กรุณาระบุจำนวนค่าใช้จ่าย";
        return;
      }
      this.form1st.error.e_price = "";
    },
    checkTimeStart() {
      const today = new Date();
      const start = new Date(this.form1st.start);
      if (start > today) {
        this.form1st.error.e_start = "ห้ามเป็นวันในอนาคต";
        return;
      }
      this.form1st.error.e_start = "";

      if (this.form1st.start != "" && this.form1st.end == "") {
        this.form1st.error.e_end = "กรุณากรอกวันสิ้นสุดการเดินทาง";
        return;
      }

      if (this.form1st.start > this.form1st.end) {
        this.form1st.error.e_start = "ข้อมูลวันที่ไม่สอดคล้องกัน";
        this.form1st.error.e_end = "ข้อมูลวันที่ไม่สอดคล้องกัน";
        return;
      } else if (this.form1st.start <= this.form1st.end) {
        this.form1st.error.e_start = "";
        this.form1st.error.e_end = "";
      }

      this.form1st.error.e_start = "";
    },
    checkTimeEnd() {
      const today = new Date();
      const end = new Date(this.form1st.end);
      if (end > today) {
        this.form1st.error.e_end = "ห้ามเป็นวันในอนาคต";
        return;
      }
      this.form1st.error.e_end = "";

      if (this.form1st.start == "" && this.form1st.end != "") {
        this.form1st.error.e_start = "กรุณากรอกวันเริ่มต้นการเดินทาง";
        return;
      }

      if (this.form1st.start > this.form1st.end) {
        this.form1st.error.e_start = "ข้อมูลวันที่ไม่สอดคล้องกัน";
        this.form1st.error.e_end = "ข้อมูลวันที่ไม่สอดคล้องกัน";
        return;
      } else if (this.form1st.start <= this.form1st.end) {
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
      console.log(this.form1st.isChange);
      console.log(this.form1st.country)
      if (this.data_main.length != 0 && this.form1st.isChange == true) {
        Object.keys(this.form1st.isEdit).forEach((keys) => {
          if (this.form1st.isEdit[keys] == true) {
            this.form1st[keys] = this.showForm1st[0][keys];
          }
        });
        if (
          (this.showForm1st[0].country != "" ||
            this.showForm1st[0].country != this.form1st.country) &&
          this.form1st.country == ""
        ) {
          console.log('In')
          this.form1st.country = this.showForm1st[0].country;
        }

        this.data_main.splice(0, 1);
        this.pushData_main();
      }else if (this.showForm1st.length != 0 && this.form1st.isChange == false) {
        if (
          (this.showForm1st[0].country == "" ||
           this.showForm1st[0].country != this.form1st.country) &&
           this.form1st.country != ''
        ) {
          this.showForm1st[0].country = this.form1st.country;
          localStorage.setItem("data", JSON.stringify(this.showForm1st));
        }
        return;
      }else if (this.data_main.length == 0) {
        this.pushData_main();
      } 
      this.form1st.isChange = false;
      localStorage.setItem("isEdit", JSON.stringify(this.form1st.isEdit));
    },
    pushData_main() {
      this.data_main.push({
        id: this.data_length + 1,
        username: `Test${this.data_length + 1}`,
        title: this.form1st.title,
        st_address: this.form1st.st_address,
        country: this.form1st.country,
        province: this.form1st.province,
        city: this.form1st.city,
        start: this.form1st.start,
        end: this.form1st.end,
        co_traveller: this.form1st.co_traveller,
        price: this.form1st.price,
        descript: this.form1st.descript,
        image: "",
        favorite: 0,
      });
      Object.keys(this.form1st.isEdit).forEach((keys) => {
        this.form1st.isEdit[keys] = true;
      });
      localStorage.setItem("data", JSON.stringify(this.data_main));
    },
    nextForm1st(){
      this.submit();
      if (
        this.form1st.error.e_title != "" ||
        this.form1st.error.e_country != "" ||
        this.form1st.error.e_people != "" ||
        this.form1st.error.e_price != "" ||
        this.form1st.error.e_start != "" ||
        this.form1st.error.e_end != ""
      ) {
        return;
      }
      location.replace("./memoAdd-2nd.html");
    },
    add2ND() {
      this.checkTitle2ND();

      if (this.form1st.error.e_title != "") {
        return;
      }

      if (this.data_more[0] == null) {
        this.data_more.splice(0, 1);
      }

      let address = `${this.form2nd.address.v_street} ${this.form2nd.address.v_province} ${this.form2nd.address.v_city} ${this.form2nd.address.v_country}`;

      this.data_more.push({
        main_id: this.data_length + 1,
        username: `Test`,
        title: this.form2nd.title,
        address: address,
        start: this.form2nd.time.v_start,
        end: this.form2nd.time.v_end,
        price: this.form2nd.price,
        descript: this.form2nd.descript,
        image: "",
      });
      localStorage.setItem("data_more", JSON.stringify(this.data_more));
      this.form2nd.isModalAdd = false;
      this.changeOverflow();
    },
    checkDel2ND(index) {
      let checkDuplicates = this.form2nd.indexDelete.indexOf(index);

      if (checkDuplicates == -1) {
        this.form2nd.indexDelete.push(index);
      } else {
        this.form2nd.indexDelete.splice(checkDuplicates, 1);
      }
    },
    submitDelete(bool) {
      console.log(this.form2nd.indexDelete.length);
      if (bool == true && this.form2nd.indexDelete.length != 0) {
        let i = 0;
        let sortDESC = this.form2nd.indexDelete.sort().reverse();
        while (i < sortDESC.length) {
          this.data_more.splice(sortDESC[i], 1);
          i++;
        }
        localStorage.removeItem("data_more");
        localStorage.setItem("data_more", JSON.stringify(this.data_more));
      }
      this.form2nd.indexDelete = [];
      this.form2nd.isModalDelete = false;
      this.changeOverflow();
    },
    GoSignup() {
      location.replace("./SignUp.html");
    },
    FirstPageForm(status) {
      location.replace("./memoAdd.html");

      console.log("Hello WOrld");
      console.log(this.showForm1st.length);
      if (status == "Form_2&3" && this.showForm1st.length == 0) {
        alert("Please fill out the form!");
      } else {
        // document.getElementById('title').defaultValue = 'hello'
        // console.log(this.data_main)
      }
    },
    SecondPageForm(status) {
      console.log(this.showForm1st.length);
      if (status == "From_1stPage" && this.showForm1st.length == 0) {
        alert("Please click the 'Next' button below the form to save!");
        return;
      }
      location.replace("./memoAdd-2nd.html");
    },
    ThirdPageForm(status) {
      if (status == "From_1stPage" && this.showForm1st.length == 0) {
        alert("Please click the 'Next' button below the form to save!");
        return;
      }
      location.replace("./memoAdd-3rd.html");
    },
    changeOverflow() {
      let body = document.getElementsByTagName("BODY")[0];

      if (this.form2nd.isModalAdd || this.form2nd.isModalDelete) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    },
    submitAll() {
      if (confirm("Do you want to submit it?")) {
        alert("Data is added successfully!");
        localStorage.removeItem("data");
        localStorage.removeItem("data_more");
        location.replace("./memoList.html");
      }
    },
    onFocus(e, msg) {
      this.form1st.isChange = true;

      if (e.type == "focus") {
        if (msg == "start") {
          this.form1st.end = this.showForm1st[0].end;
          this.form1st.isEdit.end = false;
        } else if (msg == "end") {
          this.form1st.start = this.showForm1st[0].start;
          this.form1st.isEdit.start = false;
        }
        this.form1st[msg] = this.showForm1st[0][msg];
        this.form1st.isEdit[msg] = false;
        localStorage.setItem("isEdit", JSON.stringify(this.form1st.isEdit));
      }
    },
  },
  computed: {
    showForm1st() {
      let getItem = JSON.parse(localStorage.getItem("data"));
      if (getItem != null) {
        this.data_main = getItem;
      }
      return this.data_main;
    },
    showData2nd() {
      let getItem = JSON.parse(localStorage.getItem("data_more"));
      if (getItem != null) {
        this.data_more = getItem;
      }
      console.log(this.data_more);
      return this.data_more;
    },
    checkEditForm() {
      let getItem = JSON.parse(localStorage.getItem("isEdit"));
      if (getItem != null) {
        this.form1st.isEdit = getItem;
      }
      return this.form1st.isEdit;
    },
  },
});