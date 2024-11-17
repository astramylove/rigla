let data = {
  "Users": [
    {
      "ID": 1,
      "Username": "staffUser",
      "Password": "staff123",
      "Role": "staff",
      "FullName": "Семёнов Семён Семёнович",
      "Phone": "71234568890"
    },
    {
      "ID": 2,
      "Username": "adminUser",
      "Password": "admin123",
      "Role": "admin",
      "FullName": "Иванов Иван Иванович",
      "Phone": "74334568890"
    },
    {
      "ID": 3,
      "Username": "superAdminUser",
      "Password": "super123",
      "Role": "superAdmin",
      "FullName": "Петров Петр Петрович",
      "Phone": "71234328890"
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
      "Name": "ООО 'ФАРМГРУПП'",
      "ContactInfo": "+7 (098) 765-43-21"
    },
    {
      "ID": 3,
      "Name": "ЗАО 'МЕДТЕХ'",
      "ContactInfo": "+7 (111) 222-33-44"
    },
    {
      "ID": 4,
      "Name": "ИП 'ЗДОРОВЬЕ'",
      "ContactInfo": "+7 (555) 666-77-88"
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
    },
    {
      "ID": 3,
      "Name": "Лотатин",
      "Dosage": "500 мг",
      "StartDate": "2022-01-01",
      "EndDate": "2024-10-30",
      "Quantity": 100,
      "Description": "Обезболивающее средство.",
      "SupplierID": 1,
      "PrescriptionRequired": false,
      "Price": 50.00,
      "Shelf": "A",
      "Rack": "1"
    },
    {
      "ID": 4,
      "Name": "Парацетамол",
      "Dosage": "500 мг",
      "StartDate": "2023-06-01",
      "EndDate": "2025-06-01",
      "Quantity": 0,
      "Description": "Жаропонижающее средство.",
      "SupplierID": 2,
      "PrescriptionRequired": false,
      "Price": 30.00,
      "Shelf": "B",
      "Rack": "2"
    },
    {
      "ID": 5,
      "Name": "Ибупрофен",
      "Dosage": "400 мг",
      "StartDate": "2023-01-15",
      "EndDate": "2025-01-15",
      "Quantity": 150,
      "Description": "Противовоспалительное средство.",
      "SupplierID": 3,
      "PrescriptionRequired": false,
      "Price": 45.00,
      "Shelf": "C",
      "Rack": "1"
    },
    {
      "ID": 6,
      "Name": "Анальгин",
      "Dosage": "500 мг",
      "StartDate": "2023-02-01",
      "EndDate": "2024-12-31",
      "Quantity": 80,
      "Description": "Обезболивающее средство.",
      "SupplierID": 4,
      "PrescriptionRequired": false,
      "Price": 25.00,
      "Shelf": "D",
      "Rack": "2"
    },
    {
      "ID": 7,
      "Name": "Цитрамон",
      "Dosage": "500 мг",
      "StartDate": "2023-03-01",
      "EndDate": "2025-03-01",
      "Quantity": 120,
      "Description": "Обезболивающее и жаропонижающее средство.",
      "SupplierID": 1,
      "PrescriptionRequired": false,
      "Price": 20.00,
      "Shelf": "A",
      "Rack": "3"
    },
    {
      "ID": 8,
      "Name": "Кеторолак",
      "Dosage": "10 мг/мл",
      "StartDate": "2023-04-01",
      "EndDate": "2025-04-01",
      "Quantity": 60,
      "Description": "Сильное обезболивающее.",
      "SupplierID": 2,
      "PrescriptionRequired": true,
      "Price": 70.00,
      "Shelf": "E",
      "Rack": "4"
    },
    {
      "ID": 9,
      "Name": "Амоксициллин",
      "Dosage": "500 мг",
      "StartDate": "2023-05-01",
      "EndDate": "2025-05-01",
      "Quantity": 200,
      "Description": ".Антибиотик широкого спектра действия.",
      "SupplierID": 3,
      "PrescriptionRequired": true,
      "Price": 55.00,
      "Shelf": 'F',
      'Rack': '1'
    },
    {
      'ID': 10,
      'Name': 'Лоратадин',
      'Dosage': '10 мг',
      'StartDate': '2023-06-01',
      'EndDate': '2025-06-01',
      'Quantity': 180,
      'Description': 'Антигистаминное средство.',
      'SupplierID': 4,
      'PrescriptionRequired': false,
      'Price': 35.00,
      'Shelf': 'G',
      'Rack': '2'
    },
    {
      'ID': 11,
      'Name': 'Метформин',
      'Dosage': '500 мг',
      'StartDate': '2023-07-01',
      'EndDate': '2025-07-01',
      'Quantity': 130,
      'Description': 'Препарат для лечения диабета.',
      'SupplierID': 1,
      'PrescriptionRequired': true,
      'Price': 40.00,
      'Shelf': 'H',
      'Rack': '3'
    },
    {
      'ID': 12,
      'Name': 'Симвастатин',
      'Dosage': '20 мг',
      'StartDate': '2023-08-01',
      'EndDate': '2025-08-01',
      'Quantity': 90,
      'Description': 'Средство для снижения уровня холестерина.',
      'SupplierID': 2,
      'PrescriptionRequired': true,
      'Price': 60.00,
      'Shelf': 'I',
      'Rack': '4'
    },
    {
      ID: 13,
      Name: "Флуоксетин",
      Dosage: "20 мг",
      StartDate: "2023-09-01",
      EndDate: "2025-09-01",
      Quantity: 75,
      Description: "Антидепрессант.",
      SupplierID: 3,
      PrescriptionRequired: true,
      Price: 65.00,
      Shelf: "J",
      Rack: "1"
    },
    {
      ID: 14,
      Name: "Лизиноприл",
      Dosage: "10 мг",
      StartDate: "2023-10-01",
      EndDate: "2025-10-01",
      Quantity: 110,
      Description: "Препарат для лечения гипертонии.",
      SupplierID: 4,
      PrescriptionRequired: true,
      Price: 50.00,
      Shelf: "K",
      Rack: "2"
    },
    {
      ID: 15,
      Name: "Аторвастатин",
      Dosage: "40 мг",
      StartDate: "2023-11-01",
      EndDate: "2025-11-01",
      Quantity: 140,
      Description: "Средство для снижения уровня холестерина.",
      SupplierID: 1,
      PrescriptionRequired: true,
      Price: 55.00,
      Shelf: "L",
      Rack: "3"
    },
    {
      ID: 16,
      Name: "Омепразол",
      Dosage: "20 мг",
      StartDate: "2023-12-01",
      EndDate: "2025-12-01",
      Quantity: 160,
      Description: "Препарат для лечения язвы желудка.",
      SupplierID: 2,
      PrescriptionRequired: false,
      Price: 45.00,
      Shelf: "M",
      Rack: "4"
    },
    {
      ID: 17,
      Name: "Дексаметазон",
      Dosage: "4 мг",
      StartDate: "2024-01-01",
      EndDate: "2026-01-01",
      Quantity: 50,
      Description: "Кортикостероид.",
      SupplierID: 3,
      PrescriptionRequired: true,
      Price: 80.00,
      Shelf: "N",
      Rack: "1"
    },
    {
      ID: 18,
      Name: "Кларитромицин",
      Dosage: "250 мг",
      StartDate: "2024-02-01",
      EndDate: "2026-02-01",
      Quantity: 100,
      Description: "Антибиотик.",
      SupplierID: 4,
      PrescriptionRequired: true,
      Price: 70.00,
      Shelf: "O",
      Rack: "2"
    },
    {
      ID: 19,
      Name: "Триметоприм",
      Dosage: "100 мг",
      StartDate: "2024-03-01",
      EndDate: "2026-03-01",
      Quantity: 90,
      Description: "Антибиотик.",
      SupplierID: 1,
      PrescriptionRequired: true,
      Price: 38.00,
      Shelf: "P",
      Rack: "3"
    },
    {
      ID: 20,
      Name: "Глюкозамин",
      Dosage: "500 мг",
      StartDate: "2024-04-01",
      EndDate: "2026-04-01",
      Quantity: 110,
      Description: "Средство для суставов.",
      SupplierID: 2,
      PrescriptionRequired: false,
      Price: 55.00,
      Shelf: "Q",
      Rack: "4"
    },
    {
      ID: 21,
      Name: "Кальций Д3",
      Dosage: "500 мг",
      StartDate: "2024-05-01",
      EndDate: "2026-05-01",
      Quantity: 120,
      Description: "Добавка к пище.",
      SupplierID: 3,
      PrescriptionRequired: false,
      Price: 25.00,
      Shelf: "R",
      Rack: "1"
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
    },
    {
      "ID": 3,
      "Medicines": [
        {
          "MedicineName": "Парацетамол",
          "Price": 30.00,
          "Quantity": 2
        },
        {
          "MedicineName": "Аспирин",
          "Price": 50.00,
          "Quantity": 4
        }
      ]
    }
  ],
  "ReceiptJournal": [
    {
      "ID": 1,
      "OrderID": 1,
      "User": 'Семёнов Семён Семёнович',
      "Date": "2024-10-29",
      "Time": "12:00:00"
    },
    {
      "ID": 2,
      "OrderID": 2,
      "User": 'Семёнов Семён Семёнович',
      "Date": "2024-10-29",
      "Time": "12:30:00"
    },
    {
      "ID": 3,
      "OrderID": 3,
      "User": 'Семёнов Семён Семёнович',
      "Date": "2024-10-29",
      "Time": "12:50:00"
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
      "Message": "Ты чмо",
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

  // Переменные
  let restrictionOfElements
  if (localStorage.getItem('restrictionOfElements')) {
    restrictionOfElements = localStorage.getItem('restrictionOfElements')
    const tens = document.querySelectorAll('.ten');
    const twentys = document.querySelectorAll('.twenty');
    if (restrictionOfElements == 10) {
      tens.forEach((t) => {
        t.style.textDecoration = 'underline';
      });
      twentys.forEach((tw) => {
        tw.style.textDecoration = 'none';
      });
    } else {
      tens.forEach((t) => {
        t.style.textDecoration = 'none';
      });
      twentys.forEach((tw) => {
        tw.style.textDecoration = 'underline';
      });
    }
  } else {
    restrictionOfElements = 10
  }
  let nowPageOnTable = 1

  // Универсальная функция для переключения страниц
  function toggleVisibility(elementsToShow, elementsToHide) {
    elementsToHide.forEach(el => el.style.display = 'none');
    elementsToShow.forEach(el => el.style.display = 'flex');
    containerBtnSearch.style.display = 'flex';
    containerBtnSearch.style.justifyContent = 'space-between';
    nowPageOnTable = 1
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
    document.querySelector('.search').value = ''
  });

  pageUsers.addEventListener("click", () => {
    toggleVisibility([usersTable, addUsersBtn], [
      inventoryTable, addProductBtn, cancellationTable,
      orderLogTable, containerOrderBtn, orderStaffTable,
      backReceiptBtn, containerOrderCheck
    ]);
    highlightActivePage('Пользователи');
    populateUsersTable();
    sortUserOptionCreate()
    document.querySelector('.search').value = ''
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
    populateWriteOffMedicines()
    document.querySelector('.search').value = ''
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
    document.querySelector('.search').value = ''
    sortReceiptOptionCreate()
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
    document.querySelector('.search').value = ''
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
    if (formAddUser.style.display == 'flex') {
      document.querySelector('.btn-wrap .btn').textContent = 'Добавить пользователя'
    } else {
      document.querySelector('.form__add-product .btn').textContent = 'Добавить продукт'
    }
    formAddProduct.style.display = 'none';
    formAddUser.style.display = 'none';
    formTitle.style.display = 'none';
    overlay.style.display = 'none';
    formAddUser.reset()
    formAddProduct.reset()
    document.getElementById('error-message__user').style.display = 'none';
    formAddProduct.dataset.id = ''
    formAddUser.dataset.id = ''

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
    localStorage.setItem('userSession', JSON.stringify(''));
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
  // Открытие фильтра
  const filterIcon = document.getElementById('filter-icon');
  const filterModal = document.getElementById('filter-modal');
  const closeModal = document.getElementById('close-modal');


  // Открытие модального окна при клике на иконку фильтра
  filterIcon.onclick = function () {
    filterModal.style.display = "block";
  }

  // Закрытие модального окна при клике на крестик
  closeModal.onclick = function () {
    filterModal.style.display = "none";
  }

  // Закрытие модального окна при клике вне его
  window.onclick = function (event) {
    if (event.target === filterModal) {
      filterModal.style.display = "none";
    }
  }


  // Получение данных из локального хранилища
  const getDataFromLocalStorage = () => {
    const data = localStorage.getItem('appData');
    return data ? JSON.parse(data) : null;
  }

  const restrictionOfElementsFunction = () => {
    const tens = document.querySelectorAll('.ten');
    const twentys = document.querySelectorAll('.twenty');
    console.log(tens, twentys);

    tens.forEach((ten) => {
      ten.addEventListener('click', () => {
        restrictionOfElements = 10;

        tens.forEach((t) => {
          t.style.textDecoration = 'underline';
        });
        twentys.forEach((tw) => {
          tw.style.textDecoration = 'none';
        });

        populateOrderLogTable();
        populateTable();
        populateUsersTable();
        populateWriteOffMedicines();
        localStorage.setItem('restrictionOfElements', 10)
      });
    });

    twentys.forEach((twenty) => {
      twenty.addEventListener('click', () => {
        restrictionOfElements = 20;
        console.log(tens);

        twentys.forEach((tw) => {
          tw.style.textDecoration = 'underline';
        });
        tens.forEach((t) => {
          t.style.textDecoration = 'none';
        });

        populateOrderLogTable();
        populateTable();
        populateUsersTable();
        populateWriteOffMedicines();
        localStorage.setItem('restrictionOfElements', 20)
      });
    });
  }

  restrictionOfElementsFunction()


  //                                                          ЗАПАСЫ ПОЛНАЯ РАБОТА
  const getSupplierName = (supplierId, suppliers) => {
    const supplier = suppliers.find(s => Number(s.ID) == Number(supplierId));
    return supplier ? supplier.Name : 'Неизвестный поставщик';
  }

  const addEventListenerCreateEdit = (btn) => {
    btn.forEach(el => {
      el.addEventListener('click', (e) => {
        const targetButton = e.target;
        const dataId = targetButton.dataset.id;
        gebridMenu.style.width = '878px';
        setTimeout(() => {
          gebridMenuClose.style.display = 'block';
          formAddProduct.style.display = 'flex';
          formAddProduct.dataset.id = dataId;
          formTitle.style.display = 'flex';
          formTitle.textContent = 'Редактирование информации о продукте';
          document.querySelector('.form__add-product .btn').textContent = 'Сохранить изменения'
        }, 300);
        overlay.style.display = 'block';
        populateFormAddProduct(dataId);
        populateWriteOffMedicines();
      });
    });
  }

  const populateFormAddProduct = (dataId) => {
    const jsonData = getDataFromLocalStorage();
    const medicine = jsonData.Medicines.find(medicine => medicine.ID == dataId);

    if (medicine) {
      document.querySelector('#addproduct-form__name').value = medicine.Name || '';
      document.querySelector('#addproduct-form__dosage').value = medicine.Dosage || '';
      document.querySelector('#addproduct-form__description').value = medicine.Description || '';
      document.querySelector('#addproduct-form__date-of-manufacture').value = medicine.StartDate || '';
      document.querySelector('#addproduct-form__expiration-date').value = medicine.EndDate || '';
      document.querySelector('#addproduct-form__quantity').value = medicine.Quantity || '';
      document.querySelector('#addproduct-form__rack').value = medicine.Rack || '';
      document.querySelector('#addproduct-form__shelf').value = medicine.Shelf || '';
      document.querySelector('#addproduct-form__price').value = medicine.Price.toFixed(2) || '';

      console.log(medicine.SupplierID, jsonData.Suppliers);

      const providerSelect = document.querySelector('#addproduct-form__provider');
      providerSelect.value = medicine.SupplierID;

      if (medicine.PrescriptionRequired) {
        document.querySelector('#addproduct-form__recept1').checked = true; // Нужен
        document.querySelector('#addproduct-form__recept2').checked = false; // Не нужен
      } else {
        document.querySelector('#addproduct-form__recept1').checked = false; // Нужен
        document.querySelector('#addproduct-form__recept2').checked = true; // Не нужен
      }
    } else {
      console.error('Медикамент не найден:', dataId);
    }
  }

  const deleteMedicin = (dataId) => {
    let jsonData = getDataFromLocalStorage();
    jsonData.Medicines = jsonData.Medicines.filter(med => med.ID != dataId);
    saveDataToLocalStorage(jsonData);
    populateTable();
    populateWriteOffMedicines();
    userIdToDelete = null
  };

  const addEventListenerCreateDel = (btn) => {
    btn.forEach(el => {
      el.addEventListener('click', (e) => {
        const targetButton = e.target;
        const dataId = targetButton.dataset.id;

        openConfirmationModal('medicin', dataId);
      });
    });
  }

  // Заполнение таблицы медикаментов
  const populateTable = () => {
    const jsonData = getDataFromLocalStorage();
    if (!jsonData) return;

    const tableBody = document.getElementById('medicines-table-body');
    tableBody.innerHTML = ''; // Очищаем предыдущие данные
    let flag = 0
    let pageMed = jsonData.Medicines.slice(0, restrictionOfElements)
    jsonData.Medicines.forEach(medicine => {
      if (flag == restrictionOfElements) return
      flag += 1
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
                <img src="icons/editor.svg" alt="иконка редактирования" class="edit-btn__product" data-id='${medicine.ID}'>
                <img src="icons/delete.svg" alt="иконка удаления" class="delete-btn__product" data-id='${medicine.ID}'>
            </td>
        `;
      tableBody.appendChild(row);
    });

    addEventListenerCreateEdit(tableBody.querySelectorAll('.edit-btn__product'));
    addEventListenerCreateDel(tableBody.querySelectorAll('.delete-btn__product'))
    sortMedicineOptionCreate();
  }

  const populateSupplierDropdown = (suppliers) => {
    const providerSelect = document.getElementById('addproduct-form__provider');
    const providerNewSection = document.querySelector('.provider-add');

    providerSelect.innerHTML = `
        <option value="">Выберите поставщика</option>
        <option value="newProvider">Добавить поставщика</option>
    `;

    suppliers.forEach(supplier => {
      const option = document.createElement('option');
      option.value = supplier.ID;
      option.textContent = supplier.Name;
      providerSelect.appendChild(option);
    });

    providerSelect.addEventListener('change', () => {
      providerNewSection.style.display = providerSelect.value === 'newProvider' ? 'flex' : 'none';
    });
  }

  const sortMedicineOptionCreate = () => {
    const tableInventoryHead = document.getElementById('table-inventory').querySelectorAll('thead tr td');
    const sortContainer = document.getElementById('filter-column-select');

    sortContainer.innerHTML = '';

    tableInventoryHead.forEach(name => {
      if (name.textContent === '' || name.textContent === 'ID' || name.textContent === 'Описание' || name.textContent === 'Дозировка' || name.textContent === 'Полка/Стеллаж' || name.textContent === 'Поставщик') return;

      const option = document.createElement('option');
      option.value = name.dataset.name;
      option.textContent = name.textContent;
      sortContainer.append(option);
    });

    document.getElementById('apply-filter-sort').addEventListener('click', () => {
      if (!document.querySelector('.page__inventory').classList.contains('roboto-bold')) return
      const selectedColumn = sortContainer.value;
      const selectedOrder = document.getElementById('sort-select').value;

      let jsonData = getDataFromLocalStorage();

      if (!jsonData || !jsonData.Medicines) {
        console.error("Нет данных для сортировки");
        return;
      }

      const sortedData = sortTableMedecine(jsonData.Medicines, selectedColumn, selectedOrder);

      jsonData.Medicines = sortedData;

      saveDataToLocalStorage(jsonData);
      populateTable();
      filterModal.style.display = "none";
    });

    document.getElementById('reset-filter-sort').addEventListener('click', () => {
      let jsonData = getDataFromLocalStorage();
      const sortedData = sortTableMedecine(jsonData.Medicines, 'ID', 'asc');

      jsonData.Medicines = sortedData;

      saveDataToLocalStorage(jsonData);
      populateTable();
      filterModal.style.display = "none";
    });
  };

  const sortTableMedecine = (medicines, column, order) => {
    console.log(column);

    return medicines.sort((a, b) => {
      let aValue = a[column];
      let bValue = b[column];


      if (aValue === undefined || bValue === undefined) {
        console.error(`Неизвестный столбец: ${column}`);
        return 0;
      }

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
        return order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      } else if (typeof aValue === 'number') {
        return order === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
  };

  const searchMedicines = () => {
    const searchInput = document.getElementById('search-input');
    const filter = searchInput.value.toLowerCase().trim(); // Получаем текст для поиска
    const tableBody = document.getElementById('medicines-table-body');
    const rows = tableBody.getElementsByTagName('tr'); // Получаем все строки таблицы

    // Перебираем строки и скрываем/показываем их в зависимости от соответствия
    Array.from(rows).forEach(row => {
      const cells = row.getElementsByTagName('td');
      let rowContainsSearchTerm = false;

      // Проверяем каждую ячейку в строке
      Array.from(cells).forEach(cell => {
        if (cell.textContent.toLowerCase().replace(/[^a-zA-Zа-яА-Я0-9ёЁ]/g, '').includes(filter.replace(/[^a-zA-Zа-яА-Я0-9ёЁ]/g, ''))) {
          rowContainsSearchTerm = true; // Если найдено совпадение
        }
      });

      // Показываем или скрываем строку в зависимости от результата поиска
      row.style.display = rowContainsSearchTerm ? '' : 'none';
    });
  };


  if (window.location.pathname.includes('inventoryPage.html')) {
    populateTable();
    populateSupplierDropdown(getDataFromLocalStorage().Suppliers)
  }

  const addOrUpdateMedicine = (event) => {
    event.preventDefault();
    let errorMessage = ''
    if (errorMessage) {

    } else {

      setTimeout(() => {
        gebridMenu.style.width = '133px';
        gebridMenuClose.style.display = 'none';
        formAddProduct.style.display = 'none';
        formTitle.style.display = 'none';
        overlay.style.display = 'none';
        document.getElementById('error-message__user').style.display = 'none';
        document.querySelector('.form__add-product .btn').textContent = 'Добавить продукт'
        formAddProduct.reset()
      }, 2000);

      const jsonData = getDataFromLocalStorage();

      const formElement = document.querySelector('.form__add-product');
      const dataId = formElement.getAttribute('data-id');

      const newMedicine = {
        ID: dataId ? parseInt(dataId) : jsonData.Medicines.length + 1,
        Name: document.querySelector('#addproduct-form__name').value,
        Dosage: document.querySelector('#addproduct-form__dosage').value,
        Description: document.querySelector('#addproduct-form__description').value,
        StartDate: document.querySelector('#addproduct-form__date-of-manufacture').value,
        EndDate: document.querySelector('#addproduct-form__expiration-date').value,
        Quantity: parseInt(document.querySelector('#addproduct-form__quantity').value),
        Rack: document.querySelector('#addproduct-form__rack').value,
        Shelf: document.querySelector('#addproduct-form__shelf').value,
        Price: parseFloat(document.querySelector('#addproduct-form__price').value),
        SupplierID: parseInt(document.querySelector('#addproduct-form__provider').value),
        PrescriptionRequired: document.querySelector('#addproduct-form__recept1').checked
      };

      if (dataId) {
        const index = jsonData.Medicines.findIndex(medicine => medicine.ID === parseInt(dataId));
        if (index !== -1) {
          jsonData.Medicines[index] = newMedicine;
          alert('Медикамент успешно обновлён!');
        } else {
          console.error('Медикамент не найден:', dataId);
        }
      } else {
        jsonData.Medicines.push(newMedicine);
        alert('Медикамент успешно добавлен!');
      }

      saveDataToLocalStorage(jsonData);

      formElement.reset();
      document.querySelector('.form__add-product .btn').textContent = 'Добавить продукт'
      formElement.removeAttribute('data-id');
      populateTable()
      searchMedicines()
      populateWriteOffMedicines()
    }
  };

  formAddProduct.addEventListener('submit', addOrUpdateMedicine)



  //                                                   РАБОТА С ПОЛЬЗОВАТЕЛЯМИ ПОЛНАЯ
  // Заполнение таблицы пользователей

  const sortUserOptionCreate = () => {
    const tableUsersHead = document.getElementById('users-table').querySelectorAll('thead tr td');
    console.log(tableUsersHead);

    const sortContainer = document.getElementById('filter-column-select');
    console.log(sortContainer);

    sortContainer.innerHTML = '';

    tableUsersHead.forEach(name => {
      if (name.textContent === '' || name.textContent === 'ID') {
        return;
      }

      const option = document.createElement('option');
      option.value = name.dataset.name;
      option.textContent = name.textContent;
      sortContainer.append(option);
    });

    document.getElementById('apply-filter-sort').addEventListener('click', () => {
      if (!document.querySelector('.page__users').classList.contains('roboto-bold')) return

      const selectedColumn = sortContainer.value;
      console.log(selectedColumn);

      const selectedOrder = document.getElementById('sort-select').value;

      let jsonData = getDataFromLocalStorage();

      if (!jsonData || !jsonData.Users) {
        console.error("Нет данных для сортировки");
        return;
      }

      const sortedData = sortTableUsers(jsonData.Users, selectedColumn, selectedOrder);

      jsonData.Users = sortedData;

      saveDataToLocalStorage(jsonData);
      populateUsersTable();
      filterModal.style.display = "none";
    });

    document.getElementById('reset-filter-sort').addEventListener('click', () => {
      let jsonData = getDataFromLocalStorage();
      const sortedData = sortTableUsers(jsonData.Users, 'ID', 'asc');

      jsonData.Users = sortedData;

      saveDataToLocalStorage(jsonData);
      populateUsersTable();
      filterModal.style.display = "none";
    });
  };

  let userIdToDelete = null;
  let medIdToDelete = null;
  let receiptIdToDelete = null

  const openConfirmationModal = (name, id) => {
    const textConfirm = document.getElementById('text-confirm')
    if (name === 'user') {
      userIdToDelete = id;
      textConfirm.textContent = 'Вы уверены, что хотите удалить этого пользователя?'
    } else if (name === 'medicin') {
      medIdToDelete = id
      textConfirm.textContent = 'Вы уверены, что хотите удалить этот продукт?'
    } else if (name === 'exit') {

    } else if (name === 'receipt') {
      receiptIdToDelete = id
      textConfirm.textContent = 'Вы уверены, что хотите удалить этот чек?'
    }
    document.getElementById('confirmation-modal').style.display = 'block';
  };

  document.getElementById('modal-close').onclick = function () {
    document.getElementById('confirmation-modal').style.display = 'none';
    userIdToDelete = null;
    medIdToDelete = null;
    receiptIdToDelete = null;
  };

  document.getElementById('cancel-delete').onclick = function () {
    document.getElementById('confirmation-modal').style.display = 'none';
    userIdToDelete = null;
    medIdToDelete = null;
    receiptIdToDelete = null;
  };

  document.getElementById('confirm-delete').onclick = function () {
    if (userIdToDelete) {
      deleteUser(userIdToDelete);
      document.getElementById('confirmation-modal').style.display = 'none';
      userIdToDelete = null;
    } else if (medIdToDelete) {
      deleteMedicin(medIdToDelete);
      document.getElementById('confirmation-modal').style.display = 'none';
      medIdToDelete = null;
    } else if (receiptIdToDelete) {
      deleteReceipt(receiptIdToDelete);
      document.getElementById('confirmation-modal').style.display = 'none';
      receiptIdToDelete = null;
    }
  };

  const deleteUser = (userId) => {
    let jsonData = getDataFromLocalStorage();

    console.log(userId);

    jsonData.Users = jsonData.Users.filter(user => Number(user.ID) !== Number(userId));
    console.log(jsonData.Users);


    saveDataToLocalStorage(jsonData);
    populateUsersTable();
    userIdToDelete = null
  };

  // Обработчик событий для кнопок удаления в таблице пользователей
  const addEventListenerDeleteUser = (btn) => {
    btn.forEach(el => {
      el.addEventListener('click', (e) => {
        const targetButton = e.target;
        const dataId = targetButton.dataset.id;
        openConfirmationModal('user', dataId);
      });
    });
  };

  // Функция сортировки пользователей
  const sortTableUsers = (users, column, order) => {
    return users.sort((a, b) => {
      let aValue = a[column];
      let bValue = b[column];

      if (aValue === undefined || bValue === undefined) {
        console.error(`Неизвестный столбец: ${column}`);
        return 0;
      }

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
        return order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      } else if (typeof aValue === 'number') {
        return order === 'asc' ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
  };

  const searchUsers = () => {
    const searchInput = document.getElementById('search-input');
    const filter = searchInput.value.toLowerCase().trim(); // Получаем текст для поиска
    const tableBody = document.getElementById('users-table-body');
    const rows = tableBody.getElementsByTagName('tr');

    // Перебираем строки и скрываем/показываем их в зависимости от соответствия
    Array.from(rows).forEach(row => {
      const cells = row.getElementsByTagName('td');
      let rowContainsSearchTerm = false;

      // Проверяем каждую ячейку в строке
      Array.from(cells).forEach(cell => {
        if (cell.textContent.toLowerCase().replace(/[^a-zA-Zа-яА-Я0-9ёЁ]/g, '').includes(filter.replace(/[^a-zA-Zа-яА-Я0-9ёЁ]/g, ''))) {
          rowContainsSearchTerm = true; // Если найдено совпадение
        }
      });

      // Показываем или скрываем строку в зависимости от результата поиска
      row.style.display = rowContainsSearchTerm ? '' : 'none';
    });
  };

  function formatPhoneNumberTable(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    // Форматируем номер
    const formattedNumber = `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9, 11)}`;
    return formattedNumber;
  }

  const populateUsersTable = () => {
    const jsonData = getDataFromLocalStorage(); // Получаем данные из локального хранилища
    if (!jsonData) return; // Если данных нет, выходим из функции

    const tableBody = document.getElementById('users-table-body'); // Получаем тело таблицы
    tableBody.innerHTML = ''; // Очищаем предыдущие данные
    let flag = 0
    jsonData.Users.forEach(user => {
      
      if (flag == restrictionOfElements) return
      flag += 1
      const row = document.createElement('tr'); // Создаем новую строку

      row.innerHTML = `
            <td class="id id-inventory">${user.ID}</td>
            <td class="name">${user.FullName}</td>
            <td class="role">${user.Role}</td>
            <td class="login">${user.Username}</td>
            <td class="password">${user.Password}</td>
            <td class="phone">${formatPhoneNumberTable(user.Phone)}</td>
            <td class="icons">
                <img src="icons/editor.svg" alt="иконка редактирования" class="edit-btn__user" data-id='${user.ID}'>
                <img src="icons/delete.svg" alt="иконка удаления" class="delete-btn__user" data-id='${user.ID}'>
            </td>
        `;

      tableBody.appendChild(row); // Добавляем строку в тело таблицы
    });

    addEventListenerCreateEditUser(tableBody.querySelectorAll('.edit-btn__user')); // Добавляем обработчики событий для кнопок редактирования
    addEventListenerDeleteUser(tableBody.querySelectorAll('.delete-btn__user')); // Добавляем обработчики событий для кнопок удаления
  }

  // Функция для добавления обработчиков событий на кнопки редактирования
  const addEventListenerCreateEditUser = (btn) => {
    btn.forEach(el => {
      el.addEventListener('click', (e) => {
        const targetButton = e.target;
        const dataId = targetButton.dataset.id; // Получаем ID пользователя
        gebridMenu.style.width = '878px'; // Пример изменения стиля меню
        document.querySelector('.btn-wrap .btn').textContent = 'Добавить пользователя'
        setTimeout(() => {
          gebridMenuClose.style.display = 'block';
          formAddUser.style.display = 'flex';
          formAddUser.dataset.id = dataId; // Устанавливаем ID в атрибут формы
          formTitle.style.display = 'flex';
          formTitle.textContent = 'Редактирование информации о пользователе';
          document.querySelector('.btn-wrap .btn').textContent = 'Сохранить пользователя' // Меняем заголовок формы
        }, 300);
        overlay.style.display = 'block'; // Показываем оверлей
        populateFormEditUser(dataId); // Заполняем форму данными пользователя
      });
    });
  }

  // Функция для заполнения формы редактирования пользователя
  const populateFormEditUser = (dataId) => {
    const jsonData = getDataFromLocalStorage();
    const user = jsonData.Users.find(user => user.ID == dataId);
    document.getElementById('adduser-form').dataset.id = dataId

    if (user) {
      const fullName = user.FullName.split(' ');
      if (fullName.length > 0) {
        document.querySelector('#user-surname').value = fullName[0]; // Фамилия
      }

      if (fullName.length > 1) {
        document.querySelector('#user-name').value = fullName[1]; // Имя
      }

      if (fullName.length > 2) {
        document.querySelector('#user-patronymic').value = fullName[2]; // Отчество
      }
      const roleInputs = document.getElementsByName('user-role');
      roleInputs.forEach(input => {
        input.checked = input.value === user.Role; // Устанавливаем выбранную роль
      });
      document.querySelector('#user-login').value = user.Username || '';
      document.querySelector('#user-password').value = user.Password || '';
      document.querySelector('#user-phone').value = formatPhoneNumber(user.Phone) || '';
    } else {
      console.error('Пользователь не найден:', dataId);
    }
  }

  document.getElementById('adduser-form').addEventListener('submit', function (event) {
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

    // Получаем данные пользователей из локального хранилища
    let jsonData = getDataFromLocalStorage();

    let existingUserIndex
    // Проверяем, существует ли пользователь с данным логином
    if (event.target.dataset.id) {
      existingUserIndex = jsonData.Users.findIndex(user => user.ID == event.target.dataset.id);
    } else {
      existingUserIndex = -1
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
      document.getElementById('error-message__user').style.display = 'none';


      const newUser = {
        ID: existingUserIndex !== -1 ? jsonData.Users[existingUserIndex].ID : jsonData.Users.length + 1,
        Username: userLogin,
        Password: userPassword,
        Role: userRole.value,
        FullName: `${formattedSurname} ${formattedName} ${formattedPatronymic}`,
        Phone: userPhone
      };

      if (existingUserIndex !== -1) {
        jsonData.Users[existingUserIndex] = newUser;
        setTimeout(() => {
          gebridMenu.style.width = '133px';
          gebridMenuClose.style.display = 'none';
          formAddUser.style.display = 'none';
          formTitle.style.display = 'none';
          overlay.style.display = 'none';
          document.getElementById('error-message__user').style.display = 'none';
          document.querySelector('.btn-wrap .btn').textContent = 'Добавить пользователя'
        }, 2000);
      } else {
        jsonData.Users.push(newUser)
      }

      saveDataToLocalStorage(jsonData)

      errorDisplay.innerHTML = 'Операция выполнена успешно!';
      errorDisplay.style.display = 'flex';
      errorDisplay.style.color = 'white';
      populateUsersTable()
      searchUsers()
      event.target.dataset.id = ''

      this.reset(); // Очищаем форму
    }
  });

  // Функция для преобразования первой буквы в заглавную, остальные — строчные
  const capitalizeFirstLetter = (string) => {
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
  const formatPhoneNumber = (value) => {
    let formattedValue = '+7 (';

    console.log(value);

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


  //   //                                                     РАБОТА С ЖУРНАЛОМ ПОЛНАЯ
  // Заполнение таблицы журнала заказов
  const populateOrderLogTable = () => {
    const jsonData = getDataFromLocalStorage();
    if (!jsonData) return;

    const tableBody = document.getElementById('order-log-table-body');

    // Очищаем предыдущие данные
    tableBody.innerHTML = '';
    let flag = 0
    jsonData.ReceiptJournal.forEach(receipt => {
      
      if (flag == restrictionOfElements) return
      flag += 1

      const row = document.createElement('tr');
      
      const order = jsonData.Orders.find((el) => el.ID == receipt.OrderID)
      let TotalAmount = 0
      order.Medicines.forEach((el) => {
        TotalAmount += el.Price * el.Quantity
      })

      row.innerHTML = `
          <td class="id id-inventory">${receipt.ID}</td>
          <td class="name">${receipt.User}</td> 
          <td class="data">${receipt.Date} ${receipt.Time}</td>
          <td class="total-amount">${TotalAmount.toFixed(2)} руб.</td> 
          <td class="id id-order">${receipt.OrderID}</td> 
          <td class="order">Перейти к заказу</td> 
          <td class="icons">
              <img src="icons/delete.svg" alt="иконка удаления" class="delete-btn" data-id='${receipt.ID}'>
          </td>
      `;

      tableBody.appendChild(row);
    });

    tableBody.querySelectorAll('.delete-btn').forEach(el => {
      el.addEventListener('click', (e) => {
        const targetButton = e.target;
        const dataId = targetButton.dataset.id;
        openConfirmationModal('receipt', dataId);
      });
    });

    document.getElementById('reset-filter-sort').addEventListener('click', () => {
      let jsonData = getDataFromLocalStorage();
      const sortedData = sortTableMedecine(jsonData.Medicines, 'ID', 'asc');

      jsonData.Medicines = sortedData;

      saveDataToLocalStorage(jsonData);
      populateTable();
      populateWriteOffMedicines()
      filterModal.style.display = "none";
    });

    // Обработчик кликов по элементам "Перейти к заказу"
    document.querySelectorAll(".order").forEach((el) => {
      el.addEventListener('click', (event) => {
        if (event.target.classList.contains('order')) {
          const orderId = event.target.closest('tr').querySelector('.id-order').textContent;

          // Отображаем нужные контейнеры и скрываем остальные
          toggleVisibility([orderChekTable, containerOrderCheck], [
            usersTable, addUsersBtn, inventoryTable,
            addProductBtn, cancellationTable, containerOrderBtn,
            orderStaffTable, , backReceiptBtn, orderLogTable
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

    searchReceipt()
  }

  const deleteReceipt = (dataId) => {
    let jsonData = getDataFromLocalStorage();
    jsonData.ReceiptJournal = jsonData.ReceiptJournal.filter(rec => rec.ID != dataId);
    saveDataToLocalStorage(jsonData);
    populateOrderLogTable()
    receiptIdToDelete = null
  };

  // Функция для получения полного имени пользователя по его ID
  const getFullName = (userId, users) => {
    const user = users.find(u => u.ID === userId);
    return user ? user.FullName : 'Удаленный пользователь';
  }

  // Функция для загрузки данных в таблицу и информацию о чеке
  const loadOrderData = (orderID) => {
    const jsonData = getDataFromLocalStorage();
    if (!jsonData) return;

    // Находим заказ по ID
    const order = jsonData.Orders.find(o => Number(o.ID) === Number(orderID));
    const receipt = jsonData.ReceiptJournal.find(r => Number(r.OrderID) === Number(orderID));

    if (!order || !receipt) return;

    const tableBody = document.getElementById('order-chek-table-body')
    const orderCheckInfo = document.querySelector('.order-check__cap');


    // Очищаем предыдущие данные в таблице чека
    tableBody.innerHTML = '';

    // Заполнение таблицы медикаментов
    let totalPriceOrder = 0
    order.Medicines.forEach(medicine => {
      const row = document.createElement('tr');

      const totalPrice = Number((medicine.Price * medicine.Quantity).toFixed(2));
      totalPriceOrder += totalPrice

      row.innerHTML = `
          <td class="title">${medicine.MedicineName}</td>
          <td class="price">${medicine.Price} ₽</td>
          <td class="stock">${medicine.Quantity}</td>
          <td class="price">${totalPrice} ₽</td>
      `;

      tableBody.appendChild(row);
    });

    // Заполнение информации о чеке
    const user = jsonData.Users.find(u => u.ID === receipt.UserID);
    orderCheckInfo.innerHTML = `
    Информация о чеке:
    <span class="roboto-bold">${receipt.OrderID}</span>
    <span class="roboto-bold">${receipt.User}</span>
    <span class="roboto-bold">${receipt.Date} ${receipt.Time}</span>
    <span class="roboto-bold">${totalPriceOrder.toFixed(2)} ₽</span>
`;

    document.querySelector('.container__order-chek-table').style.display = 'block';
  }

  const searchReceipt = () => {
    const searchInput = document.getElementById('search-input');
    const filter = searchInput.value.toLowerCase().trim(); // Получаем текст для поиска
    const tableBody = document.getElementById('order-log-table-body');
    const rows = tableBody.getElementsByTagName('tr');

    // Перебираем строки и скрываем/показываем их в зависимости от соответствия
    Array.from(rows).forEach(row => {
      const cells = row.getElementsByTagName('td');
      let rowContainsSearchTerm = false;

      // Проверяем каждую ячейку в строке
      Array.from(cells).forEach(cell => {
        if (cell.textContent.toLowerCase().replace(/[^a-zA-Zа-яА-Я0-9ёЁ]/g, '').includes(filter.replace(/[^a-zA-Zа-яА-Я0-9ёЁ]/g, ''))) {
          rowContainsSearchTerm = true; // Если найдено совпадение
        }
      });

      // Показываем или скрываем строку в зависимости от результата поиска
      row.style.display = rowContainsSearchTerm ? '' : 'none';
    });
  };

  const sortReceiptOptionCreate = () => {
    const tableHead = document.querySelector('.container__order-log-table').querySelectorAll('table thead tr td');

    const sortContainer = document.getElementById('filter-column-select');

    sortContainer.innerHTML = ''; // Очищаем предыдущие опции

    tableHead.forEach(name => {
      if (name.textContent === '' || name.textContent === 'ID' || name.textContent === 'Общая сумма(руб.)' || name.textContent === 'Просмотр заказа') {
        return; // Пропускаем пустые заголовки и ID
      }

      const option = document.createElement('option');
      option.value = name.dataset.name; // Устанавливаем значение
      option.textContent = name.textContent; // Устанавливаем текст
      sortContainer.append(option); // Добавляем опцию в select

    });

    document.getElementById('apply-filter-sort').addEventListener('click', () => {
      if (!document.querySelector('.page__receipt-log').classList.contains('roboto-bold')) return

      const selectedColumn = sortContainer.value;

      const selectedOrder = document.getElementById('sort-select').value;

      let jsonData = getDataFromLocalStorage();

      if (!jsonData || !jsonData.ReceiptJournal) {
        console.error("Нет данных для сортировки");
        return;
      }

      const sortedData = sortTableMedecine(jsonData.ReceiptJournal, selectedColumn, selectedOrder);

      jsonData.ReceiptJournal = sortedData;

      saveDataToLocalStorage(jsonData); // Сохраняем отсортированные данные
      populateOrderLogTable(); // Обновляем таблицу после сортировки
      filterModal.style.display = "none"; // Закрываем модальное окно
    });

    document.getElementById('reset-filter-sort').addEventListener('click', () => {
      let jsonData = getDataFromLocalStorage();
      const sortedData = sortTableMedecine(jsonData.ReceiptJournal, 'ID', 'asc'); // Сортируем по ID по возрастанию

      jsonData.ReceiptJournal = sortedData;

      saveDataToLocalStorage(jsonData); // Сохраняем данные
      populateOrderLogTable(); // Обновляем таблицу пользователей
      filterModal.style.display = "none"; // Закрываем модальное окно
    });
  };

  //                                                         РАБОТА СО СПИСАНИЕМ ПОЛНАЯ

  const populateWriteOffMedicines = () => {
    const jsonData = getDataFromLocalStorage();
    if (!jsonData) return;

    const tableBody = document.getElementById('medicines-write-off-table-body');
    tableBody.innerHTML = ''
    const currentDate = new Date();

    const filteredMedicines = jsonData.Medicines.filter(medicine => {
      const expirationDate = new Date(medicine.EndDate);
      return expirationDate < currentDate || medicine.Quantity === 0;
    });
    let flag = 0
    filteredMedicines.forEach(medicine => {
      
      if (flag == restrictionOfElements) return
      flag += 1

      const row = document.createElement('tr');

      row.innerHTML = `
            <td class="id id-inventory">${medicine.ID}</td>
            <td class="title">${medicine.Name}</td>
            <td class="supplier">${getSupplierName(medicine.SupplierID, jsonData.Suppliers)}</td>
            <td class="supplier-contact">${jsonData.Suppliers.find((el) => medicine.SupplierID == el.ID).ContactInfo}</td>
            <td class="shelflife">${medicine.EndDate}</td>
            <td class="shelf">${medicine.Shelf}/${medicine.Rack}</td>
            <td class="price">${medicine.Price.toFixed(2)} ₽</td>
            <td class="stock">${medicine.Quantity}</td>
            <td class="icons">
                <img src="icons/editor.svg" alt="иконка редактирования" class="edit-btn" data-id='${medicine.ID}'>
                <img src="icons/delete.svg" alt="иконка удаления" class="delete-btn"  data-id='${medicine.ID}'>
            </td>
        `;

      if (medicine.Quantity == 0) {
        row.querySelector('.stock').style.color = 'red'
      } else {
        row.querySelector('.shelflife').style.color = 'red'
      }

      tableBody.appendChild(row);
    });

    document.getElementById('apply-filter-sort').addEventListener('click', () => {
      if (!document.querySelector('.page__cancellation').classList.contains('roboto-bold')) return
      const sortContainer = document.getElementById('filter-column-select');
      const selectedColumn = sortContainer.value;
      const selectedOrder = document.getElementById('sort-select').value;

      let jsonData = getDataFromLocalStorage();

      if (!jsonData || !jsonData.Medicines) {
        console.error("Нет данных для сортировки");
        return;
      }

      const sortedData = sortTableMedecine(jsonData.Medicines, selectedColumn, selectedOrder);

      jsonData.Medicines = sortedData;

      saveDataToLocalStorage(jsonData);
      populateWriteOffMedicines()
      filterModal.style.display = "none";
    });

    document.getElementById('reset-filter-sort').addEventListener('click', () => {
      let jsonData = getDataFromLocalStorage();
      const sortedData = sortTableMedecine(jsonData.Medicines, 'ID', 'asc');

      jsonData.Medicines = sortedData;

      saveDataToLocalStorage(jsonData);
      populateTable();
      populateWriteOffMedicines()
      filterModal.style.display = "none";
    });

    sortMedicineOptionCreate();
    addEventListenerCreateEdit(tableBody.querySelectorAll('.edit-btn'));
    addEventListenerCreateDel(tableBody.querySelectorAll('.delete-btn'))
  };

  const searchMedicinesWriteOff = () => {
    const searchInput = document.getElementById('search-input');
    const filter = searchInput.value.toLowerCase(); // Получаем текст для поиска
    const tableBody = document.getElementById('medicines-write-off-table-body');
    const rows = tableBody.getElementsByTagName('tr'); // Получаем все строки таблицы

    // Перебираем строки и скрываем/показываем их в зависимости от соответствия
    Array.from(rows).forEach(row => {
      const cells = row.getElementsByTagName('td');
      let rowContainsSearchTerm = false;

      // Проверяем каждую ячейку в строке
      Array.from(cells).forEach(cell => {
        if (cell.textContent.toLowerCase().includes(filter)) {
          rowContainsSearchTerm = true; // Если найдено совпадение
        }
      });

      // Показываем или скрываем строку в зависимости от результата поиска
      row.style.display = rowContainsSearchTerm ? '' : 'none';
    });
  };

  //                                                         РАБОТА С ЗАКАЗОМ



  // Работа с формами
  // Пользователи 




  // Запуск поиска
  // Добавляем обработчик события для поля ввода
  document.getElementById('search-input').addEventListener('input', () => {
    searchMedicines()
    searchUsers()
    searchReceipt()
    searchMedicinesWriteOff()
  });

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

  let parts = userNow.FullName.split(' '); // Разделяем строку по пробелам
  let lastName = parts[0]; // Фамилия - первое слово
  let firstInitial = parts[1][0];
  document.getElementById('name-user').textContent = `${lastName} ${firstInitial}.`
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