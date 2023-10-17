<template>
    <div class="w-2 flex flex-col items-center">
            <div class=" text-xs bg-button-primary px-4 py-2 rounded-b-full rounded-t-full text-white-primary">{{ number }}</div>
            <span class="text-gray-secondary font-medium text-xs">{{name}}</span>
        </div>
</template>

<script>
export default {
    props:['number','name']
}
</script>