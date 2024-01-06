const result = document.getElementById('result');

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const birthDate = document.getElementById('birthDate').value;
  const birthTime = document.getElementById('birthTime').value;

  fetch('/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      birthDate,
      birthTime,
    }),
  })
  .then(res => res.json())
  .then(data => {
    result.innerHTML = data.result;
  })
  .catch(error => {
    console.error('Error querying API: ', error);
    result.innerHTML = 'Üzgünüm, yıldız haritanızı çıkarırken bir sorun oluştu.';
  });
});