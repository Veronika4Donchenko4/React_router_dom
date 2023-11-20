import courses from '../data/courses';

const Courses = () => {
  return (
    <>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <a href={`#${course.slug}`}>{course.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Courses;
