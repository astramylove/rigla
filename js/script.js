const users = [
  {
    ID: 1,
    login: "adminUser",
    password: "admin123",
    role: "admin",
    fullName: "Иванов Иван Иванович"
  },
  {
    ID: 2,
    login: "staffUser",
    password: "staff123",
    role: "staff",
    fullName: "Петров Петр Петрович"
  },
  {
    ID: 3,
    login: "superAdminUser",
    password: "super123",
    role: "superAdmin",
    fullName: "Сидоров Сидор Сидорович"
  }
];

let storedUsers;

if (JSON.parse(localStorage.getItem('users'))) {
  storedUsers = JSON.parse(localStorage.getItem('users'));
} else {
  localStorage.setItem('users', JSON.stringify(users));
  storedUsers = JSON.parse(localStorage.getItem('users'));
}

console.log(storedUsers);

function startProgram(userRole) {

  // Страницы
  const pageInventory = document.querySelector(".page__inventory");
  const pageUsers = document.querySelector(".page__users");
  const pageCancellation = document.querySelector(".page__cancellation");
  const pageOrderLog = document.querySelector(".page__receipt-log");
  const pageOrder = document.querySelector(".page__order");
  const pageOrderView = document.querySelectorAll(".order");

  const gebridMenu = document.querySelector(".gebrid-menu");

  // Элементы 
  const navMenu = document.querySelectorAll(".nav-menu .page");

  const inventoryTable = document.querySelector(".container__inventory-table");
  const usersTable = document.querySelector(".container__users-table");
  const cancellationTable = document.querySelector(".container__cancellation-table");
  const orderLogTable = document.querySelector(".container__order-log-table");
  const orderStaffTable = document.querySelector(".container__order-staff-table");
  const orderChekTable = document.querySelector(".container__order-chek-table");

  const containerBtnSearch = document.querySelector(".container__btn-search");
  const containerOrderBtn = document.querySelector(".container__order-btn");
  const containerOrderCheck = document.querySelector(".container__order-check");

  const formTitle = document.querySelector(".form-title");
  const capContainerNotify = document.querySelector(".cap-container__notify");
  const containerNotifications = document.querySelector(".container__notifications");
  const containerExit = document.querySelector(".container__exit");
  const capContainerLogOut = document.querySelector(".cap-container__log-out");
  const openExit = document.querySelector(".open__exit");


  // Кнопки 
  const addProductBtn = document.querySelector(".add-product");
  const addUsersBtn = document.querySelector(".add-users");
  const backReceiptBtn = document.querySelector(".back-receipt");

  const editBtnProduct = document.querySelectorAll(".edit-btn__product");
  const editBtnUser = document.querySelectorAll(".edit-btn__user");
  const deleteBtn = document.querySelectorAll(".delete-btn");
  const gebridMenuClose = document.querySelector(".gebrid-menu__close");
  const exitBtn = document.querySelector(".exit");
  // Формы
  const formAddProduct = document.querySelector(".form__add-product");
  const formAddUser = document.querySelector(".form__add-user");

  // Универсальная функция для переключения страниц
  const toggleVisibility = (elementsToShow, elementsToHide) => {
    elementsToHide.forEach(el => el.style.display = 'none');
    elementsToShow.forEach(el => el.style.display = 'flex');
    containerBtnSearch.style.display = 'flex';
    containerBtnSearch.style.justifyContent = 'space-between';
    navMenu.forEach(el => {
      el.classList.toggle('roboto-bold', el.textContent === elementsToShow[0].textContent);
      el.classList.toggle('roboto-light', el.textContent !== elementsToShow[0].textContent);
    });
  };

  // Переключение страниц
  pageInventory.addEventListener("click", () => {
    toggleVisibility([inventoryTable, addProductBtn], [
      usersTable, addUsersBtn, cancellationTable,
      orderLogTable, containerOrderBtn, orderStaffTable,
      backReceiptBtn, containerOrderCheck
    ]);
    highlightActivePage('Запасы');
  });

  pageUsers.addEventListener("click", () => {
    toggleVisibility([usersTable, addUsersBtn], [
      inventoryTable, addProductBtn, cancellationTable,
      orderLogTable, containerOrderBtn, orderStaffTable,
      backReceiptBtn, containerOrderCheck
    ]);
    highlightActivePage('Пользователи');
  });

  pageCancellation.addEventListener("click", () => {
    toggleVisibility([cancellationTable], [
      usersTable, addUsersBtn, inventoryTable,
      addProductBtn, orderLogTable, containerOrderBtn,
      orderStaffTable, containerOrderCheck, orderChekTable,
      backReceiptBtn
    ]);
    containerBtnSearch.style.justifyContent = 'end';
    highlightActivePage('Списание');
  });

  pageOrderLog.addEventListener("click", () => {
    toggleVisibility([orderLogTable], [
      usersTable, addUsersBtn, inventoryTable,
      addProductBtn, cancellationTable, containerOrderBtn,
      orderStaffTable, containerOrderCheck, orderChekTable,
      backReceiptBtn
    ]);
    containerBtnSearch.style.justifyContent = 'end';
    highlightActivePage('Журнал чеков');
  });

  pageOrder.addEventListener("click", () => {
    toggleVisibility([orderStaffTable, containerOrderBtn], [
      usersTable, addUsersBtn, inventoryTable,
      addProductBtn, cancellationTable, orderLogTable,
      containerOrderCheck, orderChekTable,
      backReceiptBtn
    ]);
    containerBtnSearch.style.display = 'none'
    highlightActivePage('Оформить заказ');
  });

  // Обработчик для просмотра заказов
  pageOrderView.forEach((el) => {
    el.addEventListener("click", () => {
      toggleVisibility([containerOrderCheck, orderChekTable, backReceiptBtn], [
        orderStaffTable, containerOrderBtn,
        usersTable, addUsersBtn,
        inventoryTable, addProductBtn,
        cancellationTable,
        orderLogTable
      ]);
      containerBtnSearch.style.display = 'none'
      highlightActivePage('Журнал чеков');
    });
  });

  const highlightActivePage = (activePage) => {
    navMenu.forEach(el => {
      if (el.textContent === activePage) {
        el.classList.add('roboto-bold');
      } else {
        el.classList.remove('roboto-bold');
      }
    });
  };

  // Действия с кнопками
  backReceiptBtn.addEventListener("click", () => {
    toggleVisibility([orderLogTable], [
      usersTable, addUsersBtn, inventoryTable,
      addProductBtn, cancellationTable,
      containerOrderBtn, orderStaffTable,
      containerOrderCheck, orderChekTable, containerBtnSearch
    ]);
    containerBtnSearch.style.justifyContent = 'end';
    highlightActivePage('Журнал чеков');
  });

  // Обработчики для редактирования пользователей и продуктов
  editBtnUser.forEach(el => {
    el.addEventListener('click', () => {
      gebridMenu.style.width = '878px';
      setTimeout(() => {
        gebridMenuClose.style.display = 'block';
        formAddUser.style.display = 'flex';
        formTitle.style.display = 'flex';
        formTitle.textContent = 'Редактирование информации о пользователе';
      }, 500);
      overlay.style.display = 'block';
    });
  });

  editBtnProduct.forEach(el => {
    el.addEventListener('click', () => {
      gebridMenu.style.width = '878px';
      setTimeout(() => {
        gebridMenuClose.style.display = 'block';
        formAddProduct.style.display = 'flex';
        formTitle.style.display = 'flex';
        formTitle.textContent = 'Редактирование информации о продукте';
      }, 300);
      overlay.style.display = 'block';
    });
  });

  // Обработчики для добавления пользователей и продуктов
  addUsersBtn.addEventListener('click', () => {
    gebridMenu.style.width = '878px';
    setTimeout(() => {
      gebridMenuClose.style.display = 'block';
      formAddUser.style.display = 'flex';
      formTitle.style.display = 'flex';
      formTitle.textContent = 'Новый пользователь';
    }, 300);
    overlay.style.display = 'block';
  });

  addProductBtn.addEventListener('click', () => {
    gebridMenu.style.width = '878px';
    setTimeout(() => {
      gebridMenuClose.style.display = 'block';
      formAddProduct.style.display = 'flex';
      formTitle.style.display = 'flex';
      formTitle.textContent = 'Новый продукт';
    }, 300);
    overlay.style.display = 'block';
  });

  // Закрытие меню редактирования
  gebridMenuClose.addEventListener('click', () => {
    gebridMenu.style.width = '133px';
    gebridMenuClose.style.display = 'none';
    formAddProduct.style.display = 'none';
    formAddUser.style.display = 'none';
    formTitle.style.display = 'none';
    overlay.style.display = 'none';
  });

  // Уведомления
  capContainerNotify.addEventListener('click', () => {
    contNotifyFunction()
    containerExit.style.height = '0px';
    capContainerLogOut.style.backgroundColor = '#66A8A6'
    openExit.style.transform = 'rotate(0deg)'
  });
  const contNotifyFunction = () => {
    if (containerNotifications.style.height == 'auto') {
      containerNotifications.style.height = '0px';
      capContainerNotify.parentElement.style.backgroundColor = '#66A8A6'
    } else {
      containerNotifications.style.height = 'auto';
      capContainerNotify.parentElement.style.backgroundColor = '#75C1BF'
    }
  }
  // exitBtn
  exitBtn.addEventListener('click', () => {
    localStorage.setItem('currentUser', JSON.stringify(''));
    window.location.href = 'index.html';
  })
  capContainerLogOut.addEventListener('click', () => {
    contLogOutFunction()
    containerNotifications.style.height = '0px';
    capContainerNotify.parentElement.style.backgroundColor = '#66A8A6'
  });
  const contLogOutFunction = () => {
    if (containerExit.style.height == 'auto') {
      containerExit.style.height = '0px';
      capContainerLogOut.style.backgroundColor = '#66A8A6'
      openExit.style.transform = 'rotate(0deg)'
    } else {
      containerExit.style.height = 'auto';
      capContainerLogOut.style.backgroundColor = '#75C1BF'
      openExit.style.transform = 'rotate(180deg)'
    }
  }

  // Работа с формами
  // Пользователи 

  document.getElementById('addUserForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const userName = document.getElementById('user-name').value.trim();
    const userSurname = document.getElementById('user-surname').value.trim();
    const userPatronymic = document.getElementById('user-patronymic').value.trim();
    const userPassword = document.getElementById('user-password').value;
    const userPhone = document.getElementById('user-phone').value.replace(/\D/g, ''); 
    const userLogin = document.getElementById('user-login').value.trim();
    const userRole = document.querySelector('input[name=user-role]:checked');

    // Валидация
    let errorMessage = '';

    if (!userName || !userSurname || !userPassword || !userLogin || !userRole) {
        errorMessage += 'Пожалуйста, заполните все обязательные поля.<br>';
    }

    if (userPhone.length !== 11) { 
        errorMessage += 'Телефон должен содержать 11 цифр.<br>';
    }

    if (userPassword.length < 6) {
        errorMessage += 'Пароль должен содержать минимум 6 символов.<br>';
    }

    if (storedUsers.some(user => user.login === userLogin)) {
        errorMessage += 'Этот логин уже занят.<br>';
    }

    const errorDisplay = document.getElementById('error-message__user');

    if (errorMessage) {
        errorDisplay.innerHTML = errorMessage;
        errorDisplay.style.color = '#21484D';
        errorDisplay.style.display = 'flex';
    } else {
        const formattedName = capitalizeFirstLetter(userName);
        const formattedSurname = capitalizeFirstLetter(userSurname);
        const formattedPatronymic = capitalizeFirstLetter(userPatronymic);

        const newUser = {
            ID: storedUsers.length + 1,
            login: userLogin,
            password: userPassword,
            role: userRole.value,
            fullName: `${formattedName} ${formattedSurname} ${formattedPatronymic}`
        };

        storedUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(storedUsers));

        errorDisplay.innerHTML = 'Пользователь успешно добавлен!';
        errorDisplay.style.display = 'flex';
        errorDisplay.style.color = 'white';

        this.reset();
    }
});

