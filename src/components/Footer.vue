<template>
    <div class="footer">
        <div class="left">
            <button class="add" v-on:click="toggleWidth">
                <img src="@/assets/add_icon.png" />
            </button>
            <div class="hex-box">
                <input type="text" placeholder="https://youtube.com/watch" v-bind:style="{width: width}"  >
                <div class="hexagon"></div>
            </div>
        </div>
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
                    this.width = '600px';
                } else {
                    this.width = '0px';
                }
            },
            // getVideo: function(event) {
            //     if (this.link != '') {
            //         db.post('/library/video/create', this.link)
            //     }
            // }
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
    }
    .hex-box {
        position:absolute;
        left:100px;
        bottom:00px;
        filter: drop-shadow(0px 0px 10px gray);
        z-index:-1;
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
    }
    .hexagon {
        position: relative;
        width: 62px; 
        height: 35.80px;
        background-color: transparent;
        margin: 17.90px 0;
        transform:rotate(90deg);
        float:left;
        z-index:-1;
    }
    .hexagon:before {
        content: "";
        position: absolute;
        width: 0;
        left:25px;
        top:31px;
        border-bottom: 17.90px solid white;
        border-left: 31px solid transparent;
        border-right: 31px solid transparent;
    }
</style>
