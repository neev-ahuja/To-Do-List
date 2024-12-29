# To-Do-List

Visit :- https://htmlpreview.github.io/?https://github.com/neev-ahuja/To-Do-List/blob/main/index.html

## Overview
This is a dynamic To-Do List web application built using HTML, CSS, and JavaScript. The application allows users to:
- Add tasks with a name, date, and description.
- Mark tasks as complete using a checkbox.
- Delete tasks.
- Save and persist tasks using local storage.

## Features

### Add Task
- Click the **Add Task** button to open a modal.
- Enter task details (name, date, description) and click **Save Task**.
- The task will be added to the list dynamically.

### Mark Task as Complete
- Click on the checkbox icon next to a task.
- The checkbox toggles between unchecked and checked states.

### Delete Task
- Click the **Delete** button next to a task to remove it from the list.
- If all tasks are deleted, the local storage will be cleared automatically.

### Persistent Storage
- Tasks are saved in the browser's local storage.
- Upon reloading the page, tasks are retrieved from local storage and displayed.

## Technologies Used
- **HTML**: Structure of the application.
- **CSS**: Styling and layout inspired by modern UI design principles.
- **JavaScript**: Core logic for dynamic interactions and local storage management.

## File Structure
```
project-folder/
|-- index.html       # Main HTML file
|-- style.css        # CSS file for styling
|-- script.js        # JavaScript file for functionality
```

## How to Use
1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Start adding, completing, and deleting tasks.

## Future Enhancements
- Add task prioritization levels (e.g., High, Medium, Low).
- Include a search or filter functionality.
- Enable editing of existing tasks.
- Add mobile responsiveness for better usability on smaller screens.

