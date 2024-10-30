<template>
    <div class="">
        <MainLayout>
            <template #main>
                <section class="flex flex-col items-center w-full px-5 mt-12 sm:mt-9 md:mt-5 lg:mt-5 font-poppins">
                    <div class="flex items-center justify-center w-full bg-white animate-jump-in">
                        <h2 class="py-4 text-4xl font-medium text-center bg-white rounded-md text-slate-600 ">
                            Galería de Imágenes
                        </h2>
                    </div>
                </section>
                <div class="fixed top-0 bottom-0 left-0 right-0 bg-slate-100 -z-10"></div>
                <!-- Images -->
                <section class="flex flex-wrap justify-around px-5 mt-5">
                    <img src="@/assets/img/product01.jpg" alt="Product 01"
                        class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" />
                    <img src="@/assets/img/product02.jpg" alt="Product 02"
                        class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" />
                    <img src="@/assets/img/product03.jpg" alt="Product 03"
                        class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" />
                    <img src="@/assets/img/product04.jpg" alt="Product 04"
                        class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" />
                    <img src="@/assets/img/product05.jpg" alt="Product 05"
                        class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" />
                    <img src="@/assets/img/blueOne01.webp" alt="Blue One Mosquito 01"
                        class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" />
                    <img src="@/assets/img/bigPink.webp" alt="Big Pink Mosquito"
                        class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" />
                    <img src="@/assets/img/blueOne02.webp" alt="Blue One Mosquito 02"
                        class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" />
                    <img src="@/assets/img/bothClosed.webp" alt="Both Closed Mosquitoes"
                        class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" />
                    <img src="@/assets/img/bothOnes.webp" alt="Both Ones Mosquitoes"
                        class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" />
                    <img src="@/assets/img/handBlueOne.webp" alt="Hand Blue One"
                        class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" />
                    <!-- <img src="@/assets/img/pinkOne01.webp" alt="Pink One 01" class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" /> -->
                    <img src="@/assets/img/pinkOne02.webp" alt="Pink One 02"
                        class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" />
                    <img src="@/assets/img/pinkOne03.webp" alt="Pink One 03"
                        class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" />
                    <img src="@/assets/img/pinkOnne01.webp" alt="Pink One 01"
                        class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" />
                    <img src="@/assets/img/pinkOpened.webp" alt="Pink Opened"
                        class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" />
                    <img src="@/assets/img/pinkSealed.webp" alt="Pink Sealed"
                        class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" />
                    <!-- <img src="@/assets/img/safeBussiness.jpg" alt="Safe Business" class="h-auto mb-3 transition-transform duration-500 ease-in-out rounded-lg shadow-sm hover:scale-110 w-72" /> -->

                </section>
            </template>
        </MainLayout>
    </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<style scoped></style>