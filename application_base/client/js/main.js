import {toggleMenuBurger} from './burger/burgerMenu.js';
import {getJSONHotels} from './data/getJsonHotels.js';
import { getJSONTeam } from './data/getJsonTeam.js';
import {displaySections, togglePassword} from './account/myAccount.js';

toggleMenuBurger();
getJSONHotels();
getJSONTeam();
displaySections();
togglePassword();

$(document).ready(function(){
    $('.carousel-intro').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
});





