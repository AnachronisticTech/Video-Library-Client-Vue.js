<template>
    <div class="footer">
        <div class="left">
            <div class="hex-box">
                <input type="text" placeholder="https://www.youtube.com/watch" v-bind:style="{width: width}" v-model="link" v-on:keyup.enter="getVideo">
                <div class="hexagon"></div>
            </div>
            <button class="add" v-on:click="toggleWidth">
                <img src="@/assets/add_icon.png" />
            </button>
        </div>
        <div class="right">{{ link }}</div>
    </div>
</template>

<script>
    import db from '@/db.js'
    export default {
        data() {
            return {
                width:'0px',
                link:''
            }
        },
        methods: {
            toggleWidth: function(event) {
                if (this.width == '0px') {
                    this.width = '50%';
                } else {
                    this.width = '0px';
                }
            },
            getVideo: function(event) {
                // alert(this.link);
                if (this.link != '') {
                    db.create_video(this.link)
                }
            }
        }
    }
</script>

<style scoped>
    .footer {
        width:100%;
        height:120px;
        position:absolute;
        bottom:0;
        text-align:left;
        overflow-y:hidden;
    }
    .add {
        height:120px;
        width:120px;
        padding:0;
        margin-left:10px;
        border:0;
        background:rgba(0,0,0,0);
        outline:none;
    }
    .add img {
        width:100%;
        height:100%;
        filter: drop-shadow(0px 0px 10px gray);
        pointer-events:none;
    }
    .hex-box {
        position:absolute;
        left:100px;
        bottom:00px;
        filter: drop-shadow(0px 0px 10px gray);
        width:calc(100% - 120px);
    }
    .hex-box input {
        height:60px;
        margin-top:30px;
        margin-bottom:30px;
        display:block;
        border:0;
        font-size:20px;
        padding-left:40px;
        padding-right:20px;
        transition:width 0.5s ease;
        float:left;
        outline:none;
    }
    .hexagon {
        position: relative;
        width: 62px; 
        height: 35.80px;
        background-color: transparent;
        margin: 17.90px 0;
        transform:rotate(90deg);
        float:left;
    }
    .hexagon:before {
        content: "";
        position: absolute;
        width: 0;
        left:25px;
        top:29px;
        border-bottom: 20px solid white;
        border-left: 31px solid transparent;
        border-right: 31px solid transparent;
    }
    .right {
        position:absolute;
        top:0;
        right:0;
    }
</style>
