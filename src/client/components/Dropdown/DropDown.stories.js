import React from 'react';
import StudyDropdown from './DropDown';
import ClassDropdown from './ClassDropDown';
import SkillDropdown from './SkillsDropDown';
import QuestionDropdown from './QuestionsDropDown';

export default { title: 'DropDown' };

export const Studygroup = () => <StudyDropdown />;
export const Classgroup = () => <ClassDropdown />;
export const Skillgroup = () => <SkillDropdown />;
export const Questiongroup = () => <QuestionDropdown />;
