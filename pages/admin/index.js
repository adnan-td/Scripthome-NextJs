import Head from "next/head";
import { getSession } from "next-auth/react";

const AdminPage = () => {
  return (
    <>
      <Head>
        <title>Scripthome Admin</title>
      </Head>
    </>
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
    redirect: {
      destination: "/admin/dashboard",
      permanent: false,
    },
  };
}

export default AdminPage;
