var app = new Vue({
	el: '#app',
  data: {
    title: 'Hello Vue.js',
    list: ['りんご', 'バナナ', 'いちご'],
    message: 'バインドメッセージ',
    show: true
  },
  methods: {
    handleClick: function (event) {
      alert(event.target) // [object HTMLButtonElement]
    }
  }
})