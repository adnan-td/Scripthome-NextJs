import MainContent from "../../../admin-panel/components/maincontent/maincontent.component";
import Admins from "../../../admin-panel/routes/admins/admins.route";
import { hostname } from "../../../config/hostname";
import { getSession } from "next-auth/react";

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
  const res = await fetch(`${hostname}/api/users`);
  const admins = await res.json();
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
