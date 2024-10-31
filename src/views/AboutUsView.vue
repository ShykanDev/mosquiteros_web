<template>
    <div class="">
      <MainLayout>
        <template #main>
  <div class="p-6 overflow-hidden bg-white md:p-12 font-poppins">
    <header class="mb-10 text-center animate-fade-left">
      <h1 class="text-3xl font-medium font-poppins">Quiénes Somos</h1>
      <p class="text-lg text-gray-600">Conozca nuestra esencia y misión en el mundo de los productos ayurvédicos.</p>
    </header>

    <section>
      <div class="mb-8 animate-fade-right">
        <div class="flex items-center gap-2">
          <h2 data-aos="flip-up" class="text-2xl font-semibold">Sobre nuestra marca</h2>
          <v-icon name="fa-building" class="text-amber-950" scale="1.5"/>
        </div>
        <p class="text-gray-700">Somos una empresa mexicana dedicada al desarrollo, producción, importación y exportación de una variedad de productos. Nuestros productos son 100% naturales y siguen los métodos tradicionales de la India, garantizando pureza y calidad.</p>
      </div>

      <div class="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 animate-fade-up animate-delay-200">
        <div>
          <div  class="flex items-center gap-2 ">
            <h3 class="text-xl font-semibold">Misión</h3>
            <v-icon name="md-personpincircle-round" class="text-teal-900" scale="1.5"/>
          </div>
          <p class="text-gray-700">Nuestra misión es satisfacer las necesidades de nuestros clientes al ofrecer productos de alta calidad que fomenten la confianza y el bienestar.</p>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h3 class="text-xl font-semibold">Visión</h3>
            <v-icon name="ri-mental-health-fill" class="text-rose-800" scale="1.5"/>
          </div>
          <p class="text-gray-700">Buscamos ser la primera opción en bienestar y salud, integrando lo mejor de diversas culturas y tradiciones milenarias a través de nuestros productos ayurvédicos.</p>
        </div>
      </div>

      <div class="mb-8 animate-fade-right">
        <h2 data-aos="flip-up" class="text-2xl font-semibold">Calidad de nuestros productos</h2>
        <ul class="pl-5 text-gray-700 list-disc">
          <li>
            <strong>100%</strong> Naturales
            <v-icon name="md-eco-round" class="text-green-600" scale="1.5"/>
          </li>
          <li><strong>100%</strong> Vegetarianos
            <v-icon name="ri-plant-fill" class="text-green-700" scale="1.5"/>

          </li>
          <li><strong>100%</strong> Libre de químicos y conservantes
            <v-icon name="gi-poison-bottle" class="text-orange-600" scale="1.5"/>

          </li>
        </ul>
      </div>

      <div class="mb-8 animate-fade-right">
        <h2 data-aos="flip-up" class="text-2xl font-semibold">Nuestra Historia</h2>
        <v-icon name="gi-plant-roots" class="text-green-600" scale="1.5"/>
        <v-icon name="gi-medicine-pills" class="text-emerald-700" scale="1.5"/>
        <v-icon name="gi-indian-palace" class="text-yellow-600" scale="1.5"/>
        <p class="text-gray-700">Prasadam nace como una marca mexicana para crear y distribuir productos ayurvédicos de la India, promoviendo el arte de la medicina tradicional a nivel internacional.</p>
      </div>

      <div class="mb-8 animate-fade-right">
        <h2 data-aos="flip-up" class="text-2xl font-semibold">¿Qué ofrecemos?</h2>
         <v-icon name="fa-truck-loading" class="text-slate-600" scale="1.5"/> 
        <p class="text-gray-700">Ofrecemos una amplia gama de productos ayurvédicos, asegurando la calidad y la eficiencia en cada presentación. Todos nuestros productos cuentan con certificados que respaldan su calidad y origen.</p>
      </div>

      <div class="mb-8 animate-fade-right">
        <h2 data-aos="flip-up" class="text-2xl font-semibold">Contacto Rápido</h2>
        <v-icon name="ri-customer-service-2-fill" class="text-rose-400" scale="1.5"/>
        <p class="text-gray-700">¿Tienes preguntas? Contáctanos a través de nuestros diferentes canales de comunicación: redes sociales, mensajes o números de contacto. ¡Estamos aquí para ayudarte!</p>
      </div>

      <div class="mb-8 animate-fade-right">
        <h2 data-aos="flip-up" class="text-2xl font-semibold">Compras Seguras</h2>
        <v-icon name="bi-shield-lock-fill" class="text-[#1CA085]" scale="1.5"/>
        <p class="text-gray-700">Si deseas adquirir un producto, no dudes en ponerte en contacto. Estamos disponibles para ofrecerte la mejor forma de compra.</p>
      </div>

      <div class="mb-8 animate-fade-right">
        <h2 data-aos="flip-up" class="text-2xl font-semibold">Productos Exportados</h2>
        <v-icon name="gi-earth-africa-europe" class="text-cyan-800" scale="1.5"/>
        <p class="text-gray-700">Todo nuestro catálogo proviene de la región que dio origen al Ayurveda, asegurando autenticidad en la elaboración y empaquetado.</p>
      </div>

      <div class="mb-8 animate-fade-right">
        <h2 data-aos="flip-up" class="text-2xl font-semibold">Medicinas Auxiliares</h2>
        <v-icon name="io-medkit" class="text-rose-600" scale="1.5"/>
        <p class="text-gray-700">Ofrecemos productos en forma de tabletas para aliviar diversos malestares y enfermedades, facilitando el acceso a la medicina ayurvédica.</p>
      </div>

      <div class="mb-8 animate-fade-right">
        <h2 data-aos="flip-up" class="text-2xl font-semibold">Variedad de Productos</h2>
        <v-icon name="fa-boxes" class="text-[#755c3d]" scale="1.5"/>
        <p class="text-gray-700">Contamos con una extensa lista de productos ayurvédicos, cada uno diseñado para ofrecer beneficios específicos y múltiples usos.</p>
      </div>

      <div class="text-center animate-fade-right">
        <h2 data-aos="flip-up" class="text-2xl font-semibold">Más de</h2>
        <div class="flex flex-col justify-center space-x-8 md:flex-row">
          <div data-aos="flip-up" class="text-center">
            <span class="text-4xl font-bold">50</span>
            <p>Años de experiencia</p>
          </div>
          <div data-aos="flip-up" class="text-center">
            <span class="text-4xl font-bold">1000</span>
            <p>Artículos vendidos</p>
          </div>
          <div data-aos="flip-up" class="text-center">
            <span class="text-4xl font-bold">100%</span>
            <p>Naturales y Vegetarianos</p>
          </div>
          <div data-aos="flip-up" class="text-center">
            <span class="text-4xl font-bold">100%</span>
            <p>Calidad Ayurvédica</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

      </MainLayout>

    </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<style scoped>

</style>