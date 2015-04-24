var SaveManager = {
	
	GetInt : function(key){
		return parseInt(localStorage[key]);
	},
	SetInt : function(key,value){
		localStorage[key] = value;
	},
	GetBool : function(key){
		if(localStorage[key] == "true")
			return true;
		else
			return false
	},
	SetBool : function(key,value){
		localStorage[key] = value;
	},
	GetFloat : function(key){
		return parseFloat(localStorage[key]);
	},
	SetFloat : function(key,value){
		localStorage[key] = value;
	},
	GetObject : function(key){
		return JSON.parse(localStorage[key]);
	},
	SetObject : function(key,value){
		localStorage[key] = JSON.stringify(value);
	}

}