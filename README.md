# React GraphQL App
This is a React application that allows users to search for GitHub repositories using GitHub's GraphQL API. The app fetches and displays detailed information about repositories, including their name, description, and other related data. It provides an interactive UI to search and explore repositories with ease.

## Project Structure
```
.gitignore
package.json
public/
  index.html
README.md
src/
  App.js
  custom.scss
  db.js
  index.js
  NavButtons.js
  Query.js
  RepoInfo.js
  SearchBox.js
```
## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:

```
Node.js
npm (Node Package Manager)
```

### Installation

- Clone the repository:
  ```sh
  git clone https://github.com/your-username/react-graphql-app.git
  ```
- Navigate to the project directory:
  ```sh 
  cd react-graphql-app
  ```
- Install the dependencies:
  ```sh 
  npm install
  ```
### Running the App
- To start the development server, run:
  ```sh
  npm start
  ```
- This will start the app and open it in your default web browser.

### Building the App
- To build the app for production, run:
  ```sh
  npm run build
  ```
- This will create an optimized production build in the build directory.

## Project Details
### Main Components
- `App.js`: The main component that initializes the app and renders other components.
- `NavButtons.js`: A component for the navigation buttons.
- `Query.js`: Contains the GraphQL query used to fetch repository data from GitHub.
- `RepoInfo.js`: Displays detailed information about a repository.
- `SearchBox.js`: Provides an input field for users to search repositories.
- `Styling` : The project uses Bootstrap for general layout and styling, along with custom SCSS for more specific design tweaks. The main styles are imported in custom.scss.

### API Configuration
- The GitHub GraphQL API configuration is located in db.js. Be sure to replace the placeholder token in db.js with your own GitHub token for authentication.

```js
const github = {
    baseURL : "https://api.github.com/graphql",
    username: `${YOUR_USERNAME}`,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${YOUR_AUTHENTICATION_TOKEN}`,
    }
}

export default github;
```