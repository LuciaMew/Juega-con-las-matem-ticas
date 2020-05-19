/*
	Autoras: Araceli Lucía Rebollo Dominguez
	Asignatura: Usabilidad y Accesibilidad - Practica 3
				3er curso del grado de Ingenieria Multimedia, Universidad de Alicante
	Año: 2019
*/

/* VARIABLES GLOBALES */
var ventana;
var sumas;
var sumaActual;
var limitesReglaActual;
var vecRegla;
var tiempoSeg;
var fallosRegla;
var fallosSuma;
var respuestaCorrectaActual;
var moverPerro;
var focoPerro;
var posRes1;
var posRes2;
var posRes3;
var posRes4;
var limitesRegla = {
    "1": {
        "min": 1,
        "max": 10,
    },
    "2": {
        "min": 2,
        "max": 11,
    },
    "3": {
        "min": 3,
        "max": 12,
    },
    "4": {
        "min": 4,
        "max": 13,
    },
    "5": {
        "min": 5,
        "max": 14,
    },
    "6": {
        "min": 6,
        "max": 15,
    },
    "7": {
        "min": 7,
        "max": 16,
    },
    "8": {
        "min": 8,
        "max": 17,
    },
    "9": {
        "min": 9,
        "max": 18,
    },
    "10": {
        "min": 10,
        "max": 19,
    },
    "11": {
        "min": 11,
        "max": 20,
    },
};

