
const addButton = document.querySelector('button');

addButton.addEventListener('click', function () {

    const homeSection = document.querySelector('.home');
    const quote = prompt("Enter a quote:");
    const author = prompt("Enter the author:");

    if (quote.trim() === '' || author.trim() === '') {
        alert('Please enter both: a quote and an author.');
      } else {
    const newQuote = document.createElement('blockquote');
    
    newQuote.textContent = `"${quote}" - ${author}`;
    homeSection.insertBefore(newQuote, addButton);
      }
});

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);

    console.log({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    });

 
    form.reset();

    alert('Message sent!');
});

