function getAccount (clientName, version) {
	var log = "Client Name: ";
	function getFullLog () { 
		return log + clientName + " " + version;   
	}
	return getFullLog ();
}

getAccount("Perdue", 15);

