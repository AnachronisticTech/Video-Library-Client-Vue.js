<template>
    <div>
        <h1>{{ video.title }}</h1>
        <video width="640" controls>
            <source :src="'http://localhost:3000/library/video/'+id+'/view'">
        </video>
        <p>{{ video.summary }}</p>
    </div>
</template>

<script>
    import db from '@/db.js'
    export default {
        props: {
            id: String
        },
        data() {
            return {
                video: {
                    title: '',
                    summary: '',
                    tags: [],
                    producer: '',
                    performers: []
                }
            }
        },
        created() {
            db.video_details(this.id).then(res => this.video = res.data).catch(err => alert("Unable to get all data"));
        }
    }
</script>

<style scoped>

</style>
