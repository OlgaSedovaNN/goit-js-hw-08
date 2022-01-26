import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
 
}

let formData = {}
let parsedFormInLS = JSON.parse(localStorage.getItem("feedback-form-state"));

refs.form.addEventListener('input', throttle(fillLocalStorage, 500))

function fillLocalStorage(e) {

    formData[e.target.name] = e.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));

}
if (parsedFormInLS) {
 parsedFormInLS.email ? refs.input.value = parsedFormInLS.email : refs.input.value = '' 

 parsedFormInLS.message?refs.textarea.value = parsedFormInLS.message : refs.textarea.value = ''
}


refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(evt) {
    evt.preventDefault()
    console.log(parsedFormInLS)
    localStorage.removeItem("feedback-form-state")
    evt.currentTarget.reset();
    // parsedFormInLS = {};
}
// const formInLS = localStorage.getItem("feedback-form-state")
// const parsingFormData = JSON.parse(formInLS)

// refs.form.addEventListener('input', throttle(fillLocalStorage, 500))

// function fillLocalStorage(e) {
 
//     if (formInLS) {
//         formData = parsingFormData;
//     } 
//     formData[e.target.name] = e.target.value
//     localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    
// }

// if (formInLS) {
//     if (parsingFormData.email) { refs.input.value = parsingFormData.email }
//     if (parsingFormData.message) { refs.textarea.value = parsingFormData.message }
//     } 

// refs.form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(evt) {
//     console.log(parsingFormData)
//     evt.preventDefault();
//     localStorage.removeItem("feedback-form-state")
//     evt.currentTarget.reset();
    
// }