$(document).ready(function(){
	/* SUMAR Y RESTAR - Lucia */

    //TECLADO parte de la Regla
    $("#draggablePerro").focusin(function(){
        focoPerro = true;
        $("#draggablePerro").find("img").effect("highlight", 1000);
    });
    $(document).keydown(function (tecla) {
        if(moverPerro && focoPerro){
            if (tecla.keyCode == 37) { //flecha izquierda <-
                //console.log("me muevooooooo");
                //console.log(event.which);
                if($("#draggablePerro").position().left-$("#droppablePata2").position().left >= $("#droppablePata1").position().left){
                    $("#draggablePerro").css("left", $("#draggablePerro").position().left-$("#droppablePata2").position().left);
                }
            }
            if (tecla.keyCode == 39) { //flecha derecha ->
                //console.log("me muevooooooo");
                //console.log(event.which);
                if($("#draggablePerro").position().left+$("#droppablePata2").position().left <= $("#droppablePata10").position().left){
                    $("#draggablePerro").css("left", $("#draggablePerro").position().left+$("#droppablePata2").position().left);
                }
            }
            if (tecla.keyCode == 32) { //espacio 
                //console.log(event.which);
                //console.log("dejo de moverme");
                aciertaRegla();
                sleep(300).then(() => {
                    //console.log("espera");
                    $("#draggableRes1").focus();
                });
                //$("#draggableRes1").select();
            }
        }
        tecla = null;     
    });

    //TECLADO parte de la Suma
    $("#draggableRes1").focusin(function(){
        //console.log("foco1");
        $("#draggableRes1").find("img").effect("highlight", 1000);
        if(!moverPerro) {
            $("#draggableRes1").keypress(function (tec) {
                let teclaSuma = event.which || event.keyCode;
                //console.log(teclaSuma);
                if(teclaSuma == 32) { //espacio 
                    if(respuestaCorrectaActual != 1) {
                        fallosSuma++;
                    } else {
                        //console.log("foco res1");
                        let posLeft = $("#droppableRes").position().left-$("#draggableRes1").position().left;
                        let posTop = $("#droppableRes").position().top-$("#draggableRes1").position().top;
                        $("#draggableRes1").animate({left: posLeft, top: posTop}, "slow");
                        sleep(900).then(() => {
                            aciertaSumaTeclado();
                        }); 
                    }
                }
            });
        }
    });
    $("#draggableRes2").focusin(function(){
        //console.log("foco2");
        $("#draggableRes2").find("img").effect("highlight", 1000);
        if(!moverPerro) {
            $("#draggableRes2").keypress(function (tec) {
                let teclaSuma = event.which || event.keyCode;
                //console.log(teclaSuma);
                if(teclaSuma == 32) { //espacio 
                    if(respuestaCorrectaActual != 2) {
                        fallosSuma++;
                    } else {
                        //console.log("foco res2");
                        let posLeft = $("#droppableRes").position().left-$("#draggableRes2").position().left;
                        let posTop = $("#droppableRes").position().top-$("#draggableRes2").position().top;
                        $("#draggableRes2").animate({left: posLeft, top: posTop}, "slow");
                        sleep(900).then(() => {
                            aciertaSumaTeclado();
                        }); 
                    }
                }
            });
        }
    });
    $("#draggableRes3").focusin(function(){
        //console.log("foco3");
        $("#draggableRes3").find("img").effect("highlight", 1000);
        if(!moverPerro) {
            $("#draggableRes3").keypress(function (tec) {
                let teclaSuma = event.which || event.keyCode;
                //console.log(teclaSuma);
                if(teclaSuma == 32) { //espacio 
                    if(respuestaCorrectaActual != 3) {
                        fallosSuma++;
                    } else {
                        //console.log("foco res3");
                        let posLeft = $("#droppableRes").position().left-$("#draggableRes3").position().left;
                        let posTop = $("#droppableRes").position().top-$("#draggableRes3").position().top;
                        $("#draggableRes3").animate({left: posLeft, top: posTop}, "slow");
                        sleep(900).then(() => {
                            aciertaSumaTeclado();
                        }); 
                    }
                }
            });
        }  
    });
    $("#draggableRes4").focusin(function(){
        //console.log("foco4");
        $("#draggableRes4").find("img").effect("highlight", 1000);
        if(!moverPerro) {
            $("#draggableRes4").keypress(function (tec) {
                let teclaSuma = event.which || event.keyCode;
                //console.log(teclaSuma);
                if(teclaSuma == 32) { //espacio 
                    if(respuestaCorrectaActual != 4) {
                        fallosSuma++;
                    } else {
                        //console.log("foco res4");
                        let posLeft = $("#droppableRes").position().left-$("#draggableRes4").position().left;
                        let posTop = $("#droppableRes").position().top-$("#draggableRes4").position().top;
                        $("#draggableRes4").animate({left: posLeft, top: posTop}, "slow");
                        sleep(900).then(() => {
                            aciertaSumaTeclado();
                        }); 
                    }
                }
            });
        } 
    });

    //Dragg and Drop parte de la Regla
    $( "#draggablePerro" ).draggable({
        containment: "#containment-wrapper",
        scroll: false,
        axis: "x",
        snap: ".ui-widget-header",
        snapMode: "outer",
        start: function() {
            //console.log("empiezo a moverme");
        },
        drag: function() {
            //console.log("dragg");
        },
        stop: function() {
            aciertaRegla();
        }
    });

    //Dragg and Drop parte de la Suma
    // En principio no estan disponibles los resultados de la suma para arrastrarlos
    $( "#draggableRes1" ).draggable({
        containment: "#containment-wrapper",
        revert: true,
        snap: ".ui-widget-header",
        snapMode: "outer",
        stop: function() {
            if(respuestaCorrectaActual != 1) {
                fallosSuma++;
            }            
        }
    });
    $( "#draggableRes2" ).draggable({
        containment: "#containment-wrapper",
        revert: true,
        snap: ".ui-widget-header",
        snapMode: "outer",
        stop: function() {
            if(respuestaCorrectaActual != 2) {
                fallosSuma++;
            }  
        }
    });
    $( "#draggableRes3" ).draggable({
        containment: "#containment-wrapper",
        revert: true,
        snap: ".ui-widget-header",
        snapMode: "outer",
        stop: function() {
            if(respuestaCorrectaActual != 3) {
                fallosSuma++;
            }  
        }
    });
    $( "#draggableRes4" ).draggable({
        containment: "#containment-wrapper",
        revert: true,
        snap: ".ui-widget-header",
        snapMode: "outer",
        stop: function() {
            if(respuestaCorrectaActual != 4) {
                fallosSuma++;
            }  
        }
    });
    $( "#droppableRes").droppable({
        drop: function( event, ui ) {
            //console.log(event);
            //console.log(ui);
            //console.log(event.target.id);
            let resFin = event.target.id;
            //console.log(resFin);
            $("#droppableRes").draggable({ disabled: true });
            $("#droppableRes").find("img").attr("src", "images/Patrulla Canina/checked.png");
            $("#droppableRes").css("opacity", 0.9);
            $("#droppableRes").css("position", "");
            sumas[sumaActual]["tiempo"] = tiempoSeg;
            sumas[sumaActual]["tiempoSuma"] = tiempoSeg - sumas[sumaActual].tiempoRegla; 
            sumas[sumaActual]["fallosRegla"] = fallosRegla;
            sumas[sumaActual]["fallosSuma"] = fallosSuma;
            //console.log(JSON.stringify(sumas));
            sessionStorage.setItem(sumaActual, JSON.stringify(sumas[sumaActual]));
            smsJuegoGanado();
            /*
            sleep(8000).then(() => { 
                ocultarSmsFinalizarJuego();
                anyadirSumaNueva();
            });
            */
        }
    });
});


