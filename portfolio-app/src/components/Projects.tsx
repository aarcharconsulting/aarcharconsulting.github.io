const projects = [
  { name: "Project 1", url: "https://example.com" },
  { name: "Project 2", url: "https://example.com" },
  { name: "Project 3", url: "https://example.com" },
  { name: "Project 4", url: "https://example.com" },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projects.map((project, index) => (
        <a
          href={project.url}
          key={index}
          className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
        >
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            {project.name}
          </h5>
        </a>
      ))}
    </div>
  );
};

export default Projects;
