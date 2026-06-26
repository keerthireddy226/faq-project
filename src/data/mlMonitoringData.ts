export const lifecycle = [
  { ix:"01", t:"Detect drift", over:"Catch data and concept drift before it quietly degrades accuracy.", p:"Production inputs shift over time. Your teams learn to detect data drift, concept drift, and model staleness using the right statistical tests and detectors.", mods:"Modules 1–2", does:["Statistical tests: KS, Chi-squared, PSI, JS divergence","Advanced detectors: MMD, ADWIN, Page-Hinkley","Concept drift methods: DDM and EDDM","Drift monitoring with Evidently AI"] },
  { ix:"02", t:"Track performance", over:"Monitor accuracy, error, and slices against agreed thresholds.", p:"Beyond a single accuracy number, teams track the right metrics per model type and per data slice, with dashboards that non-technical stakeholders can read.", mods:"Module 3", does:["Classification, regression, and ranking metrics","Slice-based and segment-level performance","Ground truth collection and delayed feedback","Performance dashboards for ML teams"] },
  { ix:"03", t:"Alert & respond", over:"Fire ML-specific alerts and run disciplined incident response.", p:"Teams design alert rules that avoid fatigue, route incidents to the right people, and close the loop with post-incident reviews.", mods:"Modules 4–5", does:["Instrumentation, Prometheus, and Grafana","Static and dynamic alert thresholds","Routing via PagerDuty, Opsgenie, and Slack","Incident runbooks and post-incident reviews"] },
  { ix:"04", t:"Retrain & test", over:"Trigger retraining and roll out safely with A/B and shadow.", p:"Teams decide when to retrain, automate the pipeline, and release new models without risking production through controlled experiments.", mods:"Modules 6–7", does:["Scheduled, performance, and drift-triggered retraining","Automated retraining pipelines and registries","A/B testing, traffic splitting, and bandits","Shadow mode and safe deployment strategies"] },
  { ix:"05", t:"Explain", over:"Monitor explanations for auditable, stable decisions.", p:"In high-stakes settings, explanations must stay consistent. Teams monitor feature importance and explanation stability, and keep audit trails.", mods:"Module 8", does:["SHAP feature-importance monitoring","Explanation stability and consistency checks","Counterfactual and contrastive monitoring","Audit trails for explainable AI"] },
  { ix:"06", t:"Govern fairness", over:"Track bias, fairness, and compliance for responsible ML.", p:"Teams measure fairness across groups, watch for bias drift after retraining, and build the reporting that regulated industries require.", mods:"Modules 9–10", does:["Fairness metrics and disparate-impact analysis","Fairlearn and AI Fairness 360 tooling","GDPR and EU AI Act compliance monitoring","Model health score and responsible-AI reporting"] },
];

export const skills = [
  { n:"01", t:"Data and Concept Drift Detection", d:"Detect data drift, concept drift, and distribution shift using statistical tests and modern detectors before accuracy degrades." },
  { n:"02", t:"Model Performance Metrics Tracking", d:"Track the right performance metrics per model type and per data slice, with thresholds and guardrails for production." },
  { n:"03", t:"Monitoring Infrastructure Setup", d:"Stand up monitoring infrastructure with instrumentation, Prometheus, Grafana, and dedicated ML monitoring platforms." },
  { n:"04", t:"Alerting and Incident Response", d:"Design ML-specific alert rules, route and escalate incidents, and run structured post-incident reviews." },
  { n:"05", t:"Model Retraining and Lifecycle Management", d:"Decide when to retrain, automate pipelines, version models, and deploy updates safely across the model lifecycle." },
  { n:"06", t:"Fairness and Bias Monitoring", d:"Measure fairness across groups, detect bias drift, and meet compliance requirements for responsible production ML." },
  { n:"07", t:"MLOps Observability Integration", d:"Integrate ML monitoring into the wider MLOps and observability stack with tracing, infrastructure-as-code, and health scores." },
];

export const outcomes = [
  "Master data drift and concept drift detection techniques for maintaining model accuracy in production.",
  "Develop comprehensive ML model performance tracking and evaluation workflows.",
  "Build production monitoring infrastructure with dashboards, alerts, and observability tooling.",
  "Apply model retraining strategies and lifecycle management practices for sustained ML performance.",
  "Gain expertise in A/B testing and shadow deployment for safe production model updates.",
  "Learn fairness, bias, and compliance monitoring practices for responsible ML in production.",
];

