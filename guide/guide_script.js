//setting
function init(){

}

//gnb
$(document).on('click', '.gnb-link', function(){
    $('.gnb-link').parent().removeClass('-active');
    $(this).parent().toggleClass('-active');
});

$(document).ready(function(){
    //setting
    init();


}); //ready