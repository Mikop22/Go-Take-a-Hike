# 🏔️ Go Take a Hike!
A modern, AI-powered hiking trail discovery application that helps outdoor enthusiasts find and explore hiking trails near their location. Built with React and powered by Google's Gemini AI, this app provides personalized trail recommendations with interactive 3D maps.

![Go Take a Hike](https://img.shields.io/badge/version-1.0.0-green)
![React](https://img.shields.io/badge/react-18.3.1-blue)
![Vite](https://img.shields.io/badge/vite-5.4.10-purple)
<img width="2010" height="954" alt="Screenshot 2026-02-12 at 12 31 25 PM" src="https://github.com/user-attachments/assets/ade92a9a-e66c-4eba-bedb-84ec891bc562" />


## ✨ Features

- 🔍 **Smart Trail Discovery** - Uses Google Gemini AI to generate hiking trail recommendations based on your location
- 🗺️ **Interactive 3D Maps** - View trails in beautiful 3D using Google Maps Platform
- 📍 **Location-Based Search** - Enter any city or region to find nearby hiking trails
- 🔄 **Generate New Recommendations** - Get fresh trail suggestions with a single click
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Clean, intuitive interface built with Tailwind CSS
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and optimized builds

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Google Gemini API Key** ([Get one here](https://makersuite.google.com/app/apikey))
- **Google Maps API Key** ([Get one here](https://developers.google.com/maps/documentation/javascript/get-api-key))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mikop22/Go-Take-a-Hike.git
   cd Go-Take-a-Hike
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Keys**
   
   ⚠️ **Security Note**: For production use, it's recommended to use environment variables instead of hardcoding API keys.

   **Option A: Using Environment Variables (Recommended)**
   
   Create a `.env.local` file in the root directory (this file is automatically ignored by git):
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   VITE_MAPS_API_KEY=your_maps_api_key_here
   ```

   Then update the code to use these environment variables:
   - In `src/utils/hikingAPI.js` line 4: `const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);`
   - In `src/components/MapView.jsx` line 41: `script.src = 'https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_MAPS_API_KEY}&libraries=places';`

   **Option B: Direct Configuration (For Testing Only)**
   
   Add your API keys directly to the source files (⚠️ **NOT recommended for version control**):

   - **Google Gemini API Key**: Open `src/utils/hikingAPI.js` and replace the empty string on line 4:
     ```javascript
     const genAI = new GoogleGenerativeAI("YOUR_GEMINI_API_KEY_HERE");
     ```

   - **Google Maps API Key**: Open `src/components/MapView.jsx` and replace the empty string on line 41:
     ```javascript
     script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_MAPS_API_KEY_HERE&libraries=places';
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173`

## 📖 Usage

1. **Enter Your Location**: On the home page, enter a city and state/province (e.g., "Denver, Colorado")
2. **View Trail Recommendations**: The app will generate 4 unique hiking trails near your location with descriptions and difficulty ratings
3. **Explore the Map**: Click "View Trail Map" on any trail to see it in an interactive 3D map
4. **Generate More Trails**: Click "Generate More Trails" to get fresh recommendations for the same location
5. **Search New Location**: Use "Search New Location" to find trails in a different area

## 🛠️ Tech Stack

### Frontend
- **React** 18.3.1 - UI library
- **Vite** 5.4.10 - Build tool and dev server
- **Tailwind CSS** 3.4.15 - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### APIs & Services
- **Google Gemini AI** - For intelligent trail recommendations
- **Google Maps Platform** - For 3D map visualization and geocoding

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
Go-Take-a-Hike/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and media files
│   ├── components/      # React components
│   │   ├── HomePage.jsx      # Landing page with location input
│   │   ├── HikeResults.jsx   # Trail results display
│   │   └── MapView.jsx       # 3D map view component
│   ├── utils/           # Utility functions
│   │   └── hikingAPI.js      # Gemini AI integration
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## 🧪 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔑 API Key Requirements

This application requires two API keys:

### Google Gemini API Key
Used for generating AI-powered trail recommendations. Get your free API key at [Google AI Studio](https://makersuite.google.com/app/apikey).

**Note**: Rate limits vary by tier. Check the [official documentation](https://ai.google.dev/pricing) for current rate limits and pricing information.

### Google Maps API Key
Used for geocoding addresses and displaying 3D maps. Make sure to enable:
- Maps JavaScript API
- Geocoding API
- Places API

## ⚠️ Important Notes

- Trail recommendations are AI-generated and should be verified before use
- Cell service warnings are provided for areas with dense forest coverage
- Always check current trail conditions and weather before hiking
- The app caches trail results to avoid redundant API calls

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created by [Mikop22](https://github.com/Mikop22)

## 🙏 Acknowledgments

- Google Gemini AI for trail recommendations
- Google Maps Platform for 3D map visualization
- Lucide React for beautiful icons
- Tailwind CSS for the styling framework

---

**Happy Hiking! 🥾⛰️**
