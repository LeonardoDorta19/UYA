function report(){
	var links = document.getElementsByTagName("a")
	console.log("cantidad de links: " + links.length)
	var paragraph = document.getElementsByTagName("p")
	console.log("cantidad de parrafos: " + paragraph.length)


	var typesOfHeaders = ["h1","h2","h3","h4","h5","h6","h7"]

	typesOfHeadersLength = 0

	for (i of typesOfHeaders){
		typesOfHeadersLength += document.getElementsByTagName(i).length
	}

	console.log("cantidad de encabezados: " + typesOfHeadersLength)
}


let companyUsers = 

{
	"dni": 54445454,
	"bornYear": 1991,
	"startDate": 2015,
	"productivityPlus": 15,
	"baseSalary": 1500,
}




function AgeAndSalary(companyUsers){

	var date = new Date() 
	var age =  parseInt(date.getFullYear()) - parseInt(companyUsers.bornYear)
	var longevity = (parseInt(date.getFullYear()) - parseInt(companyUsers.startDate))
	var totalSalary = companyUsers.baseSalary * (longevity + companyUsers.productivityPlus) 
	alert("el usuario tiene " + age + " años y su salario es de  " + totalSalary )
}

console.log(companyUsers)