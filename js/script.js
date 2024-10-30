let data = {
  "Users": [
    {
      "ID": 1,
      "Username": "staff123",
      "Password": "admin123",
      "Role": "admin",
      "FullName": "Семёнов Семён Семёнович",
      "Phone": "+7 (123) 456-88-90"
    },
    {
      "ID": 2,
      "Username": "adminUser",
      "Password": "admin123",
      "Role": "admin",
      "FullName": "Иванов Иван Иванович",
      "Phone": "+7 (433) 456-88-90"
    },
    {
      "ID": 3,
      "Username": "superAdminUser",
      "Password": "super123",
      "Role": "superAdmin",
      "FullName": "Петров Петр Петрович",
      "Phone": "+7 (123) 432-88-90"
    }
  ],
  "Suppliers": [
    {
      "ID": 1,
      "Name": "ООО 'ДИАМЕД'",
      "ContactInfo": "+7 (123) 456-78-90"
    },
    {
      "ID": 2,
      "Name": "ООО 'ДИАМЕД'",
      "ContactInfo": "+7 (098) 765-43-21"
    }
  ],
  "Medicines": [
    {
      "ID": 1,
      "Name": "Аспирин",
      "Dosage": "500 мг",
      "StartDate": "2023-01-01",
      "EndDate": "2025-01-01",
      "Quantity": 100,
      "Description": "Обезболивающее средство.",
      "SupplierID": 1,
      "PrescriptionRequired": false,
      "Price": 50.00,
      "Shelf": "A",
      "Rack": "1"
    },
    {
      "ID": 2,
      "Name": "Парацетамол",
      "Dosage": "500 мг",
      "StartDate": "2023-06-01",
      "EndDate": "2025-06-01",
      "Quantity": 200,
      "Description": "Жаропонижающее средство.",
      "SupplierID": 2,
      "PrescriptionRequired": false,
      "Price": 30.00,
      "Shelf": "B",
      "Rack": "2"
    }
  ],
  "Orders": [
    {
      "ID": 1,
      "Medicines": [
        {
          "MedicineName": "Парацетамол",
          "Price": 30.00,
          "Quantity": 2
        },
        {
          "MedicineName": "Аспирин",
          "Price": 50.00,
          "Quantity": 2
        }
      ]
    },
    {
      "ID": 2,
      "Medicines": [
        {
          "MedicineName": "Парацетамол",
          "Price": 30.00,
          "Quantity": 2
        },
        {
          "MedicineName": "Аспирин",
          "Price": 50.00,
          "Quantity": 2
        }
      ]
    }
  ],
  "ReceiptJournal": [
    {
      "ID": 1,
      "OrderID": 1,
      "UserID": 1,
      "Date": "2024-10-29",
      "Time": "12:00:00",
      "TotalAmount": 160.00
    },
    {
      "ID": 2,
      "OrderID": 2,
      "UserID": 1,
      "Date": "2024-10-29",
      "Time": "12:00:00",
      "TotalAmount": 160.00
    }
  ],
  "Notifications": [
    {
      "ID": 1,
      "MedicineID": 1,
      "UserID": 2,
      "Message": "У препарата 'Парацетамол' закончился срок годности!",
      "Priority": "red"
    },
    {
      "ID": 2,
      "MedicineID": 1,
      "UserID": 2,
      "Message": "У препарата 'Парацетамол' закончился срок годности!",
      "Priority": "red"
    }
  ]
}
const saveDataToLocalStorage = (Data) => {
  localStorage.setItem('appData', JSON.stringify(Data));
}

const loadDataFromLocalStorage = () => {
  const storedData = localStorage.getItem('appData');
  return storedData ? JSON.parse(storedData) : null;
}

// Загрузка данных при загрузке страницы
let jsonData = loadDataFromLocalStorage();

if (!jsonData) {
  saveDataToLocalStorage(data);
  jsonData = loadDataFromLocalStorage();
}

