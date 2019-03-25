var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

// Output Welcome message
outputwomd("");
outputwomd(".----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .-----------------. .----------------. ");
outputwomd("| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |");
outputwomd("| |   ______     | || |  _______     | || |     _____    | || |  _________   | || |  _________   | || |     _____    | || | ____  _____  | || |    ______    | |");
outputwomd("| |  |_   _ \\    | || | |_   __ \\    | || |    |_   _|   | || | |_   ___  |  | || | |_   ___  |  | || |    |_   _|   | || ||_   \\|_   _| | || |  .' ___  |   | |");
outputwomd("| |    | |_) |   | || |   | |__) |   | || |      | |     | || |   | |_  \\_|  | || |   | |_  \\_|  | || |      | |     | || |  |   \\ | |   | || | / .'   \\_|   | |");
outputwomd("| |    |  __'.   | || |   |  __ /    | || |      | |     | || |   |  _|  _   | || |   |  _|      | || |      | |     | || |  | |\\ \\| |   | || | | |    ____  | |  .ooooo.   .oooo.o ");
outputwomd("| |   _| |__) |  | || |  _| |  \\ \\_  | || |     _| |_    | || |  _| |___/ |  | || |  _| |_       | || |     _| |_    | || | _| |_\\   |_  | || | \\ `.___]  _| | | d88' `88b d88(  \"8 ");
outputwomd("| |  |_______/   | || | |____| |___| | || |    |_____|   | || | |_________|  | || | |_____|      | || |    |_____|   | || ||_____|\\____| | || |  `._____.'   | | 888   888 `\"Y88b.  ");
outputwomd("| |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | | 888   888 o.  )88b ");
outputwomd("| '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' | `Y8bod8P' 8\"\"888P' ");
outputwomd(" '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------' ");
outputwomd("");
outputwomd("Briefing OS (operating system) v 1.0: Dpto de Tecnologías de la Información ");
outputwomd("Lunes 25 marzo 2019");
outputwomd("");
outputwomd("");


function reboot(){
$("#outputs").html("")
output("El sistema se está reiniciando");
setTimeout(function(){
$("#outputs").html("")
outputwomd("");
outputwomd(".----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .-----------------. .----------------. ");
outputwomd("| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |");
outputwomd("| |   ______     | || |  _______     | || |     _____    | || |  _________   | || |  _________   | || |     _____    | || | ____  _____  | || |    ______    | |");
outputwomd("| |  |_   _ \\    | || | |_   __ \\    | || |    |_   _|   | || | |_   ___  |  | || | |_   ___  |  | || |    |_   _|   | || ||_   \\|_   _| | || |  .' ___  |   | |");
outputwomd("| |    | |_) |   | || |   | |__) |   | || |      | |     | || |   | |_  \\_|  | || |   | |_  \\_|  | || |      | |     | || |  |   \\ | |   | || | / .'   \\_|   | |");
outputwomd("| |    |  __'.   | || |   |  __ /    | || |      | |     | || |   |  _|  _   | || |   |  _|      | || |      | |     | || |  | |\\ \\| |   | || | | |    ____  | |");
outputwomd("| |   _| |__) |  | || |  _| |  \\ \\_  | || |     _| |_    | || |  _| |___/ |  | || |  _| |_       | || |     _| |_    | || | _| |_\\   |_  | || | \\ `.___]  _| | |");
outputwomd("| |  |_______/   | || | |____| |___| | || |    |_____|   | || | |_________|  | || | |_____|      | || |    |_____|   | || ||_____|\\____| | || |  `._____.'   | |");
outputwomd("| |              | || |              | || |              | || |              | || |              | || |              | || |              | || |              | |");
outputwomd("| '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |");
outputwomd(" '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------' ");
outputwomd("");
outputwomd("Briefing OS v 1.0: Dpto de Tecnologías de la Información ");
outputwomd("Lunes 25 marzo 2019");
outputwomd("");
outputwomd("");
},2000)
}


function viewlog(){
    outputwomd("");
    outputwomd("");
    outputwomd(" ooooooooo.                               .                                 .o8            oooo             .o8   o8o            ");
    outputwomd(" `888   `Y88.                           .o8                                \"888            `888            \"888   `\"'            ");
    outputwomd("  888   .d88' oooo  oooo  ooo. .oo.   .o888oo  .ooooo.   .oooo.o       .oooo888   .ooooo.   888        .oooo888  oooo   .oooo.   ");
    outputwomd("  888ooo88P'  `888  `888  `888P\"Y88b    888   d88' `88b d88(  \"8      d88' `888  d88' `88b  888       d88' `888  `888  `P  )88b  ");
    outputwomd("  888          888   888   888   888    888   888   888 `\"Y88b.       888   888  888ooo888  888       888   888   888   .oP\"888  ");
    outputwomd("  888          888   888   888   888    888 . 888   888 o.  )88b      888   888  888    .o  888       888   888   888  d8(  888  ");
    outputwomd(" o888o         `V88V\"V8P' o888o o888o   \"888\" `Y8bod8P' 8\"\"888P'      `Y8bod88P\" `Y8bod8P' o888o      `Y8bod88P\" o888o `Y888\"\"8o ");
    outputwomd("");
    outputwomd("");
    outputwomd("1.- De donde venímos             [command: remember]");
    outputwomd("2.- Hacia donde vamos            [command: future]");
    outputwomd("3.- Despedida y cierre           [command: bye]");
}