export const modules = [
  { no:"01", t:"Introduction to ML Model Monitoring", sub:"Why monitoring matters and the monitoring landscape", tag:["foundations"], groups:[{g:"Why ML Model Monitoring Matters",items:["Traditional vs ML model monitoring","How model performance degrades silently","Business and regulatory drivers","Real-world incidents caused by unmonitored degradation"]},{g:"The ML Monitoring Landscape",items:["Key domains: data quality, performance, and fairness","Batch versus real-time ML deployment","Overview of ML monitoring tools and platforms","Positioning monitoring within the MLOps lifecycle"]}] },
  { no:"02", t:"Data Drift and Distribution Shift Detection", sub:"From statistical tests to a production drift system", tag:["detect"], groups:[{g:"Statistical & Advanced Drift Tests",items:["Kolmogorov-Smirnov and Chi-squared tests","Population Stability Index and JS divergence","Wasserstein distance and MMD","ADWIN and Page-Hinkley sequential detection"]},{g:"Drift Monitoring with Evidently",items:["Evidently AI reports for drift and data quality","Target drift and prediction drift monitoring","Reference dataset selection and baselines"]}] },
  { no:"03", t:"Model Performance Metrics and Evaluation", sub:"Metrics, slices, ground truth, and dashboards", tag:["detect"], groups:[{g:"Metrics for Classification & Regression",items:["Accuracy, precision, recall, F1, AUC-ROC","Calibration: reliability diagrams and ECE","MAE, RMSE, MAPE, and residual analysis"]},{g:"Slice-Based Monitoring",items:["Segment-level performance tracking","Automated slice discovery and SLAs","Time-series performance visualisation"]}] },
  { no:"04", t:"Monitoring Infrastructure and Tooling", sub:"Instrumentation, Prometheus, Grafana, and platforms", tag:["operate"], groups:[{g:"Instrumentation & Logging",items:["Logging prediction inputs, outputs, and metadata","Sampling strategies for cost-effective logging","Prometheus instrumentation and PromQL"]},{g:"Visualisation & Platforms",items:["Grafana dashboards for ML monitoring","Evidently AI, WhyLabs, and Arize platforms","Integrating platforms with MLOps toolchains"]}] },
  { no:"05", t:"Alerting and Incident Response", sub:"Alert design, routing, runbooks, and reviews", tag:["operate"], groups:[{g:"Alert Rules & Routing",items:["Static and dynamic thresholds for ML signals","Multi-condition alert rules and alert fatigue","Integrating PagerDuty, Opsgenie, and Slack"]},{g:"Post-Incident Reviews",items:["Root cause analysis for ML production incidents","Identifying monitoring gaps from incidents","Corrective actions and monitoring improvements"]}] },
  { no:"06", t:"Model Retraining and Lifecycle Management", sub:"Triggers, pipelines, registries, and deployment", tag:["retrain"], groups:[{g:"Retraining Triggers & Pipelines",items:["Scheduled, performance, and drift-triggered retraining","Automated retraining pipeline architecture","Human-in-the-loop approval workflows"]},{g:"Versioning & Deployment",items:["Model registry and metadata management","Blue-green, canary, and shadow rollouts","Automated rollback triggers"]}] },
  { no:"07", t:"A/B Testing and Shadow Deployment", sub:"Experiments, bandits, and safe validation", tag:["retrain"], groups:[{g:"A/B Testing Principles",items:["Designing controlled A/B experiments for models","Significance, power, and sample size","Traffic splitting and feature flags"]},{g:"Shadow Mode & Bandits",items:["Shadow mode architecture for challenger models","Epsilon-greedy, UCB, and Thompson sampling","Contextual bandits for model selection"]}] },
  { no:"08", t:"Explainability and Interpretability Monitoring", sub:"SHAP, stability, and audit trails", tag:["govern"], groups:[{g:"SHAP & Explanation Stability",items:["Tracking global feature importance over time","Local SHAP for individual prediction audits","Stability and consistency across versions"]},{g:"Audit Trails at Scale",items:["Logging explanations alongside predictions","Explanation versioning tied to model and data","Caching and sampling for high-throughput systems"]}] },
  { no:"09", t:"Bias, Fairness, and Compliance Monitoring", sub:"Fairness metrics, bias drift, and regulation", tag:["govern"], groups:[{g:"Fairness Concepts & Detection",items:["Demographic parity, equalised odds, individual fairness","Disparate-impact analysis on production outputs","Fairlearn and IBM AI Fairness 360 tooling"]},{g:"Bias Drift & Compliance",items:["Tracking fairness metric trends over time","GDPR, EU AI Act, and sector-specific requirements","Model cards and governance review processes"]}] },
  { no:"10", t:"Building a Scalable MLOps Monitoring Strategy", sub:"Architecture, model fleets, cost, and a capstone", tag:["foundations","operate"], groups:[{g:"Architecture & Model Health Score",items:["Centralised versus federated monitoring","Combining drift, performance, fairness, and latency","Threshold-based health-score alerting"]},{g:"Capstone: Enterprise Monitoring System",items:["Design a monitoring system for a model fleet","Implement drift detection, alerts, and dashboards","Present architecture and runbooks to stakeholders"]}] },
];

export const audience = [
  { r:"ML Engineers & Data Scientists", g:"mlds" },
  { r:"MLOps & DevOps Engineers", g:"mlops" },
  { r:"AI Platform & Infrastructure Engineers", g:"mlops" },
  { r:"Data Engineers Supporting ML Pipelines", g:"dataprod" },
  { r:"AI Product Managers", g:"dataprod" },
  { r:"Analytics Engineers & Data Architects", g:"dataprod" },
];

