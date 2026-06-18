const express = require('express');
const router = express.Router();

// Mock projects database
const projects = [];

// Create project
router.post('/', (req, res) => {
  try {
    const {
      title,
      type,
      duration,
      scriptLength,
      aiModel,
      sourceText,
      voiceType,
      voiceLanguage
    } = req.body;

    const project = {
      id: Date.now().toString(),
      title,
      type,
      duration,
      scriptLength,
      aiModel,
      sourceText,
      voiceType,
      voiceLanguage,
      status: 'pending',
      createdAt: new Date(),
      progress: 0
    };

    projects.push(project);
    res.json({ message: '项目创建成功', project });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all projects
router.get('/', (req, res) => {
  res.json(projects);
});

// Get project by ID
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ message: '项目不存在' });
  }
  res.json(project);
});

module.exports = router;
