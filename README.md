# User Management Dashboard using React & Redux Toolkit

A React application demonstrating data fetching from a public GET API and state management using **Redux Toolkit**. The application displays user data in a dashboard table and supports basic **CRUD (Create, Read, Update, Delete)** operations.

---

## 📋 Project Description

This project is a small React application that demonstrates how to fetch data from a public GET API and manage it using **Redux Toolkit**. The application displays user data in a dashboard table and supports basic **CRUD (Create, Read, Update, Delete)** operations using Redux state management.

The project focuses on clean state handling, asynchronous data fetching using `createAsyncThunk`, and predictable state updates using Redux Toolkit best practices.

---

## 🎯 Objectives

* Fetch data from a public REST API
* Store and manage API response using Redux Toolkit
* Implement basic CRUD operations using Redux reducers
* Display data in a clean, readable dashboard table
* Handle loading and error states gracefully

---

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| **React. js** | 19.2.3 | Frontend UI library |
| **Redux Toolkit** | 2.11.2 | State management |
| **React Redux** | 9.2.0 | Connecting Redux with React |
| **React Scripts** | 5.0.1 | Build tooling |
| **JavaScript** | ES6+ | Programming language |

---

## 🔗 API Used

```
https://jsonplaceholder.typicode.com/users
```

**JSONPlaceholder** - Free fake API for testing and prototyping

---

## ⚙️ Features Implemented

### ✅ Data Fetching

* Fetches user data from a public GET API
* Uses `createAsyncThunk` for asynchronous operations
* Handles loading and error states

### ✅ Redux State Management

* Global state managed using Redux Toolkit
* Separate slice (`usersSlice. js`) for user-related data
* Centralized store configuration

### ✅ CRUD Operations

* **Create:** Add a new user locally in Redux state
* **Read:** Display users in a dashboard table
* **Update:** Edit an existing user with "(Updated)" suffix
* **Delete:** Remove a user from the list

> **Note:** CRUD operations are handled locally in Redux since JSONPlaceholder is a mock API. 

### ✅ UI Features

* Clean and responsive dashboard table
* Loading indicator while fetching data
* Error message display if API call fails
* Action buttons for Edit and Delete operations

---

## 📁 Project Structure

```
redux-fetch-demo/
├── public/                    # Static files
├── src/
│   ├── app/
│   │   └── store.js          # Redux store configuration
│   ├── feature/
│   │   └── users/
│   │       └── usersSlice.js # Users slice with async thunk
│   ├── components/
│   │   └── Dashboard.js      # Main dashboard component
│   ├── App.js                # Main application component
│   ├── App.css               # Application styles
│   ├── index.js              # Application entry point
│   ├── index.css             # Global styles
│   └── setupTests.js         # Test configuration
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```

---

## 📦 Installation & Setup

### ✅ Prerequisites

Ensure the following are installed: 

* **Node.js** (v14 or above)
* **npm** (comes with Node.js)
* **Web browser** (Chrome / Firefox / Edge)
* **Internet connection** (for API data fetching)

---

### 🔹 Step 1: Clone the Repository

Using Git: 

```bash
git clone https://github.com/Nsanjayboruds/redux-fetch-demo.git
```

Or download the ZIP file and extract it.

---

### 🔹 Step 2: Navigate to Project Folder

```bash
cd redux-fetch-demo
```

---

### 🔹 Step 3: Install Dependencies

```bash
npm install
```

This will install all required packages including: 
- React and React DOM
- Redux Toolkit and React Redux
- Testing libraries
- Other dependencies

---

### 🔹 Step 4: Start the Development Server

```bash
npm start
```

The application will automatically open in your default browser. 

---

### 🔹 Step 5: Open in Browser

If it doesn't open automatically, navigate to:

```
http://localhost:3000
```

The **User Management Dashboard** will be displayed with user data from the API.

---

## 🔄 Application Flow

