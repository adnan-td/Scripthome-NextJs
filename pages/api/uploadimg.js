import nextConnect from "next-connect";
import multer from "multer";
import path from "path";

let filePath = "/uploads/";

const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(__dirname, "../../../../public/uploads"),
    filename: (req, file, cb) => {
      const filename = `${Date.now()}${path.extname(file.originalname)}`;
      req.filePath = filePath + filename;
      cb(null, filename);
    },
  }),
}).single("uploadimg");

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ message: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ message: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload);

apiRoute.post((req, res) => {
  if (req.file) {
    res.status(200).json({ img: req.filePath });
  } else {
    res.status(500).json({ message: "Failed to upload" });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
