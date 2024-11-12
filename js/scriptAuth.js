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
      "UserID": 1,
      "Date": "2024-10-29",
      "Time": "12:00:00"
    },
    {
      "ID": 2,
      "OrderID": 2,
      "UserID": 1,
      "Date": "2024-10-29",
      "Time": "12:30:00"
    },
    {
      "ID": 3,
      "OrderID": 3,
      "UserID": 1,
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
  
  let storedUsers
  
  if (JSON.parse(localStorage.getItem('users'))) {
    storedUsers = JSON.parse(localStorage.getItem('users'));
  } else {
    localStorage.setItem('users', JSON.stringify(users));
    storedUsers = JSON.parse(localStorage.getItem('users'));
  }
  
  console.log(storedUsers);
  
  
  function startProgram(userRole) {
    console.log(userRole);
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
  
    // Кнопки 
    const addProductBtn = document.querySelector(".add-product");
    const addUsersBtn = document.querySelector(".add-users");
    const backReceiptBtn = document.querySelector(".back-receipt");
  
    const editBtnProduct = document.querySelectorAll(".edit-btn__product");
    const editBtnUser = document.querySelectorAll(".edit-btn__user");
    const deleteBtn = document.querySelectorAll(".delete-btn");
    const gebridMenuClose = document.querySelector(".gebrid-menu__close");
  
    // Формы
    const formAddProduct = document.querySelector(".form__add-product");
    const formAddUser = document.querySelector(".form__add-user");
  
    // Переключение страниц
  
    const showPage = (activeTable, activeButtons, activeJustifyContent, navMenuText) => {
      // Скрываем все таблицы
      const tables = [
        inventoryTable,
        usersTable,
        cancellationTable,
        orderLogTable,
        orderStaffTable,
        orderChekTable,
        containerOrderCheck
      ];
    
      tables.forEach(table => {
        table.style.display = "none";
      });
    
      // Показываем активную таблицу и кнопки
      activeTable.style.display = "flex";
      activeButtons.forEach(btn => btn.style.display = "flex");
      containerBtnSearch.style.justifyContent = activeJustifyContent;
      containerBtnSearch.style.display = "flex";
    
      // Обновляем меню навигации
      navMenu.forEach(el => {
        if (el.textContent === navMenuText) {
          el.classList.add('roboto-bold');
          el.classList.remove('roboto-light');
        } else {
          el.classList.remove('roboto-bold');
          el.classList.add('roboto-light');
        }
      });
    };
  
    const toggleVisibility = (elementsToShow, elementsToHide) => {
      // Скрываем все переданные элементы
      elementsToHide.forEach(el => el.style.display = 'none');
      
      // Показываем только нужные элементы
      elementsToShow.forEach(el => el.style.display = 'flex');
    };
  
    pageInventory.addEventListener("click", () => {
      showPage(inventoryTable, [addProductBtn], 'space-between', 'Запасы');
    });
    
    pageUsers.addEventListener("click", () => {
      showPage(usersTable, [addUsersBtn], 'space-between', 'Пользователи');
    });
    
    pageCancellation.addEventListener("click", () => {
      showPage(cancellationTable, [], 'right', 'Списание');
    });
    
    pageOrderLog.addEventListener("click", () => {
      showPage(orderLogTable, [], 'right', 'Журнал чеков');
    });
    
    pageOrder.addEventListener("click", () => {
      showPage(orderStaffTable, [containerOrderBtn], 'none', 'Оформить заказ');
    });
    
    pageOrderView.forEach((el) => {
      el.addEventListener("click", () => {
        showPage(containerOrderCheck, [orderChekTable, backReceiptBtn], 'none', 'Журнал чеков');
      });
    });
  
  
  
    // pageInventory.addEventListener("click", () => {
    //   pageInventoryPic()
    // });
  
    // const pageInventoryPic = () => {
    //   inventoryTable.style.display = "flex";
    //   addProductBtn.style.display = "flex";
    //   containerBtnSearch.style.justifyContent = 'space-between'
    //   containerBtnSearch.style.display = "flex";
  
    //   containerOrderBtn.style.display = "none";
    //   usersTable.style.display = "none";
    //   addUsersBtn.style.display = "none";
    //   cancellationTable.style.display = "none"
    //   orderLogTable.style.display = "none"
    //   containerOrderBtn.style.display = "none";
    //   orderStaffTable.style.display = "none"
    //   backReceiptBtn.style.display = 'none'
    //   containerOrderCheck.style.display = 'none'
  
    //   navMenu.forEach((el) => {
    //     if (el.textContent == 'Запасы') {
    //       el.classList.add('roboto-bold')
    //       el.classList.remove('roboto-light')
    //     } else {
    //       el.classList.remove('roboto-bold')
    //       el.classList.add('roboto-light')
    //     }
    //   })
    // }
  
    // pageUsers.addEventListener("click", () => {
    //   usersTable.style.display = "flex";
    //   addUsersBtn.style.display = "flex"
    //   containerBtnSearch.style.justifyContent = 'space-between'
    //   containerBtnSearch.style.display = "flex";
  
    //   inventoryTable.style.display = "none";
    //   addProductBtn.style.display = "none";
    //   cancellationTable.style.display = "none"
    //   orderLogTable.style.display = "none"
    //   containerOrderBtn.style.display = "none";
    //   orderStaffTable.style.display = "none"
    //   backReceiptBtn.style.display = 'none'
    //   containerOrderCheck.style.display = 'none'
  
    //   navMenu.forEach((el) => {
    //     if (el.textContent == 'Пользователи') {
    //       el.classList.add('roboto-bold')
    //       el.classList.remove('roboto-light')
    //     } else {
    //       el.classList.remove('roboto-bold')
    //       el.classList.add('roboto-light')
    //     }
    //   })
    // });
  
    // pageCancellation.addEventListener("click", () => {
    //   cancellationTable.style.display = "flex"
    //   containerBtnSearch.style.justifyContent = 'right'
    //   containerBtnSearch.style.display = "flex";
  
    //   containerOrderCheck.style.display = "none"
    //   orderChekTable.style.display = "none"
    //   usersTable.style.display = "none";
    //   addUsersBtn.style.display = "none"
    //   inventoryTable.style.display = "none";
    //   addProductBtn.style.display = "none";
    //   orderLogTable.style.display = "none"
    //   containerOrderBtn.style.display = "none";
    //   orderStaffTable.style.display = "none"
    //   containerOrderCheck.style.display = "none"
    //   orderChekTable.style.display = "none"
    //   backReceiptBtn.style.display = 'none'
  
    //   navMenu.forEach((el) => {
    //     if (el.textContent == 'Списание') {
    //       el.classList.add('roboto-bold')
    //       el.classList.remove('roboto-light')
    //     } else {
    //       el.classList.remove('roboto-bold')
    //       el.classList.add('roboto-light')
    //     }
    //   })
    // });
  
    // pageOrderLog.addEventListener("click", () => {
    //   orderLogTable.style.display = "flex"
    //   containerBtnSearch.style.justifyContent = 'right'
    //   containerBtnSearch.style.display = "flex";
  
    //   usersTable.style.display = "none";
    //   addUsersBtn.style.display = "none"
    //   inventoryTable.style.display = "none";
    //   addProductBtn.style.display = "none";
    //   cancellationTable.style.display = "none"
    //   containerOrderBtn.style.display = "none";
    //   orderStaffTable.style.display = "none"
    //   containerOrderCheck.style.display = "none"
    //   orderChekTable.style.display = "none"
    //   backReceiptBtn.style.display = 'none'
  
    //   navMenu.forEach((el) => {
    //     if (el.textContent == 'Журнал чеков') {
    //       el.classList.add('roboto-bold')
    //       el.classList.remove('roboto-light')
    //     } else {
    //       el.classList.remove('roboto-bold')
    //       el.classList.add('roboto-light')
    //     }
    //   })
    // });
  
    // pageOrder.addEventListener("click", () => {
    //   orderStaffTable.style.display = "flex"
    //   containerOrderBtn.style.display = "flex";
  
    //   usersTable.style.display = "none";
    //   addUsersBtn.style.display = "none"
    //   inventoryTable.style.display = "none";
    //   addProductBtn.style.display = "none";
    //   cancellationTable.style.display = "none"
    //   containerBtnSearch.style.display = "none";
    //   orderLogTable.style.display = "none"
    //   containerOrderCheck.style.display = "none"
    //   orderChekTable.style.display = "none"
    //   backReceiptBtn.style.display = 'none'
  
    //   navMenu.forEach((el) => {
    //     if (el.textContent == 'Оформить заказ') {
    //       el.classList.add('roboto-bold')
    //       el.classList.remove('roboto-light')
    //     } else {
    //       el.classList.remove('roboto-bold')
    //       el.classList.add('roboto-light')
    //     }
    //   })
    // });
  
    // pageOrderView.forEach((el) => {
    //   el.addEventListener("click", () => {
    //     containerOrderCheck.style.display = "flex"
    //     orderChekTable.style.display = "flex"
    //     backReceiptBtn.style.display = 'flex'
  
    //     orderStaffTable.style.display = "none"
    //     containerOrderBtn.style.display = "none";
    //     usersTable.style.display = "none";
    //     addUsersBtn.style.display = "none"
    //     inventoryTable.style.display = "none";
    //     addProductBtn.style.display = "none";
    //     cancellationTable.style.display = "none"
    //     containerBtnSearch.style.display = "none";
    //     orderLogTable.style.display = "none"
  
    //     navMenu.forEach((el) => {
    //       if (el.textContent == 'Журнал чеков') {
    //         el.classList.add('roboto-bold')
    //         el.classList.remove('roboto-light')
    //       } else {
    //         el.classList.remove('roboto-bold')
    //         el.classList.add('roboto-light')
    //       }
    //     })
    //   });
    // })
  
    // Действия с кнопками
  
    backReceiptBtn.addEventListener("click", () => {
      orderLogTable.style.display = "flex"
      containerBtnSearch.style.justifyContent = 'right'
      containerBtnSearch.style.display = "flex";
  
      usersTable.style.display = "none";
      addUsersBtn.style.display = "none"
      inventoryTable.style.display = "none";
      addProductBtn.style.display = "none";
      cancellationTable.style.display = "none"
      containerOrderBtn.style.display = "none";
      orderStaffTable.style.display = "none"
      containerOrderCheck.style.display = "none"
      orderChekTable.style.display = "none"
  
      navMenu.forEach((el) => {
        if (el.textContent == 'Журнал чеков') {
          el.classList.add('roboto-bold')
          el.classList.remove('roboto-light')
        } else {
          el.classList.remove('roboto-bold')
          el.classList.add('roboto-light')
        }
      })
    });
  
  
    editBtnUser.forEach(el => {
      el.addEventListener('click', () => {
        gebridMenu.style.width = '878px'
  
        setTimeout(() => {
          gebridMenuClose.style.display = 'block'
          formAddUser.style.display = 'flex'
          formTitle.style.display = 'flex'
  
          formTitle.textContent = 'Редактирование информации о пользователе'
        }, 500);
      })
    })
  
    editBtnProduct.forEach(el => {
      el.addEventListener('click', () => {
        gebridMenu.style.width = '878px'
  
        setTimeout(() => {
          gebridMenuClose.style.display = 'block'
          formAddProduct.style.display = 'flex'
          formTitle.style.display = 'flex'
  
          formTitle.textContent = 'Редактирование информации о продукте'
        }, 500);
      })
    })
  
    addUsersBtn.addEventListener('click', () => {
      gebridMenu.style.width = '878px'
  
      setTimeout(() => {
        gebridMenuClose.style.display = 'block'
        formAddUser.style.display = 'flex'
        formTitle.style.display = 'flex'
  
        formTitle.textContent = 'Новый пользователь'
      }, 500);
    })
  
    addProductBtn.addEventListener('click', () => {
      gebridMenu.style.width = '878px'
  
      setTimeout(() => {
        gebridMenuClose.style.display = 'block'
        formAddProduct.style.display = 'flex'
        formTitle.style.display = 'flex'
  
        formTitle.textContent = 'Новый продукт'
      }, 300);
    })
  
    gebridMenuClose.addEventListener('click', () => {
      gebridMenu.style.width = '133px'
      gebridMenuClose.style.display = 'none'
      formAddProduct.style.display = 'none'
      formAddUser.style.display = 'none'
      formTitle.style.display = 'none'
  
    })
  
    capContainerNotify.addEventListener('click', () => {
      if (containerNotifications.style.height == 'auto') {
        containerNotifications.style.height = '0px'
        capContainerNotify.parentElement.style.background = '#66A8A6'
      } else {
        containerNotifications.style.height = 'auto'
        capContainerNotify.parentElement.style.background = '#75C1BF'
      }
    })
  }
  
  const buttonLogin = () => {
    const loginInput = document.getElementById('loginInput');
    const PasswordInput = document.getElementById('PasswordInput');
  
    const user = storedUsers.find(el => el.login === loginInput.value && el.password === PasswordInput.value);
  
    if (user) {
      localStorage.setItem('userRole', user.role);
      window.location.href = 'inventoryPage.html';
    } else {
      console.error('Неверный логин или пароль');
      alert('Неверный логин или пароль');
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const userRole = localStorage.getItem('userRole');
    
    const page = document.querySelectorAll('.page')
    const tableClass = document.querySelectorAll('.table')
  
    if (userRole == 'superAdmin') {
      page.forEach((el) => {
        if (el.textContent === 'Пользователи') {
          el.style.display = 'block'
        } else {
          el.style.display = 'none'
        }
      })
  
      tableClass.forEach((el) => {
        if (el.classList.contains('container__users-table')) {
          el.style.display = 'flex'
        } else {
          el.style.display = 'none'
        }
      })
    }
    startProgram(userRole);
    
  });
  
  
  // const buttonLogin = () => {
  //   const loginInput = document.getElementById('loginInput')
  //   const PasswordInput = document.getElementById('PasswordInput')
  //   storedUsers.forEach(el => {
  //     console.log(el);
  
  //     console.log(loginInput.value, PasswordInput.value);
  //     console.log(el.login, el.password);
  //     console.log(loginInput.value == el.login, PasswordInput.value == el.password);
  
  //     if ((loginInput.value === el.login) && (PasswordInput.value === el.password)) {
  //       window.location.href = 'inventoryPage.html';
  //       document.addEventListener("DOMContentLoaded", () => {
  // //         let userRole = el.role
  //         const page = document.querySelectorAll('.page')
  //         const tableClass = document.querySelectorAll('.table')
  //         console.log(userRole);
  
  //         if (userRole == 'superAdmin') {
  
  //           page.forEach((el) => {
  //             if (el.textContent === 'Пользователи') {
  //               el.style.display = 'block'
  //             } else {
  //               el.style.display = 'none'
  //             }
  
  //           })
  
  //           tableClass.forEach((el) => {
  //             if (el.classList.contains('container__users-table')) {
  //               el.style.display = 'flex'
  //             } else {
  //               el.style.display = 'none'
  //             }
  
  //           })
  //         }
  
  //         startProgram(userRole);
  //       });
  //     }
  //   });
  // }
  
  