```
1. Application loads → Dashboard component mounts
2. useEffect triggers → Dispatches fetchUsers() action
3. API call initiated → Shows "Loading..." message
4. Data received → Stored in Redux store (users. list)
5. Dashboard re-renders → Displays users in table
6. User interactions → CRUD operations update Redux state
7. State changes → UI automatically updates
```

All UI updates are driven by Redux state changes following the **unidirectional data flow** pattern.

---

## 🎮 How to Use

### View Users
- Upon loading, the dashboard displays all users fetched from the API
- Each user shows their name and email

### Add User
1. Click the **"Add User"** button
2. A new user with default values is added to the list
3. The table updates immediately

### Update User
1. Click the **"Edit"** button next to any user
2. The user's name is updated with "(Updated)" suffix
3. Changes reflect instantly in the table

### Delete User
1. Click the **"Delete"** button next to any user
2. The user is removed from the list
3. The table updates automatically

---

## 🧪 Available Scripts

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. 

### `npm test`
Launches the test runner in interactive watch mode.\
Tests are configured using React Testing Library and Jest.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`
**Note:  this is a one-way operation.  Once you `eject`, you can't go back! **

Ejects from Create React App configuration for full control. 

---

## 📝 Key Implementation Details

### Redux Store Configuration (`store.js`)
```javascript
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../feature/users/usersSlice.js";

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});
```

### Users Slice
- Contains `createAsyncThunk` for API calls
- Manages `list`, `status`, and `error` states
- Implements reducers for add, update, and delete operations

### Dashboard Component
- Uses `useDispatch` and `useSelector` hooks
- Fetches data on component mount
- Handles all CRUD operations through Redux actions

---

## 🌐 Browser Support

### Production
- \>0. 2% market share
- Not dead browsers
- Not Opera Mini

### Development
- Last Chrome version
- Last Firefox version
- Last Safari version

---

## ⚠️ Important Notes

* ✔️ No backend setup is required
* ✔️ Internet connection is needed to fetch API data
* ✔️ CRUD operations are handled locally in Redux state
* ✔️ Changes are not persisted (data resets on page refresh)
* ✔️ Uses JSONPlaceholder free mock API

---

## 🐛 Troubleshooting

### Application doesn't start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### API data not loading
- Check your internet connection
- Verify the API endpoint is accessible
- Check browser console for errors

### Port 3000 already in use
```bash
# Use a different port
PORT=3001 npm start
```

---

## 🚀 Future Enhancements

- [ ] Add form validation for new users
- [ ] Implement search/filter functionality
- [ ] Add pagination for large datasets
- [ ] Integrate backend API for persistent storage
- [ ] Add user profile details view
- [ ] Implement authentication
- [ ] Add styling with CSS framework (Material-UI/Tailwind)

---

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux Documentation](https://react-redux.js.org/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is private and not licensed for public use.

---

## 👤 Author

**Nsanjayboruds**

- GitHub: [@Nsanjayboruds](https://github.com/Nsanjayboruds)
- Repository: [redux-fetch-demo](https://github.com/Nsanjayboruds/redux-fetch-demo)

---

## 🏁 Conclusion

This project demonstrates the effective use of **Redux Toolkit** for managing API data and implementing CRUD operations in a React application. It follows modern Redux best practices including:

- ✅ Using `createAsyncThunk` for async operations
- ✅ Organizing code with feature-based slices
- ✅ Leveraging Redux Toolkit's simplified syntax
- ✅ Implementing proper error and loading states
- ✅ Following React hooks best practices

The project provides a scalable structure for future enhancements and serves as a great learning resource for Redux Toolkit beginners.

---

## 🙏 Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- State management powered by [Redux Toolkit](https://redux-toolkit.js.org/)
- API data from [JSONPlaceholder](https://jsonplaceholder.typicode. com/)

---

**⭐ If you found this project helpful, please consider giving it a star! **
