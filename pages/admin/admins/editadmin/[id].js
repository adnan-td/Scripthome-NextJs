import MainContent from "../../../../admin-panel/components/maincontent/maincontent.component";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { hostname } from "../../../../config/hostname";
import { getSession } from "next-auth/react";

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
  const id = context.params.id;
  const res = await fetch(`${hostname}/api/users/${id}`);
  const initialUser = await res.json();
  return {
    props: { initialUser, id },
  };
}

const EditAdminPage = ({ initialUser, id }) => {
  return (
    <MainContent>
      <FormAA initialUser={initialUser} id={id} />
    </MainContent>
  );
};

export default EditAdminPage;

// If user.id = edit admin then only name and email should be enabled otherwise disabled

function FormAA({ initialUser, id }) {
  const [formFields, setFormFields] = useState({
    name: initialUser.name,
    email: initialUser.email,
    password: "",
    user: initialUser.role === 0,
    verified: initialUser.role === 1,
    admin: initialUser.role === 2,
    superadmin: initialUser.role === 3,
    img: null,
  });
  const { name, email, admin, verified, user, password } = formFields;
  const [message, setMessage] = useState(null);
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

  const handleSubmit = async () => {
    const res = await fetch(`${hostname}/api/users/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        admin: admin ? "on" : "off",
        verified: verified ? "on" : "off",
        user: user ? "on" : "off",
      }),
    });
    const final = await res.json();
    try {
      if (final.message === "The User has been updated") {
        router.back();
        return;
      }
      setMessage(final.message);
    } catch {
      setMessage(null);
    }
  };

  return (
    <div className="main2">
      <div className="main-header">
        <div>
          <h3>Edit Admins</h3>
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
                Edit Admin
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="formaddscript">
        <p className="add-mod">
          Details {message !== null ? <span style={{ color: "red" }}>{`(${message})`}</span> : null}
        </p>
        <form className="row g-3">
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
              <button type="button" className="btn btn-1" onClick={handleSubmit}>
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
