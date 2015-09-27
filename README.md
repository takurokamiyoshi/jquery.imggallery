#jquery.imggallery.js
イメージギャラリー用jQeryプラグインです。
##サンプルデモ
[text](url)
##使い方
###CSS、ライブラリーの読み込み
style.css、jQeryとjquery.imggallery.jsを読み込みます。

	<link rel="stylesheet" href="css/style.css">
	<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
	<script src="js/jquery.imggallery.js"></script>

###HTMLタグを用意する
	<ul id="main_img">
		<li><img src="http://www.takurokamiyoshi.net/wordpress/wp-content/themes/projectt/images/index/ph_01.jpg" alt="" width="980" height="490"></li>
		<li><img src="http://www.takurokamiyoshi.net/wordpress/wp-content/themes/projectt/images/index/ph_02.jpg" alt="" width="980" height="490"></li>
		<li><img src="http://www.takurokamiyoshi.net/wordpress/wp-content/themes/projectt/images/index/ph_03.jpg" alt="" width="980" height="490"></li>
	</ul>
	<ul id="thumb_img">
		<li><a href="javascript:void(0);"><img src="http://www.takurokamiyoshi.net/wordpress/wp-content/themes/projectt/images/index/ph_01.jpg" alt="" width="60"></a></li>
		<li><a href="javascript:void(0);"><img src="http://www.takurokamiyoshi.net/wordpress/wp-content/themes/projectt/images/index/ph_02.jpg" alt="" width="60"></a></li>
		<li><a href="javascript:void(0);"><img src="http://www.takurokamiyoshi.net/wordpress/wp-content/themes/projectt/images/index/ph_03.jpg" alt="" width="60"></a></li>
	</ul>
###jquery.imggalleryを動作させる
  <script>
  $(function(){
  	$('#main_img').imggallery({ // メインイメージのid
  		auto: true,　// autoで動作させるか
  		speed: 700,　// speed
  		timeout: 3000, // timeout 
  		thumb: '#thumb_img' // サムネイルエリアid
  	});
  });
  </script>

