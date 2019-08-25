$(document).ready(function () {

  //選單開合
  $(".menu-icon").click(function () {
    $(".menu").slideToggle();

  })



  //回TOP
  /* 按下GoTop按鈕時的事件 */
  // $(".go_top").click(function () {
  //   $("html,body").animate({ scrollTop: 0 }, 1000);   /* 返回到最頂上 */
  //   return false;
  // });

  /* 偵測卷軸滑動時，往下滑超過200px就讓GoTop按鈕出現 */
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 200) {
  //     $(".go_top").fadeIn();
  //   } else {
  //     $(".go_top").fadeOut();
  //   }
  // });


  var swiper = new Swiper('.swiper-container1', {
    //無限循環
    loop: true,

    //幻燈片間空間
    spaceBetween: 10,

    //圖片滑動速度
    speed: 2000,

    //自動播放設定
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

    //分頁器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    //前進後退按鈕
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  $(".lb_cover,.close_lb_btn").click(function(){
    $(".lb_info,.lb_cover").hide();
  });
  $(".more_btn,.room_pic").click(function(){
    $(".lb_info,.lb_cover").show();
  });

});