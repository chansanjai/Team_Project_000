
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

function Terms() {
  const rows = [
    { name: 'John Doe', age: 28, role: 'Developer' },
    { name: 'Jane Smith', age: 34, role: 'Designer' },
    { name: 'Sam Green', age: 45, role: 'Manager' },
  ];

  return (
    <div>
        <StudentFormDialog/>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
import { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from '@mui/material';

function StudentFormDialog() {
  const [open, setOpen] = useState(false);
  const [student, setStudent] = useState({
    name: '',
    age: '',
    grade: '',
  });

  // Open the dialog
  const handleOpen = () => setOpen(true);

  // Close the dialog
  const handleClose = () => setOpen(false);

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Student Data:', student);
    setOpen(false); // Close dialog after submitting
  };

  return (
    <div>
      {/* Button to open dialog */}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Student
      </Button>

      {/* Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Student</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            name="name"
            fullWidth
            value={student.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            label="Age"
            name="age"
            fullWidth
            value={student.age}
            onChange={handleChange}
            type="number"
          />
          <TextField
            margin="dense"
            label="Grade"
            name="grade"
            fullWidth
            value={student.grade}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default Terms;
