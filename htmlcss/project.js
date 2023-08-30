
const adjustWidthElements = document.querySelectorAll('.adjust-width');

adjustWidthElements.forEach((element) => {
  const img = element.querySelector('.img');
  img.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up
    toggleText(event);
  });

  const imgalt = element.querySelector('.imgalt');
  imgalt.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from reaching the image
  });
});

function toggleText(event) {
  const description = event.target.nextElementSibling;
  const element = event.target.closest('.adjust-width');

  if (description.style.display === 'none') {
    description.style.display = 'block'; // Display the description
    element.style.paddingBottom = '100px'; // Adjust padding to create space for text
  } else {
    description.style.display = 'none';  // Hide the description
    element.style.paddingBottom = '0'; // Revert to original padding
  }
}





