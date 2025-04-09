const ul = document.querySelector('ul');

ul.addEventListener('scroll', (event) => {
  console.log(event);
  console.log(ul.scrollTop);

  if(ul.scrollTop > 300) {
    console.log('Scrollou mais de 300px');
    ul.scrollTo({
      top: 0,
      behavior: 'smooth'})
  }
});

const button = document.querySelector('button');
button.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("Clicou no botão");
  console.log(event);
});