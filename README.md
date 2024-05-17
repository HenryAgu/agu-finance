# AGU-FINANCE

This application allows users to manage their funds by adding and removing amounts. The current balance is stored in the browser's local storage, so it persists across sessions.

# Fund Management Application

This application allows users to manage their funds by adding and removing amounts. The current balance is stored in the browser's local storage, so it persists across sessions.

## Technologies Used

- TypeScript: The application is written in TypeScript, a statically typed superset of JavaScript that adds types and other features to the language.
- Next.js: The application uses Next.js, a React framework for building JavaScript applications.
- Redux: The application uses Redux for state management. The state includes the current balance, which is updated when funds are added or removed.
- Tailwind CSS: The application uses Tailwind CSS, a utility-first CSS framework for rapidly building custom user interfaces.
- React Icons: The application uses React Icons, a library that provides a wide variety of icons as React components.
- Local Storage: The application uses the browser's local storage API to persist the balance across sessions.

## Application Structure

The application is structured around a Redux slice, fundSlice, which manages the state of the funds.

The fundSlice includes two actions:

- updateFunds: This action takes a number as a payload and adds it to the current balance. It then updates the balance in local storage.
- decreaseFunds: This action takes a number as a payload and subtracts it from the current balance. It then updates the balance in local storage.

The initial state of the funds is loaded from local storage when the application starts.

## How to Run the Application

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies with npm install.
4. Start the application with npm run dev.
5. The application will be available at http://localhost:3000.

## Future Improvements

- Add user authentication to allow multiple users to manage their funds separately.
- Add a transaction history to track the changes to the balance over time.
- Add input validation to prevent invalid amounts from being added or removed.