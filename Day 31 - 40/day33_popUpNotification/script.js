const btn = document.querySelector('#btn');
const container = document.querySelector("#container");

btn.addEventListener('click', () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast'); 

    notif.innerText ="This Challenge is crazy!";
    
   container.appendChild(notif);

   setTimeout(() => {
       notif.remove();
   }, 3000);
}