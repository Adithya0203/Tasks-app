import React, { useEffect, useState } from 'react';
import { Box, Card, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Select, MenuItem, FormControl, InputLabel, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Snackbar } from '@mui/material';
import axios from 'axios';
import { useSnackbar } from 'notistack'; // For showing snackbars

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    status: 'Pending',
  });
  const [loading, setLoading] = useState(false);

  const jwt = localStorage.getItem('jwt');
  const { enqueueSnackbar } = useSnackbar();

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8081/api/tasks/getAllTasks', {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      setTasks(response.data);
      enqueueSnackbar('Tasks fetched successfully!', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Failed to fetch tasks!', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  // Remove a task
  const removeTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:8081/api/tasks/deleteById/${taskId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      enqueueSnackbar('Task removed successfully!', { variant: 'success' });
      fetchTasks();
    } catch (error) {
      enqueueSnackbar('Failed to remove task!', { variant: 'error' });
    }
  };

  // Save edited task details
  const saveTask = async () => {
    try {
      await axios.put(`http://localhost:8081/api/tasks/updateTasksById/${editingTask.taskId}`, editingTask, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      });
      enqueueSnackbar('Task updated successfully!', { variant: 'success' });
      setIsEditing(false);
      fetchTasks();
    } catch (error) {
      enqueueSnackbar('Failed to update task!', { variant: 'error' });
    }
  };

  // Add new task
  const addTask = async () => {
    try {
      await axios.post('http://localhost:8081/api/tasks/saveNewTask', newTask, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      });
      enqueueSnackbar('Task added successfully!', { variant: 'success' });
      setIsAdding(false);
      fetchTasks();
      setNewTask({ title: '', description: '', dueDate: '', priority: '', status: '' });
    } catch (error) {
      enqueueSnackbar('Failed to add task!', { variant: 'error' });
    }
  };

  // Handle input changes for editing
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingTask({ ...editingTask, [name]: value });
  };

  // Handle input changes for adding
  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  // Handle changes for priority and status (Select fields)
  const handleSelectChange = (name, value, isAddingMode = false) => {
    if (isAddingMode) {
      setNewTask({ ...newTask, [name]: value });
    } else {
      setEditingTask({ ...editingTask, [name]: value });
    }
  };

  // Open edit modal
  const openEditModal = (task) => {
    setEditingTask(task);
    setIsEditing(true);
  };

  // Open add modal
  const openAddModal = () => {
    setIsAdding(true);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div style={{ 
        display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'
        // , marginBottom: '20px' 
      }}
        >
        <Typography variant='h4' color='#333' fontWeight='bold' marginTop='20px'>
          Task List
        </Typography>
        <Button variant="contained" color="primary" onClick={openAddModal}>
          Add Task
        </Button>
      </div>
  
      {/* Task Cards or No Tasks Message */}
      {loading ? (
        <CircularProgress />
      ) : tasks.length === 0 ? (
        <Typography variant="h6" color="text.secondary" align="center" sx={{ marginTop: 4 }}>
          Hurray! You have no pending tasks
        </Typography>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
          }}
        >
          {tasks.map((task) => (
            <Card key={task.taskId} sx={{ width: 300, padding: 2, backgroundColor: '#f9f9f9', position: 'relative', textAlign: "center" }}>
              {/* Task Title */}
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {task.title}
              </Typography>
  
              {/* Task Details */}
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {task.description}
              </Typography>
              <Typography variant="body2">
                <strong>Due Date:</strong> {task.dueDate}
              </Typography>
              <Typography variant="body2">
                <strong>Priority:</strong>{' '}
                <span
                  style={{
                    color: task.priority === 'High' ? '#d32f2f' : task.priority === 'Medium' ? '#fbc02d' : '#388e3c',
                    fontWeight: 'bold',
                  }}
                >
                  {task.priority}
                </span>
              </Typography>
              <Typography variant="body2">
                <strong>Status:</strong>{' '}
                <span
                  style={{
                    color: task.status === 'Completed' ? '#388e3c' : task.status === 'In Progress' ? '#1976d2' : '#f57c00',
                    fontWeight: 'bold',
                  }}
                >
                  {task.status}
                </span>
              </Typography>
  
              {/* Action Buttons */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 2,
                }}
              >
                <Button size="small" variant="outlined" onClick={() => openEditModal(task)}>
                  Edit
                </Button>
                <Button size="small" variant="contained" color="error" onClick={() => removeTask(task.taskId)}>
                  Remove
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      )}
  
      {/* Modals */}
      {/* (Add/Edit modals remain unchanged from the original code) */}
      <Dialog open={isEditing} onClose={() => setIsEditing(false)}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          {editingTask && (
            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <TextField
                label="Title"
                name="title"
                value={editingTask.title || ''}
                onChange={handleEditChange}
                fullWidth
                required
              />
              <TextField
                label="Description"
                name="description"
                value={editingTask.description || ''}
                onChange={handleEditChange}
                fullWidth
                required
              />
              <TextField
                label="Due Date"
                name="dueDate"
                value={editingTask.dueDate || ''}
                onChange={handleEditChange}
                type="date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              <FormControl fullWidth>
                <InputLabel>Priority</InputLabel>
                <Select
                  name="priority"
                  value={editingTask.priority || ''}
                  onChange={(e) => handleSelectChange('priority', e.target.value)}
                  required
                >
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  value={editingTask.status || ''}
                  onChange={(e) => handleSelectChange('status', e.target.value)}
                  required
                >
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="In Progress">In Progress</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
        </DialogContent>
  
        <DialogActions>
          <Button onClick={() => setIsEditing(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={saveTask} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
  
      <Dialog open={isAdding} onClose={() => setIsAdding(false)}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <TextField
              label="Title"
              name="title"
              value={newTask.title || ''}
              onChange={handleAddChange}
              fullWidth
              required
            />
            <TextField
              label="Description"
              name="description"
              value={newTask.description || ''}
              onChange={handleAddChange}
              fullWidth
              required
            />
            <TextField
              label="Due Date"
              name="dueDate"
              value={newTask.dueDate || ''}
              onChange={handleAddChange}
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            <FormControl fullWidth>
              <InputLabel>Priority</InputLabel>
              <Select
                name="priority"
                value={newTask.priority || ''}
                onChange={(e) => handleSelectChange('priority', e.target.value, true)}
                required
              >
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={newTask.status || ''}
                onChange={(e) => handleSelectChange('status', e.target.value, true)}
                required
              >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
  
        <DialogActions>
          <Button onClick={() => setIsAdding(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={addTask} color="primary">
            Add Task
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}