'use strict'

// Страницы
const pageInventory = document.querySelector('.page__inventory');
const pageUsers = document.querySelector('.page__users');

// Элементы
const inventoryTable = document.querySelector('.container__inventory-table')
const usersTable = document.querySelector('.container__users-table')


pageInventory.addEventListener('click', () => {
    inventoryTable.style.display = 'flex'

    usersTable.style.display = 'none'
});

pageUsers.addEventListener('click', () => {
    usersTable.style.display = 'flex'

    inventoryTable.style.display = 'none'
});