'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const navi = document.getElementById('navi');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  navi.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

}

$(function () {
  // 上に戻るボタンの初期化
  let topBtn = $('#back');
  topBtn.hide();

  // ある程度スクロールされたら、上に戻るボタンを表示する
  $(window).scroll(function(){
    if ($(this).scrollTop() > 2000) {
      topBtn.fadeIn(); // フェードインで表示
    }else{
      topBtn.fadeOut();
    }
  });

  // クリックで上に戻るボタン
  topBtn.click(function (event) {
    event.preventDefault(); // 無効化
    $('body,html').animate({
      scrollTop: 0
    },500);
  });
});

$(function () {
  let topBtn2 = $('#scrollTop,#scrollTop2,#scrollTop3');
  // topBtn2.hide();
  topBtn2.click(function (event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    },500);
  });
});