/* SUMAR Y RESTAR - Lucia */
function aciertaRegla() {
    //console.log("termino de moverme");
    let pos = $("#draggablePerro").position();
    /*console.log("X: " + pos.left);
    console.log("Y: " + pos.top);
    console.log("");*/
    $.each(vecRegla, function(codigo, datos){
        /*console.log(codigo);
        console.log(datos);*/
        if(Math.floor(pos.left) == Math.floor(datos.x) )
        {
            //console.log(datos.contenido);
            if(datos.contenido == sumas[sumaActual].resultado) {
                $("#draggableRes1").draggable({ disabled: false });
                $("#draggableRes2").draggable({ disabled: false });
                $("#draggableRes3").draggable({ disabled: false });
                $("#draggableRes4").draggable({ disabled: false });
                $("#draggableRes1").css("opacity", 1);
                $("#draggableRes2").css("opacity", 1);
                $("#draggableRes3").css("opacity", 1);
                $("#draggableRes4").css("opacity", 1);
                let posCorrectaRan = Math.floor(Math.random() * 4) + 1;
                let [src1, src2, src3] =  generarTresNumAleatoriosResultados(sumas[sumaActual].resultado);
                let src = "images/Patrulla Canina/resultados/";
                switch(posCorrectaRan) {
                    case 1:
                        respuestaCorrectaActual = 1;
                        $("#droppableRes").droppable({ accept: "#draggableRes1" });
                        $("#draggableRes1").draggable({ revert: false });
                        $("#draggableRes1").find("img").attr("src", src + "" + sumas[sumaActual].resultado +".png");
                        $("#draggableRes2").find("img").attr("src", src + "" + src1 +".png");
                        $("#draggableRes3").find("img").attr("src", src + "" + src2 +".png");
                        $("#draggableRes4").find("img").attr("src", src + "" + src3 +".png");
                        break;
                    case 2:
                        respuestaCorrectaActual = 2;
                        $("#droppableRes").droppable({ accept: "#draggableRes2" });
                        $("#draggableRes2").draggable({ revert: false });
                        $("#draggableRes1").find("img").attr("src", src + "" + src1 +".png");
                        $("#draggableRes2").find("img").attr("src", src + "" + sumas[sumaActual].resultado +".png");
                        $("#draggableRes3").find("img").attr("src", src + "" + src2 +".png");
                        $("#draggableRes4").find("img").attr("src", src + "" + src3 +".png");
                        break;
                    case 3:
                        respuestaCorrectaActual = 3;
                        $("#droppableRes").droppable({ accept: "#draggableRes3" });
                        $("#draggableRes3").draggable({ revert: false });
                        $("#draggableRes1").find("img").attr("src", src + "" + src1 +".png");
                        $("#draggableRes2").find("img").attr("src", src + "" + src2 +".png");
                        $("#draggableRes3").find("img").attr("src", src + "" + sumas[sumaActual].resultado +".png");
                        $("#draggableRes4").find("img").attr("src", src + "" + src3 +".png");
                        break;
                    case 4:
                        respuestaCorrectaActual = 4;
                        $("#droppableRes").droppable({ accept: "#draggableRes4" });
                        $("#draggableRes4").draggable({ revert: false });
                        $("#draggableRes1").find("img").attr("src", src + "" + src1 +".png");
                        $("#draggableRes2").find("img").attr("src", src + "" + src2 +".png");
                        $("#draggableRes3").find("img").attr("src", src + "" + src3 +".png");
                        $("#draggableRes4").find("img").attr("src", src + "" + sumas[sumaActual].resultado +".png");
                        break;
                    default:
                        break;
                }
                $("#draggableRes1").attr("tabindex", "0");
                $("#draggableRes2").attr("tabindex", "0");
                $("#draggableRes3").attr("tabindex", "0");
                $("#draggableRes4").attr("tabindex", "0");
                $("#draggablePerro").attr("tabindex", "-1");
                $("#draggablePerro").draggable({ disabled: true });
                $("#draggablePerro").find("img").attr("src", "images/Patrulla Canina/checked.png");
                moverPerro = false;
                focoPerro = false;
                $("#draggablePerro").css("opacity", 0.9);
                sumas[sumaActual]["tiempoRegla"] = tiempoSeg; 
            } else {
                fallosRegla++;
            }
        }
    });
}

