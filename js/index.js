const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const dField = document.querySelector(".date");
let dateBody = document.querySelector("#dateBody");
let closeButton = document.querySelector("#closee-btn");

const patientBtn = document.getElementById("patientBtn")
const HospitalBtn = document.getElementById("HospitalBtn")
const MassagesBtn = document.getElementById("MassagesBtn")
const AnalyticsBtn = document.getElementById("AnalyticsBtn")
const addUsersBtn = document.getElementById("addUsersBtn")
const main = document.querySelector('main')
const right = document.querySelector('#right')
const container = document.querySelector('.container')
const massages = document.querySelector('#massages')
const patients = document.querySelector('#patients')
const hospitals = document.querySelector('#hospitals')
const addNewUsers =document.querySelector('#addNewUsers')
const static = document.getElementById("static")
const recentUpdate = document.getElementById('recentUpdate')
const addHospitalBTN = document.getElementById('addHospitalBTN')
const addPatientsBtn = document.getElementById('addPatientsBtn')
const hospitalData =document.getElementById('hospitalData')
const patientsData = document.getElementById('patientsData')
const buttens = document.querySelector('.buttens')

static.style.display='block';

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})


dateBody.innerHTML=" ";
let date = new Date();
let dr=`
<p>${new Date().toDateString()}</p>
 <img src="./images/calendar.jpg">
`
dateBody.innerHTML+=dr;





// show sidebar 
menuBtn.addEventListener('click', () =>{
sideMenu.style.display = 'block';
})
closeButton.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})

patientBtn.addEventListener('click',()=>{
    main.style.display='none';
    right.style.display='none';
    recentUpdate.style.display='none';
    patients.style.display='block';
    massages.style.display='none';
    addNewUsers.style.display='none'
    hospitals.style.display='none'
    hospitalData.style.display='none'
    patientsData.style.display='none'
    patientBtn.classList.add("active")
    HospitalBtn.classList.remove("active")
    MassagesBtn.classList.remove("active")
    AnalyticsBtn.classList.remove("active")
    addUsersBtn.classList.remove("active")
    container.style.gridTemplateColumns = '14rem auto';
   })

HospitalBtn.addEventListener('click',()=>{
    right.style.display='none';
    main.style.display='none';
    recentUpdate.style.display='none';
    patients.style.display='none';
    massages.style.display='none';
    addNewUsers.style.display='none'
    hospitals.style.display='block'
    patientBtn.classList.remove("active")
    HospitalBtn.classList.add("active")
    MassagesBtn.classList.remove("active")
    AnalyticsBtn.classList.remove("active")
    addUsersBtn.classList.remove("active")
    hospitalData.style.display='none'
    patientsData.style.display='none'
    container.style.gridTemplateColumns = '14rem auto ';
   })

MassagesBtn.addEventListener('click',()=>{
    right.style.display='none';
    main.style.display='none';
    recentUpdate.style.display='none';
    patients.style.display='none';
    massages.style.display='block';
    addNewUsers.style.display='none'
    hospitals.style.display='none'
    patientBtn.classList.remove("active")
    HospitalBtn.classList.remove("active")
    MassagesBtn.classList.add("active")
    AnalyticsBtn.classList.remove("active")
    addUsersBtn.classList.remove("active")
    hospitalData.style.display='none'
    patientsData.style.display='none'
    container.style.gridTemplateColumns = '14rem auto ';
   })

AnalyticsBtn.addEventListener('click',()=>{
    right.style.display='block';
    main.style.display='block';
    recentUpdate.style.display='block';
    patients.style.display='none';
    massages.style.display='none';
    addNewUsers.style.display='none'
    hospitals.style.display='none'
    patientBtn.classList.remove("active")
    HospitalBtn.classList.remove("active")
    MassagesBtn.classList.remove("active")
    AnalyticsBtn.classList.add("active")
    addUsersBtn.classList.remove("active")
    hospitalData.style.display='none'
patientsData.style.display='none'
container.style.gridTemplateColumns = '14rem auto 23rem';
   })

