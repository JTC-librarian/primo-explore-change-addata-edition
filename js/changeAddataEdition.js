app.component('prmBriefResultAfter', {
		bindings:{parentCtrl:'<'},
		controller: 'prmBriefResultAfterController',
		template: ''
});
app.controller('prmBriefResultAfterController', [function(){
	changeAddataEdition(this);
}]);

function changeEditionStatement(oldEd) {
	var newEd = oldEd.toLowerCase();
	newEd = newEd.replace("first", "1st");
	newEd = newEd.replace("second", "2nd");
	newEd = newEd.replace("third", "3rd");
	newEd = newEd.replace("fourth", "4th");
	newEd = newEd.replace("fifth", "5th");
	newEd = newEd.replace("sixth", "6th");
	newEd = newEd.replace("seventh", "7th");
	newEd = newEd.replace("eighth", "8th");
	newEd = newEd.replace("ninth", "9th");
	newEd = newEd.replace("tenth", "10th");
	newEd = newEd.replace("eleventh", "11th");
	newEd = newEd.replace("twelvth", "12th");
	newEd = newEd.replace("thirteenth", "13th");
	newEd = newEd.replace("fourteenth", "14th");
	newEd = newEd.replace("fifteenth", "15th");
	newEd = newEd.replace("sixteenth", "16th");
	newEd = newEd.replace("seventeenth", "17th");
	newEd = newEd.replace("eighteenth", "18th");
	newEd = newEd.replace("nineteenth", "19th");
	newEd = newEd.replace("twentieth", "20th");
	newEd = newEd.replace("twenty ", "2");
	newEd = newEd.replace("twenty-", "2");
	newEd = newEd.replace("twenty", "2");
	newEd = newEd.replace("edition", "ed");
	return newEd;
}

function changeAddataEdition(vm) {
	if (vm.parentCtrl.item.pnx.addata.edition) {
		vm.parentCtrl.item.pnx.addata.edition[0] = changeEditionStatement(vm.parentCtrl.item.pnx.addata.edition[0]);
	}
}