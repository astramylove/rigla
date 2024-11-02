let data = {
  "Users": [
    {
      "ID": 1,
      "Username": "staffUser",
      "Password": "staff123",
      "Role": "staff",
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
      "Name": "Аспирин",
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
      StartDate: "2024 -02 -01",
      EndDate: "2026 -02 -01",
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
      StartDate: "2024 -03 -01",
      EndDate: "2026 -03 -01",
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
      StartDate: "2024 -04 -01",
      EndDate: "2026 -04 -01",
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
      StartDate: "2024 -05 -01",
      EndDate: "2026 -05 -01",
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
      "Time": "12:30:00",
      "TotalAmount": 160.00
    },
    {
      "ID": 3,
      "OrderID": 3,
      "UserID": 1,
      "Date": "2024-10-29",
      "Time": "12:50:00",
      "TotalAmount": 360.00
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
    setupFilterAndSort('medicines-table', 'medicines-table-body');
  });

  pageUsers.addEventListener("click", () => {
    toggleVisibility([usersTable, addUsersBtn], [
      inventoryTable, addProductBtn, cancellationTable,
      orderLogTable, containerOrderBtn, orderStaffTable,
      backReceiptBtn, containerOrderCheck
    ]);
    highlightActivePage('Пользователи');
    populateUsersTable();
    setupFilterAndSort('users-table', 'users-table-body');
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

    fillCancellationTable();
    setupFilterAndSort('cancellation-table', 'cancellation-table-body');
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
    setupFilterAndSort('order-log-table', 'order-log-table-body');
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
    // setupFilterAndSort('order-staff-table', 'order-staff-table-body');
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

  // Открытие фильтра
  const filterModal = document.querySelector('.container__filter')
  const filterBtn = document.querySelector('.filter')
  const containerFilterBtn = document.querySelector('.container__btn-filter')

  filterBtn.addEventListener('click', () => {
    if (filterModal.style.height == 'auto') {
      containerFilterBtn.style.border = 'none'
      containerFilterBtn.style.backgroundColor = '#fff'

      filterModal.style.display = 'none'
      filterModal.style.height = 0
    } else {
      containerFilterBtn.style.border = '2px solid #2C6369 '
      containerFilterBtn.style.borderBottom = '0'
      containerFilterBtn.style.backgroundColor = '#A2D6CA'

      filterModal.style.display = 'flex'
      filterModal.style.height = 'auto'
    }
  })

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
    const providerNew = document.querySelector('.provider-add')
    providerNew.style.display = 'none'
    overlay.style.display = 'none';
  });

  // Уведомления
  capContainerNotify.addEventListener('click', () => {
    contNotifyFunction()
    containerExit.style.height = '0px';
    capContainerLogOut.style.backgroundColor = '#66A8A6'
    openExit.style.transform = 'rotate(0deg)'
    generateNotifications()
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


  // Заполнение уведомлений
  function generateNotifications() {
    const data = getDataFromLocalStorage();

    if (!data || !data.Notifications) {
      return;
    }

    const notificationsContainer = document.querySelector('.container__notifications tbody');

    notificationsContainer.innerHTML = '';

    data.Notifications.forEach(notification => {
      const notificationRow = document.createElement('tr');

      const medicine = data.Medicines.find(med => med.ID === notification.MedicineID);
      const medicineName = medicine ? medicine.Name : null;

      if (medicineName == null) {
        return;
      }

      notificationRow.innerHTML = `
            <td>${notification.Message.replace(`'${medicineName}'`)}<br>
            <span class="notifications-date">${new Date().toLocaleDateString()}</span></td>
            <td><img src="icons/crest.svg" alt=""></td>
        `;

      notificationsContainer.appendChild(notificationRow);
    });

    if (notificationsContainer.children.length === 0) {
      const noNotificationsRow = document.createElement('tr');
      noNotificationsRow.innerHTML = `<td colspan="2">Нет уведомлений</td>`;
      notificationsContainer.appendChild(noNotificationsRow);
    }

    const lenNotyfy = document.querySelector('.notify-len')
    lenNotyfy.textContent = data.Notifications.length
  }
  // Заполнение таблицы медикаментов
  const populateTable = () => {
    const jsonData = getDataFromLocalStorage();
    if (!jsonData) return;

    const tableBody = document.getElementById('medicines-table-body');

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
                <img src="icons/editor.svg" alt="иконка редактирования" class="edit-btn__product" data-id="${medicine.ID}">
                <img src="icons/delete.svg" alt="иконка удаления" class="delete-btn">
            </td>
        `;

      tableBody.appendChild(row);

      const editBtnProduct = row.querySelector(".edit-btn__product");
      const deleteBtn = row.querySelector(".delete-btn");

      editBtnProduct.addEventListener('click', () => {
        populateForm(medicine);

        gebridMenu.style.width = '878px';
        setTimeout(() => {
          gebridMenuClose.style.display = 'block';
          formAddProduct.style.display = 'flex';
          formTitle.style.display = 'flex';
          formTitle.textContent = 'Редактирование информации о продукте';
        }, 300);

        overlay.style.display = 'block';
      });

      deleteBtn.addEventListener('click', () => {
      });
    });
  }

  const populateSupplierDropdown = (suppliers) => {
    const providerSelect = document.getElementById('addproduct-form__provider');
    const providerNew = document.querySelector('.provider-add')
    console.log(providerNew);
    
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
      if (providerSelect.value == 'newProvider') {
        providerNew.style.display = 'flex'
      } else {
        providerNew.style.display = 'none'
      }
    })
}

const populateForm = (medicine) => {
    document.getElementById('addproduct-form__name').value = medicine.Name;
    document.getElementById('addproduct-form__dosage').value = medicine.Dosage;
    document.getElementById('addproduct-form__description').value = medicine.Description;
    
    document.getElementById('addproduct-form__date-of-manufacture').value = new Date().toISOString().split('T')[0]; 
    document.getElementById('addproduct-form__expiration-date').value = medicine.EndDate;

    document.getElementById('addproduct-form__quantity').value = medicine.Quantity;
    document.getElementById('addproduct-form__rack').value = medicine.Rack;
    document.getElementById('addproduct-form__shelf').value = medicine.Shelf;
    document.getElementById('addproduct-form__price').value = medicine.Price.toFixed(2);
    
    const providerSelect = document.getElementById('addproduct-form__provider');
    providerSelect.value = medicine.SupplierID; 

    const receptYes = document.getElementById('addproduct-form__recept1');
    const receptNo = document.getElementById('addproduct-form__recept2');
    
    if (medicine.PrescriptionRequired) {
        receptYes.checked = true;
        receptNo.checked = false;
    } else {
        receptYes.checked = false;
        receptNo.checked = true;
    }
}

  if (window.location.pathname.includes('inventoryPage.html')) {
    populateTable();
    populateSupplierDropdown(getDataFromLocalStorage().Suppliers)
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

    const editBtnUser = document.querySelectorAll(".edit-btn__user");

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
    console.log(jsonData);

    // Находим заказ по ID
    const order = jsonData.Orders.find(o => Number(o.ID) === Number(orderID));
    const receipt = jsonData.ReceiptJournal.find(r => Number(r.OrderID) === Number(orderID));
    console.log(order);


    if (!order || !receipt) return;

    const tableBody = document.querySelector('.container__order-chek-table tbody');
    const orderCheckInfo = document.querySelector('.order-check__cap');
    console.log(orderCheckInfo);


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


  const fillCancellationTable = () => {
    const data = getDataFromLocalStorage();
    if (!jsonData) return;

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];// Получение текущей даты
    const cancellationTableBody = document.querySelector('.container__cancellation-table tbody'); // Находим тело таблицы

    // Очищаем таблицу перед заполнением
    cancellationTableBody.innerHTML = '';

    // Фильтруем медикаменты по условиям
    const expiredMedicines = data.Medicines.filter(medicine => {
      const endDate = medicine.EndDate;


      return endDate < formattedDate || medicine.Quantity === 0; // Проверяем срок годности и количество
    });

    // Заполнение таблицы данными
    expiredMedicines.forEach(medicine => {
      const supplier = data.Suppliers.find(s => s.ID === medicine.SupplierID); // Находим поставщика по ID

      const row = document.createElement('tr'); // Создаем новую строку таблицы
      row.innerHTML = `
        <td class="id id-inventory">${medicine.ID}</td>
        <td class="title">${medicine.Name}</td>
        <td class="supplier">${supplier ? supplier.Name : 'Неизвестно'}</td>
        <td class="supplier-contact">${supplier ? supplier.ContactInfo : 'Неизвестно'}</td>
        <td class="shelflife">${medicine.EndDate.split('-').reverse().join('.')}</td> <!-- Форматируем дату -->
        <td class="shelf">${medicine.Shelf}/${medicine.Rack}</td>
        <td class="price">${medicine.Price.toFixed(2)}</td>
        <td class="stock">${medicine.Quantity}</td>
        <td class="icons">
          <img src="icons/editor.svg" alt="иконка редактирования" class="edit-btn">
          <img src="icons/delete.svg" alt="иконка удаления" class="delete-btn">
        </td>
      `;
      cancellationTableBody.appendChild(row); // Добавляем строку в тело таблицы

      const editBtnProduct = document.querySelector(".edit-btn__product");
      const deleteBtn = document.querySelector(".delete-btn");


      editBtnProduct.addEventListener('click', () => {
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


  }

  // Пагинация


  // Фильтрация

  function setupFilterAndSort(tableId, tableBodyId) {
    document.querySelector('.search').value = ''
    const applyButton = document.getElementById('apply-filter-sort');
    const resetButton = document.getElementById('reset-filter-sort');

    const tableBody = document.querySelector(`#${tableBodyId}`);
    const table = document.querySelector(`#${tableId}`);
    console.log(tableId);

    // Сохраняем оригинальные строки таблицы
    const originalRows = Array.from(tableBody.rows);

    const headerCells = table.querySelectorAll('thead tr td');

    const filterSelect = document.getElementById('filter-column-select');
    filterSelect.innerHTML = '';

    headerCells.forEach((cell) => {
      if (cell.textContent.trim() == 'ID' || cell.textContent.trim() == 'ID заказа') {

      } else if (cell.textContent.trim() !== '') {
        const option = document.createElement('option');
        option.value = cell.className;
        option.textContent = cell.textContent;
        filterSelect.appendChild(option);
      }
    });

    // Обработчик события для кнопки Применить
    applyButton.addEventListener('click', function () {
      const selectedColumn = filterSelect.value;
      const sortOrder = document.getElementById('sort-select').value;

      let rows = Array.from(originalRows);

      // Фильтрация строк на основе выбранного столбца
      rows = rows.filter(row => {
        const cellValue = getCellValue(row, selectedColumn).toString().toLowerCase();
        return cellValue !== '';
      });

      // Сортировка строк на основе выбранного столбца и порядка
      rows.sort((a, b) => {
        const valueA = getCellValue(a, selectedColumn);
        const valueB = getCellValue(b, selectedColumn);
        return sortOrder === 'asc' ? compareValues(valueA, valueB) : compareValues(valueB, valueA);
      });

      tableBody.innerHTML = '';
      rows.forEach(row => tableBody.appendChild(row.cloneNode(true)));


      containerFilterBtn.style.border = 'none'
      containerFilterBtn.style.backgroundColor = '#fff'

      filterModal.style.display = 'none'
      filterModal.style.height = 0

    });

    resetButton.addEventListener('click', function () {
      tableBody.innerHTML = '';
      originalRows.forEach(row => tableBody.appendChild(row.cloneNode(true)));

      filterSelect.value = '';
      document.getElementById('sort-select').value = 'asc';

      containerFilterBtn.style.border = 'none'
      containerFilterBtn.style.backgroundColor = '#fff'

      filterModal.style.display = 'none'
      filterModal.style.height = 0

    });

    const searchInput = document.querySelector('.search');
    const searchInputLoop = document.querySelector('.search-loop img'); // Получаем поле поиска

    searchInput.addEventListener('input', function () {
      const searchTerm = this.value.toLowerCase(); // Получаем введенный текст и приводим к нижнему регистру

      const filteredRows = originalRows.filter(row => {
        return Array.from(row.cells).some(cell =>
          cell.textContent.toLowerCase().includes(searchTerm) // Проверяем, содержится ли текст в ячейках строки
        );
      });

      updateTableBody(tableBody, filteredRows);
    });

    searchInputLoop.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase(); // Получаем введенный текст и приводим к нижнему регистру

      const filteredRows = originalRows.filter(row => {
        return Array.from(row.cells).some(cell =>
          cell.textContent.toLowerCase().includes(searchTerm) // Проверяем, содержится ли текст в ячейках строки
        );
      });

      updateTableBody(tableBody, filteredRows);
    });

  }

  const updateTableBody = (tableBody, rows) => {
    tableBody.innerHTML = ''; // Очищаем текущее тело таблицы
    rows.forEach(row => tableBody.appendChild(row.cloneNode(true))); // Добавляем клонированные строки
  }

  // Функция для получения значения ячейки на основе названия столбца
  function getCellValue(row, columnName) {
    for (let cell of row.cells) {
      if (cell.classList.contains(columnName)) {
        return parseCellValue(cell);
      }
    }
    return '';
  }

  // Функция для обработки значений ячеек (числа, даты или строки)
  function parseCellValue(cell) {
    const textContent = cell.textContent.trim();

    if (!isNaN(textContent)) {
      return parseFloat(textContent);
    } else if (Date.parse(textContent)) {
      return new Date(textContent).getTime();
    } else {
      return textContent;
    }
  }

  // Функция для сравнения значений при сортировке
  function compareValues(a, b) {
    if (a === b) return 0;
    if (a == null || a === '') return -1;
    if (b == null || b === '') return 1;
    return a > b ? 1 : -1;
  }

  // Инициализация фильтрации и сортировки для таблицы медикаментов
  setupFilterAndSort('medicines-table', 'medicines-table-body');




  // Работа с формами
  // Запасы
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const medicineData = {
      ID: Date.now(),
      Name: formData.get('addproduct-form__name'),
      Dosage: formData.get('addproduct-form__dosage'),
      StartDate: formData.get('addproduct-form__date-of-manufacture'),
      EndDate: formData.get('addproduct-form__expiration-date'),
      Quantity: Number(formData.get('addproduct-form__quantity')),
      Description: formData.get('addproduct-form__description'),
      SupplierID: formData.get('addproduct-form__provider') === "newProvider" ? Date.now() : Number(formData.get('addproduct-form__provider')), // Example for new provider ID
      PrescriptionRequired: formData.get('addproduct-form__recept') === 'yes',
      Price: parseFloat(formData.get('addproduct-form__price')),
      Shelf: formData.get('addproduct-form__shelf'),
      Rack: formData.get('addproduct-form__rack')
    };

    saveDataToLocalStorage(medicineData);

    event.target.reset();
    alert("Продукт успешно добавлен!");
  };

  document.querySelector('.form__add-product').addEventListener('submit', handleFormSubmit);

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


  // Валидация формы добавления пользователя
  addUserForm.addEventListener('submit', (event) => {
    let valid = true;
    const errorMessage = [];

    // Проверка на пустые поля
    const userRequiredFields = [
      'user-name',
      'user-surname',
      'user-role',
      'user-password',
      'user-login'
    ];

    userRequiredFields.forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (!field.value) {
        valid = false;
        errorMessage.push(`${field.previousElementSibling.innerText} не может быть пустым.`);
      }
    });

    // Проверка на корректность телефона (если введен)
    const phoneField = document.getElementById('user-phone');
    if (phoneField.value && !/^\+?\d{10,15}$/.test(phoneField.value)) {
      valid = false;
      errorMessage.push('Телефон должен содержать от 10 до 15 цифр.');
    }

    // Если не валидно, предотвратить отправку и показать ошибки
    if (!valid) {
      event.preventDefault();
      alert(errorMessage.join('\n'));
    }
  });
};

