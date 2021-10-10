// création de notre objet
function Etudiant(
  nom,
  prenom,
  email,
  etudes,
  bio /*age, genre, pays, option, listeDesCours*/
) {
  this.id = uuid.v4();
  this.nom = nom;
  this.prenom = prenom;
  this.email = email;
  this.etudes = etudes;
  this.bio = bio;
  // this.age = age;
  // this.genre = genre;
  // this.pays = pays;
  // this.option = option;
  // this.listeDesCours = listeDesCours;
}
// ici on initialise notre tableau d'étudiants à vide
//mais pour linstant plus besoin du tableau on va lajouter dans
//le LOCALSTORAGE
// const etudiants = [];

const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
// const age = document.querySelector("#age");
// const genre = document.querySelector("#genre");
// const pays = document.querySelector("#pays");
// const option = document.querySelector("#option");
// const listeDesCours = document.querySelector("#listeDesCours");
const email = document.querySelector("#email");
const etudesSelect = document.querySelector("#etudesSelect");
const bioText = document.querySelector("#bioText");

const form = document.querySelector("#form");

//Ensuite on vien créer l'evenement de notre forulaire
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // ici = une syntaxe plus dure
  // etudiants.push(new Etudiant(nom.value,prenom.value,age.value,genre.value,pays.value,option.value,listeDesCours.value))
  //------------ ------------ -ici syntaxe plus facile -----------------------
  const newEtudiant = new Etudiant(
    nom.value,
    prenom.value,
    // age.value,
    // genre.value,
    // pays.value,
    // option.value,
    // listeDesCours.value
    email.value,
    etudesSelect.value,
    bioText.value
  );
  //   etudiants.push(newEtudiant); PLUS BESOIN AUSSI PR LE MOMENT

  //Pour récuprer quelque chose dans le local storage qui existe deja
  //on fait un getItem
  let etudiants = localStorage.getItem("etudiants");
  //sinon pour definir une valeur dans le localstorage on fait un SETITEM
  //donc on fait un test :

  //Ne pas oblier que le if ici c si c le tout premier enregistrement d'un etudiant

  if (etudiants === null) {
    //ici le setItem psk etudiants n'existe pas encore
    // loclstorage stock les données en string
    //du coup ici on créer un tableau vide pour ajouter notre premier etudiants

    const etudiantsList = [];
    etudiantsList.push(newEtudiant);
    // ici le json.stringify nous permet (de parse la chaine de caractere
    // afin d'envoyer un tableau est pas une chaine de caractere)
    localStorage.setItem("etudiants", JSON.stringify(etudiantsList));
  }
  // ici si c pas null du coup c qu 'il existe deja 1 etudiant
  else {
    //ici tu recoi une chaine de caratere aussi
    //et le json.parse permet de recup cette chaine en un tableau
    etudiants = JSON.parse(etudiants);
    etudiants.push(newEtudiant);
    //Ensuite on remet à jour le localstorage avec notre nouvelle valeur :
    localStorage.setItem("etudiants", JSON.stringify(etudiants));
  } // grace au localstorage on va pouvoir recup nos valeurs dans la page 2

  // ici on va gerer les champs remplie pour les mettres à vide:
  nom.value = "";
  prenom.value = "";
  // age.value = "";
  // genre.value = "";
  // pays.value = "";
  // option.value = "";
  // listeDesCours.value = "";
  email.value = "";
  etudesSelect.value = "";
  bioText.value = "";

  //window.location nous permet de changer de page quand on valide le formulaire
  window.location = "listeDesEtudiant.html";
});
