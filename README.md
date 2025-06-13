# Diabetes Medical App 🏥

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Java](https://img.shields.io/badge/Java-21+-ED8B00?style=flat&logo=openjdk&logoColor=white)](https://openjdk.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.2+-6DB33F?style=flat&logo=spring-boot)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18+-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13+-316192?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-20+-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)

A comprehensive microservices-based medical application designed for diabetes management, featuring patient monitoring, predictive analytics, and real-time notifications.

## 📋 Table of Contents

- [Project Description](#-project-description)
- [System Architecture](#-system-architecture)
- [Technologies Used](#-technologies-used)
- [Microservice Breakdown](#-microservice-breakdown)
- [Quick Start](#-quick-start)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [License](#-license)

## 📖 Project Description

The Diabetes Medical App is a modern, scalable healthcare solution built with microservices architecture. It provides comprehensive diabetes management capabilities including:

- **Patient Management**: Secure patient data storage and medical history tracking
- **Authentication & Authorization**: Role-based access control with Keycloak integration
- **Predictive Analytics**: AI-powered health recommendations and risk assessment
- **Real-time Notifications**: Automated alerts for medication reminders and health updates
- **Responsive Frontend**: Modern React-based user interface for patients and healthcare providers

The application is designed to help patients monitor their diabetes condition while enabling healthcare providers to deliver personalized care through data-driven insights.

## 🏗️ System Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   React App     │◄──►│   API Gateway    │◄──►│    Keycloak     │
│   (Frontend)    │    │ (Spring Cloud    │    │ (OAuth2 Server) │
└─────────────────┘    │     Gateway)     │    └─────────────────┘
                       └──────────┬───────┘
                                  │
                    ┌─────────────┼─────────────┐
                    │             │             │
           ┌────────▼────────┐ ┌──▼──────────┐ ┌▼─────────────┐
           │  User Service   │ │Patient      │ │Notification  │
           │   (Port 8081)   │ │Service      │ │Service       │
           └─────────────────┘ │(Port 8082)  │ │(Port 8083)   │
                               └─────┬───────┘ └──────▲───────┘
                                     │                │
                               ┌─────▼─────────┐     │
                               │  AI Service   │     │
                               │ (Port 8084)   │     │
                               └───────────────┘     │
                                                     │
                              ┌──────────────────────┼─────────┐
                              │        Apache Kafka         │
                              │    (Message Broker)          │
                              └──────────────────────────────┘
                                                     │
                               ┌─────────────────────▼─────────┐
                               │        PostgreSQL            │
                               │       (Database)             │
                               └───────────────────────────────┘
```

### Key Architectural Components:

- **API Gateway**: Central entry point for all client requests with load balancing and routing
- **Keycloak**: OAuth2/OpenID Connect server for authentication and authorization
- **Apache Kafka**: Event-driven communication between microservices
- **PostgreSQL**: Primary database for persistent data storage
- **Docker**: Containerization platform for consistent deployment

## 🛠️ Technologies Used

### Backend
- **Java 21+** - Modern Java features and performance improvements
- **Spring Boot 3.2+** - Microservices framework
- **Spring Cloud Gateway** - API Gateway and routing
- **Spring Security** - Security framework with OAuth2 integration
- **Spring Data JPA** - Data persistence layer
- **Apache Kafka** - Event streaming platform
- **Keycloak** - Identity and access management

### Frontend
- **React 18+** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Material-UI / Ant Design** - Component library
- **Axios** - HTTP client for API communication
- **React Router** - Client-side routing

### Database & Infrastructure
- **PostgreSQL 13+** - Primary database
- **Docker & Docker Compose** - Containerization and orchestration
- **Maven** - Build and dependency management

### Development & Testing
- **JUnit 5** - Unit testing framework
- **Testcontainers** - Integration testing
- **SonarQube** - Code quality analysis
- **Swagger/OpenAPI 3** - API documentation

## 🔧 Microservice Breakdown

### 🔐 User Service (Port 8081)
- **Purpose**: Authentication, user management, and profile handling
- **Key Features**:
  - User registration and login
  - Integration with Keycloak for OAuth2
  - Role-based access control (Patient, Doctor, Admin)
  - User profile management
- **Database**: Users, Roles, Permissions tables

### 🏥 Patient Service (Port 8082)
- **Purpose**: Patient data management and medical history
- **Key Features**:
  - Patient profile creation and updates
  - Medical history tracking
  - Glucose level monitoring
  - Medication management
  - Health metrics storage
- **Database**: Patients, MedicalHistory, Medications, HealthMetrics tables

### 📧 Notification Service (Port 8083)
- **Purpose**: Email alerts and notification management
- **Key Features**:
  - Medication reminders
  - Health alert notifications
  - Appointment reminders
  - Critical health threshold alerts
- **Integration**: Kafka consumer for real-time events

### 🤖 AI Service (Port 8084)
- **Purpose**: Predictive analytics and health recommendations
- **Key Features**:
  - Risk assessment algorithms
  - Personalized health recommendations
  - Trend analysis and predictions
  - Data pattern recognition
- **Future**: OpenAI GPT integration for advanced insights

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose installed
- Java 21+ (for local development)
- Node.js 18+ (for frontend development)
- Git

### Running with Docker Compose

1. **Clone the repository**
```bash
git clone https://github.com/your-username/diabetes-medical-app.git
cd diabetes-medical-app
```

2. **Start the application**
```bash
docker-compose up -d
```

3. **Verify services are running**
```bash
docker-compose ps
```

4. **Access the application**
- Frontend: http://localhost:3000
- API Gateway: http://localhost:8080
- Keycloak Admin: http://localhost:8090 (admin/admin)

### Local Development Setup

1. **Start infrastructure services**
```bash
docker-compose up -d postgres kafka keycloak
```

2. **Run backend services**
```bash
# Terminal 1 - User Service
cd backend/user-service
./mvnw spring-boot:run

# Terminal 2 - Patient Service
cd backend/patient-service
./mvnw spring-boot:run

# Terminal 3 - Notification Service
cd backend/notification-service
./mvnw spring-boot:run

# Terminal 4 - AI Service
cd backend/ai-service
./mvnw spring-boot:run
```

3. **Run frontend**
```bash
cd frontend
npm install
npm start
```

## 🔧 Environment Variables

### Core Configuration
Create a `.env` file in the root directory:

```env
# Database Configuration
POSTGRES_DB=diabetes_app
POSTGRES_USER=diabetes_user
POSTGRES_PASSWORD=secure_password
POSTGRES_HOST=localhost
POSTGRES_PORT=5432

# Keycloak Configuration
KEYCLOAK_REALM=diabetes-realm
KEYCLOAK_CLIENT_ID=diabetes-app
KEYCLOAK_CLIENT_SECRET=your-client-secret
KEYCLOAK_SERVER_URL=http://localhost:8090

# Kafka Configuration
KAFKA_BOOTSTRAP_SERVERS=localhost:9092
KAFKA_GROUP_ID=diabetes-app-group

# Email Configuration (for Notification Service)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# AI Service Configuration
OPENAI_API_KEY=your-openai-api-key
OPENAI_MODEL=gpt-3.5-turbo

# Security
JWT_SECRET=your-jwt-secret-key
ENCRYPTION_KEY=your-encryption-key
```

### Service-Specific Ports
- **API Gateway**: 8080
- **User Service**: 8081
- **Patient Service**: 8082
- **Notification Service**: 8083
- **AI Service**: 8084
- **Keycloak**: 8090
- **PostgreSQL**: 5432
- **Kafka**: 9092
- **Frontend**: 3000

## 📡 API Endpoints

### User Service (8081)
```
POST   /api/users/register          # User registration
POST   /api/users/login             # User authentication
GET    /api/users/profile           # Get user profile
PUT    /api/users/profile           # Update user profile
POST   /api/users/change-password   # Change password
```

### Patient Service (8082)
```
GET    /api/patients                # Get all patients (Admin/Doctor)
POST   /api/patients                # Create patient profile
GET    /api/patients/{id}           # Get patient by ID
PUT    /api/patients/{id}           # Update patient information
DELETE /api/patients/{id}           # Delete patient (Admin only)

GET    /api/patients/{id}/history   # Get medical history
POST   /api/patients/{id}/history   # Add medical record
GET    /api/patients/{id}/metrics   # Get health metrics
POST   /api/patients/{id}/metrics   # Add health metrics
```

### Notification Service (8083)
```
GET    /api/notifications           # Get user notifications
POST   /api/notifications/send      # Send notification
PUT    /api/notifications/{id}/read # Mark as read
DELETE /api/notifications/{id}      # Delete notification
```

### AI Service (8084)
```
POST   /api/ai/risk-assessment      # Calculate health risk
POST   /api/ai/recommendations      # Get health recommendations
GET    /api/ai/trends/{patientId}   # Get health trends
POST   /api/ai/predict              # Predict health outcomes
```

## 🔮 Future Improvements

### Short-term (Next 3 months)
- [ ] **OpenAI Integration**: Advanced AI recommendations using GPT models
- [ ] **Mobile App**: React Native application for patients
- [ ] **Real-time Dashboard**: WebSocket-based real-time monitoring
- [ ] **Appointment Scheduling**: Integration with calendar systems

### Medium-term (3-6 months)
- [ ] **Monitoring Stack**: Prometheus + Grafana for metrics and monitoring
- [ ] **ELK Stack**: Elasticsearch, Logstash, and Kibana for centralized logging
- [ ] **API Rate Limiting**: Redis-based rate limiting
- [ ] **File Upload**: Secure document and image upload functionality

### Long-term (6+ months)
- [ ] **Machine Learning Pipeline**: MLflow for model management
- [ ] **Blockchain**: Secure medical record storage
- [ ] **IoT Integration**: Connect with glucose monitors and wearable devices
- [ ] **Telemedicine**: Video consultation capabilities
- [ ] **Multi-tenancy**: Support for multiple healthcare organizations

## 📊 Monitoring and Observability

### Health Check Endpoints
Each service exposes health check endpoints:
```
GET /actuator/health          # Service health status
GET /actuator/metrics         # Application metrics
GET /actuator/info            # Service information
```

### Logging
- **Structured Logging**: JSON format with correlation IDs
- **Log Levels**: Configurable per service
- **Centralized Logging**: ELK stack integration (planned)

## 🧪 Testing

### Running Tests
```bash
# Unit tests for all services
./mvnw test

# Integration tests with Testcontainers
./mvnw test -Dspring.profiles.active=integration

# Frontend tests
cd frontend
npm test
```

### Test Coverage
- **Unit Tests**: JUnit 5 with Mockito
- **Integration Tests**: Testcontainers with PostgreSQL and Kafka
- **API Tests**: REST Assured for endpoint testing
- **Frontend Tests**: Jest and React Testing Library

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Code Standards
- **Java**: Follow Google Java Style Guide
- **React**: Use ESLint and Prettier configurations
- **Git**: Use conventional commit messages
- **Documentation**: Update README and API docs for any changes

### Pull Request Process
1. Update documentation if needed
2. Add tests for new features
3. Ensure all CI checks pass
4. Request review from maintainers
5. Address feedback promptly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Backend Development**: Java/Spring Boot microservices
- **Frontend Development**: React/TypeScript UI
- **DevOps**: Docker, Kubernetes, CI/CD
- **Data Science**: AI/ML algorithms and analytics

## 📞 Support

For support and questions:
- 📧 Email: ahmedghliss25@gmail.com


---

**Made with ❤️ by Ahmed Ghliss for better diabetes care**
