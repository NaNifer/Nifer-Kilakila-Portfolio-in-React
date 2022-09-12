import './Home.css';

function Home() {
  return (
    <div className="parent-home">
      <Aside
        id={'aside-wrapper'}
      />
      <Main
        id={'main-wrapper'}
      />
      <Footer
        id={'footer'}
      />
    </div>
  );
}

export default Home;