import React from 'react';
import StudyDropdown from './Dropdown';
import ClassDropdown from './Dropdown-Class';
import SkillDropdown from './DropDown-Skills';
import QuestionDropdown from './Dropdown-Question';

export default { title: 'DropDown' };

export const Studygroup = () => <StudyDropdown />;
export const Classgroup = () => <ClassDropdown />;
export const Skillgroup = () => <SkillDropdown />;
export const Questiongroup = () => <QuestionDropdown />;