function aciertaSumaTeclado() {
    //console.log("mover fichaaaa");
    $("#droppableRes").draggable({ disabled: true });
    $("#droppableRes").find("img").attr("src", "images/Patrulla Canina/checked.png");
    $("#droppableRes").css("opacity", 0.9);
    $("#droppableRes").css("position", "");
    sumas[sumaActual]["tiempo"] = tiempoSeg;
    sumas[sumaActual]["tiempoSuma"] = tiempoSeg - sumas[sumaActual].tiempoRegla; 
    sumas[sumaActual]["fallosRegla"] = fallosRegla;
    sumas[sumaActual]["fallosSuma"] = fallosSuma;
    sessionStorage.setItem(sumaActual, JSON.stringify(sumas[sumaActual]));
    sleep(1500).then(() => {
        //Reseteo las posiciones iniciales de los posibles resultados
        $("#draggableRes1").animate({left: "0px", top: "0px"}, 0.01);
        $("#draggableRes2").animate({left: "0px", top: "0px"}, 0.01); 
        $("#draggableRes3").animate({left: "0px", top: "0px"}, 0.01); 
        $("#draggableRes4").animate({left: "0px", top: "0px"}, 0.01);
        smsJuegoGanado();
        $("#draggableRes1").attr("tabindex", "-1");
        $("#draggableRes2").attr("tabindex", "-1");
        $("#draggableRes3").attr("tabindex", "-1");
        $("#draggableRes4").attr("tabindex", "-1");
        $("#draggablePerro").attr("tabindex", "-1");         
        sleep(50).then(() => {
            //console.log("espera");
            $("#bttonSigSuma").focus();
        }); 
    });
       
}

