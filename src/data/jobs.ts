import type { Job } from "../interfaces/Job";

const jobs: Job[] = [
  {
    company: "20/20 Vision Family Care",
    role: "Software Development Team Leader",
    image_url: "src/assets/2020.jpg",
    description:
      "Digitized and automated medical information management processes using Optical Character Recognition.",
    achievement:
      "Due to Computer Vision techniques, repetitive tasks time was reduced by 90%.",
    technologies: [
      "Vue JS",
      "Vuetify",
      "FastAPI",
      "Alembic",
      "Uvicorn",
      "SQLAlchemy",
      "Postgres",
      "Redis",
      "Nginx",
      "Docker",
    ],
  },
  {
    company: "Ernest & Young",
    role: "Integrity Data Analyst",
    image_url: "src/assets/ey.jpeg",
    description:
      "Handled large-scale financial dataset processing and data cleaning for millions of rows using Pandas and Polars. Implemented internal automation solutions using computer vision techniques.",
    achievement:
      "Standardized and minimized one of the main deliverables routine processes to 6% the original time",
    technologies: [
      "Pandas",
      "Polars",
      "SQLServer",
      "Python",
      "Alteryx",
      "PowerBI",
      "MS Excel",
    ],
  },
  {
    company: "Gijaba Business S.A.C.",
    role: "Software Development Team Leader",
    image_url: "src/assets/pisc.JPG",
    description:
      "Led the development and deployment of a computer vision and deep learning-based software for precise fish measurement, using Mixture Density Networks for accurate size estimation",
    achievement:
      "This innovation significantly reduced human-fish contact, enhancing fish growth optimization.",
    technologies: [
      "Pytorch",
      "Lightning",
      "Python",
      "Mixture Density Networks",
      "ViT",
      "ClearML",
      "PySide6",
      "Jetson",
    ],
  },
  {
    company: "Statkraft Perú",
    role: "Consultant Specialist in Artificial Intelligence Applications",
    image_url: "src/assets/stk2.png",
    description:
      "Led the development of a full-stack web app for centralized deployment and management of AI computer vision projects, enhancing operational control and flexibility.",
    achievement:
      "Improved project management and deployment performance of computer vision applications via a centralized platform.",
    technologies: [
      "Pytorch",
      "Tensorflow",
      "Lightning",
      "Convolutional Neural Networks",
      "ViT",
      "MLFlow",
      "Flask",
      "Bootstrap",
      "Python",
      "Javascript",
    ],
  },
  {
    company: "Atis Perú",
    role: "Consultant Specialist in Artificial Intelligence Applications",
    image_url: "src/assets/atis.png",
    description:
      "Developed multiple neural network projects focused on enhancing safety and security, including applications like fall detection and plate identification",
    achievement:
      "Effectively reduced safety risks using AI, proving neural networks' value in critical security areas.",
    technologies: [
      "Pytorch",
      "Lightning",
      "Tensorflow",
      "Keras",
      "Convolutional Neural Networks",
      "Yolov5",
      "EfficientNet",
      "EfficientDet",
      "MLFlow",
    ],
  },
  {
    company: "Statkraft Perú",
    role: "Systems Operation Trainee",
    image_url: "src/assets/stk1.jpeg",
    description:
      "Led the development and deployment of a computer vision and deep learning-based software for precise fish measurement, using Mixture Density Networks for accurate size estimation",
    achievement:
      "Significantly reduced operational risks and time spent on repetitive tasks, enhancing efficiency and safety standards across various processes.",
    technologies: [
      "Pytorch",
      "Lightning",
      "Tensorflow",
      "Keras",
      "Convolutional Neural Networks",
      "Recurrent Neural Networks",
      "Natural Language Processing",
      "Yolov3",
      "EfficientNet",
      "EfficientDet",
      "MLFlow",
    ],
  },
];

export default jobs;
