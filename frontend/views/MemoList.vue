<template>
        <!---------------------- search ---------------------------------- -->
        <!-- <div class="relative"> -->
        <div class="box-top  bg-brown text-white text-center">
            <div class="justify-center relative">
                <h1 class="text-4xl">Journey logs search</h1>
                <button class="add-jour-btn" onclick="location.replace('./memoAdd.html')">Add your
                    journey</button>
            </div>
            <h3 class="pt-2">find your interesting journey logs here !</h3>
        </div>
        <!---------------------- all filters ---------------------------------- -->
        <div class="gap-6 grid grid-cols-4 mt-4 px-3">
            <input v-model="word" class="bg-gray-100 shadow-md rounded py-1.5 px-6 mx-5 text-center"
                placeholder="title or keyword">
            <select v-model="country_select" class="bg-gray-100 shadow-md rounded py-1.5 px-6 mx-5 text-center">
                <option value="">All</option>
                <option :value="value.country" v-for="value in getData" :key="value">{{ value.country }}</option>
            </select>
            <select v-model="country_select" class="bg-gray-100 shadow-md rounded py-1.5 px-6 mx-5 text-center">
                <option value="">All</option>
                <option :value="value.country" v-for="value in getData" :key="value">{{ value.country }}</option>
            </select>
            <select v-model="country_select" class="bg-gray-100 shadow-md rounded py-1.5 px-6 mx-5 text-center">
                <option value="">All</option>
                <option :value="value.country" v-for="value in getData" :key="value">{{ value.country }}</option>
            </select>
            <select v-model="country_select" class="bg-gray-100 shadow-md rounded py-1.5 px-6 mx-5 text-center">
                <option value="">All</option>
                <option :value="value.country" v-for="value in getData" :key="value">{{ value.country }}</option>
            </select>
        </div>
        <!---------------------- country list---------------------------------- -->
        <div class="justify-center ">
            <div class="gap-8 grid grid-cols-4 mt-4 px-8 mb-5">
                <div class="card bg-white border-0 rounded-md hover:bg-slate-100" v-for="value in keyword" :key="value">
                    <a href="" onclick="alert('test')">
                        <img :src="value.image" alt="pic" class="rounded-t-md" style="width:100%">
                        <div class="card-data p-3">
                            <h4><b>{{ value.title }}</b></h4>
                            <p>{{ value.country }}, {{ value.province }}, {{ value.city }}</p>
                            <p>{{ value.start }} - {{ value.end }}</p>
                            <hr>
                            <h4><b>Price: {{ value.price }}</b></h4>
                            <!-- <ion-icon name="star" class="mt-3 float-right"></ion-icon> -->
                            <p>Favorite: {{ value.favorite }}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'List' ,
    el: '#app',
    data: {
        country_select: "",
        getData: [],
        word: '',
    },

    methods: {
        GoSignup() {
            location.replace("./SignUp.html");
        },
        GoSignin() {
            location.replace("./SignIn.html");
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
        Detail() {
            alert('test')
        }
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
        },
        keyword() {
            return this.getData.filter(f => 
                f.country.toLowerCase().includes(this.word.toLowerCase()) || f.city.toLowerCase().includes(this.word.toLowerCase()) || this.word == '')
        }
    }
}
</script>