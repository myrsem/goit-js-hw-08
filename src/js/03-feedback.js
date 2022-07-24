import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const formData = {
  email: refs.form.email.value,
  message: refs.form.message.value,
};

addLocalData();

refs.form.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();
  JSON.parse(localStorage.getItem(LOCAL_KEY));
  localStorage.removeItem(LOCAL_KEY);
  console.log(formData);
});

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function addLocalData() {
  const localData = JSON.parse(localStorage.getItem(LOCAL_KEY));

  if (!localData) return;

  if (localData.email) refs.form.email.value = localData.email;
  if (localData.message) refs.form.message.value = localData.message;
}
