func generate_task() {
	alert("Function activated")
	var ppl = ["Alex","Zunairah","Celeste","Sofia","Charlotte","Ethan Lister","Ethan Su","Livia","Chloe","Nathan","Evelyn","Anyane","Kevin","Jamie","Simon","Taj","Harvey","JP","Noah","Anna","Melody"]
	var tasks = ["Say hello to ","Start a conversation with "]
	var randomppl = array[Math.floor(Math.random() * ppl.length)];
	var randomtask = array[Math.floor(Math.random() * tasks.length)];
	var task_test = document.getElementById("task");
	task_test.textContent = tasks + ppl;
	
	
}
