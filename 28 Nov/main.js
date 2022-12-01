/**
 Crear elementos 
 document.createElement()

 insertarelemento
 .appendchild()
 */

 const body = document.body
 const title = document.createElement('h1')

 title.textContent= 'Soy un titulo'
 title.id = 'principal-title'
 title.classList.add('text-center','text-underline');

body.appendChild(title)
