<template>
    <div class="cruel">
        Cruel
        <span>{{ who }}</span>
    </div>
</template>

<script>
    module.exports = {
        data () {
            return {
                who: 'world'
            }
        },
        mounted () {
            setTimeout(() => {
                console.log('Use ES6 too');
            }, 1000);
        }
    }
</script>

<style scoped>
    .cruel {
        color: green;
    }
</style>
