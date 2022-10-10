import Reports from "../../admin-panel/routes/reports/reports.route";
import MainContent from "../../admin-panel/components/maincontent/maincontent.component";
import { getSession } from "next-auth/react";

const ReportsPage = () => {
  return (
    <MainContent>
      <Reports />
    </MainContent>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }
  return {
    props: {},
  };
}

export default ReportsPage;
