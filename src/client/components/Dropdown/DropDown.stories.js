import React from 'react';
import StudyDropdown from './DropDown';
import ClassDropdown from './DropDown-Class';
import SkillDropdown from './DropDown-Skills';
import QuestionDropdown from './DropDown-Question';

export default { title: 'DropDown' };

export const Studygroup = () => <StudyDropdown />;
export const Classgroup = () => <ClassDropdown />;
export const Skillgroup = () => <SkillDropdown />;
export const Questiongroup = () => <QuestionDropdown />;
