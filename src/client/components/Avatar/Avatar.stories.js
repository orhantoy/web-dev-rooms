import React from 'react';
import { Avatar } from './Avatar';
import './Avatar.css';
import student from '../../assets/images/student.png';
import mentor from '../../assets/images/mentor.png';
import admin from '../../assets/images/admin.png';

export default {
  title: 'Avatar',
};

export const avatarForStudent = () => (
  <Avatar
    image={
      <img className="avatar-student-comp" alt="Student name" src={student} />
    }
  />
);

export const avatarForMentor = () => (
  <Avatar
    image={
      <img className="avatar-mentor-comp" alt="Mentor name" src={mentor} />
    }
  />
);

export const avatarForAdmin = () => (
  <Avatar
    image={<img className="avatar-admin-comp" alt="Admin name" src={admin} />}
  />
);