function prepararJuego(){
    sessionStorage.clear();
    let [suma1, suma2] =  generarSuma();

    sumas = [
        {
            "sumando1": suma1,
            "sumando2": suma2,
            "resultado": suma1+suma2
        }
    ];
    sumaActual = 0;
    //console.log("Sumas: ");
    //console.log(sumas);

    $("#sum1").html(suma1);
    $("#sum2").html(suma2);

    //Cambio la foto de los perros a un perro aleatorio
    let perroAudio = Math.floor(Math.random() * 8) + 1;
    let perroRegla = Math.floor(Math.random() * 8) + 1;
    $("#draggablePerro").find("img").attr("src", "images/Patrulla Canina/personajes/"+perroRegla+".png");
    $(".audio").find("img").attr("src", "images/Patrulla Canina/personajes/"+perroAudio+".jpg");
    
    let numRegla = limitesReglaActual[0].min;
    let posPerrito = -1;
    //console.log(limitesReglaActual[0]);
    for(let i=1; i <= limitesReglaActual[0].max ; i++) {
        let id = "#pata"+i;
        $(id).html(numRegla);

        if(numRegla == suma1) {
            posPerrito = limitesReglaActual[0].min-suma1;
            if(posPerrito < 0 ) { posPerrito*=(-1); }
            //posPerrito = $(id).offset().left;
        }
        numRegla++;
    }
    //console.log(posPerrito);
    /* Muevo el perro al primer sumando que es la posicion que tiene que sumar para llegar a esa posicion
    (posPerrito) por el tamaño de cada pata, que lo se con la posicion x (left) de la 2a pata de la regla */
    $("#draggablePerro").css("left", posPerrito*$("#droppablePata2").position().left);

    /* Guardamos los datos que tenemos de la regla una vez generada */
    vecRegla = {
        "0": {
            "contenido": $("#droppablePata1").find("p").text(),
            "posicion": $("#droppablePata1").position(),
            "x": $("#droppablePata1").position().left,
            "y": $("#droppablePata1").position().top
        },
        "1": {
            "contenido": $("#droppablePata2").find("p").text(),
            "posicion": $("#droppablePata2").position(),
            "x": $("#droppablePata2").position().left,
            "y": $("#droppablePata2").position().top
        },
        "2": {
            "contenido": $("#droppablePata3").find("p").text(),
            "posicion": $("#droppablePata3").position(),
            "x": $("#droppablePata3").position().left,
            "y": $("#droppablePata3").position().top
        },
        "3": {
            "contenido": $("#droppablePata4").find("p").text(),
            "posicion": $("#droppablePata4").position(),
            "x": $("#droppablePata4").position().left,
            "y": $("#droppablePata4").position().top
        },
        "4": {
            "contenido": $("#droppablePata5").find("p").text(),
            "posicion": $("#droppablePata5").position(),
            "x": $("#droppablePata5").position().left,
            "y": $("#droppablePata5").position().top
        },
        "5": {
            "contenido": $("#droppablePata6").find("p").text(),
            "posicion": $("#droppablePata6").position(),
            "x": $("#droppablePata6").position().left,
            "y": $("#droppablePata6").position().top
        },
        "6": {
            "contenido": $("#droppablePata7").find("p").text(),
            "posicion": $("#droppablePata7").position(),
            "x": $("#droppablePata7").position().left,
            "y": $("#droppablePata7").position().top
        },
        "7": {
            "contenido": $("#droppablePata8").find("p").text(),
            "posicion": $("#droppablePata8").position(),
            "x": $("#droppablePata8").position().left,
            "y": $("#droppablePata8").position().top
        },
        "8": {
            "contenido": $("#droppablePata9").find("p").text(),
            "posicion": $("#droppablePata9").position(),
            "x": $("#droppablePata9").position().left,
            "y": $("#droppablePata9").position().top
        },
        "9": {
            "contenido": $("#droppablePata10").find("p").text(),
            "posicion": $("#droppablePata10").position(),
            "x": $("#droppablePata10").position().left,
            "y": $("#droppablePata10").position().top
        },
    };
    //console.log(vecRegla);

    $("#draggableRes1").draggable({ disabled: true });
    $("#draggableRes2").draggable({ disabled: true });
    $("#draggableRes3").draggable({ disabled: true });
    $("#draggableRes4").draggable({ disabled: true });
    $("#draggableRes1").css("opacity", 0.5);
    $("#draggableRes2").css("opacity", 0.5);
    $("#draggableRes3").css("opacity", 0.5);
    $("#draggableRes4").css("opacity", 0.5);

    posRes1 = $("#draggableRes1").position();
    posRes2 = $("#draggableRes2").position();
    posRes3 = $("#draggableRes3").position();
    posRes4 = $("#draggableRes4").position();

    //Pongo el tiempo en marcha
    tiempoSeg = 0;
    fallosRegla = 0;
    fallosSuma = 0;
    tiempo();
    respuestaCorrectaActual = 0;
    moverPerro = true;
    focoPerro = false;
}