// Функция для преобразования первой буквы в заглавную, остальные — строчные
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Запрет ввода цифр в поля имени, фамилии и отчества
const nameInputs = ['user-name', 'user-surname', 'user-patronymic'];

nameInputs.forEach(inputId => {
    document.getElementById(inputId).addEventListener('input', function (e) {
        this.value = this.value.replace(/[^а-яА-ЯёЁa-zA-Z]/g, '');
    });
});

// Обработчик для форматирования телефона
document.getElementById('user-phone').addEventListener('input', function (e) {
  let value = this.value.replace(/\D/g, '');

  if (value.length > 11) {
      value = value.slice(0, 11);
  }

  let formattedValue = '+7 (';

  if (value.length > 1) {
      formattedValue += value.substring(1, 4);
  }

  if (value.length >= 4) {
      formattedValue += ') ' + value.substring(4, 7);
  }

  if (value.length >= 7) {
      formattedValue += '-' + value.substring(7, 9);
  }

  if (value.length >= 9) {
      formattedValue += '-' + value.substring(9, 11);
  }

  this.value = formattedValue;

  this.setSelectionRange(formattedValue.length, formattedValue.length);
});

document.getElementById('user-phone').addEventListener('keydown', function (e) {
  const cursorPosition = this.selectionStart;

  if (cursorPosition <= 4 && (e.key === 'ArrowLeft' || e.key === 'Backspace')) {
      e.preventDefault();
  }

  if (e.key === 'Backspace') {
      e.preventDefault(); 
      let value = this.value.replace(/\D/g, ''); 
      if (value.length > 0) {
          value = value.slice(0, -1); 
      }
      this.value = formatPhoneNumber(value); 
      this.setSelectionRange(this.value.length, this.value.length);
  }
});

