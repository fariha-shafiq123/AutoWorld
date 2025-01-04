$(document).ready(function () {
    $('#payment-method-tabs button').on('click', function () {
        $('#payment-method-tabs button').removeClass('active');
        $(this).addClass('active');

        const method = $(this).data('method');
        $('#payment-content > div').addClass('d-none');
        $(`.${method}`).removeClass('d-none');
    });
});