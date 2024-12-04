const title = document.querySelector('.title')
const text = 'To The Most Beautiful Soul>>  "Moonie" '.split('')
// for (let index = 0; index < text.length; index++) {
//   if (text[index] !== ' ') {
//     title.innerHTML += `<span>${text[index]}<span/>`
//   } else {
//     title.innerHTML += `<span style='margin-right: 20px;'><span/>`
//   }
// }
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ' && text[index] !== '\n') {
    title.innerHTML += `<span>${text[index]}<span/>`;
  } else if (text[index] === '\n') {
    title.innerHTML += `<br/>`;  // Add a line break when you encounter \n
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`;
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 1; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});