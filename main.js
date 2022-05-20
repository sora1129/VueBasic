var app = new Vue({
	el: '#app',
  data: {
    title: 'Hello Vue.js',
    list: ['りんご', 'バナナ', 'いちご'],
    message: 'バインドメッセージ'
  },
  methods: {
    handleClick: function (event) {
      alert(event.target) // [object HTMLButtonElement]
    }
  }
})