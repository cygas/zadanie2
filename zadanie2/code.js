window.addEventListener("load", function(){	
	
	let submit = document.getElementById("submit");
	submit.addEventListener("click", function(){
		let komunikat = document.getElementById("komunikat");
		let imie = document.getElementById("imie").value;
		let nazwisko = document.getElementById("nazwisko").value;
		let tel = document.getElementById("tel").value;
		let mail = document.getElementById("mail").value;
		let table = document.getElementById("tabela");
				
		komunikat.innerHTML = "";
		
		if(checkImie(imie) && checkNazwisko(nazwisko) && checkTel(tel) && checkMail(mail)){
			console.log(imie + "\n" + nazwisko + "\n" + tel + "\n" + mail);
			komunikat.innerHTML = "Udało się zapisać dane";
			let row = table.insertRow();
			let cell0 = row.insertCell(0);
			let cell1 = row.insertCell(1);
			let cell2 = row.insertCell(2);
			let cell3 = row.insertCell(3);
			
			cell0.innerHTML = imie;
			cell1.innerHTML = nazwisko;
			cell2.innerHTML = tel;
			cell3.innerHTML = mail;			
			
		}else{
			if(!checkImie(imie))
				komunikat.insertAdjacentHTML("beforeend", "<p>Imię nie może być puste</p>");
			if(!checkNazwisko(nazwisko))
				komunikat.insertAdjacentHTML("beforeend","<p>Nazwisko nie może być puste</p>");
			if(!checkTel(tel))
				komunikat.insertAdjacentHTML("beforeend","<p>Niepoprawny format telefonu</p>");
			if(!checkMail(mail))
				komunikat.insertAdjacentHTML("beforeend","<p>Niepoprawny e-mail</p>");
		}
		
		
		function checkImie(imie){
			if(imie == "")
				return false;
			else
				return true;
		}
		
		function checkNazwisko(naz){
			if(naz == "")
				return false;
			else
				return true;
		}
		
		function checkTel(tel){
			let pattTel = /[0-9]{9}/g;
			if(!(pattTel.test(tel)))
				return false;
			else
				return true;
		}
		
		function checkMail(mail){
			let pattMail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/g;
			if(!(pattMail.test(mail.toLowerCase())))
				return false;
			else
				return true;
		}		
		
	});
	
});