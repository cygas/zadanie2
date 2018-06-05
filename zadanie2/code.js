window.addEventListener("load", function(){	
	
	let submit = document.getElementById("submit");
	const badImie = "<p>Imię nie może być puste</p>";
	const badNazwisko = "<p>Nazwisko nie może być puste</p>";
	const badTel = "<p>Niepoprawny format telefonu</p>";
	const badMail = "<p>Niepoprawny e-mail</p>";
	const allRight = "<h4>Udało się zapisać dane</h4>";
	let buttonColor = document.getElementById("buttonColor");
	let iteration = 0;	
	
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
			komunikat.innerHTML = allRight;
			let row = table.insertRow();
			row.id="row" + iteration;
			row.className = "unchecked";
			let cell0 = row.insertCell(0);
			let cell1 = row.insertCell(1);
			let cell2 = row.insertCell(2);
			let cell3 = row.insertCell(3);			
			
			let checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.id = "chkb" + iteration;
			iteration ++;			
			
			cell0.innerHTML = imie;
			cell1.innerHTML = nazwisko;
			cell2.innerHTML = tel;
			cell3.innerHTML = mail;			
			row.appendChild(checkbox);
						
		}else{
			if(!checkImie(imie))
				komunikat.insertAdjacentHTML("beforeend", badImie);
			if(!checkNazwisko(nazwisko))
				komunikat.insertAdjacentHTML("beforeend", badNazwisko);
			if(!checkTel(tel))
				komunikat.insertAdjacentHTML("beforeend", badTel);
			if(!checkMail(mail))
				komunikat.insertAdjacentHTML("beforeend", badMail);
		}			
		
	});
	
	buttonColor.addEventListener("click", changeColor);
	
});