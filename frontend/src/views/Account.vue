<template>
    <div class="relative">
        <div class="relative">
            <h1 class="text-4xl text-center my-7">Aom's Journey</h1>
            <button class="add-jour-btn">Sort&Filter</button>
        </div>
        <div class="fav">
            <h2 class="text-2xl ml-8 mb-8">Favourite (1)</h2>
            <div class="justify-center ">
                <div class="gap-8 grid grid-cols-4 mt-4 px-8 mb-16">
                    <div class="card bg-white border-0 rounded-md hover:bg-slate-100" v-for="value in keyword" :key="value">
                        <a href="" onclick="alert('test')">
                            <img :src="value.image" alt="pic" class="rounded-t-md" style="width:100%">
                            <div class="card-data p-3">
                                <h4><b>{{ value.title }}</b></h4>
                                <p>{{ value.country }}, {{ value.province }}, {{ value.city }}</p>
                                <p>{{ value.start }} - {{ value.end }}</p>
                                <hr>
                                <h4><b>Price: {{ value.price }}</b></h4>
                                <ion-icon name="heart"></ion-icon>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="all">
            <h2 class="text-2xl ml-8 mb-8">All (8)</h2>
            <div class="justify-center ">
                <div class="gap-8 grid grid-cols-4 mt-4 px-8  mb-5">
                    <div class="card bg-white border-0 rounded-md hover:bg-slate-100" v-for="value in keyword" :key="value">
                        <a href="" onclick="alert('test')">
                            <img :src="value.image" alt="pic" class="rounded-t-md" style="width:100%">
                            <div class="card-data p-3">
                                <h4><b>{{ value.title }}</b></h4>
                                <p>{{ value.country }}, {{ value.province }}, {{ value.city }}</p>
                                <p>{{ value.start }} - {{ value.end }}</p>
                                <hr>
                                <h4><b>Price: {{ value.price }}</b></h4>
                                <ion-icon name="heart-outline"></ion-icon>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Account',

}
</script>
