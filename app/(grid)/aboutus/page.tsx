const Page = () => {
    return (
        <section className="mt-5">
            <h1 className="trend text-white font-black text-8xl">About Us</h1>
            <p className="text-white font-bold text-3xl mt-5">
                Welcome to HyperSeat! We're a team of software engineers focused
                on creating innovative solutions that simplify complex tasks and
                improve user experiences.
            </p>

            <h2 className="trend text-white font-black text-6xl mt-10">
                Our Mission
            </h2>
            <p className="text-white font-bold text-3xl mt-5">
                Our mission is to provide a seamless music streaming experience
                while helping users discover local concerts and events. We aim
                to bring the music you love closer to you.
            </p>

            <h3 className="trend text-white font-black text-6xl mt-10">
                The Team
            </h3>
            <ul className="text-white text-2xl mt-5">
                <li className="font-medium">
                    <span className="font-bold">- Ezzeldin Salah:</span> Cloud
                    Architect – Role: Front-End / Tracking Infrastructure Loads.
                </li>
                <li className="mt-5 font-medium">
                    <span className="font-bold">- Omar Elnazly:</span>{" "}
                    Full-Stack Developer – Role: Database Design / APIs
                    Integration.
                </li>
            </ul>
        </section>
    );
};

export default Page;