function generarSuma() {
    let suma1 = 21;
    let suma2 = 21;
    while(suma1+suma2 > 20) {
        suma1 = Math.floor(Math.random() * 20) + 1; // int random entre 1 y 20
        $.each(limitesRegla, function(codigo, datos){
            //console.log(codigo);
            //console.log(datos);
            if( suma1 >= datos.min && suma1 <=datos.max ) {
                /* Genero el segundo sumando entre 1 y 9 para no pasarme del
                numero maximo de elementos que puede haber en la regla (10) */
                suma2 = Math.floor(Math.random() * 9) + 1;
                limitesReglaActual = [
                    {
                        "min": datos.min,
                        "max": datos.max
                    }
                ];
            }
        });
    }
    /*
    console.log(suma1);
    console.log(suma2);
    console.log(suma1+suma2);
    console.log("--------------");
    */
    let res = [suma1, suma2];
    return res;
}

function anyadirSumaNueva() {
    let [suma1, suma2] =  generarSuma();
    let sumaNuevaAnyadida = false;
    let sumaHecha = false;
    while(!sumaNuevaAnyadida) {
        $.each(sumas, function(codigo, datos) {
            //console.log(codigo);
            //console.log(datos);
            //console.log("-----------------------");
            if( (suma1 == datos.sumando1 && suma2 == datos.sumando2) || (suma2 == datos.sumando1 && suma1 == datos.sumando2) ) {
                sumaHecha = true;
            }
        });
        if(sumaHecha) {
            [suma1, suma2] =  generarSuma();
            sumaHecha = false;
        } else {
            sumas.push({
                "sumando1": suma1,
                "sumando2": suma2,
                "resultado": suma1+suma2
            });
            sumaNuevaAnyadida = true;
            sumaActual++;
        }
    }
    //console.log("Sumas: ");
    //console.log(sumas);
    //console.log(sumaActual);
    $("#sum1").html(suma1);
    $("#sum2").html(suma2);

    //Cambio la foto de los perros a un perro aleatorio
    let perroAudio = Math.floor(Math.random() * 8) + 1;
    let perroRegla = Math.floor(Math.random() * 8) + 1;
    $("#draggablePerro").find("img").attr("src", "images/Patrulla Canina/personajes/"+perroRegla+".png");
    $(".audio").find("img").attr("src", "images/Patrulla Canina/personajes/"+perroAudio+".jpg");
    
    let numRegla = limitesReglaActual[0].min;
    let posPerrito = -1;
    //console.log(limitesReglaActual[0]);
    for(let i=1; i <= limitesReglaActual[0].max ; i++) {
        let id = "#pata"+i;
        $(id).html(numRegla);

        if(numRegla == suma1) {
            posPerrito = limitesReglaActual[0].min-suma1;
            if(posPerrito < 0 ) { posPerrito*=(-1); }
            //posPerrito = $(id).offset().left;
        }
        numRegla++;
    }
    //console.log(posPerrito);
    /* Muevo el perro al primer sumando que es la posicion que tiene que sumar para llegar a esa posicion
    (posPerrito) por el tamaño de cada pata, que lo se con la posicion x (left) de la 2a pata de la regla */
    $("#draggablePerro").draggable({ disabled: false });
    $("#draggablePerro").css("opacity", 1);
    $("#draggablePerro").css("left", posPerrito*$("#droppablePata2").position().left);

    /* Guardamos los datos que tenemos de la regla una vez generada */
    vecRegla = {
        "0": {
            "contenido": $("#droppablePata1").find("p").text(),
            "posicion": $("#droppablePata1").position(),
            "x": $("#droppablePata1").position().left,
            "y": $("#droppablePata1").position().top
        },
        "1": {
            "contenido": $("#droppablePata2").find("p").text(),
            "posicion": $("#droppablePata2").position(),
            "x": $("#droppablePata2").position().left,
            "y": $("#droppablePata2").position().top
        },
        "2": {
            "contenido": $("#droppablePata3").find("p").text(),
            "posicion": $("#droppablePata3").position(),
            "x": $("#droppablePata3").position().left,
            "y": $("#droppablePata3").position().top
        },
        "3": {
            "contenido": $("#droppablePata4").find("p").text(),
            "posicion": $("#droppablePata4").position(),
            "x": $("#droppablePata4").position().left,
            "y": $("#droppablePata4").position().top
        },
        "4": {
            "contenido": $("#droppablePata5").find("p").text(),
            "posicion": $("#droppablePata5").position(),
            "x": $("#droppablePata5").position().left,
            "y": $("#droppablePata5").position().top
        },
        "5": {
            "contenido": $("#droppablePata6").find("p").text(),
            "posicion": $("#droppablePata6").position(),
            "x": $("#droppablePata6").position().left,
            "y": $("#droppablePata6").position().top
        },
        "6": {
            "contenido": $("#droppablePata7").find("p").text(),
            "posicion": $("#droppablePata7").position(),
            "x": $("#droppablePata7").position().left,
            "y": $("#droppablePata7").position().top
        },
        "7": {
            "contenido": $("#droppablePata8").find("p").text(),
            "posicion": $("#droppablePata8").position(),
            "x": $("#droppablePata8").position().left,
            "y": $("#droppablePata8").position().top
        },
        "8": {
            "contenido": $("#droppablePata9").find("p").text(),
            "posicion": $("#droppablePata9").position(),
            "x": $("#droppablePata9").position().left,
            "y": $("#droppablePata9").position().top
        },
        "9": {
            "contenido": $("#droppablePata10").find("p").text(),
            "posicion": $("#droppablePata10").position(),
            "x": $("#droppablePata10").position().left,
            "y": $("#droppablePata10").position().top
        },
    };
    //console.log(vecRegla);

    //Oculto el mensaje emergente si sigue activo
    ocultarSmsFinalizarJuego();

    //Reseteo el resultado de la suma
    $("#droppableRes").draggable({ disabled: true });
    $("#droppableRes").find("img").attr("src", "images/Patrulla Canina/resultados/interrogacion.png");
    $("#droppableRes").css("opacity", 1);
    $("#droppableRes").css("position", "");
    $("#droppableRes").droppable({ accept: false });

    //Reseteo los posibles resultados de la suma
    $("#draggableRes1").draggable({ disabled: true });
    $("#draggableRes2").draggable({ disabled: true });
    $("#draggableRes3").draggable({ disabled: true });
    $("#draggableRes4").draggable({ disabled: true });
    $("#draggableRes1").css("opacity", 0.5);
    $("#draggableRes2").css("opacity", 0.5);
    $("#draggableRes3").css("opacity", 0.5);
    $("#draggableRes4").css("opacity", 0.5);
    $("#draggableRes1").draggable({ revert: true });
    $("#draggableRes2").draggable({ revert: true });
    $("#draggableRes3").draggable({ revert: true });
    $("#draggableRes4").draggable({ revert: true });
    $("#draggableRes1").find("img").attr("src", "images/Patrulla Canina/resultados/interrogacion.png");
    $("#draggableRes2").find("img").attr("src", "images/Patrulla Canina/resultados/interrogacion.png");
    $("#draggableRes3").find("img").attr("src", "images/Patrulla Canina/resultados/interrogacion.png");
    $("#draggableRes4").find("img").attr("src", "images/Patrulla Canina/resultados/interrogacion.png");
    // Muevo los posibles resultados a sus origenes
    $("#draggableRes1").css("left", 0);
    $("#draggableRes2").css("left", 0);
    $("#draggableRes3").css("left", 0);
    $("#draggableRes4").css("left", 0);
    $("#draggableRes1").css("top", 0);
    $("#draggableRes2").css("top", 0);
    $("#draggableRes3").css("top", 0);
    $("#draggableRes4").css("top", 0);

    $("#draggableRes1").animate({left: "0px", top: "0px"}, 0.01);
    $("#draggableRes2").animate({left: "0px", top: "0px"}, 0.01); 
    $("#draggableRes3").animate({left: "0px", top: "0px"}, 0.01); 
    $("#draggableRes4").animate({left: "0px", top: "0px"}, 0.01); 
    /*$("#draggableRes1").css("left", posRes1.left);
    $("#draggableRes2").css("left", posRes2.left);
    $("#draggableRes3").css("left", posRes3.left);
    $("#draggableRes4").css("left", posRes4.left);
    $("#draggableRes1").css("top", posRes1.top);
    $("#draggableRes2").css("top", posRes2.top);
    $("#draggableRes3").css("top", posRes3.top);
    $("#draggableRes4").css("top", posRes4.top);*/

    //Reseteo los tabindex
    $("#draggableRes1").attr("tabindex", "-1");
    $("#draggableRes2").attr("tabindex", "-1");
    $("#draggableRes3").attr("tabindex", "-1");
    $("#draggableRes4").attr("tabindex", "-1");
    $("#draggablePerro").attr("tabindex", "0");

    //Reseteo el tiempo
    parar();
    tiempoSeg = 0;
    fallosRegla = 0;
    fallosSuma = 0;
    tiempo();
    respuestaCorrectaActual = 0;
    moverPerro = true;
    focoPerro = false;
    $("#vlr").focus();
}

