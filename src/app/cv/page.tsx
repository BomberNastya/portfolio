'use client';

import { Button } from '@/components/ui/Button';

export default function CV() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Print Button */}
      <div className="flex justify-end max-w-[1050px] mx-auto mb-4 print:hidden">
        <Button onClick={handlePrint}>Print CV</Button>
      </div>
      {/* Sheet 1 */}
      <div className="w-[1050px] min-h-[1485px] p-[50px] border border-black mx-auto font-cv text-text-900 text-[20px] leading-none">
        {/* Header */}
        <header className="leading-none">
          <div className="flex justify-between">
            <h1 className="text-[64px] font-bold p-0 leading-none">Anastasiia Balenko</h1>
            <div>
              <h2 className="text-[36px] font-bold p-0 leading-none">FRONTEND DEVELOPER</h2>
              <h3 className="leading-none">7+ years of experience in JavaScript/REACT</h3>
            </div>
          </div>

          {/* Contact Info */}
          <ul className="flex list-none justify-between items-center w-fit mx-auto mt-[20px]">
            <li className="flex gap-[5px] items-center">
              <svg
                height="30px"
                width="30px"
                version="1.1"
                viewBox="0 0 508 508"
                xmlSpace="preserve"
              >
                <circle style={{fill: "#324A5E"}} cx="254" cy="254" r="254" />
                <path
                  style={{fill: "#FFFFFF"}}
                  d="M391.6,97.6H116.4c-10.4,0-18.8,8.4-18.8,18.8v274.8c0,10.4,8.4,18.8,18.8,18.8h274.8
                c10.4,0,18.8-8.4,18.8-18.8V116.4C410.4,106,402,97.6,391.6,97.6z"
                />
                <path
                  style={{fill: "#4CDBC4"}}
                  d="M405.2,103.6L340,220l-127.6-75.2l26.4-47.2h152.4c0.4,0,0.4,0,0.8,0c0.8,0,1.2,0,2,0.4
                c0.4,0,0.8,0,0.8,0C398.8,98.8,402.4,100.8,405.2,103.6C404.8,103.2,404.8,103.2,405.2,103.6z"
                />
                <path
                  style={{fill: "#84DBFF"}}
                  d="M234.8,97.6l-87.2,165.2l-50-38.8V116.4c0-10.4,8.4-18.8,18.8-18.8C116.4,97.6,234.8,97.6,234.8,97.6
                z"
                />
                <path
                  style={{fill: "#E6E9EE"}}
                  d="M410.4,125.6l-81.2,141.6l81.2,46.8v34.8L314,293.6l-67.2,116.8H212l105.6-183.6l-100-57.6
                l-120,208.4v-60.8l126-219.2h34.8l-26,45.2l100,57.6l59.2-102.8l0,0c0.4,0,0.4,0,0.8,0c0.8,0,1.2,0,2,0.4c0.4,0,0.8,0,0.8,0
                c3.6,0.8,6.8,2.4,9.6,5.2c0.4,0.4,0.8,0.8,1.2,1.2c0.4,0.4,0.8,0.8,1.2,1.6c0.4,0.4,0.8,0.8,0.8,1.6c0.8,1.2,1.2,2.4,1.6,3.6
                c0,0.4,0.4,1.2,0.4,1.6c0,0.8,0.4,1.2,0.4,2s0,1.2,0,2V125.6z"
                />
                <polygon
                  style={{fill: "#FFD05B"}}
                  points="364,410.4 304,410.4 97.6,242.8 97.6,194 "
                />
                <path
                  style={{fill: "#FF7058"}}
                  d="M317.6,181.6c0,31.6-57.6,120.8-57.6,120.8s-57.2-89.2-57.2-120.8s25.6-57.6,57.6-57.6
                S317.6,149.6,317.6,181.6z"
                />
                <circle style={{fill: "#FFFFFF"}} cx="260" cy="181.6" r="30.8" />
              </svg>
              <span>Lisbon, Portugal</span>
            </li>
            <li className="before:content-['|'] before:mx-[10px]">
              <a href="mailto:balenko.anastasiia@gmail.com">balenko.anastasiia@gmail.com</a>
            </li>
            <li className="before:content-['|'] before:mx-[10px]">
              <a href="www.linkedin.com/in/anastasiia-balenko-ab78a095">
                www.linkedin.com/in/anastasiia-balenko-ab78a095
              </a>
            </li>
          </ul>
        </header>

        {/* Profile Summary */}
        <section className="py-[10px] leading-none">
          <h2 className="bg-brand-600 text-white px-[5px] py-[2px] text-[36px] leading-none">Profile Summary</h2>
          <p className="py-[10px] px-[10px] pt-[10px] pb-0 leading-normal">
            Senior Frontend Developer with 7+ years of commercial experience
            specializing in JavaScript (7+ years), TypeScript (6 years), React (7
            years), AWS (7 years). Developed from scratch high-performance,
            scalable web applications, participated in optimizing existing
            platforms, and resolving performance issues. Experienced in
            collaborating with cross-functional teams to deliver efficient
            solutions for high-traffic web platforms. Constantly improving in
            writing clean, maintainable code and covering it with unit,
            integration and E2E tests and enhancing web performance and user
            experience.
          </p>
        </section>

        {/* Skills */}
        <section className="py-[10px] leading-none">
          <h2 className="bg-brand-600 text-white px-[5px] py-[2px] text-[36px] leading-none">Skills</h2>

          <h3 className="text-brand-600 text-[24px] font-bold my-[5px] border-b-2 border-brand-600 leading-none">Technical Skills</h3>
          <ul className="list-none flex gap-[10px] justify-between whitespace-nowrap py-[10px]">
            <li className="pr-[10px] border-r border-brand-600 min-w-[20%]">
              Languages:
              <ul className="list-none flex gap-[10px] font-semibold flex-wrap">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </li>
            <li className="pr-[10px] border-r border-brand-600 min-w-[20%]">
              Frameworks:
              <ul className="list-none flex gap-[10px] font-semibold flex-wrap">
                <li>React</li>
                <li>Next.js</li>
                <li>Gatsby</li>
                <li>React Native</li>
              </ul>
            </li>
            <li className="pr-[10px] min-w-[20%]">
              Testing and other tools:
              <ul className="list-none flex gap-[10px] font-semibold flex-wrap">
                <li>Jest</li>
                <li>Enzyme</li>
                <li>Storybook</li>
                <li>Cypress</li>
                <li>Git</li>
                <li>CI/CD</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-brand-600 text-[24px] font-bold my-[5px] border-b-2 border-brand-600 leading-none">Professional Skills</h3>
          <ul className="list-none flex gap-[10px] justify-between whitespace-nowrap py-[10px]">
            <li className="pr-[10px] border-r border-brand-600 min-w-[20%]">
              Agile Practices:
              <ul className="list-none flex gap-[10px] font-semibold flex-wrap">
                <li>Scrum</li>
                <li>Kanban</li>
              </ul>
            </li>
            <li className="pr-[10px] border-r border-brand-600 min-w-[20%]">
              Development practices:
              <ul className="list-none flex gap-[10px] font-semibold flex-wrap">
                <li>Code reviews</li>
                <li>unit/integration/E2E testing</li>
                <li>performance optimizations</li>
              </ul>
            </li>
            <li className="pr-[10px] min-w-[20%]">
              Team collaboration:
              <ul className="list-none flex gap-[10px] font-semibold flex-wrap">
                <li>Excellent communication</li>
                <li>Decision making</li>
                <li>Critical thinking</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Education */}
        <section className="py-[10px] leading-none">
          <h2 className="bg-brand-600 text-white px-[5px] py-[2px] text-[36px] leading-none">Education and certifications</h2>
          <p className="py-[10px] px-[10px]">
            2014 - Master&apos;s Degree in mechanical engineering, Mechanical
            Engineering Institute, Kyiv Polytechnic Institute, Ukraine
          </p>
          <p className="px-[10px]">
            Certifications:{" "}
            <a
              href="https://www.certmetrics.com/amazon/public/transcript.aspx?transcript=46FSB2Q1J2VEQCG7"
              className="text-blue-600 hover:underline"
            >
              Amazon Web Services Developer – Associate
            </a>
          </p>
        </section>

        {/* Languages */}
        <section className="py-[10px] leading-none">
          <h2 className="bg-brand-600 text-white px-[5px] py-[2px] text-[36px] leading-none">Languages</h2>
          <ul className="list-none flex gap-[10px] justify-between whitespace-nowrap py-[10px]">
            <li>English - B2</li>
            <li>Portuguese - B1</li>
            <li>Ukrainian - native</li>
            <li>Russian - native</li>
          </ul>
        </section>

        {/* Projects - First Project */}
        <section className="py-[10px] leading-none">
          <div className="py-[10px] leading-none">
            <h2 className="bg-brand-600 text-white px-[5px] py-[2px] text-[36px] leading-none">Projects</h2>
            <h3 className="text-brand-600 text-[24px] font-bold my-[5px] border-b-2 border-brand-600 text-center">
              Online Car Trading Platform
            </h3>
            <div className="flex text-brand-600 text-[20px] justify-between items-center leading-none">
              <div className="text-brand-600 text-[24px] font-bold my-[5px] leading-none">Senior front-end developer</div>
              <div>Since April 2023</div>
            </div>
            <p className="py-[10px] px-[10px]">
              Web platform for buying and selling new and used cars in Portugal.
              Users can buy, sell, and search for vehicles with ease. This is
              achieved by utilization of modern technologies like AI-driven search
              capabilities, efficient programming languages, serverless
              architecture, and advanced caching methods.
            </p>
            <h3 className="text-brand-600 text-[24px] font-bold my-[5px] border-b-2 border-brand-600 leading-none">Area of Responsibilities:</h3>
            <ul className="list-none py-[10px]">
              <li className="px-[10px]">
                Development of the front-end part of the web platform using
                Next.js from scratch up to production.
                <ul className="list-disc ml-5 mt-2">
                  <li>
                    Worked closely with product owners to understand business
                    requirements and transform them into technical specifications.
                    Analyzed new feature requests and proposed the best possible
                    technical approach based on the project&apos;s needs.
                  </li>
                  <li>
                    Development of new UI features, such as dynamic forms for
                    creating/editing car advertisements and advanced search
                    filtering which included forms validation and error handling
                    and dynamic rendering of search components.
                  </li>
                  <li>
                    Managed the ongoing maintenance of the platform by addressing
                    bug fixes, implementing new features, and improving
                    performance. I continuously worked on refactoring existing
                    code to maintain high standards and ensure long-term code
                    health.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Sheet 2 */}
      <div className="w-[1050px] min-h-[1485px] p-[50px] border border-black mx-auto font-cv text-text-900 text-[20px] leading-none">
        <section className="py-[10px] leading-none">
          <div className="py-[10px] leading-none">
            <ul className="list-none py-[10px]">
              <li className="px-[10px]">
                Optimizing SEO and Performance
                <ul className="list-disc ml-5 mt-2">
                  <li>
                    Utilization of Next.js&apos;s static site generation (SSG) to
                    ensure that the platform&apos;s car listings and filter results
                    were pre-rendered and served efficiently which helped to
                    optimize both the search engine ranking and user experience,
                    improved page loads and reduced time to first contentful paint
                    (FCP).
                  </li>
                  <li>
                    Analyzing existing react form libraries to select the most
                    suitable for current project and refactoring form UI
                    components which reduced the size of bundle and improved UI
                    experience.
                  </li>
                </ul>
              </li>
              <li className="px-[10px]">
                Pipeline Development
                <ul className="list-disc ml-5 mt-2">
                  <li>
                    Developed and optimized front-end build pipelines for
                    continuous integration (CI) and continuous deployment (CD)
                    using Github Actions. Ensured the automation of tasks like
                    testing, linting, and deployment to streamline development
                    processes and reduce human errors.
                  </li>
                </ul>
              </li>
              <li className="px-[10px]">
                Team collaboration
                <ul className="list-disc ml-5 mt-2">
                  <li>
                    Collaborated with back-end team to define and evolve the
                    existing API structure, ensuring that it provided the
                    necessary endpoints to support new features and maintained
                    backwards compatibility.
                  </li>
                </ul>
              </li>
              <li className="px-[10px]">
                Unit Testing of Developed Features
                <ul className="list-disc ml-5 mt-2">
                  <li>
                    Ensured the robustness and stability of the platform by
                    writing and executing unit tests. Utilized testing frameworks
                    like Jest and React Testing Library to ensure that individual
                    components and business logic performed as expected. Utilized
                    cypress for e2e tests.
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className="text-brand-600 text-[24px] font-bold my-[5px] border-b-2 border-brand-600 leading-none">Technical stack:</h3>
            <ul className="flex list-none justify-between items-center w-fit mx-auto mt-5 flex-wrap">
              <li className="before:content-['|'] before:mx-[10px] first:before:content-['']">Typescript</li>
              <li className="before:content-['|'] before:mx-[10px]">Next.js</li>
              <li className="before:content-['|'] before:mx-[10px]">Next-intl</li>
              <li className="before:content-['|'] before:mx-[10px]">Tailwind</li>
              <li className="before:content-['|'] before:mx-[10px]">Storybook</li>
              <li className="before:content-['|'] before:mx-[10px]">Jest</li>
              <li className="before:content-['|'] before:mx-[10px]">Cypress</li>
              <li className="before:content-['|'] before:mx-[10px]">Testing-library/react</li>
            </ul>
          </div>

          {/* Mobile App Project */}
          <div className="py-[10px] leading-none">
            <h3 className="text-brand-600 text-[24px] font-bold my-[5px] border-b-2 border-brand-600 text-center">
              Mobile App For Friends&apos; Sharing
            </h3>
            <div className="flex text-brand-600 text-[20px] justify-between items-center leading-none">
              <div className="text-brand-600 text-[24px] font-bold my-[5px] leading-none">Fullstack Developer</div>
              <div>June 2022 - February 2023</div>
            </div>
            <p className="py-[10px] px-[10px]">
              Project: Mobile app that enables users to connect with friends,
              share content, recent activities and engage in communities based on
              the common interests.
            </p>
            <h3 className="text-brand-600 text-[24px] font-bold my-[5px] border-b-2 border-brand-600 leading-none">Area of Responsibilities:</h3>
            <ul className="list-none py-[10px]">
              <li className="px-[10px]">
                Collaborated with the product owners to transform business
                requirements into technical tasks.
              </li>
              <li className="px-[10px]">
                Developed the mobile app using React Native for front-end part and
                node.js with AWS services for serverless back-end part.
              </li>
              <li className="px-[10px]">
                Created unit and integration tests for all the parts of the
                project.
              </li>
              <li className="px-[10px]">
                Translated Figma design files into fully functional React Native
                components
              </li>
            </ul>

            <h3 className="text-brand-600 text-[24px] font-bold my-[5px] border-b-2 border-brand-600 leading-none">Technical stack:</h3>
            <ul className="flex list-none justify-between items-center w-fit mx-auto mt-5 flex-wrap">
              <li className="before:content-['|'] before:mx-[10px] first:before:content-['']">Typescript</li>
              <li className="before:content-['|'] before:mx-[10px]">React Native</li>
              <li className="before:content-['|'] before:mx-[10px]">node.js</li>
              <li className="before:content-['|'] before:mx-[10px]">Tailwind</li>
              <li className="before:content-['|'] before:mx-[10px]">Storybook</li>
              <li className="before:content-['|'] before:mx-[10px]">Jest</li>
              <li className="before:content-['|'] before:mx-[10px]">Testing-library/react</li>
              <li className="before:content-['|'] before:mx-[10px]">
                AWS (lambda, amplify, cloudfront, Dynamodb and cognito), github
                actions (CI/CD)
              </li>
            </ul>
          </div>

          {/* Previous Roles */}
          <div className="py-[10px] leading-none">
            <h3 className="text-brand-600 text-[24px] font-bold my-[5px] border-b-2 border-brand-600 text-center">Previous roles</h3>
            <div className="flex text-brand-600 text-[20px] justify-between items-center leading-none">
              <div>Front-end developer</div>
              <div>April 2017 - April 2022</div>
            </div>
            <h3 className="text-brand-600 text-[24px] font-bold my-[5px] border-b-2 border-brand-600 leading-none">Area of Responsibilities:</h3>
            <ul className="list-none py-[10px]">
              <li className="px-[10px]">Developed new UI features using React library</li>
              <li className="px-[10px]">Participated in code reviews</li>
              <li className="px-[10px]">Developed unit, integration and e2e tests</li>
              <li className="px-[10px]">Participated in pair programming</li>
              <li className="px-[10px]">
                Collaborated in cross-functional teams following Agile
                methodologies, including Scrum
              </li>
              <li className="px-[10px]">
                Participated in regular sprints, stand-ups, and retrospectives
              </li>
              <li className="px-[10px]">
                Contributed to sprint planning sessions estimating timeframes for
                feature development.
              </li>
            </ul>

            <h3 className="text-brand-600 text-[24px] font-bold my-[5px] border-b-2 border-brand-600 leading-none">Technical stack:</h3>
            <ul className="flex list-none justify-between items-center w-fit mx-auto mt-5 flex-wrap">
              <li className="before:content-['|'] before:mx-[10px] first:before:content-['']">Typescript</li>
              <li className="before:content-['|'] before:mx-[10px]">React</li>
              <li className="before:content-['|'] before:mx-[10px]">Gatsby</li>
              <li className="before:content-['|'] before:mx-[10px]">Graphql</li>
              <li className="before:content-['|'] before:mx-[10px]">Storybook</li>
              <li className="before:content-['|'] before:mx-[10px]">Jest</li>
              <li className="before:content-['|'] before:mx-[10px]">Testing-library/react</li>
              <li className="before:content-['|'] before:mx-[10px]">
                AWS (lambda, amplify, cloudfront, Dynamodb and cognito), github
                actions (CI/CD)
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}