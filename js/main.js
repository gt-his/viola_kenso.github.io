'use strict';

{
  // humburger-menu ★ハンバーガーメニュー★
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


  // ★トップに戻るボタン★
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

  // gallery ★ギャラリー★
  let album = [
    {src: 'img/family.jpg', msg: `ビオラ建装さんに頼んで良かったです。ありがとうございました。太田市 A様`},
    {src: 'img/family jump.jpg', msg: `最高の仕上がりで家族みんな大喜びです。太田市 T様`},
    {src: 'img/after.jpg', msg: `コスパ最高の仕上がりです^^ありがとう！太田市 S様`},
    {src: 'img/現場監督2.jpg', msg: `私たちにお任せください！`},
    {src: 'img/現場監督.jpg', msg: `安心・誠実をモットーにお客様目線での仕事をさせていただきます！`},
  ];

  // 最初のデータを表示　写真
  let mainImage = document.createElement('img');
  mainImage.setAttribute('src', album[0].src);
  mainImage.setAttribute('alt', album[0].msg);
  // 最初のデータを表示　キャプション
  let mainMsg = document.createElement('p');
  mainMsg.innerText = mainImage.alt;
  // HTMLに反映
  let mainFlame = document.querySelector('#gallery .main');
  mainFlame.insertBefore(mainImage, null);
  mainFlame.insertBefore(mainMsg, null);

  // サムネイル写真画像の表示
  let thumbFlame = document.querySelector('#gallery .thumb');
  for (let i = 0; i < album.length; i++) {
    let thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', album[i].src);
    thumbImage.setAttribute('alt', album[i].msg);
    thumbFlame.insertBefore(thumbImage, null);
  }

  // クリックした画像をメインにする
  thumbFlame.addEventListener('click', function(event) {
    if (event.target.src) {
      mainImage.src = event.target.src;
      mainMsg.innerText = event.target.alt;
    }
  });

  // zipcode ★住所自動入力★
  $(function() {
    $('#btn').on('click', function() {
      // 入力された郵便番号でWebAPIに住所情報をリクエスト
      $.ajax({
        url: "http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $('#zipcode').val(),
        dataType : 'jsonp',
      }).done(function(data) {
        if (data.results) {
          setData(data.results[0]);
        } else {
          alert('該当するデータが見つかりませんでした');
        }
      }).fail(function(data) {
        alert('通信に失敗しました');
      });
    });
  
    // データ取得が成功したときの処理
    function setData(data) {
      // 取得したデータを各HTML要素に代入
      $('#prefecture').val(data.address1); // 都道府県名
      $('#city').val(data.address2); // 市区町村名
      $('#address').val(data.address3); // 町域名
    }
  });

}