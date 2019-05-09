<template>
    <div class="element" v-on:click="$router.push({name:'video', params:{id: video._id}})">
        <div class="thumbnail">&nbsp;</div>
        <h2>{{ video.title }}</h2>
        <div class="tags">
            <span v-for="(tag, index) in video.tags" :key="tag._id">{{ tag.name }}<span v-if="index != video.tags.length - 1">, </span></span>
        </div>
        <button class="edit" v-on:click.stop="edit">
            <img src="@/assets/edit_icon.png">
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            video: Object
        },
        methods: {
            edit: function(event) {
                alert('hi');
            }
        }
    }
</script>

<style scoped>
    .element {
        width:300px;
        border:2px solid grey;
        margin:5px;
        float:left;
    }
    .thumbnail {
        width:100%;
        height:200px;
        background:black;
    }
    /* .element h2 {} */
    .tags {
        margin:10px;
        text-align:left;
    }
    .edit {
        float:right;
        border:0;
        background:rgba(0,0,0,0);
        margin:0;
        padding:0;
        outline:none;
        pointer-events:all;
        width:50px;
        height:50px;
    }
    .edit img {
        width:50px;
        height:50px;
    }
</style>
