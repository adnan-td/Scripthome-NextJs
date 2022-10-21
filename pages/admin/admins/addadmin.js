import MainContent from "../../../admin-panel/components/maincontent/maincontent.component";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

const AddAdminPage = () => {
  return (
    <MainContent>
      <FormAA />
    </MainContent>
  );
};

export default AddAdminPage;

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

// If user.id = edit admin then only name and email should be enabled otherwise disabled

function FormAA() {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
    admin: false,
    verified: false,
    user: false,
    superadmin: false,
    img: null,
  });
  const { name, email, admin, verified, user, password } = formFields;
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleRadioChange = (event) => {
    if (event.target.name === "admin") {
      setFormFields({ ...formFields, admin: true, verified: false, user: false });
    } else if (event.target.name === "verified") {
      setFormFields({ ...formFields, admin: false, verified: true, user: false });
    } else {
      setFormFields({ ...formFields, admin: false, verified: false, user: true });
    }
  };

  const isDisabledRadio = (n) => {
    const role = 3; // give the logged in users data
    return !(n < role);
  };

  return (
    <div className="main2">
      <div className="main-header">
        <div>
          <h3>Add Admins</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/admin/dashboard">
                  <a
                    style={{
                      listStyle: "none",
                      color: "#8c8888",
                      textDecoration: "none",
                    }}
                  >
                    Dashboard
                  </a>
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/admin/admins">
                  <a
                    style={{
                      listStyle: "none",
                      color: "#8c8888",
                      textDecoration: "none",
                    }}
                  >
                    Admins
                  </a>
                </Link>
              </li>
              <li className="breadcrumb-item" aria-current="page" style={{ color: "#8c8888" }}>
                Add Admins
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="formaddscript">
        <p className="add-mod">Details</p>
        <form className="row g-3" method="POST" action="/api/users">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                value={name}
                name="name"
                type="text"
                className="form-control"
                id="floatingInput1"
                placeholder="Enter Name"
                onChange={handleChange}
              />
              <label>Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                value={email}
                name="email"
                type="email"
                className="form-control"
                id="floatingInput2"
                placeholder="Enter Email"
                onChange={handleChange}
              />
              <label>Email</label>
            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label">Upload your Images here</label>
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple=""
              name="img"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                value={password}
                name="password"
                type="password"
                className="form-control"
                id="floatingInput3"
                placeholder="Enter Password"
                onChange={handleChange}
              />
              <label>Password</label>
            </div>
          </div>
          <div className="col-md-6">
            <p style={{ fontWeight: "600" }}>Role</p>
            <div className="rad">
              <div className="form-check spc2" style={{ marginLeft: "0" }}>
                <input
                  className="form-check-input"
                  type="radio"
                  id="html"
                  name="admin"
                  checked={admin}
                  onChange={handleRadioChange}
                  disabled={isDisabledRadio(2)}
                />
                <label className="form-check-label" htmlFor="html">
                  Admin
                </label>
              </div>
              <div className="form-check spc2">
                <input
                  className="form-check-input"
                  type="radio"
                  id="html2"
                  name="verified"
                  checked={verified}
                  onChange={handleRadioChange}
                  disabled={isDisabledRadio(1)}
                />
                <label className="form-check-label" htmlFor="html2">
                  Verified
                </label>
              </div>
              <div className="form-check spc2">
                <input
                  className="form-check-input"
                  type="radio"
                  id="html3"
                  name="user"
                  checked={user}
                  onChange={handleRadioChange}
                  disabled={isDisabledRadio(0)}
                />
                <label className="form-check-label" htmlFor="html3">
                  User
                </label>
              </div>
            </div>
          </div>
          <div className="form-buttons">
            <div style={{ marginRight: "20px" }}>
              <button type="submit" className="btn btn-1">
                Submit
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  router.back();
                }}
                className="btn btn-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
