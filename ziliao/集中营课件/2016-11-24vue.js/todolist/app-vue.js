
//开启应用

//vue.js主要是让开发者把精力放在业务逻辑上

new Vue({
	el:"#app",
	data:{
		list:[]
	},
	methods:{
		addItem:function (ev){
			this.list.push(ev.target.value);	
		}
	}
})
