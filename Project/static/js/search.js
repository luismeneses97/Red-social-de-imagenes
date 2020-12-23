$(document).ready(function () {
    localStorage.setItem('voto', '1');
    $('.voteIcon1').on('click',function (event) {
        let value = $('img.voteIcon1').attr('src')
        let idImage_ = window.location.pathname.split('/')[2]
        var data = {
            'voteStatus': localStorage.getItem('voto'),
            'idImage': idImage_
        } 
        
        $.ajax({
            url: "/vote",
            type: "POST",
            data: JSON.stringify(data),
            contentType: 'application/json;charset=UTF-8',
            statusCode: {
                404: function (event) {
                    console.log('La URL solicitada no existe, solicitud no enviada.')
                },
                200: function () {
                    console.log('URL encontrada, solicitud enviada.')
                },
                500: function () {
                    console.log('Error interno del servidor, solicitud no enviada.')
                }
            },
            success: function (status) {
                if (status == 'ok') {
                    let voteStatus = localStorage.getItem('voto');
                    if (value === '../../static/icons/heartEmpty.svg'){
                        $('.voteIcon1').attr('src','../../static/icons/heartBlack.svg')
                        localStorage.setItem('voto', '0');
                    } else if (value === '../../static/icons/heartBlack.svg') {
                        $('.voteIcon1').attr('src','../../static/icons/heartEmpty.svg')
                        localStorage.setItem('voto', '1');
                    }
                }
                else {
                }
            }
        })
    })
})