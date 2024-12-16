# Timesheet Application

A comprehensive Timesheet Application built to streamline work hour logging, project tracking, and logs. The system supports employees, managers, and administrators with role-based access to manage projects,users and Timelogs
1. Features
Employee Features

    Log daily/weekly work hours.
    Submit timesheets for approval.
    View personal timesheet history.

Manager Features

    View submitted timelogs.
    View the Project

Admin Features

    Manage users (create/update/delete).
    Manage projects and assignments.
    View the Timelogs.

2. Tech Stack
Frontend

    Framework: Angular
    State Management: RxJS (Angular)
    UI Library: Tailwind CSS

Backend

    Server: Node.js with Express.js
    Database: MongoDB
    Email Service: Nodemailer for sending notifications

3. Installation
3.1 Prerequisites

    Node.js (v14 or higher)
    MongoDB
    Git

3.2 Backend Installation

    Clone the repository:

git clone https://github.com/senso-01/timesheet-app.git
cd Timesheet-backend

Install dependencies:

npm install

Configure environment variables (.env file):

PORT=5000
DB_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your JWT Secret>
EMAIL_USER=<Your SMTP Email>
EMAIL_PASS=<Your SMTP Password>

Start the server:

    npm start

3.3 Frontend Installation

    Navigate to the frontend directory:

cd ../Timesheet-frontend

Install dependencies:

npm install

Start the development server:

npm start

Open the application in the browser:

    http://localhost:4200

4. Project Structure

timesheet-app/
│
├── backend/                       # Backend source code
│   ├── controllers/               # Route controllers
│   ├── models/                    # Database models
│   ├── routes/                    # API routes
│   ├── services/                  # Email and utility services
│   ├── .env                       # Environment variables
│   └── server.js                  # Main server file
│
├── frontend/                      # Frontend source code
│   ├── src/                       # Angular/React source code
│   ├── components/                # UI components
│   ├── services/                  # API services
│   └── App.js or main.ts          # Application entry point
│
└── README.md                      # Project documentation

5. API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/user/login	Login user
POST	/api/user/register	Register new user
Timesheets
Method	Endpoint	Description
GET	/api/timelogs	Get all timesheets
POST	/api/timesheets	Create new timesheet
PUT	/api/timelogs/:id	Update timesheet status
Projects
Method	Endpoint	Description
GET	/api/projects	Fetch all projects
POST	/api/projects	Create a new project
Tasks
Method	Endpoint	Description
GET	/api/taskss	view a tasks
7. Usage

    Run the Backend:
    Start the server on http://localhost:5000.

    Run the Frontend:
    Access the application at http://localhost:4200.

    Login:
    Use provided credentials or register a new user.
    #User Role's: Admin,User (Important for adding new User)

    Role-Based Access:
        Employee: Log work hours and submit timesheets.
        Admin: Manage users, projects, and system settings.

9. Screenshots
Dashboard Page

Timesheet Submission

Admin Management

8. License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software with attribution.
Contributors

    Senbhagamoorthi R(23pca132@anjaconline.org)

For issues or enhancements, please create a pull request or raise an issue.
Contact

For questions or feedback, please contact:
Email: 23pca132@anjaconline.org
LinkedIn: [Senbhagamoorthi R](https://www.linkedin.com/in/senbhagamoorthi-r-05b03b229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
Happy Coding! 🚀
