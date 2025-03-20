export const dummyCourses = [
    {
      id: 1,
      name: "Introduction to Computer Science",
      number: "CS101",
    },
    {
      id: 2,
      name: "Data Structures and Algorithms",
      number: "CS201",
    },
    {
      id: 3,
      name: "Operating Systems",
      number: "CS301",
    },
  ];
  
  export const dummyGpaTrends = [
    {
      courseId: 1,
      trends: [
        { semester: "Fall 2022", average_gpa: 3.5 },
        { semester: "Spring 2023", average_gpa: 3.6 },
        { semester: "Fall 2023", average_gpa: 3.4 },
      ],
    },
    {
      courseId: 2,
      trends: [
        { semester: "Fall 2022", average_gpa: 3.2 },
        { semester: "Spring 2023", average_gpa: 3.3 },
        { semester: "Fall 2023", average_gpa: 3.1 },
      ],
    },
    {
      courseId: 3,
      trends: [
        { semester: "Fall 2022", average_gpa: 3.7 },
        { semester: "Spring 2023", average_gpa: 3.8 },
        { semester: "Fall 2023", average_gpa: 3.6 },
      ],
    },
  ];
  
  export const dummyProfessors = [
    {
      id: 1,
      name: "Dr. Smith",
      courses: [1, 2], // Teaches CS101 and CS201
    },
    {
      id: 2,
      name: "Dr. Johnson",
      courses: [3], // Teaches CS301
    },
  ];