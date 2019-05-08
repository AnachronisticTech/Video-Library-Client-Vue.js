<template>
    <div class="footer">
        <div class="right">
            <input type="text" placeholder="https://youtube.com/watch" v-bind:style="{width: width}">
            <button class="add" v-on:click="toggleWidth">
                <img src="@/assets/add_icon.png" />
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                width:'0px'
            }
        },
        methods: {
            toggleWidth: function(event) {
                if (this.width == '0px') {
                    this.width = '600px';
                } else {
                    this.width = '0px';
                }
            }
        }
    }
</script>

<style scoped>
    .footer {
        /* background:yellow; */
        width:100%;
        height:120px;
        position:absolute;
        bottom:0;
        overflow-y:hidden;
    }
    .right {
        position:absolute;
        right:20px;
        height:100%;
    }
    .right input {
        height:60px;
        margin-top:30px;
        margin-bottom:30px;
        display:block;
        position:absolute;
        right:60px;
        border:0;
        border-radius:5px;
        filter: drop-shadow(0px 0px 10px gray);
        font-size:20px;
        padding-left:20px;
        transition:width 0.5s ease;
    }
    .add {
        height:120px;
        width:120px;
        padding:0;
        margin:0;
        border:0;
        background:rgba(0,0,0,0);
        outline:none;
    }
    .add img {
        width:100%;
        height:100%;
        filter: drop-shadow(0px 0px 10px gray);
    }
</style>
