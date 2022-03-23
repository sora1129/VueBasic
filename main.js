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
