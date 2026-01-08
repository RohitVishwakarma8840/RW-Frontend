# Student Attendance System - Frontend

A modern, visually stunning React.js frontend for managing student attendance with real-time updates and beautiful UI/UX.

## 🎨 Features

- **Modern Design**: Vibrant gradient colors, glassmorphism effects, and smooth animations
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Updates**: Instant attendance marking and status updates
- **Premium UI**: Professional design with micro-interactions and hover effects
- **Form Validation**: Client-side validation for all inputs
- **Error Handling**: Graceful error states with user-friendly messages

## 📋 Components

### 1. AddStudentForm
- Controlled form inputs for name and roll number
- Real-time validation
- Success/error notifications
- Loading states during API calls

### 2. StudentList
- Table layout with all student information
- Attendance status badges
- Integrated attendance toggle buttons
- Delete functionality with confirmation
- Empty state with helpful message

### 3. AttendanceToggle
- Present/Absent toggle buttons
- Visual feedback for current status
- Loading indicators during updates
- Disabled state management

### 4. AttendanceSummary
- Total students count
- Present count with percentage
- Absent count
- Beautiful stat cards with gradient effects

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🔧 Configuration

The frontend is configured to proxy API requests to `http://localhost:5000`. You can modify this in `vite.config.js`:

```javascript
server: {
  port: 3000,
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
    }
  }
}
```

## 📡 API Integration

The application expects the following API endpoints:

- `GET /api/students` - Fetch all students
- `POST /api/students` - Add new student
- `PUT /api/students/:id/attendance` - Mark attendance
- `DELETE /api/students/:id` - Delete student

## 🎨 Design System

### Color Palette
- **Primary Gradient**: Purple to violet (#667eea → #764ba2)
- **Success Gradient**: Blue to cyan (#4facfe → #00f2fe)
- **Danger Gradient**: Pink to yellow (#fa709a → #fee140)
- **Background**: Dark theme with animated gradients

### Typography
- **Font Family**: Inter (from Google Fonts)
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable text with proper hierarchy

### Animations
- Fade-in effects for content
- Slide-in animations for list items
- Hover effects on interactive elements
- Smooth transitions throughout

## 🛠️ Technologies Used

- **React 18**: Latest React with hooks
- **Vite**: Fast build tool and dev server
- **Axios**: HTTP client for API requests
- **CSS3**: Modern CSS with variables and animations
- **Google Fonts**: Inter font family

## 📦 Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

## 🧪 React Concepts Demonstrated

1. **useState**: State management for students, loading, and error states
2. **useEffect**: Fetching data on component mount
3. **Controlled Forms**: Form inputs controlled by React state
4. **Props**: Passing data and callbacks between components
5. **Conditional Rendering**: Loading states, error states, empty states
6. **Event Handling**: Form submissions, button clicks
7. **API Integration**: Async/await with error handling

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Desktop (>768px)
- Tablet (768px)
- Mobile (<768px)

## 🎯 Future Enhancements

- Search and filter functionality
- Date-wise attendance history
- Export attendance reports
- Bulk attendance marking
- Student profile management
- Dark/Light theme toggle

## 📄 License

This project is part of a practical assignment for learning React.js and Node.js.

---

Built with ❤️ using React.js
