

$(document).ready(function() {
    $('.carousel-imagens').slick({
        autoplay: true,
    }),

    $('form button').click(function() {
    
    })

    $('#telefone').mask('(00) 00000-0000')


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereçoCompleto: {
                required: true
            },
            cep: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, insira o nome correto',
            email: 'Por favor, insira o email correto',
            telefone: 'Por favor, insira o telefone correto',
            cpf: 'Por favor, insira o CPF correto',
            endereçoCompleto: 'Por favor, insira o endereço correto',
            cep: 'Por favor, insira o CEP correto',
        },
    
        submitHandler: function(form) {
            alert(`obrigado pelas informações, entraremos em contato`)
            
        },
        invalidHandler: function(evento, validador) {
            let camposIncorreto = validador.numberOfInvalids();
            if (camposIncorreto) {
                alert(`Existem ${camposIncorreto} campos Incorretos`)
            }
        }
    })

})