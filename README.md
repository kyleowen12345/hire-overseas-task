# Rick and Morty Character Search

A React + TypeScript application that allows users to search and explore characters from the [Rick and Morty API](https://rickandmortyapi.com/).  
The app demonstrates API integration, responsive UI design with Material-UI (MUI), and clean project structure.

---

## 🚀 Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 16.x recommended)
- npm or yarn package manager
- A GitHub account (optional, for GitHub Copilot setup)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/kyleowen12345/hire-overseas-task.git

   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:  
   Copy `.env.sample` to `.env.local` and update the values as needed.

   ```bash
   cp .env.sample .env.local
   ```

   Example:

   ```env
   REACT_APP_API_BASE_URL=https://rickandmortyapi.com/api
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. Open in browser:
   ```
   http://localhost:3000
   ```

---

## 🎨 Design Decisions and Rationale

- **Material-UI (MUI)**:  
  Chosen for its component-rich library and responsive grid system, ensuring the UI looks clean and professional across devices.

- **Responsive Layout**:  
  Header and footer adapt to mobile and desktop views (e.g., navigation drawer on mobile, stacked footer elements).

- **Minimalist Theme**:  
  White backgrounds with simple outlined buttons to keep the focus on character data.

- **Search-Centric UX**:  
  The landing page emphasizes the search bar, guiding users immediately to the primary action.

---

## 🛠️ Technical Approach and Architecture Choices

- **React + TypeScript**:  
  Ensures type safety and scalable component architecture.

- **Folder Structure**:

  ```
  src/
  ├── components/    # Reusable UI components (SearchBar, CharacterCard, etc.)
  ├── hooks/         # Custom hooks (useCharacterSearch)
  ├── services/      # API service layer (fetch and transform data)
  ├── types/         # TypeScript type definitions
  ├── App.tsx        # Main app entry point
  └── index.tsx      # ReactDOM render entry
  ```

- **API Layer** (`src/services/api.ts`):  
  Abstracted API calls to allow easier testing, error handling, and swapping endpoints if needed.

- **Environment Variables**:  
  API base URL is configurable via `.env.local` for flexibility across environments.

- **Routing**:  
  React Router used for navigation between `Home` and `Characters` pages.

---

## 📌 Assumptions Made During Development

1. **Public API Reliability**:  
   The app assumes the Rick and Morty API is available and responsive. No fallback dataset is included.

2. **Basic Search Use Case**:  
   Search functionality focuses on character name queries. Advanced filters (e.g., species, status, location) are out of scope.

3. **Single API Source**:  
   All data comes from the Rick and Morty API — no caching layer or database is introduced.

4. **User Authentication**:  
   Not required — the app is intended as a public-facing demo project.

---

## 📄 License

This project is licensed under the MIT License.
