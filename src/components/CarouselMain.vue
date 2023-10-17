<template>
    <div class="carousel">
        <slot></slot>
        <button @click="next" class="next">Next</button>
        <button @click="prev" class="prev">Prev</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {
        next(){
            this.$emit('next')
        },
        prev(){
            this.$emit('prev')
        }
    }
}
</script>
<style scoped>
.carousel{
    position: relative;
    width: 800px;
    height: 350px;
    display: flex;
    overflow: hidden;

}
button{
    position: absolute;
    height: 40px;
    width: 50px;
    top: calc(50% - 40px);
    background-color: black;
    color: aliceblue;
}
.next{
    right: 0;
}
.prev{
    left: 0;
}
</style>