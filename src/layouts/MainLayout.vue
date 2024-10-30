<template>
  <div class="flex flex-col flex-grow w-full min-h-screen overflow-hidden scroll-smooth">
    <header data-aos="fade-down-left"
      class="fixed top-0 left-0 right-0 z-50 flex flex-col items-center justify-between w-full p-4 bg-white shadow-md rounded-bl-md rounded-br-md scroll-smooth min-h-14 sm:flex-row text-slate-800 ">
      <h1 class="mb-2 text-2xl font-semibold font-poppins sm:mb-0 animate-fade-down">Mosquiteros</h1>

      <nav class="flex flex-1 gap-[2px] overflow-hidden font-poppins animate-fade-up sm:justify-evenly items-center">
        <RouterLink :class="{'bg-cyan-700 text-white': route.name === 'home'}"  class="px-2 text-lg hover:text-blue-300 rounded-2xl" :to="{name: 'home'}">Inicio</RouterLink>
        <RouterLink :class="{'bg-cyan-700 text-white' : route.name === 'beneficts'}" class="px-2 text-lg hover:text-blue-300 rounded-2xl" :to="{name: 'beneficts'}">Beneficios</RouterLink>
        <RouterLink :class="{'bg-cyan-700 text-white': route.name === 'images'}" class="px-2 text-lg hover:text-blue-300 rounded-2xl" :to="{name: 'images'}">Imágenes</RouterLink>
        <a href="https://listado.mercadolibre.com.mx/_CustId_576364310?item_id=MLM3418418980&category_id=MLM429685&seller_id=576364310&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic" target="_blank" >
          <div class="flex items-center animate-jump animate-delay-500"><img class="w-8 transition-transform duration-300 ease-out hover:scale-125" src="@/assets/img/MELI.svg" alt=""></div>
        </a>
      </nav>

      <button class="absolute p-2 rounded-md hover:bg-blue-700 top-4 right-4">
        <!-- Icono o texto para el botón aquí -->
      </button>
    </header>
    <main class="mt-14">
      <slot name="main">

      </slot>
      <div>
        <article class="flex flex-col items-center mt-10">
          <h3 class="text-2xl font-poppins text-slate-700">Siguenos en nuestras redes</h3>
          <div class="flex justify-center gap-4 mt-6">
            <a href="https://www.facebook.com/AyurevedaPrasadam?modal=admin_todo_tour" target="_blank" rel="noopener noreferrer">
              <v-icon name="md-facebook" scale="1.5" class="text-sky-800 animate-bounce animate-delay-300 hover:text-sky-600" />
            </a>
            <a href="https://twitter.com/_Prasadam_" target="_blank" rel="noopener noreferrer">
              <v-icon name="co-twitter" scale="1.5" class="text-cyan-600 animate-bounce animate-delay-150 hover:text-sky-400" />
            </a>
            <a href="https://www.instagram.com/_prasadam_/?hl=es-la" target="_blank" rel="noopener noreferrer">
              <v-icon name="co-instagram" scale="1.5" class="text-[#e1306c] animate-bounce animate-delay-500 hover:text-[#fa7ba5]" />
            </a>
          </div> 
          
        </article>
      </div>
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
import { useRoute } from 'vue-router';
onMounted(() => {
  AOS.init();
})

const route = useRoute();

</script>

<style scoped></style>