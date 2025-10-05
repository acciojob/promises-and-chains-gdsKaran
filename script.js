//your JS code here. If required.
const form = document.getElementById('voteForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent page reload

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();

  // Validation
  if (name === "" || age === "") {
    alert("Please enter valid details.");
    return;
  }

  // Convert age to number
  const userAge = Number(age);

  // Create promise
  const votePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userAge >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4-second delay
  });

  // Handle promise
  votePromise
    .then(message => alert(message))
    .catch(message => alert(message));
});
