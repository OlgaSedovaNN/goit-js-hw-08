import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
 
}

let formData = {}
const formInLS = localStorage.getItem("feedback-form-state")
const parsingFormData = JSON.parse(formInLS)

refs.form.addEventListener('input', throttle(fillLocalStorage, 500))

function fillLocalStorage(e) {
 
    if (formInLS) {
        formData = parsingFormData;
    } 
    formData[e.target.name] = e.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    
}

if (formInLS) {
    if (parsingFormData.email) { refs.input.value = parsingFormData.email }
    if (parsingFormData.message) { refs.textarea.value = parsingFormData.message }
    } 

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    if (formInLS) {
        localStorage.removeItem("feedback-form-state")
    }
    evt.currentTarget.reset();
    console.log(parsingFormData)
}
