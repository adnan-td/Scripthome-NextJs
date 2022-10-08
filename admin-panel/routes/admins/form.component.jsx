import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { DataContext } from "../../contexts/data/data.context";

// If user.id = edit admin then only name and email should be enabled otherwise disabled

let defaultFormFields = {
  name: "",
  email: "",
  password: "",
  admin: false,
  verified: false,
  user: false,
  superadmin: false,
  img: null,
};

export default function FormAdmin({ role }) {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, admin, verified, user, password } = formFields;
  const location = useLocation();
  // const { admins, setrefresh } = useContext(DataContext);
  const { admins } = useContext(DataContext);
  const navigate = useNavigate();
  const id = +location.search.slice(4, location.search.length);

  useEffect(() => {
    if (location.search) {
      let admin = admins.filter((admin) => {
        return admin.id === id;
      });
      admin = admin[0];
      defaultFormFields = {
        name: admin.name,
        email: admin.email,
        password: "",
        user: admin.role === 0,
        verified: admin.role === 1,
        admin: admin.role === 2,
        superadmin: admin.role === 3,
        img: null,
      };
      setFormFields(defaultFormFields);
    } else {
      defaultFormFields = {
        name: "",
        email: "",
        password: "",
        admin: false,
        verified: false,
        user: false,
        superadmin: false,
        image: null,
      };
      setFormFields(defaultFormFields);
    }
  }, [location, admins, id]);

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

  // async function handleSubmit() {
  //   navigate(-1);
  //   setrefresh(true);
  // }

  // const whichrole = (user, verified, admin, superadmin) => {
  //   if (user) return 0;
  //   else if (verified) return 1;
  //   else if (admin) return 2;
  //   else if (superadmin) return 3;
  // };

  const isDisabledRadio = (n) => {
    const role = 3; // give the logged in users data
    return !(n < role);
  };

  return (
    <div className="main2">
      <div className="main-header">
        <div>
          <h3>{role} Admins</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link
                  to="/admin/dashboard"
                  style={{
                    listStyle: "none",
                    color: "#8c8888",
                    textDecoration: "none",
                  }}
                >
                  Dashboard
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link
                  to="/admin/admins"
                  style={{
                    listStyle: "none",
                    color: "#8c8888",
                    textDecoration: "none",
                  }}
                >
                  Admins
                </Link>
              </li>
              <li className="breadcrumb-item" aria-current="page" style={{ color: "#8c8888" }}>
                {role} Admins
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="formaddscript">
        <p className="add-mod">Details</p>
        <form
          className="row g-3"
          method="POST"
          action={location.search ? `/request/admins/:${id}?_method=PUT` : "/request/admins/"}
        >
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
                  navigate(-1);
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
