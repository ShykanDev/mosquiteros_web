<template>
  <div class="flex flex-col flex-grow w-full min-h-screen overflow-hidden scroll-smooth">
    <header data-aos="fade-down-left"
      class="fixed top-0 left-0 right-0 z-50 flex flex-col items-center justify-between w-full p-4 bg-white shadow-md rounded-bl-md rounded-br-md scroll-smooth min-h-14 sm:flex-row text-slate-800 ">
      <h1 class="mb-2 text-2xl font-semibold font-poppins sm:mb-0 animate-fade-down">Mosquiteros</h1>

      <nav class="flex justify-center flex-1 space-x-2 sm:space-x-4 font-poppins animate-fade-up">
        <a href="#inicio" class="text-lg hover:text-blue-300">Inicio</a>
        <a href="#beneficios" class="text-lg hover:text-blue-300">Beneficios</a>
        <a href="https://listado.mercadolibre.com.mx/_CustId_576364310?item_id=MLM3418418980&category_id=MLM429685&seller_id=576364310&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic" target="_blank" class="text-lg hover:text-blue-300">Tienda</a>
      </nav>

      <button class="absolute p-2 rounded-md hover:bg-blue-700 top-4 right-4">
        <!-- Icono o texto para el botón aquí -->
      </button>
    </header>
    <main class="mt-14">
      <slot name="main">

      </slot>
    </main>
  </div>
  <footer class="py-6 text-center text-gray-800 bg-slate-200">
    <p class="text-xs font-light tracking-wide font-poppins">mosquiteros.com 2024 &copy; Todos los derechos
      reservados</p>
    <p class="text-base font-light tracking-wide font-allura">Diseño: PACA</p>
  </footer>


</template>

<script lang="ts" setup>
import { onMounted } from "vue";
// import AOS from "aos";
import 'aos/dist/aos.css'
import AOS from 'aos'

onMounted(() => {
  AOS.init();
})
</script>

<style scoped></style>