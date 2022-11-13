import Reports from "../../admin-panel/routes/reports/reports.route";
import MainContent from "../../admin-panel/components/maincontent/maincontent.component";
import { getSession } from "next-auth/react";
import { otherqueries } from "../../db/otherqueries.model";

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
  const res = JSON.parse(JSON.stringify(await otherqueries.getReports()));
  return {
    props: { reports: res },
  };
}

export default ReportsPage;
