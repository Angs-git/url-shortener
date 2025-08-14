# URL Shortener

A modern URL shortener application built with Django and React. This project demonstrates full-stack development capabilities by implementing a user-friendly URL shortening service.

## Live Demo

You can access the application at: `http://localhost:3000` (after setup)

## Features

- **URL Shortening**: Convert long URLs into easily shareable short links
- **One-Click Copy**: Copy shortened URLs to clipboard with a single click
- **Input Validation**: Comprehensive validation for URL inputs
- **Error Handling**: Clear error messages and user feedback
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Docker Support**: Easy deployment with Docker containers

## Technical Implementation

### Frontend (React)
- Single-page application built with React
- State management using React Hooks
- Axios for API communication
- Modern CSS with Flexbox for responsive design
- Form validation and error handling
- Copy-to-clipboard functionality

### Backend (Django)
- RESTful API built with Django REST Framework
- URL validation and processing
- SQLite database for storing URL mappings
- CORS configuration for secure cross-origin requests
- Error handling and status codes
- Redirect service for shortened URLs

### DevOps
- Docker containerization for both frontend and backend
- Docker Compose for service orchestration
- Environment variable management
- Git version control

## Setup Instructions

### Prerequisites
- Docker Desktop (for Docker setup)
- Node.js 16+ (for manual setup)
- Python 3.10+ (for manual setup)
- Git

### Option 1: Using Docker (Recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/Angs-git/url-shortener.git
   cd url-shortener
   ```

2. Start the application using Docker:
   ```bash
   docker-compose build
   docker-compose up
   ```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000

### Option 2: Manual Setup

### Manual Setup

#### Backend Setup
1. Navigate to the backend directory
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run migrations:
   ```bash
   python manage.py migrate
   ```
5. Start the server:
   ```bash
   python manage.py runserver
   ```

#### Frontend Setup
1. Navigate to the frontend directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Testing Instructions

1. Start the application using either Docker or manual setup
2. Open your browser and navigate to http://localhost:3000
3. Test the following scenarios:

### Basic URL Shortening
- Enter a valid URL (e.g., `https://www.example.com/very/long/path?param=value`)
- Click "Shorten URL"
- Verify you receive a shortened URL
- Click on the shortened URL to verify it redirects to the original URL

### Validation Testing
- Try submitting without a URL (should show error)
- Try submitting an invalid URL (should show error)
- Try submitting a URL without http/https (should show error)

### Features Testing
- Use the "Copy" button to copy the shortened URL
- Verify the copied URL works when pasted in a new tab
- Test responsiveness by viewing on different screen sizes

## Project Requirements Met

1. ✅ URL Shortening Functionality
   - Successfully converts long URLs to short codes
   - Maintains mapping in database
   - Handles redirects properly

2. ✅ Web Interface
   - Clean, intuitive user interface
   - Responsive design
   - Clear feedback messages

3. ✅ Code Quality
   - Well-structured project organization
   - Clean, documented code
   - Error handling
   - Input validation

4. ✅ Additional Features
   - Docker containerization
   - Copy to clipboard functionality
   - Responsive design
   - Comprehensive error handling

## Contact

For any questions or clarifications about this project, please contact:
[Your Name/Email/Contact Information]