// Продукты

document.addEventListener('DOMContentLoaded', function () {
  const addProductForm = document.querySelector('.form__add-product');
  const addUserForm = document.querySelector('#addUserForm');

  // Валидация формы добавления продукта
  addProductForm.addEventListener('submit', (event) => {
    let valid = true;
    const errorMessage = [];

    // Проверка на пустые поля
    const requiredFields = [
      'addproduct-form__name',
      'addproduct-form__dosage',
      'addproduct-form__description',
      'addproduct-form__date-of-manufacture',
      'addproduct-form__expiration-date',
      'addproduct-form__quantity',
      'addproduct-form__rack',
      'addproduct-form__shelf',
      'addproduct-form__price',
      'addproduct-form__provider'
    ];

    requiredFields.forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (!field.value) {
        valid = false;
        errorMessage.push(`${field.previousElementSibling.innerText} не может быть пустым.`);
      }
    });

    // Проверка даты истечения срока
    const manufactureDate = new Date(document.getElementById('addproduct-form__date-of-manufacture').value);
    const expirationDate = new Date(document.getElementById('addproduct-form__expiration-date').value);
    if (expirationDate <= manufactureDate) {
      valid = false;
      errorMessage.push('Дата истечения срока должна быть позже даты изготовления.');
    }

    // Если не валидно, предотвратить отправку и показать ошибки
    if (!valid) {
      event.preventDefault();
      alert(errorMessage.join('\n'));
    }
  });
});

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