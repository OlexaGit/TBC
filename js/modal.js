const modals = document.querySelectorAll('[data-modal]');
const openModalBtns = document.querySelectorAll('[data-modal-open]');
const closeModalBtns = document.querySelectorAll('[data-modal-close]');

for (let i = 0; i < modals.length; i++) {
  openModalBtns[i].addEventListener('click', openModal.bind(null, i));
  closeModalBtns[i].addEventListener('click', closeModal.bind(null, i));
}

function openModal(index) {
  modals[index].classList.remove('is-hidden');
}

function closeModal(index) {
  modals[index].classList.add('is-hidden');
}

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();
