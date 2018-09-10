function clicked() {

	var user = document.getElementById('username');
	var pass = document.getElementById('password');
	
	var coruser = "test";
	var corpass = "123";
	
	if(user.value == coruser) {
	
		if(pass.value == corpass) {
		
			window.alert("You are logged in as " + user.value);
			window.open("http://738t121.mars-e1.mars-hosting.com/IZABERI/izaberi.html", "_parent");
		
		} else {
		
			window.alert("Incorrect username or password!");
		
		}
	
	} else {
	
			window.alert("Incorrect username or password!");
	
	}

}