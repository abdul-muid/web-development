// 2 Ways 

// const redButton = document.querySelector('.red');
// const blueButton = document.querySelector('.blue');
// const greenButton = document.querySelector('.green');


// redButton.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'red';
// })

// blueButton.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'blue';
// })

// greenButton.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'green';
// })


document.querySelectorAll('.red, .blue, .green, .yellow').forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.style.backgroundColor = btn.classList[0];
    });
  });