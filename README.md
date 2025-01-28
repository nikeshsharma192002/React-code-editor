# React Code Editor

A web-based code editor built using React, featuring live previews, package management, and an interactive development environment.

## 🚀 [Live Demo](https://react-code-editor-nikesh.netlify.app/)

## Features

- **Code Editor**: A live code editor with syntax highlighting and error reporting.
- **Live Preview**: Displays real-time output of the code as you write.
- **Package Management**: Allows you to add packages (e.g., `lodash`, `axios`) via CDN and use them in your code.
- **Run Button**: Executes the code and shows the output in the preview section.

## Tech Stack

- **Frontend**: React.js
- **Libraries**:
  - Babel (for JS transformation)
  - Skypack (for loading packages)
- **CSS**: Custom CSS with Flexbox Layout
- **Editor**: Monaco Editor or CodeMirror (depending on your setup)

## Running the Project Locally

To run the project on your local machine, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/nikeshsharma192002/react-code-editor.git
```
### 2. Navigate into the project directory
```bash
cd react-code-editor
```
### 3. Install dependencies
```bash
npm install
```
### 4. Start the development server
```bash
npm start
```
This will open the application in your default web browser at http://localhost:3000.

## Features of the Editor

1. Writing Code
  - The editor is preloaded with a basic example (const App = () => <h1>Hello, World!</h1>;).
  - You can modify the code in the editor as you like. This React code will be transpiled and rendered in real-time in the preview section.

2. Live Preview
  - As you write code, the preview will automatically update to show the output of your React code.
  - The editor uses Babel to transpile your JavaScript/JSX into browser-readable JavaScript.
    
3. Adding Packages
  - You can add external JavaScript libraries using the Package Manager input.
  - Type the name of the package (e.g., lodash, axios) and click Add Package.
  - The package will be dynamically imported and available for use in your code.
    
4. Running Code
  - Once you’re happy with the code, click the Run button to execute the code and see the results in the preview.

## Contributing
Feel free to fork the repository and create a pull request if you’d like to contribute.

### Steps to contribute:
  - Fork the repository
  - Clone your fork
  - Create a new branch
  - Make changes and commit them
  - Open a pull request to merge into the main repository

### License
This project is licensed under the MIT License - see the LICENSE file for details.
