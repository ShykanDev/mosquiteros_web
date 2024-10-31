<template>
  <div class="">
    <MainLayout>
      <template #main class="scroll-smooth">
        <section id="inicio" class="flex flex-col items-center scroll-smooth">
          <!-- title -->
          <div class="relative flex flex-col items-center w-full">
            <!-- <h1 class="px-2 text-2xl font-medium text-center font-poppins text-slate-800 sm:px-0" >¿Harto de los mosquitos al dormir?</h1> -->
            <!-- <div class="animate-fade-right absolute left-0 w-9 sm:left-[30%] md:left-[19%] delay-1000 lg:left-[29%]">
                <img class="absolute w-9 left-[31%]  animate-bounce animate-duration-[4s] delay-1000" src="../assets/img/mosquito_right.svg" alt="">
              </div>
              <div class="animate-fade-left absolute right-0 w-9 sm:right-[29%] md:right-[18%] lg:right-[29%]">
                <img class="absolute right-0 w-9 sm:right-[31%] animate-bounce delay-150 animate-duration-[3s]" src="../assets/img/mosquito.svg" alt="">
              </div> -->
            <div class="relative flex flex-col items-center justify-start">
              <div class="absolute w-full h-full bg-black animate-delay-[.4s] bg-opacity-25 animate-fade"></div>
              <div class="absolute flex flex-col items-center justify-center w-full h-full gap-6">
                <h1
                  class="px-2 text-5xl font-medium text-center text-white font-poppins sm:px-0 animate-fade-left animate-delay-[800ms]">
                  ¿Harto de</h1>
                <h1
                  class="px-2 text-5xl font-medium text-center text-white font-poppins sm:px-0 animate-fade-right animate-delay-[1.1s]">
                  los mosquitos</h1>
                <h1
                  class="px-2 text-5xl font-medium text-center text-white delay-700 font-poppins sm:px-0 animate-fade-left animate-delay-[1.3s]">
                  al intentar dormir?</h1>
              </div>
              <img class="lg:bg-cover lg:h-[105dvh] lg:w-dvw lg:hidden" src="../assets/img/MenMosquitoes.webp" alt="">
              <img class="lg:bg-cover lg:h-[105dvh] lg:w-dvw hidden lg:block" src="../assets/img/mosquitosCama.webp"
                alt="">
            </div>
          </div>
          <!-- info general -->
          <div class="flex flex-col items-center mt-4">
            <div class="flex items-center px-3">
              <img data-aos="fade-up-right" class="hidden px-3 lg:max-w-[50%] rounded-3xl lg:block "
                src="../assets/img/mosquitosMolestos.jpg" alt="">
              <p data-aos="fade-up-left"
                class="px-4 text-lg text-center font-poppins text-slate-800 sm:px-0 lg:text-xl">
                <strong>

                  ¡Sí, esos
                  mosquitos son realmente
                  molestos!
                </strong>
                Cuando finalmente logras encontrar un momento de tranquilidad para descansar, de repente, ese
                zumbido se convierte en el sonido de tus pesadillas.
              </p>
            </div>
            <!-- <img data-aos="fade-up-right" class="hidden lg:max-w-[50%] px-3 rounded-3xl lg:block" src="../assets/img/mosquito003.jpg" -->
            <!-- alt=""> -->
            <img data-aos="fade-up-right" class="p-3 rounded-3xl lg:hidden" src="../assets/img/MenTryingToSleep.webp"
              alt="">
            <p class="px-2 text-lg text-center font-poppins text-slate-800 sm:px-0 mt-7">Quizás ya has intentado todo:
              desde
              espirales que dejan olor, hasta insecticidas que solo duran unas horas. Pero nada parece funcionar a largo
              plazo. No importa dónde estés, esos mosquitos siempre encuentran la forma de arruinar el descanso que
              tanto necesitas.</p>
            <h3 data-aos="zoom-out-right" class="mt-3 text-2xl font-medium text-center font-poppins text-slate-800">
              ...pero ¿Si hubiera una forma definitiva de protegerte sin complicaciones?</h3>
            <p class="px-2 mt-5 text-lg text-center font-poppins text-slate-800 sm:px-0">
              Te presentamos nuestro inovador mosquitero para cama, diseñado para adaptarse perfectamente a tu cama y
              mantenerte protegido. Con un mosquitero integrado, disfrutarás de noches sin interrupciones, sin
              preocuparte por esos molestos zumbidos. Ideal para el hogar o de viaje, ¡es la solución que has estado
              esperando!
            </p>
            <div>
              <img src="" alt="">
            </div>
            <ul class="px-6 mt-4 text-lg font-medium text-left font-poppins text-slate-800 sm:px-0">
              <li data-aos="fade-right">✔ Adaptable a cualquier cama</li>
              <li data-aos="fade-right">✔ Mosquitero integrado para máxima protección</li>
              <li data-aos="fade-right">✔ Diseño plegable y portátil</li>
              <li data-aos="fade-right">✔ Perfecta para viajes o uso diario</li>
              <li data-aos="fade-right">✔ Garantiza noches de descanso reparador</li>
            </ul>
          </div>
          <!-- slider products main -->
          <div id="beneficios" class="mt-16">
            <carousel v-bind:="config" :items-to-show="1.5">
              <slide v-for="(slide, index) in images" :key="index">
                <img class="px-2 mx-3 rounded-3xl w-[600px] lg:w-[65%] " :src="slide.src" alt="">
              </slide>
              <template #addons>
                <navigation />
                <pagination />
              </template>
            </carousel>
          </div>
          <!-- image required to show benefits -->
          <section class="flex flex-col items-center mt-10">
            <h2 class="mt-3 text-3xl text-center font-poppins">No te preocupes de desperar a tu pareja</h2>
            <p class="px-2 mt-3 text-lg text-center font-poppins text-slate-800 sm:px-0">
              Nuestros mosquiteros para adultos están diseñados pensando en tu comodidad. Con un ingenioso sistema de
              <strong>
                con doble abertura,
              </strong> podrás salir de la cama sin molestar a tu pareja. ¡Disfruta de una noche de sueño reparador y
              despierta
              sin preocupaciones! La funcionalidad se une al diseño para ofrecerte la mejor experiencia en cada rincón
              de tu
              hogar.
            </p>
            <img class="p-3 mt-5 rounded-3xl lg:max-w-[60%]" src="../assets/img/manGettingOut.webp" alt="">
          </section>
          <!-- baby product -->
          <section data-aos="fade-up-right" class="mt-5">
            <h2 class="mt-3 text-3xl text-center font-poppins">Todo bien, pero... ¿Y mis hijos?</h2>
            <div class="flex justify-center mt-3">
              <v-icon name="fa-baby" scale="1.5" class="text-orange-300" />
            </div>
            <p class="px-2 mt-3 text-lg text-center font-poppins text-slate-800 sm:px-0"><strong>¡No te
                preocupes!</strong>
              tenemos para ti
              nuestra cuna para bebé anti mosquitos. Diseñada para brindar la máxima seguridad y comodidad, esta cuna te
              asegura
              que tu pequeño esté protegido mientras duerme. Olvídate de las picaduras y disfruta de la tranquilidad
              sabiendo que
              tu hijo está en un ambiente seguro y libre de insectos.</p>
            <!-- baby products -->
            <div id="beneficts" class="mt-16">
              <carousel v-bind:="config" :items-to-show="1.5">
                <slide v-for="(slide, index) in imagesKid" :key="index">
                  <img class="px-2 mx-3 rounded-3xl w-[600px]" :src="slide.src" alt="">
                </slide>
                <template #addons>
                  <navigation />
                  <pagination />
                </template>
              </carousel>
              <h3 class="px-2 mt-5 text-2xl font-medium text-center font-poppins text-sky-800 sm:px-0">Obtendrás</h3>
              <ul class="px-6 mt-4 text-lg font-medium text-center font-poppins text-slate-800 sm:px-0">
                <li data-aos="fade-right">✔ Protección total para el bebé, libre de picaduras y mosquitos</li>
                <li data-aos="fade-right">✔ Diseño portátil y plegable, ideal para usar en casa o de viaje</li>
                <li data-aos="fade-right">✔ Colchón cómodo y soporte seguro, proporcionando un descanso óptimo</li>
                <li data-aos="fade-right">✔ Fácil de montar, sin herramientas adicionales</li>
                <li data-aos="fade-right">✔ Comodidad para tu pequeño, sin preocuparte por picaduras de mosquitos</li>
              </ul>
            </div>
          </section>
        </section>
        <!-- construction materials -->
        <section class="px-4 py-6 text-lg font-poppins text-slate-800">
          <h3 class="mb-4 text-2xl text-center font-poppins">Calidad y Comodidad en Cada Detalle</h3>
          <ul class="px-6 mt-4 list-disc">
            <li><strong>Materiales:</strong> Algodón suave, poliéster transpirable y malla de alta densidad de nylon
              para
              durabilidad y confort.</li>
            <li><strong>Dimensiones:</strong> Extendido: 100x60x50 cm | Empacado: 50x50 cm | Peso: 300-400 g.</li>
            <li><strong>Diseño Ergonómico:</strong> Estructura plegable y portátil, fácil de almacenar y transportar.
            </li>
            <li><strong>Visibilidad y Ventilación:</strong> Malla transpirable que permite una visualización completa
              del bebé.
            </li>
            <li><strong>Edad Recomendada:</strong> Bebés de 0 a 1 año.</li>
          </ul>

          <p class="mt-4"><strong>Colores Disponibles:</strong> Azul y Rosa</p>

          <h4 class="mt-6 text-xl font-medium text-center font-poppins text-slate-800">Beneficios Clave</h4>
          <ul class="px-6 mt-2 list-disc text-emerald-800">
            <li>Ambiente seguro y protegido de insectos para un mejor descanso.</li>
            <li>Portátil y ligero, ideal para el hogar y viajes.</li>
            <li>Fácil de usar y sin instalación.</li>
            <li>Garantía</li>
            <li>Facturación</li>
          </ul>

          <h2 class="my-6 text-3xl font-bold text-center text-gray-800 font-poppins">
  ¡Aprovecha Nuestras Ofertas Especiales!
