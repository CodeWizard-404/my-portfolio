const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-24 px-6 bg-background text-foreground">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Me</h2>
                <p className="text-xl">
                    I am a software developer with a strong background in building web and
                    mobile applications. I am passionate about clean code and seamless user
                    experiences. My goal is to solve complex problems and innovate through
                    technology.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
