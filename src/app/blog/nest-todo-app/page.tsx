import Link from 'next/link';

const NestTodoAppPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Navigation */}
        <div className="mb-8 flex gap-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-brand-600 hover:text-brand-700 font-cv text-lg"
          >
            ← Back to Blog
          </Link>
          <Link
            href="/cv"
            className="inline-flex items-center text-brand-600 hover:text-brand-700 font-cv text-lg"
          >
            View My CV
          </Link>
          <Link
            href="/blog/nest-todo-app/behind-the-scenes"
            className="inline-flex items-center text-brand-600 hover:text-brand-700 font-cv text-lg"
          >
            NestJS: Behind the Scenes →
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-900 font-cv mb-6 leading-tight">
            How to Build Your First NestJS TODO App with AI Assistance
          </h1>
          <div className="flex flex-wrap gap-6 text-text-600 font-cv">
            <div className="flex items-center gap-2">
              <span className="text-xl">📅</span>
              <span>
                <strong className="text-text-900">Published:</strong> September
                19, 2025
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">⏱️</span>
              <span>
                <strong className="text-text-900">Read time:</strong> ~8 minutes
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🏷️</span>
              <span>
                <strong className="text-text-900">Tags:</strong> NestJS,
                TypeScript, TDD, AI Development
              </span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-text-900 font-cv mb-4">
              📖 About This Tutorial
            </h2>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-6">
              This tutorial is the{' '}
              <strong className="text-text-900">
                first part of a comprehensive series
              </strong>{' '}
              on building a production-ready NestJS TODO application. In this
              foundational article, we&apos;ll create a basic MVP using
              Test-Driven Development with Claude AI assistance.
            </p>
            <h3 className="text-2xl font-semibold text-text-900 font-cv mb-3">
              What You&apos;ll Build
            </h3>
            <ul className="list-disc list-inside space-y-2 text-text-700 font-cv text-lg ml-4 mb-6">
              <li>A simple TODO app with CRUD operations</li>
              <li>Comprehensive test coverage (E2E and unit tests)</li>
              <li>Clean architecture with proper separation of concerns</li>
            </ul>
            <h3 className="text-2xl font-semibold text-text-900 font-cv mb-3">
              What&apos;s Coming Next
            </h3>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              This tutorial intentionally installs several dependencies (like
              Prisma, PostgreSQL drivers) that we don&apos;t use yet -{' '}
              <strong className="text-text-900">this is by design!</strong>{' '}
              Future articles in this series will cover:
            </p>
            <ul className="list-none space-y-3 text-text-700 font-cv text-lg mb-6">
              <li className="flex items-start">
                <span className="text-xl mr-3">🔐</span>
                <div>
                  <strong className="text-text-900">
                    Authentication & Authorization
                  </strong>{' '}
                  - User management and security
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-3">📊</span>
                <div>
                  <strong className="text-text-900">
                    Database Integration
                  </strong>{' '}
                  - Replacing in-memory storage with PostgreSQL using Prisma
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-3">✅</span>
                <div>
                  <strong className="text-text-900">Validation & DTOs</strong> -
                  Input validation and error handling
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-3">⚙️</span>
                <div>
                  <strong className="text-text-900">
                    Environment Configuration
                  </strong>{' '}
                  - Different configs for dev/staging/production
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-3">🚀</span>
                <div>
                  <strong className="text-text-900">
                    Production Deployment
                  </strong>{' '}
                  - Making the app production-ready
                </div>
              </li>
            </ul>
            <blockquote className="border-l-4 border-brand-600 bg-brand-50 p-4 rounded-r-lg">
              <p className="text-text-700 font-cv text-lg m-0">
                <strong className="text-text-900">Note</strong>: The app we
                build here is{' '}
                <strong className="text-text-900">not production-ready</strong>{' '}
                - it&apos;s a learning foundation that we&apos;ll enhance
                throughout the series.
              </p>
            </blockquote>
          </section>

          <hr className="border-t-2 border-neutral-200 my-12" />
          <section>
            <h2 className="text-3xl font-bold text-text-900 font-cv mb-4">
              Step 0: Install NestJS CLI
            </h2>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              To install the NestJS CLI globally, run the following command in
              your terminal:
            </p>
            <pre className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 overflow-x-auto mb-6">
              <code className="text-text-900 font-mono text-sm">
                npm i -g @nestjs/cli
              </code>
            </pre>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-text-900 font-cv mb-4">
              Step 1: Create a New NestJS Project
            </h2>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              Let&#39;s create our NestJS project named{' '}
              <strong className="text-text-900">Yet Another TODO App</strong> by
              running:
            </p>
            <pre className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 overflow-x-auto mb-6">
              <code className="text-text-900 font-mono text-sm">
                nest new yet-another-todo-app
              </code>
            </pre>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              I selected <strong className="text-text-900">npm</strong> as the
              package manager for this tutorial.
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              The project creation took about 30 seconds and generated the
              following structure:
            </p>
            <pre className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 overflow-x-auto mb-6">
              <code className="text-text-900 font-mono text-sm">
                yet-another-todo-app/ ├── src/ │ ├── app.controller.spec.ts #
                Unit tests for the controller │ ├── app.controller.ts # Basic
                controller with a single route │ ├── app.module.ts # Root module
                of the application │ ├── app.service.ts # Basic service with a
                single method │ └── main.ts # Entry point of the application ├──
                test/ │ ├── app.e2e-spec.ts # End-to-end tests │ └──
                jest-e2e.json # Jest configuration for e2e testing ├──
                node_modules/ # Dependencies ├── .eslintrc.js # ESLint
                configuration ├── .gitignore # Git ignore rules ├── .prettierrc
                # Prettier configuration ├── nest-cli.json # Nest CLI
                configuration ├── package.json # Project dependencies and
                scripts ├── package-lock.json # Locked dependency versions ├──
                README.md # Project documentation ├── tsconfig.build.json #
                TypeScript build configuration └── tsconfig.json # TypeScript
                configuration
              </code>
            </pre>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              Let&#39;s verify that the application starts correctly by running:
            </p>
            <pre className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 overflow-x-auto mb-6">
              <code className="text-text-900 font-mono text-sm">
                npm run start
              </code>
            </pre>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              If you see a console message like{' '}
              <strong className="text-text-900">
                &quot;Nest application successfully started +2ms&quot;
              </strong>
              , you&#39;re all set!
            </p>
            <h2 className="text-3xl font-bold text-text-900 font-cv mb-4">
              Step 2: Setting Up Claude AI Assistant
            </h2>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              For this project, I decided to use{' '}
              <strong className="text-text-900">Claude AI assistant</strong> to
              help with repetitive and routine development tasks.
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              My first request to Claude was to create a context file in the
              project root containing project details. This helps Claude
              understand the project context for future requests, decreasing
              response time and improving the quality of our collaboration. The
              result was a{' '}
              <code className="text-text-900 font-mono text-sm">CLAUDE.md</code>{' '}
              file being created.
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              If you&#39;re new to AI assistants, you might have similar
              questions to the ones I had. I asked Claude directly about how
              this collaboration works:
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              <strong className="text-text-900">
                Q: How does Claude know if the CLAUDE.md file exists?
              </strong>
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              <em>
                A: I automatically check for CLAUDE.md files when starting work
                on a project - it&#39;s part of my standard workflow. So you
                don&#39;t need to tell me about it.
              </em>
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              <strong className="text-text-900">
                Q: Should I explicitly tell Claude to update this file when she
                performs changes in the code?
              </strong>
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              <em>
                A: You don&#39;t need to explicitly ask me to update it. I
                should proactively update CLAUDE.md when I make significant
                changes like:
              </em>
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-700 font-cv text-lg ml-4 mb-4">
              <li>
                <em>Adding new dependencies or scripts</em>
              </li>
              <li>
                <em>Creating new modules or major features</em>
              </li>
              <li>
                <em>Changing the project structure</em>
              </li>
              <li>
                <em>Adding new development commands</em>
              </li>
            </ul>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              <strong className="text-text-900">
                Q: Should I update CLAUDE.md file by myself if I do manual
                changes to the project?
              </strong>
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              <em>
                A: Yes, please update it yourself when you make manual changes!
                This keeps me in sync with the project state. Update it for
                things like:
              </em>
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-700 font-cv text-lg ml-4 mb-4">
              <li>
                <em>Installing new packages</em>
              </li>
              <li>
                <em>Adding custom scripts to package.json</em>
              </li>
              <li>
                <em>Changing project structure</em>
              </li>
              <li>
                <em>Adding environment variables or configuration</em>
              </li>
            </ul>
            <h2 className="text-3xl font-bold text-text-900 font-cv mb-4">
              Step 3: Create E2E Tests
            </h2>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              For this project, I want to leverage the{' '}
              <strong className="text-text-900">
                TDD (Test-Driven Development)
              </strong>{' '}
              approach and ask Claude AI assistant to help with e2e test
              creation.
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              Here&#39;s what I described to Claude:
            </p>
            <blockquote className="border-l-4 border-brand-600 bg-brand-50 p-4 rounded-r-lg mb-6">
              <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
                &quot;I am planning to create a simple todo-app.
                Libraries/packages I am planning to use are nestjs,
                @nestjs/config, prisma, postgres (docker container for postgres,
                pg and tablePlus for DB visualization). For now I will not
                implement authorization/authentication, but task should have a
                user connection (userId should be hardcoded). I want to use TDD
                approach, so as a first step I want to create e2e tests. They
                should check CRUD of the task, and getAllTasks. Task should have
                properties: id, status (enum), title, description. Tests should
                include happy and unhappy scenarios (no tasks for given user,
                task does not exist, etc.)&quot;
              </p>
            </blockquote>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              <strong className="text-text-900">
                📝{' '}
                <a
                  className="text-brand-600 hover:text-brand-700 underline"
                  href="https://github.com/BomberNastya/nestjs-todo-with-ai/commit/279b00797b3e63aaf19d2ef10255278add431647"
                >
                  View the initial e2e tests implementation →
                </a>
              </strong>
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              When I tried to run the e2e tests with{' '}
              <code className="text-text-900 font-mono text-sm">
                npm run test:e2e
              </code>
              , I encountered an error:{' '}
              <strong className="text-text-900">
                TypeError: request is not a function
              </strong>
              . The solution was to update the import from:
            </p>
            <pre className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 overflow-x-auto mb-6">
              <code className="text-text-900 font-mono text-sm">
                import * as request from &#39;supertest&#39;; // Imports the
                whole module
              </code>
            </pre>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              to:
            </p>
            <pre className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 overflow-x-auto mb-6">
              <code className="text-text-900 font-mono text-sm">
                import request from &#39;supertest&#39;; // Imports the request
                function
              </code>
            </pre>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              After this fix, the tests ran successfully. All tests initially
              failed with{' '}
              <strong className="text-text-900">
                expected 200, got 404 &quot;Not Found&quot;
              </strong>
              , which was expected since we hadn&#39;t implemented any routes
              yet.
            </p>
            <h2 className="text-3xl font-bold text-text-900 font-cv mb-4">
              Step 4: Create Tasks Module with Controller and Service
            </h2>
            <h3 className="text-2xl font-semibold text-text-900 font-cv mb-3">
              Step 4.1: Create TasksModule
            </h3>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              To keep all task-related CRUD operations organized, I created a
              dedicated Tasks module:
            </p>
            <pre className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 overflow-x-auto mb-6">
              <code className="text-text-900 font-mono text-sm">
                nest g mo tasks
              </code>
            </pre>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              This command created a new{' '}
              <code className="text-text-900 font-mono text-sm">tasks</code>{' '}
              folder with a{' '}
              <code className="text-text-900 font-mono text-sm">
                tasks.module.ts
              </code>{' '}
              file inside. The NestJS CLI automatically added this module to the
              imports list in{' '}
              <code className="text-text-900 font-mono text-sm">
                app.module.ts
              </code>
              .
            </p>
            <h3 className="text-2xl font-semibold text-text-900 font-cv mb-3">
              Step 4.2: Create TasksController
            </h3>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              Next, let&#39;s create the tasks controller:
            </p>
            <pre className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 overflow-x-auto mb-6">
              <code className="text-text-900 font-mono text-sm">
                nest g co tasks
              </code>
            </pre>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              Since we already had the tasks folder with the module, the NestJS
              CLI automatically placed the controller in the correct location.
              This created two new files:{' '}
              <code className="text-text-900 font-mono text-sm">
                tasks.controller.ts
              </code>{' '}
              and{' '}
              <code className="text-text-900 font-mono text-sm">
                tasks.controller.spec.ts
              </code>
              , and updated the controllers list in{' '}
              <code className="text-text-900 font-mono text-sm">
                tasks.module.ts
              </code>
              .
            </p>
            <h3 className="text-2xl font-semibold text-text-900 font-cv mb-3">
              Step 4.3: Create TasksService
            </h3>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              Finally, let&#39;s create the dedicated tasks service:
            </p>
            <pre className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 overflow-x-auto mb-6">
              <code className="text-text-900 font-mono text-sm">
                nest g s tasks
              </code>
            </pre>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              This created two more files:{' '}
              <code className="text-text-900 font-mono text-sm">
                tasks.service.ts
              </code>{' '}
              and{' '}
              <code className="text-text-900 font-mono text-sm">
                tasks.service.spec.ts
              </code>
              , and updated the providers list to include TasksService in the
              TasksModule.
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              <strong className="text-text-900">
                📝{' '}
                <a
                  className="text-brand-600 hover:text-brand-700 underline"
                  href="https://github.com/BomberNastya/nestjs-todo-with-ai/commit/de1447a97eb10d88e41b10c16d85bb8c8b19fd88"
                >
                  View the Tasks module, controller, and service setup →
                </a>
              </strong>
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              I also asked Claude to update the{' '}
              <code className="text-text-900 font-mono text-sm">CLAUDE.md</code>{' '}
              file with these changes to make the next steps easier to perform.
            </p>
            <h2 className="text-3xl font-bold text-text-900 font-cv mb-4">
              Step 5: Write a Blueprint of TasksController Methods
            </h2>
            <h3 className="text-2xl font-semibold text-text-900 font-cv mb-3">
              Step 5.1: Generate TasksController Unit Tests
            </h3>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              I asked Claude to generate unit tests for the TasksController to
              follow the TDD approach.
            </p>
            <h3 className="text-2xl font-semibold text-text-900 font-cv mb-3">
              Step 5.2: TasksController CRUD Methods Created
            </h3>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              I added all methods for the Tasks CRUD operations:{' '}
              <code className="text-text-900 font-mono text-sm">
                getAllTasks
              </code>
              ,{' '}
              <code className="text-text-900 font-mono text-sm">
                getOneTask
              </code>
              ,{' '}
              <code className="text-text-900 font-mono text-sm">
                createTask
              </code>
              ,{' '}
              <code className="text-text-900 font-mono text-sm">
                updateTask
              </code>
              , and{' '}
              <code className="text-text-900 font-mono text-sm">
                deleteTask
              </code>
              .
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              <strong className="text-text-900">
                📝{' '}
                <a
                  className="text-brand-600 hover:text-brand-700 underline"
                  href="https://github.com/BomberNastya/nestjs-todo-with-ai/commit/c538bda64c2bb5d61de95b01dc2dd509ba3e7f50"
                >
                  View the TasksController methods implementation →
                </a>
              </strong>
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              Key features of the implementation:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-700 font-cv text-lg ml-4 mb-4">
              <li>
                <strong className="text-text-900">Route Decorators</strong>:
                Each method uses NestJS route handler decorators (
                <code className="text-text-900 font-mono text-sm">@Get</code>,{' '}
                <code className="text-text-900 font-mono text-sm">@Post</code>,{' '}
                <code className="text-text-900 font-mono text-sm">@Put</code>,{' '}
                <code className="text-text-900 font-mono text-sm">@Delete</code>
                )
              </li>
              <li>
                <strong className="text-text-900">Endpoint Paths</strong>:
                <ul className="list-disc list-inside space-y-2 text-text-700 font-cv text-lg ml-4 mb-4">
                  <li>
                    <code className="text-text-900 font-mono text-sm">
                      getAllTasks
                    </code>{' '}
                    and{' '}
                    <code className="text-text-900 font-mono text-sm">
                      createTask
                    </code>{' '}
                    use the base{' '}
                    <code className="text-text-900 font-mono text-sm">
                      /tasks
                    </code>{' '}
                    endpoint
                  </li>
                  <li>
                    <code className="text-text-900 font-mono text-sm">
                      getOneTask
                    </code>
                    ,{' '}
                    <code className="text-text-900 font-mono text-sm">
                      updateTask
                    </code>
                    , and{' '}
                    <code className="text-text-900 font-mono text-sm">
                      deleteTask
                    </code>{' '}
                    use the{' '}
                    <code className="text-text-900 font-mono text-sm">
                      &#39;:id&#39;
                    </code>{' '}
                    route parameter for targeting specific tasks
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-text-900">DTOs</strong>: Created{' '}
                <code className="text-text-900 font-mono text-sm">
                  CreateTaskDto
                </code>{' '}
                and{' '}
                <code className="text-text-900 font-mono text-sm">
                  UpdateTaskDto
                </code>{' '}
                classNamees for request validation
              </li>
              <li>
                <strong className="text-text-900">Type Safety</strong>: Used{' '}
                <code className="text-text-900 font-mono text-sm">
                  PartialType
                </code>{' '}
                from{' '}
                <code className="text-text-900 font-mono text-sm">
                  @nestjs/mapped-types
                </code>{' '}
                to make{' '}
                <code className="text-text-900 font-mono text-sm">
                  UpdateTaskDto
                </code>{' '}
                have all optional fields
              </li>
            </ul>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              Installation note: The mapped-types dependency was added with:
            </p>
            <pre className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 overflow-x-auto mb-6">
              <code className="text-text-900 font-mono text-sm">
                npm i --save-dev @nestjs/mapped-types
              </code>
            </pre>
            <blockquote className="border-l-4 border-brand-600 bg-brand-50 p-4 rounded-r-lg mb-6">
              <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
                <strong className="text-text-900">Note</strong>: I chose
                classNamees over interfaces for DTOs to enable validation in
                future steps.
              </p>
            </blockquote>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              The methods currently return dummy data as placeholders.
            </p>
            <h2 className="text-3xl font-bold text-text-900 font-cv mb-4">
              Step 6: Implement TasksService
            </h2>
            <h3 className="text-2xl font-semibold text-text-900 font-cv mb-3">
              Step 6.1: Generate TasksService Unit Tests
            </h3>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              I asked Claude to write unit tests for TasksService:
            </p>
            <blockquote className="border-l-4 border-brand-600 bg-brand-50 p-4 rounded-r-lg mb-6">
              <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
                &quot;Write unit tests for tasks.service please. This service
                will be used in tasks.controller. All logic will be handled here
                and the result will be returned to controller methods. The
                implementation of tasks.service will be written based on unit
                tests&quot;
              </p>
            </blockquote>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              <strong className="text-text-900">
                📝{' '}
                <a
                  className="text-brand-600 hover:text-brand-700 underline"
                  href="https://github.com/BomberNastya/nestjs-todo-with-ai/commit/8345407f0c8138c6bba166d14a0edaeb7e44a624"
                >
                  View the TasksService unit tests →
                </a>
              </strong>
            </p>
            <h3 className="text-2xl font-semibold text-text-900 font-cv mb-3">
              Step 6.2: TasksService Methods Implementation
            </h3>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              I implemented the corresponding methods in TasksService to be used
              by the controller. All unit tests for TasksService are now updated
              and passing.
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              <strong className="text-text-900">
                📝{' '}
                <a
                  className="text-brand-600 hover:text-brand-700 underline"
                  href="https://github.com/BomberNastya/nestjs-todo-with-ai/commit/b03d4c5b3b5a8894a73c2e4ac4e8efd9b7e3b2d8"
                >
                  View the TasksService implementation →
                </a>
              </strong>
            </p>
            <h2 className="text-3xl font-bold text-text-900 font-cv mb-4">
              Step 7: Use TasksService in TasksController
            </h2>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              To use TasksService in TasksController, we need to inject it
              through dependency injection. This is accomplished in the
              className constructor using NestJS&#39;s built-in dependency
              injection system.
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              <strong className="text-text-900">
                📝{' '}
                <a
                  className="text-brand-600 hover:text-brand-700 underline"
                  href="https://github.com/BomberNastya/nestjs-todo-with-ai/commit/eb1057e1bfa2b2ee8e4c9c50f4a8b8e5e3d7f9a2"
                >
                  View the service injection implementation →
                </a>
              </strong>
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              Key concepts:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-700 font-cv text-lg ml-4 mb-4">
              <li>
                <strong className="text-text-900">Dependency Injection</strong>:
                NestJS automatically injects providers (like TasksService) into
                controllers
              </li>
              <li>
                <strong className="text-text-900">Singleton Pattern</strong>: By
                default, NestJS creates a singleton instance that&#39;s reused
                throughout the application lifecycle
              </li>
              <li>
                <strong className="text-text-900">Constructor Injection</strong>
                : Services are injected through the constructor parameters
              </li>
            </ul>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              I asked Claude to update all test cases, and they now pass
              successfully. The basic minimum viable product for our TODO app is
              now ready!
            </p>
            <h2 className="text-3xl font-bold text-text-900 font-cv mb-4">
              Step 8: Create todo.http File for Manual Testing
            </h2>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              As the final step, let&#39;s create a{' '}
              <code className="text-text-900 font-mono text-sm">todo.http</code>{' '}
              file for manual testing using the{' '}
              <a
                className="text-brand-600 hover:text-brand-700 underline"
                href="https://marketplace.visualstudio.com/items?itemName=humao.rest-client"
              >
                REST Client extension
              </a>{' '}
              in VS Code.
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              <strong className="text-text-900">
                📝{' '}
                <a
                  className="text-brand-600 hover:text-brand-700 underline"
                  href="https://github.com/BomberNastya/nestjs-todo-with-ai/commit/a824225f8c9d1a5e9b4e2c50f6a7b8e5e3d9f1a3"
                >
                  View the todo.http file with testing instructions →
                </a>
              </strong>
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              Claude created the file and included comprehensive instructions on
              how to use it for testing all the CRUD endpoints.
            </p>
            <hr />
            <h2 className="text-3xl font-bold text-text-900 font-cv mb-4">
              🎉 Conclusion
            </h2>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              We&#39;ve successfully built a fully functional NestJS TODO
              application using Test-Driven Development with Claude AI
              assistance! The application includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-700 font-cv text-lg ml-4 mb-4">
              <li>
                ✅{' '}
                <strong className="text-text-900">
                  Complete CRUD operations
                </strong>{' '}
                for tasks
              </li>
              <li>
                ✅{' '}
                <strong className="text-text-900">
                  Comprehensive test coverage
                </strong>{' '}
                (E2E and unit tests)
              </li>
              <li>
                ✅ <strong className="text-text-900">Clean architecture</strong>{' '}
                with proper separation of concerns
              </li>
              <li>
                ✅ <strong className="text-text-900">Type-safe DTOs</strong> for
                request validation
              </li>
              <li>
                ✅{' '}
                <strong className="text-text-900">Manual testing setup</strong>{' '}
                with HTTP file
              </li>
            </ul>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              This tutorial demonstrates how AI can significantly accelerate
              development while maintaining code quality and best practices. The
              combination of TDD and AI assistance ensures robust, well-tested
              code from the start.
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              <strong className="text-text-900">
                🔗{' '}
                <a
                  className="text-brand-600 hover:text-brand-700 underline"
                  href="https://github.com/BomberNastya/nestjs-todo-with-ai"
                >
                  Explore the complete repository →
                </a>
              </strong>
            </p>
            <section className="my-12">
              <div className="p-6 border border-neutral-200 rounded-2xl bg-neutral-50 shadow-sm">
                <h2 className="text-2xl font-bold text-text-900 font-cv mb-3">
                  Next in this Series
                </h2>
                <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
                  Curious about how NestJS works under the hood in terms of this
                  app? Check out the companion article:
                </p>
                <Link
                  href="/blog/behind-the-scenes"
                  className="inline-flex items-center px-4 py-2 bg-brand-600 text-white rounded-xl shadow hover:bg-brand-700 transition font-cv text-lg"
                >
                  🚀 Read: Behind the Scenes →
                </Link>
              </div>
            </section>

            <h2 className="text-3xl font-bold text-text-900 font-cv mb-4">
              Demo Video
            </h2>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              Here&apos;s a short demo of manually testing the NestJS Todo API:
            </p>

            <div className="w-full max-w-2xl mx-auto mb-8">
              <video
                className="w-full h-auto rounded-lg shadow-lg border border-neutral-200"
                controls
                loop
                autoPlay
                muted
              >
                <source
                  src="/portfolio/todo_app_manual_testing.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default NestTodoAppPage;
