$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })
    

    $('form').submit(function(e){
        e.preventDefault();
        const enderecoDaNovaImg = $('#endereco-imagem-nova').val();
        const NovaImagem = $(`<li></li>`)
        $(`<img src= "${enderecoDaNovaImg}"/>`).appendTo(NovaImagem);
        $(`
        <div class="overlay-imagem-link" >
            <a href="${enderecoDaNovaImg}" target= "_blank" title="Ver imagem em tamnho real">
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(NovaImagem)
        $(NovaImagem).appendTo('ul')
        $('#endereco-imagem-nova').val('')

    })  
})

