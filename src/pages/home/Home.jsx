import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import TableList from "../../components/table/Table";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <hr />
        <div className="flex p-5 gap-[20px]">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="flex px-5 py-[5px] gap-[20px] bg-transparent">
          <Featured />
          <Chart />
        </div>
        <div className="boxShadow p-5 m-5">
          <div className="font-medium text-gray-500 mb-[15px]">
            Latest Transations
          </div>
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Home;
