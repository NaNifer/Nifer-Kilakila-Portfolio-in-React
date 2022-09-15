// import "./Footer.css";
const Footer = () => {
    return (
        <footer className="bg-warning text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-1">
                    <a
                        className="btn text-white btn-floating m-1"
                        // style="background-color: #0082ca;"
                        href="https://www.linkedin.com/in/nifer-kilakila-b0721565/"
                        role="button"
                    ><i className="fab fa-linkedin-in fa-lg"></i
                    ></a>
                    {/* Github */}
                    <a
                        className="btn text-white btn-floating m-1"
                        // style="background-color: #333333;"
                        href="https://github.com/NaNifer"
                        role="button"
                    ><i className="fab fa-github fa-lg"></i
                    ></a>
                      {/* StackOverflow */}
                      <a
                        className="btn text-white btn-floating m-1"
                        // style="background-color: #333333;"
                        href="https://stackoverflow.com/users/18479722/nifer"
                        role="button"
                    ><i className="fab fa-stack-overflow fa-lg"></i
                    ></a>
                </section>
                <div className="text-center p-3">
                    2022 Nifer Kilakila
                </div>
            </div>
        </footer>
    );
};

export default Footer;