const startProgram = (jsonData) => {

  // Страницы
  const pageInventory = document.querySelector(".page__inventory");
  const pageUsers = document.querySelector(".page__users");
  const pageCancellation = document.querySelector(".page__cancellation");
  const pageOrderLog = document.querySelector(".page__receipt-log");
  const pageOrder = document.querySelector(".page__order");

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
  function toggleVisibility(elementsToShow, elementsToHide) {
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
    populateTable()
  });

  pageUsers.addEventListener("click", () => {
    toggleVisibility([usersTable, addUsersBtn], [
      inventoryTable, addProductBtn, cancellationTable,
      orderLogTable, containerOrderBtn, orderStaffTable,
      backReceiptBtn, containerOrderCheck
    ]);
    highlightActivePage('Пользователи');
    populateUsersTable();
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
    populateOrderLogTable()
  });


  pageOrder.addEventListener("click", (e) => {
    toggleVisibility([orderStaffTable, containerOrderBtn], [
      usersTable, addUsersBtn, inventoryTable,
      addProductBtn, cancellationTable, orderLogTable,
      containerOrderCheck, orderChekTable,
      backReceiptBtn
    ]);
    containerBtnSearch.style.display = 'none'
    highlightActivePage('Оформить заказ');
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
    el.addEventListener('click', (e) => {
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

  // Получение данных из локального хранилища
  const getDataFromLocalStorage = () => {
    const data = localStorage.getItem('appData');
    return data ? JSON.parse(data) : null;
  }

  // Получение имени поставщика
  const getSupplierName = (supplierId, suppliers) => {
    const supplier = suppliers.find(s => s.ID === supplierId);
    return supplier ? supplier.Name : 'Неизвестный поставщик';
  }

  // Заполнение таблицы медикаментов
  const populateTable = () => {
    const jsonData = getDataFromLocalStorage();
    if (!jsonData) return;

    const tableBody = document.getElementById('medicines-table-body');

    // Очищаем предыдущие данные
    tableBody.innerHTML = '';

    jsonData.Medicines.forEach(medicine => {
      const row = document.createElement('tr');

      row.innerHTML = `
          <td class="id id-inventory">${medicine.ID}</td>
          <td class="title">${medicine.Name}</td>
          <td class="description">${medicine.Description}</td>
          <td class="dosage">${medicine.Dosage}</td>
          <td class="supplier">${getSupplierName(medicine.SupplierID, jsonData.Suppliers)}</td> 
          <td class="shelflife">${medicine.EndDate}</td> 
          <td class="shelf">${medicine.Shelf}/${medicine.Rack}</td>
          <td class="price">${medicine.Price.toFixed(2)} ₽</td> 
          <td class="stock">${medicine.Quantity}</td> 
          <td class="icons">
              <img src="icons/editor.svg" alt="иконка редактирования" class="edit-btn__product">
              <img src="icons/delete.svg" alt="иконка удаления" class="delete-btn">
          </td>
      `;

      tableBody.appendChild(row);
    });
  }

  if (window.location.pathname.includes('inventoryPage.html')) {
    populateTable();
  }

  // Заполнение таблицы пользователей
  const populateUsersTable = () => {
    const jsonData = getDataFromLocalStorage();
    if (!jsonData) return;

    const tableBody = document.getElementById('users-table-body');

    // Очищаем предыдущие данные
    tableBody.innerHTML = '';

    jsonData.Users.forEach(user => {
      const row = document.createElement('tr');

      row.innerHTML = `
          <td class="id id-inventory">${user.ID}</td>
          <td class="name">${user.FullName}</td>
          <td class="role">${user.Role}</td>
          <td class="login">${user.Username}</td>
          <td class="password">${user.Password}</td> 
          <td class="phone">${user.Phone || 'Не указан'}</td>
          <td class="icons">
              <img src="icons/editor.svg" alt="иконка редактирования" class="edit-btn__product">
              <img src="icons/delete.svg" alt="иконка удаления" class="delete-btn">
          </td> 
      `;

      tableBody.appendChild(row);
    });
  }

  // Заполнение таблицы журнала заказов
  const populateOrderLogTable = () => {
    const jsonData = getDataFromLocalStorage();
    if (!jsonData) return;

    const tableBody = document.getElementById('order-log-table-body');

    // Очищаем предыдущие данные
    tableBody.innerHTML = '';

    jsonData.ReceiptJournal.forEach(receipt => {
      const row = document.createElement('tr');

      row.innerHTML = `
          <td class="id id-inventory">${receipt.ID}</td>
          <td class="name">${getFullName(receipt.UserID, jsonData.Users)}</td> 
          <td class="data">${receipt.Date} ${receipt.Time}</td>
          <td class="total-amount">${receipt.TotalAmount.toFixed(2)} руб.</td> 
          <td class="id id-order">${receipt.OrderID}</td> 
          <td class="order">Перейти к заказу</td> 
          <td class="icons">
              <img src="icons/editor.svg" alt="иконка редактирования" class="edit-btn">
              <img src="icons/delete.svg" alt="иконка удаления" class="delete-btn">
          </td>
      `;

      tableBody.appendChild(row);
    });

    // Обработчик кликов по элементам "Перейти к заказу"
    console.log(tableBody);

    document.querySelectorAll(".order").forEach((el) => {
      el.addEventListener('click', (event) => {
          // Проверяем, что клик был по элементу с классом 'order'
          if (event.target.classList.contains('order')) {
              // Получаем ID заказа из строки таблицы
              const orderId = event.target.closest('tr').querySelector('.id-order').textContent;// Загружаем данные о заказе по ID
  
              // Отображаем нужные контейнеры и скрываем остальные
              toggleVisibility([orderChekTable, containerOrderCheck], [
                  usersTable, addUsersBtn, inventoryTable,
                  addProductBtn, cancellationTable, containerOrderBtn,
                  orderStaffTable, ,backReceiptBtn, orderLogTable
              ]);
  
              // Обновляем стиль кнопки поиска
              containerBtnSearch.style.display = 'none';
  
              // Обновляем активную страницу в навигации
              highlightActivePage('Журнал чеков');
  
              // Дополнительный код для отображения элементов
              containerOrderCheck.style.display = "flex";
              orderChekTable.style.display = "flex";
              backReceiptBtn.style.display = 'flex';
              loadOrderData(orderId); 
          }
      });
  });
  }

  // Функция для получения полного имени пользователя по его ID
  const getFullName = (userId, users) => {
    const user = users.find(u => u.ID === userId);
    return user ? user.FullName : 'Неизвестный пользователь';
  }

  // Функция для загрузки данных в таблицу и информацию о чеке
  const loadOrderData = (orderID) => {
    const jsonData = getDataFromLocalStorage();
    if (!jsonData) return;

    // Находим заказ по ID
    const order = jsonData.Orders.find(o => o.ID === orderID);
    const receipt = jsonData.ReceiptJournal.find(r => r.OrderID === orderID);

    if (!order || !receipt) return;

    const tableBody = document.querySelector('.container__order-chek-table tbody');
    const orderCheckInfo = document.querySelector('.order-check__cap');

    // Очищаем предыдущие данные в таблице чека
    tableBody.innerHTML = '';

    // Заполнение таблицы медикаментов
    order.Medicines.forEach(medicine => {
      const row = document.createElement('tr');

      const totalPrice = (medicine.Price * medicine.Quantity).toFixed(2);

      row.innerHTML = `
          <td class="id id-orderlog">${medicine.MedicineName}</td>
          <td class="title">${medicine.MedicineName}</td>
          <td class="price">${medicine.Price.toFixed(2)} ₽</td>
          <td class="stock">
              <span class="minus">-</span> ${medicine.Quantity} <span class="plus">+</span>
          </td>
          <td class="price">${totalPrice} ₽</td>
          <td class="icons">
              <img src="icons/delete.svg" alt="иконка удаления" class="delete-btn">
          </td>
      `;

      tableBody.appendChild(row);
    });

    // Заполнение информации о чеке
    const user = jsonData.Users.find(u => u.ID === receipt.UserID);
    orderCheckInfo.innerHTML = `
    Информация о чеке:
    <span class="roboto-bold">${receipt.OrderID}</span>
    <span class="roboto-bold">${user ? user.FullName : 'Неизвестный пользователь'}</span>
    <span class="roboto-bold">${receipt.Date} ${receipt.Time}</span>
    <span class="roboto-bold">${receipt.TotalAmount.toFixed(2)} ₽</span>
`;

    document.querySelector('.container__order-chek-table').style.display = 'block';
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
  const passwordInput = document.getElementById('PasswordInput'); // Исправлено имя переменной
  const errorMessage = document.querySelector(".error-message");
  const error = document.querySelector(".error-message .error");

  // Проверка на пустые поля ввода
  if (loginInput.value === '' || passwordInput.value === '') {
    error.textContent = 'Заполните пустые поля';
    errorMessage.style.display = 'flex';
    return;
  }

  // Поиск пользователя в jsonData
  const userNow = jsonData.Users.find(el => el.Username === loginInput.value && el.Password === passwordInput.value);

  if (userNow) {
    errorMessage.style.display = 'none';
    localStorage.setItem('userSession', JSON.stringify(userNow)); // Сохранение данных пользователя в localStorage
    window.location.href = 'inventoryPage.html'; // Переход на страницу инвентаря
  } else {
    error.textContent = 'Неверный логин или пароль';
    errorMessage.style.display = 'flex';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Проверка, если пользователь находится на странице inventoryPage.html
  if (window.location.pathname.includes('inventoryPage.html')) {
    const savedUser = JSON.parse(localStorage.getItem('userSession')); // Получение сохраненного пользователя из localStorage

    if (savedUser) {
      definingTheRole(savedUser); // Определение роли пользователя
    } else {
      // Если пользователь не найден, можно перенаправить на страницу логина
      window.location.href = 'loginPage.html'; // Перенаправление на страницу логина
    }
  }
});

const definingTheRole = (userNow) => {
  const pages = document.querySelectorAll('.page');
  const tableClasses = document.querySelectorAll('.table');

  const addProductBtn = document.querySelector(".add-product");
  const addUsersBtn = document.querySelector(".add-users");

  // Скрытие всех страниц и таблиц
  pages.forEach(el => el.style.display = 'none');
  tableClasses.forEach(el => el.style.display = 'none');

  switch (userNow.Role) {
    case 'superAdmin':
      pages.forEach(el => {
        if (el.textContent.trim() === 'Пользователи') {
          el.style.display = 'block';
          el.classList.add('roboto-bold');
        }
      });

      tableClasses.forEach(el => {
        if (el.classList.contains('container__users-table')) {
          el.style.display = 'flex';
        }
      });

      addProductBtn.style.display = 'none';
      addUsersBtn.style.display = 'flex';
      break;

    case 'admin':
      pages.forEach(el => {
        if (['Пользователи', 'Журнал чеков', 'Запасы', 'Списание'].includes(el.textContent.trim())) {
          el.style.display = 'block';
        }
      });

      tableClasses.forEach(el => {
        if (el.classList.contains('container__inventory-table')) {
          el.style.display = 'flex';
        }
      });

      startProgram(jsonData); // Запуск программы для администраторов
      break;

    case 'staff':
      pages.forEach(el => {
        if (['Оформить заказ', 'Запасы'].includes(el.textContent.trim())) {
          el.style.display = 'block';
        }
      });

      tableClasses.forEach(el => {
        if (el.classList.contains('container__inventory-table')) {
          el.style.display = 'flex';
        }
      });

      startProgram(jsonData); // Запуск программы для сотрудников
      break;

    default:
      console.error('Неизвестная роль пользователя:', userNow.Role);
      break;
  }
}