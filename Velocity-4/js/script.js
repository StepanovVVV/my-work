// -------- TABS ---------
const tabsBtns = document.querySelectorAll(".tabs button");
const tabsLists = document.querySelectorAll(".tabs__list");

// Функция скрывает табы и убирает active у кнопок
function hideTabs() {
    tabsLists.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}

// Функция показывает переданный номер таба и делает соответствующую ему кнопку активной
function showTab(index) {
    tabsLists[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));
// -------- TABS ---------

// -------- ANCHORS ---------
const anchors = document.querySelectorAll(".header a");

anchors.forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();

        const id = anchor.getAttribute("href");

        const elem = document.querySelector(id);

        window.scroll({
            top:  elem.offsetTop - 44,
            behavior: 'smooth'
        })
    });
});
// -------- ANCHORS ---------