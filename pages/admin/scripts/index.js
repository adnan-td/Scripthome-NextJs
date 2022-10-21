import Scripts from "../../../admin-panel/routes/scripts/scripts.route";
import MainContent from "../../../admin-panel/components/maincontent/maincontent.component";
import { getSession } from "next-auth/react";

const ScriptsPage = () => {
  return (
    <MainContent>
      <Scripts />
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

export default ScriptsPage;
