exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('skills')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('skills').insert([
        { id: 1, colName: 'HTML / CSS' },
        { id: 2, colName: 'Firebase' },
        { id: 3, colName: 'Javascript' },
        {
          id: 4,
          title: 'MYSQL',
        },
        {
          id: 5,
          title: 'NodeJS',
        },
        {
          id: 6,
          title: 'React',
        },
        {
          id: 7,
          title: 'Typescript',
        },
      ]);
    });
};
