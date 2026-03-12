// src/index.ts

const cv = {
    name: 'John Doe',
    occupation: 'Software Developer',
    skills: ['JavaScript', 'TypeScript', 'Node.js'],
};

console.log(`Name: ${cv.name}`);
console.log(`Occupation: ${cv.occupation}`);
console.log('Skills:');
cv.skills.forEach(skill => console.log(`- ${skill}`));
