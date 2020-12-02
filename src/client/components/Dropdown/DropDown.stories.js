import React from 'react';
import DropDown from './DropDown';

const questions = [
  {
    id: '01',
    value: 'Add Question here',
  },
  {
    id: '02',
    value: 'question2',
  },
  {
    id: '03',
    value: 'question3',
  },
];

const skills = [
  {
    id: '01',
    value: 'HTML/CSS',
  },
  {
    id: '02',
    value: 'Firebase',
  },
  {
    id: '03',
    value: 'Javascript',
  },
  {
    id: '04',
    value: 'MYSQL',
  },
  {
    id: '05',
    value: 'NodeJS',
  },
  {
    id: '06',
    value: 'React',
  },
  {
    id: '07',
    value: 'Typescript',
  },
];
const classes = [
  {
    id: '01',
    value: 'Class14',
  },
  {
    id: '02',
    value: 'Class15',
  },
  {
    id: '03',
    value: 'Class16',
  },
];
const studygroups = [
  {
    id: '01',
    value: 'Elastic',
  },
  {
    id: '02',
    value: 'Zendesk',
  },
  {
    id: '03',
    value: 'Hack Your Future',
  },
];
export default { title: 'DropDown' };

export const Studygroup = () => <DropDown items={studygroups} />;
export const Classgroup = () => <DropDown items={classes} />;
export const Skillgroup = () => <DropDown items={skills} />;
export const Questiongroup = () => <DropDown items={questions} />;
