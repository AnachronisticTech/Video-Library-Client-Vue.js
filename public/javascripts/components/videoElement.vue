<template>
    <div class="element">
        <div class="thumbnail">&nbsp;</div>
        <h2>{{ title }}</h2>
        <h3>{{ tags.toString() }}</h3>
    </div>
</template>

<script>
    import db from '@/public/javascripts/db.js';
    export default {
        data() {
            // var video = {};
            // $.ajax({
            //     type: "POST",
            //     // data: data,
            //     url: 'http://localhost:3000/video/5cd05f0ce8120859a0a9eb18',
            //     dataType: "json",
            //     success: function(json_data) {
            //         // $.each(json_data, function(id) {
            //         //     // console.log(JSON.stringify(this)); // DEBUG
            //         //     obj[id] = this;
            //         // });
            //         video = json_data;
            //         console.log(JSON.stringify(video));
            //     },
            //     async: false
            // });
            return {
                title: '',
                tags: ['tag1', 'tag2']
            }
        },
        created() {
            video = db.video_detail('5cd05f0ce8120859a0a9eb18').then(function(response) {
                this.title = response.data.title;
            });
        }
    }
</script>

<style scoped>
    .element {
        width:300px;
        border:2px solid grey;
        margin:5px;
    }
    .thumbnail {
        width:100%;
        height:200px;
        background:black;
    }
    /* .element h2 {} */
    /* .element h3 {} */
</style>
