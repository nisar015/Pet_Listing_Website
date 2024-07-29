

A responsive and user-friendly website for listing and searching pets using React.js, Axios, and React Router. This project incorporates state management, error handling, and conditional rendering.

<!-- Table of Contents -->
Features
Project Structure
Setup and Installation
Usage
API Endpoints
Design Decisions
Contributing
License

<!-- Features -->
Display a list of pets.
View details of a specific pet.
Search for pets based on animal type, location, and breed.
Error handling with user-friendly messages.
Loading states with spinners.
Responsive design.
Project Structure

<!-- Setup and Installation -->
Prerequisites
Node.js (v14 or higher)
npm (v6 or higher) or yarn (v1.22 or higher)

<!-- Installation -->
1.Clone the repository:
git clone https://github.com/your-username/pet_listing.git
cd pet_listing
2.Install dependencies:
npm install
#or 
yarn install
3.Create a .env file in the root directory and add the API base URL:
REACT_APP_API_BASE_URL=http://pets-v2.dev-apis.com

Usage
Running the Development Server
npm run dev
# or
yarn dev
Open http://localhost:3000 to view it in your browser.

Building for Production
npm run build
# or
yarn build
The build artifacts will be stored in the build/ directory.

API Endpoints

1.List of Pets:
URL: /pets
Description: Fetches a list of pets.

2.Pets by ID:
URL: /pets?id=${id}
Description: Fetches a pet's details by its ID.

3.Breed by Animal Type:
URL: /breeds?animal=${animal}
Description: Fetches breeds for a specific animal type.

4.Search API:
URL: /pets?animal=${animal}&location=${location}&breed=${breed}
Description: Searches for pets based on animal type, location, and breed.

Design Decisions
.React Functional Components: Leveraged React hooks (useState, useEffect, useContext) for state management and side effects.
.Context API: Used for managing global state (pets data and search parameters).
.Axios: Chose Axios for its simplicity and ease of handling HTTP requests and responses.
.Error Boundaries: Implemented to catch JavaScript errors in any component tree and display 
 fallback UI.
.Responsive Design: Ensured the application is mobile-friendly and works well on various screen 
 sizes using CSS Flexbox and Grid.


Contributing
1.Fork the repository.
2.Create your feature branch (git checkout -b feature/your-feature).
3.Commit your changes (git commit -m 'Add some feature').
4.Push to the branch (git push origin feature/your-feature).
5.Open a pull request.

This README provides a comprehensive overview of the project, instructions for setup and running the project, documentation on the project structure, API endpoints, design decisions, and guidelines for contributing.
