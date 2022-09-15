
// import "./Footer.css";



const Footer = () => {
    return (
        <footer className="bg-danger text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">


                    {/* <dd>
                        <a href="mailto:niferkilakila@gmail.com"><i className="icon fa fa-envelope"></i></a>
                    </dd>
                    <dd>
                        <a href="https://www.linkedin.com/in/nifer-kilakila-b0721565/"><i className="icon fa fa-linkedin"></i></a>
                    </dd>
                    <dd>
                        <a href="https://github.com/NaNifer"><i className="icon fa fa-github"></i></a>
                    </dd>
                    <dd>
                        <a href="https://stackoverflow.com/users/18479722/nifer"><i className="icon fa fa-twitter"></i></a>
                    </dd> */}
                    {/* Linkedin */}
                    <a
                        className="btn text-white btn-floating m-1"
                        // style="background-color: #0082ca;"
                        href="#!"
                        role="button"
                    ><i className="fab fa-linkedin-in"></i
                    ></a>
                    {/* Github */}
                    <a
                        className="btn text-white btn-floating m-1"
                        // style="background-color: #333333;"
                        href="#!"
                        role="button"
                    ><i className="fab fa-github"></i
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

