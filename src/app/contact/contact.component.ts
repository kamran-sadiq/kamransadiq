import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;
declare var $ : any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // particlesJS("particles-js", {
    //   "particles": {
    //     "number": {
    //       "value": 120,
    //       "density": {
    //         "enable": true,
    //         "value_area": 800
    //       }
    //     },
    //     "color": {
    //       "value": "#ffffff"
    //     },
    //     "shape": {
    //       "type": "circle",
    //       "stroke": {
    //         "width": 0,
    //         "color": "#000000"
    //       },
    //       "polygon": {
    //         "nb_sides": 5
    //       },
    //       "image": {
    //         "src": "img/github.svg",
    //         "width": 100,
    //         "height": 100
    //       }
    //     },
    //     "opacity": {
    //       "value": 0.5,
    //       "random": false,
    //       "anim": {
    //         "enable": false,
    //         "speed": 1,
    //         "opacity_min": 0.1,
    //         "sync": false
    //       }
    //     },
    //     "size": {
    //       "value": 3,
    //       "random": true,
    //       "anim": {
    //         "enable": false,
    //         "speed": 40,
    //         "size_min": 0.1,
    //         "sync": false
    //       }
    //     },
    //     "line_linked": {
    //       "enable": true,
    //       "distance": 150,
    //       "color": "#ffffff",
    //       "opacity": 0.4,
    //       "width": 1
    //     },
    //     "move": {
    //       "enable": true,
    //       "speed": 6,
    //       "direction": "none",
    //       "random": false,
    //       "straight": false,
    //       "out_mode": "out",
    //       "bounce": false,
    //       "attract": {
    //         "enable": false,
    //         "rotateX": 600,
    //         "rotateY": 1200
    //       }
    //     }
    //   },
    //   "interactivity": {
    //     "detect_on": "canvas",
    //     "events": {
    //       "onhover": {
    //         "enable": true,
    //         "mode": "grab"
    //       },
    //       "onclick": {
    //         "enable": true,
    //         "mode": "push"
    //       },
    //       "resize": true
    //     },
    //     "modes": {
    //       "grab": {
    //         "distance": 140,
    //         "line_linked": {
    //           "opacity": 1
    //         }
    //       },
    //       "bubble": {
    //         "distance": 400,
    //         "size": 40,
    //         "duration": 2,
    //         "opacity": 8,
    //         "speed": 3
    //       },
    //       "repulse": {
    //         "distance": 200,
    //         "duration": 0.4
    //       },
    //       "push": {
    //         "particles_nb": 4
    //       },
    //       "remove": {
    //         "particles_nb": 2
    //       }
    //     }
    //   },
    //   "retina_detect": true
    // });

  
  }

  sendMail(contactform) {
    var link = "mailto:kamransadiq111@gmail.com"
      + "?subject=" + encodeURIComponent($('#cname').val())
      + "&body=" + encodeURIComponent($('#cmessage').val())
      ;

    window.location.href = link;
  }

}
