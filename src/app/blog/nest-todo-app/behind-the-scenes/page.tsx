import Image from 'next/image';
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
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-900 font-cv mb-6 leading-tight">
            NestJS behind the scenes
          </h1>
          <div className="flex flex-wrap gap-6 text-text-600 font-cv">
            <div className="flex items-center gap-2">
              <span className="text-xl">📅</span>
              <span>
                <strong className="text-text-900">Published:</strong> September
                25, 2025
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
                <strong className="text-text-900">Tags:</strong> NestJS
              </span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="space-y-8">
          <section>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-6">
              This article is an attempt to understand myself and explain to
              readers how NestJS works under the hood by reviewing some basic
              decorators which where used in{' '}
              <strong className="text-text-900">
                <a
                  className="text-brand-600 hover:text-brand-700 underline"
                  href="https://github.com/BomberNastya/nestjs-todo-with-ai"
                >
                  Yet another Todo APP
                </a>
              </strong>
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-text-900 font-cv mb-4">
              What are these NestJS decorators and why we need them?
            </h2>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              For our current version of &quot;Yet Another Todo App&quot;
              written with NestJS we used the next NestJS decorators:
            </p>
            <pre className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 overflow-x-auto mb-6">
              <code className="text-text-900 font-mono text-sm">
                @Module, @Controller, @Injectable, @Get, @Post, @Put, @Delete,
                @Body and @Param.
              </code>
            </pre>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              Let&apos;s break down this list into several sections depending on
              the usage of these decorators:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-700 font-cv text-lg ml-4 mb-4">
              <li>
                <span className="font-bold">Application level decorators:</span>{' '}
                @Module, @Controller, @Injectable
              </li>
              <li>
                <span className="font-bold">Route level decorators:</span> @Get,
                @Post, @Put, @Delete
              </li>
              <li>
                <span className="font-bold">
                  Route parameter level decorators:
                </span>{' '}
                @Body, @Param
              </li>
            </ul>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              There are much more of them, but in this article I will focus on
              these decorators, since we use them in our app.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-text-900 font-cv mb-4">
              Application level decorators
            </h2>
            <h3 className="text-2xl font-bold text-brand-900 font-cv mb-2">
              @Module
            </h3>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              A Module is a class decorator, that adds a special metadata to the
              class, which helps NestJS to treat the class as a module and to
              build an application dependency graph. Any NestJS app has at least
              one module -root module. All the other modules are called
              &quot;feature modules&quot; and encapsulate the logic for a
              specific feature of an app (tasks module is an example of a
              feature module in our case). The @Module decorator accepts a
              single argument - a &quot;config&quot; object with the next
              properties:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-700 font-cv text-lg ml-4 mb-4">
              <li>
                Providers - in general these are classes that have @Injectable
                decorator. If you want to use an instance of such a provider at
                least in the specific module, you should put it in the list of
                providers of this module. Under the hood NestJS will create an
                instance of this provider and share it across the module (or
                across the whole application).
              </li>
              <li>
                controllers - a list of controllers, that are going to be used
                in this module,
              </li>
              <li>
                imports - a list of modules. This list is needed if you want to
                use some services, which belong to other modules. Through
                importing another module, you get access to all providers of
                this module.
              </li>
              <li>
                exports - a list of providers of this module, that should be
                available elsewhere.
              </li>
            </ul>
            .
            <hr />
            <h3 className="text-2xl font-bold text-brand-900 font-cv mb-2">
              @Controller
            </h3>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              The main goal of the controller is to receive a request and send a
              response. Controller is selected based on the route. Each route
              has it&apos;s own controller.
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              @Controller decorator marks a class as a controller so that NextJS
              can use it to handle requests. @Controller decorator expects one
              argument - prefix of type string or string[], which basically
              means the path of the route (In our app we have &apos;tasks&apos;
              prefix, which corresponds to route:
            </p>
            <pre className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 overflow-x-auto mb-6">
              <code className="text-text-900 font-mono text-sm">
                host/tasks
              </code>
            </pre>
            <hr />
            <h3 className="text-2xl font-bold text-brand-900 font-cv mb-2">
              @Injectable
            </h3>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              Classes that are decorated with @Injectable are treated as those
              that can be injected into other classes and are generally called
              Providers. The examples of common providers are as follows:
              services, repositories, factories, and helpers.
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              In order to be able to use a provider, it should be listed in the
              providers list of the module.
            </p>
            <p>
              @injectable decorator expects one optional argument - the options
              object.
            </p>
            <hr />
            <h2 className="text-3xl font-bold text-text-900 font-cv mb-4">
              Route level decorators
            </h2>
            <h3 className="text-2xl font-bold text-brand-900 font-cv mb-2">
              @Get, @Post, @Put, @Delete
            </h3>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              These decorators are route handler decorator, which basic aim is
              to route GET/POST/PUT/DELETE HTTP requests to the specified paths.
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              All of them exptect one optional argument - path?: string |
              string[]. So for example the route host/tasks/status can be
              processed by @Controller(&apos;tasks&apos;) and
              @Get(&apos;status&apos;)
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              Route parameter can be specified as a path, like
              @Get(&apos;:id&apos;) and with the help of @Param decorator it can
              be retrieved and used in the method itself.
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              By default all methods return (200) HTTP status code except Post,
              which returns 201, but you can override this value with
              @HttpCode().
            </p>
            <h2 className="text-3xl font-bold text-text-900 font-cv mb-4">
              Route parameter level decorators
            </h2>
            <h3 className="text-2xl font-bold text-brand-900 font-cv mb-2">
              @Param
            </h3>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              @Body is a route handler parameter decorator. It extracts the
              `params` property from the `req` object and populates the
              decorated parameter with the value of `params`. For example, we
              extracted an id of the task in our app:
            </p>
            <pre className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 overflow-x-auto mb-6">
              <code className="text-text-900 font-mono text-sm">
                findOne(@Param(&apos;id&apos;) id: string)
              </code>
            </pre>
            <hr />
            <h3 className="text-2xl font-bold text-brand-900 font-cv mb-2">
              @Body
            </h3>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              @Body is another route handler parameter decorator. It extracts
              the `body` object from the `req` object. For example in our app we
              used it like this:
            </p>
            <pre className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 overflow-x-auto mb-6">
              <code className="text-text-900 font-mono text-sm">
                {`@Put(':id')
updateTask(
  @Param() { id }: { id: string },
  @Body() updateTaskDto: UpdateTaskDto,
): Task {
  return this.tasksService.updateTask(id, updateTaskDto);
}`}
              </code>
            </pre>
            <hr />
          </section>
          <section>
            <h2 className="text-3xl font-bold text-text-900 font-cv mb-4">
              NestJS dependency graph
            </h2>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              NestJS uses{' '}
              <a
                target="_blank"
                href="https://www.typescriptlang.org/docs/handbook/decorators.html"
              >
                Typescript decorators
              </a>{' '}
              and{' '}
              <a
                href="https://blog.bitsrc.io/typescripts-reflect-metadata-what-it-is-and-how-to-use-it-fb7b19cfc7e2"
                target="_blank"
              >
                reflect-metadata
              </a>{' '}
              to process the code.
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              <strong>At compile time</strong> NestJS with the help of
              Typescript decorators (like @Module, @Controller etc) records
              metadata about all the classes of the application, their providers
              and dependencies
            </p>
            <p className="text-text-700 font-cv text-lg leading-relaxed mb-4">
              <strong>At runtime (during application bootstrap)</strong> NestJS
              scanns through all the modules of the application and based on the
              metadata builds the dependency graph.
            </p>
            <p>
              Here is a simplified ilustration of the Dependency graph for our
              Yet Another Todo App
            </p>
            <div className="w-full max-w-2xl mx-auto mb-8">
              <Image
                src="/portfolio/dgTodoApp.png"
                width={770}
                height={880}
                alt="dependency graph ilustration"
              />
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default NestTodoAppPage;
