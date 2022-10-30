import Reports from "../../admin-panel/routes/reports/reports.route";
import MainContent from "../../admin-panel/components/maincontent/maincontent.component";
import { getSession } from "next-auth/react";
import axios from "axios";
import { hostname } from "../../config/hostname";

const ReportsPage = ({ reports }) => {
  return (
    <MainContent>
      <Reports reports={reports} />
    </MainContent>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
  const res = await axios({
    url: `${hostname}/api/reports`,
    method: "post",
    data: {
      method: "getall",
    },
  });
  return {
    props: { reports: res.data },
  };
}

export default ReportsPage;
