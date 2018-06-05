function checkTel(tel){
	const pattTel = /[0-9]{9}/g;
	if(!(pattTel.test(tel)))
		return false;
	else
		return true;
}