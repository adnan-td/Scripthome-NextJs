import MainContent from "../../../admin-panel/components/maincontent/maincontent.component";
import Comments from "../../../admin-panel/routes/comments/comments.route";
import { getSession } from "next-auth/react";
import { otherqueries } from "../../../db/otherqueries.model";

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
  const res = JSON.parse(JSON.stringify(await otherqueries.getAllCommentsAdmin(id)));
  return {
    props: { comments: res },
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