// Функция для форматирования номера телефона
function formatPhoneNumber(value) {
  let formattedValue = '+7 (';

  if (value.length > 1) {
      formattedValue += value.substring(1, 4);
  }

  if (value.length >= 4) {
      formattedValue += ') ' + value.substring(4, 7);
  }

  if (value.length >= 7) {
      formattedValue += '-' + value.substring(7, 9);
  }

  if (value.length >= 9) {
      formattedValue += '-' + value.substring(9, 11);
  }

  return formattedValue;
}
}

const buttonLogin = () => {
  const loginInput = document.getElementById('loginInput');
  const PasswordInput = document.getElementById('PasswordInput');
  const errorMessage = document.querySelector(".error-message");
  const error = document.querySelector(".error-message .error");

  if (loginInput.value === '' || PasswordInput.value === '') {
    error.textContent = 'Заполните пустые поля';
    errorMessage.style.display = 'flex';
    return;
  }

  const userNow = storedUsers.find(el => el.login === loginInput.value && el.password === PasswordInput.value);

  if (userNow) {
    errorMessage.style.display = 'none';
    localStorage.setItem('currentUser', JSON.stringify(userNow));
    window.location.href = 'inventoryPage.html';
  } else {
    error.textContent = 'Неверный логин или пароль';
    errorMessage.style.display = 'flex';
  }
}

