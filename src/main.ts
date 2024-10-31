import './assets/index.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill,FaShieldAlt,RiHotelBedFill,GiIndianPalace,GiCampingTent,GiNightSleep,FaBaby,FaStore,GiBed,FaStreetView,CoBaby,MdFacebook,CoTwitter,CoInstagram,MdLocationonRound,BiTelephoneOutboundFill,FaPhoneAlt,HiMail,MdEcoRound, RiMentalHealthFill, RiCustomerService2Fill, FaBuilding,MdPersonpincircleRound,RiPlantFill, GiPoisonBottle,GiMedicinePills,GiPlantRoots,FaTruckLoading,BiShieldLockFill,GiEarthAfricaEurope,GiHealthNormal,IoMedkit,FaBoxes,LaWhatsapp } from "oh-vue-icons/icons";
addIcons(FaFlag, RiZhihuFill,FaShieldAlt,RiHotelBedFill,GiIndianPalace,GiCampingTent,GiNightSleep,FaBaby,FaStore,GiBed,FaStreetView,CoBaby,MdFacebook,CoTwitter,CoInstagram,MdLocationonRound,BiTelephoneOutboundFill,FaPhoneAlt,HiMail,MdEcoRound, RiMentalHealthFill, RiCustomerService2Fill, FaBuilding,MdPersonpincircleRound,RiPlantFill, GiPoisonBottle,GiMedicinePills,GiPlantRoots,FaTruckLoading,BiShieldLockFill,GiEarthAfricaEurope,GiHealthNormal,IoMedkit,FaBoxes,LaWhatsapp);
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.component("v-icon", OhVueIcon);

app.use(createPinia())
app.use(router)

app.mount('#app')
