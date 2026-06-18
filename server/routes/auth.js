const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Mock user database (replace with MongoDB)
const users = new Map();

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (users.has(email)) {
      return res.status(400).json({ message: '用户已存在' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      id: Date.now().toString(),
      email,
      username,
      password: hashedPassword,
      createdAt: new Date(),
      points: 100, // 新用户初始积分
      vip: false
    };

    users.set(email, user);

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    res.json({ 
      message: '注册���功',
      token,
      user: { ...user, password: undefined }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.get(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: '邮箱或密码错误' });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    res.json({ 
      message: '登录成功',
      token,
      user: { ...user, password: undefined }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
