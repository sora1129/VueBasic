var app = new Vue({
	el: '#app',
	data: {
		show: true,
		message: 'Hello Vue.js',
		list: ['りんご','ばなな','いちご'],
		handleClick: function(e) {
			alert(e.target)
		}
	}
})

console.log(app.show);

var el = document.getElementById('text') // id="text"の要素を探す
el.innerText = 'テキスト' // 要素を更新する