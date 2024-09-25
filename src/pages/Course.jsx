// src/pages/Course.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Course = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const courseDoc = await getDoc(doc(db, 'courses', id));
      if (courseDoc.exists()) {
        setCourse(courseDoc.data());
      } else {
        console.error('Course not found');
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="mb-6">{course.description}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-bold">Course Content</h2>
        <ul className="list-disc list-inside">
          {course.lessons?.map((lesson, index) => (
            <li key={index} className="mt-2">{lesson.title}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold">Instructor</h2>
        <p>{course.instructorName}</p>
      </div>

      <button className="bg-yellow-400 text-white px-6 py-2 rounded">Enroll Now</button>
    </div>
  );
};

export default Course;
