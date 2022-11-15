/*Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/
const app = new Vue({
        el: '#root',
        data: {
                arrImages : [
                        {
                                image: '01.webp',
                                title: "Marvel's Spiderman Miles Morale",
                                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                        },
                        {
                                image: '02.webp',
                                title: 'Ratchet & Clank: Rift Apart',
                                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                        },
                        {
                                image: '03.webp',
                                title: 'Fortnite',
                                text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
                        },
                        {
                                image: '04.webp',
                                title: 'Stray',
                                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                        },
                        {
                                image: '05.webp',
                                title: "Marvel's Avengers",
                                text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                        },
                ],
                timeSlider: 1.5 * 1000,
                direction: 1,
                activeIndex : 0,
                idInterval : 0,
                isAutoplayActive: true,
        },
        methods: {
                changeSlide(direction) {
                       if(direction > 0) {
                                this.activeIndex++;
                                if(this.activeIndex === this.arrImages.length){
                                        this.activeIndex = 0;
                                }
                       }else{
                                if(this.activeIndex === 0) {
                                        this.activeIndex= this.arrImages.length;
                                }
                                this.activeIndex--;
                       }
                },
                startAutoPlay(){
                        thisidInterval = setInterval(() => this.changeSlide(this.direction), this.timeSlider);
                        this.isAutoplayActive = true;
                },
                stopAutoPlay(){
                        clearInterval(this.idInterval)
                        this.isAutoplayActive = false;
                },
                invertAutoPlay(){
                        this.direction *= -1
                },
        },
        mounted(){
                this.startAutoPlay();
        },
});                                       