export const modes = [
  { h:"Virtual / online", d:"Expert-led live sessions delivered anywhere, with consistency and easy scheduling.", li:["Delivered anywhere worldwide","Standardised content for consistent outcomes","Join from your own workspace, no travel","Scales to large groups across sites","Interactive tools keep remote learners engaged"] },
  { h:"On-site (in-house)", d:"Immersive, instructor-led learning at your office.", li:["Trainers run face-to-face at your office","Setup and content tailored to your workplace and tools","Group exercises drive collaboration","Live demos plus hands-on practice","Direct trainer access to clarify doubts"] },
  { h:"Off-site", d:"Focused, instructor-led group learning away from everyday distractions.", li:["We host your teams at a venue of your choice","Built-in group activities for bonding","Full uninterrupted schedule for focus and retention","Boosts morale and signals commitment"] },
];

export const why = [
  { ic:"🎓", t:"Experienced Trainers", d:"Trainers from a vetted global network bring years of industry expertise, keeping every session practical and impactful." },
  { ic:"✓", t:"Proven Quality", d:"With a strong global track record, Edstellar is known for quality and engaging delivery." },
  { ic:"⚙️", t:"Industry-Relevant Curriculum", d:"Programmes are built by experts to match the demands of today's industry." },
  { ic:"🧩", t:"Fully Customisable", d:"Every programme can be tailored to your organisation's goals and your production stack." },
  { ic:"🤝", t:"Comprehensive Support", d:"We provide pre- and post-session support for a complete learning experience." },
  { ic:"🌐", t:"Global, Multilingual Delivery", d:"We deliver across multiple locations and languages to support diverse global teams." },
];

export const quotes = [
  { q:"Edstellar's virtual ML Model Monitoring training gave our ML platform team the operational discipline needed to manage production models at scale. Within 60 days, we deployed a centralised drift monitoring system across 40 production models, reduced undetected degradation incidents by 70%, and cut mean time to detect from 3 weeks to under 48 hours.", w:"Suresh Raghavan", r:"Head of ML Platform · Global Insurance Technology Company" },
  { q:"The onsite training was exactly what our data science and engineering teams needed to operate production models responsibly. Post-training, we built alerting and retraining pipelines that reduced model-related incidents by 55% in the first quarter.", w:"Meghna Pillai", r:"VP of AI Operations · Leading Retail Technology Enterprise" },
  { q:"We ran our entire ML and MLOps team through Edstellar's intensive programme off-site. Our model health dashboard now covers 100% of production models and compliance audit prep dropped by 40%.", w:"Deepa Krishnan", r:"Chief Machine Learning Officer · Multinational FinTech Group" },
  { q:"Edstellar's IT and technical training programmes have been instrumental in strengthening our engineering teams and building future-ready capabilities. The hands-on approach and expert guidance improved technical depth, problem-solving, and execution across projects.", w:"Aditi Rao", r:"L&D Head · Global Technology Company" },
];

export const faqs = [
  { q:"What is ML Model Monitoring training?", a:"It is an instructor-led corporate training programme that teaches teams how to keep production machine learning models accurate, reliable, fair, and compliant over time. It covers the full monitoring lifecycle: data and concept drift detection, performance tracking, alerting and incident response, retraining and lifecycle management, A/B testing, explainability, and fairness and compliance monitoring." },
  { q:"How long is the training and what is the format?", a:"The programme typically runs 16 to 24 hours, instructor-led, delivered virtually, onsite, or offsite, in 10+ languages, and is fully customisable to your team's schedule, experience level, and production stack." },
  { q:"Which tools and techniques does the course cover?", a:"Hands-on labs use real production tooling, including Evidently AI, Prometheus, and Grafana, alongside drift tests such as Kolmogorov-Smirnov and Population Stability Index, SHAP for explainability, and Fairlearn and AI Fairness 360 for fairness monitoring." },
  { q:"Who should attend?", a:"It suits ML engineers and data scientists, MLOps and DevOps engineers, AI platform and infrastructure engineers, data engineers supporting ML pipelines, AI product managers, and analytics engineers and data architects." },
  { q:"What are the prerequisites?", a:"Participants should have experience in machine learning model development and Python programming." },
  { q:"Do participants receive a certificate?", a:"Yes. On successful completion, employees receive an Edstellar course completion certificate. The curriculum is fully customised to your industry, tools, and production environment." },
];

export const related = [
  { t:"LLM Observability Training", d:"16 – 24 hrs" },
  { t:"MLOps for LLMs Training", d:"12 – 24 hrs" },
  { t:"AI Decision Support Systems Training", d:"16 – 24 hrs" },
  { t:"Vector Database for AI Systems Training", d:"12 – 24 hrs" },
  { t:"Machine Learning with Scikit-Learn Training", d:"16 – 24 hrs" },
  { t:"Implementing an AI Management System Training", d:"16 – 24 hrs" },
];
