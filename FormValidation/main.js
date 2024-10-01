const Username = document.querySelector("#Username");
const Password = document.querySelector("#Password");
const Email = document.querySelector("#Email");
const  confirmpassword= document.querySelector("#confirmpassword");
const form = document.querySelector("#form");

const ShowError=(input,message)=>{
    let parentElement = input.parentElement;
    parentElement.classList= 'form-control error'
    const small= parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];

    errorIcon.style.visibility='visible';
    successIcon.style.visibility ='hiden';
    small.innerText = message;
}

// const Showsuccess=(input,message)=>{
//     let parentElement = input.parentElement;
//     parentElement.classList= 'form-control error'
//     const small= parentElement.querySelector("small");
//     const successIcon = parentElement.querySelectorAll("i")[0];
//     const errorIcon = parentElement.querySelectorAll("i")[1];

//     errorIcon.style.visibility='hidden';
//     successIcon.style.visibility ='visible';
   
// }



const CheckEmpty = (Elements)=>{

    Elements.forEach((Element) => {
     if(Element.value ===''){
      ShowError(Element,'input Reguired');
     }

    });
}

form.addEventListener("submit",(event)=>{

event.preventDefault();

CheckEmpty([Username,Email,Password,confirmpassword]);

})




