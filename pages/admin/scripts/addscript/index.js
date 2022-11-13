import { getSession } from "next-auth/react";
import { useContext, useEffect, useRef, useState } from "react";
import Router from "next/router";
import stylesa from "../../../../admin-panel/app.module.scss";
import stylesb from "../../../../admin-panel/bootstrap.module.scss";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import MainContent from "../../../../admin-panel/components/maincontent/maincontent.component";
import { UserContext } from "../../../../main-site/contexts/user/user.context";
import { AllScriptContext } from "../../../../main-site/contexts/allscripts/scripts.context";
import { imghost } from "../../../../config/img_hostname";

const styles = (classname) => {
  if (stylesa[classname]) return stylesa[classname];
  if (stylesb[classname]) return stylesb[classname];
};

function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function extractGameCode(gameLink) {
  const temp = gameLink.split("/games/")[1];
  const temp2 = temp?.split("/")[0];
  if (isNumeric(temp2)) {
    return temp2;
  } else {
    return 0;
  }
}

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

export default function FormScript() {
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  var slugify = require("slugify");
  const { user } = useContext(UserContext);
  const { refreshScripts, setRefreshScripts } = useContext(AllScriptContext);
  const [formFields, setFormFields] = useState({
    img: "",
    title: "",
    madeby: "",
    gameLink: "",
    youtubeLink: "",
    features: "example;example",
    tags: "example;example",
    script_code: "",
    description: "",
    user_id: "",
  });
  const { img, title, madeby, gameLink, youtubeLink, features, tags, script_code, description } =
    formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitHandler = async () => {
    const final = { ...formFields, user_id: user.id, gameCode: extractGameCode(gameLink) };
    if (await checkvalidscript(final)) {
      const res = await axios({
        url: `/api/scripts`,
        method: "post",
        data: final,
      });
      formRef.current.reset();
      setFormFields({
        img: "",
        title: "",
        madeby: "",
        gameLink: "",
        youtubeLink: "",
        features: "",
        tags: "",
        script_code: "",
        description: "",
        user_id: "",
      });
      setRefreshScripts(!refreshScripts);
      toast.success("Script has been successfully added!");
    }
  };

  const checkvalidscript = async (script) => {
    const {
      title,
      user_id,
      img,
      madeby,
      gameLink,
      // gameCode,
      // youtubeLink,
      // features,
      // tags,
      script_code,
      description,
    } = script;

    const res = await axios({
      url: `/api/getscriptbyslug/${slugify(title, { lower: true })}`,
      method: "post",
      data: {
        method: "getscript",
      },
    });
    if (!res.data.not_exists) {
      toast.error("The title is already being used! Please write another!");
    } else if (!title || title.length <= 4) {
      toast.error("Please enter a title of atleast 5 characters!");
    } else if (!user_id) {
      toast.error("Some error occured! Please try again later!");
    } else if (!img) {
      toast.error("Image field cannot be empty!");
    } else if (!madeby || madeby.length <= 4) {
      toast.error("Please enter a Made By of atleast 5 characters!");
    } else if (!gameLink || gameLink.length <= 4) {
      toast.error("Please enter a Game Link of atleast 5 characters!");
    } else if (!script_code || script_code.length <= 4) {
      toast.error("Please enter Script Code of atleast 5 characters!");
    } else if (!description || description.length <= 4) {
      toast.error("Please enter a Description of atleast 5 characters!");
    } else {
      return true;
    }
    return false;
  };

  const onChangeHandler = (event) => {
    if (event.target.files.length !== 1) {
      return;
    }

    if (event.target.files.length === 0) {
      setFormFields({ ...formFields, img: null });
    }

    const formData = new FormData();

    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });

    const onChange = async (formData) => {
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      try {
        const response = await axios.post(`${imghost}/request`, formData, config);

        setFormFields({ ...formFields, img: response.data.img });
        toast.success("Image was Successfully Uploaded!");
      } catch (e) {
        console.log(e);
        fileInputRef.current.form.reset();
        toast.error("Sorry something happened! Please make sure file size is under 100 Kb");
      }
    };
    onChange(formData);
  };

  return (
    <MainContent>
      <div className={styles("main2")}>
        <div className={styles("main-header")}>
          <div>
            <h3>Add Scripts</h3>
            <nav aria-label="breadcrumb">
              <ol className={styles("breadcrumb")}>
                <li className={styles("breadcrumb-item")}>
                  <Link
                    href="/admin/dashboard"
                    style={{
                      listStyle: "none",
                      color: "#8c8888",
                      textDecoration: "none",
                    }}
                  >
                    <span
                      style={{
                        cursor: "pointer",
                        color: "#8c8888",
                      }}
                    >
                      {" "}
                      Dashboard{" "}
                    </span>
                  </Link>
                </li>
                <li className={styles("breadcrumb-item")}>
                  <Link
                    href="/admin/scripts"
                    style={{
                      listStyle: "none",
                      color: "#8c8888",
                      textDecoration: "none",
                    }}
                  >
                    <span
                      style={{
                        cursor: "pointer",
                        color: "#8c8888",
                      }}
                    >
                      Scripts
                    </span>
                  </Link>
                </li>
                <li
                  className={styles("breadcrumb-item")}
                  aria-current="page"
                  style={{ color: "#8c8888", cursor: "pointer" }}
                >
                  Add Scripts
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className={styles("formaddscript")}>
          <p className={styles("add-mod")}>Details</p>
          <form
            className={styles("row") + " " + styles("g-3")}
            encType="multipart/form-data"
            ref={formRef}
          >
            <div className={styles("col-md-6")}>
              <div className={styles("form-floating")}>
                <input
                  name="title"
                  value={title}
                  onChange={handleChange}
                  type="text"
                  className={styles("form-control")}
                  id="floatingInput1"
                  placeholder="Enter Title"
                />
                <label>Script Title</label>
              </div>
            </div>
            <div className={styles("col-md-6")}>
              <div className={styles("form-floating")}>
                <input
                  name="madeby"
                  value={madeby}
                  onChange={handleChange}
                  type="text"
                  className={styles("form-control")}
                  id="floatingInput2"
                  placeholder="Enter Name"
                />
                <label>Made By</label>
              </div>
            </div>
            <div className={styles("col-md-6")}>
              <div className={styles("")}>
                <label htmlFor="formFileMultiple" className={styles("form-label")}>
                  Upload your Images here
                </label>
                <input
                  className={styles("form-control")}
                  multiple={false}
                  name="uploadimg"
                  onChange={onChangeHandler}
                  type="file"
                  style={{ marginTop: "0.5rem" }}
                  ref={fileInputRef}
                />
              </div>
              <div className={styles("form-floating")}>
                <textarea
                  name="description"
                  value={description}
                  onChange={handleChange}
                  className={styles("form-control") + " " + styles("spc")}
                  id="inputDescription"
                  placeholder="Enter Description"
                  style={{ height: "212px" }}
                ></textarea>
                <label>Description</label>
              </div>
            </div>
            <div
              className={styles("col-md-6") + " " + styles("align-content-around")}
              style={{ marginTop: "0" }}
            >
              <div className={styles("form-floating")}>
                <input
                  name="gameLink"
                  value={gameLink}
                  onChange={handleChange}
                  type="text"
                  className={styles("form-control") + " " + styles("spc")}
                  id="floatingInput3"
                  placeholder="Enter Game Link"
                  style={{ marginTop: "20" }}
                />
                <label>Game Link</label>
              </div>
              <div className={styles("form-floating")}>
                <input
                  name="youtubeLink"
                  value={youtubeLink}
                  onChange={handleChange}
                  type="text"
                  className={styles("form-control") + " " + styles("spc")}
                  id="floatingInput4"
                  placeholder="Enter Youtube Link"
                />
                <label>Youtube Link</label>
              </div>
              <div className={styles("form-floating")}>
                <input
                  name="features"
                  value={features}
                  onChange={handleChange}
                  type="text"
                  className={styles("form-control") + " " + styles("spc")}
                  id="floatingInput5"
                  placeholder="Enter Features"
                />
                <label>Features</label>
              </div>
              <div className={styles("form-floating")}>
                <input
                  name="tags"
                  value={tags}
                  onChange={handleChange}
                  type="text"
                  className={styles("form-control") + " " + styles("spc")}
                  id="floatingInput6"
                  placeholder="Enter Tags"
                />
                <label>Tags</label>
              </div>
            </div>
            <div className={styles("col-md-12")}>
              <div className={styles("form-floating")}>
                <textarea
                  name="script_code"
                  value={script_code}
                  onChange={handleChange}
                  className={styles("form-control")}
                  id="inputscript"
                  placeholder="Enter Scripts"
                  style={{ height: "110px" }}
                ></textarea>
                <label>Script</label>
              </div>
            </div>
            <div className={styles("form-buttons")}>
              <div style={{ marginRight: "20px" }}>
                <button
                  type="button"
                  className={styles("btn") + " " + styles("btn-1")}
                  onClick={submitHandler}
                >
                  Submit
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    Router.back();
                  }}
                  type="button"
                  className={styles("btn") + " " + styles("btn-2")}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainContent>
  );
}
