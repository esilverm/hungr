let axios = require("axios");

//TODO use Nicholas' advice of a dotenv (.env) file to store this
let SECRET_api_key = "[redacted]";

let maps_api = async (endpoint, query) => {
	let endpoint_map = {
		"nearby": "nearbysearch"
	};

	//TODO take in some native location type instead
	if ("location" in query){
		//strip off parens
		query["location"] = query["location"].slice(1, -1);
	}

	//TODO hacky but it works for now
	let merged_query = "";
	for (let [k, v] of Object.entries(query)){
		merged_query += "&" + k + "=" + v;
	}
	if (merged_query.length){
		merged_query = merged_query.slice(1);
	}

	let resp = await axios.get("https://maps.googleapis.com/maps/api/place/" + endpoint_map[endpoint] + "/json?" + merged_query + "&key=" + SECRET_api_key);

	console.log(resp.data.results);
}

let main = async () => {
	await maps_api("nearby", {
		"location": "(40.1230123,-74.3210321)",
		"radius": "6000", //6000 what???? minutes, celsius, tons?
		"type": "restaurant", //should have an enum for this
		"keyword": "sushi"
	});
};

main();
