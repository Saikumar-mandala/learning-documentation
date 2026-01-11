export interface BoilerplateSnippet {
  id: number;
  title: string;
  description: string;
  explanation: string;
  code: string;
  language: string;
  category: 'Backend Setup' | 'Auth' | 'CRUD' | 'Middlewares' | 'Frontend Config';
}

export const mernBoilerplateData: BoilerplateSnippet[] = [
  {
    id: 1,
    title: "Server.js (Main Entry)",
    description: "The basic Express server setup with essential middlewares (CORS, JSON, Helmet).",
    explanation: "This is the heart of your Node.js application. It initializes Express, connects to your database, and enables security headers (Helmet) and Cross-Origin Resource Sharing (CORS). It also parses incoming JSON requests, which is essential for modern APIs.",
    language: "javascript",
    category: "Backend Setup",
    code: `const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(helmet());
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(\`Server started on port \${PORT}\`));`
  },
  {
    id: 2,
    title: "Database Connection (MongoDB)",
    description: "Standard Mongoose connection utility with error handling.",
    explanation: "This utility uses Mongoose to connect to your MongoDB Atlas or local instance. It uses async/await for clean flow control and includes a process.exit(1) on failure, which is crucial for cloud deployments like Docker or Heroku to signal a crash and trigger a restart.",
    language: "javascript",
    category: "Backend Setup",
    code: `const mongoose = require('mongoose');
const config = require('config');
const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;`
  },
  {
    id: 3,
    title: "Auth Middleware (JWT)",
    description: "Middleware to protect routes by verifying JWT tokens.",
    explanation: "This middleware acts as a security guard for your 'Private' routes. It extracts the token from the request header, verifies it using your JWT secret, and attaches the user's ID to the 'req' object, making it available in subsequent controller logic.",
    language: "javascript",
    category: "Auth",
    code: `const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};`
  },
  {
    id: 4,
    title: "Global Error Handler",
    description: "Professional error handling middleware to catch all async and sync errors.",
    explanation: "Instead of writing try-catch in every route, this global middleware catches unhandled errors. It formats them into a consistent JSON response, ensuring your frontend always receives a predictable error structure rather than a raw server HTML error.",
    language: "javascript",
    category: "Middlewares",
    code: `const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log for dev
  console.log(err.stack.red);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = \`Resource not found with id of \${err.value}\`;
    error = { message, status: 404 };
  }

  res.status(error.status || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;`
  },
  {
    id: 5,
    title: "Axios Generic Instance",
    description: "Pre-configured Axios instance for frontend with interceptors for auth tokens.",
    explanation: "Interceptors are a powerful pattern. This instance automatically attaches your JWT from localStorage to every outgoing request. It saves you from manually adding headers to every API call in your React components.",
    language: "typescript",
    category: "Frontend Config",
    code: `import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;`
  },
  {
    id: 6,
    title: "Generic Base Controller",
    description: "A pattern for CRUD controllers to avoid repetitive code.",
    explanation: "For large projects, writing 'search', 'getOne', and 'delete' for every model is tedious. This higher-order function takes a Mongoose Model and returns a structured controller, implementing the 'DRY' (Don't Repeat Yourself) principle at an architectural level.",
    language: "javascript",
    category: "CRUD",
    code: `exports.getAll = (Model) => async (req, res, next) => {
  try {
    const docs = await Model.find();
    res.status(200).json({
      success: true,
      count: docs.length,
      data: docs
    });
  } catch (err) {
    next(err);
  }
};

exports.getOne = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findById(req.params.id);
    if (!doc) return res.status(404).json({ msg: 'Not found' });
    res.status(200).json({ success: true, data: doc });
  } catch (err) {
    next(err);
  }
};`
  },
  {
    id: 7,
    title: "User Model (Mongoose)",
    description: "Standard User schema with password hashing and helper methods.",
    explanation: "Security is paramount. This model uses a 'pre-save' hook to automatically hash passwords using Bcrypt before they hit the database. Never store raw passwords! It also enforces unique emails and provides a clean structure for future user metadata expansion.",
    language: "javascript",
    category: "Backend Setup",
    code: `const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  date: { type: Date, default: Date.now }
});

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('user', UserSchema);`
  },
  {
    id: 8,
    title: "Auth Controller (Logic)",
    description: "Professional registration and login logic with JWT generation.",
    explanation: "Registration isn't just about saving data; it's about validation and secure handshakes. This controller checks for duplicates, creates the user, and then immediately signs a JWT. The '5d' expiration is a good balance for UX, though sensitive apps use shorter times + Refresh Tokens.",
    language: "javascript",
    category: "Auth",
    code: `const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ name, email, password });
    await user.save();

    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5d' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    res.status(500).send('Server error');
  }
};`
  },
  {
    id: 9,
    title: "Route Structure (Express)",
    description: "Organized route file with validation and auth protection.",
    explanation: "This route file implements 'Layered Architecture'. It uses 'express-validator' as a first line of defense to reject bad data before it ever touches your controller or DB. It also separates Public (Register) from Private (Get Me) routes using middlewares.",
    language: "javascript",
    category: "CRUD",
    code: `const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const userController = require('../controllers/userController');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Length must be 6 or more').isLength({ min: 6 })
  ],
  userController.register
);

// @route   GET api/users/me
// @desc    Get current user
// @access  Private
router.get('/me', auth, userController.getMe);

module.exports = router;`
  },
  {
    id: 10,
    title: "Resource Model (Example)",
    description: "A secondary model with relationships (e.g., Todo linked to User).",
    explanation: "This shows how to link data in NoSQL. The 'user' field acts like a Foreign Key, referencing the ID of the user who owns this todo. In the controller, you can use .populate('user') to automatically join the user data into the response.",
    language: "javascript",
    category: "Backend Setup",
    code: `const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  title: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('todo', TodoSchema);`
  },
  {
    id: 11,
    title: "Backend Pagination (Mongoose)",
    description: "Server-side pagination logic using limit and skip.",
    explanation: "Server-side pagination is essential for performance with large datasets. Instead of sending thousands of documents, we only send a 'page'. We use query parameters (page, limit), calculate the 'skip' value, and return metadata like totalCount and totalPages so the frontend can render navigation controls correctly.",
    language: "javascript",
    category: "CRUD",
    code: `exports.getPaginated = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;

    const total = await Model.countDocuments();
    const docs = await Model.find()
      .skip(startIndex)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      },
      data: docs
    });
  } catch (err) {
    next(err);
  }
};`
  },
  {
    id: 12,
    title: "Frontend Pagination (React)",
    description: "A reusable pagination component for navigation between pages.",
    explanation: "This component handles the UI for switching pages. It receives the 'currentPage' and 'totalPages' from the parent, renders buttons for each page number, and triggers a 'onPageChange' callback. It includes 'Previous' and 'Next' logic with disabled states to prevent out-of-bounds navigation.",
    language: "tsx",
    category: "Frontend Config",
    code: `import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-2 justify-center py-8">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 disabled:opacity-30"
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={\`px-4 py-2 rounded-lg transition-all \${
            currentPage === page 
            ? 'bg-indigo-600 text-white' 
            : 'bg-white/5 text-slate-400 hover:bg-white/10'
          }\`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 disabled:opacity-30"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;`
  },
  {
    id: 13,
    title: "RBAC Middleware (Authorize)",
    description: "Multi-role authorization middleware to restrict access to specific roles.",
    explanation: "While 'Auth' middleware checks IF a user is logged in, 'Authorize' checks WHAT they can do. This higher-order function takes a list of allowed roles (e.g., 'admin', 'editor') and cross-references them with the 'role' field in the user's JWT payload. It returns a 403 Forbidden if the user doesn't have required permissions.",
    language: "javascript",
    category: "Auth",
    code: `// Grant access to specific roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        msg: \`User role \${req.user.role} is not authorized to access this route\`
      });
    }
    next();
  };
};`
  },
  {
    id: 14,
    title: "Role-Based User Model",
    description: "Expanded User schema with defined enums for roles (User, Admin, etc.).",
    explanation: "Adding roles at the schema level ensures data integrity. By using the 'enum' property in Mongoose, we prevent invalid roles from being saved. Defaulting to 'user' ensures new signups follow the 'Principle of Least Privilege' (PoLP), keeping your system secure by default.",
    language: "javascript",
    category: "Backend Setup",
    code: `const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['user', 'publisher', 'admin'],
    default: 'user'
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);`
  },
  {
    id: 15,
    title: "Protected RBAC Route",
    description: "Example of combining Auth and Authorize middlewares in a route.",
    explanation: "This shows the 'Onion' layer middleware pattern. First, the request passes through 'protect' (to verify identity), then through 'authorize' (to verify permissions). If both pass, the controller is executed. This is the industry standard for securing administrative endpoints.",
    language: "javascript",
    category: "CRUD",
    code: `const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/authorize');
const { deleteUser } = require('../controllers/users');

// Only Admins can delete users
router.delete('/:id', protect, authorize('admin'), deleteUser);

// Publishers and Admins can create content
router.post('/content', protect, authorize('publisher', 'admin'), createContent);

module.exports = router;`
  },
  {
    id: 16,
    title: "Role Guard (React Component)",
    description: "A wrapper component to protect UI elements or routes based on user roles.",
    explanation: "This is the frontend counterpart to RBAC middleware. It wraps sensitive components (like an 'Admin Dashboard' button) and only renders them if the user's role exists in the allowed list. It's great for 'Security through Obscurity'—hiding features that users can't use anyway.",
    language: "tsx",
    category: "Frontend Config",
    code: `import React from 'react';
import { Navigate } from 'react-router-dom';

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRoles: string[];
  userRole: string | undefined;
}

const RoleGuard: React.FC<RoleGuardProps> = ({ children, allowedRoles, userRole }) => {
  if (!userRole || !allowedRoles.includes(userRole)) {
    // Optionally redirect or return null
    return null; 
  }

  return <>{children}</>;
};

export default RoleGuard;

// Example Usage:
// <RoleGuard allowedRoles={['admin']} userRole={user.role}>
//    <AdminPanel />
// </RoleGuard>`
  },
  {
    id: 17,
    title: "Token Utility (Access & Refresh)",
    description: "Server-side utility to generate short-lived Access and long-lived Refresh tokens.",
    explanation: "Standard JWT security involves two tokens. The 'Access' token is short-lived (e.g., 15m) and used for API calls. The 'Refresh' token is long-lived (e.g., 7d) and stored in a secure 'httpOnly' cookie. This prevents XSS attacks from stealing the long-term session token.",
    language: "javascript",
    category: "Auth",
    code: `const jwt = require('jsonwebtoken');

// Generate Access Token
const generateAccessToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '15m',
  });
};

// Generate Refresh Token
const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '7d',
  });
};

// Send as Cookie
const sendTokenResponse = (user, statusCode, res) => {
  const accessToken = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken(user._id);

  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    httpOnly: true, // Prevents JavaScript access
    secure: process.env.NODE_ENV === 'production',
  };

  res.status(statusCode).cookie('refreshToken', refreshToken, options).json({
    success: true,
    accessToken,
  });
};`
  },
  {
    id: 18,
    title: "Refresh Token Route",
    description: "Endpoint to exchange a Refresh Token for a new Access Token.",
    explanation: "When the frontend receives a 401 (Expired), it calls this endpoint. The server reads the Refresh Token from the secure cookie, verifies it, and issues a brand new Access Token. This flow maintains the session without forcing the user to log in again.",
    language: "javascript",
    category: "Auth",
    code: `router.get('/refresh', async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ msg: 'Not authorized' });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ msg: 'User not found' });
    }

    const newAccessToken = generateAccessToken(user._id);
    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.status(401).json({ msg: 'Token expired' });
  }
});`
  },
  {
    id: 19,
    title: "Axios Refresh Interceptor",
    description: "Advanced interceptor to automatically renew tokens on 401 errors.",
    explanation: "This is a 'Silent Refresh' pattern. If an API call fails with 401, this interceptor pauses all requests, calls the /refresh endpoint, updates the local token, and retries the original failed request. The user never notices that their token expired!",
    language: "typescript",
    category: "Frontend Config",
    code: `import axios from 'axios';

const api = axios.create({ baseURL: '/api' });

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // Call refresh endpoint
        const { data } = await axios.get('/api/auth/refresh');
        
        // Update storage/headers
        localStorage.setItem('token', data.accessToken);
        api.defaults.headers.common['Authorization'] = \`Bearer \${data.accessToken}\`;
        
        // Retry original request
        return api(originalRequest);
      } catch (refreshError) {
        // Redirect to login if refresh fails
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;`
  },
  {
    id: 20,
    title: "Advanced Search & Filters (Backend)",
    description: "Mongoose query builder for regex search, price ranges, and category filtering.",
    explanation: "This pattern allows users to search products by title, filter by category, and define price ranges—all in one request. We build a dynamic 'query' object using regex for fuzzy searching and Mongoose comparison operators ($gte, $lte) for pricing. This is much faster and more scalable than filtering on the frontend.",
    language: "javascript",
    category: "CRUD",
    code: `exports.getProducts = async (req, res, next) => {
  let query;
  const reqQuery = { ...req.query };

  // Fields to exclude from direct matching
  const removeFields = ['select', 'sort', 'page', 'limit', 'search'];
  removeFields.forEach(param => delete reqQuery[param]);

  // Create query string for operators (gt, gte, etc)
  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(/\\b(gt|gte|lt|lte|in)\\b/g, match => \`$\${match}\`);

  // Build Query Object
  let finalQuery = JSON.parse(queryStr);

  // Search Logic (Regex)
  if (req.query.search) {
    finalQuery.name = { $regex: req.query.search, $options: 'i' };
  }

  query = Product.find(finalQuery);

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }

  const products = await query;
  res.status(200).json({ success: true, count: products.length, data: products });
};`
  },
  {
    id: 21,
    title: "Cart Context (State Management)",
    description: "React Context provider for cross-component Cart state (Add, Remove, Clear).",
    explanation: "Managing a cart across components (Navbar, Product Page, Checkout) requires a global state. This Context Provider uses useReducer for complex logic like 'increasing quantity' vs 'adding new item'. It also syncs with localStorage so the user doesn't lose their cart on page refresh.",
    language: "tsx",
    category: "Frontend Config",
    code: `import React, { createContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const exists = state.items.find(i => i.id === action.payload.id);
      if (exists) {
        return { ...state, items: state.items.map(i => i.id === exists.id ? { ...i, qty: i.qty + 1 } : i) };
      }
      return { ...state, items: [...state.items, { ...action.payload, qty: 1 }] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: JSON.parse(localStorage.getItem('cart')) || [] });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartContext.Provider value={{ cart: state.items, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};`
  },
  {
    id: 22,
    title: "Wishlist Logic (Backend)",
    description: "Efficiently toggling content in a user's wishlist using Mongoose $addToSet and $pull.",
    explanation: "Wishlists are best handled as an array of IDs on the User model. By using '$addToSet', MongoDB ensures a product is only added once (no duplicates). '$pull' removes it cleanly. This is faster and more atomic than fetching the user, modifying the array in JS, and saving it back.",
    language: "javascript",
    category: "CRUD",
    code: `// @desc    Toggle product in wishlist
// @route   PUT /api/wishlist/:id
exports.toggleWishlist = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const isWishlisted = user.wishlist.includes(req.params.id);

    const operator = isWishlisted ? '$pull' : '$addToSet';
    
    await User.findByIdAndUpdate(
      req.user.id,
      { [operator]: { wishlist: req.params.id } },
      { new: true }
    );

    res.status(200).json({ 
      success: true, 
      msg: isWishlisted ? 'Removed from wishlist' : 'Added to wishlist' 
    });
  } catch (err) {
    next(err);
  }
};`
  },
  {
    id: 23,
    title: "Master E-commerce Storefront (A-to-Z)",
    description: "A complete React component integrating Search, Filtering, Pagination, Cart, and Wishlist logic.",
    explanation: "This is the ultimate 'Full Stack' component reference. It combines everything: local state for UI controls, debounced search for performance, global Cart context for state persistence, and a custom pagination module. It serves as a real-world blueprint for a professional e-commerce dashboard or shop landing page.",
    language: "tsx",
    category: "Frontend Config",
    code: `import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from './context/CartContext';
import Pagination from './components/Pagination';

const MasterStorefront = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  const { dispatch } = useContext(CartContext);
  const [wishlist, setWishlist] = useState([]);

  // Fetch Logic with Filters & Pagination
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const catQuery = category !== 'All' ? \`&category=\${category}\` : '';
      const { data } = await axios.get(\`/api/products?search=\${search}\${catQuery}&page=\${page}&limit=8\`);
      setProducts(data.data);
      setTotalPages(data.pagination.totalPages);
      setLoading(false);
    };
    const timer = setTimeout(fetchItems, 500); // 500ms Debounce
    return () => clearTimeout(timer);
  }, [search, category, page]);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8 text-white min-h-screen">
      {/* Top Navigation & Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-between sticky top-4 bg-[#0a0f18]/80 p-6 rounded-3xl backdrop-blur-2xl border border-white/5 z-30 shadow-2xl">
        <div className="relative flex-1">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"></i>
          <input 
            type="text" 
            placeholder="Search premium products..." 
            className="w-full bg-white/5 border border-white/10 p-4 pl-12 rounded-2xl focus:border-indigo-500 transition-all outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select 
          className="bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-indigo-500"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Apparel">Apparel</option>
          <option value="Home">Home Decor</option>
        </select>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {loading ? (
          <div className="col-span-full py-20 text-center animate-pulse text-indigo-400">Loading your store...</div>
        ) : products.map(product => (
          <div key={product._id} className="group bg-white/[0.02] border border-white/5 rounded-[2rem] p-6 hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-500">
            <div className="aspect-square bg-white/5 rounded-2xl mb-6 relative overflow-hidden">
               <div className="absolute top-4 right-4 z-10">
                 <button className="h-10 w-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center hover:scale-110 transition-transform">
                    <i className="fa-regular fa-heart text-white"></i>
                 </button>
               </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{product.name}</h3>
            <p className="text-slate-400 text-sm line-clamp-2 mb-6">{product.description}</p>
            
            <div className="flex items-center justify-between mt-auto">
              <span className="text-2xl font-black text-indigo-400">$\${product.price}</span>
              <button 
                onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Footer */}
      {!loading && (
        <Pagination 
          currentPage={page} 
          totalPages={totalPages} 
          onPageChange={(newPage) => setPage(newPage)} 
        />
      )}
    </div>
  );
};

export default MasterStorefront;`
  },
  {
    id: 24,
    title: "Standard MERN Architecture (A-to-Z)",
    description: "The complete project structure and core logic for a professional MERN application.",
    explanation: "This is the 'Master Key' to the MERN stack. It outlines the industry-standard folder structure (Routes, Models, Controllers, Middleware) and provides a combined view of how the Backend (Node/Express) and Frontend (React/Axios) communicate securely. Use this as your primary reference for every new professional project.",
    language: "markdown",
    category: "Backend Setup",
    code: `### 📂 MERN Project Structure (A-to-Z)

#### 🛠️ Backend (Root /server)
\`\`\`text
├── config/             # DB Connection (Mongoose)
├── controllers/        # Business Logic (MCR Pattern)
├── middleware/         # Auth, Error, RBAC guards
├── models/             # Mongoose Schemas (User, Resource)
├── routes/             # Express Route Definitions
├── server.js           # Main Entry Point
└── .env                # Env Variables (Secrets)
\`\`\`

#### 💻 Frontend (Root /client)
\`\`\`text
├── src/
│   ├── api/            # Axios instance + Interceptors
│   ├── components/     # Reusable UI (RoleGuard, Pagination)
│   ├── context/        # Global State (Auth, Cart)
│   ├── pages/          # Full Page Components
│   └── App.tsx         # Routing & Main Layout
\`\`\`

---

### 🚀 Core A-to-Z Implementation

#### 1. The Secure Entry (server.js)
\`\`\`javascript
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

const app = express();
connectDB(); // MongoDB Connect

app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use(errorHandler); // Global Crash Protection

app.listen(5000, () => console.log('Server running on 5000'));
\`\`\`

#### 2. The Auth Guard (middleware/auth.js)
\`\`\`javascript
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token invalid' });
  }
};
\`\`\`

#### 3. The Database (config/db.js)
\`\`\`javascript
const mongoose = require('mongoose');
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(\`MongoDB Connected: \${conn.connection.host}\`);
};
module.exports = connectDB;
\`\`\`

#### 4. The Data Logic (models/User.js)
\`\`\`javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) next();
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model('User', UserSchema);
\`\`\`

#### 5. The Brain (controllers/auth.js)
\`\`\`javascript
const User = require('../models/User');

exports.register = async (req, res) => {
  const user = await User.create(req.body);
  const token = user.getSignedJwtToken(); // Helper on model
  res.status(201).json({ success: true, token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  // ... password verify & token send logic
};
\`\`\`

#### 6. The Bridge (src/api/api.js)
\`\`\`javascript
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = \`Bearer \${token}\`;
  return req;
});

export default API;
\`\`\``
  },
  {
    id: 25,
    title: "File Upload Middleware (Multer)",
    description: "Backend configuration to handle multipart/form-data for file uploads.",
    explanation: "Express doesn't handle file uploads out-of-the-box. Multer is the standard middleware that parses 'multipart/form-data'. We configure 'limit' and 'fileFilter' to ensure users don't upload malicious files or massive images that would slow down the server.",
    language: "javascript",
    category: "Middlewares",
    code: `const multer = require('multer');
const path = require('path');

// Storage config (Optional: Disk vs Memory)
const storage = multer.diskStorage({});

// Filter for images only
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|webp/;
  const isMatch = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  if (isMatch) return cb(null, true);
  cb(new Error('Error: Only images (jpeg/jpg/png/webp) are allowed!'), false);
};

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB Limit
  fileFilter
});

module.exports = upload;`
  },
  {
    id: 26,
    title: "Cloudinary Image Upload Utility",
    description: "Service to upload files to Cloudinary for permanent hosting.",
    explanation: "Storing images directly on your server disk is bad practice for scaling. Cloudinary provides a professional CDN for images. This utility takes a local path (provided by Multer), uploads it to the 'mern_app' folder, and returns a secure external URL to save in your database.",
    language: "javascript",
    category: "Backend Setup",
    code: `const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploadToCloud = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'mern_app_uploads',
      use_filename: true
    });
    return { url: result.secure_url, publicId: result.public_id };
  } catch (err) {
    throw new Error('Cloudinary Upload Failed');
  }
};`
  },
  {
    id: 27,
    title: "Image Upload Preview (React)",
    description: "Frontend component to preview selected images before uploading.",
    explanation: "Great UX means showing the user what they selected! This component uses 'URL.createObjectURL' to create a temporary preview of the file from the user's browser memory. It also includes basic validation to prevent selecting huge files before hitting the server.",
    language: "tsx",
    category: "Frontend Config",
    code: `import React, { useState } from 'react';

const ImagePicker = ({ onFileSelect }) => {
  const [preview, setPreview] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file && file.size < 2000000) {
      setPreview(URL.createObjectURL(file));
      onFileSelect(file);
    } else {
      alert("File too large (>2MB)");
    }
  };

  return (
    <div className="space-y-4">
      <div className="h-40 w-40 rounded-2xl bg-white/5 border-2 border-dashed border-white/10 flex items-center justify-center overflow-hidden">
        {preview ? (
          <img src={preview} className="h-full w-full object-cover" alt="Preview" />
        ) : (
          <i className="fa-solid fa-camera text-slate-600 text-2xl"></i>
        )}
      </div>
      <input type="file" onChange={handleFile} className="text-xs text-slate-400" />
    </div>
  );
};`
  },
  {
    id: 28,
    title: "Professional Form Handling (Hook Form)",
    description: "Optimized React forms using React Hook Form for performance and validation.",
    explanation: "Standard React forms trigger a re-render on every keystroke. React Hook Form uses 'uncontrolled components' for massive performance gains. It simplifies error handling and validation logic, making complex multi-step forms a breeze to build and maintain.",
    language: "tsx",
    category: "Frontend Config",
    code: `import { useForm } from 'react-hook-form';

const ProfileForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-xs font-bold uppercase mb-2">Username</label>
        <input 
          {...register("username", { required: true, minLength: 3 })}
          className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-indigo-500"
        />
        {errors.username && <p className="text-red-500 text-[10px] mt-1">Username is required (min 3 chars)</p>}
      </div>

      <button type="submit" className="w-full bg-indigo-600 py-4 rounded-xl font-bold uppercase tracking-widest text-xs">
        Save Profile
      </button>
    </form>
  );
};`
  },
  {
    id: 29,
    title: "Full MERN Project Source (A-to-Z)",
    description: "Actual code implementation for every single file in the professional MERN architecture.",
    explanation: "This is the 'Source Code Bible'. It provides the actual production-ready code for all layers: from the Database connection and User models to Auth controllers, Global Error handling, and the Frontend API bridge. This is your comprehensive, copy-paste-ready template for launching a high-scale MERN application.",
    language: "markdown",
    category: "Backend Setup",
    code: `### 🌐 BACKEND (Node/Express)

#### 1. server.js (Main Entry)
\`\`\`javascript
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/users', require('./routes/users'));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
\`\`\`

#### 2. config/db.js (Database)
\`\`\`javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(\`MongoDB Connected: \${conn.connection.host}\`);
  } catch (err) {
    console.error(\`Error: \${err.message}\`);
    process.exit(1);
  }
};

module.exports = connectDB;
\`\`\`

#### 3. models/User.js (Data Logic)
\`\`\`javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
\`\`\`

#### 4. controllers/auth.js (Business Logic)
\`\`\`javascript
const User = require('../models/User');

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    const token = user.getSignedJwtToken();
    res.status(201).json({ success: true, token });
  } catch (err) { next(err); }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }
    const token = user.getSignedJwtToken();
    res.status(200).json({ success: true, token });
  } catch (err) { next(err); }
};
\`\`\`

#### 5. middleware/error.js (Global Error)
\`\`\`javascript
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Mongoose duplicate key
  if (err.code === 11000) {
    error.message = 'Duplicate field value entered';
    return res.status(400).json({ success: false, error: error.message });
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;
\`\`\`

---

### ⚛️ FRONTEND (React)

#### 6. src/api/axios.js (API Bridge)
\`\`\`javascript
import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000/api/v1' });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = \`Bearer \${token}\`;
  return config;
});

export default api;
\`\`\`

#### 7. src/context/AuthContext.js (Global State)
\`\`\`javascript
import React, { createContext, useReducer } from 'react';
import api from '../api/axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useReducer((s, a) => ({...s, ...a}), null);

  const login = async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    setUser(data.user);
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
\`\`\`

#### 8. src/pages/Login.tsx (Auth Page)
\`\`\`tsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData.email, formData.password);
  };

  return (
    <div className="auth-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};
\`\`\`

#### 9. src/components/Navbar.tsx (Conditional Nav)
\`\`\`tsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      {user ? (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link>
        </>
      )}
    </nav>
  );
};
\`\`\`

#### 10. src/App.tsx (Main Routing)
\`\`\`tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
\`\`\``
  }
];
