/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="py-24 px-6 bg-gray-50 text-foreground">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-8">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="bg-white shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                        <img
                            src="/path-to-your-image.jpg"
                            alt="Project Image"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-4">Project Title</h3>
                            <p className="text-lg mb-4">Short description of the project...</p>
                            <Link
                                href="https://link-to-project.com"
                                target="_blank"
                                className="text-blue-600 hover:underline"
                            >
                                View Project
                            </Link>
                        </div>
                    </div>
                    {/* Repeat for more projects */}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
