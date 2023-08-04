import DisplayArea from "../../components/DisplayArea/DisplayArea";
import NavPane from "../../components/NavPane/NavPane";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <NavPane />
        <main>
          <DisplayArea />
        </main>
      </div>
    </>
  );
};

export default Home;