/*genera 3 numeros aleatorios entre 1 y 20 distintos del que le pases (el resultado de verdad) 
y entre ellos. Para los tres posibles resultados a parte del resultado de verdad.*/
function generarTresNumAleatoriosResultados(res) {
    let num1 = Math.floor(Math.random() * 20) + 1;
    let num2 = Math.floor(Math.random() * 20) + 1;
    let num3 = Math.floor(Math.random() * 20) + 1;
    while(num1 == res || num1 == num2 || num1 == num3) {
        num1 = Math.floor(Math.random() * 20) + 1;
    }
    while(num2 == res || num2 == num1 || num2 == num3) {
        num2 = Math.floor(Math.random() * 20) + 1;
    }
    while(num3 == res || num3 == num1 || num3 == num2) {
        num3 = Math.floor(Math.random() * 20) + 1;
    }
    let sol = [num1, num2, num3];
    return sol;

}

//Función que hace que esperes el tiempo que le pases en milisegundos
/*  // uso del sleep
    sleep(300).then(() => { 
        //hacer algo despues del sleep
    });
*/
function sleep(time){ // funcion sleep en js, tiempo en milisegundos.
  return new Promise((resolve) => setTimeout(resolve, time)); //con una promesa.
}


//Función que cuenta el tiempo que tarda
function tiempo(){
    ventana = window.setInterval(function (){
        tiempoSeg++;
    },1000);
}

