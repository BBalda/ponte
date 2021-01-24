$('#counter').on('input', function () {
    let charactersUsed = $(this).val().length
    $('#caracters-left').text(200 - charactersUsed)
})