# 🥾 Go Take a Hike!

A modern, AI-powered hiking trail discovery application that helps outdoor enthusiasts find amazing hiking trails near any location. Built with React and powered by Google's Gemini AI, this app generates personalized trail recommendations complete with detailed descriptions, addresses, and interactive maps.

## ✨ Features

- **🔍 Smart Trail Discovery**: Enter any city or location to discover hiking trails nearby
- **🤖 AI-Powered Recommendations**: Leverages Google Gemini AI to generate diverse trail suggestions
- **🗺️ Interactive Maps**: View each trail on an embedded Google Map with directions
- **🔄 Fresh Recommendations**: Generate new trail suggestions with a single click
- **📱 Responsive Design**: Beautiful, mobile-friendly interface that works on all devices
- **🎨 Modern UI**: Built with Tailwind CSS for a sleek, gradient-rich design
- **💾 Smart Caching**: Avoids duplicate suggestions within your session

## 🛠️ Technologies Used

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4
- **AI Integration**: Google Generative AI (Gemini 1.5 Flash)
- **Icons**: Lucide React
- **Language**: JavaScript (ESM)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm or yarn package manager
- A Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mikop22/Go-Take-a-Hike.git
   cd Go-Take-a-Hike
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your API key**
   
   Open `src/utils/hikingAPI.js` and add your Google Gemini API key:
   ```javascript
   const genAI = new GoogleGenerativeAI("YOUR_API_KEY_HERE");
   ```

## 🎯 Usage

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Production Build

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📖 How to Use

1. **Enter Your Location**: On the home page, type in a city and state/province (e.g., "Denver, Colorado" or "Vancouver, BC")

2. **Discover Trails**: Click "Find My Trails" to get AI-generated hiking recommendations

3. **Explore Details**: Browse through 4 unique trail suggestions, each with:
   - Trail name
   - Parking lot address
   - Detailed description including difficulty level

4. **View Maps**: Click "View Trail Map" on any trail to see its location on Google Maps

5. **Generate More**: Want different options? Click "Generate More Trails" for fresh recommendations

6. **New Search**: Click "Search New Location" to explore trails in a different area

## 🎨 Features in Detail

### Trail Recommendations
Each trail recommendation includes:
- **Name**: The official or common name of the trail
- **Address**: Specific parking lot location for easy navigation
- **Description**: Detailed information about the trail, including scenery, distance, and approximate difficulty level

### Smart Trail Generation
- Trails are cached per location to avoid duplicates
- AI generates unique recommendations each time you request new trails
- Results are specifically tailored to your entered location

### Interactive Map View
- Embedded Google Maps integration
- Click directly on the map to get directions
- Easy navigation back to trail listings

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Google Generative AI for powering trail recommendations
- Lucide React for beautiful icons
- The React and Vite communities for excellent tools and documentation

## 📧 Contact

Project Link: [https://github.com/Mikop22/Go-Take-a-Hike](https://github.com/Mikop22/Go-Take-a-Hike)

---

Made with ❤️ for hikers and outdoor enthusiasts
