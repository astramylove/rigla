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
  
  