addUsersBtn.addEventListener('click',()=>{
    right.style.display='none';
    main.style.display='none';
    recentUpdate.style.display='none';
    patients.style.display='none';
    massages.style.display='none';
    addNewUsers.style.display='block'
    hospitals.style.display='none'
    patientBtn.classList.remove("active")
    HospitalBtn.classList.remove("active")
    MassagesBtn.classList.remove("active")
    AnalyticsBtn.classList.remove("active")
    addUsersBtn.classList.add("active")
    hospitalData.style.display='none'
    patientsData.style.display='none'
    buttens.style.display='block'
    container.style.gridTemplateColumns = '14rem auto';

   })


   addHospitalBTN.addEventListener('click',()=>{
    buttens.style.display='none'
    hospitalData.style.display='block'
   })
   addPatientsBtn.addEventListener('click',()=>{
    buttens.style.display='none'
    patientsData.style.display='block'
   })


// CreatePatients(patentsDataRegistration)

// search patients //

const searchfunction=()=>{
    let filter =document.getElementById("myInput").value.toUpperCase();
    let myTable = document.getElementById('patientBody');
    let tr = myTable.getElementsByTagName('tr');
     for(var i=0; i<tr.length;i++){
       let td = tr[i].getElementsByTagName('td')[4];
       if(td){
         let textValue = td.textContent || td.innerHTML;
         if(textValue.toUpperCase().indexOf(filter)> -1){
           tr[i].style.display ="";
           

         }
         else{
           tr[i].style.display ="none";

         }
       }
     }
   }

// search hospitals //
const searchfunctionForHospital=()=>{
    let filter =document.getElementById("Input").value.toUpperCase();
    let myTable = document.getElementById('hospitalBody');
    let tr = myTable.getElementsByTagName('tr');
     for(var i=0; i<tr.length;i++){
       let td = tr[i].getElementsByTagName('td')[0];
       if(td){
         let textValue = td.textContent || td.innerHTML;
         if(textValue.toUpperCase().indexOf(filter)> -1){
           tr[i].style.display ="";

         }
         else{
           tr[i].style.display ="none";
         }
       }
     }
   }















// // CHAAAAAAT
// document.querySelector(".chat[data-chat=person2]").classList.add("active-chat");
// document.querySelector(".person[data-chat=person2]").classList.add("active");

// let friends = {
// 		list: document.querySelector("ul.peopleChat"),
// 		all: document.querySelectorAll(".leftChat .personChat"),
// 		name: ""
// 	},
// 	chat = {
// 		container: document.querySelector(".containerChat .rightChat"),
// 		current: null,
// 		person: null,
// 		name: document.querySelector(".containerChat .rightChat .topChat .nameChat")
// 	};

// friends.all.forEach((f) => {
// 	f.addEventListener("mousedown", () => {
// 		f.classList.contains("active") || setAciveChat(f);
// 	});
// });

// function setAciveChat(f) {
// 	friends.list.querySelector(".active").classList.remove("active");
// 	f.classList.add("active");
// 	chat.current = chat.container.querySelector(".active-chat");
// 	chat.person = f.getAttribute("data-chat");
// 	chat.current.classList.remove("active-chat");
// 	chat.container
// 		.querySelector('[data-chat="' + chat.person + '"]')
// 		.classList.add("active-chat");
// 	friends.name = f.querySelector(".nameChat").innerText;
// 	chat.name.innerHTML = friends.name;
// }





// document.querySelector('.chat[data-chat=person1]').classList.add('active-chat')
// document.querySelector('.personChat[data-chat=person1]').classList.add('activeted')


// let friends = {
//     list: document.querySelector(".peopleChat"),
//     all: document.querySelectorAll(".leftChat .personChat"),
//     name: ""
// },
// chat = {
//     container: document.querySelector(".containerChat .rightChat"),
//     current: null,
//     person: null,
//     name: document.querySelector(".containerChat .rightChat .topChat .nameChat")
// };
// friends.all.forEach((f) => {
// 	f.addEventListener("mousedown", () => {
// 		f.classList.contains("active") || setAciveChat(f);
// 	});
// });

// function setAciveChat(f) {
// 	friends.list.querySelector(".activeted").classList.remove("activeted");
// 	f.classList.add("activeted");
// 	chat.current = chat.container.querySelector(".active-chat");
// 	chat.person = f.getAttribute("data-chat");
// 	chat.current.classList.remove("active-chat");
// 	chat.container
// 		.querySelector('[data-chat="' + chat.person + '"]')
// 		.classList.add("active-chat");
// 	friends.name = f.querySelector(".nameChat").innerText;
// 	chat.name.innerHTML = friends.name;
// }
// document.addEventListener('DOMContentLoaded', function () {
//     // Select all chat list items and chat sections
//     const chatItems = document.querySelectorAll('.personChat');
//     const chatSections = document.querySelectorAll('.chat');

