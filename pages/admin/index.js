import Head from "next/head";
import { getSession } from "next-auth/react";
import { userqueries } from "../../db/users.model";

const AdminPage = () => {
  return (
    <>
      <Head>
        <title>Scripthome Admin</title>
        <meta NAME="robots" CONTENT="noindex,nofollow" />
      </Head>
    </>
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
  const res = await userqueries.getUserbyEmail(session.user.email);
  if (res.role <= 0) {
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
    redirect: {
      destination: "/admin/dashboard",
      permanent: false,
    },
  };
}

export default AdminPage;
