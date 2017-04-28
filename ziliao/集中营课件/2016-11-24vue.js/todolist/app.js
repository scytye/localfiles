//了解需求
//现获取元素

var list = [];

$(".new-todo").on("keyup",function (ev){
	if( ev.keyCode === 13 ){
		var value = $(this).val();

        list.push(value)

		render();
	}	
});


function render(){

    $.each(arr,function (item){
         $(".todo-list").append(html(item));    
    })
}
function html(value){
	var html = `<li class="completed">
                    <div class="view">
                        <input class="toggle" type="checkbox">
                        <label>${value}</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" value="hello,vuejs">
                </li>`

    return html;
}