//     chatItems.forEach(item => {
//       item.addEventListener('click', () => {
//         // Remove the 'active' class from all chat items
//         chatItems.forEach(el => el.classList.remove('activeted'));

//         // Add the 'active' class to the clicked chat item
//         item.classList.add('activeted');

//         // Get the chat data attribute of the clicked item
//         const chatData = item.getAttribute('data-chat');

//         // Hide all chat sections
//         chatSections.forEach(section => {
//           section.classList.remove('activeted');
//         });

//         // Show the corresponding chat section
//         const activeChat = document.querySelector(`.chat[data-chat="${chatData}"]`);
//         if (activeChat) {
//           activeChat.classList.add('activeted');
//         }
//       });
//     });
//   });





// close sidebar

closeBtn.addEventListener('click',() => {
    sideMenu.style.display = 'none';
})



// change theme






// // start: Sidebar
// document.querySelector('.chat-sidebar-profile-toggle').addEventListener('click', function(e) {
//     e.preventDefault()
//     this.parentElement.classList.toggle('active')
// })

// document.addEventListener('click', function(e) {
//     if(!e.target.matches('.chat-sidebar-profile, .chat-sidebar-profile *')) {
//         document.querySelector('.chat-sidebar-profile').classList.remove('active')
//     }
// })
// // end: Sidebar



// // start: Coversation
// document.querySelectorAll('.conversation-item-dropdown-toggle').forEach(function(item) {
//     item.addEventListener('click', function(e) {
//         e.preventDefault()
//         if(this.parentElement.classList.contains('active')) {
//             this.parentElement.classList.remove('active')
//         } else {
//             document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
//                 i.classList.remove('active')
//             })
//             this.parentElement.classList.add('active')
//         }
//     })
// })

// document.addEventListener('click', function(e) {
//     if(!e.target.matches('.conversation-item-dropdown, .conversation-item-dropdown *')) {
//         document.querySelectorAll('.conversation-item-dropdown').forEach(function(i) {
//             i.classList.remove('active')
//         })
//     }
// })

// document.querySelectorAll('.conversation-form-input').forEach(function(item) {
//     item.addEventListener('input', function() {
//         this.rows = this.value.split('\n').length
//     })
// })

// document.querySelectorAll('[data-conversation]').forEach(function(item) {
//     item.addEventListener('click', function(e) {
//         e.preventDefault()
//         document.querySelectorAll('.conversation').forEach(function(i) {
//             i.classList.remove('active')
//         })
//         document.querySelector(this.dataset.conversation).classList.add('active')
//     })
// })

// document.querySelectorAll('.conversation-back').forEach(function(item) {
//     item.addEventListener('click', function(e) {
//         e.preventDefault()
//         this.closest('.conversation').classList.remove('active')
//         document.querySelector('.conversation-default').classList.add('active')
//     })
// })
// end: Coversation



















// // **********************************
// // Function to fetch chat data
// async function fetchChatData(chatId) {
//     const chatDoc = await db.collection('Chats').doc(chatId).get();
//     if (chatDoc.exists) {
//         return chatDoc.data();
//     } else {
//         console.log("No such chat!");
//     }
// }

// // Function to send a message
// async function sendMessage(chatId, message) {
//     const chatRef = db.collection('Chats').doc(chatId);
//     await chatRef.update({
//         messages: firebase.firestore.FieldValue.arrayUnion(message)
//     });
// }

// const chatId = 'some-chat-id';  // Replace with dynamic chat ID
// fetchChatData(chatId).then(chatData => {
//     console.log(chatData);
//     // Display chat data in the HTML
// });

// document.getElementById('sendButton').addEventListener('click', async () => {
//     const messageContent = document.getElementById('messageInput').value;
//     const message = {
//         senderID: auth.currentUser.uid,
//         content: messageContent,
//         messageType: 'Text',
//         sentAt: firebase.firestore.Timestamp.fromDate(new Date())
//     };
//     await sendMessage(chatId, message);
// });



// ***************************


// ADD USERS

// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         container.style.gridTemplateColumns = '100%';
//     } 
//   }
  
//   // Create a MediaQueryList object
//   var x = window.matchMedia("(max-width: 768px)")
  
//   // Call listener function at run time
//   myFunction(x);
  
//   // Attach listener function on state changes
//   x.addEventListener("change", function() {
//     myFunction(x);
//   });
 



// **********************
