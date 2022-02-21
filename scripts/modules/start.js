import createElement from "./createElement.js";

const creatTitle = (title) => {
  const h1 = createElement('h1', {
    className: 'title',
    textContent: title,
  });

  return h1;
};

const createMain = () => {
  const main = createElement('main', {
    className: 'person-data',

  })

  return main;
};

const createFirstForm = (data) => {
  const form = createElement('form', {
    className: 'field',
  });

  const lableTour = createElement('lable', {
    className: 'field__label',
    for: 'tour',
    textContent: 'Выберите тур',
  });

  const select =createElement ('select', {
    className: 'field__select',
    id: 'tour',
    name: 'tour',
  });

  const options = data.map(item => createElement('option', {
    value: item.id,
    textContent: item.tour,
  }));

  select.append(...options);

  const label = createElement('label', {
    className: 'field__label',
    textContent: 'Укажите количество человек (max: 6)',
  });
  const input = createElement('input', {
    className: 'field__input',
    id: 'count',
    name: 'count',
    type: 'number',
    placeholder: '',
    min: '1',
    max: '6',
    required: true,
  });

  const button = createElement('button', {
    className: 'btn-confirm',
    type: 'submit',
    textContent: 'Подтвердить',
  });

  form.append(lableTour, select, label, input, button);

  return form;
};

const start = (app, title, data) => {
  const h1 = creatTitle(title);
  const main = createMain();
  const firstForm = createFirstForm(data);

  main.append(firstForm);
  app.append(h1, main);

  return {
    main, firstForm, h1
  }
};

export default start;