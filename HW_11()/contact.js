

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let submit = document.getElementById("submit");
let output = document.getElementById('output');
let users = [];

submit.addEventListener("click", function () {
   CreateObject();
   CheckInput();
   CheckInput();
})

class User {
   constructor(object) {
      this.name = object.name;
      this.phone = object.phone;
      this.email = object.email;
   }

   getUserContainer() {
      return `<div class="outputContent">
            <p>${this.name}</p>
            <p>${this.phone}</p>
            <p>${this.email}</p>
         </div>`;
   }
}

function CreateObject() {
   let user = new User({
      name: input1.value,
      phone: input2.value,
      email: input3.value,
   })
   output.insertAdjacentHTML('beforeend', user.getUserContainer());

   users.push(user);
   console.log(users);
}

function CheckInput() {
   if (input1.value == "" || input2.value == "") {
      alert("Пожалуйста, введите все данные");
   }
} 