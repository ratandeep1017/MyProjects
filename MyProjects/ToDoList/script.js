    // Select the input element with the id "input-box"
    const inputBox = document.getElementById("input-box");

    // Select the button element using a CSS selector
    const button = document.querySelector("button");

    // Select the list container element with the id "list-container"
    const list = document.getElementById("list-container");

    // Add an event listener to the button that triggers the addTask function when clicked
    button.addEventListener("click", addTask);

    // Define the addTask function
    function addTask() {
        // Check if the input field is empty
        if (inputBox.value === '') {
            // If input field is empty, show an alert message
            alert("you must write something!");
        } else {
            // If input field is not empty, create a new list item element
            let li = document.createElement("li");

            // Set the text content of the new list item to the capitalized input value
            li.textContent = capitalizeFirstLetter(inputBox.value);

            // Append the new list item to the list container
            list.appendChild(li);

            // Clear the input field after adding the task
            inputBox.value = '';

            // Create a delete button (span element) for the new list item
            let span = document.createElement("span");
            span.innerHTML = "x"; // Set the inner HTML content of the span to "x"
            li.appendChild(span); // Append the span to the list item
        }

        // Save the updated list data
        saveData();
    }

    // Define a function to capitalize the first letter of a string
    function capitalizeFirstLetter(str) {
        return str.replace(/\b\w/g, (match) => match.toUpperCase());
    }

    // Add an event listener to the list container to handle task completion and deletion
    list.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
            // If clicked element is a list item, toggle its "checked" class
            e.target.classList.toggle("checked");
            // Save the updated list data
            saveData();
        } else if (e.target.tagName === "SPAN") {
            // If clicked element is a delete button, remove its parent list item
            e.target.parentElement.remove();
            // Save the updated list data
            saveData();
        }
    });

    // Define a function to save the current list data to local storage
    function saveData() {
        localStorage.setItem("data", list.innerHTML);
    }

    // Define a function to retrieve and display the saved list data from local storage
    function showTask() {
        const savedData = localStorage.getItem("data");
        if (savedData) {
            list.innerHTML = savedData;
        }
    }

    // Add an event listener to trigger the showTask function when the window is fully loaded
    window.addEventListener("load", showTask);
