<template>
    <div class="about">
        <h1>Video Library</h1>
        <div class="body">
            <p>The <i>Video Library</i> project is a system built to manage and organise videos on a local network device. This client web interface is built in Vue.js and is used to interact with the corresponding back-end server which can be obtained <a href="https://github.com/AnachronisticTech/Video-Library-Server-Node.js">here</a>.</p>
            <p>The project is loosely inspired by the iTunes library application, and aims to accomplish the following goals: </p>
            <ul>
                <li>An easy way to add new videos to a single location from both local and remote locations</li>
                <li>Catalog videos by customisable tags which can be filtered and sorted via an intuitive interface</li>
                <li>View and edit the properties and details of stored videos without the need for external tools</li>
            </ul>
            <!--    <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/itunes/macos-mojave-ios12-macbook-iphone-x-itunes-store-hero.jpg">-->
        </div>

        <h2>Technical Details</h2>
        <div class="body">
            <p>This site is built using Vue.js. Depending on deployment details, it is either run on a Node.js server or is served via Electron as a desktop application. It receives JSON data from another server which is built in Node.js with the Express framework. This back-end server stores video files and connects to a Mongoose database for recording video details and properties.</p>
            <!-- <p>For this project, I chose to use some of the more modern technologies of today, such as NodeJS and Vue.JS in order to create a web-based application. I chose to create a web-based application as desktop applications tend to be unreliable and very platform specific. In addition, since I am already confident with web-based programming languages, such as JavaScript, HTML and CSS, it would be much quicker for me to create a web-based application as opposed to a desktop-based one.</p>
            <p>I also chose a web-based application due to the fact that modern solutions, such as VSCode, Atom and even GitHub Desktop are powered by electron. This usage of server-based web technologies which can be used in desktop applications makes it easier to <b>TODO: fill this section out</b></p> -->


        </div>
        <hr>
        <footer>
            Created by Daniel Marriner &copy; All Rights Reserved
        </footer>
    </div>
</template>

<style>
    .body {
        text-align: left;
        /*column-count: 2;*/
        margin-left: 10%;
        margin-right: 10%;
    }

    img {
        width: 100%;
    }
</style>