//Esta funcion es para dejar de contar los segundos transcurridos.
function parar(){ 
    window.clearInterval(ventana);
}

//Mensaje emergente de ganar
function smsJuegoGanado(){
    $("#ventanaFinJuegoGanado").html("");
    let ventana = document.getElementById('ventanaFinJuegoGanado');
    ventana.style.marginTop = "90px";
    ventana.style.left = ((document.body.clientWidth-350) / 2) + "px"; //calcula el ancho de la pantalla del cliente para que salga en medio.
    ventana.style.display = 'block';

    let sms = document.createElement("p");
    sms.innerHTML = `<h3>¡Enhorabuena!</h3>
                    <p>Has tardado ${sumas[sumaActual].tiempo} segundos</p><br>
                    <div class="operacion">
                        <div class="sumandos">
                            <div class="sumando1">
                                <p id="sum1">${sumas[sumaActual].sumando1}</p>
                            </div>
                            <div class="sumando2">
                                <div>
                                    <p id="signo">+</p>
                                </div>
                                <div>
                                    <p id="sum2">${sumas[sumaActual].sumando2}</p>
                                </div>
                            </div>
                        </div>
                        <div class="resultado">
                            <div>
                                <p id="droppableRes">${sumas[sumaActual].resultado}</p>
                            </div>
                        </div>
                    </div>                    
                    <input id="bttonSigSuma" type="button" onclick="anyadirSumaNueva();" value="Seguir Jugando">`;
    estaSms = true;
    ventana.appendChild(sms);
}

//Oculta el mensaje de ganar y borra lo que hay dentro del div ese
function ocultarSmsFinalizarJuego(){
    /*var ventana = document.getElementById('ventanaFinJuegoGanado');
    sleep(300).then(() => { // uso del sleep
        //hacer algo despues del sleep
        ventana.style.display = 'none';
        //anyadirSumaNueva();
    });*/
    $("#ventanaFinJuegoGanado").html("");
    $("#ventanaFinJuegoGanado").css("display", "none");
}
