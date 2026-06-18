const express = require('express');
const router = express.Router();

// Middleware to verify token
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: '未授权' });
  }
  // Token verification would go here
  next();
};

// Get user profile
router.get('/profile', authMiddleware, (req, res) => {
  res.json({
    id: '1',
    username: 'ss3025498',
    email: 'user@example.com',
    avatar: 'https://via.placeholder.com/150',
    points: 100,
    vip: false,
    createdAt: new Date()
  });
});

// Get user stats
router.get('/stats', authMiddleware, (req, res) => {
  res.json({
    totalPoints: 100,
    usedPoints: 0,
    availablePoints: 100,
    createdProjects: 0,
    totalCredits: 5
  });
});

module.exports = router;
