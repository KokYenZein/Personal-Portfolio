import { Experience } from '@/types';
import { lookupService } from 'dns';

export const experiences: Experience[] = [
  {
    jobTitle: 'Data Scientist - Core Member',
    company: 'WAT.ai',
    startDate: 'Sep 2023',
    endDate: 'Apr 2024',
    description: `Developed lightweight Machine Learning models for network intrusion detection on ESP 8266 and Raspberry Pi 4.
    Utilized Hyperopt (Tree-Structured Parzen Estimator) for hyperparameter optimization - designed to optimize quantization hyperparameters to achieve an expected accuracy target and provide best possible latency improvement.
    Collaborated in a team of 4 to present on bio-inspired AI network intrusion detection for IIoT at CUCAI - Canadian Undergraduate Conference on AI. <a href="https://docs.google.com/presentation/d/10KdZ69Hbl_T6UcxGnarboxyz62DjlAaJuc-UkVxz-SE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;"> Checkout the slides</a>
    Co-authored and published a research paper. <a href="https://github.com/KokYenZein/WatAI---CyberSecurity-23-24/blob/6a08368ea8dffa296e1dd3651555c2ec726ed8a8/light-NSA-PSA-CUCAI/Bio-inspired%20AI%20for%20Network%20Intrusion%20Detection%20on%20Industrial%20IoT.pdf" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">Read the paper</a>`,
    tools: ['Python', 'Pandas', 'Numpy', 'Scikit-learn', 'TensorFlow', 'Keras', 'Bash']
  },

  {
    jobTitle: 'Data Engineer Intern',
    company: 'Asecure Group',
    startDate: 'Sep 2022',
    endDate: 'Dec 2022',
    description: `Optimized systems through Grafana Cloud, Loki, and Promtail.
    Implemented end-to-end data processes, including onboarding, log aggregation, parsing, modeling, and visualization. 
    Designed and executed PromQL and PostgreSQL queries on Grafana via PostgreSQL REST API.`,
    tools: ['Grafana', 'Loki', 'Promtail', 'Prometheus', 'PostgreSQL', 'Python', 'Bash']
  },

  {
    jobTitle: 'Programming Instructor Intern',
    company: 'Kidocode',
    startDate: 'Dec 2019',
    endDate: 'Jan 2020',
    description: `Instructed, guided, and encouraged 6,000+ students through the foundation courses which includes coding in Python and JavaScript, modern mathematics, web development in HTML, CSS, JavaScript, and cloud databases, and electronic and robotics with an Arduino and Raspberry Pi.
    Cooperated with full-time employees to coach children and adults with debugging and problem-solving through one-on-one sessions and lectures.
    Directed 50+ students in specializations such as data science, mobile app development, game programming, or advanced electronics & robotics.`,
    tools: ['HTML', 'CSS', 'Javascript', 'Python', 'Arduino']
  },
];
