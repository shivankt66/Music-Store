# 🎵 Music Store

A simple **React.js** application that allows users to search for songs and play them using the **iTunes API**. The app fetches songs using **Axios**, processes the JSON response, and displays the results on the UI.

## 🚀 Features
- Search for songs using the **iTunes API**
- Display search results with song details
- Click on a song to open a **music player**
- **Bootstrap** for styling

## 🛠️ Tech Stack
- **React.js** (Functional Components & Hooks)
- **Axios** (for API calls)
- **iTunes API** (for fetching songs)
- **Bootstrap** (for styling)

## 📂 Project Structure
```
/music-store-app
│── src/
│   ├── components/
│   │   ├── Player.jsx  # Displays selected song
│   │   ├── Search.jsx  # Search bar for user input
│   │   ├── Song.jsx    # Individual song card
│   │   ├── Songs.jsx   # Renders list of songs
│   ├── pages/
│   │   ├── SearchPage.jsx  # Main page with search and songs
│   ├── services/
│   │   ├── api-client.js  # Axios API call functions
│   ├── App.js  # Root component
│   ├── index.js  # Entry point
│
├── public/
│── package.json
│── README.md
```

## 🔍 How It Works
1. **SearchPage Component**
   - Contains **Search** and **Songs** components.
   - Users enter a song name, and results are fetched from the iTunes API.

2. **Search Component**
   - Allows users to enter a search term.
   - Calls the API when the user submits a query.

3. **Songs Component**
   - Receives song data from the API response.
   - Maps over the data to display multiple **Song components**.

4. **Song Component**
   - Displays an individual song’s details (title, artist, album cover).
   - Clicking on it opens the **Player Component**.

5. **Player Component**
   - Plays the selected song using the iTunes preview URL.

## 🌍 API Integration
- The app uses the **iTunes API** to fetch songs.
- **API URL Example:**
  ```js
  const URL = `https://itunes.apple.com/search?term=${artistName}&limit=25`;
  ```
- Fetching data using **Axios**:
  ```js
  import axios from 'axios';
  export async function getSongs(artistName) {
      const URL = `https://itunes.apple.com/search?term=${artistName}&limit=25`;
      const response = await axios.get(URL);
      return response.data;
  }
  ```

## 🏃‍♂️ Getting Started
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/shivankt66/Music-Store.git
cd Music-Store
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Development Server**
```sh
npm start
```

## 📜 License
This project is licensed under the **MIT License**.

---
🎶 **Enjoy your Music Store!** 🚀