</h2>

<h3 class="text-2xl font-semibold text-center text-sky-900 font-poppins">
  Mosquitero para Bebés:
</h3>

<div class="flex justify-center">
  <img class="w-full max-w-md p-3 shadow-lg rounded-3xl" src="@/assets/img/bothOnes.webp" alt="Mosquitero para Bebés">
</div>

<p class="text-lg font-bold text-center line-through text-rose-600 font-poppins">
  $135.00 MXN
</p>

<p class="text-xl font-bold text-center md:text-3xl text-emerald-500 font-poppins animate-pulse">
  ¡Precio Promocional: <span class="text-4xl">$99.00 MXN</span> por pieza!
</p>

<p class="px-4 mt-3 text-lg text-center font-poppins text-slate-800 sm:px-0">
  Aprovecha el descuento al comprar <strong class="font-bold">10 piezas</strong> directamente con nosotros. Además, ¡disfruta de
  <strong class="px-3 text-white bg-yellow-400 shadow-md rounded-2xl">flete gratis</strong> dentro de México en pedidos superiores a
  <strong>$2,000.00 MXN</strong>! No dejes pasar esta oportunidad de proteger a tus seres queridos con estilo y confort.
  <span class="font-bold text-sky-600">Haz tu pedido hoy</span> y transforma tu hogar.