const definingTheRole = (userNow) => {
  const page = document.querySelectorAll('.page');
  const tableClass = document.querySelectorAll('.table');

  const addProductBtn = document.querySelector(".add-product");
  const addUsersBtn = document.querySelector(".add-users");

  page.forEach(el => el.style.display = 'none');
  tableClass.forEach(el => el.style.display = 'none');

  if (userNow.role === 'superAdmin') {
    page.forEach(el => {
      if (el.textContent.trim() === 'Пользователи') {
        el.style.display = 'block';
        el.classList.add('roboto-bold');
      }
    });

    tableClass.forEach(el => {
      if (el.classList.contains('container__users-table')) {
        el.style.display = 'flex';
      }
    });

    addProductBtn.style.display = 'none';
    addUsersBtn.style.display = 'flex';

  } else if (userNow.role === 'admin') {
    page.forEach(el => {
      if (['Пользователи', 'Журнал чеков', 'Запасы', 'Списание'].includes(el.textContent.trim())) {
        el.style.display = 'block';
      }
    });

    tableClass.forEach(el => {
      if (el.classList.contains('container__inventory-table')) {
        el.style.display = 'flex';
      }
    });

    startProgram(userNow);

  } else if (userNow.role === 'staff') {
    page.forEach(el => {
      if (['Оформить заказ', 'Запасы'].includes(el.textContent.trim())) {
        el.style.display = 'block';
      }
    });

    tableClass.forEach(el => {
      if (el.classList.contains('container__inventory-table')) {
        el.style.display = 'flex';
      }
    });

    startProgram(userNow);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.href == 'index.html') {
    localStorage.setItem('currentUser', JSON.stringify(''))
  }
  const savedUser = JSON.parse(localStorage.getItem('currentUser'));

  if (savedUser) {
    definingTheRole(savedUser);
  }
});