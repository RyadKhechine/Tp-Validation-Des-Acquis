// ici pour recuprer les etudiants sur la page 2
const etudiants = JSON.parse(localStorage.getItem("etudiants"));

//ici on recup l'Id corps qui est Id du tbody de la page
const listeDesEtudiants = document.querySelector("#corps");
const divAfficheEtudiant = document.querySelector("#divAfficheEtudiant");
//Ensuite on fait une boucle sur le tableau contact qu'on a appeller
//au dessus afin de recup chaque ligne à afficher
for (let i = 0; i < etudiants.length; i++) {
  const tr = document.createElement("tr"); //création du <tr> </tr>
  //------ ICI RAJOUT DE L'ID DANS NOTRE TD ----------
  const tdID = document.createElement("td");
  tdID.innerText = etudiants[i].id;

  const tdNom = document.createElement("td"); // création du <td> </td>
  //Ensuite on affiche le nom de l'étudiants grace au tableau
  //etudiant et a la boucle for ( on vien afficher le nom dans le "td" créer juste au dessus)
  tdNom.innerText = etudiants[i].nom;

  const tdPrenom = document.createElement("td");
  tdPrenom.innerText = etudiants[i].prenom;

  const tdEmail = document.createElement("td");
  tdEmail.innerText = etudiants[i].email;

  const tdEtudesSelect = document.createElement("td");
  tdEtudesSelect.innerText = etudiants[i].etudes;

  const tdBioText = document.createElement("td");
  tdBioText.innerText = etudiants[i].bio;

  // const tdAge = document.createElement("td");
  // tdAge.innerText = etudiants[i].age;

  // const tdGenre = document.createElement("td");
  // tdGenre.innerText = etudiants[i].genre;

  // const tdPays = document.createElement("td");
  // tdPays.innerText = etudiants[i].pays;

  // const tdOption = document.createElement("td");
  // tdOption.innerText = etudiants[i].option;

  // const tdListeDesCours = document.createElement("td");
  // tdListeDesCours.innerText = etudiants[i].listeDesCours;

  //ici création du ul pour une lsite POUR TEST --------------

  const div = document.createElement("div");
  const br = document.createElement("br");
  const liNom = document.createElement("span");
  liNom.innerText = etudiants[i].nom;

  const liPrenom = document.createElement("span");
  liPrenom.innerText = etudiants[i].prenom;
  // ------------------------------------------------

  //création du bouton voir
  const tdVoir = document.createElement("td");
  const afficheButton = document.createElement("button");
  afficheButton.innerText = "Voir";
  afficheButton.classList.add("btn-primary");
  tdVoir.appendChild(afficheButton);

  //création de la function qui nous permet d'afficher un etudiant

  afficheButton.addEventListener("click", function () {
    // window.location = "listeDesEtudiant.html";
    // ------------------ICI CE QU'ON A FAIT HIER SOIR
    divAfficheEtudiant.innerHTML = "";
    const pEtudiant = document.createElement("h4");
    const pEmail = document.createElement("p");
    const pBio = document.createElement("p");
    const pEtudesFaite = document.createElement("p");

    const texteEmail = document.createElement("span");
    const texteEtudes = document.createElement("span");
    const texteBio = document.createElement("span");

    pEtudiant.innerText = etudiants[i].nom + " " + etudiants[i].prenom;

    texteEmail.innerText = " Email :  ";
    pEmail.innerText = etudiants[i].email;

    texteEtudes.innerText = "Etude faite :";
    pEtudesFaite.innerText = etudiants[i].etudes;

    texteBio.innerText = "Bio :";
    pBio.innerText = etudiants[i].bio;

    // " " +
    // "Email : " +
    // etudiants[i].etudes +
    // "Etudes faite  : " +
    // etudiants[i].etudes +
    // " " +
    // "Bio : " +
    // etudiants[i].bio;
    // " " +
    // " Pays :" +
    // etudiants[i].pays +
    // " " +
    // " option :" +
    // etudiants[i].option;
    divAfficheEtudiant.append(
      pEtudiant,
      texteEmail,
      pEmail,
      texteEtudes,
      pEtudesFaite,
      texteBio,
      pBio
    );
    console.log(etudiants[i].tdEtudesSelect);
    /* ----------------------------------------------------------------------------------*/
    //---------- ici c un test ------------------------
    // div.append("Nom : " + liNom, liPrenom);
    // div.append(
    //   `${etudiants[i].prenom} ${etudiants[i].nom}
    //    Age : ${etudiants[i].age} `
    // );
    // divAfficheEtudiant.appendChild(div);
    // console.log(etudiants[i].nom);
    // this.parentElement.parentElement.remove();
    // ICI VOIR POUR TEST LE REMOVE PARENT ELEMENT
  });

  // création du bouton delete
  const tdDelete = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Supprimer";
  tdDelete.appendChild(deleteButton);
  deleteButton.classList.add("btn-danger");
  // création de la funtion qui nous permet de supprimer un etudiant
  deleteButton.addEventListener("click", function (e) {
    // this.parentElement.parentElement.remove();
    const index = etudiants.findIndex(function (etudiant) {
      return etudiant.id === etudiants[i].id;
    });
    etudiants.splice(index, 1);
    localStorage.setItem("etudiants", JSON.stringify(etudiants));
    window.location = "listeDesEtudiant.html";
    deleteButton.parentElement.parentElement.remove();
  });

  //on ajoute au tr toute nos valeurs
  tr.append(
    // tdID,
    tdNom,
    tdPrenom,
    tdEmail,
    // tdEtudesSelect,
    // tdBioText,
    // tdAge,
    // tdGenre,
    // tdPays,
    // tdOption,
    // tdListeDesCours,

    tdVoir,
    tdDelete
  );
  console.log(etudiants[i].bioText);
  //et ensuite on ajoute dans  notre listeDesEtuditans (qui est notre
  //tBody) le tr qu'on vien d'ajouter
  listeDesEtudiants.appendChild(tr); // ici appendChild psk il est seul
}
