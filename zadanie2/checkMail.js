function checkMail(mail){
			const pattMail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/g;
			if(!(pattMail.test(mail.toLowerCase())))
				return false;
			else
				return true;
		}		