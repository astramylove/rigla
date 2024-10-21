"use strict";

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

pageInventory.addEventListener("click", () => {
  inventoryTable.style.display = "flex";
  addProductBtn.style.display = "flex";
  containerBtnSearch.style.justifyContent = 'space-between'
  containerBtnSearch.style.display = "flex";

  containerOrderBtn.style.display = "none";
  usersTable.style.display = "none";
  addUsersBtn.style.display = "none";
  cancellationTable.style.display = "none"
  orderLogTable.style.display = "none"
  containerOrderBtn.style.display = "none";
  orderStaffTable.style.display = "none"
  backReceiptBtn.style.display = 'none'
  containerOrderCheck.style.display = 'none'

  navMenu.forEach((el) => {
    if (el.textContent == 'Запасы') {
      el.classList.add('roboto-bold')
      el.classList.remove('roboto-light')
    } else {
      el.classList.remove('roboto-bold')
      el.classList.add('roboto-light')
    }
  })
});

pageUsers.addEventListener("click", () => {
  usersTable.style.display = "flex";
  addUsersBtn.style.display = "flex"
  containerBtnSearch.style.justifyContent = 'space-between'
  containerBtnSearch.style.display = "flex";

  inventoryTable.style.display = "none";
  addProductBtn.style.display = "none";
  cancellationTable.style.display = "none"
  orderLogTable.style.display = "none"
  containerOrderBtn.style.display = "none";
  orderStaffTable.style.display = "none"
  backReceiptBtn.style.display = 'none'
  containerOrderCheck.style.display = 'none'

  navMenu.forEach((el) => {
    if (el.textContent == 'Пользователи') {
      el.classList.add('roboto-bold')
      el.classList.remove('roboto-light')
    } else {
      el.classList.remove('roboto-bold')
      el.classList.add('roboto-light')
    }
  })
});

pageCancellation.addEventListener("click", () => {
  cancellationTable.style.display = "flex"
  containerBtnSearch.style.justifyContent = 'right'
  containerBtnSearch.style.display = "flex";

  containerOrderCheck.style.display = "none"
  orderChekTable.style.display = "none"
  usersTable.style.display = "none";
  addUsersBtn.style.display = "none"
  inventoryTable.style.display = "none";
  addProductBtn.style.display = "none";
  orderLogTable.style.display = "none"
  containerOrderBtn.style.display = "none";
  orderStaffTable.style.display = "none"
  containerOrderCheck.style.display = "none"
  orderChekTable.style.display = "none"
  backReceiptBtn.style.display = 'none'

  navMenu.forEach((el) => {
    if (el.textContent == 'Списание') {
      el.classList.add('roboto-bold')
      el.classList.remove('roboto-light')
    } else {
      el.classList.remove('roboto-bold')
      el.classList.add('roboto-light')
    }
  })
});

pageOrderLog.addEventListener("click", () => {
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
  backReceiptBtn.style.display = 'none'

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

pageOrder.addEventListener("click", () => {
  orderStaffTable.style.display = "flex"
  containerOrderBtn.style.display = "flex";

  usersTable.style.display = "none";
  addUsersBtn.style.display = "none"
  inventoryTable.style.display = "none";
  addProductBtn.style.display = "none";
  cancellationTable.style.display = "none"
  containerBtnSearch.style.display = "none";
  orderLogTable.style.display = "none"
  containerOrderCheck.style.display = "none"
  orderChekTable.style.display = "none"
  backReceiptBtn.style.display = 'none'

  navMenu.forEach((el) => {
    if (el.textContent == 'Оформить заказ') {
      el.classList.add('roboto-bold')
      el.classList.remove('roboto-light')
    } else {
      el.classList.remove('roboto-bold')
      el.classList.add('roboto-light')
    }
  })
});

pageOrderView.forEach((el) => {
  el.addEventListener("click", () => {
    containerOrderCheck.style.display = "flex"
    orderChekTable.style.display = "flex"
    backReceiptBtn.style.display = 'flex'

    orderStaffTable.style.display = "none"
    containerOrderBtn.style.display = "none";
    usersTable.style.display = "none";
    addUsersBtn.style.display = "none"
    inventoryTable.style.display = "none";
    addProductBtn.style.display = "none";
    cancellationTable.style.display = "none"
    containerBtnSearch.style.display = "none";
    orderLogTable.style.display = "none"

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
})

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
  el.addEventListener('click', ()  => {
    gebridMenu.style.width = '878px'
    gebridMenuClose.style.display = 'block'
    formAddUser.style.display = 'flex'
    formTitle.style.display = 'flex'

    formTitle.textContent = 'Редактирование информации о пользователе'
  })
})

editBtnProduct.forEach(el => {
  el.addEventListener('click', () => {
    gebridMenu.style.width = '878px'
    gebridMenuClose.style.display = 'block'
    formAddProduct.style.display = 'flex'
    formTitle.style.display = 'flex'

    formTitle.textContent = 'Редактирование информации о продукте'
  })
})

addUsersBtn.addEventListener('click', ()  => {
  gebridMenu.style.width = '878px'
  gebridMenuClose.style.display = 'block'
  formAddUser.style.display = 'flex'
  formTitle.style.display = 'flex'

  formTitle.textContent = 'Новый пользователь'
})

addProductBtn.addEventListener('click', () => {
  gebridMenu.style.width = '878px'
  gebridMenuClose.style.display = 'block'
  formAddProduct.style.display = 'flex'
  formTitle.style.display = 'flex'

  formTitle.textContent = 'Новый продукт'
})

gebridMenuClose.addEventListener('click', () => {
  gebridMenu.style.width = '133px'
  gebridMenuClose.style.display = 'none'
  formAddProduct.style.display = 'none'
  formAddUser.style.display = 'none'
  formTitle.style.display = 'none'

})


