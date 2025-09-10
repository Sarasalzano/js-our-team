const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];
console.log(teamMembers);

//seleziono elemento di output
const cardName = document.querySelector(".riga");

//setto variabile accumulo output
let cards="";

//ora tiro fuori i singoli oggetti
for(index=0; index<teamMembers.length; index++) {
  const member = teamMembers[index];
  console.log(member);
  cards += `<div class="card">
      <div class="item">
          <img src="${member.img}" class="card-img-top" alt="image">
      </div>
      <div class="card-text">
          <h5 class="name">${member.name}</h5>
          <p class="role">${member.role}</p>
          <p class="contact">${member.email}</p>
      </div> 
    </div>`


}
console.log(cards);
cardName.innerHTML= cards;
