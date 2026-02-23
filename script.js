function swapTheme() {
        const appDiv = document.getElementById('app');
        const swapButton = document.getElementById('swap');

        // Debugging log
        console.log("Current classes on appDiv:", appDiv.className);

        // Check the current theme and toggle
        if (appDiv.classList.contains('day')) {
            appDiv.classList.remove('day');
            appDiv.classList.add('night'); // Switch to night theme
            swapButton.classList.remove('button_day');
            swapButton.classList.add('button_night'); // Change button style
            swapButton.textContent = 'Switch to Light Theme'; // Change button text
        } else {
            appDiv.classList.remove('night');
            appDiv.classList.add('day'); // Switch to day theme
            swapButton.classList.remove('button_night');
            swapButton.classList.add('button_day'); // Change button style
            swapButton.textContent = 'Switch to Dark Theme'; // Change button text
        }

        // Log after toggling
        console.log("New classes on appDiv:", appDiv.className);
    }

    // Attach the event listener to the button
    document.getElementById('swap').addEventListener('click', swapTheme);