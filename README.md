# URL Shortener

A simple URL shortener application built with Django and React.

## Features

- Shorten long URLs to easily shareable links
- Copy shortened URLs with one click
- Input validation and error handling
- Responsive design
- Docker setup for easy deployment

## Tech Stack

- **Frontend:**
  - React
  - Axios for API requests
  - Modern CSS with Flexbox

- **Backend:**
  - Django
  - Django REST Framework
  - SQLite database
  - CORS headers for cross-origin requests

## Getting Started

### Using Docker (Recommended)

1. Make sure you have Docker and Docker Compose installed
2. Clone this repository
3. Run the following commands:
   ```bash
   docker-compose build
   docker-compose up
   ```
4. Visit http://localhost:3000 in your browser

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

## Usage

1. Enter a long URL in the input field
2. Click "Shorten URL"
3. Copy the shortened URL using the "Copy" button
4. Share the shortened URL!