</p>



        </section>

        <!-- section all products available -->
        <section class="mt-10">
          <h3 class="text-4xl font-medium text-center font-poppins text-slate-600">Conoce toda nuestra gran variedad de
            productos</h3>
          <carousel v-bind:="config" :items-to-show="1.5">
            <slide v-for="(slide, index) in allImages" :key="index">
              <img class="px-2 mx-3 rounded-3xl w-[600px]" :src="slide.src" alt="">
            </slide>
            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
        </section>
        <!-- ending section -->
        <section class="mt-10">
          <h3 class="text-4xl font-medium text-center font-poppins text-slate-700">En resumen...</h3>
          <p class="px-2 mt-3 text-lg text-center font-poppins text-slate-800 sm:px-0">
            Si deseas una solución práctica y confiable para protegerte de los mosquitos, nuestros productos ofrecen
            opciones
            ideales para cualquier necesidad. Desde un mosquitero para piso hasta uno especialmente diseñado para cama,
            cada uno
            ofrece protección según el entorno en el que lo necesites. A continuación, te contamos cuándo es más
            conveniente
            cada opción.
          </p>
          <!-- <h3 class="mt-6 text-3xl font-bold text-center text-orange-800 font-poppins">Mosquitero para Piso</h3>
<div class="flex justify-center my-2">
  <v-icon name="fa-street-view" scale="1.5" class="text-orange-800" />
