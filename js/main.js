window.onload = function(){
    dibujarBarra('progressbar');
    tituloDinamico();
}


function dibujarBarra(id){
    $barra = $('#'+id);
    $barra.append('<img id="imgbar" src="./img/bar.png" draggable="false"/>');
    $imgbar = $('#imgbar');
    $imgbar.css({"position":"relative","right":"50px"})
    function animarBarra(){
        $imgbar.animate({"left": "+=300"}, 2000, 'linear', function(){
            $imgbar.remove();
            dibujarBarra('progressbar');
        });
    }
    animarBarra();

}

function tituloDinamico(){
    setTimeout(function(){
        document.title="> cano.sh_"
        setTimeout(function(){
            document.title="> cano.sh";
        tituloDinamico();
        },1000);
    },1000);
    
    
}