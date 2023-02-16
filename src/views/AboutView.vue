<template>
    <div class="about">
        <h1>This is an about page</h1>
        <p>{{message}}</p>
        <img :src="imgIcon.imgurl" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello Vue!',
            imgIcon: {},
        }
    },
    created() {
        this.getData();
    },
    methods:{
        getData(){
            // https://api.ixiaowai.cn/api/api.php?return=json
            const that = this;
            // this.$request.get('/test-api/api/api.php?return=json').then(response => {
            //     that.imgIcon = response;
            // });
            this.$request.get('/test-api/api/ylapi.php').then(response => {
                that.message = response;
            });
        }
    },
}
</script>
