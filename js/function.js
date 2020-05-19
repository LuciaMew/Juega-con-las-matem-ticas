/*
	Autoras: Veronica Dura Sempere
	Asignatura: Usabilidad y Accesibilidad - Practica 3
				3er curso del grado de Ingenieria Multimedia, Universidad de Alicante
	Año: 2019
*/
var caja=0;
$(document).ready(function(){

	/* CONTAR OBJETOS - Veronica */


	$( function() {
		$( ".dragable" ).draggable();


		$("a[name='drop1']").click(function(){
			console.log("aaaaa");
			caja=1;
			drop1();
		});
		$("a[name='drop2']").click(function(){
			console.log("aaaaaiii");
			caja=2;
			drop2();
		});
		$("a[name='drop3']").click(function(){
			console.log("aaaaaiioo");
			caja=3;
			drop3();
		});

		$("#est").click(function(){
			console.log("uuuu");
			$("#second2").text(sessionStorage.getItem("tiempoLadybugseg"));
			alert("aaaaa");
			location.href="estadísticas.html";
			mostrar();
		});
		/*$("a[name='ob']").focus(function(){
			$(this).find("img").css("width", "50%");
		});
		$("a[name='ob2']").focus(function(){
			$(this).find("img").css("width", "60%");
		});*/
		
		if($("a[name='ob']").focus()){
			$("a[name='ob']").focus(function(){
				/*$(this).find("img").css("background-color", "rgba(228, 153, 255, 1)");*/
				$(this).find("img").effect("highlight", 1000);
			});
		}
		if($("a[name='ob2']").focus()){
			$("a[name='ob2']").focus(function(){
				$(this).find("img").effect("highlight", 1000);
			});
		}
			
		

	});

	let posCorrectaRan = Math.floor(Math.random() * 4) + 1;
	
	var tiempo_corriendo = null;
	time();
	sumaActual = 5;

	let [src1, src2, src3] =  generarNumAleatorios(5);
    let src = "images/Patrulla Canina/resultados/";
    switch(posCorrectaRan) {
        case 1:
            $("#re1").attr("src", src + ""+"5.png");
            $("#re1").attr("alt", "5");
            $("#re2").attr("src", src + "" + src1 +".png");
            $("#re2").attr("alt", "" + src1 + "");
            $("#re3").attr("src", src + "" + src2 +".png");
            $("#re3").attr("alt", "" + src2 + "");
            $("#re4").attr("src", src + "" + src3 +".png");
            $("#re4").attr("alt", "" + src3 +"");
            break;
        case 2:
            $("#re1").attr("src", src + "" + src1 +".png");
            $("#re1").attr("alt", "" + src1 + "");
            $("#re2").attr("src", src + "" +"5.png");
            $("#re2").attr("alt", "5");
            $("#re3").attr("src", src + "" + src2 +".png");
            $("#re3").attr("alt", "" + src2 + "");
            $("#re4").attr("src", src + "" + src3 +".png");
            $("#re4").attr("alt", "" + src3 +"");
            break;
        case 3:
            $("#re1").attr("src", src + "" + src1 +".png");
            $("#re1").attr("alt", "" + src1 + "");
            $("#re2").attr("src", src + "" + src2 +".png");
            $("#re2").attr("alt", "" + src2 + "");
            $("#re3").attr("src", src + "" + "5.png");
            $("#re3").attr("alt", "5");
            $("#re4").attr("src", src + "" + src3 +".png");
            $("#re4").attr("alt", "" + src3 +"");
            break;
        case 4:
            $("#re1").attr("src", src + "" + src1 +".png");
            $("#re1").attr("alt", "" + src1 + "");
            $("#re2").attr("src", src + "" + src2 +".png");
            $("#re2").attr("alt", "" + src2 + "");
            $("#re3").attr("src", src + "" + src3 +".png");
            $("#re3").attr("alt", "" + src3 +"");
            $("#re4").attr("src", src + "" +"5.png");
            $("#re4").attr("alt", "5");
            break;
        default:
            break;
    }


	/* SUMAR Y RESTAR - Lucia */

	/* SECUENCIAS DE NUMEROS  */
});
var count1=0;
var count2=0;
var count3=0;


