function getAccount (clientName, version) {
	var log = "Client Name: ";
	function getFullLog () { 
		return log + clientName + " " + version;   
	}
	return getFullLog ();
}

getAccount("L.L.Bean", 15);

