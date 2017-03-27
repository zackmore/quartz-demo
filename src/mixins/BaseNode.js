export default {
  /*
  data () {
    return {
      node: {
        id: null,
        type: 'normal',   // ['normal', 'question', 'answer'],
        text: '',
        link: '',
        children: null
      },

      types: ['normal', 'question', 'answer']
    }
  },
  */

  methods: {
    uuid () {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
					let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8)
					return v.toString(16)
				})
    }
  }
}
