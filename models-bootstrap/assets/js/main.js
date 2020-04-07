$('.dropdown').hover(
    function(){
        $(this).addClass('open');
    },
    function(){
        $(this).removeClass('open')
    }
)
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') 
    var modal = $(this)
    modal.find('.modal-body img').attr('src','./assets/images/g'+recipient+'.jpg')
  })