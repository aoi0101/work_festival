$(function() {

//メニューバー上部に固定
  $(function() {
    var nav = $('.c-header__menuSection');
    var navTop = nav.offset().top;
    //スクロールするたびに実行
    $(window).scroll(function () {
        var winTop = $(this).scrollTop();
        //スクロール位置がnavの位置より下だったらクラスfixedを追加
        if (winTop >= navTop) {
            nav.addClass('fixed')
        } else if (winTop <= navTop) {
            nav.removeClass('fixed')
        }
    });
  })

//メニューバー色変更
  $(function() {
    $('.c-header__menu--item').hover(function(){
      var index = $(".c-header__menu--item").index(this);
      $(".c-header__menu--item").eq(index).css("background-color","#ff0000");
    },function(){
      $(".c-header__menu--item").css("background-color","");
    })
  })
  $(function() {
    var stepMenu = function() {
    var array = {
      '#top': 0,
      '#about': 0,
      '#shop': 0,
      '#access': 0,
      '#notice': 0
    };
  var $globalNavi = new Array();

  for (var key in array) {
    if ($(key).offset()) {
      array[key] = $(key).offset().top - 10;
      $globalNavi[key] = $('.c-header__menu--item[href="' +key+ '"]');
    }
  }

  $(window).scroll(function () {
    for (var key in array) {
      if ($(window).scrollTop() > array[key] - 10) {
        $('.c-header__menu--item').each(function() {
          $(this).removeClass('current');
        });
      $globalNavi[key].addClass('current');
      }
    }
  });
  }
  stepMenu();
});

//About画像フェードイン
  $(function() {
    $(window).scroll(function () {
      $('.p-main__about--imageSection').each(function () {
        var elemPos = $(this).offset().top; /* 要素の位置取得 */
        var scroll = $(window).scrollTop(); /* スクロール位置取得 */
        var windowHeight = $(window).height(); /* 画面幅取得（画面の下側に入ったときに動作させる）*/
        if (scroll > elemPos - windowHeight) {
      /* 要素位置までスクロール出来たときに動作 */
          $(this).addClass("p-main__about--imageSection-scroll");
        }
      });
    });
    $(window).scroll();
  })

//Shop画像フェードイン
  $(function() {
    $(window).scroll(function () {
      $('.p-main__shops--imageItem').each(function () {
        var elemPos = $(this).offset().top; /* 要素の位置取得 */
        var scroll = $(window).scrollTop(); /* スクロール位置取得 */
        var windowHeight = $(window).height(); /* 画面幅取得（画面の下側に入ったときに動作させる）*/
        if (scroll > elemPos - windowHeight) {
      /* 要素位置までスクロール出来たときに動作 */
          $(this).addClass("p-main__shops--imageItem-scroll");
        }
      });
    });
    $(window).scroll();
  })

//トップへ戻るボタン
$(function(){
  var pagetop = $('.c-button__toTop');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});
})
