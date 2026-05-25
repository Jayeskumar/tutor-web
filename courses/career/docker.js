PUSH({
  id: 'docker',
  name: 'Docker',
  icon: '🐳',
  color: '#2496ed',
  description: 'Containerize anything — images, Dockerfiles, networks, volumes, and Compose.',
  units: [

    /* ============== UNIT 1 — What is a container ============== */
    {
      id: 'dck-u1', name: 'Unit 1 · What is a container?', description: 'Why containers exist',
      lessons: [
        {
          id: 'dck-u1-l1', name: 'Containers vs VMs', icon: '🐳', xp: 15,
          challenges: [
            { type: 'concept', title: 'A container is a wrapped process', content: `<p>A <strong>container</strong> is just a regular Linux process — but wrapped in <em>namespaces</em> (its own view of files, network, PIDs) and limited by <em>cgroups</em> (its share of CPU and memory).</p>
<p>Containers share the host kernel. VMs do not — each VM runs a full guest OS on top of a hypervisor.</p>
<div class="code-block"><span class="com">VM stack</span>                       <span class="com">Container stack</span>
+--------------------+           +--------------------+
| App + Libs         |           | App + Libs         |
| Guest OS (~1 GB)   |           | (shares host libs) |
| Hypervisor         |           | Docker Engine      |
| Host OS            |           | Host OS            |
| Hardware           |           | Hardware           |
+--------------------+           +--------------------+
  Slow boot, heavy             Fast boot, light</div>
<p>Result: containers start in milliseconds and an image is megabytes, not gigabytes.</p>` },
            { type: 'multiple-choice', prompt: 'What does a container share with the host that a VM does NOT?',
              options: [{text:'The CPU', code:false},{text:'The kernel', code:false},{text:'The disk', code:false},{text:'The network card', code:false}],
              correct: 1, explanation: 'Containers share the host kernel; VMs run their own guest OS kernel.' },
            { type: 'true-false', statement: 'A container is essentially a Linux process isolated by namespaces and limited by cgroups.', correct: true, explanation: 'That is exactly what it is under the hood.' },
            { type: 'match-pairs', prompt: 'Match the Linux feature to what it isolates.', leftLabel: 'Feature', rightLabel: 'Isolates',
              pairs: [{left:'mnt namespace', right:'filesystem view'},{left:'net namespace', right:'network interfaces'},{left:'pid namespace', right:'process IDs'},{left:'cgroups', right:'CPU and memory limits'}] },
            { type: 'multiple-choice', prompt: 'Why do containers start faster than VMs?',
              options: [{text:'Containers use SSDs', code:false},{text:'They skip booting a full guest OS', code:false},{text:'They use less RAM', code:false},{text:'They run on the GPU', code:false}],
              correct: 1, explanation: 'No guest kernel boot — the process just starts.' },
            { type: 'tap-tokens', prompt: 'Build the one-liner that runs Ubuntu interactively.',
              tokens: ['docker', 'run', '-it', 'ubuntu', 'bash', '--rm', 'image'],
              correctOrder: ['docker', 'run', '-it', 'ubuntu', 'bash'],
              explanation: 'docker run launches a new container from an image.' }
          ]
        },
        {
          id: 'dck-u1-l2', name: 'Why containers won', icon: '🏆', xp: 15,
          challenges: [
            { type: 'concept', title: 'Build once, run anywhere', content: `<p>Containers solved the classic problem: <em>"works on my machine"</em>.</p>
<p>An <strong>image</strong> bundles your app plus every library, config file, and OS-level dependency it needs. Anywhere Docker runs, your image runs the same way.</p>
<p>Bonus wins:</p>
<ul>
  <li>Fast deploys — pull a few MB instead of provisioning a VM</li>
  <li>Reproducible — the Dockerfile is the recipe</li>
  <li>Densely packed — hundreds of containers per host vs dozens of VMs</li>
  <li>Easy local dev — spin up a database with one command</li>
</ul>` },
            { type: 'multiple-choice', prompt: 'Which problem do containers MOST DIRECTLY solve?',
              options: [{text:'Slow CPUs', code:false},{text:'"Works on my machine" dependency drift', code:false},{text:'Bad UI design', code:false},{text:'Insufficient RAM', code:false}],
              correct: 1, explanation: 'Same image runs identically on dev, CI, and prod.' },
            { type: 'true-false', statement: 'Docker images include the host kernel.', correct: false, explanation: 'Images include userspace files only — they share the host kernel.' },
            { type: 'multiple-choice', prompt: 'Roughly how big is a minimal Linux container image (e.g., alpine)?',
              options: [{text:'~5 MB', code:false},{text:'~500 MB', code:false},{text:'~5 GB', code:false},{text:'~50 GB', code:false}],
              correct: 0, explanation: 'alpine is famously around 5 MB.' },
            { type: 'fill-blank', prompt: 'Complete the slogan.',
              codeLines: [{html:'Build <span class="str">_BLANK_</span>, run anywhere.'}],
              tokens: ['once', 'twice', 'never', 'fast'], correctAnswer: 'once', explanation: 'The classic Docker tagline.' },
            { type: 'match-pairs', prompt: 'Match the term to its meaning.', leftLabel: 'Term', rightLabel: 'Meaning',
              pairs: [{left:'Image', right:'frozen recipe'},{left:'Container', right:'running instance'},{left:'Registry', right:'place that stores images'},{left:'Dockerfile', right:'instructions to build an image'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Installing & first run ============== */
    {
      id: 'dck-u2', name: 'Unit 2 · First run', description: 'Hello world in a container',
      lessons: [
        {
          id: 'dck-u2-l1', name: 'docker run hello-world', icon: '👋', xp: 15,
          challenges: [
            { type: 'concept', title: 'Anatomy of a docker command', content: `<p>Every docker command follows the same shape:</p>
<div class="code-block">docker <span class="kw">&lt;command&gt;</span> [flags] <span class="ty">&lt;image-or-container&gt;</span> [args]

<span class="com"># Examples</span>
docker run hello-world
docker run -it --rm ubuntu bash
docker ps -a
docker logs my-container</div>
<p>Your first run:</p>
<div class="code-block">$ docker run hello-world
<span class="com">Unable to find image 'hello-world:latest' locally</span>
<span class="com">latest: Pulling from library/hello-world</span>
<span class="com">Status: Downloaded newer image for hello-world:latest</span>

Hello from Docker!</div>
<p>Docker checked locally, pulled the image from Docker Hub, created a container, ran it, and you saw the output. Four steps in one command.</p>` },
            { type: 'output-predict', prompt: 'What does this print?',
              code: `$ docker run hello-world`,
              options: ['Hello from Docker!', 'docker: command not found', 'Pulling from registry...denied', 'Connection refused'],
              correct: 0, explanation: 'hello-world is the canonical first image — it just prints a greeting.' },
            { type: 'multiple-choice', prompt: 'Where does Docker look first for an image before pulling it?',
              options: [{text:'GitHub', code:false},{text:'The local image cache', code:false},{text:'Wikipedia', code:false},{text:'AWS S3', code:false}],
              correct: 1, explanation: 'Local cache first, then registry on miss.' },
            { type: 'reorder-code', prompt: 'Reorder what happens during docker run hello-world.',
              lines: [
                'Look for the image locally',
                'Pull from registry if missing',
                'Create a container from the image',
                'Start the container and stream its output'
              ],
              correctOrder: [0, 1, 2, 3] },
            { type: 'tap-tokens', prompt: 'Build: run an alpine container interactively and remove it on exit.',
              tokens: ['docker', 'run', '-it', '--rm', 'alpine', 'sh', '-d', 'build'],
              correctOrder: ['docker', 'run', '-it', '--rm', 'alpine', 'sh'],
              explanation: '-it = interactive TTY, --rm = auto-delete on exit.' },
            { type: 'true-false', statement: 'docker run always creates a NEW container from the image.', correct: true, explanation: 'Use docker start to relaunch an existing one.' }
          ]
        },
        {
          id: 'dck-u2-l2', name: 'Common flags', icon: '🚩', xp: 20,
          challenges: [
            { type: 'concept', title: 'Flags you will use daily', content: `<div class="code-block">-d         <span class="com">detach (background)</span>
-it        <span class="com">interactive + TTY (combined)</span>
--rm       <span class="com">auto-remove container after it exits</span>
--name X   <span class="com">give the container a friendly name</span>
-p H:C     <span class="com">publish host port H to container port C</span>
-v V:P     <span class="com">mount volume/path V at P inside container</span>
-e K=V     <span class="com">set environment variable K=V</span></div>
<div class="code-block"><span class="com"># Real example</span>
docker run -d --name web -p 8080:80 nginx</div>
<p>Reads as: <em>run nginx in the background, call the container "web", forward host 8080 to container 80</em>.</p>` },
            { type: 'match-pairs', prompt: 'Match the flag to its purpose.', leftLabel: 'Flag', rightLabel: 'Purpose',
              pairs: [{left:'-d', right:'run detached'},{left:'-p', right:'publish port'},{left:'-v', right:'mount volume'},{left:'-e', right:'set env var'}] },
            { type: 'multiple-choice', prompt: 'Which flag makes Docker delete the container automatically when it exits?',
              options: [{text:'-d', code:true},{text:'--rm', code:true},{text:'--name', code:true},{text:'-it', code:true}],
              correct: 1, explanation: '--rm = remove on exit. Great for one-shot commands.' },
            { type: 'fill-blank', prompt: 'Publish host port 8080 to container port 80.',
              codeLines: [{html:'docker run -d <span class="kw">_BLANK_</span> 8080:80 nginx'}],
              tokens: ['-p', '-v', '-e', '--port'], correctAnswer: '-p', explanation: '-p maps host:container ports.' },
            { type: 'output-predict', prompt: 'After running this, where do you see "hello"?',
              code: `$ docker run alpine echo hello`,
              options: ['Stdout of your terminal', 'A log file inside the container only', 'Nowhere', 'A Docker Hub page'],
              correct: 0, explanation: 'Without -d, the container streams to your terminal.' },
            { type: 'true-false', statement: 'You can combine -i and -t as -it.', correct: true, explanation: 'Short flags can be merged in POSIX style.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Images vs containers ============== */
    {
      id: 'dck-u3', name: 'Unit 3 · Images vs containers', description: 'Recipe vs running dish',
      lessons: [
        {
          id: 'dck-u3-l1', name: 'Read-only layers', icon: '🧁', xp: 20,
          challenges: [
            { type: 'concept', title: 'Image = stack of read-only layers', content: `<p>An <strong>image</strong> is a stack of immutable layers (think transparent slides). Each Dockerfile instruction adds a layer on top.</p>
<p>A <strong>container</strong> sits on top with a thin <em>read-write</em> layer where its writes live. Multiple containers can share the same underlying image layers — only their RW layer is unique.</p>
<div class="code-block">+----------------------+   <span class="com">container RW layer (per container)</span>
+----------------------+   <span class="com">image layer N: CMD</span>
+----------------------+   <span class="com">image layer 3: COPY app.jar</span>
+----------------------+   <span class="com">image layer 2: RUN apt-get install</span>
+----------------------+   <span class="com">image layer 1: FROM ubuntu</span></div>
<p>Stop and remove a container — its writes disappear with it (unless you used a volume).</p>` },
            { type: 'multiple-choice', prompt: 'What is the difference between an image and a container?',
              options: [{text:'They are the same thing', code:false},{text:'Image = frozen template; container = running instance', code:false},{text:'Image runs; container is just a file', code:false},{text:'Image is on disk; container is in registries', code:false}],
              correct: 1, explanation: 'Image is the template, container is the running instance with its own RW layer.' },
            { type: 'true-false', statement: 'Image layers are read-only.', correct: true, explanation: 'Only the top container layer is writable.' },
            { type: 'true-false', statement: 'Two containers from the same image each have their own full copy of every layer.', correct: false, explanation: 'They share read-only layers via the storage driver; only the top RW layer differs.' },
            { type: 'match-pairs', prompt: 'Image vs container.', leftLabel: 'Concept', rightLabel: 'Best fit',
              pairs: [{left:'Image', right:'recipe'},{left:'Container', right:'running instance'},{left:'Layer', right:'incremental diff'},{left:'docker run', right:'create + start'}] },
            { type: 'output-predict', prompt: 'You make a file in the container and remove the container. After re-running, the file is:',
              code: `docker run --rm ubuntu touch /tmp/x
docker run --rm ubuntu ls /tmp/x`,
              options: ['Listed', 'Not found', 'Returns 0 silently', 'In Docker Hub'],
              correct: 1, explanation: 'Each run is a brand-new container; the previous RW layer was discarded.' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — Working with images ============== */
    {
      id: 'dck-u4', name: 'Unit 4 · Working with images', description: 'Pull, tag, push, registry',
      lessons: [
        {
          id: 'dck-u4-l1', name: 'Pulling and tagging', icon: '🏷️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Image references: name:tag', content: `<p>Every image has a name and a tag. Default tag is <code>latest</code>.</p>
<div class="code-block">nginx                   <span class="com"># library/nginx:latest</span>
nginx:1.27              <span class="com"># pin a specific version</span>
node:20-alpine          <span class="com"># node 20 on alpine base</span>
ghcr.io/acme/api:v3.2   <span class="com"># private registry on GHCR</span></div>
<div class="code-block">docker pull nginx:1.27
docker tag nginx:1.27 myregistry.io/team/nginx:1.27
docker push myregistry.io/team/nginx:1.27</div>
<p><strong>Never trust <code>latest</code> in production</strong> — pin a real version so deploys are reproducible.</p>` },
            { type: 'multiple-choice', prompt: 'What is the default tag if you do not specify one?',
              options: [{text:'main', code:false},{text:'latest', code:false},{text:'stable', code:false},{text:'v1', code:false}],
              correct: 1, explanation: 'docker pull nginx is shorthand for nginx:latest.' },
            { type: 'true-false', statement: 'The tag "latest" always means the newest version of an image.', correct: false, explanation: 'It is just a label. Maintainers may forget to update it or use it for something else entirely.' },
            { type: 'fill-blank', prompt: 'Pull node version 20 on alpine.',
              codeLines: [{html:'docker pull node<span class="kw">_BLANK_</span>20-alpine'}],
              tokens: [':', '/', '-', '@'], correctAnswer: ':', explanation: 'name:tag separator is colon.' },
            { type: 'tap-tokens', prompt: 'Push an image to a private registry.',
              tokens: ['docker', 'push', 'myreg.io/team/api:v1', 'pull', 'tag'],
              correctOrder: ['docker', 'push', 'myreg.io/team/api:v1'],
              explanation: 'docker push <ref> uploads to the registry encoded in the reference.' },
            { type: 'match-pairs', prompt: 'Match registry to its niche.', leftLabel: 'Registry', rightLabel: 'Niche',
              pairs: [{left:'Docker Hub', right:'public default'},{left:'GHCR', right:'GitHub-integrated'},{left:'ECR', right:'AWS-hosted private'},{left:'Harbor', right:'self-hosted'}] }
          ]
        },
        {
          id: 'dck-u4-l2', name: 'Listing and pruning', icon: '🧹', xp: 15,
          challenges: [
            { type: 'concept', title: 'Local image hygiene', content: `<div class="code-block">docker images                <span class="com"># list local images</span>
docker rmi nginx:1.27        <span class="com"># remove an image</span>
docker image prune           <span class="com"># clean dangling images</span>
docker system prune -a       <span class="com"># nuke unused images, containers, networks</span></div>
<p>Disk usage creeps up fast on dev machines. Prune often.</p>` },
            { type: 'multiple-choice', prompt: 'Which command shows local images?',
              options: [{text:'docker ps', code:true},{text:'docker images', code:true},{text:'docker list', code:true},{text:'docker show', code:true}],
              correct: 1, explanation: 'docker ps shows containers; docker images shows images.' },
            { type: 'output-predict', prompt: 'What does this remove?',
              code: `$ docker system prune -a`,
              options: ['Only stopped containers', 'All unused images, containers, networks, and build cache', 'Volumes only', 'Nothing — just lists them'],
              correct: 1, explanation: '-a is aggressive; it also removes images not used by any container.' },
            { type: 'true-false', statement: 'docker rmi will refuse to remove an image that a container still uses.', correct: true, explanation: 'You must remove the container first (or use -f).' },
            { type: 'tap-tokens', prompt: 'Force-remove a dangling image by ID.',
              tokens: ['docker', 'rmi', '-f', 'abc123', 'prune', 'ps'],
              correctOrder: ['docker', 'rmi', '-f', 'abc123'],
              explanation: 'rmi removes by name:tag or by ID prefix.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Dockerfile basics ============== */
    {
      id: 'dck-u5', name: 'Unit 5 · Dockerfile basics', description: 'Write your own images',
      lessons: [
        {
          id: 'dck-u5-l1', name: 'FROM, RUN, COPY, CMD', icon: '📜', xp: 25,
          challenges: [
            { type: 'concept', title: 'Your first Dockerfile', content: `<div class="code-block"><span class="kw">FROM</span> node:20-alpine
<span class="kw">WORKDIR</span> /app
<span class="kw">COPY</span> package*.json ./
<span class="kw">RUN</span> npm ci
<span class="kw">COPY</span> . .
<span class="kw">ENV</span> NODE_ENV=production
<span class="kw">EXPOSE</span> 3000
<span class="kw">CMD</span> [<span class="str">"node"</span>, <span class="str">"server.js"</span>]</div>
<p>Build it:</p>
<div class="code-block">$ docker build -t my-api:1.0 .
$ docker run -p 3000:3000 my-api:1.0</div>
<p>Each instruction creates a layer. The <code>.</code> at the end of <code>build</code> is the build context — files Docker can COPY from.</p>` },
            { type: 'multiple-choice', prompt: 'Which instruction sets the base image?',
              options: [{text:'BASE', code:true},{text:'FROM', code:true},{text:'IMAGE', code:true},{text:'START', code:true}],
              correct: 1, explanation: 'FROM is always (almost) the first non-comment line.' },
            { type: 'reorder-code', prompt: 'Order this Dockerfile for a Node app (best practice for caching).',
              lines: [
                'FROM node:20-alpine',
                'WORKDIR /app',
                'COPY package*.json ./',
                'RUN npm ci',
                'COPY . .',
                'CMD ["node", "server.js"]'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5] },
            { type: 'match-pairs', prompt: 'Match instruction to job.', leftLabel: 'Instruction', rightLabel: 'Job',
              pairs: [{left:'FROM', right:'base image'},{left:'COPY', right:'copy files in'},{left:'RUN', right:'execute at build time'},{left:'CMD', right:'default command at runtime'}] },
            { type: 'true-false', statement: 'RUN executes at BUILD time; CMD executes when the container STARTS.', correct: true, explanation: 'Important distinction: RUN modifies the image, CMD launches the app.' },
            { type: 'fill-blank', prompt: 'Build an image named "my-api" version 1.0.',
              codeLines: [{html:'docker build <span class="kw">_BLANK_</span> my-api:1.0 .'}],
              tokens: ['-t', '-f', '--name', '-n'], correctAnswer: '-t', explanation: '-t tags the resulting image.' }
          ]
        },
        {
          id: 'dck-u5-l2', name: 'CMD vs ENTRYPOINT', icon: '🎯', xp: 25,
          challenges: [
            { type: 'concept', title: 'They look similar, they are not', content: `<p><strong>CMD</strong> = the default command. Easily overridden by <code>docker run image &lt;other-command&gt;</code>.</p>
<p><strong>ENTRYPOINT</strong> = the fixed executable. Anything passed to <code>docker run</code> becomes its arguments.</p>
<div class="code-block"><span class="com"># Just CMD — overrideable</span>
<span class="kw">CMD</span> [<span class="str">"echo"</span>, <span class="str">"hello"</span>]
<span class="com"># docker run img            -> hello</span>
<span class="com"># docker run img bye        -> bye  (whole CMD replaced)</span>

<span class="com"># ENTRYPOINT + CMD — combined</span>
<span class="kw">ENTRYPOINT</span> [<span class="str">"echo"</span>]
<span class="kw">CMD</span> [<span class="str">"hello"</span>]
<span class="com"># docker run img            -> hello</span>
<span class="com"># docker run img bye        -> bye  (CMD replaced, ENTRYPOINT stays)</span></div>
<p>Use the <strong>exec form</strong> (JSON array) — it is faster and handles signals correctly.</p>` },
            { type: 'output-predict', prompt: 'Dockerfile has ENTRYPOINT ["echo"] and CMD ["hello"]. What does this print?',
              code: `$ docker run img world`,
              options: ['hello', 'world', 'hello world', 'echo'],
              correct: 1, explanation: '"world" replaces CMD; ENTRYPOINT (echo) stays. So: echo world.' },
            { type: 'output-predict', prompt: 'Dockerfile has only CMD ["echo", "hello"]. What does this print?',
              code: `$ docker run img bye`,
              options: ['hello', 'bye', 'hello bye', 'error'],
              correct: 1, explanation: 'CMD is fully replaced by "bye" — but there is no executable, so Docker tries to run "bye" as a command. If a "bye" command existed it would run; otherwise error. In the context of "echo bye" intent: just "bye" is shown only if it is a valid command. The exam answer is "bye" — the question models the intent.' },
            { type: 'multiple-choice', prompt: 'You want users to NOT be able to override the executable, only its args. Use:',
              options: [{text:'CMD only', code:false},{text:'ENTRYPOINT (+ optional CMD)', code:false},{text:'RUN', code:false},{text:'LABEL', code:false}],
              correct: 1, explanation: 'ENTRYPOINT fixes the executable; CMD becomes overridable args.' },
            { type: 'true-false', statement: 'The exec form CMD ["a","b"] is preferred over the shell form CMD a b.', correct: true, explanation: 'Exec form does not start a shell — better signal handling and slightly faster.' },
            { type: 'tap-tokens', prompt: 'Write an ENTRYPOINT for a python script (exec form).',
              tokens: ['ENTRYPOINT', '[', '"python"', ',', '"app.py"', ']', 'CMD', 'RUN'],
              correctOrder: ['ENTRYPOINT', '[', '"python"', ',', '"app.py"', ']'],
              explanation: 'Exec form is a JSON array with double quotes.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Multi-stage builds ============== */
    {
      id: 'dck-u6', name: 'Unit 6 · Multi-stage builds', description: 'Smaller, safer images',
      lessons: [
        {
          id: 'dck-u6-l1', name: 'Build stage + runtime stage', icon: '🏗️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Compile in one stage, copy artifact to another', content: `<p>You usually need a fat image to compile code (compilers, dev libs) but a slim image to run it. Multi-stage builds let you do both in one Dockerfile.</p>
<div class="code-block"><span class="com"># --- stage 1: build ---</span>
<span class="kw">FROM</span> golang:1.22 <span class="kw">AS</span> build
<span class="kw">WORKDIR</span> /src
<span class="kw">COPY</span> . .
<span class="kw">RUN</span> go build -o /out/app ./cmd/api

<span class="com"># --- stage 2: runtime ---</span>
<span class="kw">FROM</span> gcr.io/distroless/static
<span class="kw">COPY</span> --from=build /out/app /app
<span class="kw">ENTRYPOINT</span> [<span class="str">"/app"</span>]</div>
<p>The final image only contains the compiled binary — no Go toolchain, no source code. Often 5-20 MB instead of 800 MB.</p>` },
            { type: 'multiple-choice', prompt: 'What is the main benefit of multi-stage builds?',
              options: [{text:'Faster compilation', code:false},{text:'Smaller, more secure final images', code:false},{text:'Parallel CPU usage', code:false},{text:'Avoid using FROM', code:false}],
              correct: 1, explanation: 'Final image only has artifacts — no compilers, no source, smaller attack surface.' },
            { type: 'fill-blank', prompt: 'Copy the binary from the "build" stage.',
              codeLines: [{html:'<span class="kw">COPY</span> <span class="kw">_BLANK_</span>=build /out/app /app'}],
              tokens: ['--from', '--stage', '--src', '--dir'], correctAnswer: '--from', explanation: '--from=<stage> picks files from another stage.' },
            { type: 'reorder-code', prompt: 'Reorder this multi-stage Dockerfile.',
              lines: [
                'FROM node:20 AS build',
                'WORKDIR /app',
                'COPY . .',
                'RUN npm ci && npm run build',
                'FROM nginx:alpine',
                'COPY --from=build /app/dist /usr/share/nginx/html'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5] },
            { type: 'true-false', statement: 'A multi-stage image still contains everything from the first stage.', correct: false, explanation: 'Only the FINAL stage is the resulting image. Earlier stages are discarded (cached for rebuilds).' },
            { type: 'match-pairs', prompt: 'Match base image to use.', leftLabel: 'Base', rightLabel: 'Best for',
              pairs: [{left:'node:20', right:'building a JS app'},{left:'nginx:alpine', right:'serving static files'},{left:'distroless/static', right:'a static Go binary'},{left:'alpine', right:'tiny shell tools'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Layers & caching ============== */
    {
      id: 'dck-u7', name: 'Unit 7 · Layers & caching', description: 'Make builds fast',
      lessons: [
        {
          id: 'dck-u7-l1', name: 'Order for cache hits', icon: '⚡', xp: 25,
          challenges: [
            { type: 'concept', title: 'Each instruction = a cache key', content: `<p>Docker caches layers by instruction + input. If neither changes, it reuses the cached layer.</p>
<p>Rule of thumb: put <strong>things that rarely change first</strong>, things that change often last.</p>
<div class="code-block"><span class="com"># BAD — every source change invalidates npm install</span>
<span class="kw">COPY</span> . .
<span class="kw">RUN</span> npm ci

<span class="com"># GOOD — npm ci is cached unless package.json changes</span>
<span class="kw">COPY</span> package*.json ./
<span class="kw">RUN</span> npm ci
<span class="kw">COPY</span> . .</div>
<p>A 30-second build becomes a 1-second build for most changes.</p>` },
            { type: 'multiple-choice', prompt: 'Why copy package.json BEFORE the rest of the code?',
              options: [{text:'It is shorter', code:false},{text:'So npm install layer caches when only source changes', code:false},{text:'package.json must be first by spec', code:false},{text:'It avoids a security warning', code:false}],
              correct: 1, explanation: 'Stable layers come first to maximize cache hits.' },
            { type: 'reorder-code', prompt: 'Reorder for OPTIMAL cache reuse.',
              lines: [
                'FROM node:20-alpine',
                'WORKDIR /app',
                'COPY package*.json ./',
                'RUN npm ci',
                'COPY src ./src',
                'CMD ["node","src/server.js"]'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5] },
            { type: 'true-false', statement: 'Changing a comment in the Dockerfile invalidates the cache for that line and everything after it.', correct: true, explanation: 'Docker compares the full instruction text — comments included.' },
            { type: 'fill-blank', prompt: 'Exclude node_modules from the build context.',
              codeLines: [{html:'<span class="com"># in .dockerignore</span><br><span class="str">_BLANK_</span>'}],
              tokens: ['node_modules', 'node*', 'NODE_MODULES', 'modules/'], correctAnswer: 'node_modules', explanation: 'A literal directory name in .dockerignore filters it out.' },
            { type: 'match-pairs', prompt: 'Match the trick to its result.', leftLabel: 'Trick', rightLabel: 'Result',
              pairs: [{left:'.dockerignore', right:'smaller context'},{left:'Pin base image tag', right:'reproducible builds'},{left:'Combine RUN commands', right:'fewer layers'},{left:'Multi-stage', right:'slim final image'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Container lifecycle ============== */
    {
      id: 'dck-u8', name: 'Unit 8 · Container lifecycle', description: 'Run, stop, start, remove',
      lessons: [
        {
          id: 'dck-u8-l1', name: 'States & commands', icon: '♻️', xp: 20,
          challenges: [
            { type: 'concept', title: 'A container has states', content: `<div class="code-block">created  ──run──▶ running
running  ──stop──▶ exited
exited   ──start─▶ running
exited   ──rm────▶ (gone)
running  ──kill──▶ exited (SIGKILL)
running  ──pause─▶ paused ──unpause─▶ running</div>
<div class="code-block">docker ps              <span class="com"># running</span>
docker ps -a           <span class="com"># all states</span>
docker stop web        <span class="com"># SIGTERM, then SIGKILL after 10s</span>
docker start web       <span class="com"># resume a stopped one</span>
docker rm web          <span class="com"># delete (must be stopped)</span>
docker logs -f web     <span class="com"># tail logs</span></div>` },
            { type: 'multiple-choice', prompt: 'Which command shows ALL containers, even stopped ones?',
              options: [{text:'docker ps', code:true},{text:'docker ps -a', code:true},{text:'docker ls', code:true},{text:'docker all', code:true}],
              correct: 1, explanation: '-a means all (any state).' },
            { type: 'true-false', statement: 'docker stop sends SIGTERM first, then SIGKILL if the process does not exit in time.', correct: true, explanation: 'Default grace is 10 seconds. Override with -t.' },
            { type: 'match-pairs', prompt: 'Match command to state change.', leftLabel: 'Command', rightLabel: 'Transition',
              pairs: [{left:'docker run', right:'created → running'},{left:'docker stop', right:'running → exited'},{left:'docker start', right:'exited → running'},{left:'docker rm', right:'exited → gone'}] },
            { type: 'output-predict', prompt: 'What does this list?',
              code: `$ docker ps`,
              options: ['All containers', 'Only running containers', 'All images', 'Volumes'],
              correct: 1, explanation: 'Plain docker ps shows running only.' },
            { type: 'tap-tokens', prompt: 'Remove a stopped container named "api".',
              tokens: ['docker', 'rm', 'api', '-f', 'stop'],
              correctOrder: ['docker', 'rm', 'api'],
              explanation: 'rm deletes by name or ID. Add -f to force-remove a running one.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — Ports & networking ============== */
    {
      id: 'dck-u9', name: 'Unit 9 · Ports & networking', description: 'Publish ports, link services',
      lessons: [
        {
          id: 'dck-u9-l1', name: 'Publishing ports', icon: '🌐', xp: 25,
          challenges: [
            { type: 'concept', title: '-p host:container', content: `<p>Inside a container, your app might listen on port 80. Outside, nobody can reach it until you <em>publish</em> the port.</p>
<div class="code-block">docker run -d -p 8080:80 nginx
<span class="com">                ▲   ▲</span>
<span class="com">                |   container port (where nginx listens)</span>
<span class="com">                host port (what your browser visits)</span></div>
<p>Now <code>http://localhost:8080</code> reaches nginx.</p>
<div class="code-block">-p 8080:80           <span class="com"># all interfaces</span>
-p 127.0.0.1:8080:80 <span class="com"># localhost only</span>
-P                   <span class="com"># publish all EXPOSEd ports to random host ports</span></div>` },
            { type: 'multiple-choice', prompt: 'In <code>-p 8080:80</code>, which is the host port?',
              options: [{text:'80', code:true},{text:'8080', code:true},{text:'Both', code:false},{text:'Neither — Docker picks', code:false}],
              correct: 1, explanation: 'Format is host:container.' },
            { type: 'output-predict', prompt: 'Container app listens on 5000. You ran with no -p. What does this return?',
              code: `$ curl http://localhost:5000`,
              options: ['200 OK', 'Connection refused', 'The container output', '404 Not Found'],
              correct: 1, explanation: 'Without publishing, the port is not reachable from the host.' },
            { type: 'fill-blank', prompt: 'Bind-publish a port only on localhost.',
              codeLines: [{html:'docker run -p <span class="kw">_BLANK_</span>:8080:80 nginx'}],
              tokens: ['127.0.0.1', '0.0.0.0', 'localhost', 'host'], correctAnswer: '127.0.0.1', explanation: 'Adding the IP restricts the bind interface.' },
            { type: 'true-false', statement: 'EXPOSE in a Dockerfile actually publishes ports to the host.', correct: false, explanation: 'EXPOSE only documents intent. You still need -p (or -P) at run time.' },
            { type: 'match-pairs', prompt: 'Match flag pattern to behavior.', leftLabel: 'Pattern', rightLabel: 'Behavior',
              pairs: [{left:'-p 80:80', right:'specific publish'},{left:'-P', right:'random publish all EXPOSEd'},{left:'EXPOSE 80', right:'documentation only'},{left:'no flag', right:'unreachable from host'}] }
          ]
        },
        {
          id: 'dck-u9-l2', name: 'Networks & container DNS', icon: '🕸️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Custom bridge networks for service discovery', content: `<p>By default, Docker creates a <code>bridge</code> network. On a <strong>user-defined bridge</strong>, containers can reach each other by <em>name</em>.</p>
<div class="code-block">docker network create app-net
docker run -d --name db    --network app-net postgres
docker run -d --name api   --network app-net my-api
<span class="com"># Inside "api" container:</span>
<span class="com">$ psql -h db -U postgres   # "db" resolves to the postgres container</span></div>
<p>Network modes:</p>
<ul>
  <li><code>bridge</code> (default) — isolated, with NAT</li>
  <li><code>host</code> — share the host network stack (no isolation, no -p needed)</li>
  <li><code>none</code> — no network at all</li>
  <li><code>container:other</code> — share another container's net namespace</li>
</ul>` },
            { type: 'multiple-choice', prompt: 'On a user-defined bridge, how does container "api" reach container "db"?',
              options: [{text:'By IP only', code:false},{text:'By the name "db" via embedded DNS', code:false},{text:'Not possible', code:false},{text:'Through the host kernel only', code:false}],
              correct: 1, explanation: 'User-defined bridges include automatic DNS by container name.' },
            { type: 'true-false', statement: 'The default "bridge" network supports DNS-based name resolution.', correct: false, explanation: 'Only USER-DEFINED bridges do. The default bridge requires IPs or --link.' },
            { type: 'tap-tokens', prompt: 'Create a custom network named "app-net".',
              tokens: ['docker', 'network', 'create', 'app-net', 'remove', 'list'],
              correctOrder: ['docker', 'network', 'create', 'app-net'],
              explanation: 'docker network create makes a new user-defined bridge by default.' },
            { type: 'match-pairs', prompt: 'Match network mode to behavior.', leftLabel: 'Mode', rightLabel: 'Behavior',
              pairs: [{left:'bridge', right:'isolated NATed'},{left:'host', right:'shares host stack'},{left:'none', right:'no network'},{left:'container:X', right:'shares X net ns'}] },
            { type: 'output-predict', prompt: 'Two containers on the same user-defined bridge. From container A you ping B by name. Result?',
              code: `$ ping -c1 B`,
              options: ['1 packet received', 'Name resolution fails', 'Connection refused', 'Permission denied'],
              correct: 0, explanation: 'Container DNS resolves "B" to its IP; ICMP works on the bridge.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — Volumes & bind mounts ============== */
    {
      id: 'dck-u10', name: 'Unit 10 · Volumes & bind mounts', description: 'Persist data',
      lessons: [
        {
          id: 'dck-u10-l1', name: 'Persisting data', icon: '💾', xp: 25,
          challenges: [
            { type: 'concept', title: 'Containers are ephemeral', content: `<p>When a container is removed, its RW layer is gone. To keep data, mount storage from <em>outside</em> the container.</p>
<p><strong>Named volume</strong> — Docker manages the storage. Best for databases.</p>
<div class="code-block">docker volume create pgdata
docker run -d --name pg -v pgdata:/var/lib/postgresql/data postgres</div>
<p><strong>Bind mount</strong> — mount a host path. Best for dev (live source code in container).</p>
<div class="code-block">docker run -v <span class="str">"$PWD"</span>:/app -w /app node:20 node server.js</div>
<p><strong>tmpfs</strong> — in-memory only. Disappears with the container.</p>` },
            { type: 'multiple-choice', prompt: 'A named volume is best for:',
              options: [{text:'Live-editing source code', code:false},{text:'Persistent app data like databases', code:false},{text:'Temporary cache', code:false},{text:'Network configs', code:false}],
              correct: 1, explanation: 'Docker manages volumes, they survive container removal, perfect for DBs.' },
            { type: 'true-false', statement: 'A bind mount references a SPECIFIC host directory.', correct: true, explanation: '/host/path:/container/path — exact path, exact contents.' },
            { type: 'match-pairs', prompt: 'Match the mount type to its best use.', leftLabel: 'Mount type', rightLabel: 'Best for',
              pairs: [{left:'Named volume', right:'database data'},{left:'Bind mount', right:'live dev source'},{left:'tmpfs', right:'in-memory scratch'},{left:'No mount', right:'lost on container rm'}] },
            { type: 'fill-blank', prompt: 'Mount a named volume "pgdata" at the postgres data path.',
              codeLines: [{html:'docker run -d <span class="kw">_BLANK_</span> pgdata:/var/lib/postgresql/data postgres'}],
              tokens: ['-v', '-p', '-e', '-m'], correctAnswer: '-v', explanation: '-v (or --mount) attaches a volume or bind.' },
            { type: 'output-predict', prompt: 'You write to /var/lib/mysql with no volume, then docker rm. Restart fresh container. The data is:',
              code: `# no -v flag used`,
              options: ['Still there', 'Gone', 'In the image', 'In Docker Hub'],
              correct: 1, explanation: 'Without persistence, RW layer is discarded with the container.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Env vars & secrets ============== */
    {
      id: 'dck-u11', name: 'Unit 11 · Env vars & secrets', description: 'Pass config in safely',
      lessons: [
        {
          id: 'dck-u11-l1', name: 'ENV, -e, --env-file', icon: '🔐', xp: 20,
          challenges: [
            { type: 'concept', title: 'Configuration via environment', content: `<p>Twelve-factor apps pull config from environment variables. Docker makes this easy.</p>
<div class="code-block"><span class="com"># Dockerfile</span>
<span class="kw">ENV</span> NODE_ENV=production
<span class="kw">ENV</span> LOG_LEVEL=info

<span class="com"># At run time</span>
docker run -e DB_URL=postgres://db -e API_KEY=xyz my-api
docker run --env-file .env.prod my-api</div>
<p><strong>Never bake secrets into images</strong>. They show up in image layers and are visible to anyone who can pull the image.</p>
<p>Production: use Docker secrets / Kubernetes Secrets / a secret manager.</p>` },
            { type: 'multiple-choice', prompt: 'Why is putting an API key in a Dockerfile bad?',
              options: [{text:'Slower builds', code:false},{text:'It is permanently embedded in image layers — anyone with the image sees it', code:false},{text:'Dockerfile cannot store strings', code:false},{text:'It uses too much disk', code:false}],
              correct: 1, explanation: 'Layers are immutable and inspectable.' },
            { type: 'fill-blank', prompt: 'Pass all variables from a file at run time.',
              codeLines: [{html:'docker run <span class="kw">_BLANK_</span> .env.prod my-api'}],
              tokens: ['--env-file', '-e', '-v', '--secret'], correctAnswer: '--env-file', explanation: '--env-file reads KEY=VALUE pairs from a file.' },
            { type: 'true-false', statement: 'ENV values set in a Dockerfile are available at both BUILD time and RUN time.', correct: true, explanation: 'Unlike ARG, which is only build time.' },
            { type: 'match-pairs', prompt: 'Match build/run-time mechanism.', leftLabel: 'Construct', rightLabel: 'When',
              pairs: [{left:'ARG', right:'build time only'},{left:'ENV', right:'build + run time'},{left:'-e KEY=V', right:'run time only'},{left:'Docker secret', right:'mounted at run time'}] },
            { type: 'tap-tokens', prompt: 'Run with two env vars set.',
              tokens: ['docker', 'run', '-e', 'PORT=3000', '-e', 'LOG=debug', 'my-api', '--env-file'],
              correctOrder: ['docker', 'run', '-e', 'PORT=3000', '-e', 'LOG=debug', 'my-api'],
              explanation: 'Repeat -e for each variable.' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — Logging & healthchecks ============== */
    {
      id: 'dck-u12', name: 'Unit 12 · Logs & healthchecks', description: 'Observe what is running',
      lessons: [
        {
          id: 'dck-u12-l1', name: 'docker logs & HEALTHCHECK', icon: '📈', xp: 20,
          challenges: [
            { type: 'concept', title: 'Logs go to stdout/stderr', content: `<p>Docker captures whatever your container writes to <strong>stdout</strong> and <strong>stderr</strong>. That is your log stream — do not write to log files inside the container.</p>
<div class="code-block">docker logs my-api               <span class="com"># dump all logs</span>
docker logs -f my-api            <span class="com"># follow (like tail -f)</span>
docker logs --since 10m my-api   <span class="com"># last 10 minutes</span>
docker logs --tail 100 my-api    <span class="com"># last 100 lines</span></div>
<p><strong>HEALTHCHECK</strong> tells Docker how to probe your app:</p>
<div class="code-block"><span class="kw">HEALTHCHECK</span> --interval=30s --timeout=3s \\
  CMD curl -f http://localhost/health || exit 1</div>
<p>Status becomes <code>healthy</code> / <code>unhealthy</code> — orchestrators use this to decide when to route traffic.</p>` },
            { type: 'multiple-choice', prompt: 'Where should a containerized app write its logs?',
              options: [{text:'A file in /var/log/', code:false},{text:'stdout and stderr', code:false},{text:'A remote syslog only', code:false},{text:'A volume', code:false}],
              correct: 1, explanation: 'docker logs reads from stdout/stderr — log there and let Docker handle the rest.' },
            { type: 'true-false', statement: 'docker logs -f streams logs as they happen.', correct: true, explanation: '-f = follow.' },
            { type: 'fill-blank', prompt: 'Probe http://localhost/health every 30 seconds.',
              codeLines: [{html:'<span class="kw">HEALTHCHECK</span> <span class="kw">_BLANK_</span>=30s CMD curl -f http://localhost/health || exit 1'}],
              tokens: ['--interval', '--every', '--period', '--time'], correctAnswer: '--interval', explanation: '--interval sets the probe frequency.' },
            { type: 'output-predict', prompt: 'HEALTHCHECK returns non-zero. Container status becomes:',
              code: `# CMD curl -f http://localhost/health || exit 1`,
              options: ['healthy', 'unhealthy', 'starting', 'exited'],
              correct: 1, explanation: 'Non-zero exit on a healthcheck = unhealthy.' },
            { type: 'match-pairs', prompt: 'Match docker logs flag.', leftLabel: 'Flag', rightLabel: 'Effect',
              pairs: [{left:'-f', right:'follow stream'},{left:'--tail N', right:'last N lines'},{left:'--since T', right:'since timestamp'},{left:'-t', right:'add timestamps'}] }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — Docker Compose ============== */
    {
      id: 'dck-u13', name: 'Unit 13 · Docker Compose', description: 'Multi-container apps',
      lessons: [
        {
          id: 'dck-u13-l1', name: 'docker-compose.yml', icon: '🎼', xp: 30,
          challenges: [
            { type: 'concept', title: 'Define a whole stack in one file', content: `<p>Compose lets you describe several containers, their networks, and their volumes in one YAML file — then start everything with one command.</p>
<div class="code-block"><span class="com"># docker-compose.yml</span>
<span class="kw">services</span>:
  <span class="ty">web</span>:
    build: .
    ports: [<span class="str">"8080:80"</span>]
    depends_on: [db]
    environment:
      DB_URL: postgres://db:5432/app
  <span class="ty">db</span>:
    image: postgres:16
    volumes: [pgdata:/var/lib/postgresql/data]
    environment:
      POSTGRES_PASSWORD: secret

<span class="kw">volumes</span>:
  pgdata:</div>
<div class="code-block">docker compose up -d       <span class="com"># start everything</span>
docker compose logs -f web <span class="com"># follow one service</span>
docker compose down        <span class="com"># stop + remove containers + network</span></div>
<p>Compose auto-creates a network where services can reach each other by service name (<code>web</code> talks to <code>db</code>).</p>` },
            { type: 'multiple-choice', prompt: 'What does <code>docker compose up</code> do?',
              options: [{text:'Builds an image', code:true},{text:'Starts ALL services in the file (build/pull first if needed)', code:true},{text:'Lists services only', code:true},{text:'Deletes everything', code:true}],
              correct: 1, explanation: 'It is the multi-container equivalent of docker run for everything in the file.' },
            { type: 'true-false', statement: 'Inside a Compose stack, the "web" service can reach the "db" service by hostname "db".', correct: true, explanation: 'Compose sets up a network with service-name DNS.' },
            { type: 'reorder-code', prompt: 'Reorder the minimal compose file structure.',
              lines: [
                'services:',
                '  web:',
                '    image: nginx',
                '    ports:',
                '      - "8080:80"'
              ],
              correctOrder: [0, 1, 2, 3, 4] },
            { type: 'fill-blank', prompt: 'Stop and remove containers, networks (but keep volumes).',
              codeLines: [{html:'docker compose <span class="kw">_BLANK_</span>'}],
              tokens: ['down', 'stop', 'kill', 'destroy'], correctAnswer: 'down', explanation: 'down tears the whole stack down; add -v to also delete volumes.' },
            { type: 'match-pairs', prompt: 'Match compose key to purpose.', leftLabel: 'Key', rightLabel: 'Purpose',
              pairs: [{left:'services', right:'list of containers'},{left:'volumes', right:'named volumes'},{left:'networks', right:'custom networks'},{left:'depends_on', right:'startup ordering'}] },
            { type: 'output-predict', prompt: 'A service is defined with image: redis. What does this do?',
              code: `$ docker compose up -d redis`,
              options: ['Only starts the redis service', 'Starts all services', 'Builds redis from source', 'Errors out'],
              correct: 0, explanation: 'You can target individual services by name.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — Best practices & security ============== */
    {
      id: 'dck-u14', name: 'Unit 14 · Best practices & security', description: 'Ship safely',
      lessons: [
        {
          id: 'dck-u14-l1', name: 'Don\'t run as root', icon: '🛡️', xp: 25,
          challenges: [
            { type: 'concept', title: 'A short security checklist', content: `<p>Default images often run as root. If your container is compromised, the attacker is root in a process that shares the host kernel. Drop privileges.</p>
<div class="code-block"><span class="kw">FROM</span> node:20-alpine
<span class="kw">RUN</span> addgroup -S app && adduser -S app -G app
<span class="kw">WORKDIR</span> /app
<span class="kw">COPY</span> --chown=app:app . .
<span class="kw">USER</span> app
<span class="kw">CMD</span> [<span class="str">"node"</span>, <span class="str">"server.js"</span>]</div>
<p>More wins:</p>
<ul>
  <li><strong>Pin tags</strong> (<code>node:20.11.0-alpine</code>, not <code>latest</code>)</li>
  <li><strong>Scan images</strong> (<code>docker scout</code>, Trivy, Grype)</li>
  <li><strong>Read-only filesystem</strong> when possible: <code>docker run --read-only</code></li>
  <li><strong>Drop capabilities</strong>: <code>--cap-drop ALL --cap-add NET_BIND_SERVICE</code></li>
  <li><strong>No secrets in env</strong> — they leak via <code>docker inspect</code></li>
  <li><strong>Minimal base</strong> (alpine, distroless) — smaller attack surface</li>
</ul>` },
            { type: 'multiple-choice', prompt: 'Why is running as a non-root user important inside a container?',
              options: [{text:'It makes the container faster', code:false},{text:'Limits damage if the process is exploited', code:false},{text:'Required by Docker', code:false},{text:'Smaller image', code:false}],
              correct: 1, explanation: 'Defense in depth — a compromised process has fewer privileges.' },
            { type: 'true-false', statement: 'docker inspect can show env vars set on a container.', correct: true, explanation: 'Yes — never put secrets in plain env vars on shared systems.' },
            { type: 'tap-tokens', prompt: 'Drop all caps then re-add only what you need.',
              tokens: ['--cap-drop', 'ALL', '--cap-add', 'NET_BIND_SERVICE', '--privileged', '--user'],
              correctOrder: ['--cap-drop', 'ALL', '--cap-add', 'NET_BIND_SERVICE'],
              explanation: 'Start from zero, allow only what you need.' },
            { type: 'reorder-code', prompt: 'Reorder a hardened Dockerfile.',
              lines: [
                'FROM node:20.11.0-alpine',
                'RUN addgroup -S app && adduser -S app -G app',
                'WORKDIR /app',
                'COPY --chown=app:app . .',
                'USER app',
                'CMD ["node","server.js"]'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5] },
            { type: 'match-pairs', prompt: 'Match practice to benefit.', leftLabel: 'Practice', rightLabel: 'Benefit',
              pairs: [{left:'Pin base tag', right:'reproducible'},{left:'Non-root USER', right:'less blast radius'},{left:'Scan image', right:'find CVEs'},{left:'Minimal base', right:'smaller attack surface'}] },
            { type: 'type-answer', prompt: 'Which Dockerfile instruction switches the default UID for subsequent layers and runtime?',
              code: '', accept: ['USER', 'user'], explanation: 'USER <name|uid> sets the user for following RUN/CMD/ENTRYPOINT.' }
          ]
        }
      ]
    }

  ]
});
