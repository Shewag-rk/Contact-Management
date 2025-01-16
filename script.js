// METHOD 1
// let choice = prompt(
//   "Pick a number \n 1.Add_Contact \n 2.Display_Contact \n 3.Search Contact \n 4.Update_Contact \n 5.Delete_contact \n 6.Sort_Contact:"
// );
// if (choice == 1) {
//   contactDetails();
//   validationProcess();
// }
// function contactDetails() {
//   var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   var numberPattern = /^\d{10}$/;
//   //   let username = prompt("Enter the person name:");
//   //   let emailID = prompt("Enter email of " + username + ":");
//   //   let phonenumb = prompt("Enter the number of " + username + ":");
//   function validationProcess() {
//     const contactList = [];
//     if (username == "" || emailID == "" || phonenumb == "") {
//       alert("Please fill all the boxes before submitting!");
//       return false;
//     } else {
//       alert("Your form has been submitted!");
//     }
//   }
//   if (emailPattern == emailID) {
//     alert("It is not vaild Email Address.");
//     return false;
//   } else if (emailPattern != emailID) {
//     alert("It is vaild Email Address.");
//   }
//   if (numberPattern == phonenumb) {
//     alert("It is not valid Phone Number.");
//     return false;
//   } else if (numberPattern != phonenumb) {
//     alert("It is valid  Phone Number.");
//   }
//   let ID = Math.floor(Math.random() * 10000);

//   const itemDetails = [{ username, emailID, phonenumb, ID }];
//   contactList.push(itemDetails);
//   console.log("Update " + contactList);
//   validationProcess();
// }
// contactDetails();

// Completed 2 Test Case:

