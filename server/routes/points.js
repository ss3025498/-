const express = require('express');
const router = express.Router();

// Points packages
const pointsPackages = [
  { id: 1, name: '体验包', points: 1000, price: 10, description: '¥10 支付' },
  { id: 2, name: '基础包', points: 3150, price: 30, description: '¥30 支付' },
  { id: 3, name: '进阶包', points: 10600, price: 98, description: '¥98 支付' },
  { id: 4, name: '专业包', points: 33300, price: 298, description: '¥298 支付' }
];

// Get points packages
router.get('/packages', (req, res) => {
  res.json(pointsPackages);
});

// Get user points
router.get('/balance', (req, res) => {
  res.json({
    available: 100,
    used: 0,
    total: 100,
    conversionRate: '1积分 = ¥0.01'
  });
});

// Redeem points
router.post('/redeem', (req, res) => {
  const { code } = req.body;
  
  // Mock redemption
  if (code && code.startsWith('SPA1')) {
    res.json({ 
      message: '兑换成功',
      pointsAdded: 100
    });
  } else {
    res.status(400).json({ message: '兑换码无效' });
  }
});

// Purchase points
router.post('/purchase', (req, res) => {
  const { packageId } = req.body;
  
  const pkg = pointsPackages.find(p => p.id === packageId);
  if (!pkg) {
    return res.status(404).json({ message: '套餐不存在' });
  }

  // Mock payment processing
  res.json({ 
    message: '支付处理中',
    orderId: Date.now().toString(),
    package: pkg,
    paymentUrl: `https://payment.example.com/pay?order=${Date.now()}`
  });
});

module.exports = router;
