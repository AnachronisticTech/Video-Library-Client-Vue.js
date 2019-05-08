<template>
    <div class="home">
        <div v-for="video in videos" :key="video._id">
            <VideoElement :video="video"/>
        </div>
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import VideoElement from '@/components/VideoElement.vue'
import Video from '@/views/Video.vue'
import Footer from '@/components/Footer.vue'
import db from '@/db.js'

export default {
    name: 'home',
    components: {
        HelloWorld,
        VideoElement,
        Video,
        Footer
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