// let contactList = [];
// function mainMenu() {
//   let choice = prompt(
//     "Pick a number:\n" +
//       "1. Add Contact\n" +
//       "2. Display Contacts\n" +
//       "3. Search Contact\n" +
//       "4. Update Contact\n" +
//       "5. Delete Contact\n" +
//       "6. Sort Contacts\n" +
//       "7. Exit"
//   );
//   switch (choice) {
//     case "1":
//       addContact();
//       break;
//     case "2":
//       displayContacts();
//       break;
//     case "3":
//         searchContacts();
//         break;
//     case "7":
//       console.log("Exiting Contact Manager.");
//       return;
//     default:
//       console.log("Invalid choice. Please try again.");
//   }
//   mainMenu();
// }
// function addContact() {
//   let username = prompt("Enter the person's name:");
//   if (typeof username !== "string" || username.trim() === "") {
//     console.error("Invalid username. It must be a non-empty string.");
//     return;
//   }
//   let emailID = prompt("Enter email of " + username + ":");
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(emailID)) {
//     console.error("Invalid email ID. Provide a valid email address.");
//     return;
//   }
//   let phonenumb = prompt("Enter the phone number of " + username + ":");
//   const phoneRegex = /^\d{10}$/;
//   if (!phoneRegex.test(phonenumb)) {
//     console.error("Invalid Phone Number. Provide a valid 10-digit phone number.");
//     return;
//   }
//   let ID = Math.floor(Math.random() * 10000);
//   const itemDetails = { username: username.trim(), emailID, phonenumb, ID };
//   contactList.push(itemDetails);
//   console.log("Contact added successfully:", itemDetails);
// }
// function displayContacts() {
//   if (contactList.length === 0) {
//     console.log("No contacts to display.");
//     return;
//   }
//   console.log("Contact List:");
//   contactList.forEach((contact, index) => {
//     console.log(
//       `${index + 1}. Name: ${contact.username}, Email: ${contact.emailID}, Phone: ${contact.phonenumb}, ID: ${contact.ID}`
//     );
//   });
// }
// function searchContacts(){}
// mainMenu();

let contactList = [];
function mainMenu() {
  let choice = prompt(
    "Pick a number:\n" +
      "1. Add Contact\n" +
      "2. Display Contacts\n" +
      "3. Search Contact\n" +
      "4. Update Contact\n" +
      "5. Delete Contact\n" +
      "6. Sort Contacts\n" +
      "7. Exit: "
  );
  switch (choice) {
    case "1":
      addContact();
      break;
    case "2":
      displayContacts();
      break;
    case "3":
      searchContacts();
      break;
    case "4":
      updateContacts();
      break;
    case "5":
      deleteContacts();
      break;
    case "6":
      sortContacts();
      break;
    case "7":
      console.log("Exiting Contact Manager.");
      return;
    default:
      console.log("Invalid choice. Please try again.");
  }
  mainMenu();
}
function addContact() {
  let username = prompt("Enter the person's name:");
  if (typeof username !== "string" || username.trim() === "") {
    console.error("Invalid username. It must be a non-empty string.");
    return;
  }
  let emailID = prompt("Enter email of " + username + ":");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailID)) {
    console.error("Invalid email ID. Provide a valid email address.");
    return;
  }
  let phonenumb = prompt("Enter the phone number of " + username + ":");
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phonenumb)) {
    console.error(
      "Invalid Phone Number. Provide a valid 10-digit phone number."
    );
    return;
  }
  let ID = Math.floor(Math.random() * 10000);
  const itemDetails = { username: username.trim(), emailID, phonenumb, ID };
  contactList.push(itemDetails);
  console.log("Contact added successfully:", itemDetails);
}
function displayContacts() {
  if (contactList.length === 0) {
    console.log("No contacts to display.");
    return;
  }
  console.log("Contact List:");
  contactList.forEach((contact, index) => {
    console.log(
      `${index + 1}. Name: ${contact.username}, Email: ${
        contact.emailID
      }, Phone: ${contact.phonenumb}, ID: ${contact.ID}`
    );
  });
}
function searchContacts() {
  if (contactList.length === 0) {
    console.log("No contacts available to search.");
    return;
  }
  let searchChoice = prompt(
    "Search by:\n" + "1. Name: \n" 
  );
  let searchQuery;
  let foundContacts = [];
  switch (searchChoice) {
    case "1": // Search by Name
      searchQuery = prompt("Enter the name to search:");
      foundContacts = contactList.filter((contact) =>
        contact.username
          .toLowerCase()
          .includes(searchQuery.trim().toLowerCase())
      );
      break;
    default:
      console.log("Invalid choice. Please try again.");
      return;
  }
  if (foundContacts.length > 0) {
    console.log("Search Results:");
    foundContacts.forEach((contact, index) => {
      console.log(
        `${index + 1}. Name: ${contact.username}, Email: ${
          contact.emailID
        }, Phone: ${contact.phonenumb}, ID: ${contact.ID}`
      );
    });
  } else {
    console.log(" No contact found ! ");
  }
}
function updateContacts(){
  let pickOption = prompt(
    " Pick a number:\n" +
      "1. Update Name\n" +
      "2. Update Email\n" +
      "3. Update number\n" 
    );
    let pickID = Number(prompt(" Enter the ID of user:"));
    let contact = contactList.find(contact => contact.ID === pickID);
    if (!contact) {
      console.log("Contact not found.");
      return;
    }
  switch(pickOption){
    case "1":
      let updateName = prompt(" Enter new username: ");
      contact.username = updateName;
      console.log(" Update username ")
    break;
    case "2":
      let updateEmail = prompt(" Enter new email ID:");
      contact.emailID = updateEmail;
      console.log(" Update email ");
    break;
    case "3":
      let updateNumber = prompt(" Enter new number:");
      contact.phonenumb = updateNumber;
      console.log(" Update number");
    break;
  default:
      console.log("Invalid option. Please choose a valid option.");
  return;
  }
  contactList.forEach((contact, index) => {
    console.log(
      `${index + 1}. Name: ${contact.username}, Email: ${contact.emailID}, Phone: ${contact.phonenumb}, ID: ${contact.ID}`
    );
  });
}
function  deleteContacts(){
let deleteName = prompt(" Enter the name to delete: ");
let foundName = contactList.find(contact => contact.username === deleteContacts);
if(foundName !== -1 ){
  contactList.splice(foundName, 1);
  console.log(" contacts deleted successfully: ");
}else{
  console.log(" contact not found")
}
}
// function sortContacts(){
//   // console.log(" Sort ");
//   let newsort = contactList.toSorted((a,b) => a.username.localcompare(b.username));
//   console.log(" sorted successfully " + newsort);
// }
mainMenu();