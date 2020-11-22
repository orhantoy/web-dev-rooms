import React from 'react';
import { Skills, StudyGroup, DropDown } from './DropDown';

export default { title: 'Input' };

export const StudyGroupDropdown = () => <StudyGroup title="Elastic" />;
export const ClassDropdown = () => <DropDown title="Class...." />;
export const QuestionDropdown = () => (
  <DropDown title="Select the topic to ask" />
);
export const SkillAdd = () => <Skills title="Add Skills Here" />;
