function changeColor(row){
	let inputArr = document.getElementsByTagName("input");
	let chkb = [];
	let rowArr = document.getElementsByTagName("tr");
	
	for(let i=0;i<inputArr.length;i++){
		if(inputArr[i].type == "checkbox"){
			chkb.push(inputArr[i]);
		}
	}	
	
	for(let i=0;i<chkb.length;i++){
		if(chkb[i].checked){
			rowArr[i+1].className = "checked";			
		}else{
			rowArr[i+1].className = "uncheked";
		}			
	}	
}