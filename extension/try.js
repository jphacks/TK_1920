$(function() {

    $('.wrapper').css("display", "none");

    function closePopUp() {
        // console.log('マウスオーバーしました！');
        $('.wrapper').css("display", "none");
    }
    function openPopUp() {
        // console.log('マウスオーバーしました！');
        $('.wrapper').css("display", "block");
    }

    $('.r-30o5oe').mouseover(openPopUp);
    $('.r-30o5oe').mouseout(closePopUp);

});