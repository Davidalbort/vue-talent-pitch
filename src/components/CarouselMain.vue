<template>
   
        <div class="relative w-full overflow-auto sm:overflow-hidden flex gap-4">
            <slot></slot>
            
        </div>


</template>
<script>
export default {
    data(){
        return{
            
        }
    },
   
}
</script>
<style scoped>
 .left-enter-active {
    animation: leftInAnimation 0.4s ease-in-out;
  }
  .lef-leave-active {
    animation: lefOutAnimation 0.4s ease-in-out ;
  }
  @keyframes leftInAnimation {
    from { transform: translateX(100%);}
    to { transform: translateX(0%);}
  }
  @keyframes leftOutAnimation {
    from { transform: translateX(0%);}
    to { transform: translateX(-100%);}
  }
  .right-enter-active {
    animation: rightInAnimation 0.4s ease-in-out;
  }
  .right-leave-active {
    animation: rightOutAnimation 0.4s ease-in-out ;
  }
  @keyframes rightInAnimation {
    from { transform: translateX(-100%);}
    to { transform: translateX(0%);}
  }
  @keyframes rightOutAnimation {
    from { transform: translateX(0%);}
    to { transform: translateX(+100%);}
  }

</style>