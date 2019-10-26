// $(function sjfjfsl() {
//     window.alert("あああぶりぶりぶり");

//     // $('.wrapper').css("display", "none");

//     // function closePopUp() {
//     //     // console.log('マウスオーバーしました！');
//     //     $('.wrapper').css("display", "none");
//     // }
//     // function openPopUp() {
//     //     // console.log('マウスオーバーしました！');
//     //     $('.wrapper').css("display", "block");
//     // }

//     // $('.r-30o5oe').mouseover(openPopUp);
//     // $('.r-30o5oe').mouseout(closePopUp);
//     document.onkeydown = e => console.log(e);

//     document.onkeydown = 
//     $(".public-DraftEditor-content").keydown(function() {
//          //body内の最後に<div id="modal-bg"></div>を挿入
//         $("body").append('<div class="wrapper" style="width:300px; height:100px; background-color:black;"></div>');
 
//     //画面中央を計算する関数を実行
//         modalResize();
 
//     //モーダルウィンドウを表示
//         $(".wapper").fadeIn("fast");
 
//     //画面のどこかをクリックしたらモーダルを閉じる
//         $(".wrapper").click(function(){
//         $(".wrapper").fadeOut("fast"
//         //function(){
//          //挿入した<div id="modal-bg"></div>を削除
//         //       $('#modal-bg').remove() ;
//         //  }
//          );
 
//         });
 
//     // 画面の左上からmodal-mainの横幅・高さを引き、その値を2で割ると画面中央の位置が計算できます
//     $(window).resize(modalResize);
//         function modalResize(){
 
//             var w = $(window).width();
//           var h = $(window).height();
 
//             var cw = $(".wrapper").outerWidth();
//            var ch = $(".wrapper").outerHeight();
 
//         //取得した値をcssに追加する
//             $(".wrapper").css({
//                 "left": ((w - cw)/2) + "px",
//                 "top": ((h - ch)/2) + "px"
//           });
//        }
//         // console.log('===== keydown ====='); // 1番目に実行される
//         // console.log(e);
//         // console.log(e.keyCode);
//     });
// });