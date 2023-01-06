// Define the array of people
var people = [
  { name: 'Alice', age: 25, location: 'New York' },
  { name: 'Bob', age: 30, location: 'London' },
  { name: 'Charlie', age: 35, location: 'Paris' }
];

// Get the search input and button elements
var input = document.getElementById('search-input');
var button = document.getElementById('search-button');

// Add an event listener to the button that runs a function when the button is clicked
button.addEventListener('click', function() {
  // Get the search term from the input field
  var searchTerm = input.value;

  // Validate the search term
  if (searchTerm.trim() === '') {
    // If the search term is empty, display an error message
    alert('Please enter a search term');
  } else {
    // If the search term is not empty, search the array of people for the person with the matching name
    var foundPerson = people.find(function(person) {
      return person.name.toLowerCase() === searchTerm.toLowerCase();
    });

    // Check if the person was found
    if (foundPerson) {
      // If the person was found, display their name and other properties
      var nameElement = document.getElementById('name');
      nameElement.textContent = foundPerson.name;

      var ageElement = document.getElementById('age');
      ageElement.textContent = foundPerson.age;

      var locationElement = document.getElementById('location');
      locationElement.textContent = foundPerson.location;
    } else {
      // If the person was not found, display a message to the user
      alert('Person not found');
    }
  }
});
