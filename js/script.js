var jsonData = "" ;

function insertLabel(name){

	var tempHTML = "<label>"+name+"</label><br><br>";
	$(".formCanvas").append(tempHTML);

	jsonData += '{ "name":"labelField", "type":"label", "required":"empty"}';
}

function insertTextField(name){

	var r = confirm("Is text field required??");
	if ( r == true){
		var tempHTML = "<input type='text' name="+name+" required><br><br>";
		jsonData += '{ "name":"textField", "type":"text", "required":"true"}';
	}
	else{
		var tempHTML = "<input type='text' name="+name+"><br><br>";
		jsonData += '{ "name":"textField", "type":"text", "required":"false"}';
	}
	$(".formCanvas").append(tempHTML);
}
function insertPasswordField(name){

	var r = confirm("Is password field required??");
	if ( r == true){
		var tempHTML = "<input type='password' name="+name+" required><br><br>";
		jsonData += '{ "name":"passwordField", "type":"password", "required":"true"}';
	}
	else{
		var tempHTML = "<input type='password' name="+name+"><br><br>";
		jsonData += '{ "name":"passwordField", "type":"password", "required":"false"}';
	}
	$(".formCanvas").append(tempHTML);

}
function insertSelectOptions(name){

	var r = confirm("Is select options field required??");
	var y = prompt("Please enter number of selection options");
	var i=0;
	var filler="";
	var data = new Array();
	for(i=0;i<y;i++){

		data[i] = prompt("Please enter option value");

	}
	for(i=0;i<y;i++){

		filler += "<option value="+data[i]+">"+data[i]+"</option>";

	}
	if ( r == true){
		var tempHTML = "<select name="+name+" required>"+filler+"</select><br><br>";
		jsonData += '{ "name":"selectOptionField", "type":"select", "required":"true"}';
	}
	else{
		var tempHTML = "<select name="+name+">"+filler+"</select><br><br>";
		jsonData += '{ "name":"selectOptionField", "type":"select", "required":"false"}';
	}
	$(".untitledForm").append(tempHTML);
}
function insertRadioButton(name){

	var r = confirm("Is radio button field required??");
	var y = prompt("Please enter number of radio button options");
	var i = 0;
	var tempHTML="";
	var data = new Array();
	for(i=0;i<y;i++){

		data[i] = prompt("Please enter radio button option value");

	}
	for(i=0;i<y;i++){

		if ( r == true){
			tempHTML += "<input type='radio' name="+name+" value="+data[i]+" required>"+data[i]+" <br><br/>";
			jsonData += '{ "name":"radioButtonField", "type":"radioButton", "required":"true"}';
		}
		else{
			tempHTML += "<input type='radio' name="+name+" value="+data[i]+" >"+data[i]+" <br><br/>";
			jsonData += '{ "name":"radioButtonField", "type":"radioButton", "required":"false"}';
		}

	}
	$(".formCanvas").append(tempHTML);
}
function insertFileField(name){

	var r = confirm("Is insert file field required??");
	if ( r == true){
		var tempHTML = "<input type='file' name="+name+" required><br><br>";
		jsonData += '{ "name":"fileField", "type":"file", "required":"true"}';
	}
	else{
		var tempHTML = "<input type='file' name="+name+"><br><br>";
		jsonData += '{ "name":"fileField", "type":"file", "required":"false"}';
	}
	$(".formCanvas").append(tempHTML);
}
function insertDataList(name){

	var r = confirm("Is data list required??");
	var y = prompt("Please enter number of datalist items");
	var i = 0;
	var filler="";
	var data = new Array();
	for(i=0;i<y;i++){

		data[i] = prompt("Please enter datalist item value");

	}
	for(i=0;i<y;i++){

		filler += "<option value="+data[i]+">";

	}
	if ( r == true){
		var tempHTML = "<input list="+name+" required><datalist id="+name+">"+filler+"</datalist><br><br>";
		jsonData += '{ "name":"datalistField", "type":"datalist", "required":"true"}';
	}
	else{
		var tempHTML = "<input list="+name+"><datalist id="+name+">"+filler+"</datalist><br><br>";
		jsonData += '{ "name":"datalistField", "type":"datalist", "required":"false"}';
	}
	$(".formCanvas").append(tempHTML);

}
function insertNumberField(name){

	var r = confirm("Is number field required??");
	if ( r == true){
		var tempHTML = "<input type='number' name="+name+" required><br><br>";
		jsonData += '{ "name":"numberField", "type":"number", "required":"true"}';
	}
	else{
		var tempHTML = "<input type='number' name="+name+" ><br><br>";
		jsonData += '{ "name":"numberField", "type":"number", "required":"false"}';
	}
	$(".formCanvas").append(tempHTML);
}
function insertTextArea(name){

	var r = confirm("Is text area field required??");
	if ( r == true){
		var tempHTML = "<textarea name="+name+" required></textarea><br><br>";
		jsonData += '{ "name":"textAreaField", "type":"textarea", "required":"true"}';
	}
	else{
		var tempHTML = "<textarea name="+name+" ></textarea><br><br>";
		jsonData += '{ "name":"textAreaField", "type":"textarea", "required":"false"}';
	}
	$(".formCanvas").append(tempHTML);
}
function insertKeygen(name) {

	var r = confirm("Is keygen field required??");
	if ( r == true){
		var tempHTML = "<keygen name="+name+" required><br><br>";
		jsonData += '{ "name":"keygenField", "type":"keygen", "required":"true"}';
	}
	else{
		var tempHTML = "<keygen name="+name+"><br><br>";
		jsonData += '{ "name":"keygenField", "type":"keygen", "required":"false"}';
	}
	$(".formCanvas").append(tempHTML);

}
function insertButton(name){

	var tempHTML = "<input type='submit' class='success' name="+name+" value='Submit'><br><br>";
	jsonData += '{ "name":"submitButton", "type":"button", "required":"empty"}';
	$(".formCanvas").append(tempHTML);
	localStorage.setItem("formData",jsonData);
}