<template>
    <article class="w-64 pb-6 border border-gray-primary rounded-xl">
    <ImageOnly 
     :src="bannerVacancy"
     alt="Image vacancy"
     :width="231"
     :heigth="82"
     class="w-full rounded-tl-lg rounded-tr-lg"
    />
    <div class="bg-gray-fourth flex justify-between items-center px-2 py-1">
        <span class="text-gray-secondary">Experticia</span>
        <DynamicIcon 
        iconName="IconStarsVacancy"
        />
        <DynamicIcon 
        iconName="IconShareAlt"
        />
    </div>
    <div class="m-2.5 pb-2.5 flex flex-col gap-y-4 border-b border-gray-primary">
        <header>
            <h3 class="text-blue-primary text-base uppercase">{{ nameVacancy }}</h3>
            <span class='bg-white-secondary text-blue-secondary text-sm px-1 rounded-b-full rounded-t-full'>Creada por organización: Nombre</span>
        </header>
        <p class="text-gray-secondary">{{ description }}</p>
        <div class="flex justify-between px-5">
            <HistoryVacancy 
                name="Vistas"
                :number="watch"
            />
            <HistoryVacancy 
                name="Comentarios"
                :number="comments"
            />
            <HistoryVacancy 
                name="Pitches"
                :number="pitches"
            />
        </div>
        
    </div>
    <ButtonPrimary 
        nameButton="Aplicar a vacante"
        class="px-4 py-1 text-xs font-semibold ml-2"
    />
    </article>
</template>
<script>
import ImageOnly from './ImageOnly.vue'
import bannerVacancy from '../assets/bannerVacancy.png'
import DynamicIcon from './DynamicIcon.vue'
import HistoryVacancy from './HistoryVacancy.vue'
import ButtonPrimary from './ButtonPrimary.vue'
export default {
    data(){

        return {bannerVacancy}
    },
    props: {
    nameVacancy: String,
    description: String,
    watch: Number,
    comments: Number,
    pitches: Number,
  },
    components:{
    ImageOnly,
    DynamicIcon,
    HistoryVacancy,
    ButtonPrimary,
},
}
</script>