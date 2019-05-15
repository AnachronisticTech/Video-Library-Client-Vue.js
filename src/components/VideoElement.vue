<template>
    <div class="element" v-on:click="$router.push({name:'video', params:{id: video._id}})">
        <div class="thumbnail">&nbsp;</div>
        <h2>{{ video.title }}</h2>
        <div class="tags">
            <span v-for="(tag, index) in video.tags" :key="tag._id">{{ tag.name }}<span v-if="index != video.tags.length - 1">, </span></span>
        </div>
        <button class="control" v-on:click.stop="del">
            <img src="@/assets/trash_icon.png">
        </button>
        <!-- <button class="control" v-on:click.stop="edit"> -->
        <button class="control" v-on:click.stop="$router.push({name:'edit', params:{id: video._id}})">
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
                // this.$emit('setID', '');
                // alert(this.video._id);
                this.$emit('setID', this.video._id);
            },
            del: function(event) {
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
    .control {
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
    .control img {
        width:100%;
        height:100%;
        filter: drop-shadow(0px 0px 5px gray);
    }
</style>
