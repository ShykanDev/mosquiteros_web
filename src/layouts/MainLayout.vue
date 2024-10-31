<template>
  <div class="flex flex-col flex-grow w-full min-h-screen overflow-hidden scroll-smooth">
    <header data-aos="fade-down-left"
      class="fixed top-0 left-0 right-0 z-50 flex flex-col items-center justify-between w-full p-2 bg-white shadow-md rounded-bl-md rounded-br-md scroll-smooth min-h-9 sm:flex-row text-slate-800 ">
      <!-- Header and ham menu -->
      <div class="flex items-center justify-between w-full">
        <h1 class="mb-2 text-2xl font-semibold font-poppins sm:mb-0 animate-fade-down ">Mosquiteros</h1>
        <div class="items-center hidden gap-2 md:flex lg:flex">
            <v-icon name="md-locationon-round" scale="1.5" class="transition-colors text-sky-500 hover:text-gray-500" />
            <a href="https://www.google.com.mx/maps/place/Gutenberg+128,+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+M%C3%A9xico,+CDMX/@19.4323958,-99.1783169,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1f8b2df5f9bbd:0x81205745d02f7168!8m2!3d19.4323958!4d-99.1761282"
              class="text-sm font-medium transition-colors text-cyan-800 hover:text-cyan-700" target="_blank" rel="noopener noreferrer">
              Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
            </a>
          </div>
          <div class="items-center justify-center hidden gap-2 px-4 md:flex lg:flex">
            <v-icon name="bi-telephone-outbound-fill" scale="1.5"
              class="transition-colors text-sky-600 hover:text-gray-500" />
            <a href="tel:+525563950178" class="text-sm font-medium transition-colors text-cyan-800 hover:text-cyan-700">+52 55 6395 0178</a>
            <a href="tel:+525563950179" class="text-sm font-medium transition-colors text-cyan-800 hover:text-cyan-700">+52 55 6395 0179</a>
          </div>
        <button @click="toggleMenu" :class="{ 'is-active': menuOpen, '': !menuOpen }"
          class="hamburger hamburger--collapse" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </header>
    <main class="mt-14">
      <!-- nav extended -->
      <div
        class="fixed top-0 bottom-0 right-0 left-[20%] md:left-[60%] z-40 flex flex-col items-center pt-24 text-center text-black transition-transform duration-500 transform bg-white shadow-xl font-poppins "
        :class="{ 'translate-x-0': menuOpen, 'translate-x-full': !menuOpen }">
        <!-- Close Button -->
        <button @click="menuOpen = false"
          class="absolute text-black transition-colors top-4 left-4 hover:text-gray-500">
          <v-icon name="bi-x-circle" scale="2.0" />
        </button>

        <!-- Contact Section -->
        <div class="mb-8 space-y-3 md:hidden lg:hidden">
          <h3 class="text-2xl font-semibold">Contáctanos</h3>
          <div class="flex items-center gap-2">
            <v-icon name="md-locationon-round" scale="1.5" class="transition-colors text-sky-500 hover:text-gray-500" />
            <a href="https://www.google.com.mx/maps/place/Gutenberg+128,+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+M%C3%A9xico,+CDMX/@19.4323958,-99.1783169,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1f8b2df5f9bbd:0x81205745d02f7168!8m2!3d19.4323958!4d-99.1761282"
              class="text-sm transition-colors hover:text-cyan-700" target="_blank" rel="noopener noreferrer">
              Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
            </a>
          </div>
          <div class="flex items-center justify-center gap-2 px-4">
            <v-icon name="bi-telephone-outbound-fill" scale="1.5"
              class="transition-colors text-sky-600 hover:text-gray-500" />
            <a href="tel:+525563950178" class="text-sm transition-colors hover:text-cyan-700">+52 55 6395 0178</a>
            <a href="tel:+525563950179" class="text-sm transition-colors hover:text-cyan-700">+52 55 6395 0179</a>
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="space-y-4">
          <RouterLink :class="{ 'bg-cyan-700 text-white border-none': route.name === 'home', 'hover:bg-slate-300' : route.name !== 'home'  }"
            class="flex items-center justify-center w-48 py-2 text-lg font-medium transition-colors shadow-sm rounded-xl text-slate-800 "
            :to="{ name: 'home' }">
            Inicio
          </RouterLink>
          <RouterLink :class="{ 'bg-cyan-700 text-white border-none': route.name === 'aboutUs', 'hover:bg-slate-300' : route.name !== 'aboutUs'  }"
            class="flex items-center justify-center w-48 py-2 text-lg font-medium transition-colors shadow-sm rounded-xl text-slate-800 "
            :to="{ name: 'aboutUs' }">
            Nosotros
          </RouterLink>
          <RouterLink :class="{ 'bg-cyan-700 text-white border-none': route.name === 'beneficts', 'hover:bg-slate-300' : route.name !== 'beneficts'  }"
            class="flex items-center justify-center w-48 py-2 text-lg font-medium transition-colors shadow-sm rounded-xl text-slate-800 "
            :to="{ name: 'beneficts' }">
            Beneficios
          </RouterLink>
          <RouterLink :class="{ 'bg-cyan-700 text-white border-none': route.name === 'images', 'hover:bg-slate-300' : route.name !== 'images'  }"
            class="flex items-center justify-center w-48 py-2 text-lg font-medium transition-colors shadow-sm rounded-xl text-slate-800 "
            :to="{ name: 'images' }">
            Imágenes
          </RouterLink>
        </nav>

        <!-- Shop Link -->
        <div class="flex flex-col items-center mt-8">
          <a href="https://listado.mercadolibre.com.mx/_CustId_576364310?item_id=MLM3418418980&category_id=MLM429685&seller_id=576364310&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic"
            target="_blank"
            class="flex items-center gap-2 px-3 text-lg font-medium text-white transition-colors bg-yellow-400 cursor-pointer rounded-3xl ">
            <p class="font-poppins">Visita nuestra tienda</p>
            <img class="w-6 transition-transform duration-300 hover:scale-125" src="@/assets/img/MELI.svg"
              alt="Mercado Libre">
          </a>
        </div>
      </div>

      <slot name="main">

      </slot>
  

         <!-- Contact Section -->
         <div class="flex flex-col items-center justify-center w-full mb-8 space-y-3 px-7">
          <h3 class="text-2xl font-semibold text-sky-800">Contáctanos</h3>
          <div class="flex items-center gap-2">
            <v-icon name="md-locationon-round" scale="1.5" class="transition-colors text-sky-500 hover:text-gray-500" />
            <a href="https://www.google.com.mx/maps/place/Gutenberg+128,+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+M%C3%A9xico,+CDMX/@19.4323958,-99.1783169,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1f8b2df5f9bbd:0x81205745d02f7168!8m2!3d19.4323958!4d-99.1761282"
              class="text-sm transition-colors hover:text-cyan-700 font-poppins" target="_blank" rel="noopener noreferrer">
              Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
            </a>
          </div>
          <div class="flex items-center justify-center gap-2 px-4 font-poppins" >
            <v-icon name="fa-phone-alt" scale="1.5"
              class="transition-colors text-sky-600 hover:text-gray-500" animation="ring"  />
            <a href="tel:+525563950178" class="text-sm transition-colors hover:text-cyan-700">+52 55 6395 0178</a>
            <a href="tel:+525563950179" class="text-sm transition-colors hover:text-cyan-700">+52 55 6395 0179</a>
          </div>
          <div class="flex items-center justify-center gap-2 px-4 font-poppins" >
            <v-icon name="hi-mail" scale="1.5"
              class="transition-colors text-sky-600 hover:text-gray-500"  
               />
            <a href="mailto:informes@prasadam.mx" class="text-sm transition-colors hover:text-cyan-700">informes@prasadam.mx</a>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5395970522604!2d-99.1760704!3d19.4322888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b32758939b%3A0xf34fbd07bc47d6dd!2sGutenberg%20128%2C%20Anzures%2C%20Miguel%20Hidalgo%2C%2011590%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1730328617197!5m2!1sen!2smx"  style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-[100dvw] h-[35dvh]"</iframe>
        </div>
      <div>
        <article class="flex flex-col items-center mt-10">
          <h3 class="text-2xl font-poppins text-slate-700">Siguenos en nuestras redes</h3>
          <div class="flex justify-center gap-4 mt-6">
            <a href="https://www.facebook.com/AyurevedaPrasadam?modal=admin_todo_tour" target="_blank"
              rel="noopener noreferrer">
              <v-icon name="md-facebook" scale="1.5"
                class="text-sky-800 animate-bounce animate-delay-300 hover:text-sky-600" />
            </a>
            <a href="https://twitter.com/_Prasadam_" target="_blank" rel="noopener noreferrer">
              <v-icon name="co-twitter" scale="1.5"
                class="text-cyan-600 animate-bounce animate-delay-150 hover:text-sky-400" />
            </a>
            <a href="https://www.instagram.com/_prasadam_/?hl=es-la" target="_blank" rel="noopener noreferrer">
              <v-icon name="co-instagram" scale="1.5"
                class="text-[#e1306c] animate-bounce animate-delay-500 hover:text-[#fa7ba5]" />
            </a>
          </div>

        </article>
      </div>

    </main>
  </div>
  <footer class="py-6 text-center text-gray-800 bg-slate-200">
    <p class="text-sm font-light tracking-wide font-poppins">mosquiteros.com 2024 &copy; Todos los derechos
      reservados</p>
    <p class="text-xs font-light tracking-wide font-poppins">Diseño: PACA</p>
  </footer>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
// import AOS from "aos";
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useRoute } from 'vue-router';
let menuOpen = ref(false);
const toggleMenu = () => menuOpen.value = !menuOpen.value;
onMounted(() => {
  AOS.init();
})

const route = useRoute();

</script>

<style scoped></style>