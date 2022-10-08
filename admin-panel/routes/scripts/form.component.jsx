import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { DataContext } from "../../contexts/data/data.context";

let defaultFormFields = {
  titles: "",
  madeby: "",
  gameLink: "",
  youtubeLink: "",
  features: [],
  tags: [],
  script: "",
  description: "",
};

export default function FormScript({ title }) {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { titles, madeby, gameLink, youtubeLink, features, tags, script, description } = formFields;
  const location = useLocation();
  const { scripts } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.search) {
      defaultFormFields = {
        titles: scripts[location.search.slice(4, location.search.length)].title,
        madeby: scripts[location.search.slice(4, location.search.length)].madeby,
        gameLink: scripts[location.search.slice(4, location.search.length)].gameLink,
        youtubeLink: scripts[location.search.slice(4, location.search.length)].youtubeLink,
        features: scripts[location.search.slice(4, location.search.length)].features,
        tags: scripts[location.search.slice(4, location.search.length)].tags,
        script: scripts[location.search.slice(4, location.search.length)].script,
        description: scripts[location.search.slice(4, location.search.length)].description,
      };
      setFormFields(defaultFormFields);
    } else {
      defaultFormFields = {
        titles: "",
        madeby: "",
        gameLink: "",
        youtubeLink: "",
        features: [],
        tags: [],
        script: "",
        description: "",
      };
      setFormFields(defaultFormFields);
    }
  }, [location, scripts]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="main2">
      <div className="main-header">
        <div>
          <h3>{title} Scripts</h3>
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
                  to="/admin/scripts"
                  style={{
                    listStyle: "none",
                    color: "#8c8888",
                    textDecoration: "none",
                  }}
                >
                  Scripts
                </Link>
              </li>
              <li className="breadcrumb-item" aria-current="page" style={{ color: "#8c8888" }}>
                {title} Scripts
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="formaddscript">
        <p className="add-mod">Details</p>
        <form className="row g-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input name="titles" value={titles} onChange={handleChange} type="text" className="form-control" id="floatingInput1" placeholder="Enter Title" />
              <label>Script Title</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input name="madeby" value={madeby} onChange={handleChange} type="text" className="form-control" id="floatingInput2" placeholder="Enter Name" />
              <label>Made By</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="">
              <label className="form-label">Upload your Images here</label>
              <input className="form-control" type="file" id="formFileMultiple" multiple />
            </div>
            <div className="form-floating">
              <textarea
                name="description"
                value={description}
                onChange={handleChange}
                className="form-control spc"
                id="inputDescription"
                placeholder="Enter Description"
                style={{ height: "212px" }}
              ></textarea>
              <label>Description</label>
            </div>
          </div>
          <div className="col-md-6 align-content-around" style={{ marginTop: "0" }}>
            <div className="form-floating">
              <input
                name="gameLink"
                value={gameLink}
                onChange={handleChange}
                type="text"
                className="form-control spc"
                id="floatingInput3"
                placeholder="Enter Game Link"
                style={{ marginTop: "20" }}
              />
              <label>Game Link</label>
            </div>
            <div className="form-floating">
              <input
                name="youtubeLink"
                value={youtubeLink}
                onChange={handleChange}
                type="text"
                className="form-control spc"
                id="floatingInput4"
                placeholder="Enter Youtube Link"
              />
              <label>Youtube Link</label>
            </div>
            <div className="form-floating">
              <input name="features" value={features} onChange={handleChange} type="text" className="form-control spc" id="floatingInput5" placeholder="Enter Features" />
              <label>Features</label>
            </div>
            <div className="form-floating">
              <input name="tags" value={tags} onChange={handleChange} type="text" className="form-control spc" id="floatingInput6" placeholder="Enter Tags" />
              <label>Tags</label>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-floating">
              <textarea
                name="script"
                value={script}
                onChange={handleChange}
                className="form-control"
                id="inputscript"
                placeholder="Enter Scripts"
                style={{ height: "110px" }}
              ></textarea>
              <label>Script</label>
            </div>
          </div>
          <div className="form-buttons">
            <div style={{ marginRight: "20px" }}>
              <button type="button" className="btn btn-1" id="liveToastBtn-success">
                Submit
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  navigate(-1);
                }}
                type="button"
                className="btn btn-2"
                id="liveToastBtn-error"
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
