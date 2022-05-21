// CHAPTER1
// var app = new Vue({
// 	el: '#app',
//   data: {
//     title: 'Hello Vue.js',
//     list: ['りんご', 'バナナ', 'いちご'],
//     message: 'バインドメッセージ',
//     show: true
//   },
//   methods: {
//     handleClick: function (event) {
//       alert(event.target) // [object HTMLButtonElement]
//     }
//   }
// })

// var app = new Vue ({
//   el: '#app',
//   data: {
//     message: {
//       value: 'Hello Vue.js!'
//     },
//     list: ['りんご', 'ばなな', 'いちご'],
//     num: 1
//   }
// })

// var app = new Vue ({
//   el: '#app',
//   data: {
//     message: 'Hello Vue.js!',
//     scroll: 0
//   },

// })

// section8
new Vue ({
  el: '#app',
  data: {
    count: 0
  },
  methods: {
    // ボタンをクリックしたときのハンドラ
    increment: function() {
      this.count++ 
    }
  }
})