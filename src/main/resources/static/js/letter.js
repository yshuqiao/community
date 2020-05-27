$(function(){
	$("#sendBtn").click(send_letter);
	$(".close").click(delete_msg);
});

function send_letter() {
	$("#sendModal").modal("hide");

	var toName = $("#recipient-name").val();
	var content = $("#message-text").val();
	$.post(
	CONTEXT_PATH + "/letter/send",
	{"toName":toName,"content":content},    //给服务端发送数据
	function(data){     //服务端返回数据
	data = $.parseJSON(data);  //用js的parseJSON解析返回来的数据
        if(data.code==0){  //如果返回码是0，表示消息发送成功
        $("#hintBody").text("发送成功！");
        }else{
        $("#hintBody").text(data.msg);
        }
        $("#hintModal").modal("show");
            setTimeout(function(){
                $("#hintModal").modal("hide");
                location.reload(); //重载当前页面
            }, 2000);
	   }
	);

}

function delete_msg() {
	// TODO 删除数据
	$(this).parents(".media").remove();
}