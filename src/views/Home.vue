<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <div v-for="video in videos" :key="video._id">
            <VideoElement :video="video"/>
        </div>
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import VideoElement from '@/components/VideoElement.vue'
import db from '@/db.js'

export default {
    name: 'home',
    components: {
        HelloWorld,
        VideoElement
    },
    data() {
        return {
            videos: []
        }
    },
    created() {
        db.all_videos().then(res => this.videos = res.data)
    }
}
</script>
