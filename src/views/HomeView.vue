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
              <p data-aos="fade-up-left" class="px-4 text-lg text-center font-poppins text-slate-800 sm:px-0 lg:text-xl">
                <strong>

                  ¡Sí, esos
                  mosquitos son realmente
                  molestos!
                </strong>
 Cuando finalmente logras encontrar un momento de tranquilidad para descansar, de repente, ese
                  zumbido se convierte en el sonido de tus pesadillas.</p>
            </div>
            <!-- <img data-aos="fade-up-right" class="hidden lg:max-w-[50%] px-3 rounded-3xl lg:block" src="../assets/img/mosquito003.jpg" -->
            <!-- alt=""> -->
            <img data-aos="fade-up-right" class="p-3 rounded-3xl lg:hidden" src="../assets/img/MenTryingToSleep.webp"
              alt="">
            <p class="px-2 text-lg text-center font-poppins text-slate-800 sm:px-0 mt-7">Quizás ya has intentado todo: desde
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
          <!-- content promotion -->
          <section class="flex flex-col items-center text-center font-poppins">
            <h2 class="px-2 mt-5 text-2xl font-medium text-center font-poppins text-sky-800 sm:px-0">Beneficios</h2>
            <div data-aos="fade-up" class="mt-4">
              <div>
                <h3 class="px-2 text-xl font-medium text-center font-poppins text-slate-800 sm:px-0">Protección eficaz
                </h3>
                <v-icon name="fa-shield-alt" scale="1.5" class="text-orange-500" />
              </div>
              <p>Un mosquitero actúa como una barrera física que impide la entrada de insectos voladores, como mosquitos
                y
                otros
                bichos. Esto no solo protege tu piel de picaduras incómodas, sino que también reduce el riesgo de
                enfermedades
                transmitidas por insectos. Al crear un ambiente libre de plagas, podrás relajarte y disfrutar de un
                sueño
                reparador,
                sin las molestias que generan los zumbidos nocturnos.</p>
            </div>
            <div data-aos="fade-up" class="mt-4">
              <div>
                <h3 class="mt-3 text-xl font-medium text-center font-poppins text-slate-800">Fácil instalación</h3>
                <v-icon name="ri-hotel-bed-fill" scale="1.5" class="text-sky-500" />
              </div>
              <p>La mayoría de los mosquiteros están diseñados para ser fáciles de instalar y quitar. Con sistemas de
                sujeción
                simples, puedes colocarlos en minutos, sin necesidad de herramientas o complicaciones. Esto significa
                que
                puedes
                disfrutar de la protección en casa o llevar el mosquitero contigo cuando viajes, asegurándote de que
                siempre tendrás
                un refugio seguro y cómodo, sin importar dónde te encuentres.</p>
            </div>
            <div data-aos="fade-up" class="mt-4">
              <div>
                <h3 class="mt-3 text-xl font-medium text-center font-poppins text-slate-800">Versatilidad</h3>
                <v-icon name="gi-camping-tent" scale="1.5" class="text-amber-900" />
              </div>
              <p>Los mosquiteros son increíblemente versátiles y se adaptan a diferentes estilos de vida. Ya sea que
                estés
                en casa,
                de camping, o en una cabaña, un mosquitero se puede usar en cualquier lugar. Además, vienen en diversas
                formas y
                tamaños, lo que te permite elegir el que mejor se ajuste a tus necesidades. Esto asegura que siempre
                tendrás una
                solución efectiva para disfrutar de un descanso libre de insectos.</p>
            </div>
            <div data-aos="fade-up" class="mt-4">
              <div>
                <h3 class="mt-3 text-xl font-medium text-center font-poppins text-slate-800">Mejora del sueño</h3>
                <v-icon name="gi-night-sleep" scale="1.5" class="text-sky-800" />
              </div>
              <p>Al eliminar las distracciones causadas por los insectos, un mosquitero contribuye a un entorno de sueño
                más
                tranquilo. Esto puede resultar en un descanso más profundo y reparador, lo cual es esencial para
                mantener
                altos
                niveles de energía y concentración durante el día. Un buen sueño no solo mejora tu bienestar físico,
                sino
                que
                también favorece tu salud mental, permitiéndote afrontar cada día con más vitalidad y positividad.</p>
            </div>
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
              <h3  class="px-2 mt-5 text-2xl font-medium text-center font-poppins text-sky-800 sm:px-0">Beneficios</h3>
              <ul class="px-6 mt-4 text-lg font-medium text-center font-poppins text-slate-800 sm:px-0">
                <li data-aos="fade-right">✔ Protección total para el bebé, libre de picaduras y mosquitos</li>
                <li data-aos="fade-right">✔ Diseño portátil y plegable, ideal para usar en casa o de viaje</li>
                <li data-aos="fade-right">✔ Colchón cómodo y soporte seguro, proporcionando un descanso óptimo</li>
                <li data-aos="fade-right">✔ Fácil de montar, sin herramientas adicionales</li>
                <li data-aos="fade-right">✔ Acero grado A</li>
              </ul>
            </div>
          </section>
        </section>
        <!-- ending section -->
        <section class="mt-10">
          <h3 class="text-2xl font-medium text-center font-poppins text-sky-900">En resumen...</h3>

          <p class="px-2 mt-3 text-lg text-center font-poppins text-slate-800 sm:px-0">
            Si deseas una solución práctica y confiable para protegerte de los mosquitos, nuestros productos ofrecen
            opciones
            ideales para cualquier necesidad. Desde un mosquitero para piso hasta uno especialmente diseñado para cama,
            cada uno
            ofrece protección según el entorno en el que lo necesites. A continuación, te contamos cuándo es más
            conveniente
            cada opción.
          </p>

          <h3 class="mt-6 text-2xl text-center text-orange-800 font-poppins">Mosquitero para piso</h3>
          <div class="flex justify-center">
            <v-icon name="fa-street-view" scale="1.5" class="text-orange-800" />
          </div>
          <p class="px-2 mt-3 text-lg text-left font-poppins text-slate-800 sm:px-0">
            El mosquitero para piso es perfecto para espacios abiertos o habitaciones sin marcos de cama específicos.
            Con su
            diseño amplio y fácil de colocar, este tipo de mosquitero te ofrece una barrera efectiva contra los
            insectos, sin
            importar el tamaño de la cama o si decides moverlo a otra zona de la habitación. Es ideal para quienes
            buscan
            flexibilidad y rapidez en su instalación.
          </p>
          <p class="px-2 mt-3 text-lg text-left font-poppins text-slate-800 sm:px-0">
            Además, este tipo de mosquitero es fácil de plegar y almacenar, lo que lo hace muy conveniente para viajeros
            o
            aquellos que buscan una opción de protección temporal. Su altura permite que te muevas cómodamente dentro de
            él,
            proporcionando un espacio seguro para dormir sin interferir con el flujo de aire en la habitación.
          </p>

          <h3 class="mt-6 text-2xl text-center font-poppins text-cyan-800">Mosquitero para cama</h3>
          <div class="flex justify-center">
            <v-icon name="gi-bed" scale="1.5" class="text-cyan-800" />
          </div>
          <p class="px-2 mt-3 text-lg text-left font-poppins text-slate-800 sm:px-0">
            Si prefieres una opción que se integre perfectamente a la estructura de tu cama, el mosquitero para cama es
            ideal.
            Este tipo de mosquitero se ajusta fácilmente alrededor de la cama, proporcionando una barrera completa que
            se
            mantiene en su lugar durante toda la noche. Además, su diseño es discreto, por lo que no interfiere con la
            estética
            de la habitación.
          </p>
          <p class="px-2 mt-3 text-lg text-left font-poppins text-slate-800 sm:px-0">
            Esta opción es ideal para personas que buscan una protección permanente o de uso frecuente en el hogar. Al
            estar
            fijado a la cama, el mosquitero se convierte en una solución estable y cómoda, ideal para garantizar un
            sueño
            profundo sin interrupciones.
          </p>

          <h3 class="mt-6 text-2xl text-center font-poppins text-sky-500">Mosquitero para cuna de bebé</h3>
          <div class="flex justify-center">
            <v-icon name="co-baby" scale="1.5" class="text-sky-500" />
          </div>
          <p class="px-2 mt-3 text-lg text-left font-poppins text-slate-800 sm:px-0">
            Para proteger a los más pequeños, contamos con un mosquitero para cuna especialmente diseñado para el
            descanso
            seguro del bebé. Este mosquitero cubre completamente la cuna, brindando una barrera efectiva contra
            los mosquitos. Con materiales duraderos, puedes estar seguro de que tu bebé dormirá protegido contra
            mosquitos toda
            la
            noche.
          </p>
        </section>
        <!-- quality section -->
        <section id="test" class="mt-8 text-center">
          <div class="flex justify-center w-full">
            <img class="md:w-[50%] lg:w-[40%]" src="@/assets/img/iso9001.svg" alt="">
          </div>
          <p class="px-4 mt-4 text-lg font-poppins text-slate-800 sm:px-0">
            La certificación ISO 9001 es un estándar internacional que establece criterios para un sistema de gestión de
            calidad. Esta norma asegura que nuestros productos y servicios cumplen con las expectativas de los clientes
            y que
            seguimos procesos eficientes y consistentes. Al tener la certificación ISO 9001, garantizamos que cada
            producto que
            ofrecemos ha pasado por un riguroso control de calidad, lo que respalda nuestra dedicación a la excelencia y
            la
            satisfacción del cliente.
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
            Búscanos en nuestra página de Mercado Libre, donde tus compras son seguras y rápidas.
          </p>
          <p class="px-4 mt-4 text-lg font-poppins text-slate-800 sm:px-0">
            Nos enorgullece tener la
            <strong>
              calificación de vendedor más alta en Mercado Libre
            </strong>, lo que refleja nuestra pasión por ofrecer productos excepcionales y un servicio al cliente
            sobresaliente.
            Únete a nuestros clientes satisfechos y experimenta la diferencia de comprar con un vendedor confiable.
          </p>
          <div data-aos="zoom-in-up" class="flex justify-center w-full">
            <img src="@/assets/img/highRating.png" alt="">
          </div>
          <p class="px-4 mt-4 text-lg font-poppins text-slate-800 sm:px-0">
            Da clic en el botón de abajo para visitar nuestra tienda. ¡Estaremos encantados de atenderte y ayudarte a
            dormir
            mejor!
          </p>
          <a class="my-8" href="https://listado.mercadolibre.com.mx/_CustId_576364310?item_id=MLM3418418980&category_id=MLM429685&seller_id=576364310&client=recoview-selleritems&recos_listing=true#origin=vip&component=sellerData&typeSeller=classic" target="_blank">
          <div id="store" class="flex justify-center w-full">
            <div
              class="px-6 flex justify-center gap-5 self-center w-[60%] py-3 mt-6 font-bold  text-white transition duration-300 bg-[#3c82dd] rounded-full hover:bg-blue-600 cursor-pointer">
              <p>Ir a la tienda</p>
              <v-icon name="fa-store" scale="1.5" class="text-white"/>
            </div>
          </div>
        </a>
        <!-- social media -->
        <article class="mt-10">
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
  { src: new URL('@/assets/img/product01.jpg', import.meta.url).href, alt: 'Hombre tratando de dormir' },
  { src: new URL('@/assets/img/product02.jpg', import.meta.url).href, alt: 'Hombre tratando de dormir' },
  { src: new URL('@/assets/img/product03.jpg', import.meta.url).href, alt: 'Hombre tratando de dormir' },
  { src: new URL('@/assets/img/product04.jpg', import.meta.url).href, alt: 'Hombre tratando de dormir' },
  { src: new URL('@/assets/img/product05.jpg', import.meta.url).href, alt: 'Hombre tratando de dormir' },
  { src: new URL('@/assets/img/safeBussiness.jpg', import.meta.url).href, alt: 'Hombre tratando de dormir' },
]);
const imagesKid = ref([
  { src: new URL('@/assets/img/pinkOpened.webp', import.meta.url).href, alt: 'Hombre tratando de dormir' },
  { src: new URL('@/assets/img/bothClosed.webp', import.meta.url).href, alt: 'Hombre tratando de dormir' },
  { src: new URL('@/assets/img/pinkOne03.webp', import.meta.url).href, alt: 'Hombre tratando de dormir' },
  { src: new URL('@/assets/img/pinkOne02.webp', import.meta.url).href, alt: 'Hombre tratando de dormir' },
  { src: new URL('@/assets/img/pinkOnne01.webp', import.meta.url).href, alt: 'Hombre tratando de dormir' },
  { src: new URL('@/assets/img/pinkSealed.webp', import.meta.url).href, alt: 'Hombre tratando de dormir' },
  { src: new URL('@/assets/img/bothOnes.webp', import.meta.url).href, alt: 'Hombre tratando de dormir' },
  { src: new URL('@/assets/img/handBlueOne.webp', import.meta.url).href, alt: 'Hombre tratando de dormir' },
]);
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