var Vehicle = function(numWheels){
	if(numWheels==4){
		var Auto = function(make,model){
			this.topSpeed = 100;
			this.make = make;
			this.model = model;
			this.getDetails = function(){
				return 'this is a '+this.make+' '+this.model+' with topspeed='+this.topSpeed;
			};
		};
		Auto.extend = function(overrides){

			var value = {};
			var key;

			// copy all object properties
			for (key in object){
				value[key] = object[key];
			}

			// override object properties
			for (key in overrides){
				value[key] = overrides[key];

				// store reference to super properties
				object[key] !== undefined && (
					value["__" + key] = object[key]
				);
			}

			return _(value);                              //returns the constructor??
		};
		return Car;
	} else if (numWheels==2) {
		var Bike = function(make,model){

		}
	}

};