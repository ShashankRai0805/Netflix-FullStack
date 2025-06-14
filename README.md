# Netflix Clone

A full-stack Netflix clone built with React, Firebase, and TMDB API. This project replicates core Netflix functionalities including user authentication, movie browsing, and video playback.

## 🚀 Features

- User authentication (Sign up, Sign in, Sign out)
- Responsive design
- Dynamic movie data from TMDB API
- Video player for trailers
- Category-wise movie listing
- Interactive UI elements
- Mobile-friendly navigation

## 🛠️ Technologies Used

- React.js
- Firebase (Authentication & Firestore)
- TMDB API
- React Router DOM
- React Toastify
- CSS3

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ShashankRai0805/netflix-clone.git
```

2. Install dependencies:
```bash
cd netflix-clone
npm install
```

3. Create a `.env` file in the root directory and add your Firebase and TMDB API credentials:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
```

4. Start the development server:
```bash
npm run dev
```

## 🌟 Components

- **Navbar**: Dynamic navigation bar with user profile
- **TitleCards**: Displays movie categories and handles horizontal scrolling
- **Footer**: Site information and social links
- **Player**: Video player for movie trailers
- **Login**: User authentication interface

## 📱 Pages

- **Home**: Main landing page with banner and movie categories
- **Login**: Authentication page for sign in/sign up
- **Player**: Video playback page

## 🔐 Authentication Features

- Email/Password authentication
- Protected routes
- User session management
- Error handling with toast notifications

## 🎯 Future Improvements

- Add search functionality
- Implement user profiles
- Add watchlist feature
- Enhanced mobile responsiveness
- Add more categories and filters