</div>
<p class="p-4 mx-4 my-3 text-lg transition-transform transform shadow-lg font-poppins text-slate-800 bg-slate-50 rounded-2xl hover:scale-105">
  El mosquitero para piso es perfecto para espacios abiertos o habitaciones sin marcos de cama específicos. Con su diseño amplio y fácil de colocar, ofrece una barrera efectiva contra los insectos, sin importar el tamaño de la cama o si decides moverlo a otra zona. Ideal para quienes buscan flexibilidad y rapidez en su instalación.
</p>
<p class="p-4 mx-4 my-3 text-lg transition-transform transform shadow-lg font-poppins text-slate-800 bg-slate-50 rounded-2xl hover:scale-105">
  Este mosquitero es fácil de plegar y almacenar, ideal para viajeros o quienes necesitan una protección temporal. Su altura permite moverse cómodamente, proporcionando un espacio seguro para dormir sin interferir con el flujo de aire.
</p>

<h3 class="mt-6 text-3xl font-bold text-center text-cyan-800 font-poppins">Mosquitero para Cama</h3>
<div class="flex justify-center my-2">
  <v-icon name="gi-bed" scale="1.5" class="text-cyan-800" />
</div>
<p class="p-4 mx-4 my-3 text-lg transition-transform transform shadow-lg font-poppins text-slate-800 bg-slate-50 rounded-2xl hover:scale-105">
  Si buscas una opción que se integre perfectamente a la estructura de tu cama, el mosquitero para cama es ideal. Se ajusta fácilmente alrededor de la cama, proporcionando una barrera completa que se mantiene en su lugar durante toda la noche.
</p>
<p class="p-4 mx-4 my-3 text-lg transition-transform transform shadow-lg font-poppins text-slate-800 bg-slate-50 rounded-2xl hover:scale-105">
  Esta opción es perfecta para quienes buscan protección permanente o de uso frecuente en casa. Al estar fijado a la cama, se convierte en una solución estable y cómoda, ideal para garantizar un sueño profundo y sin interrupciones.
</p>

<h3 class="mt-6 text-3xl font-bold text-center text-emerald-700 font-poppins">Mosquitero para Cuna de Bebé</h3>
<div class="flex justify-center my-2">
  <v-icon name="co-baby" scale="1.5" class="text-emerald-800" />
</div>
<p class="p-4 mx-4 my-3 text-lg transition-transform transform shadow-lg font-poppins text-slate-800 bg-slate-50 rounded-2xl hover:scale-105">
  Protege a los más pequeños con nuestro mosquitero para cuna, diseñado para el descanso seguro del bebé. Cubre completamente la cuna, brindando una barrera efectiva contra los mosquitos, con materiales duraderos para asegurar que tu bebé duerma protegido toda la noche.
