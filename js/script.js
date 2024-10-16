"use strict";

// Страницы
const pageInventory = document.querySelector(".page__inventory");
const pageUsers = document.querySelector(".page__users");
const pageCancellation = document.querySelector(".page__cancellation");
const pageOrderLog = document.querySelector(".page__receipt-log");
const pageOrder = document.querySelector(".page__order");
const pageOrderView = document.querySelectorAll(".order");

console.log(pageOrderView);

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

// Кнопки 
const addProductBtn = document.querySelector(".add-product");
const addUsersBtn = document.querySelector(".add-users");

// document.addEventListener('wheel', function(e) {
//   if (e.ctrlKey) {
//       e.preventDefault(); 
//   }
// }, { passive: false });

// // Для поддержки старых браузеров
// document.addEventListener('mousewheel', function(e) {
//   if (e.ctrlKey) {
//       e.preventDefault();
//   }
// }, { passive: false });

// document.addEventListener('DOMMouseScroll', function(e) {
//   if (e.ctrlKey) {
//       e.preventDefault();
//   }
// }, { passive: false });

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
      if (el.textContent == 'Заказ') {
        el.classList.add('roboto-bold')
        el.classList.remove('roboto-light')
      } else {
        el.classList.remove('roboto-bold')
        el.classList.add('roboto-light')
      }
    })
  });


})