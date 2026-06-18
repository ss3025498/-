const express = require('express');
const router = express.Router();

// Mock voice library
const voices = [
  { id: 1, name: '智能女声-EN', character: '温柔', language: '英文', price: '3积分/分钟' },
  { id: 2, name: '活泼女声-EN', character: '活泼', language: '英文', price: '3积分/分钟' },
  { id: 3, name: '正义感女声-EN', character: '正气', language: '英文', price: '3积分/分钟' },
  { id: 4, name: '可靠男声-EN', character: '稳重', language: '英文', price: '3积分/分钟' },
  { id: 5, name: '活泼男声-EN', character: '活力', language: '英文', price: '3积分/分钟' },
  { id: 6, name: '女生龙套白-EN', character: '有趣', language: '英文', price: '3积分/分钟' }
];

// Get voices
router.get('/', (req, res) => {
  res.json(voices);
});

// Get voice by ID
router.get('/:id', (req, res) => {
  const voice = voices.find(v => v.id === parseInt(req.params.id));
  if (!voice) {
    return res.status(404).json({ message: '语音不存在' });
  }
  res.json(voice);
});

// Generate voice
router.post('/generate', (req, res) => {
  const { text, voiceId } = req.body;
  
  if (!text || !voiceId) {
    return res.status(400).json({ message: '参数不完整' });
  }

  res.json({
    message: '语音生成中',
    taskId: Date.now().toString(),
    estimatedTime: '10-30秒'
  });
});

module.exports = router;