span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// User Commands
function echo (...a) {
  return a.join(' ')
}
echo.usage = "echo arg [arg ...]"
echo.doc = "Echos to output whatever arguments are input"

var cmds = {
  echo,
  clear,
  help,
  reboot,
  viewlog,
  remember,
  future,
  play,
  bye
}

/*
 * * * * * * * * USER INTERFACE * * * * * * *
 */

function clear () {
  $("#outputs").html("")
}
clear.usage = "clear"
clear.doc = "Limpia la pantalla"



function play(...a){
  if (a=="expedientes"){
    $('#sourcevideo').attr('src','video/expedientes.mp4');
    $('#datavideo').attr('data','video/expedientes.mp4');
    $("video")[0].load();
    modal.style.display = "block";
    
  }else if (a=="somajasa"){
    $('#sourcevideo').attr('src','video/somajasa.mp4');
    $('#datavideo').attr('data','video/somajasa.mp4');
    $("video")[0].load();
    modal.style.display = "block";
  }else if (a=="ubicacion"){
    $('#sourcevideo').attr('src','video/ubicacion.mp4');
    $('#datavideo').attr('data','video/ubicacion.mp4');
    $("video")[0].load();
    modal.style.display = "block";
  }else{
    outputwomd("");
    outputwomd("");
    outputwomd("Necesitas seleccionar un video para que se reproduzca")
    outputwomd("Usage: play [video]");
    outputwomd("");
  }
}