</p> -->

        </section>
        <!-- quality section -->
        <section id="test" class="mt-8 text-center">
          <div class="flex justify-center w-full">
            <img class="md:w-[50%] lg:w-[40%]" src="@/assets/img/iso9001.svg" alt="">
          </div>
          <p class="px-4 mt-4 text-lg font-poppins text-slate-800 sm:px-0">
            <strong>Nuestros productos cuentan con la certificación ISO 9001.</strong> Esta certificación es un estándar
            internacional que establece criterios para un sistema de gestión de calidad, asegurando que nuestros
            productos y
            servicios cumplen con las expectativas de los clientes, y que seguimos procesos eficientes y consistentes.
            Al tener
            la certificación ISO 9001, garantizamos que <strong>cada producto que ofrecemos ha pasado por un riguroso
              control de
              calidad,</strong> respaldando nuestra dedicación a la excelencia y la satisfacción del cliente.
            <br><br>
            Así también, contamos con la certificación ISO 9000, que proporciona los principios esenciales para
            gestionar la
            calidad en cada etapa de nuestros procesos, consolidando aún más nuestro compromiso con altos estándares.
          </p>

        </section>
        <!-- sales section -->
        <section class="text-center my-9">
          <h3 class="text-3xl font-poppins text-slate-800">¿Te convenciste?</h3>
          <p class="px-4 mt-4 text-lg font-poppins text-slate-800 sm:px-0">
            ¡Es momento de decirle adiós a las noches interrumpidas por zumbidos y picaduras! Si quieres disfrutar de un
            sueño
            reparador y proteger a tu familia, elige cualquiera de nuestros productos y descubre la tranquilidad de una
            noche
            sin mosquitos.
          </p>
          <p class="px-4 mt-4 text-lg font-poppins text-slate-800 sm:px-0">
            Búscanos en nuestra página de
            <a href="https://listado.mercadolibre.com.mx/_CustId_576364310?item_id=MLM3418418980&category_id=MLM429685&seller_id=576364310&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic"
              target="_blank">
              <span class="px-3 font-medium text-yellow-500 rounded-xl bg-orange-50">
                Mercado Libre
              </span>
            </a>
            , donde tus compras son seguras y rápidas.
          </p>
          <p class="px-4 mt-4 text-lg font-poppins text-slate-800 sm:px-0">
            Nos enorgullece tener la
            <strong class="text-emerald-700">
              calificación de vendedor más alta en Mercado Libre
            </strong>, lo que refleja nuestra pasión por ofrecer productos excepcionales y un servicio al cliente
            sobresaliente.
            Únete a nuestros clientes satisfechos y experimenta la diferencia de comprar con un vendedor confiable.
          </p>
          <div data-aos="zoom-in-up" class="flex justify-center w-full">
            <img src="@/assets/img/highRating.png" alt="">
          </div>
          <h3 class="mt-6 text-3xl font-bold text-center text-sky-900 font-poppins">¡Crea el Mosquitero de Tus Sueños!
          </h3>

          <p class="p-4 mx-4 my-3 text-lg transition-transform transform font-poppins text-slate-800 ">
            ¿Quieres algo único? Con nosotros, puedes <strong class="text-orange-600">personalizar tu
              mosquitero</strong> a tu
            gusto. Desde colores vibrantes hasta diseños exclusivos y marcas propias, tenemos la solución perfecta para
            ti.
            Además, <strong class="text-cyan-600">podemos importar directamente desde la fábrica</strong> según tus
            especificaciones, incluyendo medidas personalizadas, asegurando que cada detalle cumpla con tus
            expectativas. ¡Dile
            adiós a lo convencional y dale la bienvenida a un mosquitero que realmente refleje tu estilo y necesidades!
          </p>


          <p class="px-4 mt-4 text-lg font-poppins text-slate-800 sm:px-0">
            Da clic en el botón de abajo para visitar nuestra tienda. ¡Estaremos encantados de atenderte y ayudarte a
            dormir
            mejor!
          </p>
          <a class="my-8"
            href="https://listado.mercadolibre.com.mx/_CustId_576364310?item_id=MLM3418418980&category_id=MLM429685&seller_id=576364310&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic"
            target="_blank">
            <div id="store" class="flex justify-center w-full">
              <div
                class="px-6 flex justify-center gap-5 items-center self-center w-[60%] py-3 mt-6 font-bold  text-white transition duration-300 bg-[#3c82dd] rounded-full hover:bg-blue-600 cursor-pointer">
                <p class="font-poppins xl">Ir a la tienda</p>
                <v-icon name="fa-store" scale="1.5" class="text-white" />
              </div>
            </div>
          </a>
          <!-- social media -->

        </section>
        <h3 class="mt-6 text-2xl font-bold text-center text-sky-900 font-poppins">Te puede interesar...</h3>
        <section class="flex justify-center w-full my-6 space-x-4"> <!-- ads section -->

          <div
            class="container relative flex items-center justify-center w-1/2 overflow-hidden rounded-lg shadow-md min-h-32 bg-slate-100">
            <a href="https://pastaneem.com/" class="w-full h-full p-0 m-0" target="_blank" rel="noopener noreferrer">
              <img class="w-full h-full transition-transform duration-500 ease-in-out bg-contain hover:scale-110"
              src="@/assets/img/pastaNeem0.png" alt="">
              <p class="absolute top-0 text-lg font-bold text-center text-white font-poppins md:text-3xl">Pasta 100% Natural</p>
              <p class="absolute bottom-0 text-lg font-bold text-center text-white font-poppins md:text-3xl">Libre de químicos</p>
            </a>
          </div>
          <div
            class="container relative flex items-center justify-center w-1/2 overflow-hidden rounded-lg shadow-md min-h-32 bg-slate-100">
            <a href="https://asafoetida.com.mx/" class="w-full h-full p-0 m-0" target="_blank" rel="noopener noreferrer">
              <img class="w-full h-full transition-transform duration-500 ease-in-out bg-contain hover:scale-110"
              src="@/assets/img/asafoetida.png" alt="">
              <p class="absolute top-0 text-lg font-bold text-center text-white font-poppins md:text-3xl">Suplimento 100% Natural</p>
              <p class="absolute bottom-0 text-lg font-bold text-center text-white font-poppins md:text-3xl">Relajante natural</p>
            </a>
          </div>

          
        </section>
      </template>
    </MainLayout>
  </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref } from 'vue';

const images = ref([
  { src: new URL('@/assets/img/product01.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/product02.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/product03.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/product04.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/product05.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/safeBussiness.jpg', import.meta.url).href, alt: 'image' },
]);
const imagesKid = ref([
  { src: new URL('@/assets/img/pinkOpened.webp', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/bothClosed.webp', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/pinkOne03.webp', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/pinkOne02.webp', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/pinkOnne01.webp', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/pinkSealed.webp', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/bothOnes.webp', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/handBlueOne.webp', import.meta.url).href, alt: 'image' },
]);

const allImages = ref([
  { src: new URL('@/assets/img/availableProducts/0a.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/00a.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/0b.jpeg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/0b.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/0c.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/0d.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/0e.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/0f.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/0g.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/0h.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/0j.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/0k.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/0l.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/0v.jpeg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/0x.jpeg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/0z.jpeg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/1a.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/1b.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/1c.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/1d.jpg', import.meta.url).href, alt: 'image' },
  { src: new URL('@/assets/img/availableProducts/BabyProducts.jpg', import.meta.url).href, alt: 'image' },
])
const config = {
  autoplay: 3000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};
</script>

<style scoped>
.img {
  width: 100%;
}
</style>