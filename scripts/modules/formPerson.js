import createElement from "./createElement.js";

const createFormPerson = (n) => {
  const form = createElement('form', {
    className: 'person',
  });

  const title = createElement('h2', {
    className: 'person__title',
    textContent: `Пассажир #${n + 1}`,
  });

  const fildName = createElement('div', {
    className: 'field',
  });

  const lableName = createElement('lable', {
    className: 'field__lable',
    for: `name${n}`,
    textContent: 'ФИО',
  });

  const inputName = createElement('input', {
    className: 'field__input',
    id: `name${n}`,
    name: `name`,
    type: 'text', 
    placeholder: 'Введите ваше ФИО',
    required: true,
  });
  fildName.append(lableName, inputName);

  const button = createElement('button', {
    className: 'btn-confirm',
    type: 'submit',
    textContent: 'Подтвердить',
  })

  form.append(title, fildName, button)

  return form;
}



const getFormPerson = (count) => {
  const forms = [];
  if (count > 6) count = 6;
  
  for (let i = 0; i < count; i++) {
    forms.push(createFormPerson(i));
    }
    return forms;
};

export default getFormPerson;