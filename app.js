// function Personne (nom, prénom, age, metier){
// 	this.nom = nom; 
// 	this.prénom = prénom; 
// 	this.age = age; 
// 	this.metier = metier; 

// 	this.affiche = function () {
// 		console.log(this.nom + " " + this.prénom + " a " + this.age+ " ans " + " et il est " + this.metier)
// 		return(this.nom + " " + this.prénom + " a " + this.age+ " ans " + " et il ou elle est " + this.metier);
// 	}


// };



// function Titre (titre) {
// 	this.titre = titre;

// 	this.afficher = function() {
// 		console.log(this.titre + " " + "est le titre de cette page")
// 		return(this.titre + " " + "est le titre de cette page")

// 	}
// }




// var mickael = new Personne("Pol", "Mickael", 29, "developpeur web");
// var patrick = new Personne("Pol", "Patrick", 65, "comptable");
// var josephine = new Personne("Pol", "Josephine", 63, "aide-soignate");
// var carole = new Personne("Pol", "Carole", 45, "aide-soignate");
// var titre2 = new Titre("Salut les copains");


// $('#afficher1').html(mickael.affiche());
// $('#afficher2').html(carole.affiche());
// $('#afficher3').html(patrick.affiche());
// $('#afficher4').html(josephine.affiche());
// $('#titre1').html(titre2.afficher());
//------------------------------------------------------------------------------//

function Eleve (id ,prenom, nom, sexe, age) {
	this.id = id;
	this.prenom = prenom;
	this.nom = nom;
	this.sexe = sexe
	this.age = age;

	this.affiche = function(){
		if(this.sexe === "M"){
			console.log("Bonjour Monsieur " + " " + this.nom + " " + this.prenom);
		} else{
			console.log("Bonjour Madame " + " " + this.nom + " " + this.prenom);
		}

		/*autre façon de tester la conditon utiliser la condition terner
		"M" == this.sexe ? "Monsieur" : "Madame";
		*/ 
		// console.log("Madame/Mosieur" + " " + this.prenom + " " + this.nom);
		// return("Madame/Monsieur" + " " + this.prenom + " " + this.nom);
	}
};

function Classe (){
	this.curIdEleve = 1;
	this.eleves = [];
	
	this.addEleve = function(prenom, nom, sexe, age){
		this.eleves.push(new Eleve(this.curIdEleve, prenom, nom, sexe, age));
		this.curIdEleve++;
		
	}

	this.compteEleve = function(sexe){
		var n = this.eleves.length;
		if(sexe == "A"){
			return n;
		} 
		else { 
			
			var compterSexe = 0;
			for(var i = 0; i < n; i++){
				if(sexe == this.eleves[i].sexe){
					compterSexe++;
				}

				console.log(this.eleves[i].sexe);
			}
			return compterSexe;
		}
	}
	
	
	
};


var classe = new Classe();
classe.addEleve("mickael", "pol","F", 29);
classe.addEleve("paul", "lol", "M", 22);
classe.addEleve("polo", "redlls", "Z", 22);
classe.addEleve("jeremy", "taond", "M", 22);
classe.addEleve("martin", "blanc", "M", 22);
classe.addEleve("consuela", "danke", "F", 22);
classe.compteEleve();




