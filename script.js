//your code here
function swapTheme() {
            const app = document.getElementById("app");
            const swapBtn = document.getElementById("swap");
            
            // Toggle app classes: day <-> night
            if (app.classList.contains("day")) {
                app.classList.remove("day");
                app.classList.add("night");
            } else {
                app.classList.remove("night");
                app.classList.add("day");
            }
            
            // Toggle button classes: button_day <-> button_night
            if (swapBtn.classList.contains("button_day")) {
                swapBtn.classList.remove("button_day");
                swapBtn.classList.add("button_night");
            } else {
                swapBtn.classList.remove("button_night");
                swapBtn.classList.add("button_day");
            }
        }
        
        // Attach event listener to button
        document.getElementById("swap").addEventListener("click", swapTheme);

