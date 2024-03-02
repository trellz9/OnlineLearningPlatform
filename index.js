// 导入所需的模块
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 设置中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 路由处理程序
app.get('/', (req, res) => {
  res.send('Welcome to our online learning platform!');
});

app.get('/courses', (req, res) => {
  // 处理获取课程列表的请求
  // 从数据库或其他数据源获取课程信息
  const courses = [
    { id: 1, title: 'Course 1', description: 'This is course 1' },
    { id: 2, title: 'Course 2', description: 'This is course 2' },
    { id: 3, title: 'Course 3', description: 'This is course 3' }
  ];
  res.json(courses);
});

app.get('/courses/:id', (req, res) => {
  // 处理获取特定课