var tiempo = {
       	hora: 0,
        minuto: 0,
        segundo: 0
    };

     function time(){
        
                                  
            tiempo_corriendo = setInterval(function(){
                // Segundos
                tiempo.segundo++;
                if(tiempo.segundo >= 60)
                {
                    tiempo.segundo = 0;
                    tiempo.minuto++;
                }      

                // Minutos
                if(tiempo.minuto >= 60)
                {
                    tiempo.minuto = 0;
                    tiempo.hora++;
                }

                $("#hour").text(tiempo.hora < 10 ? '0' + tiempo.hora : tiempo.hora);
                $("#minute").text(tiempo.minuto < 10 ? '0' + tiempo.minuto : tiempo.minuto);
                $("#second").text(tiempo.segundo < 10 ? '0' + tiempo.segundo : tiempo.segundo);
            }, 1000);
        
       
    }

// Por si tienes que hacer funciones fuera del ready a las que luego llamas
/* CONTAR OBJETOS - Veronica */
function mostrar(){
	
	$("#hour2").text(sessionStorage.getItem("tiempoLadybughor"));
	$("#minute2").text(sessionStorage.getItem("tiempoLadybugmin"));
	$("#second2").text(sessionStorage.getItem("tiempoLadybugseg"));
	$("#fallos").text(sessionStorage.getItem("fallosLadybug"));
	
}

function drop1() {

	$( "img[name='draggable1']" ).draggable({ revert: "invalid" });
   	$( "img[name='draggable2']").draggable({ revert: "invalid" });
   	$( "img[name='draggable3']" ).draggable({ revert: "invalid" });

	$( "#droppable1" ).droppable({
		accept: "img[name='draggable1']",
		classes: {
		    "ui-droppable-active": "ui-state-active",
		    "ui-droppable-hover": "ui-state-hover"
		},
		 drop: function( event, ui ) {

		      	//$count1++;
		      	//console.log($(this).attr("id"));
		 	suma();
		    comprobar();
		      	
		    $( this )
		        .addClass( "ui-state-highlight" )
		        .find( "p" )
		        .html( "Dropped!" );
		            
		           
		}

	});
}

function drop2() {

	$( "img[name='draggable1']" ).draggable({ revert: "invalid" });
   	$( "img[name='draggable2']" ).draggable({ revert: "invalid" });
   	$( "img[name='draggable3']" ).draggable({ revert: "invalid" });
   		
   		


	$( "#droppable2" ).droppable({
		accept: "img[name='draggable2']" ,
		classes: {
		    "ui-droppable-active": "ui-state-active",
		    "ui-droppable-hover": "ui-state-hover"
		},
		drop: function( event, ui ) {
		      	//console.log($(this).attr("id"));
		  	suma2();
		    comprobar();
		    $( this )
		        .addClass( "ui-state-highlight" )
		        .find( "p" )
		        .html( "Dropped!" );


		}
	});

}
count1=0;
count2=0;
count3=0;

function suma(){
	count1++;
	console.log(count1);
}
function suma2(){
	count2++;
	console.log(count2);
}
function suma3(){
	count3++;
	console.log(count3);
}

function drop3() {

	$( "img[name='draggable1']" ).draggable({ revert: "invalid" });
   	$( "img[name='draggable2']").draggable({ revert: "invalid" });
   	$( "img[name='draggable3']" ).draggable({ revert: "invalid" });

	$( "#droppable3" ).droppable({
		accept: "img[name='draggable3']" ,
		classes: {
		    "ui-droppable-active": "ui-state-active",
		    "ui-droppable-hover": "ui-state-hover"
		},
		drop: function( event, ui ) {
		    suma3();
		    comprobar();
		    $( this )
		        .addClass( "ui-state-highlight" )
		        .find( "p" )
		        .html( "Dropped!" );
		}
	});

}
function comprobar(){

	if(count1==5 && count2==5 && count3==5){
		console.log("muy bien");
		clearInterval(tiempo_corriendo);
		//$("#timer").css("display", "block");
		$(".contenido3").css("position", " " );
		$(".contenido3").css("top", "-15%" );
		$("#pregunta").css("display", "block");
		$("#respuestas").css("display", "grid");
		
		
		console.log(tiempo.segundo);
		console.log(tiempo.minuto);
		sessionStorage.setItem("tiempoLadybugseg", tiempo.segundo);
		sessionStorage.setItem("tiempoLadybugmin", tiempo.minuto);
		sessionStorage.setItem("tiempoLadybughor", tiempo.hora);
				console.log(sessionStorage.getItem("tiempoLadybugseg"));
				console.log(sessionStorage.getItem("tiempoLadybugmin"));
				console.log(sessionStorage.getItem("tiempoLadybughor"));

		//localStorage.setItem("Nombre", nom);


		//sessionStorage.setItem(tiempo,tiempoLadybug); 
		
	}
}//tendo error a la hora de ocultar y mostrar las cosas
var fallos=0;
function comprobar2(e){

	$(e).attr("alt");
	console.log($(e).attr("alt"));
	if($(e).attr("alt")==count1){
		console.log("muy bien");
		$("#pregunta").css("display", "none");
		$("#res2").css("display", "none");
		$("#res").css("display", "block");
		$(".contenido3").css("position", "" );
		$(".contenido3").css("top", "" );
		//$("p").css("display", "none");
		$("#respuestas").css("display", "none");
		sessionStorage.setItem("fallosLadybug", fallos);
		console.log(sessionStorage.getItem("fallosLadybug"));

	}else{
		console.log("prueba otra vez");
		$("#pregunta").css("display", "none");
		$("#res2").css("display", "block");
		fallos++;
	}

}



