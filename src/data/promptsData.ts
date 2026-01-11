export interface PromptItem {
  id: number;
  title: string;
  content: string;
}

export interface Section {
  title: string;
  prompts: PromptItem[];
}

export const promptsData: Section[] = [
  {
    title: "PART I – PROJECT FOUNDATION",
    prompts: [
      {
        id: 1,
        title: "Project Bootstrap & Structure",
        content: `Initialize a full-stack project for [Project Name]:

Backend:
- Node.js + TypeScript + Express
- Folder structure: src/ (routes, controllers, services, models, utils, config)
- Dependencies: express, cors, helmet, dotenv
- tsconfig.json optimized for Node.js
- .env.example
- README.md

Frontend:
- React + TypeScript + Vite (or Next.js)
- Tailwind CSS configured
- Folder structure: components, pages, hooks, services
- .env.example

Include:
- ESLint + Prettier
- Development scripts
- GET /api/health endpoint`
      },
      {
        id: 2,
        title: "Environment Configuration",
        content: `Backend .env:
NODE_ENV=development
PORT=5000
DATABASE_URL=
JWT_SECRET=
JWT_REFRESH_SECRET=
CORS_ORIGIN=http://localhost:3000

Frontend .env:
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=[Project Name]
VITE_ENVIRONMENT=development`
      },
      {
        id: 3,
        title: "Database Connection & Setup",
        content: `Set up MongoDB (Mongoose) or PostgreSQL (Prisma)
- Connection retry logic
- Health check endpoint
- Graceful shutdown`
      },
      {
        id: 4,
        title: "Base API Architecture",
        content: `REST API with /api/v1 versioning
Controller → Service → Model
Standardized responses`
      },
      {
        id: 5,
        title: "User Schema Design",
        content: `User:
- email (unique)
- password (hashed)
- role
- isActive
- emailVerified
- timestamps`
      },
      {
        id: 6,
        title: "Authentication System",
        content: `JWT auth with access + refresh tokens
Login, signup, refresh, logout
Rate limiting enabled`
      },
      {
        id: 7,
        title: "Password Security",
        content: `bcrypt hashing (12 rounds)
Password strength validation
Never return passwords`
      },
      {
        id: 8,
        title: "Auth Middleware",
        content: `Verify JWT
Attach req.user
Role-based guards`
      },
      {
        id: 9,
        title: "Global Error Handling",
        content: `Central AppError
Async error wrapper
Consistent error responses`
      },
      {
        id: 10,
        title: "API Testing & Docs",
        content: `Postman / Thunder Client
Auth + Users collections
Optional Swagger`
      },
      {
        id: 11,
        title: "User Registration Flow",
        content: `Backend:
- Generate email verification token
- Store token + expiry
- Send verification email
- Do not auto-verify user

Frontend:
- Signup form
- Password strength meter
- Validation + success states`
      },
      {
        id: 12,
        title: "Login System",
        content: `Frontend:
- Email + password
- Show/hide password
- Error handling
- Redirect to dashboard

Backend:
- Validate credentials
- Check email verification
- Update lastLogin`
      },
      {
        id: 13,
        title: "Password Reset Flow",
        content: `Backend:
- forgot-password (1h token)
- reset-password
- Hash new password

Frontend:
- Reset form
- Strength indicator
- Success redirect`
      },
      {
        id: 14,
        title: "User Profile Management",
        content: `Endpoints:
- GET /users/me
- PUT /users/me

Fields:
- name
- bio
- avatar
- location`
      },
      {
        id: 15,
        title: "Role-Based Access Control (RBAC)",
        content: `Roles:
- user
- admin

Admin actions:
- View users
- Change roles
- Delete users`
      },
      {
        id: 16,
        title: "User Dashboard",
        content: `Backend:
- Dashboard stats
- Activity feed

Frontend:
- Stat cards
- Recent activity
- Empty states`
      },
      {
        id: 17,
        title: "Account Settings",
        content: `Sections:
- Profile
- Security
- Notifications
- Delete account

Includes confirmations & alerts`
      },
      {
        id: 18,
        title: "Email Verification",
        content: `- Verification token (24h)
- Verify endpoint
- Resend verification (rate limited)

Frontend verification page`
      },
      {
        id: 19,
        title: "Two-Factor Authentication (2FA)",
        content: `- speakeasy + qrcode
- Setup & verify endpoints
- Backup codes
- Login challenge`
      },
      {
        id: 20,
        title: "Session Management",
        content: `Session tracking:
- Device
- Browser
- IP
- Last activity

Endpoints:
- List sessions
- Logout per session
- Logout all`
      }
    ]
  },
  {
    title: "PART II – CORE OPERATIONS (CRUD)",
    prompts: [
      {
        id: 21,
        title: "Core App Data Schema",
        content: `Entity: [Entity] (Task, Note, Post)

Fields:
- id
- userId (indexed)
- title (max 200 chars)
- description (max 5000 chars)
- status (draft | active | completed | archived)
- priority (low | medium | high)
- tags (string[])
- metadata (JSON)
- isDeleted
- timestamps

Indexes:
- userId
- status
- createdAt`
      },
      {
        id: 22,
        title: "Create Operation (CREATE)",
        content: `Backend:
- POST /api/v1/[entities]
- Authenticate user
- Validate input
- Assign userId
- Return 201

Frontend:
- Create form/modal
- Validation + loading
- Success feedback`
      },
      {
        id: 23,
        title: "Read Operations (READ)",
        content: `Endpoints:
- GET /[entities]
- GET /[entities]/:id

Features:
- Pagination
- Ownership check
- Sorting by createdAt DESC`
      },
      {
        id: 24,
        title: "Update Operation (UPDATE)",
        content: `Endpoints:
- PUT /[entities]/:id
- PATCH /[entities]/:id

Rules:
- Verify ownership
- Validate updates
- Return updated entity`
      },
      {
        id: 25,
        title: "Delete Operation (DELETE)",
        content: `Endpoint:
- DELETE /[entities]/:id

Behavior:
- Soft delete (isDeleted = true)
- Ownership verification
- Optional undo window`
      },
      {
        id: 26,
        title: "Pagination Implementation",
        content: `Params:
- page (default 1)
- limit (default 20, max 100)

Return:
- page
- total
- totalPages`
      },
      {
        id: 27,
        title: "Search Functionality",
        content: `Endpoint:
- GET /[entities]/search?q=

Features:
- Text search (title + description)
- User-scoped results
- Min 2 characters`
      },
      {
        id: 28,
        title: "Filtering System",
        content: `Filters:
- status
- priority

Combine with:
- Pagination
- Search`
      },
      {
        id: 29,
        title: "Sorting Mechanism",
        content: `Sorting:
- Field whitelist
- asc / desc

Default:
- createdAt DESC`
      },
      {
        id: 30,
        title: "Data Validation",
        content: `Backend:
- Zod / Joi schemas
- Validate create + update

Frontend:
- React Hook Form
- Field-level errors
- Disable invalid submit`
      }
    ]
  },
  {
    title: "PART III – ADVANCED FEATURES",
    prompts: [
      {
        id: 31,
        title: "File Upload System",
        content: `Backend:
- Multer middleware
- Max size: 10MB
- File type validation
- Unique filenames

Storage:
- Cloudinary (recommended)

Frontend:
- Drag & drop
- Preview
- Upload progress`
      },
      {
        id: 32,
        title: "Image Processing",
        content: `Backend:
- sharp library
- Resize & compress (~80%)
- Convert to WebP
- Generate thumbnails

Sizes:
- 200px / 800px / 1200px`
      },
      {
        id: 33,
        title: "Real-Time Notifications",
        content: `Notification types:
- info
- success
- warning
- error

Features:
- Mark read/unread
- Badge count
- Toast alerts`
      },
      {
        id: 34,
        title: "WebSocket Real-Time Updates",
        content: `Backend:
- socket.io
- JWT-authenticated sockets
- User-specific rooms

Events:
- entity_created
- entity_updated
- entity_deleted`
      },
      {
        id: 35,
        title: "Email Service Integration",
        content: `Backend:
- Nodemailer / SendGrid
- Central email service
- Handlebars templates

Emails:
- Welcome
- Verify email
- Password reset`
      },
      {
        id: 36,
        title: "Third-Party API Integration",
        content: `Structure:
- /services/external
- One service per API

Best practices:
- Env-stored API keys
- Retry logic
- Rate-limit handling`
      },
      {
        id: 37,
        title: "Payment Integration (Stripe)",
        content: `Backend:
- Create PaymentIntent
- Webhook handling

Frontend:
- Stripe Elements
- Payment status UI

DB:
- Transactions
- Payment status`
      },
      {
        id: 38,
        title: "Background Jobs",
        content: `Tools:
- Bull + Redis

Use cases:
- Email sending
- Image processing
- Cleanup tasks

Features:
- Retries
- Cron jobs`
      },
      {
        id: 39,
        title: "Analytics & Tracking",
        content: `Track:
- Page views
- User actions
- Custom events

Optional:
- Google Analytics
- Privacy controls`
      },
      {
        id: 40,
        title: "Export & Reporting",
        content: `Backend:
- CSV / JSON export
- Stream large datasets

Frontend:
- Export button
- Progress feedback
- Filtered exports`
      },
      {
        id: 41,
        title: "Caching Strategy",
        content: `Caching layers:
- In-memory (Node cache)
- Redis (recommended)

Use cases:
- Read-heavy endpoints
- Session data
- Rate limits

TTL strategy per resource`
      },
      {
        id: 42,
        title: "Rate Limiting",
        content: `Protect APIs with rate limits

Rules:
- Auth routes stricter
- Public routes relaxed

Tools:
- express-rate-limit
- Redis store`
      },
      {
        id: 43,
        title: "Audit Logs",
        content: `Track sensitive actions:
- Login attempts
- Role changes
- Deletions

Fields:
- userId
- action
- timestamp
- metadata`
      },
      {
        id: 44,
        title: "Feature Flags",
        content: `Enable/disable features safely

Approach:
- Env-based flags
- DB-driven flags

Use cases:
- Beta features
- Gradual rollouts`
      },
      {
        id: 45,
        title: "API Versioning Strategy",
        content: `Versioning options:
- URI (/api/v1)
- Header-based

Rules:
- Never break existing versions
- Deprecation policy`
      },
      {
        id: 46,
        title: "API Response Optimization",
        content: `Optimize responses:
- Field selection
- Compression (gzip/brotli)
- Pagination limits

Goal:
- Reduce payload size`
      },
      {
        id: 47,
        title: "Security Headers",
        content: `Use helmet to set:
- CSP
- HSTS
- X-Frame-Options
- X-Content-Type-Options

Protect against common attacks`
      },
      {
        id: 48,
        title: "Dependency Management",
        content: `Best practices:
- Lockfile commits
- Regular updates
- Security audits

Tools:
- npm audit
- Dependabot`
      },
      {
        id: 49,
        title: "Feature Documentation",
        content: `Document features:
- Purpose
- API endpoints
- Edge cases

Keep docs updated with releases`
      },
      {
        id: 50,
        title: "Pre-Production Review",
        content: `Review checklist:
- Security review
- Performance checks
- UX review
- Rollback plan

Approval before production deploy`
      }
    ]
  },
  {
    title: "PART IV – DEPLOYMENT & DEVOPS",
    prompts: [
      {
        id: 51,
        title: "Environment Separation",
        content: `Environments:
- Development
- Staging
- Production

Backend:
- Separate DB URLs
- Unique secrets
- CORS per environment

Frontend:
- API URLs
- Feature flags`
      },
      {
        id: 52,
        title: "Docker Setup",
        content: `Backend:
- Node.js Alpine image
- Build TypeScript
- Expose API port

Frontend:
- Static build
- Serve via Nginx`
      },
      {
        id: 53,
        title: "Backend Deployment",
        content: `Platforms:
- Railway
- Render
- Fly.io
- AWS

Steps:
- Connect repo
- Set env vars
- Auto deploy`
      },
      {
        id: 54,
        title: "Frontend Deployment",
        content: `Recommended:
- Vercel

Steps:
- Import repo
- Configure env vars
- Deploy

Verify auth + API connectivity`
      },
      {
        id: 55,
        title: "Database Migration",
        content: `MongoDB:
- migrate-mongo

PostgreSQL:
- Prisma migrate

Rules:
- Test locally
- Backup before prod`
      },
      {
        id: 56,
        title: "CI/CD Pipeline",
        content: `Pipeline:
1. Install dependencies
2. Run tests
3. Lint
4. Build
5. Deploy

Benefits:
- Faster releases
- Fewer errors`
      },
      {
        id: 57,
        title: "Monitoring & Logging",
        content: `Monitoring:
- Error tracking
- Performance metrics

Logging:
- Structured logs
- Log levels
- No sensitive data`
      },
      {
        id: 58,
        title: "Backup Strategy",
        content: `Database:
- Daily automated backups
- 30-day retention
- Restore testing

Files:
- User uploads
- Logs`
      },
      {
        id: 59,
        title: "SSL / HTTPS Configuration",
        content: `Frontend:
- Auto HTTPS
- Force redirect

Backend:
- Managed SSL
- Secure cookies
- HSTS`
      },
      {
        id: 60,
        title: "Production Checklist",
        content: `Security:
- Protected routes
- Validation
- HTTPS enabled

Performance:
- Indexes
- Caching
- Optimized assets

Monitoring:
- Logs
- Alerts
- Backups`
      }
    ]
  },
  {
    title: "PART V – UX & POLISH",
    prompts: [
      {
        id: 61,
        title: "Advanced Data Visualization",
        content: `Charts:
- Line (trends)
- Bar (comparisons)
- Pie (distribution)
- Area (cumulative)

Features:
- Responsive
- Tooltips
- Empty states`
      },
      {
        id: 62,
        title: "Keyboard Shortcuts",
        content: `Shortcuts:
- Cmd/Ctrl + K → Search
- Cmd/Ctrl + S → Save
- Cmd/Ctrl + N → New
- Esc → Close modal

Extras:
- Help modal`
      },
      {
        id: 63,
        title: "Infinite Scroll",
        content: `Features:
- Auto load on scroll
- Loading indicators
- End-of-list message

Fallback:
- Load More button`
      },
      {
        id: 64,
        title: "Drag and Drop",
        content: `Use cases:
- Reorder lists
- Kanban boards
- File uploads

Features:
- Smooth animations
- Touch support
- Keyboard accessible`
      },
      {
        id: 65,
        title: "Advanced Search with Filters",
        content: `Search:
- Full-text
- Highlight matches
- Debounced input

Filters:
- Status
- Priority
- Date ranges`
      },
      {
        id: 66,
        title: "Real-Time Collaboration",
        content: `Features:
- Live updates
- Online presence
- Typing indicators
- Conflict handling

Tech:
- WebSockets`
      },
      {
        id: 67,
        title: "Activity Feed & Timeline",
        content: `Activities:
- Created
- Updated
- Deleted
- Status changes

UI:
- Chronological timeline
- Real-time updates`
      },
      {
        id: 68,
        title: "Theming System",
        content: `Themes:
- Light
- Dark
- Custom

Features:
- CSS variables
- User preference storage
- Smooth transitions`
      },
      {
        id: 69,
        title: "Accessibility (A11y)",
        content: `Requirements:
- Keyboard navigation
- Screen reader support
- ARIA labels
- Focus management

Standards:
- WCAG compliance`
      },
      {
        id: 70,
        title: "Internationalization (i18n)",
        content: `Features:
- Multiple languages
- Language selector
- Persist preference
- Date/number formatting

Advanced:
- RTL support`
      }
    ]
  },
  {
    title: "PART VI – TESTING & QUALITY",
    prompts: [
      {
        id: 71,
        title: "Unit Testing – Backend",
        content: `Tools:
- Jest
- ts-jest

Targets:
- Services ≥ 80%
- Utils ≥ 90%

Focus:
- Business logic
- Edge cases`
      },
      {
        id: 72,
        title: "Integration Testing – API",
        content: `Tools:
- Supertest
- Test database

Tests:
- Auth flows
- CRUD operations
- Access control`
      },
      {
        id: 73,
        title: "Frontend Component Testing",
        content: `Tools:
- React Testing Library
- Jest

Tests:
- Forms
- Loading states
- Error handling`
      },
      {
        id: 74,
        title: "End-to-End (E2E) Testing",
        content: `Tools:
- Playwright or Cypress

Scenarios:
- Signup
- Login
- Create entity
- Logout

CI:
- Headless runs
- Screenshots on failure`
      },
      {
        id: 75,
        title: "Performance Testing",
        content: `Backend:
- Load testing (Artillery)

Frontend:
- Lighthouse audits

Targets:
- API p95 < 500ms
- FCP < 2s`
      },
      {
        id: 76,
        title: "Security Testing",
        content: `Tests:
- Auth bypass attempts
- Authorization checks
- Rate limiting
- Injection & XSS

Tools:
- npm audit
- OWASP checklist`
      },
      {
        id: 77,
        title: "Code Quality & Linting",
        content: `Tools:
- ESLint
- Prettier
- Husky

Rules:
- No unused vars
- Typed code only

Automation:
- Pre-commit hooks`
      },
      {
        id: 78,
        title: "Documentation",
        content: `Docs:
- README
- API reference
- Env variables
- Setup guide

Best practice:
- Keep docs current`
      },
      {
        id: 79,
        title: "Continuous Improvement",
        content: `Track:
- Performance metrics
- Error rates
- User feedback

Process:
- Iterative releases
- Regular reviews`
      },
      {
        id: 80,
        title: "Maintenance Plan",
        content: `Tasks:
- Dependency updates
- Security audits
- Backups
- Monitoring

Schedule:
- Daily checks
- Weekly reviews
- Monthly audits`
      }
    ]
  }
];


