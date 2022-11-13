import MainContent from "../../../admin-panel/components/maincontent/maincontent.component";
import Admins from "../../../admin-panel/routes/admins/admins.route";
import { getSession } from "next-auth/react";
import { userqueries } from "../../../db/users.model";

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

  const admins = JSON.parse(JSON.stringify(await userqueries.getAllUsers()));
  return {
    props: { admins },
  };
}

const AdminsPage = ({ admins }) => {
  return (
    <MainContent>
      <Admins admins={admins} />
    </MainContent>
  );
};

export default AdminsPage;
