import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";

const AppRouter: React.FC = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="" element/>
        </Routes>
      </Layout>
    </>
  );
};

export default AppRouter;
