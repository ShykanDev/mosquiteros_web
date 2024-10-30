<template>
    <div class="">
        <MainLayout>
            <template #main>
                <section class="flex flex-col items-center w-full px-5 mt-12 sm:mt-9 md:my-5 lg:my-5 font-poppins">
                    <div class="flex items-center justify-center w-full bg-white animate-jump-in">
                        <h2 class="py-4 text-4xl font-medium text-center bg-white rounded-md text-slate-600 ">
                            Beneficios
                        </h2>
                    </div>
                    <div class="fixed top-0 bottom-0 left-0 right-0 bg-slate-100 -z-10"></div>
                    <section class="z-10 flex flex-col items-center text-center font-poppins">

    <div data-aos="fade-up" class="p-6 mt-4 bg-white rounded-lg shadow-sm">
        <div>
            <h3 class="px-2 text-xl font-medium text-center text-slate-800 sm:px-0">
                Protección eficaz
            </h3>
            <v-icon name="fa-shield-alt" scale="1.5" class="text-orange-500" />
        </div>
        <div class="flex justify-center w-full my-5">
            <img class="rounded-2xl lg:w-[45%]" src="../assets/img/prohibidoMosquito.jpg" alt="">
        </div>
        <p>
            Un mosquitero actúa como una barrera física que impide la entrada de insectos voladores, como mosquitos y otros bichos. Esto no solo protege tu piel de picaduras incómodas, sino que también reduce el riesgo de enfermedades transmitidas por insectos. Al crear un ambiente libre de plagas, podrás relajarte y disfrutar de un sueño reparador, sin las molestias que generan los zumbidos nocturnos.
        </p>
    </div>

    <div data-aos="fade-up" class="p-6 mt-4 bg-white rounded-lg shadow-sm">
        <div>
            <h3 class="mt-3 text-xl font-medium text-center text-slate-800">
                Fácil instalación
            </h3>
            <v-icon name="ri-hotel-bed-fill" scale="1.5" class="text-sky-500" />
            <div class="flex justify-center w-full my-5">
                <img class="rounded-2xl lg:w-[45%]" src="../assets/img/instalacionFacil.jpg" alt="">
            </div>
        </div>
        <p>
            La mayoría de los mosquiteros están diseñados para ser fáciles de instalar y quitar. Con sistemas de sujeción simples, puedes colocarlos en minutos, sin necesidad de herramientas o complicaciones. Esto significa que puedes disfrutar de la protección en casa o llevar el mosquitero contigo cuando viajes, asegurándote de que siempre tendrás un refugio seguro y cómodo, sin importar dónde te encuentres.
        </p>

    </div>

    <div data-aos="fade-up" class="p-6 mt-4 bg-white rounded-lg shadow-sm">
        <div>
            <h3 class="mt-3 text-xl font-medium text-center text-slate-800">
                Versatilidad
            </h3>
            <v-icon name="gi-camping-tent" scale="1.5" class="text-amber-900" />
            <div class="flex justify-center w-full my-5">
                <img class="rounded-2xl lg:w-[45%]" src="../assets/img/versatilidad.jpg" alt="">
            </div>
        </div>
        <p>
            Los mosquiteros son increíblemente versátiles y se adaptan a diferentes estilos de vida. Ya sea que estés en casa, de camping, o en una cabaña, un mosquitero se puede usar en cualquier lugar. Además, vienen en diversas formas y tamaños, lo que te permite elegir el que mejor se ajuste a tus necesidades. Esto asegura que siempre tendrás una solución efectiva para disfrutar de un descanso libre de insectos.
        </p>
    </div>

    <div data-aos="fade-up" class="p-6 mt-4 bg-white rounded-lg shadow-sm">
        <div>
            <h3 class="mt-3 text-xl font-medium text-center text-slate-800">
                Mejora del sueño
            </h3>
            <v-icon name="gi-night-sleep" scale="1.5" class="text-sky-800" />
            <div class="flex justify-center w-full my-5">
                <img class="rounded-2xl lg:w-[45%]" src="../assets/img/dormirBien.jpg" alt="">
            </div>
        </div>
        <p>
            Al eliminar las distracciones causadas por los insectos, un mosquitero contribuye a un entorno de sueño más tranquilo. Esto puede resultar en un descanso más profundo y reparador, lo cual es esencial para mantener altos niveles de energía y concentración durante el día. Un buen sueño no solo mejora tu bienestar físico, sino que también favorece tu salud mental, permitiéndote afrontar cada día con más vitalidad y positividad.
        </p>
    </div>
</section>

                </section>
            </template>
        </MainLayout>
    </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<style scoped></style>