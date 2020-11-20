import React from 'react';
import { Avatar } from './Avatar';
import './Avatar.css';

export default {
  title: 'Avatar',
};

export const avatarForStudent = () => (
  <Avatar
    image={
      <img
        className="avatar-student-comp"
        alt="student name"
        src="https://s3-alpha-sig.figma.com/img/f722/0720/4763f86776d7912accdd107f7d4338fb?Expires=1606694400&Signature=A6ZtXxW-kmSpbG1Q7Yvoson6xOgy6KncSdVZrSjWY~lSkyup3X31myxKv0OWI-nDGxgHu4gW4ZoeMHYH6c5EsWyoMOaPP3ZBx2NtPkSU3LCghwI0lf~xFbhGe-~7EOATInXp5CeXnYoM1v8wFYNOQ6TKdGqjVrQRRu3OIIm4vHfHeH5m8G87nXjKHZbhYlLfpi16JHPbW9vRyqTwuBtcEUTFJwFSnNmCVXjoCSpqUDkJ8Ou08wyxbt7EWCfyW~Bshqzhl8XFDRtYt~jY3W-9qyrQRgGDPQmr4~ytgsUXLbOSeo9Nw~Yw6OVyvFOre~9Sy3eSpEPRITJNgJQUY4yV2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />
    }
  />
);

export const avatarForMentor = () => (
  <Avatar
    image={
      <img
        className="avatar-mentor-comp"
        alt="Mentor name"
        src="https://s3-alpha-sig.figma.com/img/6724/8040/6077dc14361fdc93fb05e53fff588bcc?Expires=1606694400&Signature=ZeJkZsQh3DYM1N8o5LTXr21mOPAZxLI73Nv-d3kQ-4d2eEmsI4nTVBsiGL0uQn42o~88lLA4EGnZL8LIeluLKb3CER8arBLKaBDVg-r20N0IMdJhwotNQOaNj7THOPKZpvskA0g342VuqyKQRsA3UMyGnf9YK3QhihjNz-46sUJ9SMd~tqCiPp960bXlWxuHS1M1al418DAQ8aEaQAbkoAOMvDwdYcNb9qtIf7pYmBWfhyf5R5hUBMoOnYiBBcW97Lh0NEVSS1yGVOGhARONR32xD0Zf3VYz0aYQxJV5EHP37eWzyg5O5pp6UmSP8YodDSjWibympKddu0HOc3vG3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />
    }
  />
);

export const avatarForAdmin = () => (
  <Avatar
    image={
      <img
        className="avatar-admin-comp"
        alt="Admin name"
        src="https://s3-alpha-sig.figma.com/img/3f33/9baa/7304a3537abf6a118e66ee4e07e16dc9?Expires=1606694400&Signature=CazqfdqLboQyn7a0K2GFIbDZXI8nNoNsbdCNu9dxb7Wwc7AbhP~1YpplX1ZUORF2-C0pMMCXF8dh~rBxjJ6M~jJPpwF9ihidjd4ThVCbifRtq7LZixc6Rsy0426xoXyLdgkiQrrBdQlmV8Ht01tUfHw1EESGCJCgVq~mQeJmJOtYKNppDaKSToqaZiaSYO1uGVQqVLOT9GwoPHdqcYQ2DTyUuHa0vT6YHa2p~nHUoAA4LoLnUn~wnQ9pX-JJOsKekZfLilo8l0L81Ds13XZhEsRxj7ftZY9NMRpapdwo9YJ~VCFK3oE9B2d0Y54isiXccHv8CVC5a5SqcDFjaFoZLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      />
    }
  />
);
