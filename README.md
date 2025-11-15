# SSSALU Website

South Sudanese Student Association at African Leadership University official website.

## Project Structure

```
sssalu/
├── backend/           # Django Backend
│   ├── content/       # Django app with models & views
│   ├── sssalu_backend/ # Django settings
│   ├── media/         # Uploaded images
│   ├── manage.py      # Django management
│   └── requirements.txt # Python dependencies
└── frontend/          # React Frontend
    ├── src/           # React components & pages
    ├── public/        # Static assets
    └── package.json   # Node dependencies
```

## Setup & Installation

### Backend (Django + MySQL)
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Frontend (React + TypeScript)
```bash
cd frontend
npm install
npm start
```

## Features

- **Responsive Design**: Mobile-first approach with modern UI
- **Dynamic Content**: Admin panel for managing all content
- **API Integration**: React frontend consumes Django REST APIs
- **MySQL Database**: Production-ready database setup
- **Image Management**: Upload and display images for events, news, gallery
- **Contact Forms**: Working contact form with backend processing

## Tech Stack

- **Backend**: Django 4.2, Python 3.13, MySQL, Django REST Framework
- **Frontend**: React 18, TypeScript, React Router
- **Database**: MySQL 8.0
- **Styling**: CSS3 with CSS Variables, Responsive Grid/Flexbox

## API Endpoints

- `/api/events/` - Get all events
- `/api/news/` - Get all news articles  
- `/api/gallery/` - Get gallery images
- `/api/contact/` - Submit contact form

## Admin Panel

Access the admin panel at `http://127.0.0.1:8000/admin/` to manage:
- Events and RSVPs
- News articles and blog posts
- Project portfolio
- Member directory
- Photo gallery
- Alumni profiles
- Contact form submissions

## Development

1. **Start Backend**: `cd backend && python manage.py runserver`
2. **Start Frontend**: `cd frontend && npm start`
3. **Access**: 
   - Frontend: http://localhost:3000
   - Backend API: http://127.0.0.1:8000
   - Admin Panel: http://127.0.0.1:8000/admin

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
