<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List App - Documentation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        h1 {
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
        }
        h2 {
            color: #2980b9;
            margin-top: 30px;
        }
        code {
            background-color: #f4f4f4;
            padding: 2px 5px;
            border-radius: 3px;
            font-family: monospace;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        .screenshot {
            max-width: 100%;
            border: 1px solid #ddd;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .badge {
            display: inline-block;
            padding: 3px 7px;
            background-color: #3498db;
            color: white;
            border-radius: 3px;
            font-size: 0.8em;
            margin-right: 5px;
        }
    </style>
</head>
<body>
    <h1>To-Do List Application</h1>
    
    <p>A simple and intuitive to-do list application to help you manage your daily tasks efficiently.</p>
    
    <img src="screenshot.png" alt="To-Do List Screenshot" class="screenshot">
    
    <h2>Features</h2>
    <ul>
        <li>Add new tasks with descriptions</li>
        <li>Mark tasks as completed</li>
        <li>Edit existing tasks</li>
        <li>Delete tasks</li>
        <li>Filter tasks (All, Active, Completed)</li>
        <li>Responsive design for all devices</li>
        <li>Local storage to persist tasks between sessions</li>
    </ul>
    
    <h2>Technologies Used</h2>
    <p>
        <span class="badge">HTML5</span>
        <span class="badge">CSS3</span>
        <span class="badge">JavaScript</span>
    </p>
    
    <h2>Installation</h2>
    <pre><code>git clone https://github.com/your-username/todo-list.git
cd todo-list
open index.html</code></pre>
    
    <h2>Usage</h2>
    <ol>
        <li>Add a new task by typing in the input field and pressing Enter or clicking the "Add" button</li>
        <li>Click the checkbox to mark a task as completed</li>
        <li>Click the edit button (✏️) to modify a task</li>
        <li>Click the delete button (🗑️) to remove a task</li>
        <li>Use the filter buttons at the bottom to view all, active, or completed tasks</li>
    </ol>
    
    <h2>Contributing</h2>
    <p>Contributions are welcome! Please follow these steps:</p>
    <ol>
        <li>Fork the repository</li>
        <li>Create your feature branch (<code>git checkout -b feature/AmazingFeature</code>)</li>
        <li>Commit your changes (<code>git commit -m 'Add some AmazingFeature'</code>)</li>
        <li>Push to the branch (<code>git push origin feature/AmazingFeature</code>)</li>
        <li>Open a Pull Request</li>
    </ol>
    
    <h2>License</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
    
    <h2>Contact</h2>
    <p>For questions or feedback, please contact:</p>
    <ul>
        <li>Your Name - your.email@example.com</li>
        <li>Project Link: <a href="https://github.com/your-username/todo-list">https://github.com/your-username/todo-list</a></li>
    </ul>
</body>
</html>
