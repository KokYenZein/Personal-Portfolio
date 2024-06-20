import { Post } from '@/types';

export const posts: Post[] = [
  {
    id: 1,
    title: 'Unravelling the Wonders of Particle Swarm Optimization',
    publishedAt: '22 October 2023',
    thumbnailUrl: '/images/posts/post-thumbnail-1.png',
    imageUrl: '/images/posts/post-01.png',
    authorName: 'Yen Zein',
    content: `
    <h2>Introduction</h2>
      <p>Particle Swarm Optimization (PSO) stands at the forefront of bio-inspired search algorithms, offering a unique approach to solving minimization or maximization problems. Drawing inspiration from the collaborative foraging behavior of fish and birds, PSO empowers particles to share their discoveries, collectively striving for optimal solutions. This article delves into the intricacies of PSO, shedding light on its mathematical foundations, exploration-exploitation trade-offs, and diverse real-world applications.</p>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog1/PSO.gif" alt="PSO algorithm visualization" />
      </div>
      
      <h2>The Mathematical Model</h2>
      <p>Assume we have...</p>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog1/equation1.png" alt="equation1" width="300" />
      </div>
      <p>During program execution, the algorithm keeps track of...</p>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog1/equation2.png" alt="equation2" width="500" />
      </div>
      <p>At each iteration, each particle updates its position by summing the old position and current velocity.</p>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog1/equation3.png" alt="equation3" width="300" />
      </div>
      <p>The Velocity is more complicated. We have to sum up each component:</p>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog1/equation4.png" alt="equation4" width="600" />
      </div>
      <ul>
        <li>The Inertia component represents the continual velocity of a physical particle; where w is denoted as the inertia weight constant.</li>
        <div style='display: flex; justify-content: center;'>
          <img src="/images/blog1/equation5.png" alt="equation5" width="200" />
        </div>
        <li>The issue is we have to consider the personal factor where each particle has previous personal best positions. The Cognitive component is a product of the cognitive coefficient (c1), a random number between 0 and 1 to give the erratic behaviour (r1) and the difference between the personal best position and the current position of particle i, which produces the vector direction to the personal best position.</li>
        <div style='display: flex; justify-content: center;'>
          <img src="/images/blog1/equation6.png" alt="equation6" width="350" />
        </div>
        <li>Similar to the Cognitive component, we have to consider the social factor where each particle tends to follow the swarm. This component is a product of the social coefficient (c2), a random number between 0 and 1 to give the erratic behaviour (r2) and the difference between the global best position of all particles and the current position of particle i, which produces the vector direction to the global best position.</li>
        <div style='display: flex; justify-content: center;'>
          <img src="/images/blog1/equation7.png" alt="equation7" width="350" />
        </div>
        </ul>
      <p>This iterative process, driven by cognitive and social coefficients (c1 and c2) and an inertia weight constant (w), facilitates a dynamic balance between exploration and exploitation. By incorporating randomness and collective intelligence, PSO navigates complex problem landscapes with remarkable efficiency.</p>

      <h2>Exploring the Exploration-Exploitation Trade-off</h2>
      <p>Exploitation involves choosing the best-known option based on past experiences, while Exploration involves trying out new options that may lead to better outcomes.</p>
      <p>The effect of changing each hyperparameter (w, c1, and c2) on convergence can be explored via simulation.</p>
      <h4>Evaluating w=0, w=0.5, w=1</h4>
      <div style="display: flex; justify-content: center;">
        <img src="/images/blog1/PSO_w0.gif" alt="PSO w=0" width="400" height="400" />
        <img src="/images/blog1/PSO_w0.5.gif" alt="PSO w=0.5" width="400" height="400" />
        <img src="/images/blog1/PSO_w1.gif" alt="PSO w=1" width="400" height="400" />
      </div>
      <ul>
        <li>In PSO, the inertia weight constant (w) plays a pivotal role in balancing the exploration and exploitation aspects of the algorithm.</li>
        <li>When w=0, the particles entirely discard their previous velocities, leading to a focus on exploitation. Conversely, when w=1, particles heavily weigh their previous velocities, favoring exploration.</li>
        <li>The key to harnessing the power of PSO lies in dynamically adjusting w during program execution. Starting with w=1 encourages broad exploration, allowing particles to traverse the search space comprehensively. As the algorithm progresses and particles begin to converge towards the global minimum, w can be gradually decreased. Reducing w to 0.8, then to 0.5, and even lower to 0 as particles approach the global minimum enables a nuanced balance between exploration and exploitation.</li>
        <li>This dynamic adjustment ensures that PSO explores extensively in the beginning, gradually refines its solutions, and converges effectively towards the optimal solution as the iterations progress.</li>
      </ul>

      <h4>Evaluating c1=0 and c2=2 vs c1=2 and c2=0</h4>
      <div style="display: flex; justify-content: center;">
        <img src="/images/blog1/PSO_c10_c22.gif" alt="PSO c1=0 and c2=2" width="400" height="400" />
        <img src="/images/blog1/PSO_c12_c20.gif" alt="PSO c1=2 and c2=0" width="400" height="400" />
      </div>
      <ul>
        <li>In PSO, adjusting the cognitive coefficient (c1) and social coefficient (c2) critically determines the equilibrium between exploration and exploitation.</li>
        <li>When c1=0 and c2=2, the algorithm emphasizes exploration, encouraging particles to heavily explore the search space. This heightened exploration allows the algorithm to converge effectively as it diligently searches for optimal solutions.</li>
        <li>In stark contrast, with c1=2 and c2=0, the emphasis shifts entirely to exploitation. In this scenario, particles prioritize their initial velocities and personal best positions, sidelining the global best position. This high exploitation approach often leads to premature convergence, hindering the algorithm's ability to thoroughly explore the search space.</li>
        <li>The delicate balance between c1 and c2 plays a pivotal role in ensuring PSO strikes an optimal ratio between exploration and exploitation, thus enabling it to converge efficiently while avoiding premature convergence pitfalls.</li>
      </ul>

      <h2>Efficiency and Parallelization</h2>
      <p>PSO's efficiency stems from its independence from the gradient of the objective function. This characteristic makes it suitable for functions that are challenging to differentiate. Additionally, the algorithm's parallelizability enhances its scalability. Each particle's update can occur independently in parallel, significantly reducing computation time. PSO's compatibility with parallel processing architectures, such as map-reduce, amplifies its utility in large-scale optimization tasks.</p>

      <h2>Real-world Applications</h2>
      <p>Beyond theoretical prowess, PSO finds practical applications across various domains. One notable application involves dimensionality reduction in classification tasks. By integrating PSO with classifiers like Decision Trees and K-Nearest Neighbors, researchers enhance the accuracy and efficiency of anomaly detection systems. The collaborative nature of PSO allows it to adapt to intricate patterns within datasets, making it a valuable asset in data-driven decision-making processes.</p>

      <h2>Conclusion</h2>
      <p>Particle Swarm Optimization stands as a testament to the ingenuity of nature-inspired algorithms. Its ability to balance exploration and exploitation, coupled with its efficiency and adaptability, renders it indispensable in modern problem-solving paradigms. As technology advances, PSO continues to inspire novel solutions, empowering researchers and practitioners to navigate the complexities of optimization problems with finesse and efficacy.</p>
    `,
  },
  {
    id: 2,
    title: 'Comparing Classical Machine Learning Models',
    publishedAt: '27 December 2023',
    thumbnailUrl: '/images/posts/post-thumbnail-2.png',
    imageUrl: '/images/posts/post-02.png',
    authorName: 'Yen Zein, Tian, Zach',
    content: `
      <p> Navigating through a plethora of machine learning models presents a challenge in identifying the optimal one for our dataset. Given the nature of our dataset, which entails cyberattacks on IoT devices, our focus is on discovering a machine learning model that not only delivers commendable performance but also operates efficiently with low memory usage on IoT devices. In our exploration, we aim to analyze the effectiveness of different algorithms across on classifying 2, 8, and 34 classes within the dataset. </p>

      <h2> Dataset </h2>
      <p> The dataset is comprised of various cybersecurity attacks against IoT devices, collected by The Canadian Institute for Cybersecurity 
      <a href="https://www.unb.ca/cic/datasets/iotdataset-2023.html" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">CIC IoT Dataset 2023</a> <br/> 
      When framing the classification problem, we decided to create three independent data-frames categorized into different classes. </p>
      <ul> 
        <li> 2 Classes: This data-frame contains the dataset on labels which are either an Attack (malicious against IoT devices) or Benign (not harmful). </li>
        <li>
         8 Classes: This data-frame contains the dataset on labels which are:
         <ul>
          <li> Benign (not harmful) </li>
          <li> Distributed Denial-of-Service (DDOS) </li>
          <li> Denial-of-Service (DoS) </li>
          <li> Recon </li>
          <li> Exploiting Web-Based Vulnerabilities </li>
          <li> Spoofing Communication </li>
          <li> Brute-Force </li>
          <li> Mirai </li>
         </ul>
        </li>
        <li> 34 Classes: This data-frame contains the dataset on all labels which can be found in more detail  
        <a href="https://www.mdpi.com/1424-8220/23/13/5941#sec3-sensors-23-05941" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">here</a></li>
      </ul>

      <h2> The Models </h2>
      <p> We trained 7 classical machine learning models: </p>
      <ul>
        <li> Logistic regression </li>
        <li> Adaboost </li>
        <li> Gradient boost </li>
        <li> K-nearest neighbours (KNN) </li>
        <li>
        Support vector machines
          <ul>
            <li> Balanced support vector machines (BSVM) </li>
            <li> Weighted support vector machines (WSVM) </li>
          </ul>
        </li>
        <li> XGBoost </li>
        <li>
        Random forest
          <ul>
            <li> Default random forest </li>
            <li> Weight-based balanced random forest </li>
            <li> Bagging-based balanced random forest </li>
          </ul>
        </li>
      </ul>

      <h2>Methodology</h2>
      <p>
        We first sampled 400,000 datapoints from the dataset, where the class distributions were preserved when under-sampling. We then distributed this into an 80% training set and a 20% testing set, which were normalized before the training process.
        <br />
        Building off the work from other sub-teams, we selected the most important 22 features to use in our dataset:
      </p>
      <ul>
        <li>duration</li>
        <li>srate</li>
        <li>drate</li>
        <li>syn_flag_number</li>
        <li>psh_flag_number</li>
        <li>ack_flag_number</li>
        <li>ack_count</li>
        <li>syn_count</li>
        <li>rst_count</li>
        <li>header_length</li>
        <li>https</li>
        <li>ssh</li>
        <li>flow_duration</li>
        <li>avg</li>
        <li>max</li>
        <li>tot_sum</li>
        <li>min</li>
        <li>iat</li>
        <li>magnitude</li>
        <li>radius</li>
        <li>variance</li>
      </ul>
      <p>
        We also kept as many hyper-parameters as possible in common between the models, where we kept each model the same for each classes (2 classes, 8 classes, 34 classes):
      </p>
      <ol>
        <li>Logistic Regression: (C = 1, max_iter=500, solver='lbfgs', penalty='l2', random_state=42)</li>
        <li>KNN: (n_neighbors = 8)</li>
        <li>Support Vector Machines: (C=1, kernel = 'rbf', gamma = 'scale')</li>
        <li>Random Forest: (n_estimators=100)</li>
        <li>Adaboost: (n_estimators=100, learning_rate=1, random_state=42)</li>
        <li>Gradientboost: (n_estimators=100, learning_rate = 1, max_depth = None)</li>
        <li>XGBoost: (n_estimators=100, learning_rate = 1, booster = 'gbtree', random_state = 42, max_depth = 13, max_samples = 0.9)</li>
        <li>Default random forest: (n_estimators=100)</li>
        <li>Weight-based balanced random forest: (n_estimators=100, class_weight='balanced')</li>
        <li>Bagging-based balanced random forest: (n_estimators=100, sampling_strategy='all', replacement=True)</li>
      </ol>

      <h2>Evaluation Metrics</h2>
      <p>
        The evaluation of different ML models and configurations is conducted based on evaluation metrics. TP represents the True Positives, TN the True Negatives, FP the False Positives, and FN the False Negatives.
      </p>
      <ul>
        <li>Accuracy: responsible for evaluating the classification models by depicting the proportion of correct predictions in a given dataset and is based on the following expression
        <br />(TP + TN) / (TP + TN + FP + FN)</li>
        <li>Precision: the ratio of correctly identified labels to the total number of positive classifications
        <br />TP / (TP + FP)</li>
        <li>Recall: the ratio of correctly identified labels to the total number of occurrences of that particular label
        <br />TP / (TP + FN)</li>
        <li>F1 Score: Harmonic mean of precision and recall for a more balanced summarization of model performance
        <br />2 * (Precision * Recall) / (Precision + Recall)</li>
      </ul>

      <h2> Results </h2>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog2/accuracy_scores.png" alt="" width="800" />
      </div>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog2/precision_scores.png" alt="" width="800" />
      </div>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog2/recall_scores.png" alt="" width="800" />
      </div>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog2/F1_scores.png" alt="" width="800" />
      </div>
      <div style='display: flex; justify-content: center;'>
        <p> Figure 1. Results obtained in the classification process conducted using different machine learning models </p>
      </div>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog2/table_scores.png" alt="" width="1200" />
      </div>
      <div style='display: flex; justify-content: center;'>
      <p> Table 1. Results obtained in the classification process conducted using different machine learning models (illustrated in Figure 1) </p>
      </div>
      
      <p>
      Overall, many models performed reasonably, like KNN, SVMs, and even Logistic regression. However we see that boosting methods performs horribly. The best performing model is by far random forests
      <br />
      As expected, the models perform best for binary classification, especially in terms of accuracy where we see 98% across the board. However, when we look at F-1 Score, we see less consistency across the models. SVMs and KNN consistently perform the best, but it is important to note that they are memory-intensive compared to other models.
      <br />
      As we increase the number of classes, we observe that boosting methods are the worst performers while KNN and SVMs continue to perform well. However, if we are to take into consideration memory efficiency which is vital for running on an IoT device, Random Forests provide the best combination of performance and efficiency.
      </p>
      
      <h2> Discussion </h2>
      <p> To illustrate how these models are performing for each class, we can display the confusion matrix for K-nearest neighbours and Default random forests in the case of multiclass classification of 8 classes: </p>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog2/KNN_confusion_matrix.png" alt="" width="600" />
      </div>
      <div style='display: flex; justify-content: center;'>
        <p> Figure 2. Confusion matrix for KNN in the case of multiclass classification of 8 classes </p>
      </div>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog2/RF_confusion_matrix.png" alt="" width="600" />
      </div>
      <div style='display: flex; justify-content: center;'>
        <p> Figure 3. Confusion matrix for Default Random Forest in the case of multiclass classification of 8 classes </p>
      </div>
      <p> In both cases, it is possible to observe that some classes such as DDoS and Mirai are very well classified, usually those with very high support. On the other hand, classes such as Web and BruteForce have a very high misclassification rate due to having very low support. </p>

      <h2> Limitations </h2>
      <ul>
        <li> We ran our models on Kaggle, which was quite slow, taking over 10 hours for 400,000 datapoints. </li>
        <li> We used a small subset (5%) of the full dataset, with some classes having a support of <10 in the 34 class case, leading to poorer performance than if we had used the full dataset. </li>
        <li> Some models (the Random Forest and XGBoost ones in particular) did not have an opportunity to go through a round of hyperparameter tuning, which means their performance is not as high as it could be. </li>
        <li> We did not consider the computational or memory costs of utilizing the models. </li>
      </ul>

      <h2> Conclusion </h2>
      <p> In conclusion, the growing significance of the Internet of Things (IoT) in contemporary society underscores the need for robust security solutions. In our exploration of various machine learning models, we have discerned that random forests emerge as a particularly compelling choice. Not only do they exhibit computational and memory efficiency, but they also prove to be adept at classifying cybersecurity attacks on IoT devices. As the technological landscape continues to evolve, the deployment of random forests stands out as a strategic and efficient approach to fortifying IoT operations, ensuring their efficiency, security, and dependability. </p>
    `,
  },
  {
    id: 3,
    title: 'Classical Machine Learning Algorithms',
    publishedAt: '17 November 2023',
    thumbnailUrl: '/images/posts/post-thumbnail-3.png',
    imageUrl: '/images/posts/post-03.png',
    authorName: 'Yen Zein, Tian, Zach',
    content: `
      <p> We tried three main classical machine learning models, namely Logistic Regression, Support Vector Machines (SVMs), and Random Forests. </p>

      <h2>Logistic Regression</h2>
      <h3>1. Introduction</h3>
      <p>Since we’re on the topic of classical machine learning, we ought to include the good ‘ol classic logistic regression. Multinomial logistic regression was performed in sklearn on 8 prediction classes and 46 features: duration, protocol_type, rate, srate, drate, syn_flag_number, psh_flag_number, ack_flag_number, fin_flag_number, fin_count, ack_count, syn_count, rst_count, header_length, rst_flag_number, cwr_flag_number, ece_flag_number, number, http, https, ssh, telnet, smtp, irc, tcp, udp, dhcp, arp, icmp, ipv, llc, dns, flow_duration, urg_count, avg, max, std, tot_size, tot_sum, min, iat, magnitude, weight, radius, covariance, and variance.</p>

      <h3>2. Data Preprocessing</h3>
      <p>Data was scaled, labels were encoded to be integers 0-7, and 100,000 test datapoints and 100,000 training datapoints were sampled.</p>

      <h3>3. Model Training and Evaluation</h3>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog3/LR_evaluation.webp" alt="" width="600" />
      </div>
      <p>Overall performance metrics using logistic regression are not very good.</p>
      <p>Even after tuning hyper-parameters like solvers, penalties, and “C” (inverse of regularization), performance metrics are under 0.85, where metrics other than accuracy perform noticeably worse.</p>
      <p>Increasing the number of iterations has the greatest impact on performance, but it is not efficient to just merely increase the number of iterations.</p>
      <p>Also, since the dataset has thousands of data points, this means that we are also misclassifying thousands of cases.</p>
      <h4>Confusion Matrix</h4>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog3/LR_confusion_matrix.png" alt="" width="600" />
      </div>
      <p>Grid Search was used to find the optimal hyper-parameter “C” (inverse of regularization strength), which was C = 1.</p>
      <p>We see a variation in the accuracy of predictions. <br /> 
      Dos and DDos are not well identified, commonly being misidentified for each other and with other labels. <br />
      Also, we see that Web is never correctly identified, only being misidentified for DDos.</p>

      <h3>4. Conclusion</h3>
      <p>Logistic Regression is often a good starting point to test out a dataset. However, it performs rather badly on this dataset. Although we can improve the model by further optimizing hyper-parameters or increasing the size of the training dataset, it is clear that logistic regression is not the best model for the task at hand.</p>

      <h2>Support Vector Machines</h2>
      <h3>1. Introduction</h3>
      <p>This report presents an analysis of Support Vector Machines (SVM) performance in classifying network intrusion data. The dataset used comprises 200,000 randomly sampled data points with eight distinct labels: "DDoS," "DoS," "Mirai," "Benign," "Spoofing," "Recon," "Web," and "BruteForce." The dataset was evenly split into training and testing sets.</p>

      <h3>2. Data Preprocessing</h3>
      <p>All 46 features, excluding "protocol_type," were used for model training. The "protocol_type" feature was either omitted, transformed using LabelEncoder(), or converted using pd.getDummy().</p>

      <h3>3. Model Training and Evaluation</h3>
      <h4>3.1 Balanced SVC Model</h4>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog3/BSVC_table.jpeg" alt="" width="500" />
        <img src="/images/blog3/BSVC_confusion_matrix.jpeg" alt="" width="500" />
      </div>
      <div style='display: flex; justify-content: center;'>
        <p> Balanced SVC model </p>
      </div>
      <p>A balanced SVM model was trained with class_weight set to "balanced." Grid search was performed on the following parameters: {"C": [0, 0.01, 0.1, 0.5, 1, 1.5, 2, 2.5, 3], "kernel": ["rbf", "sigmoid"], "gamma": ["scale", "auto"]}. The best parameters found were {C = 3, kernel = "rbf", gamma = "scale"}.</p>
      <p>However, the model's performance on the test dataset was suboptimal, especially for "DDoS" and "DoS" with Recall scores of 0.64 and 0.88, respectively. Mirai performed exceptionally well with only 28 misclassified out of 5657 datapoints.</p>

      <h4>3.2 Adjusted Class Weights SVC Model</h4>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog3/WSVC_table.jpeg" alt="" width="500" />
        <img src="/images/blog3/WSVC_confusion_matrix.jpeg" alt="" width="500" />
      </div>
      <div style='display: flex; justify-content: center;'>
        <p> Adjusted Class Weights SVC model </p>
      </div>
      <p>A second SVM model was trained with adjusted class weights calculated based on the log_10 counts of each label.</p>
      <p>Despite adjusting class weights, the model's overall performance did not show significant improvement. Notably, the Recall score for "Spoofing" decreased from 0.78 to 0.66 compared to the balanced SVC model.</p>

      <h3>4. Analysis and Recommendations</h3>
      <p>Insufficient Training Data: The models' performance could be improved with a larger training dataset instead of a 100,000 training dataset, especially for labels like "Web" and "BruteForce," which had very few training samples.</p>

      <h2>Random Forests</h2>
      <h3>1. Introduction</h3>
      <p>One of the first types of models that came to mind were Random Forests for their good balance of predictive and computational performance. They tend to have good out-of-the-box performance and are generally resistant to over-fitting. Additionally, the question of computational performance is of particular importance given that this problem is formulated to involve running on IoT devices--RFs have the benefit of being embarrassingly parallel not only in training but also in prediction.</p>

      <h3>2. Data Preprocessing</h3>
      <p>The training dataset is 1% of the original dataset, randomly under-counted with class distributions preserved from  
      <a href="https://www.kaggle.com/code/madhavmalhotra/creating-a-smaller-dataset-for-ciciot2023" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">this notebook</a>.</p>
      <p> Additional preprocessing includes filtering variables to the 22 identified as most important per 
      <a href="https://www.kaggle.com/code/madhavmalhotra/genetic-algorithm-feature-selection" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">this notebook</a>.</p>

      <h3>3. Default Model Training & Performance</h3>
      <p>Random Forests are known for performing pretty well right out of the box, so let's see how well it does with all the default settings.</p>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog3/RF_table.png" alt="" width="500" />
      </div>

      <h4>3.1 Distributions & Statistics</h4>
      <p>As expected, that's actually not too terrible! We should be careful, however, not to rejoice too much in those 1.00 weighted averages, as they're somewhat misleading.</p>
      <p>Note the supports (i.e. frequencies) in the classification report: this dataset is highly imbalanced. There's roughly a 3.5-fold difference in magnitude between the largest and smallest classes.</p>
      <p>The way that sklearn's weighted statistics work in multiclass problems is by taking a weighted average of any statistic using the support of a class to weight it. That means majority classes will have a disproportionate effect, which compounds on the majority bias most models will take on in imbalanced classification. Although RF is somewhat resistant to class imbalance compared to most classical ML models, it's not completely immune.</p>
      <p>Instead, let's look at the macro and per-class statistics, which evenly weight each class' stats regardless of how frequently they show up in data. There we have much more modest (but still respectable) macro averages, and a particularly high macro precision. Examining the classes, we can see the performance of minority classes, specifically the two smallest BruteForce and Web classes dragging down others.</p>
      <p>One last thing to note before moving on from this classification report is that this model has high precision and relatively low recall, especially in its minority classes. In other words, it can be said to be conservative in its predictions, which ostensibly sounds like a good thing. Tweaking where the model lies on the precision vs recall tradeoff curve is something to possibly revisit in the future.</p>
      <p>Briefly looking at the overall class distribution, more things about Web and BruteForce jump out, namely just how few samples there are. The latter at least has more than 100, but the former only has 55 total. That's sketchily few number of samples to work with, even without an imbalanced dataset.</p>
      <p>In part, this tiny amount is to be expected given the tiny slice of the real data we're working with in this exploration. Ideally, it's an issue that mostly goes away when training a "real" model using the full dataset but let's put a pin in that issue for now and try to forge on as best we can. If we can squeeze some reasonable performance just using this small, 1% subset of the dataset then we should be in good shape for the full dataset.</p>

      <h4>3.2 Confusion Matrix</h4>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog3/RF_confusion_matrix.png" alt="" width="1100" />
      </div>
      <p> We'll look at the confusion matrices more later, but this is the one for our initial model. Of particular note are: </p>
      <ul>
        <li> Web attacks (which the model performs worst on) are mostly confused with Spoofing attacks </li>
        <li> Web attacks are never correctly identified as Web attacks specifically,but are still mostly recognized as malicious traffic </li>
        <li> Of the incorrectly classified samples, Web, Spoofing, Recon, and Brute Force attacks are most likely to be classified as Benign i.e. they are most likely to slip through a filter using this model </li>
      </ul>

      <h3>4. Balancing the Dataset</h3>
      <p> There are lots of general methods to work with imbalanced datasets: under-sampling, oversampling, SMOTE, etc. All these general methods work on a principle of resampling the training data, and come with some pretty significant downsides. Before investigating the effects of those methods, let's first try some RF-specific balancing methods. </p>
      <p> In particular, I'll look at the two methods outlined in this 
      <a href="https://statistics.berkeley.edu/sites/default/files/tech-reports/666.pdf" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">paper</a> </p>
      <ol>
        <li> Weight-based balancing (Referred to as "Weighted Random Forest" in the paper) </li>
        <li> Bagging-based balancing (Referred to as "Balanced Random Forest" in the paper </li>
      </ol>

      <h4>4.1 Weight-Based Balancing</h4>
      <p> First let's look at weight-based balancing. </p>
      <p> The primary idea is to modify misclassification penalties when training individual trees, with misclassified minority classes providing a higher penalty than majority classes. That way, the majority classes (ostensibly) do not "overwhelm" minority classes in scoring </p>
      <p> sklearn supports this method by default with the class_weight parameter. </p>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog3/WRF_table.png" alt="" width="500" />
      </div>

      <h4>4.2 Bagging-Based Balancing</h4>
      <p> Now let's look at bagging-based balancing. </p>
      <p> In essence, it involves modifying the distribution of samples selected during the bagging stage of training. When sampling the dataset, it down-samples majority classes and potentially upsamples the minority classes resulting in a more balanced dataset for trees to be trained on. No other steps of the processes are affected. </p>
      <p> While this may seem identical to simply resampling the base training set, as the paper shows, performance actually does differ in favor of resampling during bagging. The exact mechanisms of why are definitely out of the scope of this notebook, but it serves as a reminder that lots of aspects of ML can be very counterinuitive. </p>
      <p> This is something that can be implemented ourselves with some effort, but thankfully the imblearn package's BalancedRandomForestClassifier implements this exact balancing method. </p>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog3/BRF_table.png" alt="" width="500" />
      </div>

      <h4>4.4 Comparing Confusion Matrices</h4>
      <p> The performance here using a bagging-focused balancing method seems to be noticeably worse than the weight-focused method, except for recall for the two smallest classes (BruteForce and Web). However, let's examine the two confusion matrices and see if there's anything that jumps out. </p>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog3/RF_recall.png" alt="" width="1100" />
      </div>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog3/RF_precision.png" alt="" width="1100" />
      </div>
      <p> You can see here more clearly the difference in performance between the two models--the top matrices corresponding to recall (i.e. the distribution of labeling among all the True labels from each class) and the bottom to precision (i.e. the distribution of labeling among all the predicted labels of each class). </p>
      <p> Both models were similarly precise for predicting Benign labels, predicting it correctly ~88% of the time it predicts Benign. We will discuss the importance of this class' metrics more later, but for now consider that a misprediction from one malicious class (i.e. not Benign) to another malicious class would be substantially less harmful than wrongfully predicting a malicious connection as a benign one or vice versa. </p>
      <p> The models perform almost identically when it comes to three classes (DDoS, DoS, and Mirai) and are on opposite ends of the precision-recall spectrum when it comes to the four weakest performing classes (BruteForce, Recon, Spoofing, and Web). </p>
      <p> While the precision of predicting Benign labels is substantially higher for the weight-based model, giving it a definite edge, the two models are similar enough in performance that it merits examining both balancing methodologies going forward instead of discarding one in favor of the other. </p>

      <h3>5. Misclassification Analysis</h3>
      <p> OK, so why do the classifiers suck on BruteForce and Web? The pithy answer, of course, is "not enough samples". But let's try to look a little deeper at the misclassifications to see if there's anything we can't use. </p>

      <h4>5.1 PCA</h4>
      <p> First, let's try doing some quick and dirty PCA to see if anything jumps out at us immediately. Maybe there'll be an easy win in finding an odd distribution or boundary we can use. </p>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog3/PCA.jpeg" alt="" width="600" />
      </div>
      <p> Okay, so this plot is completely incomprehensible. We could fiddle some more with the opacity and labeling, but before that let's just graph the classes we're interested in digging more into (i.e. Web and BruteForce) </p>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog3/PCA_attacks.png" alt="" width="600" />
      </div>
      <p> This graph is still pretty bad and unhelpful, and while we could fiddle with opacities and distributions, ultimately doing PCA doesn't seem like it will lead to much--the data's "true dimensionality" is likely high enough that it can't be represented graphically, and other teams have already done the work of determining feature importances and reducing dimensionality. </p>
      
      <h4>5.2 Per-Feature Histograms</h4>
      <p> Instead, let's look at the distributions of misclassified instances. Specifically, let's fix a class and observe the distribution of each feature from misclassified (false negative and false positive) samples. 8 labels is few enough that we can reasonably separate out what each misclassification is actually classified as. </p>
      <div style='display: flex; justify-content: center;'>
        <img src="/images/blog3/feature_histograms.png" alt="" width="1100" />
      </div>
      <p> While there are a lot of graphs, they are much more readable than the earlier PCA graphs. We can do this process on each class, but looking at Web, the class with the worst performance overall, is a good starting point. Of particular note is the island of misclassifications around iat values of ~0.75, with no intermingled true positives. </p>
      <p> This could be a result of individual trees within the forest coming up against depth or leaf hyperparamter restrictions, but the models were trained with default settings i.e. no such restrictions. A possible alternative explanation could be issues with the entropy loss, as it appears that the misclassifications on that island are evenly split between DDoS and DoS labels. Additionally, the decision trees within random forests find boundary values rather than intervals at each node, the latter being the true boundary. For trees to do so, they require at least two nodes, and so the split (and thus loss calculation at that split) cannot be atomic. Both issues could lead to an artificially high loss when splitting on iat values, and difficulty finding a clean boundary. </p>
      <p> There are lots of directions to go with these histograms, and it’ll be a key focus when it comes to tuning the performance of these models. </p>

      <h2>Conclusions & Next Steps</h2>
      <h3>1. Ensemble Models</h3>
      <p>Our decision to shift our focus towards ensemble models, specifically Random Forests, XGBoost, AdaBoosting, and GradientBoosting, is rooted in the superior performance observed compared to other algorithms such as Logistic Regression and Support Vector Machine (SVM). Despite the theoretical strength of SVM, its impractical training time became a substantial bottleneck, rendering it virtually impossible to train models efficiently, especially with large datasets like the 500,000 datapoints on Kaggle. On the contrary, ensemble models demonstrated remarkable efficacy, with Random Forests standing out by providing excellent results in a fraction of the time. This shift aligns with our commitment to not only optimize for model accuracy but also consider computational efficiency, making ensemble methods a pragmatic choice for our next steps in the pursuit of effective and scalable machine learning solutions.</p>

      <h3>2. Tuning Fit</h3>
      <p>Comparing the performance of the three Random Forest models on test and training data, it’s safe to say that the default and weight-based models are heavily overfit.</p>
      <p>This should be completely expected given the default hyperparameter settings of infinite depth and zero leaf-size restrictions. While the bagging-based model is quite balanced, as seen earlier its performance metrics on test data are slightly worse than the other two.</p>
      <p>There are several knobs we can use to tune the fit of tree-based models, the most obvious of which is the hyperparameters used when training them.</p>
      <p>Bagging (which we’ve already used implicitly) and boosting are other methods to help tune Random Forests. In general, bagging helps decrease variance and counter overfitting, and boosting helps decrease bias and counter underfitting. Reducing bias may seem almost counterproductive given the state of current models, but given the permissiveness of the default hyperparameters, it’s likely that tuning them is going to result in reducing overfitting (and thus increasing bias). So it’ll be good to keep a method to help counter underfitting in our back pocket.</p>
      <p>Importantly, bagging and boosting are not mutually exclusive. It’s entirely possible to combine the two by adding bagging to sample selection when growing trees during the second stage of boosting. Of course, by the NFL theorem this may not be best, but it’s worth a shot.</p>

      <h3>3. Feature Engineering</h3>
      <p>As seen in the histogram of misclassification feature distributions, there are some ranges of values with purely incorrect classifications such as with iat in Web misclassifications. Creating obvious features to split on derived from those ranges could result in better (i.e. more generalizable) splits, which will become even more important as we tune our models to decrease variance (and thus increase bias).</p>

      <h3>4. Chaining Models</h3>
      <p>Our next strategic move in training models involves the implementation of a chained model approach to enhance classification accuracy. By merging labels and grouping distinct attack types, we aim to augment the model's capacity to generalize and classify unseen data more precisely. Leveraging insights from Random Forests, where notable predictive performance was observed for DDoS, DoS, and Mirai attacks, we propose a hierarchical approach. Initially, the model predicts whether each datapoint represents an attack or benign activity. Subsequently, it further refines its predictions by classifying the specific attack type, creating a cascading structure of predictions. For instance, the model could be trained and tested on {"Benign", "Attack"} to predict "Attack," followed by predicting {"DDoS", "DoS", "Mirai", "pooled1"} and subsequently {"Spoofing", "Recon", "pooled2"} to achieve granular attack type classifications such as {"Web", "BruteForce"}. This hierarchical chaining aims to capitalize on the strengths observed in the model's performance for specific attack categories, ultimately optimizing its predictive accuracy across diverse threat scenarios.</p>

      <h3>5. Determining Metrics & Goals</h3>
      <p>As much as we can squeeze tradeoff-free performance improvements out of the models with the aforementioned next steps, ultimately we’re going to hit a wall and will need to decide which performance metrics we want to prioritize. Is it better to improve performance on classifying Benign connections at the expense of malicious ones? Is it worse to misclassify a Benign packet or a malicious packet? Are certain malicious packets more important to capture than others?</p>
      <p>These questions and more deserve an future in-depth post, as not only can they be expanded on in a substantial amount of depth, but also will determine how we ultimately tune our models.</p>
    `,
  },
  // {
  //   id: 4,
  //   title: 'Dolorem dolore est ipsam',
  //   publishedAt: '10 Jan 2022',
  //   thumbnailUrl: '/images/posts/post-thumbnail-4.png',
  //   imageUrl: '/images/posts/post-04.png',
  //   authorName: 'John Doe',
  //   content: `
  //   <p>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
  //             tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
  //             erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
  //             sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
  //             Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
  //             Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
  //             nec
  //           </p>
  //           <blockquote>
  //             A rich text element can be used with static or dynamic content For static content, just drop it into any
  //             page
  //           </blockquote>
  //           <p>
  //             Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
  //             nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
  //             lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
  //             neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
  //             purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
  //             Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
  //             nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
  //             nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
  //             blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
  //           </p>`,
  // },
  // {
  //   id: 5,
  //   title: 'Nesciunt iure omnis dolorem tempora et accusantium',
  //   publishedAt: '01 Jan 2022',
  //   thumbnailUrl: '/images/posts/post-thumbnail-5.png',
  //   imageUrl: '/images/posts/post-05.png',
  //   authorName: 'John Doe',
  //   content: `
  //   <p>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
  //             tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
  //             erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
  //             sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
  //             Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
  //             Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
  //             nec
  //           </p>
  //           <blockquote>
  //             A rich text element can be used with static or dynamic content For static content, just drop it into any
  //             page
  //           </blockquote>
  //           <p>
  //             Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
  //             nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
  //             lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
  //             neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
  //             purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
  //             Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
  //             nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
  //             nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
  //             blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
  //           </p>`,
  // },
  // {
  //   id: 6,
  //   title: 'Optio molestias id quia eum',
  //   publishedAt: '28 Dec 2021',
  //   thumbnailUrl: '/images/posts/post-thumbnail-6.png',
  //   imageUrl: '/images/posts/post-06.png',
  //   authorName: 'John Doe',
  //   content: `
  //   <p>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
  //             tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
  //             erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
  //             sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
  //             Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
  //             Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
  //             nec
  //           </p>
  //           <blockquote>
  //             A rich text element can be used with static or dynamic content For static content, just drop it into any
  //             page
  //           </blockquote>
  //           <p>
  //             Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
  //             nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
  //             lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
  //             neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
  //             purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
  //             Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
  //             nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
  //             nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
  //             blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
  //           </p>`,
  // },
  // {
  //   id: 7,
  //   title: 'Eius et ipsum occaecati dicta aut quaerat',
  //   publishedAt: '21 Dec 2021',
  //   thumbnailUrl: '/images/posts/post-thumbnail-1.png',
  //   imageUrl: '/images/posts/post-01.png',
  //   authorName: 'John Doe',
  //   content: `
  //   <p>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
  //             tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
  //             erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
  //             sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
  //             Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
  //             Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
  //             nec
  //           </p>
  //           <blockquote>
  //             A rich text element can be used with static or dynamic content For static content, just drop it into any
  //             page
  //           </blockquote>
  //           <p>
  //             Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
  //             nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
  //             lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
  //             neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
  //             purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
  //             Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
  //             nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
  //             nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
  //             blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
  //           </p>`,
  // },
  // {
  //   id: 8,
  //   title: 'Dolorum ut in voluptas mollitia et saepe quo animi',
  //   publishedAt: '20 Dec 2021',
  //   thumbnailUrl: '/images/posts/post-thumbnail-2.png',
  //   imageUrl: '/images/posts/post-02.png',
  //   authorName: 'John Doe',
  //   content: `
  //   <p>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
  //             tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
  //             erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
  //             sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
  //             Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
  //             Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
  //             nec
  //           </p>
  //           <blockquote>
  //             A rich text element can be used with static or dynamic content For static content, just drop it into any
  //             page
  //           </blockquote>
  //           <p>
  //             Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
  //             nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
  //             lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
  //             neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
  //             purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
  //             Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
  //             nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
  //             nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
  //             blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
  //           </p>`,
  // },
  // {
  //   id: 9,
  //   title: 'Fugit voluptas sed molestias voluptatem provident',
  //   publishedAt: '11 Dec 2021',
  //   thumbnailUrl: '/images/posts/post-thumbnail-3.png',
  //   imageUrl: '/images/posts/post-03.png',
  //   authorName: 'John Doe',
  //   content: `
  //   <p>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
  //             tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
  //             erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
  //             sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
  //             Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
  //             Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
  //             nec
  //           </p>
  //           <blockquote>
  //             A rich text element can be used with static or dynamic content For static content, just drop it into any
  //             page
  //           </blockquote>
  //           <p>
  //             Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
  //             nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
  //             lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
  //             neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
  //             purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
  //             Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
  //             nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
  //             nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
  //             blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
  //           </p>`,
  // },
  // {
  //   id: 10,
  //   title: 'Adipisci placeat illum aut reiciendis qui',
  //   publishedAt: '10 Dec 2021',
  //   thumbnailUrl: '/images/posts/post-thumbnail-4.png',
  //   imageUrl: '/images/posts/post-04.png',
  //   authorName: 'John Doe',
  //   content: `
  //   <p>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
  //             tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
  //             erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
  //             sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
  //             Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
  //             Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
  //             nec
  //           </p>
  //           <blockquote>
  //             A rich text element can be used with static or dynamic content For static content, just drop it into any
  //             page
  //           </blockquote>
  //           <p>
  //             Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
  //             nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
  //             lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
  //             neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
  //             purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
  //             Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
  //             nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
  //             nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
  //             blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
  //           </p>`,
  // },
  // {
  //   id: 11,
  //   title: 'Iusto eius quod necessitatibus culpa ea',
  //   publishedAt: '9 Dec 2021',
  //   thumbnailUrl: '/images/posts/post-thumbnail-5.png',
  //   imageUrl: '/images/posts/post-05.png',
  //   authorName: 'John Doe',
  //   content: `
  //   <p>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
  //             tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
  //             erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
  //             sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
  //             Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
  //             Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
  //             nec
  //           </p>
  //           <blockquote>
  //             A rich text element can be used with static or dynamic content For static content, just drop it into any
  //             page
  //           </blockquote>
  //           <p>
  //             Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
  //             nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
  //             lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
  //             neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
  //             purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
  //             Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
  //             nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
  //             nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
  //             blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
  //           </p>`,
  // },
  // {
  //   id: 12,
  //   title: 'Neque voluptates ratione',
  //   publishedAt: '8 Dec 2021',
  //   thumbnailUrl: '/images/posts/post-thumbnail-6.png',
  //   imageUrl: '/images/posts/post-06.png',
  //   authorName: 'John Doe',
  //   content: `
  //   <p>
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
  //             tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
  //             erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
  //             sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
  //             Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
  //             Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
  //             nec
  //           </p>
  //           <blockquote>
  //             A rich text element can be used with static or dynamic content For static content, just drop it into any
  //             page
  //           </blockquote>
  //           <p>
  //             Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
  //             nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
  //             lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
  //             neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
  //             purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
  //             Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
  //             nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
  //             nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
  //             blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
  //           </p>`,
  // },
];
