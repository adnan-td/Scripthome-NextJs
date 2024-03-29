import Dashboard from "../../admin-panel/routes/dashboard/dashboard.route";
import MainContent from "../../admin-panel/components/maincontent/maincontent.component";
import { getSession } from "next-auth/react";

const DashboardPage = () => {
  return (
    <MainContent>
      <Dashboard />
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
  return {
    props: {},
  };
}

export default DashboardPage;
