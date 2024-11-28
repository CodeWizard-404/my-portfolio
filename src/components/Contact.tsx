const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-background text-foreground">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Contact Me</h2>
                <p className="text-xl mb-8">
                    Feel free to reach out to me through the contact form or connect with me on
                    social media.
                </p>
                <form className="space-y-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 border border-gray-300 rounded-lg"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-4 border border-gray-300 rounded-lg"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={6}
                        className="w-full p-4 border border-gray-300 rounded-lg"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
