import { Skill } from '@/types';

export const skills: Skill[] = [
  {
    name: 'Languages',
    image: '/images/skills/languages.png',
    content: [
      {name: 'Python', image: '/images/skills/languages/python.svg'},
      {name: 'PostgreSQL', image: '/images/skills/languages/postgresql.svg'},
      {name: 'MySQL', image: 'images/skills/languages/mysql.svg'},
      {name: 'R', image: 'images/skills/languages/r.svg'},
      {name: 'C', image: 'images/skills/languages/c.svg'},
      {name: 'C++', image: 'images/skills/languages/cpp.svg'},
      {name: 'Bash', image: 'images/skills/languages/bash.svg'},
      {name: 'HTML', image: 'images/skills/languages/html.svg'},
    ]
  },
  {
    name: 'Libraries',
    image: '/images/skills/libraries.png',
    content: [
      {name: 'NumPy', image: '/images/skills/libraries/numpy.svg'},
      {name: 'Pandas', image: '/images/skills/libraries/pandas.svg'},
      {name: 'Matplotlib', image: '/images/skills/libraries/matplotlib.svg'},
      {name: 'Seaborn', image: '/images/skills/libraries/seaborn.svg'},
      {name: 'Scikit-learn', image: '/images/skills/libraries/sklearn.svg'},
      {name: 'TensorFlow', image: '/images/skills/libraries/tensorflow.svg'},
      {name: 'PyTorch', image: '/images/skills/libraries/pytorch.svg'},
      {name: 'Flask', image: '/images/skills/libraries/flask.svg'}
    ]
  },
  {
    name: 'Technologies',
    image: '/images/skills/framework.png',
    content: [
      {name: 'AWS', image: '/images/skills/technologies/aws.svg'},
      {name: 'GCP', image: '/images/skills/technologies/gcp.svg'},
      {name: 'Git', image: '/images/skills/technologies/git.svg'},
      {name: 'Databricks', image: '/images/skills/technologies/databricks.svg'},
      {name: 'Jupyter', image: '/images/skills/technologies/jupyter.svg'},
      {name: 'Docker', image: '/images/skills/technologies/docker.svg'},
      {name: 'Apache Spark', image: '/images/skills/technologies/spark.svg'},
      {name: 'Apache Airflow', image: '/images/skills/technologies/airflow.svg'}
    ]
  },
];
