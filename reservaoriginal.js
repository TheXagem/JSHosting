(function () { window.mobileAndTabletcheck = function () { var check = false; (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera); return check; }; })();
var me = document.currentScript;
var id = me.getAttribute("id");
var origen = me.getAttribute("origen");
var token = me.getAttribute("rol");
var color1 = me.getAttribute("color");
var posBottom = me.getAttribute("position");
var server = me.getAttribute("src").replace('https://', '').split('/')[0];
var visibility = eval(me.getAttribute("visibility"));
var url_env = ""; // LOCAL

var settings = {};

if (color1 == null || color1 == '')
  color1 = '#1177D6';

settings.position = 'fixed';
settings.bottom = '0px';
settings.z_index = '1000';
settings.right = '20px';
settings.width = '360px';
settings.height = '570px';
settings.background = 'rgb(255, 255, 255)';
settings.boxShadow = '0px 0px 5px 2px #A6A8AB';
settings.border_bottom = 'none';
settings.overflow = 'hidden';
settings.display = 'block';
settings.url = 'https://' + server + '/ReservaOnline/';
settings.id = id;
settings.origen = origen;
settings.borderTopRadius = '5px';

var SACMED_ROL = {
  minimizeROL: function () {

    if (window.mobileAndTabletcheck()) {
      window.open(settings.url + id, '_blank');
      return;
    }

    let ifr = document.getElementById('iframeROL');
    let button = document.getElementById('btnMinimize');
    if (ifr.style.height == '0px') {
      //let iframe = document.getElementById('containing_iframe');

      //iframe.src = settings.url + settings.id + '/' + settings.origen;
      button.style.display = 'block';
      FX.fadeIn(button, {
        opt: 'pos',
        duration: 1000,
        complete: function () {
        }
      });
      FX.fadeIn(ifr, {
        duration: 1000,
        complete: function () {
        }
      });
    }
    else {
      FX.fadeOut(button, {
        opt: 'pos',
        duration: 1000,
        complete: function () {
          let vis = eval(button.dataset.visibility);
          if (vis != null && vis == false)
            button.style.display = 'none';
        }
      });
      FX.fadeOut(ifr, {
        duration: 1000,
        complete: function () {
        }
      });
    }
  },
  setRol: function () {
    let ifr = document.getElementById('iframeROL')

    if (ifr == null) {

      // Chat container params
      let rol_div = document.createElement("div");
      rol_div.setAttribute("id", "iframeROL");
      rol_div.style.position = settings.position;
      rol_div.style.bottom = settings.bottom;
      if (posBottom == null || posBottom == '' || posBottom == 'right')
        rol_div.style.right = "0px";
      else
        rol_div.style.left = "25px";

      rol_div.style.zIndex = settings.z_index;
      rol_div.style.right = settings.right;
      rol_div.style.width = settings.width;
      rol_div.style.height = '0px'; //settings.height;
      rol_div.style.background = settings.background;
      rol_div.style.boxShadow = settings.boxShadow;
      rol_div.style.border_bottom = settings.border_bottom;
      //rol_div.style.overflow = settings.overflow;
      rol_div.style.overflowY = 'overlay';
      rol_div.style.display = settings.display;
      rol_div.style.borderTopLeftRadius = settings.borderTopRadius;
      rol_div.style.borderTopRightRadius = settings.borderTopRadius;


      // iFrame
      iframe = document.createElement('iframe');
      iframe.setAttribute("scrolling", "yes");
      iframe.setAttribute("id", "containing_iframe");
      iframe.setAttribute("frameborder", "0");
      iframe.style.width = settings.width;
      iframe.style.height = settings.height;
      iframe.style.padding = "0px";
      iframe.src = settings.url + settings.id + '/' + settings.origen;
      iframe.style.borderTopLeftRadius = settings.borderTopRadius;
      iframe.style.borderTopRightRadius = settings.borderTopRadius;
      rol_div.appendChild(iframe);

      const d = new Date();
      let day = d.getDate();
      let svg = document.createElement('svg');
      svg.innerHTML = '<svg version="1.1" id="Capa_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="50pt" width="50pt" x="0px" y="0px"viewBox="0 0 612 792" style="enable-background:new 0 0 612 792;" xml:space="preserve"><style type="text/css">.st0{fill:color1;}.st1{fill:#FFFFFF;}.st3{font-family:\'Helvetica-Bold\'; font-weight: bold;}.st4{font-size:161.2966px;}</style><circle class="st0" cx="306" cy="396" r="256"/><path class="st1" d="M229.66,313.02L229.66,313.02c-11.77,0-21.32-9.55-21.32-21.32v-25.17c0-11.77,9.55-21.32,21.32-21.32h0c11.77,0,21.32,9.55,21.32,21.32v25.17C250.98,303.48,241.44,313.02,229.66,313.02z"/><path class="st1" d="M383.12,313.02L383.12,313.02c-11.77,0-21.32-9.55-21.32-21.32v-25.17c0-11.77,9.55-21.32,21.32-21.32h0c11.77,0,21.32,9.55,21.32,21.32v25.17C404.44,303.48,394.9,313.02,383.12,313.02z"/><path class="st1" d="M419.53,268.98H192.06c-16.56,0-29.98,13.42-29.98,29.98v193.79c0,16.56,13.42,29.98,29.98,29.98h227.47c16.56,0,29.98-13.42,29.98-29.98V298.96C449.51,282.41,436.09,268.98,419.53,268.98z M229.66,334.69c-15.35,0-27.79-12.44-27.79-27.79c0-15.35,12.44-27.79,27.79-27.79c15.35,0,27.79,12.44,27.79,27.79C257.45,322.25,245.01,334.69,229.66,334.69z M383.12,334.69c-15.35,0-27.79-12.44-27.79-27.79c0-15.35,12.44-27.79,27.79-27.79c15.35,0,27.79,12.44,27.79,27.79C410.91,322.25,398.47,334.69,383.12,334.69z"/><text class="st0 st3 st4" x="50%" y="60%" text-anchor="middle">_dia_</text></svg>'.replace('color1', color1).replace('_dia_', day);
      svg.style.cursor = "pointer";

      //button
      let button = document.createElement('div');
      button.setAttribute("id", "btnMinimize");
      button.style.position = "fixed";
      button.style.bottom = "0px";
      button.style.zIndex = "9999";
      if (posBottom == null || posBottom == '' || posBottom == 'right')
        button.style.right = "0px";
      else
        button.style.left = "0px";

      if (visibility == null || visibility == true)
        button.style.display = "block";
      else
        button.style.display = "none";

      button.dataset.visibility = visibility;

      button.appendChild(svg);
      button.addEventListener('click', SACMED_ROL.minimizeROL);

      rol_div.appendChild(button);
      document.getElementsByTagName("body")[0].append(button);
      document.getElementsByTagName("body")[0].append(rol_div);

      let css = `     div#iframeROL::-webkit-scrollbar {
                        width: 8px;
                        height: 8px;
                        display: none;
                    }
               `;

      let head = document.head || document.getElementsByTagName('head')[0];
      let style = document.createElement('style');
      head.appendChild(style);

      style.type = 'text/css';
      if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      if (visibility != null && visibility == false)
        SACMED_ROL.minimizeROL();

      return false;
    }
    else {
      SACMED_ROL.minimizeROL();
    }
  }
}

