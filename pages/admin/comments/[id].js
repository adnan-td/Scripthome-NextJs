import MainContent from "../../../admin-panel/components/maincontent/maincontent.component";
import Comments from "../../../admin-panel/routes/comments/comments.route";
import { hostname } from "../../../config/hostname";
import { getSession } from "next-auth/react";
import axios from "axios";

export async function getServerSideProps(context) {
  const id = context.params.id;
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
    method: "post",
    url: `${hostname}/api/comments`,
    data: {
      method: "getcomments",
      id_script: id,
    },
  });
  return {
    props: { comments: res.data },
  };
}

const AdminsPage = ({ comments }) => {
  return (
    <MainContent>
      <Comments comments={comments} />
    </MainContent>
  );
};

export default AdminsPage;
