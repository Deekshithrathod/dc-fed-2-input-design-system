import NewDisplayArea from "../../components/DisplayArea/NewDisplayArea";
import NavPane from "../../components/NavPane/NavPane";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <NavPane />
        <main>
          <NewDisplayArea />
        </main>
      </div>
    </>
  );
};

export default Home;