function generarNumAleatorios(res) {
    let num1 = Math.floor(Math.random() * 9) + 1;
    let num2 = Math.floor(Math.random() * 9) + 1;
    let num3 = Math.floor(Math.random() * 9) + 1;
    while(num1 == res || num1 == num2 || num1 == num3) {
        num1 = Math.floor(Math.random() * 9) + 1;
    }
    while(num2 == res || num2 == num1 || num2 == num3) {
        num2 = Math.floor(Math.random() * 9) + 1;
    }
    while(num3 == res || num3 == num1 || num3 == num2) {
        num3 = Math.floor(Math.random() * 9) + 1;
    }
    let sol = [num1, num2, num3];
    return sol;

}

function move(e){
	var pos3 = {top:0, left:0};
	
	if(caja==1){
		var pos=$("#droppable1").position();
		console.log(pos);
		var pos2=$(e).find("img").position();
		console.log(pos2);
		pos3.top=pos.top-pos2.top;
		pos3.left=pos.left-pos2.left;
		console.log(pos3);
		var obj = $(e).find("img").attr("name");

		if( pos2.top>295 ){

		}else{
			$(e).find("img").animate({left: pos3.left+50}, "slow")
		              .animate({top: pos3.top+50}, "slow");
		    if(obj=="draggable1"){
		    	suma();
		    	comprobar();
		    	$( e ).find("img").draggable("disable");

		    }

		

		    if(obj=="draggable2" || obj=="draggable3"){

		    	$(e).find("img").animate({left: pos.left-30}, "slow")
		              .animate({top: -pos2.top/80}, "slow");

		    }
		}
	              
	}
	if(caja==2){
		var pos=$("#droppable2").position();
		console.log(pos);
		var pos2=$(e).find("img").position();
		console.log(pos2);
		pos3.top=pos.top-pos2.top;
		pos3.left=pos.left-pos2.left;
		console.log(pos3);
		var obj = $(e).find("img").attr("name");

		if(pos2.top>295 ){

		}else{

		$(e).find("img").animate({left: pos3.left+50}, "slow")
	              .animate({top: pos3.top+50}, "slow");

		     if(obj=="draggable2"){
		    	suma2();
		    	comprobar();
		    	$( e ).find("img").draggable("disable");
		    }
		

		    if(obj=="draggable1" || obj=="draggable3"){

		    	$(e).find("img").animate({left: pos.left-280}, "slow")
		              .animate({top: -pos2.top/80}, "slow");
		    }
		}

	}
	if (caja==3) {

		var pos=$("#droppable3").position();
		console.log(pos);
		var pos2=$(e).find("img").position();
		console.log(pos2);
		pos3.top=pos.top-pos2.top;
		pos3.left=pos.left-pos2.left;
		console.log(pos3);
		var obj = $(e).find("img").attr("name");

		if(pos2.top>295 ){

		}else{

			$(e).find("img").animate({left: pos3.left+50}, "slow")
		              .animate({top: pos3.top+50}, "slow");

		    if(obj=="draggable3"){
		    	suma3();
		    	comprobar();
		    	$( e ).find("img").draggable("disable");
			}
		

		    if(obj=="draggable1" || obj=="draggable2"){

		    	$(e).find("img").animate({left: pos.left-530}, "slow")
		              .animate({top: -pos2.top/80}, "slow");
		    }
		}

	}
}
/* SUMAR Y RESTAR - Lucia */

/* SECUENCIAS DE NUMEROS */
