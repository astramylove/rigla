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
    if (containerNotifications.style.height == 'auto') {
      containerNotifications.style.height = '0px';
      capContainerNotify.parentElement.style.backgroundColor = '#66A8A6'
    } else {
      containerNotifications.style.height = 'auto';
      capContainerNotify.parentElement.style.backgroundColor = '#75C1BF'
    }
  });
}

const buttonLogin = () => {
  const loginInput = document.getElementById('loginInput');
  const PasswordInput = document.getElementById('PasswordInput');

  storedUsers.forEach(el => {

    if ((loginInput.value === el.login) && (PasswordInput.value === el.password)) {
      let userNow = el;
      localStorage.setItem('userNow', JSON.stringify(userNow));
      window.location.href = 'inventoryPage.html';
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const userNow = JSON.parse(localStorage.getItem('userNow'));

  const page = document.querySelectorAll('.page')
  const tableClass = document.querySelectorAll('.table')

  const addProductBtn = document.querySelector(".add-product");
  const addUsersBtn = document.querySelector(".add-users");

  console.log(userNow.role);
  
  if (userNow.role == 'superAdmin') {
    page.forEach((el) => {
      if (el.textContent === 'Пользователи') {
        el.style.display = 'block'
        el.classList.add('roboto-bold')
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

    addProductBtn.style.display = 'none'
    addUsersBtn.style.display = 'flex'

  } else if (userNow.role == 'admin') {
    page.forEach((el) => {
      if (el.textContent === 'Пользователи' || el.textContent === 'Журнал чеков' || el.textContent === 'Запасы' || el.textContent === 'Списание') {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    })

    tableClass.forEach((el) => {
      if (el.classList.contains('container__inventory-table')) {
        el.style.display = 'flex'
      } else {
        el.style.display = 'none'
      }
    })

  } else if (userNow.role == 'staff') {
    page.forEach((el) => {
      if (el.textContent === 'Оформить заказ' || el.textContent === 'Запасы') {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    })

    tableClass.forEach((el) => {
      if (el.classList.contains('container__inventory-table')) {
        el.style.display = 'flex'
      } else {
        el.style.display = 'none'
      }
    })
  }
  startProgram(userNow);

});
