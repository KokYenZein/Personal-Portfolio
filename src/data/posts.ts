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
    title: 'Dolorem eum magni eos aperiam',
    publishedAt: '9 Mar 2022',
    thumbnailUrl: '/images/posts/post-thumbnail-2.png',
    imageUrl: '/images/posts/post-02.png',
    authorName: 'John Doe',
    content: `
    <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
              Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
              Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec
            </p>
            <blockquote>
              A rich text element can be used with static or dynamic content For static content, just drop it into any
              page
            </blockquote>
            <p>
              Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
              nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
              lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
              neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
              purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
              Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
              nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
              blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
            </p>`,
  },
  {
    id: 3,
    title: 'Magnam facilis autem',
    publishedAt: '15 Feb 2022',
    thumbnailUrl: '/images/posts/post-thumbnail-3.png',
    imageUrl: '/images/posts/post-03.png',
    authorName: 'John Doe',
    content: `
    <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet Cras id dui. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis.
              Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis eu pede mollis pretium.
              Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu, semper a, adipiscing
              nec
            </p>
            <blockquote>
              A rich text element can be used with static or dynamic content For static content, just drop it into any
              page
            </blockquote>
            <p>
              Praesent ac sem eget est egestas volutpat. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
              nunc. Curabitur suscipit suscipit tellus. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
              lorem. Etiam rhoncus.Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Pellentesque egestas,
              neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Vestibulum
              purus quam, scelerisque ut, mollis sed, nonummy id, metus Vestibulum ullamcorper mauris at ligula.
              Phasellus consectetuer vestibulum elit. Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut
              nisi.Cum sociis natoque penatibus Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos hymenaeos. Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus
              blandit viverra. Nullam dictum felis eu pede mollis pretium. Curabitur vestibulum
            </p>`,
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
