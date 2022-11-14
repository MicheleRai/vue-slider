/*Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/
const app = new Vue({
        el: 'container-blur',
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
                eleSliderViewer : document.querySelector('.slider-viewer'),
                eleSliderThumbs : document.querySelector('.thumbs'),
                eleBtnLeft : document.querySelector('.btn-left'),
                eleBtnRight : document.querySelector('.btn-right'),
                blurImg : document.querySelector('.container-blur'),
                eleBtnStart : document.querySelector('.btn-start'),
                eleBtnStop : document.querySelector('.btn-stop'),
                eleBtninvert : document.querySelector('.btn-invert'),
                listEleImg : document.querySelectorAll('.slider-img'),
                listThumbs : document.querySelectorAll('.thumb-img'),
                activeIndex : 0,
                idInterval : 0,
                i : 0,
        },
        methods: {
                rightFunction () {
                        // togliere la classe active dall'elemento attivo corrente
                        listEleImg[activeIndex].classList.remove('active');
                        listThumbs[activeIndex].classList.remove('active');
                
                        // incrementare l'active index con reset per slider infinito
                        activeIndex++;
                        if (activeIndex === listEleImg.length) {
                                activeIndex = 0;
                        }
                
                        // aggiungere la classe active all'elemento successivo
                        listEleImg[activeIndex].classList.add('active');
                        listThumbs[activeIndex].classList.add('active');
                        document.body.style.backgroundImage = `url('${arrImages[activeIndex]}')`;
                        document.body.style.backgroundSize = 'cover';
                },
                leftFunction() {
                        // togliere la classe active dall'elemento attivo corrente
                        listEleImg[activeIndex].classList.remove('active');
                        listThumbs[activeIndex].classList.remove('active');
                
                        // decrementare l'active index con reset per slider infinito
                        if (activeIndex === 0) {
                                activeIndex = listEleImg.length;
                        }
                        activeIndex--;
                
                        // aggiungere la classe active all'elemento successivo
                        listEleImg[activeIndex].classList.add('active');
                        listThumbs[activeIndex].classList.add('active');
                        document.body.style.backgroundImage = `url('${arrImages[activeIndex]}')`;
                        document.body.style.backgroundSize = 'cover';
                },
        }
});