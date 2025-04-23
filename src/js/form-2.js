const formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector(`.feedback-form`);

const onInput = evt => {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const onSubmit = evt => {
  evt.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  formEl.reset();
  localStorage.removeItem(STORAGE_KEY);
};

formEl.addEventListener(`input`, onInput);
formEl.addEventListener(`submit`, onSubmit);

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    formData = JSON.parse(savedData);
    email.value = formData.email || '';
    textarea.value = formData.message || '';
  }
}
