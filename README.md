# 🤖 AI Chat Platform

A modern enterprise-grade AI Chat Platform built with **Angular 18** and **FastAPI**, designed to provide an intelligent document-based chat experience with knowledge base management, AI model integration, analytics, and administration.

---

# Features

## Authentication
- Secure Login
- User Registration
- JWT Authentication (Planned)
- Forgot Password (Planned)
- Reset Password (Planned)
- Remember Me
- Route Guards (Planned)
- HTTP Interceptors (Planned)

---

## Dashboard (Upcoming)

- Dashboard Overview
- Statistics Cards
- AI Usage Analytics
- Recent Activities
- Recent Documents
- Model Status
- API Usage

---

## Knowledge Base (Upcoming)

- Upload PDF
- Upload DOCX
- Upload TXT
- Document Management
- Search Documents
- Delete Documents
- Categories
- Embedding Generation

---

## AI Models (Upcoming)

- OpenAI Integration
- Ollama Integration
- Gemini Integration
- Claude Integration
- Model Configuration
- Temperature Settings
- Context Length
- Prompt Templates

---

## AI Chat (Upcoming)

- Chat Interface
- Streaming Responses
- Chat History
- Multi-session Chat
- Context-aware Conversations
- Markdown Support

---

## Analytics (Upcoming)

- Token Usage
- Model Usage
- API Requests
- Active Users
- Storage Usage
- Response Time

---

## Settings (Upcoming)

- User Management
- Roles & Permissions
- Company Settings
- API Keys
- Theme Settings
- System Configuration

---

# Tech Stack

## Frontend

- Angular 18
- TypeScript
- RxJS
- Angular Router
- Reactive Forms
- Standalone Components
- CSS3

## Backend

- FastAPI
- Python
- SQLAlchemy
- MySQL
- JWT Authentication
- REST APIs

## AI

- LangChain
- ChromaDB
- OpenAI
- Ollama

---

# Project Structure

```
frontend/
│
├── src/
│
├── app/
│
│   ├── core/
│   │
│   ├── shared/
│   │
│   ├── layouts/
│   │
│   ├── features/
│   │
│   │   ├── auth/
│   │   │
│   │   │   ├── components/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   └── auth.routes.ts
│   │   │
│   │   ├── dashboard/
│   │   ├── knowledge-base/
│   │   ├── ai-models/
│   │   ├── analytics/
│   │   └── settings/
│   │
│   └── app.routes.ts
│
└── assets/

backend/
│
├── app/
│
├── api/
├── models/
├── schemas/
├── services/
├── repositories/
├── ai/
│
│   ├── providers/
│   ├── embeddings/
│   ├── vectorstores/
│   └── chat/
│
├── database/
├── config/
└── main.py
```

---

# Authentication Flow

```
User

↓

Login

↓

Validate Credentials

↓

Generate JWT Token

↓

Store Token

↓

Redirect to Dashboard
```

---

# Planned Modules

| Module | Status |
|----------|---------|
| Authentication | 🚧 In Progress |
| Dashboard | ⏳ Planned |
| Knowledge Base | ⏳ Planned |
| AI Chat | ⏳ Planned |
| AI Models | ⏳ Planned |
| Analytics | ⏳ Planned |
| Settings | ⏳ Planned |

---

# Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/ai-chat-platform.git
```

---

## Frontend

```bash
cd frontend

npm install

ng serve
```

Application runs at

```
http://localhost:4200
```

---

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

API runs at

```
http://127.0.0.1:8000
```

Swagger

```
http://127.0.0.1:8000/docs
```

---

# Environment Variables

## Backend

Create a `.env` file:

```env
DATABASE_URL=mysql+pymysql://username:password@localhost/database

SECRET_KEY=your_secret_key

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=30

OPENAI_API_KEY=your_openai_api_key
```

---

# Future Roadmap

- JWT Authentication
- Refresh Tokens
- Email Verification
- Forgot Password
- File Upload
- PDF Processing
- Embedding Generation
- Semantic Search
- AI Chat
- Multi-model Support
- User Roles
- Audit Logs
- Docker Support
- CI/CD Pipeline
- Kubernetes Deployment

---

# Coding Standards

- Standalone Angular Components
- Feature-based Folder Structure
- Reusable Components
- Type-safe Models
- RESTful APIs
- SOLID Principles
- Clean Architecture

---

# Contributing

1. Fork the repository
2. Create a new feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit changes

```bash
git commit -m "Add your feature"
```

4. Push branch

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---

# License

This project is licensed under the MIT License.

---

# Author

**Unnayan Jalan**

Built using Angular, FastAPI, LangChain, and modern AI technologies.