function remember(...a){
  
  if (a==""){
    outputwomd("");
    outputwomd("");
    outputwomd("oooooooooo.                        .o8                              .o8                                                    o8o                                       ");
    outputwomd("`888'   `Y8b                      \"888                             \"888                                                    `\"'                                       ");
    outputwomd(" 888      888  .ooooo.        .oooo888   .ooooo.  ooo. .oo.    .oooo888   .ooooo.       oooo    ooo  .ooooo.  ooo. .oo.   oooo  ooo. .oo.  .oo.    .ooooo.   .oooo.o ");
    outputwomd(" 888      888 d88' `88b      d88' `888  d88' `88b `888P\"Y88b  d88' `888  d88' `88b       `88.  .8'  d88' `88b `888P\"Y88b  `888  `888P\"Y88bP\"Y88b  d88' `88b d88(  \"8 ");
    outputwomd(" 888      888 888ooo888      888   888  888   888  888   888  888   888  888ooo888        `88..8'   888ooo888  888   888   888   888   888   888  888   888 `\"Y88b.  ");
    outputwomd(" 888     d88' 888    .o      888   888  888   888  888   888  888   888  888    .o         `888'    888    .o  888   888   888   888   888   888  888   888 o.  )88b ");
    outputwomd("o888bood8P'   `Y8bod8P'      `Y8bod88P\" `Y8bod8P' o888o o888o `Y8bod88P\" `Y8bod8P'          `8'     `Y8bod8P' o888o o888o o888o o888o o888o o888o `Y8bod8P' 8\"\"888P' ");
    outputwomd("");                                                                                                                                                                         
    outputwomd("");
    outputwomd(" 1.- Sistemas de Expedientes                                    [command: remember 1 ]");
    outputwomd(" 2.- Herramienta de Mapas Documental                            [command: remember 2 ]");
    outputwomd(" 3.- Restructuración Centros de SOMAJASA                        [command: remember 3 ]");
    outputwomd(" 4.- Actualización masiva de datos de personal SERCOMOSA        [command: remember 4 ]");
    outputwomd(" 5.- Automatización instrucciones básicas de Server PROD        [command: remember 5 ]");
    outputwomd(" 6.- Habilitación de catalogación por UBICACIÓN (PASCUAL SAP)   [command: remember 6 ]");
    outputwomd(" 7.- Formaciones                                                [command: remember 7 ]");
    outputwomd(" 8.- Resolución de incidencias                                  [command: remember 8 ]");
    outputwomd("");
    outputwomd("");


  }else if (a=="1"){
    outputwomd("");
    outputwomd("");
    outputwomd(" _____  _       _                                                              ");
    outputwomd("/  ___|(_)     | |                                                             ");
    outputwomd("\\ `--.  _  ___ | |_   ___  _ __ ___    __ _                                    ");
    outputwomd(" `--. \\| |/ __|| __| / _ \\| '_ ` _ \\  / _` |                                   ");
    outputwomd("/\\__/ /| |\\__ \\| |_ |  __/| | | | | || (_| |                                   ");
    outputwomd("\\____/ |_||___/ \\__| \\___||_| |_| |_| \\__,_|                                   ");
    outputwomd("                                                                               ");
    outputwomd("                                                                               ");
    outputwomd("     _         _____                         _  _               _              ");
    outputwomd("    | |       |  ___|                       | |(_)             | |             ");
    outputwomd("  __| |  ___  | |__  __  __ _ __    ___   __| | _   ___  _ __  | |_   ___  ___ ");
    outputwomd(" / _` | / _ \\ |  __| \\ \\/ /| '_ \\  / _ \\ / _` || | / _ \\| '_ \\ | __| / _ \\/ __|");
    outputwomd("| (_| ||  __/ | |___  >  < | |_) ||  __/| (_| || ||  __/| | | || |_ |  __/\\__ \\");
    outputwomd(" \\__,_| \\___| \\____/ /_/\\_\\| .__/  \\___| \\__,_||_| \\___||_| |_| \\__| \\___||___/");
    outputwomd("                           | |                                                 ");
    outputwomd("                           |_|                                                 ");
    outputwomd("");
    outputwomd("");
    outputwomd("Esta semana se ha liberado el esperado Sistema de Expedientes y se ha trabajado duro ");
    outputwomd("junto con el dpto de Gestión de Calidad para realizar una DEMO REAL del sistema de NC");
    outputwomd("de SOMAJASA, puesto que Calidad Pascual no se han puesto de acuerdo entre ellos");
    outputwomd("para mandarnos un ejemplo REAL");

    outputwomd("");
    outputwomd("Se han pulido fallos hasta conseguir un producto funcional en primera fase:");

    outputwomd("");
    outputwomd("Se ha realizado un gran esfuerzo para incluir un nuevo sistema de formularios de caminos multiples");
    outputwomd("y un sin fin de tipos de campos nuevos para adecuarnos a las necesidades de la DEMO del día 22");
    outputwomd("");
    outputwomd("Puedes reproducir una pequeña demo con el [Command: play expedientes]");


    outputwomd("");

  }else if (a==2){
        outputwomd("");
        outputwomd("");
        outputwomd("        -+ydmMMMMMNdy+-`                                                                            ");
        outputwomd("     :yNMMMMMMMMMMMMMMMNy:`                                                                         ");
        outputwomd("   :dMMMMMMMMMMMMMMMMMMMMMd/                                                                        ");
        outputwomd(" `yMMMMMm/+oo//oydNMMMMMMMMMy`                                                                      ");
        outputwomd("`hMMMMMMMs:MMh.mdo/hMMMMMMMMMd`            `                                    `````               ");
        outputwomd("oMMMMMMMMM`mMM.dMMm-hMMMMMMMMMs     os.    y-                                   dhssyyo`            ");
        outputwomd("NMMMMMMMMM`mMM.dNyMo+MMMMMMMMMN`    yss+`  d:  -///:` `::/ :-///--///-  .////`  My  `/M+`+-+: -+oo:`");
        outputwomd("MMMMMMMMMM`mMM.dd`Mo/MMMMMMMMMM.    y+ /s- d: os.``+y -m-` ho``.mo``-m. .:::ys  Md+++hm-.Md:.oN/-:mh");
        outputwomd("NMMMMMMMMM`mMM.dd`Mo/MMMMMMMMMN`    y+  `oom: y+   -m -h   h:   d-   d-`d:..oh  Mh:::-` .Ms  hN. `hN");
        outputwomd("oMMMMMMMMM`mMM.dN:o//MMMMMMMMMs     o:    -h- `++/+o. .o   o-   s.   s. o+//+o  h+      .h+  `syyyy-");
        outputwomd("`hMMMMMMMM-sNM:oNNdo-mMMMMMMMd`                  ``                      ``                     ``  ");
        outputwomd(" `yMMMMMMMNyoo+/+ooo/+oNMMMMh`                                                                      ");
        outputwomd("   :dMMMMMMMMMMMMMMMMMMMMMm/                                   <b style='color:red'>Herramienta de configuración</b>  ");
        outputwomd("     :yNMMMMMMMMMMMMMMMNy:`                                    <b style='color:red'>de mapas Documentales</b>         ");
        outputwomd("       `-+ydNMMMMMNdyo:`                                                                            ");
        outputwomd("");
        outputwomd("");
        outputwomd(" En este aspecto se ha refactorizado la herramienta de CONFIGURACIÓN DE MAPAS DOCUMENTALES");
        outputwomd(" Dotandola de nuevos filtros para facilitar las busquedas, consensuados con DPTO Gestión de Compliance");
        outputwomd(" Además de miniminando el impacto visual escondiendo todo las evidencias con las que no se está trabajando");        
        outputwomd(" Y dontandola de nuevos mecanismo para minimizar errores, como la imposibilidad de meter una evidencia");
        outputwomd(" que no corresponda a su AMBITO o añadir el tema de las evidencias EQUITATIVAS");
        outputwomd("");


  }else if (a=="3"){
    outputwomd("");
    outputwomd("");
    outputwomd(".-/--::-:.       -+yy+/s/                                                                     ");
    outputwomd(".//::/:---`      :sh++yso-                                                                   ");
    outputwomd(" `:/:-://--`      -yhs/shso:`                                                                ");
    outputwomd("   .//:-:/:-.`     `/shsoshyy:                                                               ");
    outputwomd("    `-:/::///:-.      -shyyhhho`                                                             ");
    outputwomd("      `-//:://:-.       -hhhhhhs`                                                            ");
    outputwomd("        `-/////:.`       -+hhhhh:                                                            ");
    outputwomd("         `//////-.       +/hhyyh:                                                            ");
    outputwomd("          ./////:.      //yhhohy`                                                            ");
    outputwomd("         `.//////.     /yshhyoh-                                                             ");
    outputwomd("        `-://://:     :hhhhh+y/                                                              ");
    outputwomd("       `-:///://`    :hhhhhsy/                                                               ");
    outputwomd("      .-:///-/:`   `+yhhhhsy/                                                                ");
    outputwomd("     -/:///-/:`   `ohhhhhys:                                                                 ");
    outputwomd("    -/////-/-     :hhhhhhy/                                                                  ");
    outputwomd("   -/////:/.      +hhhhhhy`                                                                  ");
    outputwomd("  `/////:/`       +hhhshh/                                                                   ");
    outputwomd("  :////::.        .yshyo+`                                                                   ");
    outputwomd(" .///////`         .``                                      -h/                              ");
    outputwomd(" .///////`                                                  `.`                              ");
    outputwomd(" `///////:`      `shssds  `ohssyy:  /mooshy/osyho` `shooyy` -m:  ohooyy. .yyssd/  /dsosh-    ");
    outputwomd("  .///////:`     :Ms:..:` hm`   +N- /M:  `mm`  :M: `::::oM: -M/  ::::+M+ oM+-.--  -:::/Ns    ");
    outputwomd("   .///////:`     ./oydh.`Ny    :M: /M-   dd   -M: /mo::+M: -M/ :ms::/M+  -+oymy`.dy/::Ns    ");
    outputwomd("    `:///://:`   :No--yN- +No--/my` /M-   dd   -M: sN/-:yM: -M/ +N+-:yM+ om/-:dm`:Ns-:oNs    ");
    outputwomd("      -/////:.    ./++:`   `:++/.   ./`   ::   `/`  -++:`:. -M/  -/+:`:.  -/+/:`  ./+/.:-    ");
    outputwomd("       `..``                                               +hd.                             ");
    outputwomd("");
    outputwomd("");
    outputwomd(" Esta semana para el cliente SOMAJASA, se ha tenido que hacer un script que ha puesto un poco la BBDD");
    outputwomd(" patas arriba. Este script consistía en convertir todas las instalaciones en Centros de Trabajo");
    outputwomd(" y los centros contenedores a su vez convertirlos en SubAreas dentro del esquema de selector de centros");
    outputwomd(" Tal y como suena parace algo ligero, pero en realidad se ha pasado de una estructura de 47 centros");
    outputwomd(" a una, algo más amplia de 311 centros de trabajo, en los cuales se ha repartido la maquinaria y la documentación");
    outputwomd(" de manera automática. ");

    outputwomd("");
    outputwomd(" Cotejada la estructura con JOSE MARíA COMAS, ahora solo que da que la parte de Gestión de Compliance");
    outputwomd(" revise el contenido para determinar que equipos se deben de mover de un sitio a otro.");
    outputwomd("");
    outputwomd("");
    outputwomd("Puedes reproducir una pequeña demo con el [Command: play somajasa]");
    outputwomd("");

  }else if(a==4){
    outputwomd("");
    outputwomd("");
    outputwomd("  `-::-.                                  -/osyyyyo+-`                                               ");
    outputwomd("  :d/..-ym`                              :syyssooossyyy/`                                             ");
    outputwomd("  ym:`   o     ````    `` ``    ````    /yysooooooooooyyo`  `` ```` ````      ````     `````    ````  ");
    outputwomd("  .ymho-`    :o//oh/ -sdh+yd: -o/:+hs` .yysooooooooooooyy/.odd++ohho+osdo   -s+:/sy:  +h//os  :y/:od+ ");
    outputwomd("    ./yddo` :ms///yy- -Nh` . :m-   -/` :yyoooooooooooooyy+ `mm   :Ns   mm  .mh    ym/ sms/.-  /o.`-my ");
    outputwomd("  o`   .yNo oN/       -Ny    oN/       `syyooooooooooosyy- `mm   :Ns   mm  :Nh    +No .-+ydy- -oo//my ");
    outputwomd("  ms-``.sd- .hms::/o``/Nh.`  .hms/:++`  .syysooooooosyys: `-mm.``+Ny.`.mm-``sm+.`.yh. y+.`/m/ dm:-/mh-");
    outputwomd("  -/+////.   `:+o+:` -/++:.   `:+o+:`    `:oyyyyyyyyys/`  ./++/.-/++:`/++/`  -//::-`  .////-  -++/-/o:");
    outputwomd("            ``     `..``      .-:-.`        .-:///:-.`                        `    `` `        `.`  ``");
    outputwomd("  -.``  `./+so/.  `ssyss/--:++yyhyys/``.--:-.:+:.``..-.`--``.-.:---:` `../+++oooo+ossos/:-. `./sysooso");
    outputwomd("  yyss/+syhhhhhyoosyhhhhyyyyhhhhhhhhyssyyyhyyyhyyssyyyyyyyssyyyyyyyysosyyhhhhyhhhhhhhhhhyyy+oyyhhhhhhy");
    outputwomd("  yyhhyhyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhy");
    outputwomd("  yyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhyy");
    outputwomd("  oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
    outputwomd("  ////////////////////////////////////////////////////////////////////////////////////////////////////");
    outputwomd("  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    outputwomd("  oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
    outputwomd("");
    outputwomd("");
    outputwomd(" Se han vuelto a actualizar todos los datos de personal que existen en la plataforma a traves de un Excel");
    outputwomd(" que el cliente nos suministra. Se ha realizado a traves de la herramienta interna que se diseñó dicho uso");
    outputwomd("");
    outputwomd("");
    outputwomd(" ¿¿Cabe el planteamiento de planificar herramienta para producción para que el cliente se autogestione??");
    outputwomd("");

  }else if(a==5){
    outputwomd("    ");
    outputwomd("    ");
    outputwomd("██▄   ██      ▄     ▄   ███   ▄█ ████▄    ▄▄▄▄▄   ▄███▄   █▄▄▄▄     ▄   ▄███▄   █▄▄▄▄ ");
    outputwomd("█  █  █ █      █     █  █  █  ██ █   █   █     ▀▄ █▀   ▀  █  ▄▀      █  █▀   ▀  █  ▄▀ ");
    outputwomd("█   █ █▄▄█ ██   █ █   █ █ ▀ ▄ ██ █   █ ▄  ▀▀▀▀▄   ██▄▄    █▀▀▌  █     █ ██▄▄    █▀▀▌  ");
    outputwomd("█  █  █  █ █ █  █ █   █ █  ▄▀ ▐█ ▀████  ▀▄▄▄▄▀    █▄   ▄▀ █  █   █    █ █▄   ▄▀ █  █  ");
    outputwomd("███▀     █ █  █ █ █▄ ▄█ ███    ▐                  ▀███▀     █     █  █  ▀███▀     █   ");
    outputwomd("        █  █   ██  ▀▀▀                                     ▀       █▐            ▀    ");
    outputwomd("       ▀                                                           ▐                 ");
    outputwomd("");
    outputwomd("");
    outputwomd("Se han automatizado los comandos básicos de gestión y mantenimiento de servidores en PRODUCCIÓN");
    outputwomd("facilintando al resto del equipo el despliegue y la consulta de estados de los distintos servicios");
    outputwomd("alojados en AZURE");
    outputwomd("");
    outputwomd("");

  }else if(a==6){
                                                                                                    
    outputwomd("                  ````````````````````````````````````````````````                         ");
    outputwomd("                  ................................................                         ");
    outputwomd("                  ...........oo++-.-..o/::..-s:.-....-+o..........                         ");
    outputwomd("                  ........../h-..:s+y/s++o/s+h/oo+y:y+so..........                         ");
    outputwomd("` ----------------:::-......-y+///s/y+s++o+s/h/y++h:y/oo.......:::----------------.        ");
    outputwomd(" syyyyyyyyyyyyyyyyyyy+.......-::-.::-------:::--:-:--:--......:yyyyyyyyyyyyyyyyyyyy`       ");
    outputwomd("`syyyyyyyyyyyyyyyyyyy+......................................../yyyyyyyyyyyyyyyyyyyy`       ");
    outputwomd("`syyyy/////++syyyyyyysoooooooooooooooooooooooooooooooooooooooosyyyyyyyyyy+:-sy+oyyy`       ");
    outputwomd("`syyys  `--.``.oyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy-  sysyyyy`       ");
    outputwomd("`syyys  .yyso  `yyysooosyssyyyysooossyyyysoooosyysssyyyysssyyyysoooysssyy-  syyyyyy`       ");
    outputwomd("`syyys  .yyys` `ys:.`....``syo-`....-yys:``....os``:yyys``:yyo-``....`-yy-  syyyyyy`       ");
    outputwomd("`syyys  `//:. `+y- `+sso.  sy:  /osssys` .osssoys  -yyys  -ys` .osso` .yy-  syyyyyy`       ");
    outputwomd("`syyys  `---:+sys  -yyyy:  sys:.``.:oy/  +yyyyyys  -yyys  -y/  +yyyy` .yy-  syyyyyy`       ");
    outputwomd("`syyys  .yyyyyyys` .yyyy-  syyyso+-  o+  :yyyyyys  -yyyo  -y+  :yyys` .yy-  syyyyyy`       ");
    outputwomd("`syyys  .yyyyyyyy/` .::-`  :s+-://- `oy:` -///-oy.  -:-.  -yy-  -/:.` `+y-  syyyyyy`       ");
    outputwomd("`syyyy//+yyyyyyyyyo/:-:+s+//so/::-:+syyyo/:--:/sys+:-:/o//+yyyo/::/os///y+//yyyyyyy`       ");
    outputwomd("`syyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy`       ");
    outputwomd("`syyyyyyyyyyyyyyyyyyyssssssssssssssssssssssssssssssssssssssssssyyyyyyyyyyyyyyyyyyyy`       ");
    outputwomd(" syyyyyyyyyyyyyyyyyyy+----------------------------------------/yyyyyyyyyyyyyyyyyyyy`       ");
    outputwomd(" syyyyyyyyyyyyyyyyyyy+......................................../yyyyyyyyyyyyyyyyyyyy`       ");
    outputwomd(" .----------------///-........................................-://:----------------        ");
    outputwomd("                  ................................................                         ");
    outputwomd("                  ................................................                         ");
    outputwomd("                  ................................................                         ");
    outputwomd("                  ................................................                         ");
    outputwomd("");
    outputwomd("");
    outputwomd("Bajo petición y para contribuir a la subida del grado de cumplimiento de los centros de ARANDA");
    outputwomd("hemos abilitado una nueva manera de catalogar DOCUMENTOS dentro de NormaPRO");
    outputwomd("A partir de ahora se pueden alojar documentos solo diciendo la ubicación de los mismos. ");
    outputwomd("Ej: Indicando que el documento se encuentra alojado en SAP");                                                                 
    outputwomd("");
    outputwomd("");
    outputwomd("Dicha funcionalidad se está probando y quedará puesta en producción el transcurso del día ");
    outputwomd("");
    outputwomd("Puedes reproducir una pequeña demo con el [Command: play ubicacion]");
    outputwomd("");

  }else if(a==7){
    outputwomd("    ");
    outputwomd("    ");
    outputwomd("$$$$$$\\                                                        $$\\                                         ")
    outputwomd("$$  __$$\\                                                       \\__|                                        ")
    outputwomd("$$ /  \\__| $$$$$$\\   $$$$$$\\  $$$$$$\\$$$$\\   $$$$$$\\   $$$$$$$\\ $$\\  $$$$$$\\  $$$$$$$\\   $$$$$$\\   $$$$$$$\\ ")
    outputwomd("$$$$\\     $$  __$$\\ $$  __$$\\ $$  _$$  _$$\\  \\____$$\\ $$  _____|$$ |$$  __$$\\ $$  __$$\\ $$  __$$\\ $$  _____|")
    outputwomd("$$  _|    $$ /  $$ |$$ |  \\__|$$ / $$ / $$ | $$$$$$$ |$$ /      $$ |$$ /  $$ |$$ |  $$ |$$$$$$$$ |\\$$$$$$\\  ")
    outputwomd("$$ |      $$ |  $$ |$$ |      $$ | $$ | $$ |$$  __$$ |$$ |      $$ |$$ |  $$ |$$ |  $$ |$$   ____| \\____$$\\ ")
    outputwomd("$$ |      \\$$$$$$  |$$ |      $$ | $$ | $$ |\\$$$$$$$ |\\$$$$$$$\\ $$ |\\$$$$$$  |$$ |  $$ |\\$$$$$$$\\ $$$$$$$  |")
    outputwomd("\\__|       \\______/ \\__|      \\__| \\__| \\__| \\_______| \\_______|\\__| \\______/ \\__|  \\__| \\_______|\\_______/ ")
    outputwomd("");
    outputwomd("");
    outputwomd("Esta semana hemos seguido con el curso de nuestras formaciones: ");
    outputwomd("* Se ha dado una formación sobre el administrador de normativa a nuestras dos incorporaciones");
    outputwomd("* Se han formado también en la utilización del AudirePRO 2");
    outputwomd("");
    outputwomd("");
  }else if(a==8){
    outputwomd("    ");
    outputwomd("    ");
    outputwomd("$$$$$$\\                     $$\\       $$\\                               $$\\                     ");
    outputwomd("\\_$$  _|                    \\__|      $$ |                              \\__|                    ");
    outputwomd("  $$ |  $$$$$$$\\   $$$$$$$\\ $$\\  $$$$$$$ | $$$$$$\\  $$$$$$$\\   $$$$$$$\\ $$\\  $$$$$$\\   $$$$$$$\\ ");
    outputwomd("  $$ |  $$  __$$\\ $$  _____|$$ |$$  __$$ |$$  __$$\\ $$  __$$\\ $$  _____|$$ | \\____$$\\ $$  _____|");
    outputwomd("  $$ |  $$ |  $$ |$$ /      $$ |$$ /  $$ |$$$$$$$$ |$$ |  $$ |$$ /      $$ | $$$$$$$ |\\$$$$$$\\  ");
    outputwomd("  $$ |  $$ |  $$ |$$ |      $$ |$$ |  $$ |$$   ____|$$ |  $$ |$$ |      $$ |$$  __$$ | \\____$$\\ ");
    outputwomd("$$$$$$\\ $$ |  $$ |\\$$$$$$$\\ $$ |\\$$$$$$$ |\\$$$$$$$\\ $$ |  $$ |\\$$$$$$$\\ $$ |\\$$$$$$$ |$$$$$$$  |");
    outputwomd("\\______|\\__|  \\__| \\_______|\\__| \\_______| \\_______|\\__|  \\__| \\_______|\\__| \\_______|\\_______/ ");
    outputwomd("");
    outputwomd("");
    outputwomd("Esta semana se han resuelto incidencias leves de caracter de datos");
    outputwomd("");
    outputwomd("Se nos han vuelto a notificar un caso sobre la aceptación de EVIDENCIAS");
    outputwomd("Esta incidencia está resuelta en la versión 4.1.3.15. Los usuarios no llegan a hacer CLICK en el aceptar");
    outputwomd("");
  }


}

function future(){
    outputwomd("");
    outputwomd("");
    outputwomd("  .o.                  .o8                              .o8                                                                            ");
    outputwomd("  .888.                \"888                             \"888                                                                            ");
    outputwomd(" .8\"888.           .oooo888   .ooooo.  ooo. .oo.    .oooo888   .ooooo.       oooo    ooo  .oooo.   ooo. .oo.  .oo.    .ooooo.   .oooo.o ");
    outputwomd(".8' `888.         d88' `888  d88' `88b `888P\"Y88b  d88' `888  d88' `88b       `88.  .8'  `P  )88b  `888P\"Y88bP\"Y88b  d88' `88b d88(  \"8 ");
    outputwomd(".88ooo8888.        888   888  888   888  888   888  888   888  888ooo888        `88..8'    .oP\"888   888   888   888  888   888 `\"Y88b.  ");
    outputwomd(".8'     `888.       888   888  888   888  888   888  888   888  888    .o         `888'    d8(  888   888   888   888  888   888 o.  )88b ");
    outputwomd("o88o     o8888o      `Y8bod88P\" `Y8bod8P' o888o o888o `Y8bod88P\" `Y8bod8P'          `8'     `Y888\"\"8o o888o o888o o888o `Y8bod8P' 8\"\"888P' ");
    outputwomd("");
    outputwomd("");                                                                                                                      
    outputwomd(" Para esta semana tenemos planificado lo siguiente:"); 
    outputwomd(" 1.- Comenzar con la FASE 1 del canal de Denuncias. Este nuevo aplicativo nos permitirá montar portales web externos a normaPRO para recibir información"); 
    outputwomd(" 2.- Refactorizar la herramienta de asignación de TAREAS haciendola BIdireccional: De las evidencias a los usuarios y de los Usuarios a las Evidencias"); 
    outputwomd(" 3.- Hemos comenzado una nueva metodología de funcionamiento. Intentando acercarnos todo lo posible a técnicas de DESARROLLO AGIL e Integración CONTINUA"); 
    outputwomd(" 4.- Necesitamos de todos feedback sobre la herramienta de Expedientes para mejorarla todo lo posible"); 
    outputwomd(" 5.- Solucionar alguna incidencia de caracter urgente");
    outputwomd(" 6.- Publicar novedades en PRODUCCIÓN");  
    outputwomd(" 7.- Necesitamos del Dpto De Calidad que presione a PASCUAL para poder realizar una DEMO más completa para ellos lo antes posible")
                                                                                                                                     
}

function bye(){
    outputwomd(" ");
    outputwomd("██████╗ ██████╗  █████╗  ██████╗██╗ █████╗ ███████╗     █████╗     ███╗   ███╗██╗    ███████╗ ██████╗ ██╗   ██╗██╗██████╗  ██████╗ ");
    outputwomd("██╔════╝ ██╔══██╗██╔══██╗██╔════╝██║██╔══██╗██╔════╝    ██╔══██╗    ████╗ ████║██║    ██╔════╝██╔═══██╗██║   ██║██║██╔══██╗██╔═══██╗");
    outputwomd("██║  ███╗██████╔╝███████║██║     ██║███████║███████╗    ███████║    ██╔████╔██║██║    █████╗  ██║   ██║██║   ██║██║██████╔╝██║   ██║");
    outputwomd("██║   ██║██╔══██╗██╔══██║██║     ██║██╔══██║╚════██║    ██╔══██║    ██║╚██╔╝██║██║    ██╔══╝  ██║▄▄ ██║██║   ██║██║██╔═══╝ ██║   ██║");
    outputwomd("╚██████╔╝██║  ██║██║  ██║╚██████╗██║██║  ██║███████║    ██║  ██║    ██║ ╚═╝ ██║██║    ███████╗╚██████╔╝╚██████╔╝██║██║     ╚██████╔");
    outputwomd(" ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝    ╚═╝     ╚═╝╚═╝    ╚══════╝ ╚══▀▀═╝  ╚═════╝ ╚═╝╚═╝      ╚═════");
    outputwomd("                                                                                                                       ");
    outputwomd(" ");
    outputwomd(" Agradecer a todo mi equipo, el buen trabajo diario que realizan. Sin ellos nada de esto se podría llevar a cabo.");
    outputwomd(" ");
    outputwomd(" ");
    outputwomd("         ██╗   ██╗    ██╗  ██╗ █████╗ ███████╗████████╗ █████╗     ██╗     ██╗   ██╗███████╗ ██████╗  ██████╗ ")
    outputwomd("         ╚██╗ ██╔╝    ██║  ██║██╔══██╗██╔════╝╚══██╔══╝██╔══██╗    ██║     ██║   ██║██╔════╝██╔════╝ ██╔═══██╗")
    outputwomd("          ╚████╔╝     ███████║███████║███████╗   ██║   ███████║    ██║     ██║   ██║█████╗  ██║  ███╗██║   ██║")
    outputwomd("           ╚██╔╝      ██╔══██║██╔══██║╚════██║   ██║   ██╔══██║    ██║     ██║   ██║██╔══╝  ██║   ██║██║   ██║")
    outputwomd("██╗██╗██╗   ██║       ██║  ██║██║  ██║███████║   ██║   ██║  ██║    ███████╗╚██████╔╝███████╗╚██████╔╝╚██████╔╝")
    outputwomd("╚═╝╚═╝╚═╝   ╚═╝       ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝    ╚══════╝ ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ ")
                                                                                                                                   
}



function help (cmd) {
  if (cmd) {
    let result = ""
    let usage = cmds[cmd].usage
    let doc = cmds[cmd].doc
    result += (typeof usage === 'function') ? usage() : usage
    result += "\n"
    result += (typeof doc === 'function') ? doc() : doc
    return result
  } else {
    let result = "**Commands:**\n\n"
    print = Object.keys(cmds)
    for (let p of print) {
      result += "- " + p + "\n"
    }
    return result
  }
}
help.usage = () => "help [command]"
help.doc = () => "Without an argument, lists available commands. If used with an argument displays the usage & docs for the command."

// Set Focus to Input
$('.console').click(function() {
  $('.console-input').focus()
})

// Display input to Console
function input() {
  var cmd = $('.console-input').val()
  $("#outputs").append("<div class='output-cmd'>" + cmd + "</div>")
  $('.console-input').val("")
  autosize.update($('textarea'))
  $("html, body").animate({
    scrollTop: $(document).height()
  }, 300);
  return cmd
}

// Output to Console
function output(print) {
  if (!window.md) {
    window.md = window.markdownit({
      linkify: true,
      breaks: true
    })
  }
  $("#outputs").append(window.md.render(print))  
  $(".console").scrollTop($('.console-inner').height());
}

function outputwomd(print) {

  $("#outputs").append('<span class="fig">'+print+'</span><br>');
  $(".console").scrollTop($('.console-inner').height());
}

// Break Value
var newLine = "<br/> &nbsp;";

autosize($('textarea'))

var cmdHistory = []
var cursor = -1

// Get User Command
$('.console-input').on('keydown', function(event) {
  if (event.which === 38) {
    // Up Arrow
    cursor = Math.min(++cursor, cmdHistory.length - 1)
    $('.console-input').val(cmdHistory[cursor])
  } else if (event.which === 40) {
    // Down Arrow
    cursor = Math.max(--cursor, -1)
    if (cursor === -1) {
      $('.console-input').val('')
    } else {
      $('.console-input').val(cmdHistory[cursor])
    }
  } else if (event.which === 13) {
    event.preventDefault();
    cursor = -1
    let text = input()
    let args = getTokens(text)[0]
    let cmd = args.shift().value
    args = args.filter(x => x.type !== 'whitespace').map(x => x.value)
    cmdHistory.unshift(text)
    if (typeof cmds[cmd] === 'function') {
      let result = cmds[cmd](...args)
      if (result === void(0)) {
        // output nothing
      } else if (result instanceof Promise) {
        result.then(output)
      } else {
        console.log(result)
        output(result)
      }
    } else if (cmd.trim() === '') {
      output('')
    } else {
      output("Command not found: `" + cmd + "`")
      output("Use 'help' for list of commands.")
    }
  }
});

//ParticlesBG
particlesJS('particles-js',{'particles':{'number':{'value':50},'color':{'value':'#ffffff'},'shape':{'type':'triangle','polygon':{'nb_sides':5}},'opacity':{'value':0.06,'random':false},'size':{'value':11,'random':true},'line_linked':{'enable':true,'distance':150,'color':'#ffffff','opacity':0.4,'width':1},'move':{'enable':true,'speed':4,'direction':'none','random':false,'straight':false,'out_mode':'out','bounce':false}},'interactivity':{'detect_on':'canvas','events':{'onhover':{'enable':false},'onclick':{'enable':true,'mode':'push'},'resize':true},'modes':{'push':{'particles_nb':4}}},'retina_detect':true},function(){});
