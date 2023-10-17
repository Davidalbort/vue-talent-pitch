<script setup>
import DynamicIcon from './DynamicIcon.vue';

  defineProps ({
      description: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      states: {
        type: String,
        required: true,
      },
      jobMoreSeeking: {
        type: String,
        required: true,
      },
  });
  </script>
<template>
    <section class="flex flex-col gap-y-4 border border-gray-primary rounded-xl p-4">
      <header class="flex gap-x-2">
        <DynamicIcon iconName="IconUser"/>
        <h2 class="font-semibold text-blue-primary text-lg">Resumen de la empresa</h2>
      </header>
      <div>
        <h3 class="text-xs text-gray-third font-semibold">Descripción</h3>
        <p class="text-xs text-gray-secondary">{{ description }}</p>
      </div>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-y-4 gap-x-4 xl:gap-x-20">
        <div>
          <h3 class="text-xs text-gray-third font-semibold">Correo electrónico</h3>
          <p class="text-xs text-gray-secondary">{{ email }}</p>
        </div>
        <div>
          <h3 class="text-xs text-gray-third font-semibold">Número de contacto</h3>
          <p class="text-xs text-gray-secondary">{{ phone }}</p>
        </div>
        <div>
          <h3 class="text-xs text-gray-third font-semibold">Estados deseados buscados</h3>
          <p class="text-xs text-gray-secondary">{{ states }}</p>
        </div>
        <div>
          <h3 class="text-xs text-gray-third font-semibold">Rol más buscado</h3>
          <p class="text-xs text-gray-secondary">{{ jobMoreSeeking }}</p>
        </div>
      </div>
    </section>
  </template>
  
  