var FX = {
  easing: {
    linear: function (progress) {
      return progress;
    },
    quadratic: function (progress) {
      return Math.pow(progress, 2);
    },
    swing: function (progress) {
      return 0.5 - Math.cos(progress * Math.PI) / 2;
    },
    circ: function (progress) {
      return 1 - Math.sin(Math.acos(progress));
    },
    back: function (progress, x) {
      return Math.pow(progress, 2) * ((x + 1) * progress - x);
    },
    bounce: function (progress) {
      for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (progress >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
        }
      }
    },
    elastic: function (progress, x) {
      return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
    }
  },
  animate: function (options) {
    var start = new Date;
    var id = setInterval(function () {
      var timePassed = new Date - start;
      var progress = timePassed / options.duration;
      if (progress > 1) {
        progress = 1;
      }
      options.progress = progress;
      var delta = options.delta(progress);
      options.step(delta);
      if (progress == 1) {
        clearInterval(id);
        options.complete();
      }
    }, options.delay || 10);
  },
  fadeOut: function (element, options) {
    var to = 1;
    this.animate({
      duration: options.duration,
      delta: function (progress) {
        progress = this.progress;
        return FX.easing.swing(progress);
      },
      complete: options.complete,
      step: function (delta) {
        //element.style.opacity = to - delta;
        let per = to - delta;

        if (options.opt == null) {
          let h = Math.round(parseInt(settings.height.replace('px')) * per);
          element.style.height = h + 'px';
        }
        else
        if (options.opt == 'pos') {
          let b = Math.round((parseInt(settings.height.replace('px')) - 20) * per);
          element.style.bottom = b + 'px';
        }
      }
    });
  },
  fadeIn: function (element, options) {
    var to = 0;
    this.animate({
      duration: options.duration,
      delta: function (progress) {
        progress = this.progress;
        return FX.easing.swing(progress);
      },
      complete: options.complete,
      step: function (delta) {
        //element.style.opacity = to + delta;
        let per = to + delta;
        if (options.opt == null) {
          let h = Math.round(parseInt(settings.height.replace('px')) * per);
          element.style.height = h + 'px';
        }
        else
        if (options.opt == 'pos') {
          let b = Math.round((parseInt(settings.height.replace('px')) - 20) * per);
          element.style.bottom = b + 'px';
        }
      }
    });
  }
};
window.FX = FX;

window.addEventListener("message", function (message) {

  if (message.data == 'minimizar') {
    SACMED_ROL.minimizeROL();
  }
});

if (visibility == null || visibility == true)
  SACMED_ROL.setRol();

const buttons = document.querySelectorAll('.sacmed-rol a, .sacmed-rol button, a.sacmed-rol, button.sacmed-rol');
buttons.forEach(button => {
  button.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    SACMED_ROL.setRol();
  });
});
